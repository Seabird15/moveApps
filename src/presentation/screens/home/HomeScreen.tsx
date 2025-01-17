import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} =
    useMovies();

  if (isLoading) {
    return <Text>Cargando</Text>;
  }
  return (
    <ScrollView>
      <View style={{marginTop: 20, paddingBottom: 30}}>
        {/* carousel principal */}
        <PosterCarousel movies={nowPlaying} />

        {/* Populares  */}
        <HorizontalCarousel
          movies={popular}
          title="Populares"
          loadNextPage={() => popularNextPage()}
        />
        {/* TopRated  */}
        <HorizontalCarousel movies={topRated} title="Mejor Calificadas" />
        {/* Upcoming */}
        <HorizontalCarousel movies={upcoming} title="Proximamente" />
      </View>
    </ScrollView>
  );
};
