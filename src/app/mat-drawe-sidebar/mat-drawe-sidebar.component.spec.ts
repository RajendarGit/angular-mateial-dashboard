import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDraweSidebarComponent } from './mat-drawe-sidebar.component';

describe('MatDraweSidebarComponent', () => {
  let component: MatDraweSidebarComponent;
  let fixture: ComponentFixture<MatDraweSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDraweSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDraweSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
