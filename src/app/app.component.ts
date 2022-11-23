import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newMemberName: string = '';
  members: string[] = ["Laith Harb", "Vincent Gatho"];
  errorMsg: string = "";

  memberNameInput(name: string): void {
    this.newMemberName = name;
  }
  
  onAddMember(): void {

    if (!this.newMemberName) {
      this.errorMsg = "Please enter a name";
      return;
    }

    this.members.push(this.newMemberName);
    // console.log(this.members);
    this.newMemberName = '';
  }
}
