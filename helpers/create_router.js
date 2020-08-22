const express = require('express');
const ObjectID = require('mongodb').ObjectID

const createRouter = function (collection) {
  const router = express.Router();
  
  //// BIRD ROUTES ////

  //GET BIRDS
  router.get('/birds/', (req, res) => {
    handleGet(collection.birds, res)
  });

  //GET BIRD
  router.get('/birds/:id', (req, res) => {
    const id = req.params.id;
    collection.birds
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err)
        res.status(500)
        res.json({status: 500, error: err });
      });
  });



  //// SIGHTING ROUTES ////

  //GET USERS SIGHTINGS
  router.get('/:userId/sightings/', (req, res) => {
    const uId = req.params.userId;
    console.log("Search Parameter: " + uId);
      
    collection.sightings
      .find({userId: uId})
      .toArray()
      .then((docs) => {
        res.json(docs)
        console.log("Found Array:");
        console.log(docs);
      })
      .catch((err) => {
        console.error(err)
        res.status(500)
        res.json({status: 500, error: err });
      });
  });

  //ADD USER SIGHTING
  router.post('/:userId/sightings/', (req, res) => {
    const data = req.body;

    collection.sightings
      .insertOne(data)
      .then(doc => {
        res.json(doc.ops[0])
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({status: 500, error: err})
      })
  })

  

    // router.post('/', (req, res) => {
    //   const data = req.body;
    //   collection.users
    //     .insertOne(data)
    //     .then(doc => {
    //       res.json(doc.ops[0])
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //       res.status(500);
    //       res.json({status: 500, error: err})
    //     })
    // })

    router.put('/:id', (req, res) => {
      const id = req.params.id;
      const data = req.body;
      delete data._id
      collection
        .findOneAndUpdate({ _id: ObjectID(id)},
        { $set: data  },
        {returnOriginal: false}
        )
        .then((result) => {
          res.json(result)
        })
        .catch((err) => {
          console.error(err);
          res.status(500);
          res.json({ status: 500, error: err });
        });
    })


    router.delete('/:id', (req, res) => {
      const id = req.params.id;
      collection
        .deleteOne({ _id: ObjectID(id) })
        .then((docs) => res.json(docs))
        .catch((err) => {
          console.error(err);
          res.status(500);
          res.json({ status: 500, error: err });
        });
    })
  
    return router;
    
}

module.exports = createRouter;

handleGet = (collection, res) => {
   return collection
        .find()
        .toArray()
        .then((docs) => {
          res.json(docs)
        })
        .catch((err) => {
          console.error(err)
          res.status(500)
          res.json({status: 500, error: err });
      });
}