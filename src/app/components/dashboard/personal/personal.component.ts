import { Component } from '@angular/core';
const DATA = [
  {
    id: '1',
    src: './assets/img/users/2.jpg',
    name: 'Socrates Itumay',
    mail: 'socratesitumay@gmail.com',
    date: '02-04-2023',
    status: 'Success',
    amount: '$2536',
    type: 'Debited',
    background: 'success',
    textcolor: 'success',
    tranId: '#256585',
  },
  {
    id: '2',
    src: './assets/img/users/12.jpg',
    name: 'Luke Cooper',
    mail: 'LukeCooper@gmail.com',
    date: '03-04-2023',
    status: 'Pending',
    amount: '$250',
    type: 'Credited',
    background: 'primary',
    textcolor: 'primary',
    tranId: '#256586',
  },
  {
    id: '3',
    src: './assets/img/users/14.jpg',
    name: 'Rony Brad',
    mail: 'RonyBrad@gmail.com',
    date: '04-04-2023',
    status: 'Success',
    amount: '$3256',
    type: 'Debited',
    background: 'success',
    textcolor: 'success',
    tranId: '#256587',
  },
  {
    id: '4',
    src: './assets/img/users/14.jpg',
    name: 'Sophia Khud',
    mail: 'RonyBrad@gmail.com',
    date: '05-04-2023',
    status: 'Cancel',
    amount: '$2369',
    type: 'Debited',
    background: 'danger',
    textcolor: 'danger',
    tranId: '#256588',
  },
  {
    id: '5',
    src: './assets/img/users/3.jpg',
    name: 'Cooper Hard',
    mail: 'CooperHard@gmail.com',
    date: '06-04-2023',
    status: 'Success',
    amount: '$569',
    type: 'Credited',
    background: 'success',
    textcolor: 'success',
    tranId: '#256589',
  },
];

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent {
  chartOptions: any;
  constructor() {
     this.chartOptions = {
       series: [
         {
           name: 'Income',
           data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 44, 80],
           color: '#434fe3',
         },
         {
           name: 'Expenses',
           data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 54, 89],
           color: '#d1dae5',
         },
       ],
       chart: {
         height: 390,
         type: 'bar',
       },
       dataLabels: {
         enabled: false,
       },
       plotOptions: {
         bar: {
           horizontal: false,
           columnWidth: '40%',
           borderRadius: 4,
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
       legend: {
         show: true,
         position: 'top',
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

       grid: {
         borderColor: '#00000000',
       },
     };
  }
  Transactions = DATA;

  click = (id: string) => {
    const data = this.Transactions.filter((x: { id: string }) => {
      return x.id != id;
    });
    this.Transactions = data;
  };
}
