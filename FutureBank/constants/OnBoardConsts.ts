/*
       Buttons for navigation  
     <StyledButton
        title="Already have an account? Login"
        onPress={() => navigation.navigate('Login')}
      />
      
      <StyledButton
        title="Register a new account"
        onPress={() => navigation.navigate('Register')}
      />
 */

import { bankImage, cashImage, coinImage, logoImage } from "./Index";


export const slides = [
  {
    head: 'SPEED',
    title: 'Do it once, do it fast',
    image: cashImage,
    message:
      'Maecenas donec eget sagittis adipiscing. Semper sapien amet, aliquet porttitor parturient nisl, nisi tempor. Sed ut donec nulla turpis nunc sem praesent elementum. Felis.',
  },
  {
    head: 'EASY TRACKING',
    title: 'Control your future',
    image: bankImage,
    message: "Non, pellentesque eu eu malesuada aliquam dictumst dolor tortor et. Volutpat morbi faucibus nunc, gravida viverra suspendisse sed sem enim."
  },
  {
    head: 'ANYTIME',
    title: 'Ready for anything',
    image: logoImage,
    message: "Erat sed aliquam vulputate commodo, aenean vitae lacus. Id sed aenean et nunc ut."
  },
];