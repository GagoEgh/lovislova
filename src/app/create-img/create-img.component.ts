import { Component, OnInit } from '@angular/core';
import { FramesServService } from '../frames-serv.service';


@Component({
  selector: 'app-create-img',
  templateUrl: './create-img.component.html',
  styleUrls: ['./create-img.component.css']
})
export class CreateImgComponent implements OnInit {
  size:string = '';
  cm:string = '';
  constructor(public frames:FramesServService) { }

  ngOnInit(): void {
  
    
    // this.size =  ((this.frames.painding.imgs.length*100 + this.frames.painding.imgs.length*8*100+2)/100)+'vw';
    // let p = this.size.slice(0,this.size.length-2);
    // this.cm = Math.round(+p*15*0.02635872298)+'sm';

    
  }

}
