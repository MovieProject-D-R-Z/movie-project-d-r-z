package projectrzd.magicproject.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.nio.file.Path;
import java.util.Collection;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity

@Table(name="movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String title;

    @Column
    private String director;

    @Column
    private String summary;

    //TODO:Create a file path to our assets for poster. Maybe store as string and convert to Path?

    @Column
    private String comments;

    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.REFRESH},
            targetEntity = Genre.class)
    @JoinTable(
            name="movie_genre",
            joinColumns = {@JoinColumn(name = "movie_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="genre_id", nullable = false, updatable = false)},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
    @JsonIgnoreProperties("movies")
    private Collection<Genre> genres;
}
