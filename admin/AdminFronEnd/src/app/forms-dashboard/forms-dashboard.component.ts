import { Component, OnInit } from '@angular/core';
import { FormFormat } from '../form-format';
import { FormFormatsService } from '../from-formats.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forms-dashboard',
  templateUrl: './forms-dashboard.component.html',
  styleUrls: ['./forms-dashboard.component.css']
})
export class FormsDashboardComponent implements OnInit {


  formformats: FormFormat[];
  constructor(private formFormatsService: FormFormatsService) { }

  ngOnInit() {
    this.getAllFormFormats();
  }
  getAllFormFormats(): void {
    this.formFormatsService.getAllFormFormats().subscribe(formformats => this.formformats = formformats);
  }

}
