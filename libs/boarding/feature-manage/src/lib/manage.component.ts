import { Component, OnInit} from '@angular/core';
import { ManageFacade } from '@my-nx-workspace/boarding/domain';

@Component({
  selector: 'boarding-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
    
    
    passengerList$ = this.manageFacade.passengerList$;


    constructor(private manageFacade: ManageFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.manageFacade.load();
    }

}

