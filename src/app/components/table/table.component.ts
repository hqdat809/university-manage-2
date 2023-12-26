import { Component, Input, OnInit } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { ITable } from "./table.constant";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-table",
  standalone: true,
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
  imports: [MatTableModule, CommonModule],
})
export class TableComponent implements OnInit {
  @Input() columns: ITable[] = [];
  ELEMENT_DATA = [
    { studentId: 1, name: "Hydrogen", class: "H" },
    { studentId: 2, name: "Helium", class: "He" },
    { studentId: 3, name: "Lithium", class: "Li" },
    { studentId: 4, name: "Beryllium", class: "Be" },
    { studentId: 5, name: "Boron", class: "B" },
    { studentId: 6, name: "Carbon", class: "C" },
    { studentId: 7, name: "Nitrogen", class: "N" },
    { studentId: 8, name: "Oxygen", class: "O" },
    { studentId: 9, name: "Fluorine", class: "F" },
    { studentId: 10, name: "Neon", class: "Ne" },
  ];
  dataSource = this.ELEMENT_DATA;
  displayedColumns: string[] = ["studentId", "name", "class"];

  constructor() {}

  ngOnInit(): void {
    console.log(this.columns);
  }
}
