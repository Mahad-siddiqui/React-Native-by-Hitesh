// // import React from "react";

// // import { SafeAreaView, Text, View } from "react-native";
// // import FlateCards from "./FlateCards";


// // const Currency = () => {
// //   return (
// //     <SafeAreaView>
// //       <View>
// //         <FlateCards />
// //         <Text>Currency</Text>
// //       </View>
// //     </SafeAreaView>
// //   );
// // };

// // export default Currency;

// import React from "react";
// import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import Snackbar from "react-native-snackbar";

// // Define Currency type
// type Currency = {
//   name: string;
//   value: number;
//   flag: string;
//   symbol: string;
// };

// // Currency data
// export const currencyByRupee: Currency[] = [
//   {
//     name: 'DOLLAR',
//     value: 0.012271428,
//     flag: '🇺🇸',
//     symbol: '$',
//   },
//   {
//     name: 'EURO',
//     value: 0.01125809,
//     flag: '🇪🇺',
//     symbol: '€',
//   },
//   {
//     name: 'POUND',
//     value: 0.0099194378,
//     flag: '🇬🇧',
//     symbol: '£',
//   },
//   {
//     name: 'RUBEL',
//     value: 0.85040469,
//     flag: '🇷🇺',
//     symbol: '₽',
//   },
//   {
//     name: 'AUS DOLLAR',
//     value: 0.01732574,
//     flag: '🇦🇺',
//     symbol: 'A$',
//   },
//   {
//     name: 'CAN DOLLAR',
//     value: 0.016457908,
//     flag: '🇨🇦',
//     symbol: 'C$',
//   },
//   {
//     name: 'YEN',
//     value: 1.5909089,
//     flag: '🇯🇵',
//     symbol: '¥',
//   },
//   {
//     name: 'DINAR',
//     value: 0.0037446993,
//     flag: '🇰🇼',
//     symbol: 'KD',
//   },
//   {
//     name: 'BITCOIN',
//     value: 0.000000543544886,
//     flag: '🎰',
//     symbol: '₿',
//   },
// ];

// // CurrencyButton component
// type CurrencyButtonProps = {
//   name: string;
//   flag: string;
//   onPress: () => void;
// };

// const CurrencyButton = (props: CurrencyButtonProps) => {
//   return (
//     <LinearGradient
//       colors={['#00ff00', '#00ffff']}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       style={styles.button}
//       onPress={props.onPress}
//     >
//       <Text style={styles.flag}>{props.flag}</Text>
//       <Text style={styles.country}>{props.name}</Text>
//     </LinearGradient>
//   );
// };

// // Main App component
// const CurrencyChanger = () => {
//   const [inputValue, setInputValue] = React.useState('');
//   const [outputValue, setOutputValue] = React.useState('');
//   const [targetCurrency, setTargetCurrency] = React.useState('INR');

//   const buttonPressed = (targetValue: Currency) => { 
//     if (!inputValue) {
//       return Snackbar.show({
//         text: "Please enter a value",
//         duration: Snackbar.LENGTH_SHORT,
//         backgroundColor: "#186b56ff",
//         textColor: "white",
//       });
//     }
    
//     const inputAmount = parseFloat(inputValue);
//     if (!isNaN(inputAmount)) {
//       const convertValue = inputAmount * targetValue.value;
//       const result = `${targetValue.symbol} ${convertValue.toFixed(2)}`;
//       setOutputValue(result);
//       setTargetCurrency(targetValue.name);
//     } else {
//       return Snackbar.show({
//         text: "Please enter a valid value",
//         duration: Snackbar.LENGTH_SHORT,
//         backgroundColor: "#186b56ff",
//         textColor: "white",
//       });
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.topContainer}>
//         <View style={styles.rupeesContainer}>
//           <Text style={styles.rupeesText}>₹</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Amount"
//             keyboardType="numeric"
//             maxLength={14}
//             value={inputValue}
//             onChangeText={text => setInputValue(text)}
//           />
//         </View>
//         {outputValue && (
//           <Text style={styles.resultText}>
//             {outputValue}
//           </Text>
//         )}
//       </View>
//       <View style={styles.bottomContainer}>
//         {currencyByRupee.map((currency) => (
//           <CurrencyButton
//             key={currency.name}
//             name={currency.name}
//             flag={currency.flag}
//             onPress={() => buttonPressed(currency)}
//           />
//         ))}
//       </View>
//     </SafeAreaView>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   topContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//   },
//   rupeesContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   rupeesText: {
//     fontSize: 22,
//     marginRight: 8,
//     color: '#000000',
//     fontWeight: 'bold',
//   },
//   input: {
//     height: 40,
//     width: 200,
//     padding: 8,
//     borderWidth: 1,
//     borderRadius: 4,
//     backgroundColor: '#ffffff',
//   },
//   resultText: {
//     fontSize: 28,
//     color: '#000000',
//     fontWeight: 'bold',
//   },
//   bottomContainer: {
//     flex: 3,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   button: {
//     width: '30%',
//     height: 80,
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 10,
//   },
//   flag: {
//     color: '#ffffff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   country: {
//     color: '#ffffff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default CurrencyChanger;
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Snackbar from "react-native-snackbar";

// Define Currency type
type Currency = {
  name: string;
  value: number;
  flag: string;
  symbol: string;
};

// Currency data
export const currencyByRupee: Currency[] = [
  {
    name: 'DOLLAR',
    value: 0.012271428,
    flag: '🇺🇸',
    symbol: '$',
  },
  {
    name: 'EURO',
    value: 0.01125809,
    flag: '🇪🇺',
    symbol: '€',
  },
  {
    name: 'POUND',
    value: 0.0099194378,
    flag: '🇬🇧',
    symbol: '£',
  },
  {
    name: 'RUBEL',
    value: 0.85040469,
    flag: '🇷🇺',
    symbol: '₽',
  },
  {
    name: 'AUS DOLLAR',
    value: 0.01732574,
    flag: '🇦🇺',
    symbol: 'A$',
  },
  {
    name: 'CAN DOLLAR',
    value: 0.016457908,
    flag: '🇨🇦',
    symbol: 'C$',
  },
  {
    name: 'YEN',
    value: 1.5909089,
    flag: '🇯🇵',
    symbol: '¥',
  },
  {
    name: 'DINAR',
    value: 0.0037446993,
    flag: '🇰🇼',
    symbol: 'KD',
  },
  {
    name: 'BITCOIN',
    value: 0.000000543544886,
    flag: '🎰',
    symbol: '₿',
  },
];

// CurrencyButton component
type CurrencyButtonProps = {
  name: string;
  flag: string;
  onPress: () => void;
};

const CurrencyButton = (props: CurrencyButtonProps) => {
  return (
    <LinearGradient
      colors={['#00ff00', '#00ffff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.button}
      onPress={props.onPress}
    >
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </LinearGradient>
  );
};

// Main App component
const CurrencyChanger = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [outputValue, setOutputValue] = React.useState('');
  const [targetCurrency, setTargetCurrency] = React.useState('INR');

  const buttonPressed = (targetValue: Currency) => { 
    if (!inputValue) {
      return Snackbar.show({
        text: "Please enter a value",
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: "#186b56ff",
        textColor: "white",
      });
    }
    
    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertValue.toFixed(2)}`;
      setOutputValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: "Please enter a valid value",
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: "#186b56ff",
        textColor: "white",
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.rupeesContainer}>
          <Text style={styles.rupeesText}>₹</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Amount"
            keyboardType="numeric"
            maxLength={14}
            value={inputValue}
            onChangeText={text => setInputValue(text)}
          />
        </View>
        {outputValue && (
          <Text style={styles.resultText}>
            {outputValue}
          </Text>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          data={currencyByRupee}
          numColumns={3}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <CurrencyButton
              name={item.name}
              flag={item.flag}
              onPress={() => buttonPressed(item)}
            />
          )}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rupeesText: {
    fontSize: 22,
    marginRight: 8,
    color: '#000000',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
  resultText: {
    fontSize: 28,
    color: '#000000',
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 3,
  },
  flatListContent: {
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 80,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  flag: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  country: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CurrencyChanger;