function index(array, n){
   if (array[n] == undefined) {
    return -1;
  }  else {
    return Math.pow(array[n], n);
  }
}

function index(array, n){
  return array[n] ** n || -1;
}

function index( array, n ) {
    return (array.length) > n ? Math.pow(array[n], n) : -1;
}