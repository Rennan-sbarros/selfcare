import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/core/models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products!: Products[]

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts(){
    this.productsService.getProducts().subscribe((res: any) => {
      this.products = res.data
    })
  }
}
