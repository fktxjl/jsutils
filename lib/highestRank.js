/**
 * @fileOverview 返回在给定的输入数组中最频繁的数字。如果对于最频繁的数字有好几个，则返回其中最大的数。
 * @module highestRank
 */

/**
 * 返回在给定的输入数组中最频繁的数字
 * @author   fktxjl     https://github.com/fktxjl
 * @param    {Array}   array         - 数组
 *
 * @return   {number}
 *
 * @example
 *
 * const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
 *
 * highestRank(arr) //=> returns 12
 *
 * const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
 *
 * highestRank(arr) //=> returns 12
 *
 * const arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
 *
 * highestRank(arr) //=> returns 3
 */

exports.highestRank = function (arr) {
  let max = 0
  let ret
  arr.reduce(function (a, b) {
    a[b] = ~~a[b] + 1
    a[b] > max && (max = a[ret = b])
    return a
  }, {})
  return ret
}
