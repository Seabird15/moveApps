import {Text, View} from 'react-native';
import {FullMovie} from '../../../core/entities/movie.entity';
import {Formatter} from '../../../config/helpers/formatter';

interface Props {
  movie: FullMovie;
}

export const MovieDetails = ({movie}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{movie.rating}</Text>
          <Text style={{marginLeft: 5}}> - {movie.genres.join(', ')}</Text>
        </View>
        <Text style={{fontSize: 23, marginBottom: 10, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text style={{fontSize: 16}}>{movie.description}</Text>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 16}}>{Formatter.currency(movie.budget)}</Text>
      </View>

      {/* Casting */}
      <View style={{marginBottom: 100, marginTop: 10}}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: 'bold',
            marginHorizontal: 20,
            marginVertical: 10,
          }}>
          Actores
        </Text>
      </View>
    </>
  );
};
