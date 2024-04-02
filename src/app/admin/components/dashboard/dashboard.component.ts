import { Component, OnInit } from '@angular/core';
import {
  AlertifyService,
  MessageType,
  Position,
} from '../../../services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private alertifyService: AlertifyService) {}

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
