import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'emoji-header',
  styleUrls: ['../styles/emoji-header.scss'],
  template: `
  <emoji-categories [emojisCategories]="emojisCategories" (categorySelection)="categorySelection.emit($event)"></emoji-categories>
  <emoji-search (search)="searchEmitter.emit($event)" *ngIf="_searchBar"></emoji-search>
  `
})

export class EmojiHeaderComponent {
  @Input('emojisCategories') emojisCategories;

  @Output('categorySelection') categorySelection = new EventEmitter<any>();
  @Output('search') searchEmitter = new EventEmitter<string>();
  
  constructor() { }
}
