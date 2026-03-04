import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import colors from '../theme/colors';

export default function DiaryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppHeader title="Günlüğüm" onPressHome={() => navigation.navigate('Home')} />

      <View style={styles.card}>
        <Text style={styles.question}>
          Yaşadığınız ağrı için 0–10 puan arasında değerlendirme yapınız.
        </Text>
        <View style={styles.fakeSlider}>
          <View style={styles.fakeThumb} />
        </View>
        <Text style={styles.valueText}>5</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SONRAKİ SORU</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.question}>2. Gün içerisinde uykusuzluk yaşadınız mı?</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.choice}>
            <Text>Evet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choice}>
            <Text>Hayır</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SONRAKİ SORU</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  card: {
    backgroundColor: colors.card,
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  question: { fontSize: 14, color: colors.textDark, marginBottom: 12 },
  fakeSlider: {
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.border,
    marginVertical: 12,
  },
  fakeThumb: {
    position: 'absolute',
    top: -6,
    left: '50%',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  valueText: { textAlign: 'center', marginBottom: 12, color: colors.textDark },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: colors.textLight, fontWeight: '600' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 12 },
  choice: {
    flex: 1,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
});