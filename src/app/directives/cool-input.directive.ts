import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[coolInput]'
})
export class CoolInputDirective implements OnInit {

  @Input() coolInputDefaultBgColor: string = 'white';
  @Input() coolInputBgColor: string = 'orange';

  constructor(private element: ElementRef, private rend: Renderer2) {}

  private _backgroundColor: string = '';
  @HostBinding('style.backgroundColor')
  get getBgColor() {
    return this._backgroundColor;
  }

  private _isOnFocus: boolean = false;
  @HostBinding('class.isOnFocus')
  get getIsOnFocus() {
    return this._isOnFocus;
  }

  @HostListener('focus')
  onFocus() {
    this.changeElBg(this.coolInputBgColor);
    this._isOnFocus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.changeElBg(this.coolInputDefaultBgColor);
    this._isOnFocus = false;
  }

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement) {
    console.log(target);
  }

  ngOnInit() {
    this.changeElBg(this.coolInputDefaultBgColor);
    this.rend.setAttribute(this.element.nativeElement, 'placeholder', this.element.nativeElement.getAttribute('placeholder') + '*');

    const text = this.rend.createElement('span');
    this.rend.setProperty(text, 'innerText', 'Obrigatório');
    this.rend.setStyle(text, 'color', 'red');
    this.rend.insertBefore(this.element.nativeElement.parentElement, text, this.rend.nextSibling(this.element.nativeElement));
  }

  changeElBg(color: string) {
    this._backgroundColor = color;
    // this.rend.setStyle(this.element.nativeElement, 'backgroundColor', color);
  }

}

