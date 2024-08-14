import { Component, ElementRef, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import * as chartData from 'src/app/shared/data/charts/chartjs';
import {ChartConfiguration  ,ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss'],
})
export class ChartjsComponent {
  @ViewChild('Canvas') Canvas: ElementRef | any;
  @ViewChild('myCanvas') myCanvas: ElementRef | any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    //gradient bar chart
    if (this.myCanvas && this.myCanvas.nativeElement) {
      const ctx: CanvasRenderingContext2D =
        this.myCanvas.nativeElement.getContext('2d');
      const canvas: any = (<HTMLCanvasElement>(
        this.Canvas.nativeElement
      )).getContext('2d');
      const gradient = canvas.createLinearGradient(0, 0, 0, 250);
      gradient.addColorStop(0, '#285cf7');
      gradient.addColorStop(1, '#f7557a');
      new Chart.Chart(canvas, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 39, 20, 10, 25, 18],
              backgroundColor: gradient,
              barPercentage: 0.6,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              max: 80,
              ticks: {
                color: 'rgba(171, 167, 167,0.9)',
              },
              grid: {
                display: true,
                color: 'rgba(171, 167, 167,0.2)',
              },
            },
            x: {
              ticks: {
                color: 'rgba(171, 167, 167,0.9)',
              },
              grid: {
                display: true,
                color: 'rgba(171, 167, 167,0.2)',
              },
            },
          },
        },
      });
      //Area Chart
      const areaGradient1 = ctx.createLinearGradient(0, 350, 0, 0);
      areaGradient1.addColorStop(0, 'rgba(247, 85, 122, 0)');
      areaGradient1.addColorStop(1, 'rgba(247, 85, 122, .5)');

      const areaGradient2 = ctx.createLinearGradient(0, 280, 0, 0);
      areaGradient2.addColorStop(0, 'rgba(0, 123, 255, 0)');
      areaGradient2.addColorStop(1, 'rgba(0, 123, 255, .3)');
      const areachart = new Chart.Chart(ctx, {
        type: 'line',
        data: {
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'July',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          datasets: [
            {
              data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
              borderColor: '#f7557a',
              borderWidth: 1,
              backgroundColor: areaGradient1,
              tension: 0.4,
              fill: 'origin',
            },
            {
              data: [10, 20, 25, 55, 50, 45, 35, 37, 45, 35, 55, 40],
              borderColor: '#007bff',
              borderWidth: 1,
              backgroundColor: areaGradient2,
              tension: 0.4,
              fill: 'origin',
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              ticks: {
                color: 'rgba(171, 167, 167,0.9)',
              },
              grid: {
                display: true,
                color: 'rgba(171, 167, 167,0.2)',
              },
            },
            x: {
              ticks: {
                color: 'rgba(171, 167, 167,0.9)',
              },
              grid: {
                display: true,
                color: 'rgba(171, 167, 167,0.2)',
              },
            },
          },
        },
      });
    }
  }

  //Line Chart
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartType = chartData.lineChartType;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartData = chartData.lineChartData;

  //Doughnut and Pie Chart Data
  public PieChartData = chartData.PieChartData;
  public PieChartOptions = chartData.PieChartOptions;
  public PieChartType = chartData.PieChartType;
  public DoughnutChartType = chartData.DoughnutChartType;

  //Bar Chart (Vertical)
  public barChart2Options = chartData.barChart2Options;
  public barChart2Type = chartData.barChart2Type;
  public barChart2Legend = chartData.barChart2Legend;
  public barChart2Data = chartData.barChart2Data;

  // Solid Color
  public solidColorOptions = chartData.solidColorChartOptions;
  public solidColorType = chartData.solidColorChartType;
  public solidColorData = chartData.solidColorChartData;
  public solidColorLegend = chartData.solidColorLegend;

  //polar
  public polarAreaChartLabels = chartData.polarAreaChartLabels;
  public polarAreaChartData = chartData.polarAreaChartData;
  public polarAreaLegend = chartData.polarAreaLegend;
  public polarChartOptions = chartData.polarChartOptions;
  public polarAreaChartType = chartData.polarAreaChartType;

  public scatterChartLabels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ];
  public scatterChartOptions: ChartConfiguration['options'] = {
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(171, 167, 167,0.2)',
        },
      },
      y: {
        grid: {
          display: true,
          color: 'rgba(171, 167, 167,0.2)',
        },
      },
    },
  };

  public scatterChartData: ChartData<'scatter'> = {
    labels: this.scatterChartLabels,
    datasets: [
      {
        data: [
          { x: 1, y: 1 },
          { x: 2, y: 3 },
          { x: 3, y: -2 },
       
        ],
        label: 'Series A',
        pointRadius: 10,
        backgroundColor: '#6366f1',
      },
    ],
  };
  public scatterChartType: ChartType = 'scatter';
  public bubbleChartOptions: ChartConfiguration['options'] = {
    scales: {
      x: {
        min: 0,
        max: 30,
        ticks: {},
        grid: {
          display: true,
          color: 'rgba(171, 167, 167,0.2)',
        },
      },
      y: {
        min: 0,
        max: 30,
        ticks: {},
        grid: {
          display: true,
          color: 'rgba(171, 167, 167,0.2)',
        },
      },
    },
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: ChartData<'bubble'> = {
    labels: [],
    datasets: [
      {
        data: [
          { x: 10, y: 10, r: 10 },
          { x: 15, y: 5, r: 15 },
        ],
        label: 'First Dataset',
        backgroundColor: ['#6366f1'],
        borderColor: 'blue',
        hoverBackgroundColor: 'purple',
        hoverBorderColor: '#6366f1',
      },
    ],
  };

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLabels = ['Priamry', 'Success', 'Warning'];
  public pieChartDatasets = [
    {
      data: [300, 500, 100],
      backgroundColor: [
        'rgba(99, 102, 241, 1)', // Primary color
        'rgba(94, 166, 142, 1)', // Success color
        'rgba(166, 142, 94, 1)', // Warning color
      ],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  // Doughnut
  public doughnutChartLabels: string[] = ['primary', 'success', 'warning'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [
      {
        data: [350, 450, 100],
        backgroundColor: [
          'rgba(99, 102, 241, 1)', // Primary color
          'rgba(94, 166, 142, 1)', // Success color
          'rgba(166, 142, 94, 1)', // Warning color
        ],
        label: 'Series A',
      },
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
  };
}
