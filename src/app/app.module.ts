import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatDialogModule, MatButtonModule, MatCardModule, MatTooltipModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { TootipComponent } from './tootip/tootip.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    MyDialogComponent,
    TootipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
