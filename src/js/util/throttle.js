
!(() => {
  "use strict"


  // ----------------------------------------------------------------------
  // Debounce
  // ----------------------------------------------------------------------

  window.debounce = function(fn, delay) {
    delay = delay || 250
    let timer = null
    return function() {
      const context = this, args = arguments
      clearTimeout(timer)
      timer = setTimeout(function() {
        fn.apply(context, args)
      }, delay)
    }
  }


  // ----------------------------------------------------------------------
  // Throttle
  // ----------------------------------------------------------------------

  window.throttle = function(fn, delay) {
    delay = delay || 250
    let last, deferTimer
    return function() {
      const context = this
      const now = +new Date, args = arguments
      if (last && now < last + delay) {
        clearTimeout(deferTimer)
        deferTimer = setTimeout(function() {
          last = now
          fn.apply(context, args)
        }, delay)
      }
      else {
        last = now
        fn.apply(context, args)
      }
    }
  }


})()
