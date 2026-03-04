import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import colors from '../theme/colors';

const DATA = [
  { id: '1', title: 'İlaç Saati Programı Eklendi', date: '22.08.2025 09:30' },
  { id: '2', title: 'Bugün yürüyüş yapmayı unutmayın', date: '21.08.2025 18:00' },
  { id: '3', title: 'Kontrol randevusu yaklaşıyor', date: '20.08.2025 10:15' },
];

export default function RemindersScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppHeader title="Hatırlatmalarım" onPressHome={() => navigation.navigate('Home')} />

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.icon} />
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.delete}>Sil</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1,
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    marginRight: 10,
  },
  title: { fontSize: 14, color: colors.textDark, fontWeight: '500' },
  date: { fontSize: 12, color: '#777', marginTop: 2 },
  delete: { color: 'red', fontWeight: '600' },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  fabText: { color: colors.textLight, fontSize: 28, marginTop: -2 },
});