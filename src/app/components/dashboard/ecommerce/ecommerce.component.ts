import { Component } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis,
  ApexFill,
  ApexGrid,
} from 'ng-apexcharts';

const DATA = [
  {
    date: '01-05-23',
    src: './assets/img/ecommerce/products/13.png',
    product: 'Niker College Bag',
    id: '#1734-9743',
    transactionid: '#14008268610',
    price: '$199.99',
    paymentmethod: 'Online',
    revenue: '$57,899.24',
    status: 'Available',
    class:"success",
    sales: '3,903',
  },
  {
    date: '02-05-23',
    src: './assets/img/ecommerce/products/17.png',
    product: 'Dslr Camera (50mm f/1.9 HRM Lens)',
    id: '#1234-4567',
    transactionid: '#31408224782',
    price: '$1,299.99',
    paymentmethod: 'Cash On Delivery',
    revenue: '$3,24,781.92',
    status: 'Not Available',
    class:"danger",
    sales: '12,435',
  },
  {
    date: '03-05-23',
    src: './assets/img/ecommerce/products/14.png',
    product: 'Outdoor Bomber Jacket',
    id: '#1902-9883',
    transactionid: '#92065567861',
    price: '$99.99',
    paymentmethod: 'Cash On Delivery',
    revenue: '$76,102.76',
    status: 'Not Available',
    class:"danger",
    sales: '5,143',
  },
  {
    date: '04-05-23',
    src: './assets/img/ecommerce/products/15.png',
    product: 'Light Blue Teddy',
    id: '#8745-1232',
    transactionid: '#31652851650',
    price: '$79.00',
    paymentmethod: 'Online',
    revenue: '$78,211.83',
    status: 'Pending',
    class:"warning",
    sales: '7,183',
  },
  {
    date: '05-05-23',
    src: './assets/img/ecommerce/products/16.png',
    product: 'Orange Smart Watch (24mm)',
    id: '#1962-9033',
    transactionid: '#23518898764',
    price: '$199.99',
    paymentmethod: 'Cash On Delivery',
    revenue: '$2,32,982.99',
    status: 'Shipping',
    class: "info",
    sales: '10,287',
  },
];

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  fill: ApexFill;
  grid: ApexGrid;
};
@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss'],
})
export class EcommerceComponent {
  chartOptions: any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Order',
          type: 'column',
          data: [23, 45, 22, 30, 15, 22, 34, 21, 30, 22, 30],
        },
        {
          name: 'Sales',
          type: 'line',
          data: [30, 35, 25, 26, 18, 25, 36, 25, 33, 26, 33],
        },
      ],
      colors: ['#5a66f1', '#cbd5e1'],
      chart: {
        height: 310,
        type: 'line',
        stacked: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 250,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],

      legend: {
        position: 'top',
        show: true,
        labels: {
          colors: ['#5a66f1', '#cbd5e1'], // Set colors for the legend labels
        },
      },
      stroke: {
        width: [0, 2, 5],
        curve: 'smooth',
        colors: ['#dfd7d74a'],
      },
      plotOptions: {
        bar: {
          columnWidth: '40%',
          borderRadius: 4,
        },
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        colors: ['#434fe3'],
      },
      labels: [
        '01/01/2003',
        '02/01/2003',
        '03/01/2003',
        '04/01/2003',
        '05/01/2003',
        '06/01/2003',
        '07/01/2003',
        '08/01/2003',
        '09/01/2003',
        '10/01/2003',
        '11/01/2003',
      ],

      markers: {
        size: 0,
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        min: 0,
      },

      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y: number) {
            if (typeof y !== 'undefined') {
              return y.toFixed(0);
            }
            return y;
          },
        },
      },
    };
  }

  public generateData(count: number, yrange: { max: number; min: number; }) {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = 'w' + (i + 1).toString();
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }

  click = (id: string) => {
    const data = this.Itemdata.filter((x: { id: string }) => {
      return x.id != id;
    });
    this.Itemdata = data;
  };
  Itemdata = DATA;
}
