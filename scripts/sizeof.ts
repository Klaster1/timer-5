'use strict';

// get bytes in string
// https://stackoverflow.com/a/23329386/591487
function byteLength(str: string) {
  // returns the byte length of an utf8 string
  var s = str.length;
  for (var i = str.length - 1; i >= 0; i--) {
    var code = str.charCodeAt(i);
    if (code > 0x7f && code <= 0x7ff) s++;
    else if (code > 0x7ff && code <= 0xffff) s += 2;
  }
  return s;
}

function sizeOfObject(object: any) {
  if (object === null) {
    return 1;
  }
  //GeoPoint
  if (object.hasOwnProperty('_lat') && typeof object.isEqual === 'function') return 16;
  //Date
  if (typeof object.toDate === 'function' || typeof object.getDate === 'function') return 8;
  //Blob
  if (typeof object.toUint8Array === 'function') {
    var blob = object.toUint8Array();
    return blob.byteLength;
  }
  //Reference
  if (typeof object.onSnapshot === 'function') {
    return object['_key']['path']['segments']
      .slice(object['_key']['path']['offset'])
      .reduce(function (acc: number, curr: string) {
        return acc + curr.length + 1;
      }, 16);
  }
  var bytes = 0;
  for (var key in object) {
    if (!Object.hasOwnProperty.call(object, key)) {
      continue;
    }

    bytes += sizeof(key);
    try {
      bytes += sizeof(object[key]);
    } catch (ex) {
      if (ex instanceof RangeError) {
        // circular reference detected, final result might be incorrect
        // let's be nice and not throw an exception
        bytes = 0;
      }
    }
  }

  return bytes;
}

function sizeof(object: unknown): number {
  switch (typeof object) {
    case 'string':
      return byteLength(object) + 1;
    case 'boolean':
      return 1;
    case 'number':
      return 8;
    case 'object':
      if (Array.isArray(object)) {
        return object.map(sizeof).reduce(function (acc, curr) {
          return acc + curr;
        }, 0);
      } else {
        return sizeOfObject(object);
      }
    default:
      return 0;
  }
}

function sizeOfDoc(object: unknown) {
  return 32 + sizeof(object);
}
export default sizeOfDoc;
