import { Component, OnInit } from "@angular/core";
import { studentColumns } from "app/components/table/table.constant";

@Component({
  selector: "app-table-list",
  templateUrl: "./table-list.component.html",
  styleUrls: ["./table-list.component.css"],
})
export class TableListComponent implements OnInit {
  columns = studentColumns;

  constructor() {}

  ngOnInit() {}
}
