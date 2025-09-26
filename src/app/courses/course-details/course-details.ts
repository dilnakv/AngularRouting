import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: false,
  templateUrl: './course-details.html',
  styleUrl: './course-details.css'
})
export class CourseDetails implements OnInit, OnDestroy {
  selectedCourse: Course;
  courseId: number;
  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  paramMapObs;

  ngOnInit(): void {
    // this.courseId = this.activeRoute.snapshot.params['id'];
    //+ to convert this string to numeric type 
    // this.courseId = +this.activeRoute.snapshot.paramMap.get('id');
    // this.selectedCourse = this.courseService.courses.find((course) => course.id === this.courseId )

    // this.activeRoute.params.subscribe((data) =>{
    //   this.courseId = +data['id'];
    //   this.selectedCourse = this.courseService.courses.find((course) => course.id === this.courseId )
    // })

    this.paramMapObs = this.activeRoute.paramMap.subscribe((data) =>{
      this.courseId = +data.get('id');
      this.selectedCourse = this.courseService.courses.find((course) => course.id === this.courseId )
    })
  }

  ngOnDestroy(): void {
    this.paramMapObs.unsubscribe();
  }
}
