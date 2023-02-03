const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // This line is necessary for Express to be able to parse JSON in request body's

const favoriteMovieList = [{
    title: "Star Wars",
    starRating: 5,
    isRecommended: true,
    createdAt: new Date(),
    lastModified: new Date()
}, {
    title: "The Avengers",
    starRating: 4,
    isRecommended: true,
    createdAt: new Date(),
    lastModified: new Date()
}];

app.get('/', (req, res) => {
    res.send('Hello World!')
})



// Create a new GET route that has the path "/all-movies

app.get('/all-movies', (req, res) => {
    res.send(favoriteMovieList)
})

app.get('/single-movie/StarWars', (req, res) => {
    res.send(favoriteMovieList[0])
})


app.get('/single-movie/:titleToFind', (req, res) => {
    const titleToFind = req.params.titleToFind;
    const movie = favoriteMovieList.find(element => element.title === titleToFind);
    res.send(movie);
})

// make a POST request to localhost:3000/new-movie. In the Body section of the request set the input type dropdown to raw and then set the format type to JSON.

app.post('/new-movie', (req, res) => {
    const newMovie = req.body;
    favoriteMovieList.push(newMovie);
    res.send(favoriteMovieList);
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

