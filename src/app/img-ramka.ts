export interface ImgRamka {  //jnjel
    id: number,
    img_top: string,
    img_top_rigth: string,
    img_rigth: string,
    img_rigth_bottom: string,
    img_bottom: string,
    img_bottom_left: string,
    img_left: string,
    img_left__top: string,
}

export interface Value {
    colored: boolean,
    withandblack: boolean,
    sepia: boolean,
    color: string,
     child: string,
}

export interface Painding {
    values: Value,
    imgs: string[],
    id:number
    
}

export interface Api{
    worldApi:string,
    api_utils: string,
    api_bgr:string,
    api_frame: string,
    api_color: string,
    api_category: string,
    api_character: string,
    api_created_frame_category: string,
    api_promocode:string
}

export interface FramesImg{
    id: number,
    name_en: string,
    name_ru: string,
    name_hy:string,
    description_en: string,
    description_ru: string,
    description_hy: string,
    price: number,
    corner_image: string,
    line_image: string,
    show_image: string,
}