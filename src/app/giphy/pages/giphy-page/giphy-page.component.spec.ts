import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyPageComponent } from './giphy-page.component';

describe('GiphyPageComponent', () => {
  let component: GiphyPageComponent;
  let fixture: ComponentFixture<GiphyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
