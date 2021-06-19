import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardingDomainModule } from '@my-nx-workspace/boarding/domain';
import { UpgradeComponent } from './upgrade.component';

@NgModule({
  imports: [CommonModule, BoardingDomainModule],
  declarations: [UpgradeComponent],
  exports: [UpgradeComponent],
})
export class BoardingFeatureUpgradeModule {}
