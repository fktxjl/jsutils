/**
 * @fileOverview 给定n，取n的数字之和，如果该值有两个数字，继续以这种方式减少直到产生一个位数
 * @module digitalRoot
 */

/**
 * 给定n，取n的数字之和，如果该值有两个数字，继续以这种方式减少直到产生一个位数
 * @author   fktxjl     https://github.com/fktxjl
 * @param    {Number}   number         - 数字
 *
 * @return   {number}
 *
 * @example
 *
 * digital_root(16) => 1 + 6 => 7
 *
 * digital_root(942) => 9 + 4 + 2 => 15 ... => 1 + 5 => 6
 *
 * digital_root(132189) => 1 + 3 + 2 + 1 + 8 + 9 => 24 ... => 2 + 4 => 6
 *
 * digital_root(493193) => 4 + 9 + 3 + 1 + 9 + 3 => 29 ... => 2 + 9 => 11 ... => 1 + 1 => 2
 *
 */

exports.digitalRoot = function (n) {
  return 1 + ((n - 1) % 9)
}
