import { Component, inject } from '@angular/core';
import { CourseService } from '../services/course-service';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {
  coursesService = inject(CourseService);
  AllCourses: Course[] = this.coursesService.courses;
}
