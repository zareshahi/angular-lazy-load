import { Layer2Module } from './layer2.module';

describe('Layer2Module', () => {
  let layer2Module: Layer2Module;

  beforeEach(() => {
    layer2Module = new Layer2Module();
  });

  it('should create an instance', () => {
    expect(layer2Module).toBeTruthy();
  });
});
