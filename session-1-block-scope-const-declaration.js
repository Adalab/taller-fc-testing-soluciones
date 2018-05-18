// Link: http://tddbin.com/#?kata=es6/language/block-scoping/const

// IMPORTANTE: Es necesario añadir esto para que funcione correctamente el ejercicio aqui, si quieres probarlo en la web es mejor que lo comentes
import './config.js'

// 8: block scope - const
// To do: make all tests pass, leave the asserts unchanged!

describe('`const` is like `let` plus read-only', () => {

  describe('scalar values are read-only', () => {

    it('number', () => {
      const constNum = 0;
      assert.equal(constNum, 0);
    });

    it('string', () => {
      const constString = 'I am a const';
      assert.equal(constString, 'I am a const');
    });

  });

  const notChangeable = 23;

  it('const scope leaks too', () => {
    assert.equal(notChangeable, 23);
  });

  describe('complex types are NOT fully read-only', () => {

    it('array', () => {
      const arr = [42, 23];
      arr[0] = 0;
      assert.equal(arr[0], 0);
    });

    it('object', () => {
      const obj = {x: 1};
      obj.x = 3;
      assert.equal(obj.x, 3);
    });

  });

});
