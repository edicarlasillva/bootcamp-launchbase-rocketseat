const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data.js');

server.use(express.static('public'));
server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get('/', (req, res) => {
  const about = {
    avatar_url:
      'https://avatars0.githubusercontent.com/u/34621916?s=460&u=af7e55e6e5639ebc20c12647c64226946c6e3c8d&v=4',
    name: 'Edicarla Silva',
    role: 'Analista de Sistemas',
    description: 'Apaixonada por frontend',
    links: [
      { name: 'Github', url: 'https://github.com/edicarlasillva' },
      { name: 'Twitter', url: 'https://twitter.com/edicarlacsilva' },
      { name: 'Linkedin', url: 'https://www.linkedin.com/in/edicarlasillva' },
    ],
  };
  res.render('about', { about });
});

server.get('/portfolio', (req, res) => {
  res.render('portfolio', { items: videos });
});

server.get('/video', (req, res) => {
  const id = req.query.id;

  const video = videos.find((video) => {
    return video.id === id;
  });

  if (!video) {
    return res.send('Video not found!');
  }

  return res.render('video', { items: video });
});

server.listen(3333, () => {
  console.log('server is running!');
});
