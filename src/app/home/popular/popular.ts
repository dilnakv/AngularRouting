import { Component, inject } from '@angular/core';
import { CourseService } from '../../services/course-service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-popular',
  standalone: false,
  templateUrl: './popular.html',
  styleUrl: './popular.css'
})
export class Popular {
  courseService = inject(CourseService)
  popularCourses: Course[] = [];

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }
}
