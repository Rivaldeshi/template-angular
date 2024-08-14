import { Component } from '@angular/core';

const DATA = [
  {
    id: '1',
    src: './assets/img/users/2.jpg',
    name: 'Socrates Itumay',
    mail: 'socratesitumay@gmail.com',
    date: '02-04-2023',
    phone: '+1(555) 354 2345',
    company: 'Beckle Heth Corp.',
    status: 'Won Lead',
    location: 'Germany',
    background: 'success',
    textcolor: 'success',
  },
  {
    id: '2',
    src: './assets/img/users/12.jpg',
    name: 'Look cooper',
    mail: 'LukeCooper@gmail.com',
    date: '03-04-2023',
    phone: '+1(555) 873 8923',
    company: 'Lackme Info Et.',
    status: 'New Lead',
    location: 'London',
    background: 'primary',
    textcolor: 'primary',
  },
  {
    id: '3',
    src: './assets/img/users/14.jpg',
    name: 'Rony Brad',
    mail: 'RonyBrad@gmail.com',
    date: '04-04-2023',
    phone: '+1(555) 347 0923',
    company: 'Mevengo Tech Et Sed',
    status: 'New Lead',
    location: 'USA',
    background: 'primary',
    textcolor: 'primary',
  },
  {
    id: '4',
    src: './assets/img/users/4.jpg',
    name: 'Sophia Khud',
    mail: 'RonyBrad@gmail.com',
    date: '05-04-2023',
    phone: '+1(555) 674 7824',
    company: 'Jeveda Group En.',
    status: 'Lost Lead',
    location: 'Canada',
    background: 'danger',
    textcolor: 'danger',
  },
  {
    id: '5',
    src: './assets/img/users/3.jpg',
    name: 'Cooper Hard',
    mail: 'CooperHard@gmail.com',
    date: '06-04-2023',
    phone: '+1(555) 985 2893',
    company: 'Neveia Exp Sid',
    status: 'New Lead',
    location: 'England',
    background: 'primary',
    textcolor: 'primary',
  },
  {
    id: '6',
    src: './assets/img/users/5.jpg',
    name: 'Chad Xic',
    mail: 'ChadXic@gmail.com',
    date: '07-04-2023',
    phone: '+1(555) 238 2342',
    company: 'Ixin Corp.',
    status: 'New Lead',
    location: 'Australia',
    background: 'primary',
    textcolor: 'primary',
  },
  {
    id: '7',
    src: './assets/img/users/15.jpg',
    name: 'Rover Imo',
    mail: 'RoverImo@gmail.com',
    date: '08-04-2023',
    phone: '+1(555) 972 9883',
    company: 'Myami Group & Tech.',
    status: 'Won Lead',
    location: 'spain',
    background: 'success',
    textcolor: 'success',
  },
  {
    id: '8',
    src: './assets/img/users/11.jpg',
    name: 'Helen Sha',
    mail: 'HelenSha@gmail.com',
    date: '09-04-2023',
    phone: '+1(555) 890 5687',
    company: 'Inferno Xo',
    status: 'New Lead',
    location: 'China',
    background: 'primary',
    textcolor: 'primary',
  },
  {
    id: '9',
    src: './assets/img/users/8.jpg',
    name: 'Shakira Neo',
    mail: 'ShakiraNeo@gmail.com',
    date: '10-04-2023',
    phone: '+1(555) 765 8937',
    company: 'Ideal It Sol',
    status: 'Lost Lead',
    location: 'Italy',
    background: 'danger',
    textcolor: 'danger',
  },
  {
    id: '10',
    src: './assets/img/users/13.jpg',
    name: 'Shaggy Yt',
    mail: 'ShaggyYt@gmail.com',
    date: '11-04-2023',
    phone: '+1(555) 675 4680',
    company: 'Xenon Tech. Ed.',
    status: 'New Lead',
    location: 'Europe',
    background: 'primary',
    textcolor: 'primary',
  },
];
@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.scss'],
})
export class CrmComponent {
  chartOptions: any;
  chartOptions2: any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Website Blog',
          type: 'column',
          data: [23, 11, 22, 35, 17, 28, 22, 37, 21, 44, 22, 30],
          color: '#434fe3',
        },
        {
          name: 'Social Media',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51],
          color: '#ced8e3',
        },
      ],
      chart: {
        height: 280,
        type: 'line',
      },
      stroke: {
        width: [0, 2],
        curve: 'smooth',
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      labels: [
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

      xaxis: {
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
          categories: ['0', '10', '20', '30', '40', '50', '60', '70'],
        },
      ],
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
        bar: {
          columnWidth: '15%',
          borderRadius: '2',
        },
      },
    };
    // leads by soruce
    this.chartOptions2 = {
      series: [
        {
          name: 'basic',
          data: [400, 430, 470, 540, 600, 800],
          color: '#434fe3',
        },
      ],
      chart: {
        type: 'bar',
        height: 380,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '50%',
          borderRadius: 3,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'Marketing',
          'Digital',
          'web',
          'Advertisement',
          'Employee Referal',
          'Other',
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
        show: false,
      },
    };
  }
  employees = DATA;

  click = (id: any) => {
    const data = this.employees.filter((x: { id: any }) => {
      return x.id != id;
    });
    this.employees = data;
  };
}
