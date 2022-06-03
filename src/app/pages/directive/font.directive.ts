import {Directive, ElementRef, Renderer2} from "@angular/core";
import {CoreProvider} from "../main-view/core.provider";

@Directive({
  selector: '[font]',
})
export class FontDirective {
  constructor(renderer: Renderer2, el: ElementRef, coreService: CoreProvider) {
    let data = coreService.getSiteConfig();
    if (data) {
      renderer.setStyle(el.nativeElement, 'font-size', (data?.fontSize ? data?.fontSize : 12)+ 'px');
      console.log((data?.fontSize ? data?.fontSize : 12)+ 'px')
      renderer.setStyle(el.nativeElement, 'color', data?.fontColor ? data?.fontColor : 'black');
    }
  }
}
