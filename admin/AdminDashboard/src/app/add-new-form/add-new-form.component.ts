import { Component, OnInit } from '@angular/core';
import { FormFormat } from 'app/formformat';

@Component({
  selector: 'app-add-new-form',
  templateUrl: './add-new-form.component.html',
  styleUrls: ['./add-new-form.component.css']
})
export class AddNewFormComponent implements OnInit {

  private displayNewFormClicked = false;
  private newForm: FormFormat;

  constructor() { }

  ngOnInit() {
  }

  createNewForm(): void {

    this.displayNewFormClicked = true;
  }
}
