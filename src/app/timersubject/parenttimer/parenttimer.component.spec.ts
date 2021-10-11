import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttimerComponent } from './parenttimer.component';

describe('ParenttimerComponent', () => {
  let component: ParenttimerComponent;
  let fixture: ComponentFixture<ParenttimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParenttimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenttimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
