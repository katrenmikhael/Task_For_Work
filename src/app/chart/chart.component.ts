import { Component ,OnInit} from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{
  chart: any = [];


  ngOnInit(): void {
    let links = document.querySelectorAll('a');
    for(let i = 0; i < links?.length; i++){
      links[i].addEventListener('click',()=>{
        for(let i = 0; i < links?.length; i++){

          links[i].classList.remove(
            'border-bottom',
            'border-primary',
            'text-primary'
           );
           links[i].classList.add('text-dark');
        }
        links[i].classList.add('border-bottom','border-primary','text-primary');
        links[i].classList.remove('text-dark');
      })
    }
     var myChart = new Chart("myChart", {
    type: 'line',
    data: {
        labels: ['May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{

          data: [50,100, 150,110,100,390,380, 280,270,180,220,210,130,170,300,320,370,290,250,150,60],
          fill: true,
          borderColor: '#5051F9',
          tension: 0.5,

        },
        {

          data: [10,50, 100,110,200,230,300, 310,190,220,20,25,50,40,25,80,100,180,190,110,100],
          fill: true,
          borderColor: '#1EA7FF',
          tension: 0.5

        }
      ]
    },
    options: {

        scales: {
            y: {
                beginAtZero: true,
                max: 400,
                min: 0,
                ticks: {
                    stepSize: 100
                },


            },
            x:{
              grid: {
                display: false,
              }
            }

        },
        plugins: {
          title: {
            display: false
          },
          legend: {
            display:false
          }
        },
    }
});
var chart2 = new Chart("chart2", {
  type: 'line',
  data: {
      labels: ['may','Jun','Jul','may','Jun','Jul','may'],
      datasets: [{

        data: [10,60,10,100,60,150,100],
        fill: false,
        borderColor: '#5051F9',
        tension: 0.5,

      },

    ]
  },
  options: {
    elements: {
      point:{
          radius: 0
      }
  },
      scales: {
          y: {
            display:false,
              beginAtZero: true,
              max: 150,
              min: 0,
              ticks: {
                  stepSize: 1
              },
              grid: {
                display: false,
              }

          },
          x:{
            display:false,
            grid: {
              display: false,
            }
          }

      },
      plugins: {
        title: {
          display: false
        },
        legend: {
          display:false
        }
      },
  }
});
var chart3 = new Chart("chart3", {
  type: 'line',
  data: {
      labels: ['may','Jun','Jul','may','Jun','Jul','may'],
      datasets: [{

        data: [10,60,10,100,60,150,100],
        fill: false,
        borderColor: '#1EA7FF',
        tension: 0.5,

      },

    ]
  },
  options: {
    elements: {
      point:{
          radius: 0
      }
  },
      scales: {
          y: {
            display:false,
              beginAtZero: true,
              max: 150,
              min: 0,
              ticks: {
                  stepSize: 1
              },
              grid: {
                display: false,
              }

          },
          x:{
            display:false,
            grid: {
              display: false,
            }
          }

      },
      plugins: {
        title: {
          display: false
        },
        legend: {
          display:false
        }
      },
  }
});
var chart4 = new Chart("chart4", {
  type: 'line',
  data: {
      labels: ['may','Jun','Jul','may','Jun','Jul','may'],
      datasets: [{

        data: [10,60,10,100,60,150,100],
        fill: false,
        borderColor: '#FF614C',
        tension: 0.5,

      },

    ]
  },
  options: {
    elements: {
      point:{
          radius: 0
      }
  },
      scales: {
          y: {
            display:false,
              beginAtZero: true,
              max: 150,
              min: 0,
              ticks: {
                  stepSize: 1
              },
              grid: {
                display: false,
              }

          },
          x:{
            display:false,
            grid: {
              display: false,
            }
          }

      },
      plugins: {
        title: {
          display: false
        },
        legend: {
          display:false
        }
      },
  }
});
  }



}
