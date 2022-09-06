import { pick, omit } from 'ramda';

export const pickWrapper = (keys: any, object: any) => pick(keys, object);
export const omitWrapper = (keys: any, object: any) => omit(keys, object);
export const isNotEmptyArray = (x: any) => x && x.length > 0;
export const isNotEmptyObject = (obj: any) => obj && Object.keys(obj).length > 0;
