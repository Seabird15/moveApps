import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/StackNavigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const navigation = useNavigation<NavigationProp<RootStackParams>>();

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  return (
    <Pressable
      style={({pressed}) => ({
        marginBottom: 20,
        marginHorizontal: 5,
        paddingHorizontal: 5,
        width,
        height,
        opacity: pressed ? 0.9 : 1,
      })}
      onPress={() => navigation.navigate('Details', {movieId: movie.id})}>
      <View style={style.imageContainer}>
        <Image style={style.image} source={{uri: movie.poster}} />
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
});
