import { Component } from '@angular/core';
import * as chartData1 from 'src/app/shared/data/charts/apexcharts';
const DATA = [
  {
    src: './assets/img/users/11.jpg',
    name: 'Richard Dom',
    mail: 'richarddom1116@demo.com',
    courses: '9',
    completed: '1',
  },
  {
    src: './assets/img/users/4.jpg',
    name: 'Jhonathon Ion',
    mail: 'john.ion@demo',
    courses: '1',
    completed: '0',
  },
  {
    src: './assets/img/users/3.jpg',
    name: 'Mary Curie',
    mail: 'mary.11@demo.com',
    courses: '15',
    completed: '0',
  },
  {
    src: './assets/img/users/13.jpg',
    name: 'Richard Nike',
    mail: 'richard.16@demo.com',
    courses: '16',
    completed: '3',
  },
  {
    src: './assets/img/users/2.jpg',
    name: ' Socrates Itumay',
    mail: 'socratesitumay@gmail.com',
    courses: '10',
    completed: '5',
  },
  {
    src: './assets/img/users/12.jpg',
    name: ' Charlie Davieson',
    mail: 'charliedavieson@gmail.com',
    courses: '11',
    completed: '5',
  },
];
const DATA1 = [
  {
    id: '1',
    src: './assets/img/media/1.jpg',
    text: 'CSS Zero to Hero Master Class',
    category: 'UI/UX',
    classes: '51',
    date: '22-06-2023',
    instructor: 'Burak Oin',
    students: '252',
  },
  {
    id: '2',
    src: './assets/img/media/4.jpg',
    text: 'Digital Marketing Course From Scratch',
    category: 'Marketing',
    classes: '115',
    date: '21-06-2023',
    instructor: 'Stuart Little',
    students: '1,189',
  },
  {
    id: '3',
    src: './assets/img/media/10.jpg',
    text: 'Data Structures & Algorithms For Beginners',
    category: 'Programming',
    classes: '30',
    date: '15-06-2023',
    instructor: 'Boran Ray',
    students: '3,365',
  },
  {
    id: '4',
    src: './assets/img/media/15.jpg',
    text: 'Master Linear Algebra Medium Level',
    category: 'Mathematics',
    classes: '90',
    date: '11-06-2023',
    instructor: 'Arya Neo',
    students: '773',
  },
  {
    id: '5',
    src: './assets/img/media/23.jpg',
    text: 'Learn How to Trade & Invest - For Absolute Beginners',
    category: 'Stocks & Trading',
    classes: '161',
    date: '10-06-2023',
    instructor: 'Sia Neo',
    students: '51',
  },
];
@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss'],
})
export class StocksComponent {
  chartOptions: any;
  chartOptions1: any;
  chartOptions2: any;
  chartOptions3: any;
  chartOptions4: any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Invested Value',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
          color: '#5a66f1',
        },
        {
          name: 'Total Returns',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
          color: '#d6dce4',
        },
      ],
      chart: {
        height: 300,
        type: 'area',
        stacked: false,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: [0, 0],
        curve: 'smooth',
      },
      grid: {
        borderColor: 'rgba(107 ,114 ,128,0.1)',
      },
      colors: ['rgb(90,102,241)', 'rgb(203,213,225)'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%',
          endingShape: 'rounded',
          borderRadius: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: ['dark', 'light'],
          type: 'vertical',
          opacityFrom: [1, 0.85],
          opacityTo: [1, 0.55],
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        title: {
          style: {
            color: '#adb5be',
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-label',
          },
        },
        labels: {
          style: {
            colors: 'rgb(107 ,114 ,128)',
            fontSize: '12px',
          },
          formatter: function (y: number) {
            return y.toFixed(0) + '';
          },
        },
      },
      xaxis: {
        type: 'month',
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
          show: true,
          color: 'rgba(119, 119, 142, 0.05)',
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: 'rgba(119, 119, 142, 0.05)',
          width: 6,
          offsetX: 0,
          offsetY: 0,
        },
        labels: {
          rotate: -90,
          style: {
            colors: 'rgb(107 ,114 ,128)',
            fontSize: '12px',
          },
        },
      },
    };
    this.chartOptions1 = {
      series: [
        {
          data: [34, 55, 41, 67, 22, 43, 21],
        },
      ],
      chart: {
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 3,
          right: 6,
          blur: 3,
          color: ['#5a66f1'],
          opacity: 0.3,
        },
        type: 'line',
        height: 50,
        width: 100,
      },
      tooltip: {
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return '';
            },
          },
        },
        marker: {
          show: false,
        },
      },
      colors: ['#5a66f1'],
      stroke: {
        width: 2,
        curve: 'smooth',
      },
      xaxis: {
        crosshairs: {
          show: false,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.9,
          opacityTo: 0.9,
          stops: [0, 98],
        },
      },
      responsive:true,
    };
    this.chartOptions2 = {
      series: [
        {
          data: [34, 55, 41, 47, 32, 53, 31],
        },
      ],
      chart: {
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 3,
          right: 6,
          blur: 3,
          color: ['#60a5fa'],
          opacity: 0.3,
        },
        type: 'line',
        height: 50,
        width: 100,
      },
      tooltip: {
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return '';
            },
          },
        },
        marker: {
          show: false,
        },
      },
      colors: ['#60a5fa'],
      stroke: {
        width: [1.2],
        curve: ['smooth'],
      },
      xaxis: {
        crosshairs: {
          show: false,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.9,
          opacityTo: 0.9,
          stops: [0, 98],
        },
      },
    };
    this.chartOptions3 = {
      series: [
        {
          data: [31, 53, 32, 47, 41, 55, 44],
        },
      ],
      chart: {
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 3,
          right: 6,
          blur: 3,
          color: ['#eab308'],
          opacity: 0.3,
        },
        type: 'line',
        height: 50,
        width: 100,
      },
      tooltip: {
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return '';
            },
          },
        },
        marker: {
          show: false,
        },
      },
      colors: ['#eab308'],
      stroke: {
        width: [1.2],
        curve: ['smooth'],
      },
      xaxis: {
        crosshairs: {
          show: false,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.9,
          opacityTo: 0.9,
          stops: [0, 98],
        },
      },
    };
    this.chartOptions4 = {
      series: [
        {
          data: [21, 43, 22, 45, 35, 55, 34],
        },
      ],
      chart: {
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 3,
          right: 6,
          blur: 3,
          color: ['#f43f5e'],
          opacity: 0.3,
        },
        type: 'line',
        height: 50,
        width: 100,
      },
      tooltip: {
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return '';
            },
          },
        },
        marker: {
          show: false,
        },
      },
      colors: ['#f43f5e'],
      stroke: {
        width: [1.5],
        curve: ['smooth'],
      },
      xaxis: {
        crosshairs: {
          show: false,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.9,
          opacityTo: 0.9,
          stops: [0, 98],
        },
      },
    };
  }
  Students = DATA;
  Courses = DATA1;

  click = (courses: string) => {
    const data = this.Students.filter((x: { courses: string }) => {
      return x.courses != courses;
    });
    this.Students = data;
  };
  click1 = (id: string) => {
    const data1 = this.Courses.filter((x: { id: string }) => {
      return x.id != id;
    });
    this.Courses = data1;
  };
  public RandomData = chartData1.ApexRandomData;
}
