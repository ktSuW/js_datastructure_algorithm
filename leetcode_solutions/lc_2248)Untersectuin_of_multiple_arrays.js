// Approach -1 - first attempt 
// Not working - still needs to debug 
// map is correct. However, when I try to access key and value by iterating the map object, I could not access them. Therefore, the result is incorrect. 

// Inefficient
// Extra space => firstRow 
// Map => O(n)
// Time => O(nxn);
// Lessons learned 
// - constraint : numbers are unique. I could have keep count array of max length given in the constraint 
// - map methods 

var intersection = function (nums) {
  let firstRow = nums[0];
  let map = new Map();
  for (let i = 0; i < firstRow.length; i++) {
    map.set(firstRow[i], 1);
  }

  for (let i = 1; i < nums.length; i++) {
    for (let col = 0; col < nums[i].length; col++) {
      if (map.has(nums[i][col])) {
        map.set(nums[i][col], map.get(nums[i][col]) + 1);
      } else {
        map.delete(nums[i][col]);
      }
    }
  }
  console.log(map);
  let result = new Array();
  const rowNum = nums.legnth;
  console.log(rowNum);
  for (const [key, value] of Object.entries(map)) {
    if (value === nums.length) {
      result.push(key);
    }
  }
  return result.sort();
};

// Approach - 2 
// I realised that I could not use Object.map() since map is not an Object, i.e., map = {};
// Time O(nxn)
// Space O(nums[0])

var intersection = function (nums) {
  let map = new Map();

  let firstRow = nums[0];
  for (let i = 0; i < firstRow.length; i++) {
    map.set(firstRow[i], 1);
  }

  for (let i = 1; i < nums.length; i++) {
    for (let col = 0; col < nums[i].length; col++) {
      if (map.has(nums[i][col])) {
        map.set(nums[i][col], map.get(nums[i][col]) + 1);
      } else {
        map.delete(nums[i][col]);
      }
    }
  }
  console.log(map);

  let ans = [];
  for (const entry of map.entries()) {
    let key = entry[0];
    let value = entry[1];
    // console.log(key, value);
    if (value === nums.length) {
      ans.push(key);
    }
  }
  ans = ans.sort((a, b) => a - b);
  return ans;
};

// Approach - 3
// Time : O(nxn)
// Space : O(n) count array 
var intersection = function(nums) {
    let ans = [];
    let count = new Array(1001).fill(0)
    
    nums.forEach((row)=>{
            row.forEach((col)=>{
                count[col]++;
            })
        }
    );
    
    for(let i = 0; i < count.length; i++){
        if(count[i] === nums.length){
            ans.push(i);
        }
    }
    return ans;
};

// Approach - 4
// Use set
var intersection = function (nums) {
  // add first row values into set
  let set = new Set(nums[0]);
  const len = nums.length;

  for (let i = 1; i < len; i++) {
    const arr = nums[i];
    const nextSet = new Set();
    for (const val of arr.values()) if (set.has(val)) nextSet.add(val);

    set = nextSet;
    if (!set.size) break;
  }

  return [...set].sort((a, b) => a - b);
};