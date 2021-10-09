/*
 * functions-02.js
 * Language: javascript
 * Test: tests/functions-02.test.js
 * Path: src/functions-02.js
 *
 *
 */

const store = {
  name: 'Majestic This',
  inventory: [
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
  ],
  /**
   * Returns the name of the store
   * @returns {string} - the name of the store
   */
  getName() {
    // code here & return
  },
  /**
   * Returns the inventory of the store
   * @returns {array} - the inventory of the store
   */
  getInventory() {
    // code here & return
  },
  /**
   * Returns an arrays of most expensive items in inventory
   * @param {number} maxPrice - the maximum price of each item
   * @return {array} items - the array of items that are filtered
   */
  getExpensiveItems(maxPrice) {
    // code here & return
  },
  /**
   * Returns an array of items in store
   * @return {array} items - the array of items that are filtered
   */
  getStoreItems() {
    // code here & return
  },
  /**
   * Returns the price of the item
   * @param {string} itemName - the name of the item
   * @return {array} items - the array of items that are filtered
   */
  getPrice(itemName) {
    // code here & return
  },
  /**
   * Returns true if the item is in the store
   * @param {string} itemName - the name of the item
   * @return {boolean} true if the item is in the store,
   * false otherwise
   */
  isItemInStore(itemName) {
    // code here & return
  },
  /**
   * Returns the quantity of the item
   * @param {string} itemName - the name of the item
   * @param {number} price - the price of the item
   * @param {number} quantity - the quantity of the item
   * @return {number} quantity - the quantity of the item after processing
   * If the item is already in the store, the quantity is updated
   * If the item is not in the store, the item is added to the store
   */
  addItem(itemName, price, quantity) {
    // code here & return
  },
  /**
   * Removes a certain quantity of an item from the store
   * @param {string} itemName - name of the item to remove from store
   * @return {number} quantity - the quantity of the items to remove
   * @return {number} removed - the quantity of the items removed, which may be less than quantity if not enough are not in the store
   */
  removeItem(itemName, quantity) {
    // code here & return
  },
  /**
   * Returns the total price of all he items in the store
   * @return {number} totalPrice - the total price of the items in the store
   * must use the reduce() array method
   */
  getTotalValue() {
    // code here & return
  },
};

module.exports = {
  getName: store.getName,
  getExpensiveItems: store.getExpensiveItems,
  getPrice: store.getPrice,
  getStoreItems: store.getStoreItems,
  isItemInStore: store.isItemInStore,
  addItem: store.addItem,
  removeItem: store.removeItem,
  getTotalValue: store.getTotalValue,
};
