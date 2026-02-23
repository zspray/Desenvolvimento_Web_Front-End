import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { OlamundoComponent } from './olamundo';

describe('OlamundoComponent', () => {
  let component: OlamundoComponent;
  let fixture: ComponentFixture<OlamundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OlamundoComponent],
      imports: [CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlamundoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
