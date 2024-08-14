import { Component } from '@angular/core';
import * as chartData from '../../../shared/data/charts/apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexFill,
  ApexGrid
} from "ng-apexcharts";
import { AreaChartDataseries } from '../../../shared/data/charts/apexcharts';
export type ChartOptions = {
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
  selector: 'app-apexcharts',
  templateUrl: './apexcharts.component.html',
  styleUrls: ['./apexcharts.component.scss'],
})
export class ApexchartsComponent {
  public RandomData = chartData.ApexRandomData;
  public apexData = chartData.ApexChartData;
  public barData = chartData.BarData;
  public stackedbarData = chartData.StackedBarData;
  public donutData = chartData.DonutChartData;
  public pieData = chartData.PieChartData;
  public radicalbarData = chartData.RadialBarCircleData;
  public radicalmultipleData = chartData.RadialBarCircleMultipleData;
  chartOptions1: any;
  chartOptions2: any;
  chartOptions: any;
  chartOptions3: any;
  chartOptions4: any;
  chartOptions5: any;
  chartOptions6: any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Desktops',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
          color: '#7a7df3',
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left',
        style: {
          color: '#8c9097',
        },
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      fill: {
        color: '#8c9097',
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
    };

    this.chartOptions2 = {
      series: [
        {
          name: 'basic',
          data: [400, 500, 600, 700, 1100, 1300],
          color: '#7a7df3',
        },
      ],
      chart: {
        type: 'bar',
        height: 310,
        color: '#7a7df3',
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'Facebook',
          'Instagram',
          'Dribble',
          'Twitter',
          'Chrome',
          'Pininterest',
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
    };
    this.chartOptions3 = {
      series: [
        {
          name: 'Desigining',
          data: [44, 55, 41, 37, 22, 43, 21, 33, 52, 13, 43, 32],
          color: '#4049b1',
        },
        {
          name: 'Development',
          data: [53, 32, 33, 52, 13, 43, 32, 41, 37, 22, 43, 21],
          color: '#60a5fa',
        },
        {
          name: 'SEO',
          data: [12, 17, 11, 9, 15, 11, 20, 33, 52, 13, 43, 32],
          color: '#d5dde7',
        },
      ],
      chart: {
        type: 'bar',
        height: 310,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '5%',
          borderRadius: 0,
        },
      },
      stroke: {
        width: -10,
        colors: ['#fff'],
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
        title: {
          text: undefined,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
        offsetX: 40,
      },
    };
     this.chartOptions4 = {
       series: [
         {
           data: [
             {
               x: 'Code',
               y: [
                 new Date('2019-03-02').getTime(),
                 new Date('2019-03-04').getTime(),
               ],
             },
             {
               x: 'Test',
               y: [
                 new Date('2019-03-04').getTime(),
                 new Date('2019-03-08').getTime(),
               ],
             },
             {
               x: 'Validation',
               y: [
                 new Date('2019-03-08').getTime(),
                 new Date('2019-03-12').getTime(),
               ],
             },
             {
               x: 'Deployment',
               y: [
                 new Date('2019-03-12').getTime(),
                 new Date('2019-03-18').getTime(),
               ],
             },
           ],
         },
       ],
       colors: '#7a7df3',
       chart: {
         height: 350,
         type: 'rangeBar',
       },
       plotOptions: {
         bar: {
           horizontal: true,
         },
       },
       xaxis: {
         type: 'datetime',
       },
     };
    this.chartOptions5 = {
      series: [
        {
          name: 'STOCK ABC',
          data: AreaChartDataseries.monthDataSeries1.prices,
          color:'#7a7df3',
        },
      ],
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },

      title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left',
        style: {
          color: '#8c9097'
        },
      },
      subtitle: {
        text: 'Price Movements',
        align: 'left',
      },
      labels: AreaChartDataseries.monthDataSeries1.dates,
      xaxis: {
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
          offsetY: 0
        },
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: 'left',
      },
    };
    this.chartOptions6 = {
      series: [
        {
          name: 'Website Blog',
          type: 'column',
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
          color: '#7a7df3',
        },
        {
          name: 'Social Media',
          type: 'line',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
          color: '#7a7df3',
        },
      ],
      chart: {
        height: 350,
        type: 'line',
      },
      stroke: {
        width: [0, 4],
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: [
        '01 Jan 2001',
        '02 Jan 2001',
        '03 Jan 2001',
        '04 Jan 2001',
        '05 Jan 2001',
        '06 Jan 2001',
        '07 Jan 2001',
        '08 Jan 2001',
        '09 Jan 2001',
        '10 Jan 2001',
        '11 Jan 2001',
        '12 Jan 2001',
      ],
      xaxis: {
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
      },
      yaxis: [
        {
        },
        {
          opposite: true,
        },
      ],
    };
  }
}
