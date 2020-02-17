import { TestBed } from '@angular/core/testing';

import { LibraryBooksService } from './library-books.service';

describe('LibraryBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryBooksService = TestBed.get(LibraryBooksService);
    expect(service).toBeTruthy();
  });
});
