import joi from 'joi';

export const dataValidator = (data) => {
  const schema = joi.object({
    title: joi.string().min(6).required(),
    genre: joi.string().min(6).required()
  });
  return schema.validate(data);
}
