import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FSModalComponent } from './fs-modal/fs-modal.component';

@NgModule({
  declarations: [AppComponent, FSModalComponent],
  imports: [BrowserModule, ModalModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent, FSModalComponent]
})
export class AppModule {}
