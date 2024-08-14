import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addShopData, getShopData } from 'src/app/shared/ngrx/e-commerce/shop.action';
import { ShopService } from 'src/app/shared/services/e-commerce/shop.service';
export interface ShopDataState {
  id:string,
  src: string,

  children: childImg[]
}

export interface childImg {
  img:string,
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  click = (id:any)=>{
    const data = this.productData.filter(x =>{
      return x.id != id;
    });
    this.productData = data;
  };

  AddToCart(id:any){
    const variableOne = this.productData.filter(itemInArray => itemInArray.id == id);
    this.store.dispatch(addShopData({data:variableOne}));
  }

  onSelect(ele:any){
    this.router.navigate(["/ecommerce/productdetails/1",ele.id]);
    this.router.navigate(["/ecommerce/productdetails/2",ele.id]);

  }

    page1=1;

    getPageSymbol(current: number) {
      return ['1', '2', '3', '4','5'][current - 1];
    }

    productData = this.ShopService.getPosta();

    constructor(public ShopService: ShopService, private store: Store, private router:Router) { }

    ngOnInit(): void {
    }

}
