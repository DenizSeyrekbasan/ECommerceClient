import { Component, OnInit } from '@angular/core';
import {
  AlertifyService,
  MessageType,
  Position,
} from '../../../services/admin/alertify.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent extends BaseComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    spinnerService: NgxSpinnerService
  ) {
    super(spinnerService);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallNewtonCradle);
  }

  click() {
    this.alertifyService.message('Merhaba', {
      messageType: MessageType.Error,
      delay: 5,
      dismissOthers: false,
      position: Position.BottomRight,
    });
  }

  dismiss() {
    this.alertifyService.dismiss();
  }
}
