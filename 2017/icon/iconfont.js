;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-github" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M941.714 512q0 143.433-83.712 258.011t-216.283 158.574q-15.433 2.853-22.565-3.986t-7.131-17.152v-120.576q0-55.442-29.696-81.152 32.585-3.438 58.587-10.277t53.723-22.272 46.299-37.998 30.281-60.014 11.703-86.016q0-69.157-45.129-117.723 21.138-52.005-4.571-116.553-16.018-5.157-46.299 6.29t-52.553 25.161l-21.723 13.714q-53.138-14.848-109.714-14.848t-109.714 14.848q-9.143-6.29-24.283-15.433t-47.726-22.016-49.152-7.717q-25.161 64.585-3.986 116.553-45.129 48.567-45.129 117.723 0 48.567 11.703 85.723t29.989 60.014 46.007 38.29 53.723 22.272 58.587 10.277q-22.857 20.553-28.014 58.843-11.995 5.705-25.71 8.558t-32.585 2.853-37.413-12.288-31.707-35.73q-10.862-18.286-27.721-29.696t-28.27-13.714l-11.447-1.719q-11.995 0-16.567 2.56t-2.853 6.583 5.157 8.009 7.424 6.839l3.986 2.853q12.581 5.705 24.869 21.723t17.993 29.147l5.705 13.129q7.424 21.723 25.161 35.145t38.29 17.152 39.717 3.986 31.707-2.011l13.129-2.304q0 21.723 0.293 50.871t0.293 30.866q0 10.277-7.424 17.152t-22.857 3.986q-132.571-43.995-216.283-158.574t-83.712-258.011q0-119.442 58.843-220.27t159.707-159.707 220.27-58.843 220.27 58.843 159.707 159.707 58.843 220.27z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-picture" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M909.452127 137.533376 115.073852 137.533376c-27.782763 0-50.389644 22.606881-50.389644 50.389644l0 648.15396c0 27.782763 22.606881 50.389644 50.389644 50.389644l794.379299 0c27.782763 0 50.389644-22.606881 50.389644-50.389644L959.842795 187.92302C959.842795 160.140257 937.234891 137.533376 909.452127 137.533376zM115.073852 179.030489l794.379299 0c4.903683 0 8.892531 3.988848 8.892531 8.892531l0 529.892509L748.638535 546.255175c-9.465582-9.56996-22.086018-14.878872-35.545564-14.953573-0.098237 0-0.191358 0-0.283456 0-13.356193 0-25.930579 5.163603-35.383882 14.513552l-38.394449 37.71395-0.341784-0.344854-44.559868 44.073798-44.36851-44.855604-0.095167 0.094144-178.948625-181.483354c-9.465582-9.56996-22.086018-14.878872-35.545564-14.953573-0.098237 0-0.191358 0-0.283456 0-13.356193 0-25.930579 5.163603-35.429931 14.56574L106.181321 591.80765 106.181321 187.92302C106.181321 183.019337 110.170169 179.030489 115.073852 179.030489zM909.452127 844.969511 115.073852 844.969511c-4.903683 0-8.892531-3.988848-8.892531-8.892531L106.181321 650.171919l222.452441-220.043578c2.257413-2.228761 4.875031-2.570545 6.263657-2.570545 0.011256 0 0.028653 0 0.046049 0 1.372254 0.00614 4.0175 0.35918 6.246261 2.610454l179.049932 181.585685 0.095167-0.094144 54.011124 54.605665c5.198395 5.256724 12.134365 8.169053 19.532869 8.208962 0.046049 0 0.098237 0 0.150426 0 7.335059 0 14.241352-2.836605 19.458167-8.001231l35.268248-34.885532 0.278339 0.283456 57.522088-56.502875c2.257413-2.228761 4.874007-2.570545 6.263657-2.570545 1.106194-0.034792 4.041036 0.329505 6.315846 2.63399l198.137663 200.302979 1.071402-1.059122 0 61.400419C918.344658 840.980663 914.355811 844.969511 909.452127 844.969511z"  ></path>' +
    '' +
    '<path d="M706.904015 343.046007m-69.656453 0a68.07 68.07 0 1 0 139.312906 0 68.07 68.07 0 1 0-139.312906 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)