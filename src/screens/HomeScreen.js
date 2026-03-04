import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import AppHeader from '../components/AppHeader';
import colors from '../theme/colors';

const tiles = [
  { key: 'Profile', label: 'Profilim', icon: 'person-circle-outline' },
  { key: 'EducationList', label: 'Eğitimlerim', icon: 'school-outline' },
  { key: 'Reminders', label: 'Hatırlatmalar', icon: 'notifications-outline' },
  { key: 'Diary', label: 'Günlüğüm', icon: 'calendar-outline' },
  { key: 'InfoShare', label: 'Bilgi Paylaşımı', icon: 'chatbubbles-outline' },
  { key: 'Suggestions', label: 'Öneriler', icon: 'bulb-outline' },
  { key: 'NutritionExercise', label: 'Beslenme ve Egzersiz', icon: 'fitness-outline' },
  { key: 'Feedback', label: 'Görüşlerim', icon: 'star-outline' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppHeader title="MULTİPL MİYELOM MOBİL" onPressHome={() => {}} />

      <View style={styles.topCard}>
        <MaterialIcons name="local-hospital" size={40} color={colors.textLight} />
        <Text style={styles.appTitle}>Dokuz Eylül Üniversitesi{'\n'}Hemşirelik Fakültesi</Text>
        <Text style={styles.appSubtitle}>Multipl Miyelom Mobil Uygulaması</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.grid}>
        {tiles.map((tile) => (
  <TouchableOpacity
    key={tile.key}
    style={styles.tile}
    onPress={() => {
      console.log(tile.label + " butonuna basıldı!"); // Terminalde bunu görmelisin
      navigation.navigate(tile.key);
    }}
  >
    <Ionicons name={tile.icon} size={28} color={colors.primary} />
    <Text style={styles.tileText}>{tile.label}</Text>
  </TouchableOpacity>
))}
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <Ionicons name="home" size={22} color={colors.textLight} />
        <Ionicons name="help-circle-outline" size={22} color={colors.textLight} />
        <Ionicons name="settings-outline" size={22} color={colors.textLight} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  topCard: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  appTitle: {
    color: colors.textLight,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 8,
  },
  appSubtitle: {
    color: colors.textLight,
    fontSize: 14,
    marginTop: 4,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 80,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tile: {
    width: '47%',
    backgroundColor: colors.card,
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 8,
    marginBottom: 14,
    alignItems: 'center',
    elevation: 2,
  },
  tileText: {
    marginTop: 6,
    color: colors.textDark,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 48,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  
});