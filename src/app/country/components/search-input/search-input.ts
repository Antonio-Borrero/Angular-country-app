import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'search-input',
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInput {
  search = output<string>();
  placeholder = input<string>();
  inputValue = signal<string>("");
  debounceTime = input<number>()

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();
    const timeOut = setTimeout(() => {
      this.search.emit(value);
    }, this.debounceTime());

    onCleanup(() => {
      clearTimeout(timeOut)
    })
  }) 
}
