import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from 'src/app/components/basicui/tables/data_table_component/mat-dialog/mat-dialog.component';

const USER_DATA = [
  {
    id: 1,
    name: 'John Smith',
    occupation: 'Advisor',
    dateOfBirth: '1984-05-05',
    age: 36,
  },
  {
    id: 2,
    name: 'Muhi Masri',
    occupation: 'Developer',
    dateOfBirth: '1992-02-02',
    age: 28,
  },
  {
    id: 3,
    name: 'Peter Adams',
    occupation: 'HR',
    dateOfBirth: '2000-01-01',
    age: 20,
  },
  {
    id: 4,
    name: 'Lora Bay',
    occupation: 'Marketing',
    dateOfBirth: '1977-03-03',
    age: 43,
  },
];

const COLUMNS_SCHEMA = [
  {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },
  {
    key: 'name',
    type: 'text',
    label: 'Full Name',
  },
  {
    key: 'occupation',
    type: 'text',
    label: 'Occupation',
  },
  {
    key: 'dateOfBirth',
    type: 'date',
    label: 'Date of Birth',
  },
  {
    key: 'age',
    type: 'number',
    label: 'Age',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: 'Action',
  },
];

interface Input {
  id: any;
  firstName: string;
  lastName: string;
  position: string;
  startData: string;
  salary: string;
  email: string;
  editable: any;
}
const inputs: Input[] = [
  {
    id: '1',
    firstName: 'Bella',
    lastName: 'Chloe',
    position: 'System Developer',
    startData: '2018/03/12',
    salary: '$654,765',
    email: 'b.Chloe@datatables.net',
    editable: false,
  },
  {
    id: '2',
    firstName: 'Donna',
    lastName: 'Bond',
    position: 'Account Manager',
    startData: '2012/02/21',
    salary: '$543,654',
    email: 'd.bond@datatables.net',
    editable: false,
  },
  {
    id: '3',
    firstName: 'Harry',
    lastName: 'Carr',
    position: 'Technical Manager',
    startData: '20011/02/87',
    salary: '$86,000',
    email: 'h.carr@datatables.net',
    editable: false,
  },
  {
    id: '4',
    firstName: 'Lucas',
    lastName: 'Dyer',
    position: 'Javascript Developer',
    startData: '2014/08/23',
    salary: '$456,123',
    email: 'l.dyer@datatables.net',
    editable: false,
  },
  {
    id: '5',
    firstName: 'Karen',
    lastName: 'Hill',
    position: 'Sales Manager',
    startData: '2010/7/14',
    salary: '$432,230',
    email: 'k.hill@datatables.net',
    editable: false,
  },
  {
    id: '6',
    firstName: 'Dominic',
    lastName: 'Hudson',
    position: 'Sales Assistant',
    startData: '2015/10/16',
    salary: '$654,300',
    email: 'd.hudson@datatables.net',
    editable: false,
  },
];

@Component({
  selector: 'app-edittables',
  templateUrl: './edittables.component.html',
  styleUrls: ['./edittables.component.scss'],
})
export class EdittablesComponent {
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;

  constructor(public dialog: MatDialog) {}

  user = inputs;
  trash = (id: any) => {
    const data = this.user.filter((x) => {
      return x.id != id;
    });
    this.user = data;
  };

  edit(item: any) {
    this.user.forEach((element: { editable: boolean; }) => {
      element.editable = false;
    });
    item.editable = true;
  }

  update(outPut: any) {
    // console.log(outPut);
  }

  addRow() {
    const newRow = {
      id: Date.now(),
      name: '',
      occupation: '',
      dateOfBirth: '',
      age: 0,
      isEdit: true,
    };
    this.dataSource = [newRow, ...this.dataSource];
  }

  removeRow(id: number) {
    this.dataSource = this.dataSource.filter((u) => u.id !== id);
  }

  removeSelectedRows() {
    this.dialog
      .open(MatDialogComponent)
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.dataSource = this.dataSource.filter((u: any) => !u.isSelected);
        }
      });
  }

  isAllSelected() {
    return this.dataSource.every((item: any) => item.isSelected);
  }

  isAnySelected() {
    return this.dataSource.some((item: any) => item.isSelected);
  }

  selectAll(event: { checked: any }) {
    this.dataSource = this.dataSource.map((item: any) => ({
      ...item,
      isSelected: event.checked,
    }));
  }
}
