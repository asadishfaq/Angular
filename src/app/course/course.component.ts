import { Component, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  //1 courses = [1];
  viewMode = 'map';
  courses = [
    {
      id: 1,
      name: 'Course 1',
    },
    {
      id: 2,
      name: 'Course 2',
    },
    {
      id: 3,
      name: 'Course 3',
    },
    {
      id: 4,
      name: 'Course 4',
    },
  ];

  onAdd() {
    const mewObj = {
      id: this.courses.length + 1,
      name: `Course ${this.courses.length + 1}`,
    };
    this.courses.push(mewObj);
  }

  onRemove(course: any) {
    this.courses = this.courses.filter((item) => item.id !== course.id);
  }
}
