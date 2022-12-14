import {Directive, ElementRef, HostListener, EventEmitter, Output} from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickedOutDirective {

  constructor(private _elementRef: ElementRef) {
  }

  @Output()
  public clickOutside = new EventEmitter<MouseEvent>();

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }
    let el = this._elementRef.nativeElement
    const clickedInside = el === targetElement || el.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
}
