
import { Formik } from 'formik';
import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be at least 4 characters')
    .max(16, 'Should be at most 16 characters')
    .required('Required'),
});

export default class PasswordGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      isPasswordGenerated: false,
      upperCase: false,
      lowerCase: false,
      numbers: false,
      symbols: false,
    };
  }

  generatePasswordString = (passwordLength) => {
    let characterList = '';
    const { upperCase, lowerCase, numbers, symbols } = this.state;

    if (upperCase) characterList += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowerCase) characterList += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) characterList += '0123456789';
    if (symbols) characterList += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    if (characterList.length === 0) {
      alert('Please select at least one character type');
      return;
    }

    const passwordResults = this.createPassword(characterList, passwordLength);
    this.setState({ password: passwordResults, isPasswordGenerated: true });
  };

  createPassword = (characters, passwordLength) => {
    let results = '';
    for (let i = 0; i < passwordLength; i++) {
      results += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return results;
  };

  resetPasswordState = () => {
    this.setState({
      password: '',
      isPasswordGenerated: false,
      upperCase: false,
      lowerCase: false,
      numbers: false,
      symbols: false,
    });
  };

  handleSubmit = (values) => {
    this.generatePasswordString(values.passwordLength);
  };

  render() {
    const { password, isPasswordGenerated, upperCase, lowerCase, numbers, symbols } = this.state;

    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.appContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Password Generator</Text>
            <Formik
              initialValues={{ passwordLength: 12 }}
              validationSchema={passwordSchema}
              onSubmit={this.handleSubmit}
            >
              {({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
                <>
                  <View style={styles.inputWrapper}>
                    <View style={styles.inputColumn}>
                      <Text style={styles.heading}>Password Length</Text>
                      {touched.passwordLength && errors.passwordLength && (
                        <Text style={styles.errorText}>{errors.passwordLength}</Text>
                      )}
                    </View>
                    <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLength.toString()}
                      onChangeText={handleChange('passwordLength')}
                      placeholder="Ex. 8"
                      keyboardType="numeric"
                    />
                  </View>

                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include lowercase</Text>
                    <BouncyCheckbox
                      isChecked={lowerCase}
                      onPress={() => this.setState({ lowerCase: !lowerCase })}
                      fillColor="#29AB87"
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include uppercase</Text>
                    <BouncyCheckbox
                      isChecked={upperCase}
                      onPress={() => this.setState({ upperCase: !upperCase })}
                      fillColor="#FED85D"
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include numbers</Text>
                    <BouncyCheckbox
                      isChecked={numbers}
                      onPress={() => this.setState({ numbers: !numbers })}
                      fillColor="#C9A0DC"
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include symbols</Text>
                    <BouncyCheckbox
                      isChecked={symbols}
                      onPress={() => this.setState({ symbols: !symbols })}
                      fillColor="#FC80A5"
                    />
                  </View>

                  <View style={styles.formActions}>
                    <TouchableOpacity
                      style={styles.primaryBtn}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.secondaryBtn}
                      onPress={() => {
                        handleReset();
                        this.resetPasswordState();
                      }}
                    >
                      <Text style={styles.secondaryBtnTxt}>Reset</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>

          {isPasswordGenerated && (
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.subTitle}>Result:</Text>
              <Text style={styles.description}>Long press to copy</Text>
              <Text selectable style={styles.generatedPassword}>
                {password}
              </Text>
            </View>
          )}
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#96f7e2ff',
    margin:10
  },
  formContainer: {
    margin: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 16,
  },
  inputWrapper: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginVertical: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 12,
    color: '#000',
  },
});