import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    imageObject = [{
        thumbImage: './assets/ramka_img/1_thumb.jpg', 
    }, {
        thumbImage: './assets/ramka_img/2_thumb.jpg', 
    }, {
        thumbImage: './assets/ramka_img/3_thumb.jpg',
    }, {
        thumbImage: './assets/ramka_img/5_thumb.jpg',
    }, {
        thumbImage: './assets/ramka_img/6_thumb.jpg',
    }, {
        thumbImage: './assets/ramka_img/9_thumb.jpg',
    },{
        thumbImage: './assets/ramka_img/11_thumb.jpg'
    }];
}
