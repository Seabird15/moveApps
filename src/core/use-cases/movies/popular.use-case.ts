import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrasctructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrasctructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";


interface Options {
    page?:  number;
    limit?: number; 
}

export const moviesPopularUseCase = async (fetcher: HttpAdapter ,options?: Options): Promise<Movie[]> => {

    try {
        const popular = await fetcher.get<MovieDBMoviesResponse>('/popular', {
            params: {
                pages: options?.page ?? 1
            }
        })
        return popular.results.map(MovieMapper.fromMovieDBResultToEntity)
        return [];
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - popularUseCase')
    }
}