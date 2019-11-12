import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';          // Required for *ngFor
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ReportsRoutingModule } from './reports-routing.module';

import { ReportsComponent } from './reports.component';
import { ShelfTimeReportComponent } from './shelf-time-report/shelf-time-report.component';
import { DeliveryTimeReportComponent } from './delivery-time-report/delivery-time-report.component';
import { RevenueReportComponent } from './revenue-report/revenue-report.component';
import { GrowthReportComponent } from './growth-report/growth-report.component';
import { RetailerReportComponent } from './retailer-report/retailer-report.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { ReportService } from './reports.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import {NgxPaginationModule} from 'ngx-pagination';//importing the module

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule, 
        ToastrModule.forRoot(),
        ReportsRoutingModule,
        NgxPaginationModule ,
        Ng2SearchPipeModule,
        Ng2OrderModule //add here
    ],
    declarations: [
        ReportsComponent,
        ShelfTimeReportComponent,
        DeliveryTimeReportComponent,
        RevenueReportComponent,
        GrowthReportComponent,
        RetailerReportComponent,
        SalesReportComponent
    ],
    exports: [
        ReportsComponent
    ],
    providers: [
        ReportService
    ]
  })
  export class ReportsModule {
      
  }