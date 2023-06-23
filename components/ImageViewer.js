import { StyleSheet, View, Image } from 'react-native';

const PlaceholderImage = require('../assets/pexels-alex-quezada-16487539.jpg');

export default function ImageViewer() {
  return (
    <View>
      <Image source={PlaceholderImage} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 20,
  },
});
