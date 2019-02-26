import { Component, OnInit, Input, Output } from '@angular/core';
import { FormFormat } from '../formformat';
import { FormServiceService } from 'app/form-service.service';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit {

  @Input() currentFormFormat: FormFormat;
  @Input() showForm
  @Output() deleteFieldIsClicked: false;
  newField: string;
  constructor(private formService: FormServiceService) { }

  ngOnInit() {
    this.currentFormFormat = {formId: 0, formName: "Temp", fields: []};
  }
  deleteField(field): void {
    this.currentFormFormat.fields = this.currentFormFormat.fields.filter(obj => obj !== field);
  }
  addField(): void {
    this.currentFormFormat.fields.push(this.newField);
  }
  saveForm(): void {
    // this.formService.deleteForm(this.currentFormFormat.formId);
    // this.formService.saveForm(this.currentFormFormat);
    this.formService.updateForm(this.currentFormFormat).subscribe();
  }

}
