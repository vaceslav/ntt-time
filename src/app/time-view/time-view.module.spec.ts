import { TimeViewModule } from './time-view.module';

describe('TimeViewModule', () => {
  let timeViewModule: TimeViewModule;

  beforeEach(() => {
    timeViewModule = new TimeViewModule();
  });

  it('should create an instance', () => {
    expect(timeViewModule).toBeTruthy();
  });
});
