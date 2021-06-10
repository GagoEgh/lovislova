import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent} from './ngbd-modal-content/ngbd-modal-content.component';



@NgModule({
  declarations: [
    AppComponent,
    NgbdModalContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    FormsModule,
    ColorPickerModule,
    NgbModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
