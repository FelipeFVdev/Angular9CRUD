import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  product: Product = {

    name: '',
    price: null,

  }

  constructor(private productService: ProductService, private headerService: HeaderService,
    private router: Router) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products',
    }
  }

  ngOnInit(): void {

  }

  createProduct(): void {

    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado');
      this.router.navigate(['/products']);
    })

  }

  cancel(): void {

    this.router.navigate(['/products']);

  }

}
