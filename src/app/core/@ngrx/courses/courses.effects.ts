import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as CoursesActions from './courses.actions';
import { CoursesService } from '@app/shared/services';
import { Course } from '@app/models';

import { Observable, of } from 'rxjs';
import { concatMap, catchError, map, pluck, switchMap } from 'rxjs/operators';

@Injectable()
export class CoursesEffects {

    constructor(
        private actions$: Actions,
        private coursesService: CoursesService,
        private router: Router,
    ) {
        console.log('[COURSES EFFECTS]');
    }

    getCourses$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.getCourses),
            switchMap(() => this.getCourses())
        )
    );

    getCourse$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.getCourse),
            pluck('courseID'),
            switchMap((courseID) => this.getCourse(courseID))
        )
    );

    updateCourse$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.updateCourse),
            pluck('course'),
            concatMap((course: Partial<Course>) => this.updateCourse(course))
        )
    );

    addCourse$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.addCourse),
            pluck('course'),
            concatMap((course: Partial<Course>) => this.addCourse(course))
        )
    );

    deleteCourse$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.deleteCourse),
            pluck('course'),
            concatMap((course: Course) => this.deleteCourse(course))
        )
    );

    getSearcedCourses$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.getSearchedCourses),
            pluck('searchTerm'),
            switchMap((searchTerm) => this.getSearchedCourses(searchTerm))
        )
    );

    loadMoreCourses$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.loadMoreCourses),
            switchMap(() => this.loadMoreCourses())
        )
    );

    private getCourses(): Observable<Action> {
        return this.coursesService
            .getCourses()
            .pipe(
                map(courses => CoursesActions.getCoursesSuccess({ courses })),
                catchError(error => of(CoursesActions.getCoursesError({ error }))
            )
        )
    }

    private getCourse(courseId: number): Observable<Action> {
        return this.coursesService
            .getCourse(courseId)
            .pipe(
                map(course => CoursesActions.getCourseSuccess({ course })),
                catchError(error => of(CoursesActions.getCourseError({ error }))
            )
        )
    }

    private updateCourse(course: Partial<Course>): Observable<Action> {
        return this.coursesService
            .updateCourse(course)
            .pipe(
                map(() => {
                    this.router.navigate(['courses']);
                    return CoursesActions.updateCourseSuccess({ course })
                }),
                catchError(error => of(CoursesActions.updateCourseError({ error }))
            )
        )
    }

    private addCourse(course: Partial<Course>): Observable<Action> {
        return this.coursesService
            .createCourse(course)
            .pipe(
                map(() => {
                    this.router.navigate(['courses']);
                    return CoursesActions.addCourseSuccess({ course })
                }),
                catchError(error => of(CoursesActions.addCourseError({ error }))
            )
        )
    }

    private deleteCourse(course: Course): Observable<Action> {
        return this.coursesService
            .removeCourse(course)
            .pipe(
                map(() => (CoursesActions.deleteCourseSuccess({ course }))),
                catchError(error => of(CoursesActions.deleteCourseError({ error }))
            )
        )
    }

    private getSearchedCourses(searchTerm: string): Observable<Action> {
        return this.coursesService.getSearchedCourses(searchTerm).pipe(
            map((courses: Course[]) => (CoursesActions.getSearchedCoursesSuccess({ courses }))),
            catchError(error => of(CoursesActions.getSearchedCoursesError({ error })))
        );
    }

    private loadMoreCourses(): Observable<Action> {
        return this.coursesService.loadMoreCourses().pipe(
            map((courses: Course[]) => (CoursesActions.loadMoreCoursesSuccess({ courses }))),
            catchError(error => of(CoursesActions.loadMoreCoursesError({ error })))
        );
    }
}
