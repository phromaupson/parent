/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from 'cors'
// import * as bodyparser from 'body-parser'

const app = express();

app.use(express.json()) 

app.use(cors())

// routes - endpoint
app.get('/api', (req, res) => {
  console.log('req.params',req.query)

  res.send({ message: 'Welcome to backend! GET' });
});

app.post('/api', (req, res) => {
  const params:{params:{a:string}} = req.body
  console.log('params',req.body)
  res.send({ message: 'Welcome to backend! POST' });
});
//

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
