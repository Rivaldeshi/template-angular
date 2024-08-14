import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteShopData } from 'src/app/shared/ngrx/e-commerce/shop.action';
import { ShopService } from 'src/app/shared/services/e-commerce/shop.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  delectOutData: any;

  constructor(public ShopService: ShopService, private store: Store<any>) {
    this.price();
  }

  ngOnInit(): void {}
  input1 = 1;
  input2 = 1;
  input3 = 1;
  input4 = 1;
  input5 = 1;
  counter = 0;

  decrease(id: string) {
    this.ShopService.decreaseQuantity(id);
  }

  plus = (id: string) => {
    this.ShopService.addingQuantity(id);
  };

  data$ = this.store.select('data');
  totalMoney: any = 0;
  totalLength = 1;
  delectFunction = false;
  getdelectData: any;

  price() {
    this.data$.forEach((item) => {
      this.totalLength = item.length;
      if (item.length > 1) {
        for (const i of item) {
          this.totalMoney = this.totalMoney + i.offer_price;
        }
      } else {
        if (item[0]?.offer_price != undefined) {
          this.totalMoney = item[0].offer_price;
        }
      }
      if (this.delectFunction) {
        this.totalMoney = 0;
        this.delectFunction = false;
      }
    });
  }

  ngAfterViewInit() {
    const plus: any = document.querySelectorAll('.plus');
    const minus: any = document.querySelectorAll('.minus');
    function perfectChart() {
      plus.forEach((element: any) => {
        const parentDiv = element.parentElement.parentElement;
        element.addEventListener('click', () => {
          parentDiv.children[0].children[1].value++;
        });
      });
      minus.forEach((element: any) => {
        const parentDiv = element.parentElement.parentElement;
        element.addEventListener('click', () => {
          if (parentDiv.children[0].children[1].value > 0) {
            parentDiv.children[0].children[1].value--;
          }
        });
      });
    }
    perfectChart();
  }

  delete(id: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.delectFunction = true;
      this.store.dispatch(deleteShopData({ id }));
      let delectOutData;
      this.data$.forEach((item) => {
        delectOutData = item;
      });
      this.getdelectData = this.delectOutData?.filter((x: { id: string }) => {
        return id != x.id;
      });
      this.totalMoney = 0;
    }
  }
}
