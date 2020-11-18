import { OrderByPipe } from './order-by.pipe';
import { Course } from '@app/models';

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Video Course 1. Name tag',
    creationDate: new Date('2020, 11, 16'),
    duration: 40,
    description:
      'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    topRated: true
  },
  {
    id: '2',
    title: 'Video Course 2. Name tag',
    creationDate: new Date('2020, 08, 28'),
    duration: 120,
    description:
      'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    topRated: true
  },
  {
    id: '3',
    title: 'Video Course 3. Name tag',
    creationDate: new Date('2020, 11, 20'),
    duration: 98,
    description:
      'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    topRated: false
  }
];

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();

  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should sort courses by date', () => {
    const result = pipe.transform(mockCourses);
    expect(result).toEqual(
      [
        {
          id: '3',
          title: 'Video Course 3. Name tag',
          creationDate: new Date('2020, 11, 20'),
          duration: 98,
          description:
            'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
          topRated: false
        },
        {
          id: '1',
          title: 'Video Course 1. Name tag',
          creationDate: new Date('2020, 11, 16'),
          duration: 40,
          description:
            'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
          topRated: true
        },
        {
          id: '2',
          title: 'Video Course 2. Name tag',
          creationDate: new Date('2020, 08, 28'),
          duration: 120,
          description:
            'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
          topRated: true
        }
      ]
    );
  });
});
