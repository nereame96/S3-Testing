const movies = require("./data");


function getAllDirectors(array) {
  
  const directorsArray = array.map( movie => movie.director)
  
  console.log("EXERCICE 1 ->", directorsArray);
  return directorsArray;
}


function getMoviesFromDirector(array, director) {
  const moviesFromDirectorArray = array.filter( movie => movie.director === director)

  console.log("EXERCICE 2 ->", moviesFromDirectorArray);
  return moviesFromDirectorArray;
}


function moviesAverageOfDirector(array, director) {
  const directorMovies = getMoviesFromDirector(array, director)
  const scoreMovies = directorMovies.filter(movie => movie.score) 

  if (scoreMovies.length === 0) return 0;

  const sumScores = scoreMovies.reduce((acc, movie) =>  acc + movie.score, 0)

  const averageScores = sumScores / scoreMovies.length

  const result = parseFloat(averageScores.toFixed(2))

  console.log("EXERCICE 3 ->", result);
  return result;
}


function orderAlphabetically(array) {

  const titles = array.map( movie => movie.title)

  const titlesSorted = titles.toSorted()


  const result = titlesSorted.slice(0, 20)
    
  
  console.log("EXERCICE 4 ->", result);
  return result;
}


function orderByYear(array) {

  const orderMovie = array.toSorted((a, b) => {
    
    if(a.year !== b.year) return a.year - b.year
    return a.title.localeCompare(b.title) }
  )

  console.log("EXERCICE 5 ->", orderMovie);
  return orderMovie;

}


function moviesAverageByCategory(array, genre) {
  const moviesGenre = array.filter(movie => movie.genre.includes(genre))

  if (moviesGenre.length === 0) return 0

  const sumByCategory = moviesGenre.reduce( (acc, movie) => acc + movie.score, 0) 
  const avgByCategory = sumByCategory / moviesGenre.length
  const result = parseFloat(avgByCategory.toFixed(2))

  console.log("EXERCICE 6 ->", result);
  return result;
}


function hoursToMinutes(array) {
  
  const newMoviesArray =  array.map(obj => {
    const [hours, minutes] = obj.duration.split(' ')
    const minuteSafe = minutes || '0min'
    const hoursNoText = hours.replace('h', '')
    const minutesNoText = minuteSafe.replace('min', '')
     
    
    return {...obj, duration: (+hoursNoText * 60) + (+minutesNoText) }})
  
  console.log("EXERCICE 7 ->", newMoviesArray);
  return newMoviesArray;
}


function bestFilmOfYear(array, year) {
  const moviesPerYear = array.filter( obj => obj.year === year) 

  if (moviesPerYear.length === 0) return null

  const initialBestMovie = { score: 0 };
  const result = moviesPerYear.reduce((acc, currentMovie ) => {
    
    if (currentMovie.score > acc.score) {
      return currentMovie
    } else {
      return acc
    }

  } , initialBestMovie)


console.log("EXERCICE 8 ->", result);
return [result]

}




if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
