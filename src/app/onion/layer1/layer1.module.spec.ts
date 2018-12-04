import { Layer1Module } from './layer1.module';

describe('Layer1Module', () => {
  let layer1Module: Layer1Module;

  beforeEach(() => {
    layer1Module = new Layer1Module();
  });

  it('should create an instance', () => {
    expect(layer1Module).toBeTruthy();
  });
});
