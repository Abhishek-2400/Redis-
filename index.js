import express from 'express';
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.json({ msg: "Hello World" })
})

app.listen(port, () => {
    console.log(`server is listening ${port}`)
})