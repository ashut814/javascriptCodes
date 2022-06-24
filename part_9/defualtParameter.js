"use strict";

const bookings = [];
const createBooking = function (flightNum, numPassenger = 1, price = 199) {
  /* ES-5
    numPassenger = numPassenger || 1;
    price = price || 199;
  */
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking();
// use short-cercuiting

// skipping a defalt parameter
createBooking("HJS32", undefined, 1000);
