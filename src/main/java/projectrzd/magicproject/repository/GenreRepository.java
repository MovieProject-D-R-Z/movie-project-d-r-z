package projectrzd.magicproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import projectrzd.magicproject.data.Genre;
import projectrzd.magicproject.data.Movie;

import java.util.List;

public interface GenreRepository extends JpaRepository<Genre, Long> {
    Genre findAllByGenres(String genre);
}
