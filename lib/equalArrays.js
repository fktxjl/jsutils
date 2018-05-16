/**
 * @fileOverview 比较两个数组
 * @module equalArrays
 */

/**
 * 比较两个数组是否一致
 * @author   fktxjl     https://github.com/fktxjl
 * @param    {String}   email         - 邮箱地址
 *
 * @return   {Boolean}
 *
 * @example
 *
 * const arr1 = [1, 2, 3];
 *
 * const arr2 = [1, 2, 3];
 *
 * const b = equalArrays.isValid(arr1, arr2);
 *
 * console.log(b); // true
 */
exports.isValid = function (a, b) {
  if (a.length !== b.length) return false
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false
  }
  return true
}
