import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-img-catalog',
  templateUrl: './img-catalog.component.html',
  styleUrls: ['./img-catalog.component.css']
})
export class ImgCatalogComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {  }

  @Input() img:any;
  @Output()newItem = new EventEmitter()
  changeImg(obj:any){
    this.activeModal.dismiss(obj.thumbnail)
  }

}
