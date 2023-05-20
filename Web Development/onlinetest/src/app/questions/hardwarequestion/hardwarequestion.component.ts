import { Component } from '@angular/core';

@Component({
  selector: 'app-hardwarequestion',
  templateUrl: './hardwarequestion.component.html',
  styleUrls: ['./hardwarequestion.component.css']
})
export class HardwarequestionComponent {
  activeButton: string = '';
  notNeeded: string = "";
  addHTML() {
    this.notNeeded = "Candidates full!"
  }
  setActiveButton(button: string) {
    this.activeButton = button;
  }
}
