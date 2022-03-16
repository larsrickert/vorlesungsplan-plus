import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseSelectPage } from './course-select.page';

describe('CourseSelectPage', () => {
  let component: CourseSelectPage;
  let fixture: ComponentFixture<CourseSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
