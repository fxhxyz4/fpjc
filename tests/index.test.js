import { assert } from 'chai';
import F from '../lib/es/index.js';

describe('F library', function () {
  describe('Boolean functions', function () {
    it('should return true for function t', function () {
      assert.strictEqual(F.t(), true);
    });

    it('should return false for function f', function () {
      assert.strictEqual(F.f(), false);
    });
  });

  describe('Basic operations', function () {
    it('should add numbers correctly', function () {
      assert.strictEqual(F.add([1, 2, 3]), 6);
    });

    it('should divide numbers correctly', function () {
      assert.strictEqual(F.divide([6, 2, 1]), 3);
    });

    it('should multiply numbers correctly', function () {
      assert.strictEqual(F.multiply([2, 3, 4]), 24);
    });

    it('should subtract numbers correctly', function () {
      assert.strictEqual(F.subtract([6, 2, 1]), 3);
    });

    it('should perform power operation', function () {
      assert.deepStrictEqual(F.power([2, 3, 4]), [4, 9, 16]);
    });

    it('should calculate square root', function () {
      assert.deepStrictEqual(F.squareRoot([4, 9, 16]), [2, 3, 4]);
    });
  });

  describe('Random number generators', function () {
    it('should generate a random number between 0 and 9 (inclusive)', function () {
      const randomNum = F.random1();
      assert.isAtLeast(randomNum, 0);
      assert.isAtMost(randomNum, 9);
    });

    it('should generate a random decimal number between 0 and 99 (inclusive) without using Math.floor', function () {
      const randomNum = F.random2();
      assert.isAtLeast(randomNum, 0);
      assert.isAtMost(randomNum, 99);
    });

    it('should generate a random decimal number between 0 and 99 (inclusive) with Math.floor', function () {
      const randomNum = F.random3();
      assert.isAtLeast(randomNum, 0);
      assert.isAtMost(randomNum, 99);
      assert.strictEqual(randomNum, Math.floor(randomNum));
    });

    it('should generate a random decimal number between 0 and 999 (inclusive) without using Math.floor', function () {
      const randomNum = F.random4();
      assert.isAtLeast(randomNum, 0);
      assert.isAtMost(randomNum, 999);
    });

    it('should generate a random decimal number between 0 and 999 (inclusive) with Math.floor', function () {
      const randomNum = F.random5();
      assert.isAtLeast(randomNum, 0);
      assert.isAtMost(randomNum, 999);
      assert.strictEqual(randomNum, Math.floor(randomNum));
    });
  });

  describe('Rounding functions', function () {
    it('should round numbers down using floor', function () {
      assert.strictEqual(F.floor(5.8), 5);
    });

    it('should round each element down in an array using floor2', function () {
      assert.deepStrictEqual(F.floor2([5.8, 3.2, 7.9]), [5, 3, 7]);
    });

    it('should round numbers up using ceil', function () {
      assert.strictEqual(F.ceil(5.2), 6);
    });

    it('should round each element up in an array using ceil2', function () {
      assert.deepStrictEqual(F.ceil2([5.2, 3.8, 7.1]), [6, 4, 8]);
    });

    it('should round numbers using round', function () {
      assert.strictEqual(F.round(5.6), 6);
    });

    it('should round each element in an array using round2', function () {
      assert.deepStrictEqual(F.round2([5.6, 3.2, 7.9]), [6, 3, 8]);
    });
  });

  if (typeof window !== 'undefined') {
    describe('Browser tests', function () {
      it('should work in the browser', function () {});
    });
  } else {
    describe('Node.js tests', function () {
      it('should work in Node.js', function () {});
    });
  }
});
