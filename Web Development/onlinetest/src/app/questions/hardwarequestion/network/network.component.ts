import { Component } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent {
  points: number = 0
  activeButton: string = '';
  activeButton2: string = '';
  activeButton3: string = '';

  setActiveButton(button: string) {
    this.activeButton = button;
    console.log(this.activeButton); // Add this line
  }
  setActiveButton2(button: string) {
    this.activeButton2 = button;
    console.log(this.activeButton2); // Add this line
  }
  setActiveButton3(button: string) {
    this.activeButton3 = button;
    console.log(this.activeButton3); // Add this line
  }
  calculatePoints() {
    if (this.activeButton === 'ftp') {
      this.points += 1;
    }

    if (this.activeButton2 === 'http') {
      this.points += 1;
    }

    if (this.activeButton3 === 'smtp') {
      this.points += 1;
    }
    console.log('Total points:', this.points);
  }
  completeTest() {
    this.calculatePoints();
  }
}
