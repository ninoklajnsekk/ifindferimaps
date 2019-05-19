const Joi = require('@hapi/joi');
const Map = require('../models/map');

module.exports.getMaps = async function(req, res) {
  try {
    const maps = await Map.find();
    res.json(maps);
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports.addMap = async function(req, res) {
  const newMap = new Map(req.body);
  //TODO spremeni
  const schema = Joi.object().keys({
    mapwidth: Joi.string().alphanum().min(3).max(10).required(),
    mapheight: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    groups: [Joi.string(), Joi.number()],
    levels: Joi.string().alphanum().min(3).max(30).required()
  });

  const result = Joi.validate({
    mapwidth: newMap.mapwidth,
    mapheight: newMap.mapheight,
    groups: newMap.groups,
    levels: newMap.levels
  }, schema, async function(err, value) {
    if (err === null) {
      let map = await newMap.save();
      res.json({
        nov_map: map
      });
    } else {
      res.status(500).send(err);
    }
  });
}

module.exports.getMap = async function(req, res) {
  try {
    const map = await Map.findOne({
      _id: req.params.id
    });
    res.json(map);
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports.deleteMap = async function(req, res) {
  try {
    let map = await Map.findOneAndRemove({
      _id: req.params.id
    });

    if (!map) {
      return res.status(404).send('not found');
    } else {
      res.status(200).send('successfully deleted');
    }
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports.updateMap = async function(req, res) {
  try {
    let map = await Map.findOneAndUpdate({
        _id: req.params.id
      },
      req.body, {
        new: true
      });

    if (!map) {
      return res.status(404).send('not found');
    } else {
      res.status(200).send(map);
    }
  } catch (err) {
    return res.status(500).send(err);
  }
}