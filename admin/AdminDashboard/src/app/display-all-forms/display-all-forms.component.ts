import { Component, OnInit } from '@angular/core';
import {FormFormat} from '../formformat';
import {FormServiceService} from '../form-service.service';


@Component({
  selector: 'app-display-all-forms',
  templateUrl: './display-all-forms.component.html',
  styleUrls: ['./display-all-forms.component.css']
})
export class DisplayAllFormsComponent implements OnInit {

  allFormFormats: FormFormat[];
  constructor(private formService: FormServiceService) { }

  
  ngOnInit() {
    this.getAllFormFormats();
  }
  getAllFormFormats(): void {
    this.formService.getAllFormFormats().subscribe(allFormFormats => this.allFormFormats = allFormFormats);
  }

}
