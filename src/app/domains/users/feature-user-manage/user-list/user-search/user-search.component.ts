import { CommonModule } from '@angular/common';
import { Component, effect, EventEmitter, Output, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, filter, Subject } from 'rxjs';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
})
export class UserSearchComponent {
  search = signal('');
  isFirstSearch = true;

  private _changedSubject = new Subject<string>();
  @Output() changed = new EventEmitter();

  constructor() {
    effect(() => {
      const search = this.search();
      this._changedSubject.next(search);
      this.isFirstSearch = false;
    })

    this._changedSubject
      .pipe(
        filter(() => !this.isFirstSearch),
        debounceTime(300),
        takeUntilDestroyed()
      ).subscribe(search => {
        this.changed.emit(search);
      })

  }
}
