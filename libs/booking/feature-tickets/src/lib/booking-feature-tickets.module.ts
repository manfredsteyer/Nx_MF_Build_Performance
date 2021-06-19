import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDomainModule } from '@my-nx-workspace/booking/domain';
import { TicketsComponent } from './tickets.component';

@NgModule({
  imports: [CommonModule, BookingDomainModule],
  declarations: [TicketsComponent],
  exports: [TicketsComponent],
})
export class BookingFeatureTicketsModule {}
