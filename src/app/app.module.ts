import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent} from './ngbd-modal-content/ngbd-modal-content.component';
import { CreateImgComponent } from './create-img/create-img.component';
import { MouseEventDirective } from './create-img/mouse-event.directive';
import { ImgCatalogComponent } from './create-img/img-catalog/img-catalog.component';
import { HttpClientModule }   from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NgbdModalContentComponent,
    CreateImgComponent,
    MouseEventDirective,
    ImgCatalogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    NgbModule,
    HttpClientModule
  ],

  providers: [],
  exports:[CreateImgComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
