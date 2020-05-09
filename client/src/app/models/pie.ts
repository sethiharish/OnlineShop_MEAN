export class Pie {
  constructor(
    public _id: string,
    public name: string,
    public price: number,
    public shortDescription: string,
    public longDescription: string,
    public inStock: boolean,
    public isPieOfTheWeek: boolean,
    public imageUrl: string,
    public thumbnailImageUrl: string,
    public categoryId: string,
    public categoryName: string
  ) {}
}
