import { Component, inject } from '@angular/core';
import { CourseService } from '../../services/course-service';
import { Course } from '../../models/course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  standalone: false,
  templateUrl: './popular.html',
  styleUrl: './popular.css'
})
export class Popular {
  courseService = inject(CourseService)
  popularCourses: Course[] = [];
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }

  navigateToCourses(){
    // this.router.navigate(['Courses']);
    this.router.navigateByUrl('Courses');

    // To make it relative path
    // this.router.navigate(['Courses'], {relativeTo: this.activeRoute});
  }
}
