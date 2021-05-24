import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AizoComponent } from './aizo.component';

describe('AizoComponent', () => {
  let component: AizoComponent;
  let fixture: ComponentFixture<AizoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AizoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AizoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
