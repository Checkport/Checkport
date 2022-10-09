import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function TabDiscover() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search through all the checklists on the internet</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    width: '80%'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
