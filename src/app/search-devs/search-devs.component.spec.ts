import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDevsComponent } from './search-devs.component';

describe('SearchDevsComponent', () => {
  let component: SearchDevsComponent;
  let fixture: ComponentFixture<SearchDevsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDevsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
