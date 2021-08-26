import { Component } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
import { TodosService } from 'src/app/shared/todos.service';

@Component({
  selector: 'app-uebersicht-diagramm',
  templateUrl: './uebersicht-diagramm.component.html',
  styleUrls: ['./uebersicht-diagramm.component.scss']
})
export class UebersichtDiagrammComponent {
  allMondayTodos$: Todo[] = [];
  count: number = 2;
  saleData: any[] = [];
  /* [
    { name: "Montag", value: 4 },
    { name: "Dienstag", value: 3 },
    { name: "Mittwoch", value: 15 },
    { name: "Donnerstag", value: 11 },
    { name: "Freitag", value: 5 }
  ]*/
  
  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.getAllMondayTodos().subscribe(
      res => {
        this.allMondayTodos$ = res;
        
        let data = {
          "name": "Montag",
          "value": this.allMondayTodos$.length,
        }
        //this.saleData.splice(0, 1, data);
        //console.log(this.saleData)
        this.saleData = [...this.saleData, {"name": "Montag", "value": this.allMondayTodos$.length} ];
        console.log(this.saleData)
      }
    )  
  }
}

//this.allMondayTodos = this.todosService.getAllMondayTodos();
    /*this.allTuesdayTodos = this.todosService.getAllTuesdayTodos();
    this.allWednesdayTodos = this.todosService.getAllWednesdayTodos();
    this.allThursdayTodos = this.todosService.getAllThursdayTodos();
    this.allFridayTodos = this.todosService.getAllFridayTodos();
    this.allSaturdayTodos = this.todosService.getAllSaturdayTodos();
    this.allSundayTodos = this.todosService.getAllSundayTodos();*/