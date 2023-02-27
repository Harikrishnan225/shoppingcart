import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEdtingComponent } from './product-edting.component';

describe('ProductEdtingComponent', () => {
  let component: ProductEdtingComponent;
  let fixture: ComponentFixture<ProductEdtingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEdtingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductEdtingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
