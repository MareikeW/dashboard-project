import { Component } from '@angular/core';

@Component({
  selector: 'app-uebersicht-diagramm',
  templateUrl: './uebersicht-diagramm.component.html',
  styleUrls: ['./uebersicht-diagramm.component.scss']
})
export class UebersichtDiagrammComponent {
  saleData = [
    { name: "Montag", value: 5 },
    { name: "Dienstag", value: 3 },
    { name: "Mittwoch", value: 15 },
    { name: "Donnerstag", value: 11 },
    { name: "Freitag", value: 5 }
  ];
}
