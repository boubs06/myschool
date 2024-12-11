import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [MatFormField, FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent implements OnInit{
  form : FormGroup
  
  constructor(private bottomSheetRef: MatBottomSheetRef<AddStudentComponent>) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      numero: new FormControl('',Validators.required),
      prenom: new FormControl('',Validators.required),
      nom: new FormControl('',Validators.required),
      classe: new FormControl('',Validators.required),
  })
  }

  enregistrer() {
    console.log("saved ascendant  >>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.form.value)

    
      this.bottomSheetRef.dismiss({ result: this.form.value });
 
    
  }
}
