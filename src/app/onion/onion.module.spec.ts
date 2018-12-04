import { OnionModule } from './onion.module';

describe('OnionModule', () => {
  let onionModule: OnionModule;

  beforeEach(() => {
    onionModule = new OnionModule();
  });

  it('should create an instance', () => {
    expect(onionModule).toBeTruthy();
  });
});
