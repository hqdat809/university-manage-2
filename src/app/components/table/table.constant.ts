export interface ITable {
  label: string;
  colName: string;
  data: any;
}

export const studentColumns: ITable[] = [
  {
    label: "StudentID",
    colName: "studentId",
    data: "studentId",
  },
  {
    label: "Name",
    colName: "name",
    data: "name",
  },
  {
    label: "Class",
    colName: "class",
    data: "class",
  },
];
