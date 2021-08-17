import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onToggleSidebar = new EventEmitter();
  @Output() onChangeModule = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.onToggleSidebar.emit();
  }

  changeModule(module: string) {
    this.onChangeModule.emit(module);
  }
}