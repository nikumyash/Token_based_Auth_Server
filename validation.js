const Joi = require('joi');

module.exports.registerValidation = (data)=>{
    const schema = Joi.object({
        name : Joi.string().min(4).required(),
        email : Joi.string().min(6).required().email(),
        password : Joi.string().min(6).required()
    });
    return schema.validate(data);
};

module.exports.loginValidation = (data)=>{
    const schema = Joi.object({
        email : Joi.string().min(6).required().email(),
        password : Joi.string().min(6).required()
    });
    return schema.validate(data);
};