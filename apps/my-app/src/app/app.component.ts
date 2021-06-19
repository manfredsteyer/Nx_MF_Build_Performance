import { OnInit, Type } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'my-nx-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-app';

  bookingComp!: Type<unknown>;
  boardingComp!: Type<unknown>;

  async ngOnInit() {
    this.bookingComp = await import('booking/Component').then(m => m.AppComponent);
    this.boardingComp = await import('boarding/Component').then(m => m.AppComponent);
  }

}
