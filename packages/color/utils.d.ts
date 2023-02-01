/**
 * @typedef {object} HslColor
 * @property {number} h - integer: 0 ... 360
 * @property {number} s - integer: 0 ... 100
 * @property {number} l - integer: 0 ... 100
 * @property {number} [a] - float: 0 ... 1, optional
 *
 * @typedef {object} HsvColor
 * @property {number} h - float: 0 ... 360
 * @property {number} s - float: 0 ... 100
 * @property {number} v - float: 0 ... 100
 * @property {number} [a] - float: 0 ... 1, optional
 *
 * @typedef {object} RgbColor
 * @property {number} r - integer: 0 ... 255
 * @property {number} g - integer: 0 ... 255
 * @property {number} b - integer: 0 ... 255
 * @property {number} [a] - float: 0 ... 1, optional
 */
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
export type HexColor = string;
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
/**
 * Based on function [colorLuminance](@link https://bulma.io/documentation/overview/functions/)
 */
export declare function luminance(color: HexColor | RgbColor): number;
