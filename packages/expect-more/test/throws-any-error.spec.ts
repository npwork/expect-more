import * as api from '../src';
import { errorConstructors } from './lib/fixtures';

check.it('accepts if function throws any type of error when called', errorConstructors, (Err) => {
  expect(
    api.throwsAnyError(() => {
      throw new Err('wut?');
    })
  ).toEqual(true);
});

it('rejects otherwise', () => {
  expect(api.throwsAnyError(() => {/*  */})).toEqual(false);
});
