import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  const pipe = new DurationPipe();

  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform minutes into format "hh h mm min"', () => {
    const mockData = 125;
    const result = pipe.transform(mockData);
    expect(result).toEqual('2h 5min');
  });

  it('should show only minutes if duration less than 1h', () => {
    const mockData = 50;
    const result = pipe.transform(mockData);
    expect(result).toEqual('50min');
  });

  it('should not return empty value in case of incomming data equal null', () => {
    const mockData = null;
    const result = pipe.transform(mockData);
    expect(result).toBe('-');
  });

  it('should not return empty value in case of incomming data equal undefined', () => {
    const mockData = undefined;
    const result = pipe.transform(mockData);
    expect(result).toBe('-');
  });
});
