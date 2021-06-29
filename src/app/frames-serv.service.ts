import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api, Ceys, FramesImg, LetterImge, Painding, Value } from './img-ramka'

@Injectable({
    providedIn: 'root'
})
export class FramesServService {
    background: any = {};
    isMessage = false;
    text: string = '';
    isImg = true;
    div: any = [];
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
        api_promocode: '/promocode/',
        api_img: '/image',
        api_create_word: '/create-word/'
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


    imgColor: { ceys: Ceys, values: Value }[] = [
        {
        ceys: {
            id: 0,
            name_en: '',
            name_hy: '',
            name_ru: ''
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
            id: 0,
            name_en: '',
            name_hy: '',
            name_ru: ''
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
            id: 0,
            name_en: '',
            name_hy: '',
            name_ru: ''
        },
        values: {
            colored: false,
            withandblack: false,
            sepia: true,
            color: 'grey',
            child: 'grey',
        }
    }
];


    framesImge: FramesImg[] = [];
    //letterImge:LetterImge={}
    letterImges:LetterImge[] = [];
    constructor(private url: HttpClient) { }

    imgColorGet() {
        return this.url.get(this.api.worldApi + this.api.api_utils + this.api.api_color)
    }

    framesFoneGet() {
        return this.url.get(this.api.worldApi + this.api.api_utils + this.api.api_bgr)
    }

    getFrames() {
        return this.url.get(this.api.worldApi + this.api.api_utils + this.api.api_frame)
    }

    letterGet() { 
        return this.url.get(this.api.worldApi + this.api.api_img + this.api.api_create_word + this.text+'/',{
            params:new HttpParams().set('color',this.painding.id.toString())
        });
    }

    letterColection(character:string){
        return this.url.get(this.api.worldApi+this.api.api_img+this.api.api_img+'/',{
            params:new HttpParams().set('search',character)
        })
    }
}
