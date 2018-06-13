[![npm version](https://badge.fury.io/js/ionic-emoji-picker.svg)](https://badge.fury.io/js/ionic-emoji-picker)

# Emoji picker for Ionic 3

This project was forked from the [ionic3-emoji-picker](https://github.com/danielehrhardt/ionic3-emoji-picker) project created by [danielehrhardt](https://github.com/danielehrhardt)

# Installation

## Install the module via NPM

```shell
npm i ionic-emoji-picker --save
```

## Import it in your app's module(s)

Import `EmojiPickerModule.forRoot()` in your app's main module

app.module.ts

```ts
import { EmojiPickerModule } from 'ionic-emoji-picker';

@NgModule({
    ...
    imports: [
      ...
      EmojiPickerModule.forRoot()
      ],
    ...
})
export class AppModule {}
```

If your app uses lazy loading, you need to import `EmojiPickerModule` in your shared module or child modules:

```ts
import { EmojiPickerModule } from 'ionic-emoji-picker';

@NgModule({
    ...
    imports: [
      ...
      EmojiPickerModule
      ],
    ...
})
export class SharedModule {}
```

### Sample

```html
<ion-textarea [(ngModel)]="message"></ion-textarea>

<button ion-button clear icon-only (click)="toggled = !toggled" [(emojiPickerIf)]="toggled" [emojiPickerDirection]="'top'"
  (emojiPickerSelect)="handleSelection($event)">
  <ion-icon name="md-happy"></ion-icon>
</button>
```

```ts
toggled: boolean = false;
message: string;

handleSelection(event) {
  this.message += event.char;
}
```

### Directive API:

```html
<button ion-button
    (click)="toggled = !toggled"
    [(emojiPickerIf)]="toggled"
    [emojiPickerDirection]="'bottom' || 'top' || 'left' || 'right'"
    (emojiPickerSelect)="handleSelection($event)">
      <ion-icon name="md-happy"></ion-icon>
    </button>
```

### Emitter `(emojiPickerSelect)="handleSelection($event)"`

```
$event = EmojiEvent{ char : "😌", label : "relieved" }
```

## EmojiPickerCaretEmitter

added for your convenience, emits information regarding a contenteditable enabled element

### Emitter `(emojiPickerCaretEmitter)="handleCaretChange($event)"`

```
$event = CaretEvent{ caretOffset: 13, caretRange: Range{...}, textContent: 'content of div or input' }
```

Emoji Picker will get placed relative the element chosen via the directive api, centered and within window borders
