import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AddStudentComponent } from '../student/add-student/add-student.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[] = ['numero', 'prenom', 'nom', 'classe'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private bottomSheet: MatBottomSheet) {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  

  openBottomSheet(): void {
    this.bottomSheet.open(AddStudentComponent);
  }
}

export interface PeriodicElement {
  numero: number;
  prenom: string;
  nom: number;
  classe: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { numero: 1, prenom: 'Hydrogen', nom: 1.0079, classe: 'H' },
  { numero: 2, prenom: 'Helium', nom: 4.0026, classe: 'He' },
  { numero: 3, prenom: 'Lithium', nom: 6.941, classe: 'Li' },
  { numero: 4, prenom: 'Beryllium', nom: 9.0122, classe: 'Be' },
  { numero: 5, prenom: 'Boron', nom: 10.811, classe: 'B' },
  { numero: 6, prenom: 'Carbon', nom: 12.0107, classe: 'C' },
  { numero: 7, prenom: 'Nitrogen', nom: 14.0067, classe: 'N' },
  { numero: 8, prenom: 'Oxygen', nom: 15.9994, classe: 'O' },
  { numero: 9, prenom: 'Fluorine', nom: 18.9984, classe: 'F' },
  { numero: 10, prenom: 'Neon', nom: 20.1797, classe: 'Ne' },
  { numero: 11, prenom: 'Sodium', nom: 22.9897, classe: 'Na' },
  { numero: 12, prenom: 'Magnesium', nom: 24.305, classe: 'Mg' },
  { numero: 13, prenom: 'Aluminum', nom: 26.9815, classe: 'Al' },
  { numero: 14, prenom: 'Silicon', nom: 28.0855, classe: 'Si' }
];