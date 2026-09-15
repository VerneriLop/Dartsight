import { SymbolView } from 'expo-symbols';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const gameModes = [501, 301] as const;

export default function NewGameScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Go back"
        hitSlop={8}
        onPress={() => router.back()}
        style={({ pressed }) => [
          styles.backButton,
          { top: insets.top + 8 },
          pressed && styles.backButtonPressed,
        ]}
      >
        <SymbolView
          name={{
            ios: 'chevron.backward',
            android: 'arrow_back_ios_new',
            web: 'arrow_back_ios_new',
          }}
          size={24}
          tintColor="#007aff"
          weight="semibold"
        />
      </Pressable>

      <Text style={styles.title}>Choose a game</Text>

      <View style={styles.options}>
        {gameModes.map((startingScore) => (
          <Pressable
            key={startingScore}
            accessibilityRole="button"
            accessibilityLabel={`Start a ${startingScore} game`}
            onPress={() =>
              router.push({
                pathname: '/game/[id]',
                params: { id: startingScore.toString() },
              })
            }
            style={({ pressed }) => [
              styles.option,
              pressed && styles.optionPressed,
            ]}
          >
            <Text style={styles.optionScore}>{startingScore}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#f4f4f5',
  },
  title: {
    color: '#18181b',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  backButtonPressed: {
    backgroundColor: '#e4e4e7',
  },
  options: {
    gap: 16,
    marginTop: 32,
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
  optionScore: {
    color: '#18181b',
    fontSize: 44,
    fontWeight: '800',
  },
});
