import { CourseComponent } from './course.component';

const testCourse = {
  id: '1',
  title: 'Video Course 1. Name tag',
  creationDate: new Date('2020, 08, 28'),
  duration: {
    hours: 1,
    minutes: 38
  },
  description:
    "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
};

describe('CourseComponent', () => {
  let comp: CourseComponent;

  beforeEach(() => {
    comp = new CourseComponent();
    comp.course = testCourse;
  });

  it('should raise delete item', () => {
    spyOn(comp.delete, 'emit');

    comp.onDelete();
    expect(comp.delete.emit).toHaveBeenCalledWith(testCourse);
  });

  it('should raise edit item', () => {
    spyOn(comp.edit, 'emit');

    comp.onEdit();
    expect(comp.edit.emit).toHaveBeenCalledWith(testCourse);
  });
});
