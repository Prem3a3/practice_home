//DSA  practice from youtube

const array1 = [20, 34, 89, 56];
/**
 * bubble sort with time complexity O(n2)+1+2
 */
for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array1.length; j++) {
            if(array1[j] > array1[j+1])
            {
                array1[j] = array1[j+1]+array1[j] - (array1[j+1] =array1[j] )
            }

    }
}
console.warn(array1)

