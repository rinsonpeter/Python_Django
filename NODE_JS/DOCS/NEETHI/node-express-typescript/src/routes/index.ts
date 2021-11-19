import express from 'express';

const router = express.Router();
router.get('/',  function(req, res, next) {
    res.send("Welcome to Express Typescript App");
  });
export = router;