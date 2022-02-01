import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdescriptionComponent } from './productdescription.component';

describe('ProductdescriptionComponent', () => {
  let component: ProductdescriptionComponent;
  let fixture: ComponentFixture<ProductdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
