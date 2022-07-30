import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductPageComponent } from './create-products-page.component';

describe('CreateProductPageComponent', () => {
  let component: CreateProductPageComponent;
  let fixture: ComponentFixture<CreateProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
