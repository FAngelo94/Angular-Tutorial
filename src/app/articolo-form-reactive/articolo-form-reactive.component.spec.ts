import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticoloFormReactiveComponent } from './articolo-form-reactive.component';

describe('ArticoloFormReactiveComponent', () => {
  let component: ArticoloFormReactiveComponent;
  let fixture: ComponentFixture<ArticoloFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticoloFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticoloFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
