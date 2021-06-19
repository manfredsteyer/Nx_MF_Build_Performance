import { Component, OnInit} from '@angular/core';
import { TicketsFacade } from '@my-nx-workspace/booking/domain';

@Component({
  selector: 'booking-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
    
    
    ticketList$ = this.ticketsFacade.ticketList$;


    constructor(private ticketsFacade: TicketsFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.ticketsFacade.load();
    }

}

