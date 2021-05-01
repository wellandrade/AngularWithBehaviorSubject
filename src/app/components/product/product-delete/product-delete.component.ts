import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductReadComponent } from '../product-read/product-read.component';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  produto: Product;

  constructor(private productService: ProductService,
              private route: Router,
    public dialogRef: MatDialogRef<ProductReadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product) { 

      this.produto = data;
    }

  ngOnInit(): void {

  }

  excluirRegistro() {
    let id = ''; 
    id = this.produto.id?.toString()!;

    this.productService.delete(id).subscribe(result => {
      this.route.navigate(['products/list']);
    });
  }

}
