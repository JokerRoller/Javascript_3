var cinema = {
    name: "CineWorld", 
    language: ["ENG", "ES", "JP"],
    adress: "Earth",
    movies: [
        {name:"The Shawshank Redemption", IMBD: 9.2},
        {name: "The Godfather", IMBD: 9.2},
        {name: "The Dark Knight", IMBD: 9.2}
    ]
}
var languages = (`${cinema.language[0]} ${cinema.language[1]} ${cinema.language[2]}`);

document.getElementById("cname").innerHTML = cinema.name;

document.getElementById("adress").innerHTML = cinema.adress;

document.getElementById("run").innerHTML = cinema.movies[0].name;
document.getElementById("IMBD1").innerHTML = cinema.movies[0].IMBD;
document.getElementById("lang1").innerHTML = languages;

document.getElementById("godfather").innerHTML = cinema.movies[1].name;
document.getElementById("IMBD2").innerHTML = cinema.movies[1].IMBD;
document.getElementById("lang2").innerHTML = languages;

document.getElementById("darkknight").innerHTML = cinema.movies[2].name;
document.getElementById("IMBD3").innerHTML = cinema.movies[2].IMBD;
document.getElementById("lang3").innerHTML = languages;