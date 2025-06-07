import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlavorComponent } from './edit-flavor.component';

describe('EditFlavorComponent', () => {
  let component: EditFlavorComponent;
  let fixture: ComponentFixture<EditFlavorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFlavorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFlavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
