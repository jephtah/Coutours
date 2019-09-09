const Joi = require('joi');


const validateTour = (tour) => {
    const schema = {
        name: Joi.string().required(),
        rating: Joi.number(),
        price: Joi.number().required()
    }

    return Joi.validate(tour, schema);
}

module.exports = validateTour;