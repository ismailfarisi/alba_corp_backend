import joi from 'joi';

export default joi.object({
    title : joi.string().label("title").min(5).max(50).required(),
    description : joi.string().label("description").max(500).required(),
    main_image : joi.string().label("main_image").max(500).required(),
    additional_images : joi.array<string>().label("additional_images").optional(),
    date_time: joi.date().required()
    }).unknown();