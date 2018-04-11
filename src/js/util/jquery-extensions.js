
!(() => {
  "use strict"


  // ----------------------------------------------------------------------
  // Easings
  // ----------------------------------------------------------------------

  $.easing.easeInOutExpo = function(x) {
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5
      ? Math.pow(2, 20 * x - 10) / 2
      : (2 - Math.pow(2, -20 * x + 10)) / 2
  }


  // ----------------------------------------------------------------------
  // Insert At
  // ----------------------------------------------------------------------

  $.fn.insertAt = function(index, $parent) {
    return this.each(function() {
      index === 0
        ? $parent.prepend(this)
        : $parent.children().eq(index - 1).after(this)
    })
  }


  // ----------------------------------------------------------------------
  // In View
  // ----------------------------------------------------------------------

  $.fn.inView = function(offset) {
    if (!this.length) return false
    const rect = this.get(0).getBoundingClientRect()
    offset     = offset || 0

    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top + offset <= document.documentElement.clientHeight &&
      rect.left<= document.documentElement.clientWidth
    )
  }


  // ----------------------------------------------------------------------
  // Selector Cache
  // ----------------------------------------------------------------------

  var SelectorCache = {}

  window.$cache = function(selector, context, reset) {
    if (typeof context === "boolean") {
      reset   = context
      context = false
    }
    var cacheKey = context
      ? `${context.selector} ${selector}`
      : selector

    if (undefined === SelectorCache[cacheKey] || reset) {
      SelectorCache[cacheKey] = context
        ? context.find(selector)
        : jQuery(selector)
    }

    return SelectorCache[cacheKey]
  }


})()
