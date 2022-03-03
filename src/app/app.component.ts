import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator'
  input: string = ''
  numb: number = 0
  remove: boolean = false;


  updateValue(number: string) {
    if(this.remove){
      this.input = ''
      this.remove = false;
    }
    this.input += number
  }

  handlePlus() {
    this.numb = +this.input
    this.remove = true
  }

  handleEvaluate() {
    this.input = (+this.input + this.numb).toString()
    this.numb = 0
  }

  clearInput() {
    this.input = ''
  }
}
