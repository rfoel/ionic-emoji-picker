import { Component, Input, EventEmitter, Output } from '@angular/core'
import emojione from 'emojione'

@Component({
  selector: 'emoji-button',
  styleUrls: ['../styles/emoji-button.scss'],
  template: `
    <button
      class="emoji-button" 
      (click)="selectionEmitter.emit(dataToEmit || emoji)">
      <span [innerHtml]="getEmoji(emoji[1])"></span>
    </button>
  `
})
export class EmojiButtonComponent {
  @Input('emoji') emoji
  @Input('dataToEmit') dataToEmit
  @Input('options') options
  @Input('fitzpatrick') fitzpatrick

  @Output('selection') selectionEmitter: EventEmitter<any> = new EventEmitter()

  constructor() {}

  ngOnChanges() {}

  getEmoji(emoji) {
    return emojione.shortnameToImage(emoji)
  }
}
