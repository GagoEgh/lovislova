import { Component, OnInit } from '@angular/core';
import { FramesServService } from './frames-serv.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent } from './ngbd-modal-content/ngbd-modal-content.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Value, } from './img-ramka'
  ;
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


    localStorage.setItem('A', './assets/world_img/1.jpg');
    localStorage.setItem('B', './assets/world_img/4.jpg');
    localStorage.setItem('C', './assets/world_img/7.jpg');
    localStorage.setItem('D', './assets/world_img/10.jpg');
    localStorage.setItem('E', './assets/world_img/13.jpg')
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

  imgFone(filter: Value) {
    this.frames.painding.values = filter;
    console.log('imgFone',this.frames.painding.values);

      this.changeColorImg();
  }


  changeColorImg(){  
    this.frames.text = this.validateForm.get('text')?.value;
    if (this.frames.painding.values.withandblack) {
      this.frames.painding.imgs = [];
      for (let i = 0; i < this.frames.text?.length; i++) {
        let img: string | null = localStorage?.getItem(this.frames.text[i].toUpperCase());
        if (typeof img === 'string') this.frames.painding.imgs.push(img);
      }
    }

    if(this.frames.painding.values.colored){
      this.frames.painding.imgs = [];
      for (let i = 0; i < this.frames.text?.length; i++) {
       this.frames.painding.imgs.push('./assets/world_img/2.jpg');
      }
    }

    if(this.frames.painding.values.sepia){
      this.frames.painding.imgs = [];
      for (let i = 0; i < this.frames.text?.length; i++) {
       this.frames.painding.imgs.push('./assets/world_img/8.jpg');
      }
    }
    console.log(this.frames.painding);
  }
  onSubmit() {
    if (this.validateForm.invalid) return;

    this.changeColorImg();

    this.frames.isImg = false;

  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
  }
}
