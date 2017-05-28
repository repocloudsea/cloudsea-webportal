import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureObjectsComponent } from './configure-objects.component';

describe('ConfigureObjectsComponent', () => {
  let component: ConfigureObjectsComponent;
  let fixture: ComponentFixture<ConfigureObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
