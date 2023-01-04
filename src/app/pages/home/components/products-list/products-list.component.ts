import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/core/models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Products[] = []

  activePage = 0;
  start=0;
  end=6;
  limit=6;

  productQuantityTitle = "";

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts(){
    this.productsService.getProducts().subscribe((res: any) => {
      this.products = res.data;
      this.quantityProducts()
    })
  }

  displayActivePage(activePageNumber:number){
    this.activePage = activePageNumber
    this.end = activePageNumber*this.limit
    this.start=this.end-this.limit;
  }

  quantityProducts(){
    this.products?.length > 1 ? this.productQuantityTitle = " Produtos"  : " Produto"
  }
}

