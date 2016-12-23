var util = require('util');
var {Router} = require('express');

// Our API for demos only
import {dummyDatabase} from './foodtruck-db';
import {fakeDemoRedisCache} from './cache';

// you would use cookies/token etc
var USER_ID = 'f9d98cf1-1b96-464e-8755-bcc2a5c09077'; // hardcoded as an example

// Our API for demos only
export function serverApi(req, res) {
  let key = USER_ID + '/data.json';
  let cache = fakeDemoRedisCache.get(key);
  if (cache !== undefined) {
    console.log('/data.json Cache Hit');
    return res.json(cache);
  }
  console.log('/data.json Cache Miss');

  dummyDatabase.get()
    .then(data => {
      fakeDemoRedisCache.set(key, data);
      return data;
    })
    .then(data => res.json(data));
}


export function createFoodtruckApi() {

  var router = Router();

  router.route('/foodtrucks')
    .get(function(req, res) {
      console.log('GET');
      // 70ms latency
      setTimeout(function() {
        res.json(dummyDatabase.get());
      }, 0);

    });

  router.param('foodtruck_id', function(req, res, next, foodtruck_id) {
    // ensure correct prop type
    var id = Number(req.params.foodtruck_id);
    try {
      // TODO: pull specific Foodtruck here
      // var todo = TODOS[id];
      // req.todo_id = id;
      // req.todo = TODOS[id];
      next();
    } catch (e) {
      next(new Error('failed to load data'));
    }
  });

  router.route('/foodtrucks/:foodtruck_id')
    .get(function(req, res) {
      console.log('GET', util.inspect(req.todo, {colors: true}));
      res.json(req.foodtrucks);
    })
    .put(function(req, res) {
    })
    .delete(function(req, res) {
    });

  return router;
};
