import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FramesServService } from './frames-serv.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent } from './ngbd-modal-content/ngbd-modal-content.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FramesImg } from './img-ramka';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild("block", { static: false }) block: ElementRef | undefined;
  validateForm: FormGroup = new FormGroup({});
  margin_top: number | undefined;
  frameWi: number | undefined;
  heigth: number | undefined;
  width: number | undefined;
  scale: number = 1;
  isActive = false;
  constructor(public frames: FramesServService, private modalService: NgbModal, private form: FormBuilder) { }
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth <= 1024) {
      this.width = this.block?.nativeElement.clientWidth | 1;
      this.heigth = this.block?.nativeElement.clientHeight | 1;
      this.scale = window.innerWidth / this.width - 0.1;
    }
  }

  ngOnInit(): void {
    this.validateForm = this.form.group(
      { text: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(9)]] }
    )

    // localStorage.setItem('A', './assets/world_img/1.jpg');
    // localStorage.setItem('B', './assets/world_img/4.jpg');
    // localStorage.setItem('C', './assets/world_img/7.jpg');
    // localStorage.setItem('D', './assets/world_img/10.jpg');
    // localStorage.setItem('E', './assets/world_img/13.jpg');

    // this.frames.imgColorGet().subscribe((el: any) => {
    //   for (let i = 0; i < el.count; i++) {
    //     this.frames.imgColor[i].ceys = el.results[i];
    //   }
    //   console.log('el',this.frames.imgColor)
    // })

    this.imgColor();
    this.frames.framesFoneGet().subscribe((el: any) => {
      this.frames.div = el.results;
      this.frames.background = el.results[0];

    })

    this.frames.getFrames().subscribe((el: any) => {
      this.frames.framesImge = el.results;
      this.frameClick(this.frames.index)

    })

  }

  imgColor() {
    this.frames.imgColorGet().subscribe((el: any) => {
      for (let i = 0; i < el.count; i++) {
        this.frames.imgColor[i].ceys = el.results[i];
      }
      console.log('el', this.frames.imgColor)
    })
  }

  public setStyle() {
    let style = {
      transform: "translate(-50%, -5%)" + "scale(" + this.scale + ")"
    }
    return style
  }

  frameClick(id: number) {
    this.frames.index = id;
    this.frames.frame = this.frames.framesImge.find(item => item.id === this.frames.index);
  }

  getFrameId(img: FramesImg) {
    return img.id === this.frames.index
  }

  changeBg(bg: any) {
    this.frames.background = bg;
  }

  imgFone(obj: any) {
    this.frames.painding.values = obj.values;
    this.frames.painding.id = obj.ceys.id;
    console.log( this.frames.painding)
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

    // zapros
    this.frames.letterGet().subscribe((el: any) => {
      this.frames.letterImges = el;
      console.log('letterImges', this.frames.letterImges);
      this.frames.letterImges = this.frames.letterImges.filter(img => {
        return !img.not_found
      })
    })

  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
  }

  deletImg(ev: boolean) {
    this.frames.isImg = ev;
    this.validateForm.reset();
  }
}
