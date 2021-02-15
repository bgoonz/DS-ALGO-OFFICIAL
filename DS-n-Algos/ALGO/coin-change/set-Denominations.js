let makeChange = function ( total ) {
  let count = 0;
  let coins = [ 1, 2, 5, 10, 20, 50, 100, 200 ];

  let changer = function ( index, value ) {

    let currentCoin = coins[ index ];

    if ( index === 0 ) {
      if ( value % currentCoin === 0 ) {
        count++;
      }
      return;
    }

    while ( value >= 0 ) {
      changer( index - 1, value );
      value -= currentCoin;
    }
  }
  changer( coins.length - 1, total );
  return count;
};

makeChange( 200 );
console.log( 'makeChange(200): ', makeChange( 200 ) );//makeChange(200):  73682
