import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import colors from '../theme/colors';

export default function EducationDetailScreen({ route, navigation }) {
  const { item } = route.params || { item: { title: 'Eğitim' } };

  return (
    <View style={styles.container}>
      <AppHeader title={item.title} onPressHome={() => navigation.navigate('Home')} />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Multipl Miyelom Nedir?</Text>
        <View style={styles.fakeImage} />
        <Text style={styles.text}>
          Burada hastalığa ilişkin bilgilendirici metinler bulunacaktır. Şu anda sadece
          tasarım amaçlı örnek metin gösterilmektedir.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 16 },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: 12,
  },
  fakeImage: {
    height: 180,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginBottom: 16,
  },
  text: { fontSize: 14, color: colors.textDark, lineHeight: 20 },
});