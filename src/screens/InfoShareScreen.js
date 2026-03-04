import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import colors from '../theme/colors';

const TOPICS = [
  { id: '1', title: 'Çalışan hastalar', messages: 3 },
  { id: '2', title: 'Yaz ayları ve ısı', messages: 5 },
  { id: '3', title: 'Beslenme önerileri', messages: 4 },
];

export default function InfoShareScreen({ navigation }) {
  const [selected, setSelected] = React.useState(TOPICS[0]);

  return (
    <View style={styles.container}>
      <AppHeader title="Bilgi Paylaşımı" onPressHome={() => navigation.navigate('Home')} />

      <View style={styles.row}>
        <View style={styles.left}>
          <FlatList
            data={TOPICS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.topicItem,
                  selected?.id === item.id && styles.topicItemActive,
                ]}
                onPress={() => setSelected(item)}
              >
                <Text
                  style={[
                    styles.topicText,
                    selected?.id === item.id && styles.topicTextActive,
                  ]}
                >
                  {item.title}
                </Text>
                <Text style={styles.badge}>{item.messages}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={styles.right}>
          <Text style={styles.messageAuthor}>admin</Text>
          <Text style={styles.messageText}>
            Örnek bilgilendirme mesajı. Burada hastalara yönelik metinler yer alacak.
          </Text>
        </View>
      </View>

      <View style={styles.inputBar}>
        <TextInput style={styles.input} placeholder="Yorumunuzu yazınız..." />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendText}>Gönder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  row: { flex: 1, flexDirection: 'row', padding: 12 },
  left: { width: '40%', paddingRight: 6 },
  right: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 10,
    padding: 10,
    marginLeft: 6,
  },
  topicItem: {
    backgroundColor: colors.card,
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topicItemActive: {
    backgroundColor: colors.primary,
  },
  topicText: { color: colors.textDark, fontSize: 13 },
  topicTextActive: { color: colors.textLight, fontWeight: '600' },
  badge: {
    backgroundColor: colors.accent,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    fontSize: 11,
  },
  messageAuthor: {
    fontWeight: '600',
    marginBottom: 4,
    color: colors.textDark,
  },
  messageText: {
    fontSize: 13,
    color: colors.textDark,
  },
  inputBar: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.card,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginRight: 6,
  },
  sendButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  sendText: { color: colors.textLight, fontWeight: '600' },
});