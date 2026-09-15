import { router } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => router.push('/game/new')}
        style={({ pressed }) => [
          styles.option,
          pressed && styles.optionPressed,
        ]}
      >
        <Text style={styles.title}>New game</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  option: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 144,
    padding: 24,
    backgroundColor: '#ffffff',
    borderColor: '#e4e4e7',
    borderRadius: 20,
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  optionPressed: {
    opacity: 0.72,
    transform: [{ scale: 0.98 }],
  },
});
