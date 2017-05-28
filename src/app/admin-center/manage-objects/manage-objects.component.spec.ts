import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageObjectsComponent } from './manage-objects.component';

describe('ManageObjectsComponent', () => {
  let component: ManageObjectsComponent;
  let fixture: ComponentFixture<ManageObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
