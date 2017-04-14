import { Annotations } from './annotations';

describe('Annotations', () => {
  const fakeAnnotations = { __annotations: true };
  let getOwnMetadataSpy: jasmine.Spy;

  class MockType { }

  beforeEach(() => {
    getOwnMetadataSpy = spyOn(<any>Reflect, 'getOwnMetadata');
    getOwnMetadataSpy.and.returnValue([fakeAnnotations]);
  });

  describe('getFor() method', () => {
    it('should return annotations of type', () => {
      expect(<any>Annotations.getFor(MockType)).toBe(fakeAnnotations);
    });

    it('should throw error with type name if annotations not available', () => {
      getOwnMetadataSpy.and.returnValue(null);
      expect(() => <any>Annotations.getFor(MockType)).toThrowError(/MockType/);
    });
  });

  describe('getForDirective() method', () => {
    it('should call getFor() and return it`s value', () => {
      spyOn(Annotations, 'getFor').and.returnValue('annotations');
      expect(<any>Annotations.getForDirective(MockType)).toBe('annotations');
      expect(Annotations.getFor).toHaveBeenCalledWith(MockType);
    });
  });

  describe('getForComponent() method', () => {
    it('should call getFor() and return it`s value', () => {
      spyOn(Annotations, 'getFor').and.returnValue('annotations');
      expect(<any>Annotations.getForComponent(MockType)).toBe('annotations');
      expect(Annotations.getFor).toHaveBeenCalledWith(MockType);
    });
  });

  describe('getForPipe() method', () => {
    it('should call getFor() and return it`s value', () => {
      spyOn(Annotations, 'getFor').and.returnValue('annotations');
      expect(<any>Annotations.getForPipe(MockType)).toBe('annotations');
      expect(Annotations.getFor).toHaveBeenCalledWith(MockType);
    });
  });

});
