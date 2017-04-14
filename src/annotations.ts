import { Component, Directive, Pipe, Type } from '@angular/core';

declare var global: any;
const Reflect = global.Reflect;

export type AllDecorators = Directive & Component & Pipe;

export class Annotations {

  static getFor(type: Type<any>): AllDecorators {
    const annotations = Reflect.getOwnMetadata('annotations', type);

    if (!Array.isArray(annotations)) {
      throw Error(`Annotations: Annotations not available for type '${type.name}'`);
    }

    return annotations[0];
  }

  static getForDirective(type: Type<any>): Directive {
    return Annotations.getFor(type);
  }

  static getForComponent(type: Type<any>): Component {
    return Annotations.getFor(type);
  }

  static getForPipe(type: Type<any>): Pipe {
    return Annotations.getFor(type);
  }

}
