// import { Injectable } from '@angular/core'
import { InjectionToken } from '@angular/core';



export let TOASTR_TOKEN = new InjectionToken<IToastr>('toastr')

export interface IToastr{
  success(message: string, title?: string): void;
  info(message: string, title?: string): void;
  warning(message: string, title?: string): void;
  error(message: string, title?: string): void;
}

// @Injectable()
// export class ToastrService {
//   success(message: string, title?: string) {
//     toastr.success(message, title)
//   }
//   info(message: string, title?: string) {
//     toastr.info(message, title)
//   }
//   warning(message: string, title?: string) {
//     toastr.warning(message, title)
//   }
//   error(message: string, title?: string) {
//     toastr.error(message, title)
//   }
// }
