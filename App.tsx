import { Image, InteractionManager, SafeAreaView, StyleSheet, View } from 'react-native';

const ProfileImage = ({ url }) => {
  <View style={styles.profileCircle}>
    <Image source={} uri={{ source: cat.imageUrl }} />
  </View>
};

const EmptyView = () => (
  <View style={styles.emptyContainer}>
    No cats😿
  </View>
);

export default function App() {
  const listOfCats = [
    { id: 0, name: 'Marge', imageUrl: 'http://placekitten.com/200/300' },
    { id: 1, name: 'Furball', imageUrl: 'http://placekitten.com/300/400' },
    { id: 2, name: 'Football', imageUrl: 'http://placekitten.com/300/200' },
    { id: 3, name: 'Dot', imageUrl: 'http://placekitten.com/400/300' },
    { id: 3, name: 'Zippy', imageUrl: 'http://placekitten.com/400/400' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {listOfCats.length && listOfCats.map(cat => ( <View style={styles.catContainer}>
        <ProfileImage url={cat.imageUrl}>
        <Text style={styles.nameText}>{cat.name}</Text>
      </View>
      ))}
      {!listOfCats.length && <EmptyView />} </SafeAreaView>
  );
}
  
const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItem: 'center',
    padding: 8,
    borderBottomColor: 'gray',
  },
  profileCircle: {
    width: 100,
    height: 100,
    borderRadius: '50',
    borderWidth: 2,
    borderColor: 'marroon',
    marginRight: 20,
  },
  nameText: {
    size: 24,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
 