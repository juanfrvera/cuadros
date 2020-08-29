import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VarillaModalPage } from './varilla-modal.page';

describe('VarillaModalPage', () => {
  let component: VarillaModalPage;
  let fixture: ComponentFixture<VarillaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarillaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VarillaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
