import { Time } from '@angular/common';

export interface Course {
    id: string;
    title: string;
    creationDate: Date;
    duration: Time;
    description: string;
}

export class CourseModel implements Course {
    constructor(
        public id: string = null,
        public title: string = '',
        public creationDate: Date = new Date(),
        public duration: Time = {hours: 0, minutes: 0},
        public description: string = ''
    ) { }
}
