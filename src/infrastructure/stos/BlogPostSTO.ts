import BlogPost from "../../domain/entities/BlogPost";

export default (entity : any) : BlogPost | null => {
    if (!entity) return null;
    return new BlogPost(
        {
            id:entity.reference,
            title: entity.title,
            description:entity.description,
            mainImage:entity.main_image,
            additionalImages:entity.additional_images,
            dateTime:entity.date_time
        }
    );
}