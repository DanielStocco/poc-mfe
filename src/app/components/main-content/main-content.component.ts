import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @Input() showSidebar;
  @Input() selectedModule = 'todo';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onChangeSelectedModule(module: string) {
    this.selectedModule = module;
    this.router.navigate([module + '/list']);
  }
}
