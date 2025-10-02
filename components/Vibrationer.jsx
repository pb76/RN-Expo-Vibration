import { Button, Platform, StyleSheet, Text, Vibration, View } from "react-native";
// https://reactnative.dev/docs/vibration

export default function Vibrationer() {
  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [1 * ONE_SECOND_IN_MS, 2 * ONE_SECOND_IN_MS, 3 * ONE_SECOND_IN_MS];

  return (
    <View style={styles.container}>
      <Text>Här kommer vi arbeta med vibrationer</Text>
      <View>
        <Button title="Vibrera en gång" onPress={() => Vibration.vibrate()} />
        <Button title="Vibrera med mönster" onPress={() => Vibration.vibrate(PATTERN)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
