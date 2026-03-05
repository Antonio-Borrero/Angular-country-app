import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'search-input',
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInput {
  search = output<string>();
  placeholder = input<string>();
  debounceTime = input<number>();
  initialValue = input<string>();
  inputValue = linkedSignal<string>(() => this.initialValue() ?? "");

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
