function tri(arr){
    for(let i=1;i<arr.length;i++){
        j=i;
        while(j>0 && arr[j]<arr[j-1]){
            let temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    return arr;
}
let result = tri([9,5,7,6,1]); 
console.log(result);