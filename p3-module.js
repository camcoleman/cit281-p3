function coinCombo(amount) {
    const coins = [1, 5, 10, 25, 50, 100];
    const results = [];
  
    function findCombos(index, remaining, combo) {
      if (remaining === 0) {
        results.push({ ...combo });
        return;
      }
      if (index >= coins.length) return;
  
      const coin = coins[index];
      for (let count = 0; count * coin <= remaining; count++) {
        combo = { ...combo, [coinName(coin)]: count };
        findCombos(index + 1, remaining - count * coin, combo);
      }
    }
  
    function coinName(value) {
      return {
        1: 'pennies',
        5: 'nickels',
        10: 'dimes',
        25: 'quarters',
        50: 'halves',
        100: 'dollars'
      }[value];
    }
  
    if (amount < 0) return { amount, combinations: [], totalCombinations: 0 };
  
    findCombos(0, amount, {});
    return {
      amount,
      combinations: results,
      totalCombinations: results.length
    };
  }
  function coinValue(coinCounts) {
    const {
      pennies = 0,
      nickels = 0,
      dimes = 0,
      quarters = 0,
      halves = 0,
      dollars = 0
    } = coinCounts;
  
    const getNum = (val) => parseInt(val) || 0;
    const totalCents =
      getNum(pennies) * 1 +
      getNum(nickels) * 5 +
      getNum(dimes) * 10 +
      getNum(quarters) * 25 +
      getNum(halves) * 50 +
      getNum(dollars) * 100;
  
    return {
      coins: {
        pennies: getNum(pennies),
        nickels: getNum(nickels),
        dimes: getNum(dimes),
        quarters: getNum(quarters),
        halves: getNum(halves),
        dollars: getNum(dollars)
      },
      totalCents,
      totalDollars: (totalCents / 100).toFixed(2)
    };
  }
  module.exports = { coinCombo, coinValue };

if (require.main === module) {
  // Run the test block provided in the instructions
}

  
  // ----------------------------
// Manual Test Cases
// ----------------------------
if (require.main === module) {

    console.log('\n===== Manual Tests for coinCombo() =====');
    const testCombo1 = coinCombo(5);
    console.log(`Test 1 - coinCombo(5)`);
    console.log(`Expected combinations > 0, Actual: ${testCombo1.totalCombinations}`);
    console.log('Sample:', testCombo1.combinations.slice(0, 3));
  
    const testCombo2 = coinCombo(0);
    console.log(`\nTest 2 - coinCombo(0)`);
    console.log(`Expected: 1 combination with all zeros`);
    console.log('Actual:', testCombo2.combinations);
  
    const testCombo3 = coinCombo(-5);
    console.log(`\nTest 3 - coinCombo(-5)`);
    console.log(`Expected: 0 combinations`);
    console.log('Actual:', testCombo3.totalCombinations);
  
    console.log('\n===== Manual Tests for coinValue() =====');
    const testValue1 = coinValue({ pennies: 4, nickels: 1, dimes: 2, quarters: 1, halves: 0, dollars: 1 });
    console.log(`Test 1 - coinValue({4p,1n,2d,1q,0h,1$})`);
    console.log(`Expected cents: 4 + 5 + 20 + 25 + 0 + 100 = 154`);
    console.log('Actual:', testValue1.totalCents, `($${testValue1.totalDollars})`);
  
    const testValue2 = coinValue({});
    console.log(`\nTest 2 - coinValue({})`);
    console.log(`Expected: 0 cents`);
    console.log('Actual:', testValue2.totalCents, `($${testValue2.totalDollars})`);
  
    const testValue3 = coinValue({ pennies: '10', nickels: '2', dollars: '1' });
    console.log(`\nTest 3 - coinValue(string inputs)`);
    console.log(`Expected: 10 + 10 + 100 = 120`);
    console.log('Actual:', testValue3.totalCents, `($${testValue3.totalDollars})`);
  }
  
  