import { Injectable } from '@angular/core';

interface ImgRamka {
  id: number,
  img_top: string,
  img_top_rigth: string,
  img_rigth: string,
  img_rigth_bottom: string,
  img_bottom: string,
  img_bottom_left: string,
  img_left: string,
  img_left__top: string
}

@Injectable({
  providedIn: 'root'
})
export class FramesServService {
  frame:any;
  index=0;
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
}, {
    thumbImage: './assets/ramka_img/11_thumb.jpg'
}];

frames: ImgRamka[] = [
  {
      id: 1,
      img_top: "./assets/1_hor/1_ver_t.png",
      img_top_rigth: "./assets/1_hor/1_corners_tr.png",
      img_rigth: "./assets/1_hor/1_hor_r.png",
      img_rigth_bottom: "./assets/1_hor/1_corners_br.png",
      img_bottom: "./assets/1_hor/1_ver_b.png",
      img_bottom_left: "./assets/1_hor/1_corners_bl.png",
      img_left: "./assets/1_hor/1_hor_l.png",
      img_left__top: "./assets/1_hor/1_corners_tl.png"
  }, {
      id: 3,
      img_top: "./assets/3_rm/3_ver_t.png",
      img_top_rigth: "./assets/3_rm/3_corners_tr.png",
      img_rigth: "./assets/3_rm/3_hor_r.png",
      img_rigth_bottom: "./assets/3_rm/3_corners_br.png",
      img_bottom: "./assets/3_rm/3_ver_b.png",
      img_bottom_left: "./assets/3_rm/3_corners_bl.png",
      img_left: "./assets/3_rm/3_hor_l.png",
      img_left__top: "./assets/3_rm/3_corners_tl.png"
  }, {
      id: 4,
      img_top: "./assets/5_co/5_ver_t.png",
      img_top_rigth: "./assets/5_co/5_corners_tr.png",
      img_rigth: "./assets/5_co/5_hor_r.png",
      img_rigth_bottom: "./assets/5_co/5_corners_br.png",
      img_bottom: "./assets/5_co/5_ver_b.png",
      img_bottom_left: "./assets/5_co/5_corners_bl.png",
      img_left: "./assets/5_co/5_hor_l.png",
      img_left__top: "./assets/5_co/5_corners_tl.png"
  }, {
      id: 5,
      img_top: "./assets/6_ver/6_ver_t.png",
      img_top_rigth: "./assets/6_ver/6_corners_tr.png",
      img_rigth: "./assets/6_ver/6_hor_r.png",
      img_rigth_bottom: "./assets/6_ver/6_corners_br.png",
      img_bottom: "./assets/6_ver/6_ver_b.png",
      img_bottom_left: "./assets/6_ver/6_corners_bl.png",
      img_left: "./assets/6_ver/6_hor_l.png",
      img_left__top: "./assets/6_ver/6_corners_tl.png"
  }, {
      id: 6,
      img_top: "./assets/blu_rm/9_ver_t.png",
      img_top_rigth: "./assets/blu_rm/9_corners_tr.png",
      img_rigth: "./assets/blu_rm/9_hor_r.png",
      img_rigth_bottom: "./assets/blu_rm/9_corners_br.png",
      img_bottom: "./assets/blu_rm/9_ver_b.png",
      img_bottom_left: "./assets/blu_rm/9_corners_bl.png",
      img_left: "./assets/blu_rm/9_hor_l.png",
      img_left__top: "./assets/blu_rm/9_corners_tl.png"
  }, {
      id: 7,
      img_top: "./assets/senna/11_ver_t.png",
      img_top_rigth: "./assets/senna/11_corners_tr.png",
      img_rigth: "./assets/senna/11_hor_r.png",
      img_rigth_bottom: "./assets/senna/11_corners_br.png",
      img_bottom: "./assets/senna/11_ver_b.png",
      img_bottom_left: "./assets/senna/11_corners_bl.png",
      img_left: "./assets/senna/11_hor_l.png",
      img_left__top: "./assets/senna/11_corners_tl.png"
  }, {

      id: 2,
      img_top: "./assets/white_ramka/2_ver_t.png",
      img_top_rigth: "./assets/white_ramka/2_corners_tr.png",
      img_rigth: "./assets/white_ramka/2_hor_r.png",
      img_rigth_bottom: "./assets/white_ramka/2_corners_br.png",
      img_bottom: "./assets/white_ramka/2_ver_b.png",
      img_bottom_left: "./assets/white_ramka/2_corners_bl.png",
      img_left: "./assets/white_ramka/2_hor_l.png",
      img_left__top: "./assets/white_ramka/2_corners_tl.png"

  }
]
  constructor() { }
}
