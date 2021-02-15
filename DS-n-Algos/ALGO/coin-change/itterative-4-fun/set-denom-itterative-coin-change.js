var makeChange = function ( total ) {

  var coins = [ 1, 2, 5, 10, 20, 50, 100, 200 ];
  var count = 0;
  //Had to use var to escape block scope
  for ( var a = total; a >= 0; a -= coins[ coins.length - 1 ] ) {
    for ( var b = a; b >= 0; b -= coins[ coins.length - 2 ] ) {
      for ( var c = b; c >= 0; c -= coins[ coins.length - 3 ] ) {
        for ( var d = c; d >= 0; d -= coins[ coins.length - 4 ] ) {
          for ( var e = d; e >= 0; e -= coins[ coins.length - 5 ] ) {
            for ( var f = e; f >= 0; f -= coins[ coins.length - 6 ] ) {
              for ( var g = f; g >= 0; g -= coins[ coins.length - 7 ] ) {
                count++;
              }
            }
          }
        }
      }
    }
  }
  return count;
};


console.log( 'makeChange(200): ', makeChange( 200 ) );//makeChange(200):  73682
