import joi from "joi";

export const idSchema = joi.object({
id:joi.number().required()
})