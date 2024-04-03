import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  constructor(private spinnerService: NgxSpinnerService) {}

  showSpinner(SpinnerNameType: SpinnerType) {
    this.spinnerService.show(SpinnerNameType);

    setTimeout(() => this.hideSpinner(SpinnerNameType), 1000);
  }

  hideSpinner(SpinnerNameType: SpinnerType) {
    this.spinnerService.hide(SpinnerNameType);
  }
}

export enum SpinnerType {
  BallNewtonCradle = 's1',
  BallZigZag = 's2',
  Cog = 's3',
}
