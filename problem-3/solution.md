# SOLUTION

## 1. Have a specify Props interface for each component

- Type Safety: Ensures that the component receives props of the expected type.
- IntelliSense: Provides better development experience with autocomplete and in-editor documentation.
- Readability: Makes the component’s expected props clear and improves code readability.
- Refactoring: Easier to refactor and maintain code when the structure and types of props are explicitly defined.

## 2. Shouldn't had any type, need an interface properly

- blockchain variable shouldn't had any type and need an interface properly
- Add blockchain to WalletBalance Interface: To make it clear that blockchain is used in getPriority.

## 3. Use Default Values

## 4. Should use Bigint,.. lib for balance amount to precision

## 5. Should destructuring Props for better view and readble

## 6. Set up type annotation for function prameters and return types

## 7. The sortedBalances need to refactor

- lhsPriority is not in filter scope

- sort by priority in descending order

```typescript
// from
const sortedBalances = useMemo(() => {
    return balances
      .filter((balance: WalletBalance) => {
        const balancePriority = getPriority(balance.blockchain);
        if (lhsPriority > -99) {
          if (balance.amount <= 0) {
            return true;
          }
        }
        return false;
    })
      .sort((lhs: WalletBalance, rhs: WalletBalance) => {
        const leftPriority = getPriority(lhs.blockchain);
        const rightPriority = getPriority(rhs.blockchain);
        if (leftPriority > rightPriority) {
          return -1;
        } else if (rightPriority > leftPriority) {
          return 1;
        }
    });
}, [balances, prices]);

// to

const sortedBalances = useMemo(() => {
  return balances
    .filter((balance: WalletBalance) => {
        const balancePriority = getPriority(balance.blockchain);
        if (lhsPriority > -99) {
          if (balance.amount <= 0) {
            return true;
          }
        }
        return false;
    })
    .sort((lhs, rhs) => getPriority(rhs.blockchain) - getPriority(lhs.blockchain)); // Sort by priority in descending order
}, [balances]);

```
