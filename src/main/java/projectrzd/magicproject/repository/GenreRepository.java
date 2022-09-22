package projectrzd.magicproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import projectrzd.magicproject.data.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {
}
