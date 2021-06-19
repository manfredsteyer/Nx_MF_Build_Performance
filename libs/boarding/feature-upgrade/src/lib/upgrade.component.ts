import { Component, OnInit} from '@angular/core';
import { UpgradeFacade } from '@my-nx-workspace/boarding/domain';

@Component({
  selector: 'boarding-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent implements OnInit {
    
    
    ticketList$ = this.upgradeFacade.ticketList$;


    constructor(private upgradeFacade: UpgradeFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.upgradeFacade.load();
    }

}

