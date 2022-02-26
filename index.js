
const PORT = 8000
const axios = require("axios").default
const express = require("express")

const app = express()

app.get('/word', (req, res) => {
    var options = {
        method: 'GET',
        url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
        params: {count: '5', wordLength: '5'},
        headers: {
            'x-rapidapi-host': 'random-words5.p.rapidapi.com',
            'x-rapidapi-key': process.env.RAPID_API_KEY
        }
    }

    axios.request(options).then((response) => {
        console.log(response.data)
        res.json(response.data[0])
    }).catch((error) => {
        console.error(error)
    })
})

app.listen(PORT, () => console.log("Server running on port " + PORT))

