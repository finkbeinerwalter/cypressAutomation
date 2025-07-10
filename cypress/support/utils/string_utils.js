/**
 * Parses a text with price into a float
 * @param {*} priceText The price text to parse
 * @returns the price float
 */
export function parsePriceTextToNumber(priceText) {
  return parseFloat(priceText.trim().replace(/[^0-9.-]+/g, ''))
}
