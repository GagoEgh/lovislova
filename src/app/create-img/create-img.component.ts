import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FramesServService } from '../frames-serv.service';

import { Painding } from '../img-ramka';
import { ImgCatalogComponent } from './img-catalog/img-catalog.component';


interface Letter {
  isSpan: boolean,
  isMenu: boolean,
  isForm: boolean
}

@Component({
  selector: 'app-create-img',
  templateUrl: './create-img.component.html',
  styleUrls: ['./create-img.component.css']
})
export class CreateImgComponent implements OnInit {
  isCreate = true;
  bottomText: FormGroup = new FormGroup({});
  validateForm: FormGroup = new FormGroup({});

  topLettering: Letter = {
    isSpan: false,
    isMenu: false,
    isForm: false
  };

  bottomLettering: Letter = {
    isSpan: false,
    isMenu: false,
    isForm: false
  }


  @Output() mainApp: EventEmitter<boolean> = new EventEmitter();

  constructor(public frames: FramesServService, private form: FormBuilder, private modalService: NgbModal) { }

  deleteTopProprty() {
    this.topLettering.isSpan = false;
    this.topLettering.isMenu = false;
    this.validateForm.reset();

  }

  deleteBottomProprty() {
    this.bottomLettering.isMenu = false;
    this.bottomLettering.isSpan = false;
    this.bottomText.reset();
  }

  onMouseleave() {
    if (!this.validateForm.get('topText')?.value) {
      this.topLettering.isMenu = false;
      this.topLettering.isForm = false;
    }

    if (!this.bottomText.get('btmText')?.value) {
      this.bottomLettering.isMenu = false;
      this.bottomLettering.isForm = false;
    }

    if (this.validateForm.get('topText')?.value) {
      this.topLettering.isSpan = true;
      this.topLettering.isMenu = false;
    }

    if (this.bottomText.get('btmText')?.value) {
      this.bottomLettering.isSpan = true;
      this.bottomLettering.isMenu = false;
    }

  }

  onMouseenter() {
    if (!this.validateForm.get('topText')?.value) {
      this.topLettering.isMenu = true;
      this.topLettering.isSpan = false;
      this.topLettering.isForm = true;
    }


    if (!this.bottomText.get('btmText')?.value) {
      this.bottomLettering.isMenu = true;
      this.bottomLettering.isForm = true;
      this.bottomLettering.isSpan = false;
    }

    if (this.validateForm.get('topText')?.value) {
      this.topLettering.isMenu = true;
    }

    if (this.bottomText.get('btmText')?.value) {
      this.bottomLettering.isMenu = true;
    }

  }

  changeImg() {
    this.frames.painding.imgs = [];
    for (let i = 0; i < this.frames.text?.length; i++) {
      this.frames.painding.imgs.push('./assets/world_img/11.jpg');
    }
  }

  ngOnInit(): void {
    this.validateForm = this.form.group(
      { topText: [null] },
    );
    this.bottomText = this.form.group(
      { btmText: [null] }
    )
    this.frames.isMessage = false;
  }

  getApp(isBool: boolean) {
    this.mainApp.emit(isBool);
  }

  open(img: any) {
    this.frames.letterColection(img.character.toUpperCase()).subscribe((el: any) => {
      const modalRef = this.modalService.open(ImgCatalogComponent, { size: 'lg' });
      modalRef.componentInstance.img = el.results;
      modalRef.result.then((result) => { }, (reason) => {
        if (reason) {
          console.log('reason',reason);
          console.log('nerka',img.image.thumbnail )
        }
      })
    })


    // modalRef.componentInstance.name = 'World';

  }
}
