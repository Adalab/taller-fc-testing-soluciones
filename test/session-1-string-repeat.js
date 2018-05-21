// Link: http://tddbin.com/#?kata=es6/language/string-api/repeat

// IMPORTANTE: Es necesario añadir esto para que funcione correctamente el ejercicio aqui, si quieres probarlo en la web es mejor que lo comentes
import './config.js'

// 71: String - `repeat()`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`str.repeat(x)` appends `x` copies of `str` to each other and returns it', function() {

  describe('pass the count to `str.repeat(count)`', function() {
    it('for `1` the string stays the same', function() {
      const what = 'one'.repeat(1);
      assert.equal(what, 'one');
    });
    it('for `3` the string `x` becomes `xxx`', function() {
      const actual = 'x'.repeat(3);
      assert.equal(actual, 'xxx');
    });
    it('for `0` an empty string is returned', function() {
      const dontRepeat = 0;
      assert.equal('shrink'.repeat(dontRepeat), '');
    });

    it('the count is not an int, such as "3", it gets coerced to an int', function() {
      const repeated = 'three'.repeat('3');
      assert.equal(repeated, 'threethreethree');
    });
  });

  describe('throws an error for', function() {
    it('a count of <0', function() {
      const belowZero = -1;
      assert.throws(() => { ''.repeat(belowZero); }, RangeError);
    });
    it('a count of +Infinty', function() {
      let infinity = Infinity;
      assert.throws(() => { ''.repeat(infinity); }, RangeError);
    });
  });

  describe('accepts everything that can be coerced to a string', function() {
    it('e.g. a boolean', function() {
      let aBool = false;
      assert.equal(String.prototype.repeat.call(aBool, 2), 'falsefalse');
    });
    it('e.g. a number', function() {
      let aNumber = 1;
      assert.equal(String.prototype.repeat.call(aNumber, 2), '11');
    });
  });

  describe('for my own (string) class', function() {
    it('calls `toString()` to make it a string', function() {
      class MyString { toString() { return 'my string'; } }

      const expectedString = 'my string';

      assert.equal(String(new MyString()).repeat(1), expectedString);
    });
    it('`toString()` is only called once', function() {
      let counter = 1;
      class X {
        toString() {
          /*
          Esta linea puede liar un poco, al verla mucha gente piensa que
          toString() devolverá 2 (counter++) pero sin embargo devuelve 1 ¿Cómo?
          Porque el operador de incremento (++) se puede poner delante o detrás
          de una variable, la diferencia entre la posición es que si lo ponemos
          delante primero se incrementa el valor y luego se asigna o se devuelve
          y si lo ponemos detrás primero se asigna y despues se incrementa, como
          sucede aquí. Por tanto el código de abajo sería igual que si hiciesemos:

          return counter;
          counter++;
          */

          return counter++;
        }
      }

      let repeated = String(new X()).repeat(2);

      assert.equal(repeated, '11');
    });
  });

});
