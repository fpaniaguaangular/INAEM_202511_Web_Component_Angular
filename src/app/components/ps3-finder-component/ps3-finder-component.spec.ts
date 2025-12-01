import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps3FinderComponent } from './ps3-finder-component';

describe('Ps3FinderComponent', () => {
  let component: Ps3FinderComponent;
  let fixture: ComponentFixture<Ps3FinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ps3FinderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ps3FinderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
