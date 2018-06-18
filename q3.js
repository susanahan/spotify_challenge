/*Question 3--changePossibilities(amount, amount):
    Your quirky boss collects rare, old coins.They found out you 're a programmer and asked you to solve something they've been wondering for a long time.
    Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.
    Example: for amount = 4(4¢) and denominations = [1, 2, 3](1¢, 2¢ and 3¢), your program would output 4— the number of ways to make 4¢ with those denominations:

    1¢, 1¢, 1¢, 1¢
    1¢, 1¢, 2¢
    1¢, 3¢
    2¢, 2¢
*/

 let waysToReturn = (amount, denoms) => {
    if (amount == 0) {
        return 1;
    } else if (amount < 0) {
        return 0;
    } else if (denoms.length == 0) {
        return 0;
    } else {
        let firstCoin = denoms[0];
        let rest = denoms.slice(1);
        let remainder = amount - firstCoin;
        return waysToReturn(remainder, denoms) + waysToReturn(amount, rest);
    }
}

console.log(waysToReturn(5,[1,2,3]))
//5