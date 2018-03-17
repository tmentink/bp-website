
var BP = {
  min_sm: window.matchMedia("(min-width: 576px)"),
  min_md: window.matchMedia("(min-width: 768px)"),
  min_lg: window.matchMedia("(min-width: 992px)"),
  min_xl: window.matchMedia("(min-width: 1200px)"),

  max_xs: window.matchMedia("(max-width: 575px)"),
  max_sm: window.matchMedia("(max-width: 767px)"),
  max_md: window.matchMedia("(max-width: 991px)"),
  max_lg: window.matchMedia("(max-width: 1199px)"),

  only_xs: window.matchMedia("(max-width: 575px)"),
  only_sm: window.matchMedia("(min-width: 576px) and (max-width: 767px)"),
  only_md: window.matchMedia("(min-width: 768px) and (max-width: 991px)"),
  only_lg: window.matchMedia("(min-width: 992px) and (max-width: 1199px)"),
  only_xl: window.matchMedia("(min-width: 1200px)"),

  max_sm_portrait: window.matchMedia("(max-width: 767px) and (orientation: portrait)"),
  max_md_portrait: window.matchMedia("(max-width: 991px) and (orientation: portrait)")
}
