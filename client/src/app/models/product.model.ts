export class Product {
  public id: string;
  public name: string;
  public description: string;
  public price: number;
  public quantity: number;

  public updateFrom(src: any): void {
    this.id = src.id;
    this.name = src.name;
    this.description = src.description;
    this.price = src.price;
  }
}
