import { Component, EventEmitter, Input, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  debounce = new Subject<any>();
  @Output() typing = new EventEmitter<string>();
  @Input() value!: string;

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(100)).subscribe((filter: any) => {
      this.typing.emit(filter.value);
    });
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
