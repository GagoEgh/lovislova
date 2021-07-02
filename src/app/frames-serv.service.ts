import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Api, Ceys, FramesImg, LetterImge, Painding, Value } from './img-ramka'

@Injectable({
    providedIn: 'root'
})
export class FramesServService {
    validateForm: FormGroup = new FormGroup({});
    letterImges: LetterImge[] = [];
    framesImge: FramesImg[] = [];
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
        id: 3,
        categoryId:1
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
        return this.url.get(this.api.worldApi + this.api.api_img + this.api.api_create_word + this.text + '/', {
            params: new HttpParams().set('color', this.painding.id.toString())
        });
    }

    letterColection(search: string = '', color: any = '', category: string = '') {
      return this.url.get( this.api.worldApi + this.api.api_img + this.api.api_img + '/?color='+`${color}`+'&category='+`${category}`+'&search='+`${search}`+'&limit=1000')
    }

    getCategory(){
        return this.url.get(this.api.worldApi + this.api.api_utils+this.api.api_category)
    }


    letterColorFone() {
        this.text = this.validateForm.get('text')?.value;
        this.letterGet().subscribe((el: any) => {
            this.letterImges = el;
            this.letterImges = this.letterImges.filter(img => {
                return !img.not_found
            })

            if (this.letterImges.length === 0 && this.text) {
                this.validateForm.reset();
                this.isMessage = true;
                this.isImg = true;
            }
        })
 
    }
}
