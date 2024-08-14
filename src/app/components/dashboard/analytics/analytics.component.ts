import { Component } from '@angular/core';
import * as chartData1 from 'src/app/shared/data/charts/apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from "ng-apexcharts";
const DATA=[
  {
id:"1",
name:"Organic Search",
sessions:"782",
bouncerate:"32.09%/",
duration:"0 hrs : 0 mins : 32 secs",
target:"278",
pages:"2.9",
icon:"ri-search-2-line text-base font-semibiold text-primary leading-none",
background:"primary"
},
{
id:"2",
name:"Direct",
sessions:"882",
bouncerate:"32.38%/",
duration:"0 hrs : 2 mins : 45 secs",
target:"782",
pages:"1.5",
icon:"ri-globe-line text-base font-semibiold text-secondary leading-none",
background:"secondary"
},
{
  id:"3",
  name:"Referal",
  sessions:"322",
  bouncerate:"22.67%/",
  duration:"0 hrs : 38 mins : 28 secs",
  target:"622",
  pages:"3.2",
  icon:"ri-share-forward-line text-base font-semibiold text-danger leading-none",
  background:"danger"
  },
  {
    id:"4",
    name:"Social",
    sessions:"389",
    bouncerate:"25.11%/",
    duration:"0 hrs : 12 mins : 89 secs",
    target:"142",
    pages:"1.4",
    icon:"ri-reactjs-line text-base font-semibiold text-warning leading-none",
    background:"warning"
    },
    {
      id:"5",
      name:"Email",
      sessions:"378",
      bouncerate:"23.79%/",
      duration:"0 hrs : 14 mins : 27 secs",
      target:"178",
      pages:"1.6",
      icon:"ri-mail-line text-base font-semibiold text-info leading-none",
      background:"info"
      },
      {
        id:"6",
        name:"Paid Search",
        sessions:"488",
        bouncerate:"28.77%/",
        duration:"0 hrs : 16 mins : 28 secs",
        target:"578",
        pages:"2.5",
        icon:"ri-bank-card-line text-base font-semibiold text-success leading-none",
        background:"success"
        },
];
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

export type ChartOptions3 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
};
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent {
  chartOptions: any;
  chartOptions1: any;
  chartOptions2: any;
  chartOptions3: any;
  chartOptions4: any;
  constructor() {
    // device views
    this.chartOptions = {
      series: [1754, 1234, 878, 270],
      colors: ['#5560e6', '#d5dde7', '#eab308', '#6a93c6'],
      labels: ['Mobile', 'Tablet', 'Desktop', 'Others'],
      chart: {
        height: 330,
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '15px',
        fontWeight: 500,
        labels: {
          colors: ['rgb(100, 116, 139)'],
        },
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: '#fff',
        width: 0,
        dashArray: 0,
      },
      grid: {
        borderColor: 'rgba(107 ,114 ,128,0.1)',
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
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '80%',
            background: 'transparent',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '20px',
                color: '#495057',
                offsetY: -4,
              },
              value: {
                show: true,
                fontSize: '32px',
                fontWeight: 600,
                offsetY: 8,
                formatter: function (val: string) {
                  return val + '%';
                },
              },
              total: {
                show: true,
                showAlways: true,
                label: 'Total',
                fontSize: '25px',
                color: 'rgb(100, 116, 139)',
              },
            },
          },
        },
      },
    };
    //sessions by gender
    this.chartOptions1 = {
      series: [40, 40, 20],
      colors: ['#2c3ae5', '#9aa5b2', '#497bb9'],
      chart: {
        type: 'polarArea',
        width: 350,
        height: 350,
      },
      stroke: {
        colors: ['#fff'],
      },
      fill: {
        opacity: 0.8,
      },
      legend: {
        position: 'bottom',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      labels: ['Male', 'Female', 'Others'],
    };
    //audience overview
    this.chartOptions2 = {
      series: [
        {
          name: 'serie1',
          data: [44, 55, 41, 64, 22, 43, 21, 43],
          color: '#434fe3',
        },
        {
          name: 'serie2',
          data: [53, 32, 33, 52, 13, 44, 32, 52],
          color: '#cbd5e1',
        },
      ],
      chart: {
        type: 'bar',
        height: 280,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '30%',
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: false,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff'],
      },
      xaxis: {
        categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug'],
        axisBorder: {
          color: 'rgba(119, 119, 142, 0.05)',
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          color: 'rgba(119, 119, 142, 0.05)',
          width: 6,
          offsetX: 0,
          offsetY: 0,
        },
      },
      legend: {
        show: false,
      },
    };
    //active users
    this.chartOptions3 = {
      series: [
        {
          type: 'area',
          data: [
            {
              x: 1996,
              y: 300,
            },
            {
              x: 1997,
              y: 824,
            },
            {
              x: 1998,
              y: 520,
            },
            {
              x: 1999,
              y: 750,
            },
            {
              x: 2000,
              y: 500,
            },
            {
              x: 2001,
              y: 800,
            },
            {
              x: 2002,
              y: 450,
            },
            {
              x: 2003,
              y: 900,
            },
            {
              x: 2004,
              y: 100,
            },
            {
              x: 2005,
              y: 300,
            },
          ],
          color: '#717df2',
        },
        {
          type: 'line',
          data: [
            {
              x: 1996,
              y: 1000,
            },
            {
              x: 1997,
              y: 650,
            },
            {
              x: 1998,
              y: 1000,
            },
            {
              x: 1999,
              y: 500,
            },
            {
              x: 2000,
              y: 1000,
            },
            {
              x: 2001,
              y: 400,
            },
            {
              x: 2002,
              y: 900,
            },
            {
              x: 2003,
              y: 450,
            },
            {
              x: 2004,
              y: 100,
            },
            {
              x: 2005,
              y: 300,
            },
          ],
          color: '#d1dae5',
        },
      ],
      chart: {
        type: 'area',
        height: 150,
        zoom: {
          enabled: false,
        },
        menu: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
        dashArray: [0, 8, 5],
        width: 1,
      },
      legend: {
        show: false,
      },

      xaxis: {
        show: false,
        type: 'datetime',
        axisBorder: {
          color: 'rgba(119, 119, 142, 0.05)',
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          color: 'rgba(119, 119, 142, 0.05)',
          width: 6,
          offsetX: 0,
          offsetY: 0,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        tickAmount: 4,
        floating: false,

        labels: {
          show: false,
        },
      },
      fill: {
        colors: undefined,
        opacity: [0.1, 1],
        type: ['gradient', 'solid'],
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 80, 100],
          colorStops: [],
        },
      },
      grid: {
        padding: {
          top: 0,
          right: -30,
          bottom: 0,
          left: -30,
        },
      },
    };
     this.chartOptions4 = {
       series: [
         {
           name: 'Session',
           data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 44, 80],
           color: '#5560e4',
         },
       ],
       chart: {
         height: 300,
         type: 'bar',
       },
       dataLabels: {
         enabled: false,
       },

       legend: {
         show: false,
       },
       markers: {
         size: 0,
         hover: {
           sizeOffset: 6,
         },
       },
       xaxis: {
         categories: [
           'Jan',
           'Feb',
           'Mar',
           'Apr',
           'May',
           'Jun',
           'Jul',
           'Aug',
           'Sep',
           'Oct',
           'Nov',
           'Dec',
         ],
         axisBorder: {
           color: 'rgba(119, 119, 142, 0.05)',
           offsetX: 0,
           offsetY: 0,
         },
         axisTicks: {
           color: 'rgba(119, 119, 142, 0.05)',
           width: 6,
           offsetX: 0,
           offsetY: 0,
         },
       },
       yaxis: {
         tickAmount: 4,
         floating: false,

         datalabels: {
           show: true,
         },
         categories: ['0', '20', '40', '60', '80', '100'],
       },
       plotOptions: {
         bar: {
           columnWidth: '50%',
           borderRadius: 3,
         },
       },
       grid: {
         borderColor: '#00000000',
       },
     };
  }

  public generateData(count: number, yrange: { max: number; min: number }) {
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
  public RandomData1 = chartData1.ApexRandomData1;
  click = (id: string) => {
    const data = this.Channels.filter((x: { id: string }) => {
      return x.id != id;
    });
    this.Channels = data;
  };
  Channels = DATA;

}
