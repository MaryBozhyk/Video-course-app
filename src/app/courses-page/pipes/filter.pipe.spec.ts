import { Course } from '@app/models';
import { FilterPipe } from './filter.pipe';

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
      'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
  }
];

describe('FilterPipe', () => {
  const pipe = new FilterPipe();

  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter courses by title', () => {
    const searchTerm = "1";
    const result = pipe.transform(mockCourses, searchTerm);
    expect(result).toEqual(
      [
        {
          id: '1',
          title: 'Video Course 1. Name tag',
          creationDate: new Date('2020, 11, 16'),
          duration: 40,
          description:
            'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
          topRated: true
        }
      ]
    );
  });

  it('should filter courses by title with no case sensitive', () => {
    const searchTerm = "ViDeO CourSE";
    const result = pipe.transform(mockCourses, searchTerm);
    expect(result).toEqual(
      [
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
            'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
        }
      ]
    );
  });

  it('should return empty array if no result was found', () => {
    const searchTerm = "Video Course 123456";
    const result = pipe.transform(mockCourses, searchTerm);
    expect(result).toEqual([]);
  });
});
