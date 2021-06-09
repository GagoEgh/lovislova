import { Component, OnInit, Renderer2 } from '@angular/core';
import { FramesServService } from './frames-serv.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    isActive = false;
    constructor(public frames:FramesServService,public r:Renderer2){}
    ngOnInit(): void {
        this.imageClick(this.frames.index);
    }

    imageClick($event:number){
        this.frames.index = $event+1;
        this.frames.frame = this.frames.frames.find(item=>item.id === this.frames.index);
    }

    getImgId(i:number){
      return (i+1)===this.frames.frame?.id;
    }
    changeBg(){
        console.log()
    }
}
