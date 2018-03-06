
import {Cat, Dog} from '../lib/library.js';

import 'jest';

test('test state switch', () => {
  let lib = new Cat();
  expect(lib.name).toBe("Cat");
});

