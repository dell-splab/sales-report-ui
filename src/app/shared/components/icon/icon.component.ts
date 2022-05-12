import { Component, Input, OnInit } from '@angular/core';

export type IconTypes =
  | 'gear'
  | 'diff'
  | 'add'
  | 'update'
  | 'cancel'
  | 'type'
  | 'function'
  | 'package'
  | 'procedure'
  | 'sequence'
  | 'table'
  | 'trigger'
  | 'view'
  | 'results'
  | 'status'
  | 'list'
  | 'compare';

export type IconSizes = 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input()
  type?: IconTypes;

  @Input()
  size?: IconSizes;

  @Input()
  styleClasses?: string;

  public get classes(): string {
    return `icon-ic-${this.type} ${this.size} ${this.styleClasses}`;
  }

  constructor() {
    // This is intentional
  }

  ngOnInit(): void {
    // This is intentional
  }
}
