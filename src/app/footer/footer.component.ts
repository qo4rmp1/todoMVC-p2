import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input()
  todos: any[];

  constructor() { }

  ngOnInit() {
  }

  @Output()
  doClertodos = new EventEmitter();

  cleartodos() {
    this.doClertodos.emit();
  }

  @Output()
  doChangeFilterType = new EventEmitter<string>();

  filterType = 'All';
  changeFilterType(val) {
    this.filterType = val;
    this.doChangeFilterType.emit(this.filterType);
  }
}
