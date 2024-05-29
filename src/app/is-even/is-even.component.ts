import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-is-even',
  standalone: true,
  imports: [],
  templateUrl: './is-even.component.html',
  styleUrl: './is-even.component.css'
})
export class IsEvenComponent {
  counter = input.required({
    alias: 'counterValue',
    transform: this.isCounterEven
  })

  isCounterEven(data: number) : boolean {
    const result = data % 2 === 0
    return result
  }
  
}
