import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import { CameraType } from 'expo-camera/build/legacy/Camera.types';

const CustomCamera: React.FC<{ onClose: () => void; onSubmitted: () => void }> = ({ onClose, onSubmitted }) => {
    const [cameraType, setCameraType] = useState<CameraType>(CameraType.back);
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef<CameraView | null>(null);
    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [submitLoading, setSubmitLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!permission) {
            requestPermission();
        }
    }, [permission]);

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View className="flex-1 justify-center items-center bg-black">
                <Text className="text-white">We need your permission to show the camera</Text>
                <TouchableOpacity onPress={requestPermission} className="bg-blue-600 p-3 rounded">
                    <Text className="text-white">Grant Permission</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const takePhoto = async () => {
        if (cameraRef.current) {
            setLoading(true);
            const photo = await cameraRef.current.takePictureAsync({ quality: 0.7 });
            setPhotoUri(photo.uri);
            setLoading(false);
        }
    };

    const handleSubmit = async () => {
        setSubmitLoading(true);
        setTimeout(() => {
            setIsSubmitted(true);
            setSubmitLoading(false);
            onSubmitted();
        }, 2000);
    };

    return (
        <View className="flex-1 bg-black">
            <Text className='text-white'>Personal Id</Text>
            {!photoUri ? (
                <View className="flex-1 justify-center items-center">
                    {/* Square Overlay for Camera */}
                    <View className="relative">
                        <CameraView ref={cameraRef} style={{ width: 300, height: 300 }}>
                            {/* Text Component */}
                            <View className="absolute top-4 left-0 right-0 flex-row justify-between p-4">
                                <TouchableOpacity onPress={onClose} className="bg-red-600 p-2 rounded-full">
                                    <Text className="text-white">Close</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Square Overlay */}
                            <View className="absolute left-0 top-0 border-2 border-white rounded w-full h-full z-10" />

                            {/* Take Photo Button */}
                            <TouchableOpacity onPress={takePhoto} className='absolute bottom-5 left-[40%] transform 
                            -translate-x-1/2 bg-transparent border border-white p-5 rounded-full'>
                                <FontAwesome name="camera" size={16} color="white" />
                            </TouchableOpacity>

                            {/* Loading Indicator for Taking Photo */}
                            {loading && (
                                <View className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70">
                                    <ActivityIndicator size="large" color="white" />
                                    <Text className="text-white mt-2">Taking Photo...</Text>
                                </View>
                            )}
                        </CameraView>
                    </View>
                </View>
            ) : (
                <View className="flex-1 justify-center items-center">
                    <Image source={{ uri: photoUri }} className="w-72 h-72 border-4 border-white rounded" resizeMode="contain" />

                    {/* Retake Button */}
                    {!isSubmitted && (
                        <TouchableOpacity onPress={() => setPhotoUri(null)} className="absolute top-10 left-5 bg-red-600 p-3 rounded">
                            <Text className="text-white">Retake</Text>
                        </TouchableOpacity>
                    )}

                    {/* Submit Button */}
                    {!isSubmitted && (
                        <TouchableOpacity onPress={handleSubmit} className="absolute bottom-10 bg-green-600 p-3 rounded">
                            <Text className="text-white">Submit and Close</Text>
                        </TouchableOpacity>
                    )}

                    {/* Loading Indicator for Submission */}
                    {submitLoading && (
                        <View className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70">
                            <ActivityIndicator size="large" color="white" />
                            <Text className="text-white mt-2">Submitting Photo...</Text>
                        </View>
                    )}

                    {/* Photo Submitted */}
                    {isSubmitted && (
                        <Text className="absolute bottom-10 text-white text-lg">Photo Submitted!</Text>
                    )}
                </View>
            )}
        </View>
    );
};

export default CustomCamera;
