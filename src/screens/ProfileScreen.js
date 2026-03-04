import React from 'react';
import { View, Text, StyleSheet, TextInput, Switch, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import colors from '../theme/colors';

export default function ProfileScreen({ navigation }) {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <View style={styles.container}>
      <AppHeader title="Profilim" onPressHome={() => navigation.navigate('Home')} />

      <View style={styles.avatar} />

      <View style={styles.card}>
        <Text style={styles.label}>Kendimle İlgili Bir Şeyler Yaz</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Metin giriniz..."
          multiline
        />

        <View style={styles.row}>
          <Text style={styles.label}>Gece Modunu Etkinleştir</Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Gündüz Modu</Text>
          <TouchableOpacity style={styles.optionBox}>
            <Text style={styles.optionText}>Açık</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.deleteText}>TÜM VERİLERİ SİL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.card,
    alignSelf: 'center',
    marginTop: 16,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  card: {
    margin: 16,
    padding: 16,
    backgroundColor: colors.card,
    borderRadius: 10,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: colors.textDark,
    marginBottom: 6,
  },
  textArea: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    minHeight: 80,
    padding: 8,
    marginBottom: 16,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  optionBox: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  optionText: {
    color: colors.textDark,
  },
  deleteButton: {
    marginTop: 16,
    backgroundColor: colors.primaryDark,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteText: {
    color: colors.textLight,
    fontWeight: '600',
  },
});