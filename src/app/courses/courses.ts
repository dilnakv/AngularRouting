import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../services/course-service';
import { Course } from '../models/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses implements OnInit {
  coursesService = inject(CourseService);
  AllCourses: Course[];
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  searchString: string;

  ngOnInit(): void {
    // this.searchString = this.activeRoute.snapshot.queryParams['search'];
    // this.searchString = this.activeRoute.snapshot.queryParamMap.get('search');
    // console.log(this.searchString);

    // if(this.searchString === undefined || this.searchString === null || this.searchString === ''){
    //   this.AllCourses = this.coursesService.courses;
    // }else{
    //   this.AllCourses = this.coursesService.courses.filter((course) => course.title.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()));
    // }

    this.activeRoute.queryParamMap.subscribe((data) => {
      this.searchString = data.get('search');
      if (this.searchString === undefined || this.searchString === null || this.searchString === '') {
        this.AllCourses = this.coursesService.courses;
      } else {
        this.AllCourses = this.coursesService.courses.filter((course) =>
          course.title.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase())
        );
      }
    });
  }
}
