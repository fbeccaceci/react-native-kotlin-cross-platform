import {NativeModules} from 'react-native';
const {Fibonacci} = NativeModules;

export function calculateOnJS(number: number) {
  const startTime = Date.now();
  fibonacci(number);
  const endTime = Date.now();
  return endTime - startTime;
}

function fibonacci(number: number): number {
  if (number <= 1) {
    return 1;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
}

export async function calculateOnKotlin(number: number) {
  const startTime = Date.now();
  await Fibonacci.fibonacci(number);
  const endTime = Date.now();
  return endTime - startTime;
}
