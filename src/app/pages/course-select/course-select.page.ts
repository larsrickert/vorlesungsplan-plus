import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SettingKey } from 'src/app/interfaces/ISetting';
import { StorageService } from 'src/app/services/storage/storage.service';

interface CourseGroup {
  name: string;
  courses: string[];
}

@Component({
  selector: 'app-course-select',
  templateUrl: './course-select.page.html',
  styleUrls: ['./course-select.page.scss'],
})
export class CourseSelectPage implements OnInit {
  @Input() redirect = true;
  @ViewChild('searchbar') searchbar: HTMLIonSearchbarElement;
  courseGroups: CourseGroup[] = [];
  displayedGroups: CourseGroup[] = [];
  selectedCourse = null;

  constructor(
    private storage: StorageService,
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    this.storage
      .fetchCourses()
      .then((courses) => {
        // set focus to searchbar
        if (this.searchbar) {
          this.searchbar.setFocus();
        }

        this.courseGroups = this.groupCourses(courses);
        this.displayedGroups = this.courseGroups;
      })
      .catch(() => {
        this.courseGroups = [];
        this.displayedGroups = [];
      });

    this.selectedCourse = this.storage.getSetting(SettingKey.COURSE);
  }

  async select(ev: any, course: string) {
    if (!ev.target.checked) {
      // user unchecked course
      return;
    }

    this.selectedCourse = course;

    await this.storage.addSetting({
      key: SettingKey.COURSE,
      value: course,
    });

    // close modal
    if (await this.modalController.getTop()) {
      await this.modalController.dismiss();
    }

    // redirect
    if (this.redirect) {
      this.router.navigate(['/timetable']);
    }
  }

  searchCourse(ev) {
    const searchedValue = ev.target.value.toLowerCase().trim();
    const matches: string[] = [];

    if (searchedValue === '') {
      // user cleared searchbar
      this.displayedGroups = this.courseGroups;
      return;
    }

    this.courseGroups.forEach((group) => {
      group.courses.forEach((course) => {
        if (course.toLowerCase().includes(searchedValue)) {
          matches.push(course);
        }
      });
    });

    this.displayedGroups = this.groupCourses(matches);
  }

  // returns the groupname of a course, a.e. group for INF19B wis INF
  private getGroup(course: string) {
    return course.split(/\d/)[0];
  }

  private groupCourses(courses: string[]): CourseGroup[] {
    const groups = [];

    // get unique groups
    courses.forEach((course) => {
      const group = this.getGroup(course);

      if (!groups.includes(group)) {
        groups.push(group);
      }
    });

    const courseGroups: CourseGroup[] = [];

    groups.forEach((group) => {
      const relatedCourses = courses.filter((course) => {
        return this.getGroup(course) === group;
      });

      courseGroups.push({ name: group, courses: relatedCourses });
    });

    return courseGroups;
  }
}
