import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthnNutritionsComponent } from './healthn-nutritions.component';

describe('HealthnNutritionsComponent', () => {
  let component: HealthnNutritionsComponent;
  let fixture: ComponentFixture<HealthnNutritionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthnNutritionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthnNutritionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
