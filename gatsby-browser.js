/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

require('typeface-inter')

exports.onRouteUpdate = () =>  {
  const userLang = navigator.language.substr(0, 2)

  if (userLang !== "sv" && !window.location.pathname.startsWith("/en")) {
    window.location.pathname = `/en${window.location.pathname}`
  }
}