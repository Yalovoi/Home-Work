function digitize(n){
 return  (n + '').split('').reverse().map(el => +el)
}
