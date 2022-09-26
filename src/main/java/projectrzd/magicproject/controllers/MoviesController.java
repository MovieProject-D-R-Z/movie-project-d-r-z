package projectrzd.magicproject.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import projectrzd.magicproject.data.Movie;
import projectrzd.magicproject.repository.MoviesRepository;
import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping(value="/api/movies", produces = "application/json")
public class MoviesController {
    private MoviesRepository moviesRepository;

    //Search
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

    //Create
    @PostMapping("")
    public void createNewMovie(@RequestBody Movie newMovie) {

        //Check title
        if(newMovie.getTitle() == null || newMovie.getTitle().length() < 1) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Title cannot be blank!");
        }
        //Check Summary
        if(newMovie.getSummary() == null || newMovie.getSummary().length() < 1) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Content cannot be blank!");
        }
        moviesRepository.save(newMovie);
    }

    //Update
    @PutMapping("/{id}")
    public void updateMovieByID(@RequestBody Movie updatedMovie, @PathVariable long id) {

        Optional<Movie> optionalMovie = moviesRepository.findById(id);
        
        //Checking for null movie?
        if(optionalMovie.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie with id of " + id + " not found");
        }
        
        //Unwrapping optional and grabbing the original movie saved in DB
        Movie originalMovie = optionalMovie.get();

        // copy new field values into original
        BeanUtils.copyProperties(updatedMovie, originalMovie);

        //resave the original with new properties
        moviesRepository.save(originalMovie);
    }


    //Delete
    @DeleteMapping("/{id}")
    public void deletePostByID(@PathVariable long id) {

        Optional<Movie> optionalMovie = moviesRepository.findById(id);

        //Wrong title, or doesn't exist
        if(optionalMovie.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie with title : " + id + " : was not found");
        }
        moviesRepository.deleteById(id);
    }
}
