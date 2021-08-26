import { Component } from '@angular/core';
import { TodosService } from 'src/app/shared/todos.service';
@Component({
  selector: 'app-uebersicht-diagramm',
  templateUrl: './uebersicht-diagramm.component.html',
  styleUrls: ['./uebersicht-diagramm.component.scss']
})
export class UebersichtDiagrammComponent {
  basicData: any;
  basicOptions: any;
  count: number = 0;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.basicData = {
      labels: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
      datasets: [
          {
              label: 'Produktivität',
              backgroundColor: '#42A5F5',
              data: [5, 9, 8, 1, 6, 5, 4]
          }
      ]
    };
    
    this.basicOptions = {
      plugins: {
          legend: {
              labels: {
                  color: '#ebedef'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#ebedef'
              },
              grid: {
                  color: 'rgba(255,255,255,0.2)'
              }
          },
          y: {
              ticks: {
                  color: '#ebedef'
              },
              grid: {
                  color: 'rgba(255,255,255,0.2)'
              }
          }
      }
    }

    this.count = this.todosService.getAllMondayNumberOfTodos();
    //this.basicData.datasets[0].data = [...this.basicData.datasets[0].data];
      
    console.log(this.count);
    this.updateData(); 
        //this.basicData.datasets[0].splice(0,1, res);
        //this.basicData.datasets[0].data = [...this.basicData.datasets[0].data, 3]; 
    }

    updateData() {
        //return this.basicData.datasets[0].data[0] = this.count;
        
    }    
}

//this.allMondayTodos = this.todosService.getAllMondayTodos();
    /*this.allTuesdayTodos = this.todosService.getAllTuesdayTodos();
    this.allWednesdayTodos = this.todosService.getAllWednesdayTodos();
    this.allThursdayTodos = this.todosService.getAllThursdayTodos();
    this.allFridayTodos = this.todosService.getAllFridayTodos();
    this.allSaturdayTodos = this.todosService.getAllSaturdayTodos();
    this.allSundayTodos = this.todosService.getAllSundayTodos();*/