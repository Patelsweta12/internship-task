import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatConfigurationRoutingModule } from './seat-configuration-routing.module';
import { SeatConfigHeaderComponent } from './seat-config-header/seat-config-header.component';
import { SeatConfigComponent } from './seat-config/seat-config.component';


@NgModule({
  declarations: [
    SeatConfigHeaderComponent,
    SeatConfigComponent
  ],
  imports: [
    CommonModule,
    SeatConfigurationRoutingModule
  ]
})
export class SeatConfigurationModule { }
