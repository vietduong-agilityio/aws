import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';

module.exports = app => {
  app.set('port', 3000);
  app.set('json spaces', 2);
  app.use(helmet());
  app.use(cors({
    origin: ['http://localhost:3001'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
  app.use(compression());
  app.use(bodyParser.json());
  app.use((req, res, next) => {
    next();
  });

  app.use(express.static('public'));
};
