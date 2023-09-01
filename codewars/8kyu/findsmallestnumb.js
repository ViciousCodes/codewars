Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.



my solution 
//
class SmallestIntegerFinder {
    findSmallestInt(args) {
      // Use the reduce method to find the smallest integer
      return args.reduce((min, max) => {
        if (max > min) {
          return min;
        }
        return max;
      });
    }
  }

  soltution 2 
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min.apply(null, args);
    }
  }
  sol 3
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.reduce(function(prev, curr, index, array) {
        return prev < curr ? prev : curr;
      });
    }
  }