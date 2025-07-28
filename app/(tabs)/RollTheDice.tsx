// import React, { PropsWithChildren } from 'react';

// import { Button, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
// import diceFive from '../../assets/dices/Five.png';
// import diceFour from '../../assets/dices/Four.png';
// import diceOne from '../../assets/dices/One.png';
// import diceSix from '../../assets/dices/Six.png';
// import diceThree from '../../assets/dices/Three.png';
// import diceTwo from '../../assets/dices/Two.png';


// type DiceProps = PropsWithChildren<{
//   imageUrl: ImageSourcePropType;
// }>

// const Dice = ({ imageUrl }: DiceProps) => {
//   return (
//     <View style={styles.dice}>
//       <Image source={imageUrl} style={styles.diceImage} />
//     </View>
//   )
//   }
// const RollTheDice = () => {
//   const [diceImages, setDiceImages] = React.useState<ImageSourcePropType>(diceOne)
  
//   const rollTheDice = () => {
//     const diceNumbers = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]
//     const randomIndex = Math.floor(Math.random() * diceNumbers.length)
//     setDiceImages(diceNumbers[randomIndex])
//   }
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>5-Roll The Dices</Text>
//       <Dice imageUrl={diceImages} />
    
//       <Button title="Roll The Dice" onPress={rollTheDice} />
//     </View>
//   );
// };

// export default RollTheDice;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#dec45cff', // optional background
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#595252ff',
//   },
//   diceImage:{
//     width: 100,
//     height: 100,
//   }
// });

import React, { PropsWithChildren, useCallback } from 'react';
import { Button, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Import dice images
import diceFive from '../../assets/dices/Five.png';
import diceFour from '../../assets/dices/Four.png';
import diceOne from '../../assets/dices/One.png';
import diceSix from '../../assets/dices/Six.png';
import diceThree from '../../assets/dices/Three.png';
import diceTwo from '../../assets/dices/Two.png';

// Constants
const DICE_IMAGES = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
const HAPTIC_OPTIONS = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({ imageUrl }: DiceProps) => (
  <View style={styles.diceContainer}>
    <Image source={imageUrl} style={styles.diceImage} />
  </View>
);

const RollTheDice = () => {
  const [currentDiceImage, setCurrentDiceImage] = React.useState(DICE_IMAGES[0]);
  
  const triggerHaptic = useCallback(() => {
    ReactNativeHapticFeedback.trigger('impactLight', HAPTIC_OPTIONS);  // or 'impactMedium', 'impactHeavy', etc.
  }, []);

  const rollTheDice = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * DICE_IMAGES.length);
    setCurrentDiceImage(DICE_IMAGES[randomIndex]);
    triggerHaptic();
  }, [triggerHaptic]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>5-Roll The Dice</Text>
      <Dice imageUrl={currentDiceImage} />
      <Button 
        title="Roll The Dice" 
        onPress={rollTheDice} 
      />
    </View>
  );
};

export default RollTheDice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dec45cff',
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#595252ff',
    marginBottom: 20,
  },
  diceContainer: {
    marginVertical: 20,
  },
  diceImage: {
    width: 100,
    height: 100,
  },
});