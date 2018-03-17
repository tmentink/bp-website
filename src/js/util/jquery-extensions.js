
!(() => {
  "use strict"


  // ----------------------------------------------------------------------
  // Selector Cache
  // ----------------------------------------------------------------------

  var SelectorCache = {}

  window.$cache = function (selector, context, reset) {
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
