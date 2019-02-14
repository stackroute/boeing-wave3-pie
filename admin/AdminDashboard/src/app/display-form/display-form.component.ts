import { Component, OnInit, Input } from '@angular/core';
import { FormFormat } from '../formformat';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit {

  @Input() currentFormFormat: FormFormat;
  constructor() { }

  ngOnInit() {
  }

}
