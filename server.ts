import express from 'express';

const app = express();
const port = 10125;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const authRouter = express.Router();
require('./routes/auth')(authRouter);

app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
