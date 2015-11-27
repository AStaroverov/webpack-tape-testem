import test from 'tapes'
import first from '../index'

test('return true', function(t) {
  t.plan(2);

  t.equal(first(), true);
  setTimeout(() => {
      t.equal(first(), true);
  }, 1000);
});
