import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrikersNavigationComponent } from './strikers-navigation.component';

describe('StrikersNavigationComponent', () => {
  let component: StrikersNavigationComponent;
  let fixture: ComponentFixture<StrikersNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrikersNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrikersNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
