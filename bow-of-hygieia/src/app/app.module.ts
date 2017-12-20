import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NvD3Module } from 'ng2-nvd3';





import { AppComponent } from './app.component';
import { DrugComponent } from './drug/drug.component';
import { ModalComponent } from './modal/modal.component';



import { FdaService } from './fda.service';


import 'd3';
import 'nvd3';


@NgModule({
  declarations: [
    AppComponent,
    DrugComponent,
    ModalComponent,

  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NvD3Module
  ],
  providers: [FdaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
