import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  modalOpen = false;

  openModal() {
    console.log("modalOpen");
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  confirmModal() {
    this.modalOpen = false;
  }
}
