import { Component, Input, ViewChild } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
} from 'ng-apexcharts';
import {
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis,
  ApexFill,
  ApexGrid,
} from 'ng-apexcharts';

export type ChartOptions1 = {
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  fill: ApexFill;
  grid: ApexGrid;
};
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent {
  scheme: Color = {
    name: 'Color Scheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#4049b1', '#d1dae5'],
  };
  series = [
    {
      name: 'Male',
      value: 1254,
      label: '40%',
    },
    {
      name: 'Female',
      value: 1734,
      label: '70%',
    },
  ];

  pieChartLabel(series: any[], name: string): string {
    const item = series.filter((data) => data.name === name);
    if (item.length > 0) {
      return item[0].label;
    }
    return name;
  }

  optionsDonutTop: any;
  optionsCircle1: any;
  chartOptions: any;
  chartOptions2: any;
  chartOptions1: any;

  constructor() {
    this.optionsCircle1 = {
      series: [1754, 1234],
      labels: ['Accepted', 'Rejected'],
      chart: {
        height: 220,
        type: 'donut',
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 5,
          left: 0,
          blur: 3,
          color: '#525050',
          opacity: 0.1,
        },
      },
      dataLabels: {
        enabled: false,
      },

      legend: {
        show: false,
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: '#fff',
        width: 0,
        dashArray: 0,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '90%',
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
                fontSize: '18px',
                color: undefined,
                offsetY: 8,
                formatter: function (val: string) {
                  return val + '%';
                },
              },
              total: {
                show: true,
                showAlways: true,
                label: 'Total',
                fontSize: '22px',
                fontWeight: 600,
                color: '#495057',
              },
            },
          },
        },
      },

      colors: ['rgb(90,102,241)', '#60a5fa'],
    };

    this.chartOptions = {
      series: [2988, 3445],
      color: ['#4049b1'],
      chart: {
        height: 250,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50',
          },
        },
      },
      labels: ['Total'],
      stroke: {
        outerstrokewidth: 1,
      },
    };
    this.chartOptions1 = {
      series: [
        {
          name: 'Orders',

          data: [75, 78, 38, 39, 38, 73, 73, 53, 53, 16, 16, 53],
          color: '#717df2',
        },
        {
          name: 'Sales',
          data: [35, 35, 62, 63, 13, 13, 60, 60, 41, 41, 82, 82],
          color: '#d1dae5',
        },
      ],
      chart: {
        height: 255,
        type: 'line',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        curve: 'straight',
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
          '01 Jan',
          '02 Jan',
          '03 Jan',
          '04 Jan',
          '05 Jan',
          '06 Jan',
          '07 Jan',
          '08 Jan',
          '09 Jan',
          '10 Jan',
          '11 Jan',
          '12 Jan',
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

      grid: {
        borderColor: '#00000000',
      },
    };
    this.chartOptions2 = {
      series: [
        {
          name: 'Total candidates',
          type: 'column',
          data: [20, 38, 38, 62, 23, 28, 37, 20, 29, 22, 30],
        },
        {
          name: 'Total candidates',
          type: 'area',
          data: [85, 65, 75, 38, 36, 30, 21, 41, 28, 45, 43],
        },
        {
          name: 'Shortlisted',
          type: 'line',
          data: [25, 48, 48, 68, 29, 32, 54, 24, 32, 25, 39],
        },
      ],
      colors: ['#5a66f1', '#cbd5e1', '#60a5fa'],
      chart: {
        height: 240,
        type: 'line',
        stacked: false,
      },
      stroke: {
        width: [0, 0.03, 2],
        curve: 'smooth',
        colors: ['#60a5fa'],
      },
      plotOptions: {
        bar: {
          columnWidth: '20%',
          borderRadius: 4,
        },
      },
      legend: {
        show: false,
      },

      fill: {
        opacity: [0.99, 0.05, 0.95],
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
}
