const Joi = require('@hapi/joi');
const Prostor = require('../models/prostor');

module.exports.getProstori = async function(req, res) {
  try {
    const prostori = await Prostor.find();
    res.json(prostori);
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports.addProstor = async function(req, res) {
  const newProstor = new Prostor(req.body);
  //TODO spremeni
  const schema = Joi.object().keys({
    naziv: Joi.string().alphanum().min(3).max(10).required(),
    objekt: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    nadstropje: [Joi.string(), Joi.number()],
    soba: Joi.string().alphanum().min(3).max(30).required(),
    namembnost: Joi.string().alphanum().min(3).max(30).required()
  });

  const result = Joi.validate({
    naziv: newProstor.naziv,
    objekt: newProstor.objekt,
    nadstropje: newProstor.nadstropje,
    soba: newProstor.soba,
    namembnost: newProstor.namembnost
  }, schema, async function(err, value) {
    if (err === null) {
      let prostor = await newProstor.save();
      res.json({
        nov_prostor: prostor
      });
    } else {
      res.status(500).send(err);
    }
  });
}

module.exports.getProstor = async function(req, res) {
  try {
    const prostor = await Prostor.findOne({
      _id: req.params.id
    });
    res.json({
      prostor
    });
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports.deleteProstor = async function(req, res) {
  try {
    let prostor = await Prostor.findOneAndRemove({
      _id: req.params.id
    });

    if (!prostor) {
      return res.status(404).send('not found');
    } else {
      res.status(200).send('successfully deleted');
    }
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports.updateProstor = async function(req, res) {
  try {
    let prostor = await Prostor.findOneAndUpdate({
        _id: req.params.id
      },
      req.body, {
        new: true
      });

    if (!prostor) {
      return res.status(404).send('not found');
    } else {
      res.status(200).send(prostor);
    }
  } catch (err) {
    return res.status(500).send(err);
  }
}