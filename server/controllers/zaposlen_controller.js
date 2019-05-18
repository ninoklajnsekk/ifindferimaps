const Joi = require('@hapi/joi');
const Zaposlen = require('../models/zaposlen');

module.exports.getZaposleni = async function(req, res) {
  try {
    const zaposleni = await Zaposlen.find();
    res.json(zaposleni);
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports.addZaposlen = async function(req, res) {
  const newZaposlen = new Zaposlen(req.body);
  //TODO spremeni
  const schema = Joi.object().keys({
    ime: Joi.string().alphanum().min(3).max(10).required(),
    priimek: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    strokovni_naziv: [Joi.string(), Joi.number()],
    email: Joi.string().alphanum().min(3).max(30).required(),
    telefon: Joi.string().alphanum().min(3).max(30).required(),
    id_prostora: Joi.string().alphanum().min(24).max(24).required()
  });

  const result = Joi.validate({
    ime: newZaposlen.ime,
    priimek: newZaposlen.priimek,
    strokovni_naziv: newZaposlen.strokovni_naziv,
    email: newZaposlen.email,
    telefon: newZaposlen.telefon,
    id_prostora: newZaposlen.id_prostora
  }, schema, async function(err, value) {
    if (err === null) {
      let zaposlen = await newZaposlen.save();
      res.json({
        nov_zaposlen: zaposlen
      });
    } else {
      res.status(500).send(err);
    }
  });
}

module.exports.getZaposlen = async function(req, res) {
  try {
    const zaposlen = await Zaposlen.findOne({
      _id: req.params.id
    });
    res.json({
      zaposlen
    });
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports.deleteZaposlen = async function(req, res) {
  try {
    let zaposlen = await Zaposlen.findOneAndRemove({
      _id: req.params.id
    });

    if (!zaposlen) {
      return res.status(404).send('not found');
    } else {
      res.status(200).send('successfully deleted');
    }
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports.updateZaposlen = async function(req, res) {
  try {
    let zaposlen = await Zaposlen.findOneAndUpdate({
        _id: req.params.id
      },
      req.body, {
        new: true
      });

    if (!zaposlen) {
      return res.status(404).send('not found');
    } else {
      res.status(200).send(zaposlen);
    }
  } catch (err) {
    return res.status(500).send(err);
  }
}