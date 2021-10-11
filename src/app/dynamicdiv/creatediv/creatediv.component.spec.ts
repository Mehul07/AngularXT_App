import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedivComponent } from './creatediv.component';

describe('CreatedivComponent', () => {
  let component: CreatedivComponent;
  let fixture: ComponentFixture<CreatedivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
