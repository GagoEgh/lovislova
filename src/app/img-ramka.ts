export interface ImgRamka {
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

export interface Value {
    colored: boolean,
    withandblack: boolean,
    sepia: boolean
}

export interface Painding {
    values: Value,
    imgs: string[],
}