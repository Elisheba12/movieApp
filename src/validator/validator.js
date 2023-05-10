import joi from 'joi';

export const movieDataValidator = (data) => {
  const schema = joi.object({
    title: joi.string().min(6).required(),
    genre: joi.string().min(6).required()
  }).strict();
  return schema.validate(data);
}

export const userDataValidator = (data) => {
  const schema = joi.object({
    name: joi.string().min(6).required(),
    username: joi.string().min(6).required(),
    password: joi.string().min(6).required(),
    gender: joi.string().min(4).required(),
    email: joi.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      .required()
      .messages({
        'string.pattern.base': 'Email is not a valid email format/address',
      })
  }).strict();
  return schema.validate(data);
}
