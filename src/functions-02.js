/*
 * functions-02.js
 * Language: javascript
 * Test: tests/functions-02.test.js
 * Path: src/functions-02.js
 *
 *
 */

inventory = [
  { name: 'Bike', price: 100, quantity: 5 },
  { name: 'TV', price: 200, quantity: 8 },
  { name: 'Album', price: 10, quantity: 150 },
  { name: 'Book', price: 5, quantity: 72 },
  { name: 'Phone', price: 105, quantity: 58 },
  { name: 'Computer', price: 1000, quantity: 12 },
  { name: 'Keyboard', price: 25, quantity: 67 },
  { name: 'Mouse', price: 35, quantity: 93 },
  { name: 'Speaker', price: 145, quantity: 8 },
  { name: 'Monitor', price: 175, quantity: 13 },
  { name: 'Printer', price: 165, quantity: 4 },
  { name: 'Scanner', price: 149, quantity: 2 },
];

const store = {
  name: 'This Object Store',

  /**
   * Returns the name of the store
   * @method getName
   * @returns {string} - the name of the store
   */
  getName() {
    // write your code here & return value
  },
  /**
   * Returns the inventory of the store
   * @method getInventory
   * @returns {array} - the inventory of the store
   */
  getInventory() {
    // write your code here & return value
  },
  /**
   * Returns an arrays of most expensive items in inventory
   * @method getExpensiveItems
   * @param {number} maxPrice - the maximum price of each item
   * @return {array} items - the array of items that are filtered
   */
  getExpensiveItems(maxPrice) {
    // write your code here & return value
  },
  /**
   * Returns an array of item names in store
   * @method getStoreItems
   * @return {array} items - the array of items that are filtered
   */
  getStoreItems() {
    // write your code here & return value
  },
  /**
   * Returns true if the item is in the store
   * @method isItemInStore
   * @param {string} itemName - the name of the item
   * @return {boolean} true if the item is in the store,
   * false otherwise
   */
  isItemInStore(itemName) {
    // write your code here & return value
  },
  /**
   * Returns the price of the item
   * @method getItemPrice
   * @param {string} itemName - the name of the item
   * @return {number} price - the price of the item,
   * -1 if the item is not in the store
   */
  getItemPrice(itemName) {
    // write your code here & return value
  },

  /**
   * Returns the quantity of the item
   * @method getItemQuantity
   * @param {string} itemName
   * @return {number} quantity - the quantity of the item,
   * -1 if the item is not in the store
   */
  getItemQuantity(itemName) {
    // write your code here & return value
  },

  /**
   * Adds to the quantity of the item
   * @method addItemQuantity
   * @param {string} itemName - the name of the item
   * @param {number} price - the price of the item
   * @param {number} quantity - the quantity of the item
   * @return {number} quantity - the quantity of the item after processing
   * If the item is already in the store, the quantity is updated
   * If the item is not in the store, the item is added to the store
   */
  addItemQuantity(itemName, price, quantity) {
    // write your code here & return value
  },
  /**
   * Removes a certain quantity of an item from the store
   * @method removeItemQuantity
   * @param {string} itemName - name of the item to remove from store
   * @return {number} quantity - the quantity of the items to remove
   * @return {number} newQuantity - the quantity of the item
   * after processing, or -1 if the item is not in the store
   * or -1 if the quantity to remove is greater than the quantity of the item
   */
  removeItemQuantity(itemName, quantity) {
    // write your code here & return value
  },
  /**
   * Returns the total of all the items in the store
   * @method getTotalValue
   * @return {number} totalPrice - the total price of the items in the store
   * must use the reduce() array method
   */
  getTotalValue() {
    // write your code here & return value
  },
};

module.exports = store;
