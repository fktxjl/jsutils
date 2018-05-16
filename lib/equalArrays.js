/**
 * @fileOverview 比较两个数组
 * @module equalArrays
 */

/**
 * 比较两个数组是否一致
 * @author   fktxjl     https://github.com/fktxjl
 * @param    {Array}   [array, array]         - 数组
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
  if (JSON.stringify(a) !== JSON.stringify(b)) return false
  return true
}
