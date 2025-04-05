const cors = require('cors');
server.use(cors()); 
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router({
  cyber: require('./data/cyber.json'),
  db: require('./data/db.json'),
  debug: require('./data/debug.json'),
  js: require('./data/js.json'),
  ml: require('./data/ml.json'),
  progamming: require('./data/progamming.json'), // watch typo!
  quiz: require('./data/quiz.json'),
  science: require('./data/science.json'),
  sql: require('./data/sql.json'),
  tech: require('./data/tech.json'),
  uiux: require('./data/uiux.json')
});
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`🚀 JSON Server is running on port ${PORT}`);
});
