import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FramesServService } from './frames-serv.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent } from './ngbd-modal-content/ngbd-modal-content.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FramesImg } from './img-ramka';
import { isTemplateExpression } from 'typescript';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild("block", { static: false }) block: ElementRef | undefined;
  validateForm: FormGroup = new FormGroup({});
  frameWi: number | undefined;
  heigth: number | undefined;
  width: number | undefined;
  scale: number = 1;
  isActive = false;
  constructor(public frames: FramesServService, private modalService: NgbModal, private form: FormBuilder) { }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = this.block?.nativeElement.clientWidth | 1;
    this.heigth = this.block?.nativeElement.clientHeight | 1;
    this.scale = window.innerWidth / this.width - 0.4;
    if (this.scale > 1) {
      this.scale = 1;
    } else {
      this.scale = window.innerWidth / this.width - 0.4;
    }

  }

  ngOnInit(): void {
    this.imageClick(this.frames.index);
    this.validateForm = this.form.group(
      { text: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(9)]] }
    )
    localStorage.setItem('A', './assets/world_img/1.jpg');
    localStorage.setItem('B', './assets/world_img/4.jpg');
    localStorage.setItem('C', './assets/world_img/7.jpg');
    localStorage.setItem('D', './assets/world_img/10.jpg');
    localStorage.setItem('E', './assets/world_img/13.jpg');

    this.frames.imgColorGet().subscribe((el: any) => {
      for (let i = 0; i < el.count; i++) {
        this.frames.imgColor[i].ceys = el.results[i];
      }
    })

    this.frames.framesFoneGet().subscribe((el: any) => {
      this.frames.div = el.results;
      this.frames.background = el.results[0];
    })

    this.frames.getFrames().subscribe((el:any)=>{
      this.frames.framesImge = el.results;
    })

  }
  public setStyle() {
    let style = {
      transform: "translate(-50%, 10%)" + "scale(" + this.scale + ")"
    }
    return style
  }

  frameClick(img:FramesImg){
    this.frames.index = img.id;
    this.frames.frame = this.frames.framesImge.find(item => item.id === this.frames.index);
  }
  imageClick($event: number) {
    this.frames.index = $event + 1;
    this.frames.frame = this.frames.frames.find(item => item.id === this.frames.index);
  }

  getFrameId(img:FramesImg){
    return img.id === this.frames.index
  }
  getImgId(i: number) {
    return (i + 1) === this.frames.frame?.id;
  }

  changeBg(bg: any) {
    this.frames.background = bg;
  }

  imgFone(obj: any) {
    this.frames.painding.values = obj.values;
    this.frames.painding.id = obj.ceys.id;
    this.changeColorImg();
  }


  changeColorImg() {
    this.frames.text = this.validateForm.get('text')?.value;
    if (this.frames.painding.values.withandblack) {
      this.frames.painding.imgs = [];
      for (let i = 0; i < this.frames.text?.length; i++) {
        let img: string | null = localStorage?.getItem(this.frames.text[i].toUpperCase())
        if (typeof img === 'string') this.frames.painding.imgs.push(img);
      }

    }

    if (this.frames.painding.values.colored) {
      this.frames.painding.imgs = [];
      for (let i = 0; i < this.frames.text?.length; i++) {
        this.frames.painding.imgs.push('./assets/world_img/2.jpg');
      }
    }

    if (this.frames.painding.values.sepia) {
      this.frames.painding.imgs = [];
      for (let i = 0; i < this.frames.text?.length; i++) {
        this.frames.painding.imgs.push('./assets/world_img/8.jpg');
      }
    }
  }

  onSubmit() {
    if (this.validateForm.invalid) return;

    this.changeColorImg();
    this.frames.isImg = false;

  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
  }

  deletImg(ev: boolean) {
    this.frames.isImg = ev;
    this.validateForm.reset();

  }
}
