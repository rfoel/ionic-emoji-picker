import { Component, EventEmitter, Output, Input } from '@angular/core'

@Component({
  selector: 'emoji-header',
  styleUrls: ['../styles/emoji-header.scss'],
  template: `
  <emoji-categories [emojisCategories]="emojisCategories" (categorySelection)="categorySelection.emit($event)"></emoji-categories>
  <emoji-search (search)="searchEmitter.emit($event)" *ngIf="displaySearchBar"></emoji-search>
  `
})
export class EmojiHeaderComponent {
  @Input('emojisCategories') emojisCategories
  @Input('displaySearchBar') displaySearchBar

  @Output('categorySelection') categorySelection = new EventEmitter<any>()
  @Output('search') searchEmitter = new EventEmitter<string>()

  constructor() {
    console.log('displaySearchBar', this.displaySearchBar)
  }
}
