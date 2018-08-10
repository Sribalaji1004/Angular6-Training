import { Component, OnInit } from '@angular/core';
import {IProduct} from '../product-list/product';
import { ProductService } from './product.service';


@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle:string ='Product List';
  imageWidth:number = 50;
  imageMargin:number = 2;
  filteredProducts : IProduct[];
  showImage:boolean = false;
  onRatingClicked(message:string):void
  {
this.pageTitle= "Product List " + message;


  }

  
  private _listFilter: string;

  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  performFilter(filterBy:string):IProduct[]{

filterBy = filterBy.toLocaleLowerCase();
return this.products.filter((product:IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);


  }

  products: IProduct[]  =[{
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2016",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/31fBIzf6d1L._SY355_.jpg"
},
{
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2016",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "https://tshop.r10s.com/f8b/3b7/5411/3f5d/60b8/f725/40df/11bde78ff92c600c7375c8.jpg"
}];
toggleImage(): void 
{

  this.showImage = !this.showImage;
}
  constructor(private _productService: ProductService) { 
    
    this.listFilter = 'cart';
  }
  errorMessage:string;

  ngOnInit() : void {
    this._productService.getProducts().subscribe(products => this.products = products,error=> this.errorMessage = <any>error);
    this.filteredProducts = this.products;
    console.log('In OnInit');
  }

}
