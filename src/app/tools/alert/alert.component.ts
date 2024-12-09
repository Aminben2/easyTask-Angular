import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input({required : true}) alertStyle !: string
  @Input({required : true}) msg !: string

  @Output() closeAlert = new EventEmitter();
  onCloseAlert(){
    this.closeAlert.emit()
  }

  get classes(){
    return "alert "+ this.alertStyle
  }
}
