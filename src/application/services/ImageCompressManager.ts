export default interface ImageCompressManager{
     compress(images:{filename:string,buffer:Buffer}[]): Promise<string> ;
}