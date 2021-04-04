import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {
  calculateOnJS,
  calculateOnKotlin,
} from '../nativeModules/FibonacciModule';

function FibonacciScreen() {
  const [number, setNumber] = useState(20);
  const [lastExecTimeOnJS, setLastExecTimeOnJs] = useState(0);
  const [lastExecTimeOnKotlin, setLastExecTimeOnKotlin] = useState(0);

  const runOnJS = () => {
    const execTime = calculateOnJS(number);
    setLastExecTimeOnJs(execTime);
  };

  const runOnKotlin = async () => {
    const execTime = await calculateOnKotlin(number);
    setLastExecTimeOnKotlin(execTime);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculate Fibonacci sequence</Text>
      <TextInput
        style={styles.textInput}
        label="Number"
        value={number.toString()}
        onChangeText={(text: string) => setNumber(parseInt(text) || 0)}
      />
      <Text style={styles.text}>
        Completed in {lastExecTimeOnJS} milliseconds
      </Text>
      <Button style={styles.buttonStyle} mode="contained" onPress={runOnJS}>
        Run on JS
      </Button>
      <Text style={styles.text}>
        Completed in {lastExecTimeOnKotlin} milliseconds
      </Text>
      <Button style={styles.buttonStyle} mode="contained" onPress={runOnKotlin}>
        Run on Kotlin
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 200,
    marginBottom: 30,
  },
  text: {
    fontSize: 15,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 60,
  },
  textInput: {
    height: 60,
    width: 200,
    marginVertical: 20,
  },
});

export default FibonacciScreen;
