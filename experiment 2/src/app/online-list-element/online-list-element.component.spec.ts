import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineListElementComponent } from './online-list-element.component';

describe('OnlineListElementComponent', () => {
  let component: OnlineListElementComponent;
  let fixture: ComponentFixture<OnlineListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineListElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
