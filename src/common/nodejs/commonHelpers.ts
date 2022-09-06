import { pick, omit, add } from 'ramda';

export const addNos = (x: number, y: number) => add(x, y);
export const pickWrapper = (keys: any, object: any) => pick(keys, object);
export const omitWrapper = (keys: any, object: any) => omit(keys, object);
export const isNotEmptyArray = (x: any) => x && x.length > 0;
export const isNotEmptyObject = (obj: any) => obj && Object.keys(obj).length > 0;