package projectrzd.magicproject.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import projectrzd.magicproject.data.Genre;
import projectrzd.magicproject.repository.GenreRepository;



@RestController
@AllArgsConstructor
@RequestMapping(value = "/genres", produces = "application/json")
public class GenresController {

    GenreRepository genreRepository;

    @GetMapping("/search")
    private Genre fetchCategoryByCategoryName(@RequestParam String genre) {
        return genreRepository.findAllByGenres(genre);
    }

}
