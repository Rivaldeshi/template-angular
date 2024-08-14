import { Component } from '@angular/core';
const DATA = [
  {
    id: '#spk1521',
    src: './assets/img/ecommerce/products/2.png',
    name: 'Shirts For Men',
    category: 'Clothing',
    price: '$999',
    stock: 'Instock',
    status: 'Published',
    date: '01-01-2023',
  },
  {
    id: '#spk1522',
    src: './assets/img/ecommerce/products/16.png',
    name: 'Smart Watch',
    category: 'Accesories',
    price: '$399',
    stock: 'Instock',
    status: 'UnPublished',
    date: '02-01-2023',
  },
  {
    id: '#spk1523',
    src: './assets/img/ecommerce/products/18.png',
    name: 'HandBag For Womens',
    category: 'Accesories',
    price: '$699',
    stock: 'Instock',
    status: 'Published',
    date: '03-01-2023',
  },
  {
    id: '#spk1524',
    src: './assets/img/ecommerce/products/11.png',
    name: 'Frock For Girls',
    category: 'Clothing',
    price: '$699',
    stock: 'Instock',
    status: 'Published',
    date: '04-01-2023',
  },
  {
    id: '#spk1525',
    src: './assets/img/ecommerce/products/4.png',
    name: 'Headphones',
    category: 'Electronics',
    price: '$699',
    stock: 'Instock',
    status: 'Published',
    date: '05-01-2023',
  },
  {
    id: '#spk1526',
    src: './assets/img/ecommerce/products/19.png',
    name: 'Purse For Women',
    category: 'Accesories',
    price: '$699',
    stock: 'Instock',
    status: 'Published',
    date: '06-01-2023',
  },
  {
    id: '#spk1527',
    src: './assets/img/ecommerce/products/3.png',
    name: 'Jacket For Men',
    category: 'Clothing',
    price: '$699',
    stock: 'Instock',
    status: 'Published',
    date: '07-01-2023',
  },
  {
    id: '#spk1528',
    src: './assets/img/ecommerce/products/8.png',
    name: "Cowboy's Hat",
    category: 'Accesories',
    price: '$699',
    stock: 'Instock',
    status: 'Published',
    date: '08-01-2023',
  },
  {
    id: '#spk1529',
    src: './assets/img/ecommerce/products/10.png',
    name: 'Wallet For Grils',
    category: 'Accesories',
    price: '$699',
    stock: 'Instock',
    status: 'Published',
    date: '09-01-2023',
  },
];
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  Products = DATA;

  isSelected = false;

  selectAll(event: Event): void {
    this.isSelected = (event.target as HTMLInputElement).checked;
  }

  click = (id: string) => {
    const data = this.Products.filter((x: { id: string }) => {
      return x.id != id;
    });
    this.Products = data;
  };
}
