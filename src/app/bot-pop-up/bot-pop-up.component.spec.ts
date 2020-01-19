import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotPopUpComponent } from './bot-pop-up.component';

describe('BotPopUpComponent', () => {
  let component: BotPopUpComponent;
  let fixture: ComponentFixture<BotPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
