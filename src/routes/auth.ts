import { Router } from 'express';

const router = Router();

router.get('/login', (req, res) => {
  res.send('Login page');
});

module.exports = router;
