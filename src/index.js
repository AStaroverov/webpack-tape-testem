import memoize from 'memoizejs'

export default class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // init vars
    this.collection = collection
    this.itemsPerPage = itemsPerPage

    // wrap function in memoize for more perfomance
    this.pageItemCount = memoize(this._pageItemCount)
    this.pageIndex = memoize(this._pageIndex)
  }
  itemCount() {
    // once init length of collection
    if (!this._constItemCount) {
      this._constItemCount = this.collection.length
    }
    return this._constItemCount
  }
  pageCount() {
    // once init count of pages
    if (!this._constPageCount) {
      this._constPageCount = Math.ceil(this.itemCount() / this.itemsPerPage)
    }
    return this._constPageCount
  }
  _pageItemCount(pageIndex) {
    let result
    // cached vars
    const pageCount = this.pageCount() - 1
    const itemsPerPage = this.itemsPerPage

    if (pageIndex < 0 || pageIndex > pageCount) {
      // not valid page index
      result = -1
    } else if (pageIndex < pageCount) {
      // get count of item in a any page, else last
      result = itemsPerPage
    } else {
      // get count of item in a last page
      result = this.itemCount() % itemsPerPage || itemsPerPage
    }

    return result
  }
  _pageIndex(itemIndex) {
    // validate index
    if (itemIndex < 0 || itemIndex > this.collection.length - 1) {
      return -1
    }

    return Math.floor(itemIndex / this.itemsPerPage)
  }
}
