const express = require('express');
const axios = require('axios')
const cors = require('cors')

const app = express();
app.use(cors())

const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=612a2002bd276a52166f23f756bedc7e&query="
const trendingURL = "https://api.themoviedb.org/3/trending/movie/week?api_key=612a2002bd276a52166f23f756bedc7e"
const API_KEY = "612a2002bd276a52166f23f756bedc7e"
const imageURL = "https://image.tmdb.org/t/p/original/"
const genreURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=612a2002bd276a52166f23f756bedc7e"

const port = process.env.PORT || 8080;

// async function getNames(result){
//     const genresResponse = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
//     var genreNames = []

//     result.genre_ids.map(genreId => {
//         const genre = genresResponse.data.genres.find(genre => genre.id === genreId);
//         genreNames.push(genre.name)
//     })

//     console.log(genreNames)
//     return genreNames
// }

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/api/trending', async (req, res) => {
    const query = req.query.query;
    try {
        // Make a request to the TMDb API to search for movies
        const trendingResponse = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);


        const genresResponse = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);



        const searchResults = trendingResponse.data.results.map(result => ({
            id: result.id,
            title: result.title,
            releaseDate: result.release_date,
            overview: result.overview,
            vote_average: result.vote_average,
            vote_count: result.vote_count,
            backdrop_path: imageURL + result.backdrop_path,
            genre_ids: result.genre_ids,
            // genre_names: getNames(result)
            genre_names: result.genre_ids.map(genreId => {
                const genre = genresResponse.data.genres.find(genre => genre.id === genreId);
                return genre ? genre.name : '';
            })
        }));
        res.json(searchResults);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Handle search requests from the front-end
app.get('/api/search', async (req, res) => {
    const query = req.query.query;
    try {
        // Make a request to the TMDb API to search for movies
        const searchResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
        
        const genresResponse = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
        
        const searchResults = searchResponse.data.results.map(result => ({
            id: result.id,
            title: result.title,
            releaseDate: result.release_date,
            overview: result.overview,
            vote_average: result.vote_average,
            vote_count: result.vote_count,
            backdrop_path: imageURL + result.backdrop_path,
            genre_ids: result.genre_ids,
            genre_names: result.genre_ids.map(genreId => {
                const genre = genresResponse.data.genres.find(genre => genre.id === genreId);
                return genre ? genre.name : '';
            })
        }));
        res.json(searchResults);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});