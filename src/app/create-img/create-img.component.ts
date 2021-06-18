import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FramesServService } from '../frames-serv.service';


@Component({
  selector: 'app-create-img',
  templateUrl: './create-img.component.html',
  styleUrls: ['./create-img.component.css']
})
export class CreateImgComponent implements OnInit {
  count = 0;
  isCreate = true;
  lettering: string = '';
  par:ElementRef|undefined;
  validateForm: FormGroup = new FormGroup({});
  @Output() mainApp: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('myHover', { static: false }) myHover: ElementRef | undefined;
  @ViewChild('letter', { static: false }) letter: ElementRef | undefined;
  constructor(public frames: FramesServService, private form: FormBuilder, private ren: Renderer2) { }
  
  createEl() {
  
      if (this.validateForm.get('text')?.value) {
        // this.par = this.ren.createElement('p');
        // let text = this.ren.createText(this.validateForm.get('text')?.value);
        // this.ren.addClass(this.par,'font')
        // this.ren.appendChild(this.par, text);
        // this.ren.appendChild(this.myHover?.nativeElement,this.par);
        // let menu = this.ren.parentNode(this.letter?.nativeElement);
        // this.ren.removeChild(menu, this.letter?.nativeElement);

        // // span
        // let x = this.ren.createText('  x');
        // let span = this.ren.createElement('span');
        // this.ren.addClass(span,'cursor');
        // this.ren.appendChild(span,x);
        // this.ren.appendChild(this.par,span);
        this.ren.addClass(this.letter?.nativeElement,'font');
        this.ren.removeClass(this.letter?.nativeElement,'inStyle');

       // this.count++;
      }
    
  }


  ngAfterViewInit() {

    let parent = this.ren.parentNode(this.myHover?.nativeElement);

    this.ren.listen(parent, 'mouseenter', () => {
      this.ren.setStyle(this.myHover?.nativeElement, 'opacity', '1');
    })

    this.ren.listen(parent, 'mouseleave', () => {
      this.createEl();
    })
  
  }

 
  ngOnInit(): void {
    this.validateForm = this.form.group(
      { text: [null, [Validators.required]] }
    )

  }

  getApp(isBool: boolean) {
    this.mainApp.emit(isBool);
  }


}
