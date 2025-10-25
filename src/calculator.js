/**
 * Suma dos números
 * Evita operar si alguno de los números es negativo.
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} - Resultado de la suma o 0 si hay negativo
 */
function add(a, b) {
  if (a < 0 || b < 0) return 0;
  return a + b;
}

/**
 * Resta dos números
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplica dos números
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divide dos números
 * Retorna null si el divisor es 0.
 * @param {number} a
 * @param {number} b
 * @returns {number|null}
 */
function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
