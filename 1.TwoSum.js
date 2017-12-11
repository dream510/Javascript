/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 //Solution 1
var twoSum = function(nums, target) {
    var arrResult=[];
    var numLength=nums.lenght;
    for(var i=0;i<numLength;i++){
        for(var j=i+1;j<numLength;j++){
            var sum=nums[i]+nums[j];
            if(sum===target){
                arrResult.push(i,j);
               break;
            }
        }
    }
    return arrResult;
};
