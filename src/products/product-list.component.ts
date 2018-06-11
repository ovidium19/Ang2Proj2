import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Data';
  showImg = true;
  filteredProducts: IProduct[];
  private _listFilter = '';
  products: IProduct[];
  constructor(private _productService: ProductService) {
  }
  ngOnInit(): void {
    this._productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = products;
      },
      err => console.log(err)
    );
  }
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.filterProducts(this.listFilter) : this.products;
  }
  showImages(): any {
    this.showImg = !this.showImg;
  }
  filterProducts(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => {
      return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
    });
  }
  OnRatingClicked(message: string): void {
    this.pageTitle = message;
  }
}
