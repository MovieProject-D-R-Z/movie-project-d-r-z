package projectrzd.magicproject.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping({"/", "/about", "/login", "/home", "/register", "/movies"})
    public String showView() {
        return "forward:/index.html";
    }
}