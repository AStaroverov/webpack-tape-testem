import test from 'tapes'
import PaginationHelper from '../'

let helper = new PaginationHelper(['a','b','c','d','e','f'], 4)

test('itemCount', function(t) {
  t.equal(helper.itemCount(), 6)
  t.end()
})

test('pageCount', function(t) {
  t.equal(helper.pageCount(), 2)
  t.end()
})

test('pageItemCount', function(t) {
  t.equal(helper.pageItemCount(0), 4)
  t.equal(helper.pageItemCount(1), 2)
  t.equal(helper.pageItemCount(2), -1)
  t.end()
})

test('pageIndex', function(t) {
  t.equal(helper.pageIndex(5), 1)
  t.equal(helper.pageIndex(2), 0)
  t.equal(helper.pageIndex(20), -1)
  t.equal(helper.pageIndex(-10), -1)
  t.end()
})
