import {Image, Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';

type ProfileImageProps = {
  imageUrl: string;
};

type RenderProfileProps = {
  cats: Cat[];
};

interface Cat {
  id: number;
  name: string;
  imageUrl: string;
}

const ProfileImage: React.FC<ProfileImageProps> = (props) => {
  return (
    <View style={styles.profileCircle}>
      <Image style={styles.image} source={{ uri: props.imageUrl }} />
    </View>
  );
};

const EmptyView: React.FC = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text>No cats😿</Text>
    </View>
  );
};

const RenderProfile: React.FC<RenderProfileProps> = (props) => {
  if (props.cats.length) {
    return props.cats.map((cat) => (
      <View key={cat.id} style={styles.profileContainer}>
        <ProfileImage imageUrl={cat.imageUrl} />
        <Text style={styles.nameText}>{cat.name}</Text>
      </View>
    ));
  } else {
    return <EmptyView />;
  }
};

const listOfCats: Cat[] = [
  { id: 0, name: 'Marge', imageUrl: 'http://placekitten.com/200/300' },
  { id: 1, name: 'Furball', imageUrl: 'http://placekitten.com/300/400' },
  { id: 2, name: 'Football', imageUrl: 'http://placekitten.com/300/200' },
  { id: 3, name: 'Dot', imageUrl: 'http://placekitten.com/400/300' },
  { id: 4, name: 'Zippy', imageUrl: 'http://placekitten.com/400/400' },
];

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RenderProfile cats={listOfCats} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 25,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Platform.OS === 'android' ? 25 : 8,
    borderBottomColor: 'gray',
  },
  profileCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'maroon',
    marginRight: 20,
  },
  nameText: {
    fontSize: 24,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});

export default App;
