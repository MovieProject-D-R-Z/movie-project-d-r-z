package projectrzd.magicproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import projectrzd.magicproject.data.Movie;

public interface MoviesRepository extends JpaRepository<Movie, Long> {

    Movie findMovieByTitle(String title);
    Movie findMovieByGenres(String genre);
}
