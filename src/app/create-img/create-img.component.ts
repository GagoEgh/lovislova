import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';

import { FramesServService } from '../frames-serv.service';


@Component({
  selector: 'app-create-img',
  templateUrl: './create-img.component.html',
  styleUrls: ['./create-img.component.css']
})
export class CreateImgComponent implements OnInit {
  count = 0;
  isCreate = true;
  par: ElementRef | undefined;
  span: ElementRef | undefined;
  bottomText: FormGroup = new FormGroup({});
  validateForm: FormGroup = new FormGroup({});
  topLettering = {
    count: 0,
    lettering: this.validateForm.get('text')?.value
  };
  bottomLettering = {
    count: 0,
    lettering: this.bottomText.get('btmtx')?.value
  }
  @Output() mainApp: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('change', { static: false }) change: ElementRef | undefined;
  @ViewChild('delete', { static: false }) delete: ElementRef | undefined;
  @ViewChild('letter', { static: false }) letter: ElementRef | undefined;
  @ViewChild('btletter', { static: false }) btletter: ElementRef | undefined;
  @ViewChild('myHover', { static: false }) myHover: ElementRef | undefined;
  @ViewChild('menu', { static: false }) menu: ElementRef | undefined;

  constructor(public frames: FramesServService, private form: FormBuilder, private ren: Renderer2) { }

  createEl(valid: any, form: string, elem: ElementRef | undefined) {

    
      if (valid.get(form)?.value) {
        let form = this.ren.parentNode(elem?.nativeElement);
        this.ren.removeClass(elem?.nativeElement, 'inStyle');
        // span
        let close = this.ren.createText('X');
        this.span = this.ren.createElement('span');
        this.ren.addClass(this.span, 'cursor')
        this.ren.appendChild(this.span, close);
        this.ren.appendChild(form, this.span);
        this.ren.addClass(elem?.nativeElement, 'font');
        
      }
    
  }

  changeImg() {
    this.frames.painding.imgs = [];
    for (let i = 0; i < this.frames.text?.length; i++) {
      this.frames.painding.imgs.push('./assets/world_img/11.jpg');
    }
  }

  changeElem() {
    let form = this.ren.parentNode(this.letter?.nativeElement);
    this.ren.removeChild(form, this.span);
    this.ren.removeClass(this.letter?.nativeElement, 'font');
    this.ren.addClass(this.letter?.nativeElement, 'inStyle');
    this.validateForm.reset();
    this.bottomText.reset();
    this.topLettering.count=0;
    this.bottomLettering.count=0;
    // this.count = 0;

  }

  ngAfterViewInit() {

    let parent = this.ren.parentNode(this.myHover?.nativeElement);
    this.ren.listen(parent, 'mouseenter', () => {
      this.ren.setStyle(this.menu?.nativeElement, 'opacity', '1');
      this.ren.setStyle(this.myHover?.nativeElement, 'opacity', '1');
      this.ren.setStyle(this.change?.nativeElement, 'opacity', '1');
      this.ren.setStyle(this.delete?.nativeElement, 'opacity', '1');

    })

    this.ren.listen(parent, 'mouseleave', () => {
      if(this.topLettering.count<1){
        this.createEl(this.validateForm, 'text', this.letter);
        this.topLettering.count++;
      }
        this.createEl(this.bottomText, 'btmtx', this.btletter);

        
      if (this.span) {
        this.ren.listen(this.span, 'click', () => {
          this.changeElem()
          if(this.topLettering.count<1){
            this.createEl(this.validateForm, 'text', this.letter);
            this.topLettering.count++;
          }
          

          this.createEl(this.btletter, 'btmtx', this.btletter);

        })
        this.ren.setStyle(this.change?.nativeElement, 'opacity', '0');
        this.ren.setStyle(this.delete?.nativeElement, 'opacity', '0');
      }

      if (!this.validateForm.get('text')?.value) {
        this.ren.setStyle(this.myHover?.nativeElement, 'opacity', '0');
      }

      if (!this.bottomText.get('btmtx')?.value) {
        this.ren.setStyle(this.menu?.nativeElement, 'opacity', '0');
      }


    })

  }

  ngOnInit(): void {
    this.validateForm = this.form.group(
      { text: [null] },
    );
    this.bottomText = this.form.group(
      { btmtx: [null] }
    )


  }

  getApp(isBool: boolean) {
    this.mainApp.emit(isBool);
  }


}
