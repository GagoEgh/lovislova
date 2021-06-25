import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api, FramesImg, ImgRamka, Painding } from './img-ramka'

@Injectable({
    providedIn: 'root'
})
export class FramesServService {
    background:any = { };
    text: string = '';
    isImg = true;
    div:any= [];
    frame: any;
    index = 3;
    
    api: Api = {
        worldApi: 'http://sirun-bar-api.annaniks.com',
        api_utils: '/utils',
        api_bgr: '/background/',
        api_frame: '/frame/',
        api_color: '/color/',
        api_category: '/category/',
        api_character: '/character/',
        api_created_frame_category: '/created-frame-category/',
        api_promocode: '/promocode/'
    }

    painding: Painding = {
        values: {
            colored: false,
            withandblack: true,
            sepia: false,
            color: 'black',
            child: 'white',
        },
        imgs: [],
        id: 2
    };


    imgColor = [{
        ceys: {
            id: null,
            name_en: null,
            name_hy: null,
            name_ru: null
        },
        values: {
            colored: false,
            withandblack: true,
            sepia: false,
            color: 'black',
            child: 'white',
        }

    }, {
   
        ceys: {
            id: null,
            name_en: null,
            name_hy: null,
            name_ru: null
        },
        values: {
            colored: true,
            withandblack: false,
            sepia: false,
            color: 'red',
            child: 'palevioletred',
        }
    }, {
        ceys: {
            id: null,
            name_en: null,
            name_hy: null,
            name_ru: null
        },
        values: {
            colored: false,
            withandblack: false,
            sepia: true,
            color: 'grey',
            child: 'grey',
        }
    }];

    imageObject = [{
        sum: "1000 dram",
        baget: 'sev',
        width: '3cm',
        thumbImage: './assets/ramka_img/1_thumb.jpg',
    }, {
        sum: "1500 dram",
        baget: 'spitak',
        width: '3.5cm',
        thumbImage: './assets/ramka_img/2_thumb.jpg',
    }, {
        sum: "2000 dram",
        baget: 'sev voskezoc',
        width: '3cm',
        thumbImage: './assets/ramka_img/3_thumb.jpg',
    }, {
        sum: "3400 dram",
        baget: 'dub',
        width: '4.5cm',
        thumbImage: './assets/ramka_img/5_thumb.jpg',
    }, {
        sum: "2500 dram",
        baget: 'moxragujn',
        width: '3cm',
        thumbImage: './assets/ramka_img/6_thumb.jpg',
    }, {
        sum: "3500 dram",
        baget: 'kapujt',
        width: '2.5cm',
        thumbImage: './assets/ramka_img/9_thumb.jpg',
    }, {
        sum: "5000 dram",
        baget: 'dexnavun',
        width: '3cm',
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

    framesImge:FramesImg[] = [];
    constructor(private url: HttpClient) { }

    imgColorGet() {
        return this.url.get(this.api.worldApi + this.api.api_utils + this.api.api_color)
    }

    framesFoneGet(){
        return this.url.get(this.api.worldApi + this.api.api_utils+this.api.api_bgr)
    }

    getFrames(){
        return this.url.get(this.api.worldApi + this.api.api_utils+this.api.api_frame)
    }
}
