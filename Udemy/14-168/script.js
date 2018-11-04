console.log("test")

let movies = [
    {
        title: "In Bruges",
        rating: "5.0",
        iswatched: true,
    },
    {
        title: "Frozen",
        rating: "4.5",
        iswatched: false,
    },
    {
        title: "Mad Max Fury Road",
        rating: "5.0",
        iswatched: true,
    },
    {
        title: "Les Miserables",
        rating: "3.5",
        iswatched: false,
    },
    {
        title: "Les Miserables",
        rating: "3.5",
        iswatched: false,
    },
    {
        title: "Les Miserables",
        rating: "3.5",
        iswatched: false,
    },
    {
        title: "Les Miserables",
        rating: "3.5",
        iswatched: false,
    },
    {
        title: "Les Miserables",
        rating: "3.5",
        iswatched: false,
    },
    {
        title: "Les Miserables",
        rating: "3.5",
        iswatched: false,
    },
    {
        title: "Les Miserables",
        rating: "3.5",
        iswatched: false,
    },
]


function printMovies() {
    let write = document.getElementById("print");
    write.innerHTML = "<ul>"

    movies.forEach(function (movie) {
        if (movie.iswatched) {

            write.innerHTML += "<li>You have seen " + movie.title + " and it has been rated " + movie.rating + " stars." + "</li></br>";
        } else {
            write.innerHTML += "<li>You have not seen " + movie.title + " and it has been rated " + movie.rating + " stars." + "</li></br>";
        }

    });

    write.innerHTML += "</ul>";  
}









// for (let i = 0; i < movies.length; i++) {
//     if (movies[i].iswatched = true) {
//         console.log("You have seen " + movies[i].title + " and it has been rated " + movies[i].rating + " stars.");
//     } else {
//         console.log("You have not seen " + movies[i].title + " and it has been rated " + movies[i].rating + " stars.");
//     }

// };