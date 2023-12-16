import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisIsStrikersComponent } from './this-is-strikers.component';

describe('ThisIsStrikersComponent', () => {
  let component: ThisIsStrikersComponent;
  let fixture: ComponentFixture<ThisIsStrikersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThisIsStrikersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThisIsStrikersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
