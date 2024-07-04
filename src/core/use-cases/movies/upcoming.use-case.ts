import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrasctructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrasctructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";


export const moviesUpcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {
        const upcoming = await fetcher.get<MovieDBMoviesResponse>('/upcoming')
        return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity)
        return [];
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - upcomingUseCase')
    }
}