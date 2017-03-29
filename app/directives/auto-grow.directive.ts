import {Directive, ElementRef, Renderer} from 'angular2/core'; // ElementRef gives us access to the host element // Renderer: a service we use to modifiy the host element

@Directive({
  selector: '[autoGrow]', // [] refers to HTML attributes
  host: { // host is used to subscribe to events raised from this element
    '(focus)': 'onFocus()', // binding onFocus method to the focus event // onFocus is a method in this directive class
    '(blur)': 'onBlur()'
  }
})
export class AutoGrowDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { // private keyword, create a private variable and initialize it for this class
  }

  onFocus() {
    // this.renderer.setElementStyle(this.el, 'width', '200'); //WARN: this is the code from video which caused an undefined error in console
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200'); // fixed version
  }

  onBlur() {
    // this.renderer.setElementStyle(this.el, 'width', '120');
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
  }
}