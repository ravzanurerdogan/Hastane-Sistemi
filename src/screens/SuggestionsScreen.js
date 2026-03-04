import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AppHeader from '../components/AppHeader';
import colors from '../theme/colors';

const DATA = [
  {
    id: '1',
    text: 'Hafta sonuna nefes egzersizleri ile başlayabilirsiniz.',
    date: '22.08.2025',
  },
  {
    id: '2',
    text: 'Her gün 30–45 dakikalık hafif tempolu yürüyüş yapmayı deneyin.',
    date: '21.08.2025',
  },
];

export default function SuggestionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppHeader title="Öneriler" onPressHome={() => navigation.navigate('Home')} />

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>{item.text}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  card: {
    backgroundColor: colors.card,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    elevation: 1,
  },
  text: { fontSize: 14, color: colors.textDark, marginBottom: 6 },
  date: { fontSize: 12, color: '#777', textAlign: 'right' },
});