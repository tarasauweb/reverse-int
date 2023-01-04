module.exports = function reverse (n) {
    let myNum = String(n).split('')
    myNum = myNum.filter(item=>{
        if(item !== '-') {
            return item
        }
    }).reverse().join('')
    return Number(myNum)
}
