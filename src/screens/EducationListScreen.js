import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import colors from '../theme/colors';

const ITEMS = [
  { id: '1', title: 'İçindekiler' },
  { id: '2', title: 'Multipl Miyelom Nedir?' },
  { id: '3', title: 'Ağrı yönetimi-1' },
  { id: '4', title: 'Yorgunluk yönetimi-1' },
];

export default function EducationListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppHeader title="Eğitimlerim" onPressHome={() => navigation.navigate('Home')} />

      <FlatList
        data={ITEMS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('EducationDetail', { item })}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
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
  title: { color: colors.textDark, fontSize: 14, fontWeight: '500' },
});