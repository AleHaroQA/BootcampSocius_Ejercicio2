$(document).ready(function () { });

function getRandomMovie() {
    $.ajax({
        url: "https://www.codigo-alfa.cl/aglo/Tester/peliculaAleatoria",
        method: "GET",
        success: function (data) {
            $("#title").html('<p>Título: ' + data.pelicula.title + '  </p>');
            $("#year").html('<p>Año: ' + data.pelicula.year + '  </p>');
            $("#genre").html('<p>Género: ' + data.pelicula.genre + '  </p>');
        }
    })
}

function getAllMovies() {
    $.ajax({
        url: "https://www.codigo-alfa.cl/aglo/Tester/listasPeliculas",
        method: "GET",
        success: function (data) {
            const moviesList = data.peliculas;
            let movieItem = '';
            moviesList.map((data) => {
                movieItem+='<option value="'+data.id+'">'+data.title+'</option>';
            })
            $("#movieList").html(movieItem);
        }
    })
}

function getDataMovie(value) {
    let id = parseInt(value);
    $.ajax({
        url: "https://www.codigo-alfa.cl/aglo/Tester/listasPeliculas",
        method: "GET",
        success: function (data) {
            const moviesList = data.peliculas;
            $("#titleList").html('<p>Título:'+moviesList[id-1].title+'</p>');
            $("#yearList").html('<p>Año:'+moviesList[id-1].year+'</p>');
            $("#genreList").html('<p>Género:'+moviesList[id-1].genre+'</p>');
        }
    })
}


getAllMovies();
