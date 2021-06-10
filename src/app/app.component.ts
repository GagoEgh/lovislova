import { Component, OnInit} from '@angular/core';
import { FramesServService } from './frames-serv.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent } from './ngbd-modal-content/ngbd-modal-content.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    isActive = false;
    constructor(public frames:FramesServService,private modalService: NgbModal){}
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

    changeBg(color:string){
        this.frames.background = color;
        console.log(this.frames.background);
    }

    
  open() {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
  }
}
