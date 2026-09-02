export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {
  return inventory
    .filter(([, quantity]) => quantity > 5)
    .reduce((total, [, quantity, price]) => total + quantity * price, 0);
}
