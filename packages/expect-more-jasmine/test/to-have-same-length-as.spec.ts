import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveSameLengthAs()', () => {
  expect({ child: { grandchild: ['i also have', '2 items'] } }).toHaveSameLengthAs(
    'child.grandchild',
    ['i have', '2 items'],
  );
});
