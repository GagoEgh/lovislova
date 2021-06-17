import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FramesServService } from '../frames-serv.service';


@Component({
  selector: 'app-create-img',
  templateUrl: './create-img.component.html',
  styleUrls: ['./create-img.component.css']
})
export class CreateImgComponent implements OnInit {
  isCreate = true;
  lettering: string = '';
  validateForm: FormGroup = new FormGroup({});
  @Output() mainApp: EventEmitter<boolean> = new EventEmitter();
  constructor(public frames: FramesServService, private form: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.form.group(
      { text: [null] }
    )
    console.log('text', this.validateForm.get('text')?.value)
  }
  getApp(isBool: boolean) {

    this.mainApp.emit(isBool);
  }

  showlettering() {
    if (this.validateForm.get('text')?.value) {
        this.lettering = this.validateForm.get('text')?.value ;
    }
    return this.lettering
  }


}
