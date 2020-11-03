import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstallationPage } from './installation.page';

describe('InstallationPage', () => {
  let component: InstallationPage;
  let fixture: ComponentFixture<InstallationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstallationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
