import {StackScreenProps} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/StackNavigation';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {useMovie} from '../../hooks/usemovie';
import {MovieDetails} from '../../components/movie/MovieDetails';
import {ScrollView} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;

  const {isLoading, movie, cast = []} = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <ScrollView>
      <MovieHeader movie={movie} />

      <MovieDetails movie={movie} />

      {/* Details */}
      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  );
};
