import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent<T> implements OnInit {
  @Input() options: T[] = [];
  @Input() defaultName: string = '';

  @Output() selectedOption = new EventEmitter<number>();

  selectedValue: number = 0;

  ngOnInit() {
    // Set the initial selectedValue to the default option value
    if (this.options.length > 0) {
      this.selectedValue = this.options[0]['id'];
      this.onOptionSelected();
    }
  }
  

  onOptionSelected() {
    if (this.selectedValue !== null) {
      this.selectedOption.emit(this.selectedValue);
    }
  }
}
