import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/';

@Component({
  selector: 'fs-modal',
  templateUrl: './fs-modal.component.html',
  styleUrls: ['../app.component.scss']
})
export class FSModalComponent {
  constructor(private bsModalRef2: BsModalRef) {}
  close() {
    this.bsModalRef2.hide();
  }
}
