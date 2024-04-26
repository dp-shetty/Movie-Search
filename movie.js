

document.addEventListener("DOMContentLoaded",()=>{
  let movie_info=document.getElementById("movieInfo")
  let movieContent = document.getElementById("movieContent")
  movieContent.style.visibility="hidden"

  let movieLang = document.getElementById("movieLang")
  let search_btn = document.getElementById("search_btn")



  search_btn.addEventListener("click",()=>{

    let movieTitle = movie_info.value
    console.log(movieTitle);

    if(movie_info.value!=""){
      getMovie(movieTitle)
    }else{
      console.log("please specify movie");
    }
  })
})

async function getMovie(movieTitle){
  let apiKey = "70ac2108";
  let apiUrl = `https://www.omdbapi.com/?apiKey=${apiKey}&t=${movieTitle}`;

  try {
    let response = await fetch (apiUrl)
    console.log(response);
    let data = await  response.json()
    console.log(data);
    // console.log(data.status);
    if(response.status === 200){
      let movieContent = document.getElementById("movieContent")
      let title = document.getElementById("title")
      let year = document.getElementById("year")
      let language = document.getElementById("language")
      let img = document.getElementById("img")
      let actors = document.getElementById("actors")
      let imdbRating = document.getElementById("imdbRating")
      img.src = `${data.Poster}`
      title.innerHTML = `Movie: ${data.Title}`
      year.innerHTML = `year: ${data.Year}`
      language.innerHTML = `language: ${data.Language}`
      actors.innerHTML = `Actors: ${data.Actors}`
      imdbRating.innerHTML = `IMDB Rating : ${data.imdbRating}`
      movieContent.style.visibility="visible"
    }
  } catch (error) {
    console.log(`your api is not working ${apiUrl}`,error);
  }
}

// getMovie("matrix")