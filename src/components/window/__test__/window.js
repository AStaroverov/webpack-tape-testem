import test from 'tapes'
import window from '../index'

test('check window', function(t) {
  t.plan(1);

  t.true(window.document,'its real window');
});
