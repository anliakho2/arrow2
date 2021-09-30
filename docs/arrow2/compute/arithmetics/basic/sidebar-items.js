initSidebarItems({"fn":[["add","Adds two primitive arrays with the same type. Panics if the sum of one pair of values overflows."],["add_scalar","Adds a scalar T to a primitive array of type T. Panics if the sum of the values overflows."],["checked_add","Checked addition of two primitive arrays. If the result from the sum overflows, the validity for that index is changed to None"],["checked_add_scalar","Checked addition of a scalar T to a primitive array of type T. If the result from the sum overflows then the validity index for that value is changed to None"],["checked_div","Checked division of two primitive arrays. If the result from the division overflows, the result for the operation will change the validity array making this operation None"],["checked_div_scalar","Checked division of a primitive array of type T by a scalar T. If the divisor is zero then the validity array is changed to None."],["checked_mul","Checked multiplication of two primitive arrays. If the result from the multiplications overflows, the validity for that index is changed returned."],["checked_mul_scalar","Checked multiplication of a scalar T to a primitive array of type T. If the result from the multiplication overflows, then the validity for that index is changed to None"],["checked_powf_scalar","Checked operation of raising an array of primitives to the power of exponent. If the result from the multiplications overflows, the validity for that index is changed returned."],["checked_rem","Checked remainder of two primitive arrays. If the result from the remainder overflows, the result for the operation will change the validity array making this operation None"],["checked_rem_scalar","Checked remainder of a primitive array of type T by a scalar T. If the divisor is zero then the validity array is changed to None."],["checked_sub","Checked subtraction of two primitive arrays. If the result from the subtraction overflow, the validity for that index is changed"],["checked_sub_scalar","Checked subtraction of a scalar T to a primitive array of type T. If the result from the subtraction overflows, then the validity for that index is changed to None"],["div","Divides two primitive arrays with the same type. Panics if the divisor is zero of one pair of values overflows."],["div_scalar","Divide a primitive array of type T by a scalar T. Panics if the divisor is zero."],["mul","Multiplies two primitive arrays with the same type. Panics if the multiplication of one pair of values overflows."],["mul_scalar","Multiply a scalar T to a primitive array of type T. Panics if the multiplication of the values overflows."],["overflowing_add","Overflowing addition of two primitive arrays. If the result from the sum is larger than the possible number for this type, the result for the operation will be an array with overflowed values and a  validity array indicating the overflowing elements from the array."],["overflowing_add_scalar","Overflowing addition of a scalar T to a primitive array of type T. If the result from the sum is larger than the possible number for this type, then the result will be an array with overflowed values and a validity array indicating the overflowing elements from the array"],["overflowing_mul","Overflowing multiplication of two primitive arrays. If the result from the mul overflows, the result for the operation will be an array with overflowed values and a validity array indicating the overflowing elements from the array."],["overflowing_mul_scalar","Overflowing multiplication of a scalar T to a primitive array of type T. If the result from the mul overflows for this type, then the result will be an array with overflowed values and a validity array indicating the overflowing elements from the array"],["overflowing_sub","Overflowing subtraction of two primitive arrays. If the result from the sub is smaller than the possible number for this type, the result for the operation will be an array with overflowed values and a validity array indicating the overflowing elements from the array."],["overflowing_sub_scalar","Overflowing subtraction of a scalar T to a primitive array of type T. If the result from the sub is smaller than the possible number for this type, then the result will be an array with overflowed values and a validity array indicating the overflowing elements from the array"],["powf_scalar","Raises an array of primitives to the power of exponent. Panics if one of the values values overflows."],["rem","Remainder of two primitive arrays with the same type. Panics if the divisor is zero of one pair of values overflows."],["rem_scalar","Remainder a primitive array of type T by a scalar T. Panics if the divisor is zero."],["saturating_add","Saturating addition of two primitive arrays. If the result from the sum is larger than the possible number for this type, the result for the operation will be the saturated value."],["saturating_add_scalar","Saturated addition of a scalar T to a primitive array of type T. If the result from the sum is larger than the possible number for this type, then the result will be saturated"],["saturating_mul","Saturating multiplication of two primitive arrays. If the result from the multiplication overflows, the result for the operation will be the saturated value."],["saturating_mul_scalar","Saturated multiplication of a scalar T to a primitive array of type T. If the result from the mul overflows for this type, then the result will be saturated"],["saturating_sub","Saturating subtraction of two primitive arrays. If the result from the sub is smaller than the possible number for this type, the result for the operation will be the saturated value."],["saturating_sub_scalar","Saturated subtraction of a scalar T to a primitive array of type T. If the result from the sub is smaller than the possible number for this type, then the result will be saturated"],["sub","Subtracts two primitive arrays with the same type. Panics if the subtraction of one pair of values overflows."],["sub_scalar","Subtract a scalar T to a primitive array of type T. Panics if the subtraction of the values overflows."]]});