import express from "express"
import data from "./data.json" assert { type: 'json'}

const app = express()

app.listen(5001, () => console.log('API running on port 5001'))

app.get('/', (req, res) => res.send(data))