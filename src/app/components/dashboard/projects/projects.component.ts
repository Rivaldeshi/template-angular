import { Component } from '@angular/core';

const DATA = [
  {
    id: '1',
    title: 'Home Page',
    user1: './assets/img/users/8.jpg',
    user2: './assets/img/users/4.jpg',
    user3: './assets/img/users/6.jpg',
    user4: './assets/img/users/7.jpg',
    user5: './assets/img/users/8.jpg',
    width: 'width:15%',
    background: 'primary',
    date: '14-04-2023',
    status: 'In Progress',
    tasks: '110',
    task1: '180',
    progress: '25%',
    textcolor: 'primary',
  },
  {
    id: '2',
    title: 'Landing Design',
    user1: './assets/img/users/8.jpg',
    user2: './assets/img/users/4.jpg',
    user3: './assets/img/users/6.jpg',
    user4: './assets/img/users/7.jpg',
    user5: './assets/img/users/19.jpg',
    width: 'width: 90%',
    background: 'primary',
    date: '20-04-2023',
    status: 'In Progress',
    tasks: '95',
    task1: '100',
    progress: '90%',
    textcolor: 'primary',
  },
  {
    id: '3',
    title: 'New Template Design',
    user1: './assets/img/users/8.jpg',
    user2: './assets/img/users/4.jpg',
    user3: './assets/img/users/16.jpg',
    user4: './assets/img/users/17.jpg',
    user5: './assets/img/users/18.jpg',
    width: 'width: 0%',
    background: 'warning',
    date: '29-04-2023',
    status: 'Pending',
    tasks: '0',
    task1: '50',
    progress: '0%',
    textcolor: 'warning',
  },
  {
    id: '4',
    title: 'HR Management Template Design',
    user1: './assets/img/users/8.jpg',
    user2: './assets/img/users/14.jpg',
    user3: './assets/img/users/4.jpg',
    user4: './assets/img/users/16.jpg',
    user5: './assets/img/users/17.jpg',
    width: 'width: 40%',
    background: 'primary',
    date: '18-04-2023',
    status: 'In Progress',
    tasks: '30',
    task1: '70',
    progress: '40%',
    textcolor: 'primary',
  },
  {
    id: '5',
    title: 'Designing New Template',
    user1: './assets/img/users/8.jpg',
    user2: './assets/img/users/14.jpg',
    user3: './assets/img/users/4.jpg',
    user4: './assets/img/users/16.jpg',
    user5: './assets/img/users/17.jpg',
    width: 'width:100%',
    background: 'success',
    date: '02-04-2023',
    status: 'completed',
    tasks: '120',
    task1: '120',
    progress: '100%',
    textcolor: 'success',
  },
  {
    id: '6',
    title: 'Documentation Project',
    user1: './assets/img/users/8.jpg',
    user2: './assets/img/users/14.jpg',
    user3: './assets/img/users/4.jpg',
    user4: './assets/img/users/16.jpg',
    user5: './assets/img/users/21.jpg',
    user7: './assets/img/users/20.jpg',
    width: 'width:50%',
    background: 'primary',
    date: '05-04-2023',
    status: 'In Progress',
    tasks: '40',
    task1: '80',
    progress: '50%',
    textcolor: 'primary',
  },
  {
    id: '7',
    title: 'Developing Backend',
    user1: './assets/img/users/8.jpg',
    user2: './assets/img/users/14.jpg',
    user3: './assets/img/users/4.jpg',
    user4: './assets/img/users/21.jpg',
    user5: './assets/img/users/20.jpg',
    width: 'width:50%',
    background: 'primary',
    date: '08-04-2023',
    status: 'In Progress',
    tasks: '50',
    task1: '60',
    progress: '80%',
    textcolor: 'primary',
  },
  {
    id: '8',
    title: 'Multipurpose Dashboard Template',
    user1: './assets/img/users/8.jpg',
    user2: './assets/img/users/14.jpg',
    user3: './assets/img/users/15.jpg',
    user4: './assets/img/users/16.jpg',
    user5: './assets/img/users/17.jpg',
    width: 'width:0%',
    background: 'warning',
    date: '30-04-2023',
    status: 'pending',
    tasks: '0',
    task1: '60',
    progress: '0%',
    textcolor: 'warning',
  },
  {
    id: '9',
    title: 'Design New Dashboard Template',
    user1: './assets/img/users/8.jpg',
    user2: './assets/img/users/14.jpg',
    user3: './assets/img/users/16.jpg',
    user4: './assets/img/users/21.jpg',
    user5: './assets/img/users/20.jpg',
    width: 'width:100%',
    background: 'success',
    date: '03-04-2023',
    status: 'completed',
    tasks: '100',
    task1: '100',
    progress: '100%',
    textcolor: 'success',
  },
  {
    id: '10',
    title: 'Server Side Validation',
    user1: './assets/img/users/8.jpg',
    user2: './assets/img/users/14.jpg',
    user3: './assets/img/users/16.jpg',
    user4: './assets/img/users/17.jpg',
    user5: './assets/img/users/18.jpg',
    user7: './assets/img/users/19.jpg',
    width: 'width:50%',
    background: 'primary',
    date: '10-04-2023',
    status: 'In progress',
    tasks: '80',
    task1: '160',
    progress: '50%',
    textcolor: 'primary',
  },
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  chartOptions: any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Projects',
          type: 'column',
          data: [1.8, 2.5, 2.5, 1.5, 2.5, 2.8, 3.8],
          color: '#5a66f1',
        },
        {
          name: 'Tasks',
          type: 'column',
          data: [1.1, 2.2, 3.1, 4, 4.1, 4.9, 6.5],
          color: '#78b2fb',
        },
        {
          name: 'Revenue',
          type: 'line',
          data: [20, 29, 37, 35, 44, 43, 50],
          color: '#b1b4ba',
        },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        height: 370,
        type: 'line',
        stacked: false,
        fontFamily: 'Poppins, Arial, sans-serif',
      },
      grid: {
        borderColor: 'rgba(107 ,114 ,128,0.1)',
        strokeDashArray: 3,
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: undefined,
      },
      xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      },
      yaxis: [
        {
          show: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: false,
            color: '#4eb6d0',
          },
          labels: {
            style: {
              colors: '#4eb6d0',
            },
          },
          title: {
            text: undefined,
          },
          tooltip: {
            enabled: true,
          },
        },
        {
          show: false,
          seriesName: 'Projects',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: false,
          },
          labels: {
            style: {
              colors: '#00E396',
            },
          },
          title: {
            text: undefined,
          },
        },
        {
          show: false,
          seriesName: 'Revenue',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: false,
          },
          labels: {
            show: false,
          },
          title: {
            text: undefined,
          },
        },
      ],
      tooltip: {
        enabled: true,
      },
      colors: ['#5a66f1', '#60a5fa', '#d5dde7'],
      legend: {
        show: true,
        position: 'top',
        offsetX: 40,
        fontSize: '13px',
        fontWeight: 'normal',
        labels: {
          colors: '#acb1b1',
        },
        markers: {
          width: 10,
          height: 10,
        },
      },
      stroke: {
        width: [0, 0, 1.5],
        curve: 'straight',
        dashArray: [0, 0, 0],
      },
      plotOptions: {
        bar: {
          columnWidth: '35%',
          borderRadius: 3,
        },
      },
    };
  }
  Projects = DATA;
  click = (id: string) => {
    const data = this.Projects.filter((x: { id: string }) => {
      return x.id != id;
    });
    this.Projects = data;
  };
}
