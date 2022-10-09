import { FlatList, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

const checklists = [
  {
    name: "Travel Checklist"
  },
  {
    name: "Morning Routine"
  },
  {
    name: "Weekend Workout"
  }
]

export default function TabChecklists() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Checklists</Text>
      <FlatList data={checklists} renderItem={({item}) => <Text style={styles.listItem}>{item.name}</Text>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  listItem: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
