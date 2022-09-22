package projectrzd.magicproject.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import projectrzd.magicproject.data.Movie;
import projectrzd.magicproject.repository.MoviesRepository;
import java.util.List;

@RestController
@AllArgsConstructor
public class MoviesController {
    private MoviesRepository moviesRepository;

    @GetMapping("/")
    public List<Movie> fetchMovies() {
        return moviesRepository.findAll();
    }
}
