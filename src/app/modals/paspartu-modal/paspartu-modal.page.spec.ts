import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaspartuModalPage } from './paspartu-modal.page';

describe('PaspartuModalPage', () => {
  let component: PaspartuModalPage;
  let fixture: ComponentFixture<PaspartuModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaspartuModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaspartuModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
