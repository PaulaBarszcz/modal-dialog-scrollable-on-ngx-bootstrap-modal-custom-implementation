import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FSModalComponent } from './fs-modal/fs-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bsModalRef: BsModalRef;
  bsModalRef2: BsModalRef;

  constructor(private modalService: BsModalService) {}
  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template, {
      class: 'modal-lg modal-dialog-scrollable'
    });
  }
  openModalInSeparateComponent() {
    this.bsModalRef2 = this.modalService.show(FSModalComponent, {
      class: 'modal-lg modal-dialog-scrollable'
    });
  }
}
