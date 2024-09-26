import React, { useRef, useState, useEffect } from 'react';
import { View, Text, FlatList, Animated, Dimensions, Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { slides } from '../../constants/OnBoardConsts';

const { width } = Dimensions.get('window');

const imageSize = 200; // Adjust as needed

export default function Slider() {
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Automatic slide change every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            const nextSlide = (currentSlide + 1) % slides.length;
            setCurrentSlide(nextSlide);

            // Scroll to the next slide
            flatListRef.current?.scrollToIndex({ index: nextSlide, animated: true });
        }, 3000);

        return () => clearInterval(interval);
    }, [currentSlide]);



    const renderSlide = ({ item }: any) => (

        <View
            style={{
                width,
                alignItems: 'center',
                padding: 24,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
        >
            <Animatable.Image
                animation="bounceIn"
                duration={1500}
                source={item.image}
                style={{
                    marginBottom: 24,
                    width: imageSize,
                    height: imageSize,
                    resizeMode: 'contain',
                    borderRadius: 10,
                }}
            />

            <View style={{ alignItems: "flex-start" }}>
                <Text style={{ color: '#F7F7F7', fontSize: 12, textTransform: 'uppercase', marginBottom: 8 }}>
                    {item.head}
                </Text>
                <Text style={{ color: '#F7F7F7', fontSize: 34, fontWeight: 'bold', marginBottom: 16 }}>
                    {item.title}
                </Text>
                <Text style={{ color: '#F7F7F7', textAlign: 'left' }}>{item.message}</Text>
            </View>
        </View>
    );

    const handleScroll = (event: any) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlide(currentIndex);
    };

    return (
        <View className='flex-col gap-28'>


            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
                {slides.map((_, index) => (
                    <View
                        key={index}
                        style={{
                            height: 6,
                            width: 100,
                            marginHorizontal: 4,
                            borderRadius: 8,
                            backgroundColor: currentSlide === index ? '#FFC45F' : 'gray',
                        }}
                    />
                ))}
            </View>

            <Animated.FlatList
                ref={flatListRef}
                data={slides}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={renderSlide}
                keyExtractor={(item, index) => index.toString()}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}
                onMomentumScrollEnd={handleScroll}
            />

        </View>
    );


}
