import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMovie } from "../../../infrasctructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrasctructure/mappers/movie.mapper";
import { FullMovie } from '../../entities/movie.entity';


export const getMovieByUseCase = async (fetcher: HttpAdapter, movieId: number,): Promise<FullMovie> => {

try {
    //fetcher
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`)

    //Mapeo
    const fullMovie = MovieMapper.fromMovieDBToEntity(movie);
    return fullMovie;
} catch (error) {
    throw new Error(`Error getting movie by id: ${movieId}`)
}

}