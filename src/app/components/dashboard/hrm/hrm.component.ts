import { Component } from '@angular/core';
const DATA = [
  {
    src: './assets/img/users/2.jpg',
    name: 'Socrates Itumay',
    designation: 'Team Lead',
    leave: 'Sick Leave',
    fromdate: '05-04-2023',
    todate: '08-04-2023',
    status: 'Approved',
    background: 'success',
    textcolor: 'success',
  },
  {
    src: './assets/img/users/4.jpg',
    name: 'Samantha Paul',
    designation: 'Sr UI Developer',
    leave: 'Casual Leave',
    fromdate: '20-04-2023',
    todate: '24-04-2023',
    status: 'Pending',
    background: 'Warning',
    textcolor: 'Warning',
  },
  {
    src: './assets/img/users/14.jpg',
    name: 'Gray Noal',
    designation: 'JAVA Developer',
    leave: 'Paternitiy Leave',
    fromdate: '18-04-2023',
    todate: '24-04-2023',
    status: 'Approved',
    background: 'success',
    textcolor: 'success',
  },
  {
    src: './assets/img/users/15.jpg',
    name: 'Gray Noal',
    designation: 'React Developer',
    leave: 'Personal Leave',
    fromdate: '05-04-2023',
    todate: '06-04-2023',
    status: 'Rejected',
    background: 'danger',
    textcolor: 'danger',
  },
  {
    src: './assets/img/users/8.jpg',
    name: 'Emiley Jackson',
    designation: 'Full Stack Developer',
    leave: 'Maternity Leave',
    fromdate: '05-04-2023',
    todate: '06-06-2023',
    status: 'Approved',
    background: 'success',
    textcolor: 'success',
  },
  {
    src: './assets/img/users/16.jpg',
    name: 'Pope Johnson',
    designation: 'Jr Java Developer',
    leave: 'Gifted Leave',
    fromdate: '06-04-2023',
    todate: '20-04-2023',
    status: 'Pending',
    background: 'warning',
    textcolor: 'warning',
  },
];
const DATA1 = [
  {
    id: '1',
    src: './assets/img/users/8.jpg',
    name: 'Robert Steeve',
    mail: 'robertsteeve112@demo.com',
    department: 'Front End',
    designation: 'UI Designer',
    sal: '$12,000',
    leaves: '2',
    netsal: '$11,890',
    status: 'paid',
    background: 'success',
    textcolor: 'success',
  },
  {
    id: '2',
    src: './assets/img/users/4.jpg',
    name: 'Steeve Robert',
    mail: 'steeverobert121@demo.com',
    department: 'Front End',
    designation: 'UI Designer',
    sal: '$15,000',
    leaves: '0',
    netsal: '$15,000',
    status: 'paid',
    background: 'success',
    textcolor: 'success',
  },
  {
    id: '3',
    src: './assets/img/users/3.jpg',
    name: 'Mary Rose',
    mail: 'marymary334@demo.com',
    department: 'Back End',
    designation: 'PHP Developer',
    sal: '$22,000',
    leaves: '1',
    netsal: '$21,890',
    status: 'pending',
    background: 'warning',
    textcolor: 'warning',
  },
  {
    id: '4',
    src: './assets/img/users/21.jpg',
    name: 'Stella Rose',
    mail: 'stellarose258@demo.com',
    department: 'Android',
    designation: 'Ionic Developer',
    sal: '$21,500',
    leaves: '0',
    netsal: '$21,500',
    status: 'paid',
    background: 'success',
    textcolor: 'success',
  },
  {
    id: '5',
    src: './assets/img/users/11.jpg',
    name: 'jhon Abraham',
    mail: 'abrahamjohn394@demo.com',
    department: 'Front End',
    designation: 'UI Developer',
    sal: '$12,000',
    leaves: '3',
    netsal: '$11,385',
    status: 'paid',
    background: 'success',
    textcolor: 'success',
  },
  {
    id: '6',
    src: './assets/img/users/12.jpg',
    name: 'Richard Rose',
    mail: 'richardrichi.1233@demo.com',
    department: 'Front End',
    designation: 'UI Developer',
    sal: '$12,000',
    leaves: '4',
    netsal: '$11,780',
    status: 'pending',
    background: 'warning',
    textcolor: 'warning',
  },
  {
    id: '7',
    src: './assets/img/users/13.jpg',
    name: 'Abagnale Mal',
    mail: 'abgnalemal000@demo.com',
    department: 'Back End',
    designation: 'JAVA Developer',
    sal: '$25,000',
    leaves: '0',
    netsal: '$25,000',
    status: 'paid',
    background: 'success',
    textcolor: 'success',
  },
  {
    id: '8',
    src: './assets/img/users/5.jpg',
    name: 'Rose Mary',
    mail: 'rosemary434@demo.com',
    department: 'Back End',
    designation: 'PHP Developer',
    sal: '$22,000',
    leaves: '0',
    netsal: '$22,000',
    status: 'Technical Issue',
    background: 'danger',
    textcolor: 'danger',
  },
  {
    id: '9',
    src: './assets/img/users/6.jpg',
    name: 'Johnson Oley',
    mail: 'johnsonoley394@demo.com',
    department: 'Android',
    designation: 'PHP Developer',
    sal: '$21,500',
    leaves: '1',
    netsal: '$21,455',
    status: 'pending',
    background: 'warning',
    textcolor: 'warning',
  },
  {
    id: '10',
    src: './assets/img/users/6.jpg',
    name: 'Stephen Msi',
    mail: 'stephenmsi222@demo.com',
    department: 'Backend',
    designation: 'PHP Developer',
    sal: '$25,000',
    leaves: '0',
    netsal: '$25,000',
    status: 'paid',
    background: 'success',
    textcolor: 'success',
  },
];
@Component({
  selector: 'app-hrm',
  templateUrl: './hrm.component.html',
  styleUrls: ['./hrm.component.scss'],
})
export class HrmComponent {
  chartOptions: any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Designing',
          data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43],
        },
        {
          name: 'Development',
          data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27],
        },
        {
          name: 'SEO',
          data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14],
        },
      ],
      chart: {
        type: 'bar',
        height: 310,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      grid: {
        borderColor: 'rgba(107 ,114 ,128,0.1)',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      colors: ['#5a66f1', '#60a5fa', '#d5dde7'],
      legend: {
        show: true,
        borderRadius: 5,
        position: 'top',
      },
      plotOptions: {
        bar: {
          columnWidth: '20%',
          borderRadius: 5,
        },
      },
      dataLabels: {
        enabled: false,
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
      },
      fill: {
        opacity: 1,
      },
    };
  }
  Employees = DATA;
  Salaries = DATA1;
  click = (name: string) => {
    const data = this.Employees.filter((x: { name: string }) => {
      return x.name != name;
    });
    this.Employees = data;
  };
  click1 = (id: string) => {
    const data = this.Salaries.filter((x: { id: string }) => {
      return x.id != id;
    });
    this.Salaries = data;
  };
}
