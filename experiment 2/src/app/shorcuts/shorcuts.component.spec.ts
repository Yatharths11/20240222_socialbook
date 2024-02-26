import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorcutsComponent } from './shorcuts.component';

describe('ShorcutsComponent', () => {
  let component: ShorcutsComponent;
  let fixture: ComponentFixture<ShorcutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShorcutsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShorcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
