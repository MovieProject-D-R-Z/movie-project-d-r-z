package projectrzd.magicproject.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import projectrzd.magicproject.data.Movie;

import projectrzd.magicproject.repository.MoviesRepository;
import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping(value="/movies", produces = "application/json")
public class MoviesController {
    private MoviesRepository moviesRepository;


    @GetMapping(value = "")
    public List<Movie> fetchMovies() {
        return moviesRepository.findAll();
    }

    //getByID
    @GetMapping("/{id}")
    public Optional<Movie> fetchMovieByID(@PathVariable long id){
        return moviesRepository.findById(id);
    }

    @GetMapping("/title/{title}")
    public Movie fetchMovieByTitle(@PathVariable String title){
        return moviesRepository.findMovieByTitle(title);
    }
}
