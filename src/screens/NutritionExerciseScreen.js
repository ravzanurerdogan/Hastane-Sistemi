import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AppHeader from '../components/AppHeader';
import colors from '../theme/colors';

const DAYS = [
  { id: '1', code: 'MM01' },
  { id: '2', code: 'MM02' },
  { id: '3', code: 'MM03' },
  { id: '4', code: 'MM04' },
];

export default function NutritionExerciseScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppHeader
        title="Sağlıklı Yaşam ve Egzersiz"
        onPressHome={() => navigation.navigate('Home')}
      />

      <FlatList
        data={DAYS}
        contentContainerStyle={{ padding: 16 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.code}>{item.code}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  item: {
    backgroundColor: colors.card,
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 1,
  },
  code: {
    color: colors.textDark,
    fontWeight: '500',
  },
});