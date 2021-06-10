import { Component, OnInit } from '@angular/core';
import { FramesServService } from './frames-serv.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent } from './ngbd-modal-content/ngbd-modal-content.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isActive = false;
  validateForm: FormGroup = new FormGroup({});
  constructor(public frames: FramesServService, private modalService: NgbModal,
    private form: FormBuilder) { }
  ngOnInit(): void {
    this.imageClick(this.frames.index);
    this.validateForm = this.form.group(
      { text: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(9)]] }
    )
    localStorage.setItem('1','./assets/world_img/1.jpg');
    localStorage.setItem('2','./assets/world_img/2.jpg');
    localStorage.setItem('3','./assets/world_img/3.jpg');
    localStorage.setItem('4','./assets/world_img/4.jpg');
    localStorage.setItem('5','./assets/world_img/5.jpg');
    localStorage.setItem('6','./assets/world_img/6.jpg');
  }

  imageClick($event: number) {
    this.frames.index = $event + 1;
    this.frames.frame = this.frames.frames.find(item => item.id === this.frames.index);
  }

  getImgId(i: number) {
    return (i + 1) === this.frames.frame?.id;
  }

  changeBg(color: string) {
    this.frames.background = color;
    console.log(this.frames.background);
  }

  onSubmit() {
    console.log(this.validateForm);
    if(this.validateForm.invalid){
      return
    }
  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
  }
}
