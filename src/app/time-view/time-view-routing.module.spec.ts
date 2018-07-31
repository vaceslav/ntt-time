import { TimeViewRoutingModule } from './time-view-routing.module';

describe('TimeViewRoutingModule', () => {
  let timeViewRoutingModule: TimeViewRoutingModule;

  beforeEach(() => {
    timeViewRoutingModule = new TimeViewRoutingModule();
  });

  it('should create an instance', () => {
    expect(timeViewRoutingModule).toBeTruthy();
  });
});
