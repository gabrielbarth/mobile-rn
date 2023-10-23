import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator';

const App: () => JSX.Element = () => {
  const [result, setResult] = useState<number | null>(null);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />

      <Text style={styles.title}>Native Module Calculator</Text>
      <Text style={styles.title}>{result ?? '??'}</Text>
      <Button
        title="Calculate"
        onPress={async () => {
          const value = await RTNCalculator?.add(3, 7);
          setResult(value ?? null);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;
