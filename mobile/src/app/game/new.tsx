import { Text, View, StyleSheet } from 'react-native';

export default function NewGameScreen() {
  return (
    <View style={styles.container}>
      <Text>New game Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
