import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LectureStatusFabComponent } from './lecture-status-fab.component';

describe('LectureStatusFabComponent', () => {
  let component: LectureStatusFabComponent;
  let fixture: ComponentFixture<LectureStatusFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureStatusFabComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LectureStatusFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
