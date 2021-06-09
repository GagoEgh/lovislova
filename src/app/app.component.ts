import { Component, OnInit } from '@angular/core';
import { FramesServService } from './frames-serv.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(public frames:FramesServService){}
    ngOnInit(): void {
        this.imageClick(this.frames.index);
    }

    imageClick($event:number){
        this.frames.index = $event+1;
        this.frames.frame = this.frames.frames.find(item=>item.id === this.frames.index);
      //  console.log(this.frames.imageObject[$event])
      this.frames.imageObject[$event]
    }

    changeBg(){
        console.log()
    }
}
