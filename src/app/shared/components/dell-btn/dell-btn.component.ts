import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type ButtonTypes = 'primary' | 'secondary' | 'default' | 'danger';
export type SizeTypes = 'small' | 'default' | 'large';

export interface ComputedClasses {
  [key: string]: boolean;
}

@Component({
  selector: 'app-dell-btn',
  templateUrl: './dell-btn.component.html',
  styleUrls: ['./dell-btn.component.scss'],
})
export class DellBtnComponent implements OnInit {
  @Input()
  disabled = false;

  @Input()
  type: ButtonTypes = 'default';

  @Input()
  size: SizeTypes = 'default';

  @Output()
  onClick: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() {
    // This is intentional
  }

  ngOnInit(): void {
    // This is intentional
  }

  computeClass(): ComputedClasses {
    return {
      disabled: this.disabled,
      'dell-btn-primary': this.type === 'primary',
      'dell-btn-secondary': this.type === 'secondary',
      'dell-btn-danger': this.type === 'danger',
      'dell-btn-small': this.size === 'small',
      'dell-btn-large': this.size === 'large',
    };
  }

  getClass(): string {
    if (this.type === 'primary') {
      return 'dds__btn-primary';
    } else if (this.type === 'secondary') {
      return 'dds__btn-secondary';
    } else if (this.type == 'danger') {
      return 'dds__btn-danger';
    } else {
      return '';
    }
  }
}
