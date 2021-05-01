import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderService } from '../../template/header/header.service';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService,
    public dialog: MatDialog,
    private headerService: HeaderService) {

    this.headerService.headerData = {
      title: 'Listar Produtos',
      icon: 'list',
      routeUrl: ''
    };

  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((result: Product[]) => {
      this.products = result;
    });
  }

  openModal(product: Product) {
    console.log(product);

    const dialogRef = this.dialog.open(ProductDeleteComponent, { data: product });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
