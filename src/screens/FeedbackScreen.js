import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AppHeader from '../components/AppHeader';
import colors from '../theme/colors';

const FEEDBACKS = [
  { id: '1', user: 'MM55', score: 5, date: '22.08.25 15:33' },
  { id: '2', user: 'MM11', score: 4, date: '21.08.25 10:10' },
];

export default function FeedbackScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppHeader title="Görüşlerim" onPressHome={() => navigation.navigate('Home')} />

      <FlatList
        data={FEEDBACKS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.user}</Text>
            <Text style={styles.cell}>{item.score}</Text>
            <Text style={styles.cell}>{item.date}</Text>
          </View>
        )}
      />

      <View style={styles.summary}>
        <Text style={styles.summaryText}>Ortalama Değerlendirme Puanı: 4,73</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  row: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  cell: {
    flex: 1,
    fontSize: 13,
    color: colors.textDark,
  },
  summary: {
    padding: 12,
    backgroundColor: colors.card,
    margin: 16,
    borderRadius: 8,
  },
  summaryText: {
    fontWeight: '600',
    textAlign: 'center',
    color: colors.textDark,
  },
});