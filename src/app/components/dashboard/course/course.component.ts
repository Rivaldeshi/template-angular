import { Component } from '@angular/core';
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
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  chartOptions: any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Students',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35],
          color: '#5a66f1',
        },
        {
          name: 'Earnings',
          type: 'line',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27],
          color: '#d6dce4',
        },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        type: 'line',
        height: 340,
      },
      grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3,
      },
      colors: ['rgb(90,102,241)', 'rgb(203,213,225)'],
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
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [1, 2],
        curve: ['straight', 'smooth'],
      },
      legend: {
        show: false,
      },
      xaxis: {
        axisBorder: {
          color: '#e9e9e9',
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '22%',
          borderRadius: 2,
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
}
