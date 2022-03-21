import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent implements OnInit, OnDestroy {
  constructor(public modal: ModalService) {}
  auth: string = 'auth';
  ngOnInit(): void {
    this.modal.register(this.auth);
  }
  ngOnDestroy(): void {
    this.modal.unregister(this.auth);
  }
}
