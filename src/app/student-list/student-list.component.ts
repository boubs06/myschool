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
  displayedColumns: string[] = ['numero', 'prenom', 'nom', 'classe', 'action'];
  dataSource 
  data !: any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }
  constructor(private bottomSheet: MatBottomSheet) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }
  



  openBottomSheet(): void {
    const dialogRef = this.bottomSheet.open(AddStudentComponent);
    dialogRef.afterDismissed().subscribe((data) => {

      console.log('Bottom sheet closed:', data.result);
      console.log('data :::: ', this.dataSource.filteredData.push(data.result));
      console.log('dataSource :', this.dataSource);
      this.ngAfterViewInit()
    });
  }
  remove(numero : string) {
    console.log("suppression : ",numero)
    this.dataSource.filteredData = this.dataSource.filteredData.filter(item => item.numero !== numero);
  }
}

export interface PeriodicElement {
  numero: string;
  prenom: string;
  nom: string;
  classe: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { numero: "ET1", prenom: 'Khady', nom: "Diouf", classe: 'GL L1' },
  { numero: "ET2", prenom: 'Pape', nom: "Ndiaye", classe: 'GL L1' },
  { numero: "ET3", prenom: 'Cheikh', nom: "Diallo", classe: 'GL L1' },
  { numero: "ET4", prenom: 'Sidy', nom: "Ndiaye", classe: 'GL L2' },
  { numero: "ET5", prenom: 'Barro', nom: "Seck", classe: 'GL L2' },
  { numero: "ET6", prenom: 'khadim', nom: "Fall", classe: 'GL L2' },
  { numero: "ET7", prenom: 'Adama', nom: "Diallo", classe: 'GL L3' },
  { numero: "ET8", prenom: 'Sofiatou', nom: "Ngom", classe: 'GL L3' },
  { numero: "ET9", prenom: 'Nafi', nom: "Cissé", classe: 'GL L3' },
  { numero: "ET10", prenom: 'Abdoulaye', nom: "Mbaye", classe: 'GL L3' },
];