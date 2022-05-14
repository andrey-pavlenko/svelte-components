export interface HslColor {
    h: number;
    s: number;
    l: number;
    a?: number;
}
export interface HsvColor {
    h: number;
    s: number;
    v: number;
    a?: number;
}
export interface RgbColor {
    r: number;
    g: number;
    b: number;
    a?: number;
}
export declare type HexColor = string;
export declare function isHexValid(hex: HexColor): boolean;
export declare function clamp(value: number, min: number, max: number): number;
export declare function hexToHsl(hex: HexColor): HslColor;
export declare function hexToRgb(hex: HexColor): RgbColor;
export declare function hslToRgb(hsl: HslColor): RgbColor;
export declare function rgbToHsl(rgb: RgbColor): HslColor;
export declare function hslToHex(hsl: HslColor): HexColor;
export declare function rgbToHex(rgb: RgbColor): HexColor;
export declare function hexToHsv(hex: HexColor): HsvColor;
export declare function rgbToHsv(rgb: RgbColor): HsvColor;
export declare function hsvToHex(hsv: HsvColor): HexColor;
export declare function hsvToRgb(hsv: HsvColor): RgbColor;
