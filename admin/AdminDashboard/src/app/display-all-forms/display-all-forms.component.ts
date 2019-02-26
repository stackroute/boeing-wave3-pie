import { Component, OnInit } from "@angular/core";
import { FormFormat } from "../formformat";
import { FormServiceService } from "../form-service.service";

@Component({
  selector: "app-display-all-forms",
  templateUrl: "./display-all-forms.component.html",
  styleUrls: ["./display-all-forms.component.css"]
})
export class DisplayAllFormsComponent implements OnInit {
  allFormFormats: FormFormat[];
  currentFormFormat: FormFormat;

  showFormDetailsComponent = false;
  constructor(private formService: FormServiceService) {}

  ngOnInit() {
    this.getAllFormFormats();
  }
  getAllFormFormats(): void {
    this.formService
      .getAllFormFormats()
      .subscribe(allFormFormats => (this.allFormFormats = allFormFormats));
  }
  getAllFormFormatsOnEventClick(dullValue: string) {
    this.getAllFormFormats();
  }
  showFormDetails(formId: number): void {
    this.showFormDetailsComponent = true;
    this.formService
      .getFormFormat(formId)
      .subscribe(
        currentFormFormat => (this.currentFormFormat = currentFormFormat)
      );
  }
  deleteForm(formId: number): void {
    console.log('Delete Pressed');
    this.formService.deleteForm(formId).subscribe();
    this.formService
      .getAllFormFormats()
      .subscribe(allFormFormats => (this.allFormFormats = allFormFormats));
  }
  makeShowFormDetailsComponentFalse(): void {
    this.showFormDetailsComponent = false;
  }
}
