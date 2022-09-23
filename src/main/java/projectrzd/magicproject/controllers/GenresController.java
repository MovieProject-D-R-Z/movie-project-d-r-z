package projectrzd.magicproject.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import projectrzd.magicproject.repository.GenreRepository;


@RestController
@AllArgsConstructor
@RequestMapping(value = "/genre", produces = "application/json")
public class GenresController {

    GenreRepository genreRepository;

}
