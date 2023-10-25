function productExceptSelf(nums: number[]): number[] {
  const array: Array<number> = [];
  let product: number = 1;

  for (let idx = 0; idx < nums.length; idx++) {
    array[idx] = product;
    console.log("array[" + idx + "] = " + product);

    console.log(product + " *= " + nums[idx]);
    product *= nums[idx];
  }

  console.log(array);
  console.log(product);

  product = 1;

  for (let idx = nums.length - 1; idx >= 0; idx--) {
    array[idx] *= product;
    product *= nums[idx];
  }

  return array;
}

console.log(productExceptSelf([1, 2, 3, 4]));
