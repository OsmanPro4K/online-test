import { Component } from '@angular/core';

@Component({
  selector: 'app-hardwarequestion',
  templateUrl: './hardwarequestion.component.html',
  styleUrls: ['./hardwarequestion.component.css']
})
export class HardwarequestionComponent {
  activeButton: string = '';

  setActiveButton(button: string) {
    this.activeButton = button;
  }
}
