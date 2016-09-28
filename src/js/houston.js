'use strict';

var houston = {};

houston.countdown = function(endDate, callback) {

  var _second = 1000,
      _minute = _second * 60,
      _hour = _minute * 60,
      _day = _hour * 24,

      elements = ['hs-days', 'hs-hours', 'hs-minutes', 'hs-seconds'],
      timer,

      calculate = function() {
        var now = new Date(),
            remaining = endDate.getTime() - now.getTime(),
            data;

        if(isNaN(endDate)) {
          console.log('Invalid date/time');
          return;
        }

        if(remaining <= 0) {
          clearInterval(timer);

          if(typeof callback === 'function') {
            callback();
          } else {
            console.log('Houston, we have lift off!');
          }
        } else {
          if(!timer) {
            timer = setInterval(calculate, _second);
          }

          data = {
            'hs-days': Math.floor(remaining / _day),
            'hs-hours': Math.floor((remaining % _day) / _hour),
            'hs-minutes': Math.floor((remaining % _hour) / _minute),
            'hs-seconds': Math.floor((remaining % _minute) / _second)
          }

          if(elements.length) {
            for(x in elements) {
              var x = elements[x];
              data[x] = ('00' + data[x]).slice(-2);
              document.querySelector('.' + x).innerHTML = data[x];
            }
          }
        }
      };

  calculate();
}