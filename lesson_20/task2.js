"use sctrict";

alert( 6.35.toFixed(20) );        // 6.34999999999999964473
alert( 1.35.toFixed(20) );        // 1.35000000000000008882

alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000

alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4