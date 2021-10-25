import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexCardContentComponent } from './flex-card-content.component';

describe('FlexCardContentComponent', () => {
  let component: FlexCardContentComponent;
  let fixture: ComponentFixture<FlexCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexCardContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
