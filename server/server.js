const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const blogRoutes = require('./controllers/blog')
server.use('/blog', blogRoutes)

const { init } = require('./db/config')

const port = process.env.PORT || 3000;

// Root route
server.get('/', (req, res) => res.send('Hello, client!'))

init().then(() => {
    server.listen(port, () => console.log(`Express now departing from http://localhost:${port}!`))
})