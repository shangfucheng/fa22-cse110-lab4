function modifyArray(array) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(doSomething(array[i]));
    }
    return newArr;
}
function doSomething (num) {
        return num * 2;
}
console.log(modifyArray([1,2,3]));
