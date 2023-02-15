import Entity, { ID } from './Entity';

export default class BlogPost extends Entity{
    title: string;
    description: string;
    mainImage:string;
    additionalImages : string[];
    dateTime? : number;

    constructor({
        id,
        title,
        description,
        mainImage,
        additionalImages,
        dateTime
    }:{
        id? : ID,
        title: string,
        description: string,
        mainImage: string,
        additionalImages:string[],
        dateTime?:number
    }){
        super({id});
        this.title = title;
        this.description = description;
        this.mainImage = mainImage;
        this.additionalImages = additionalImages;
        this.dateTime = dateTime;
    }

    
}