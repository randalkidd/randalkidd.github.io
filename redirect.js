// Old GitHub Pages address → zoning-hub.com. /MC/ (any case) goes to the home page; deeper
// links keep their page, query and #fragment under /hub/ (where the old site's files now live).
(function () {
  var NEW = 'https://www.zoning-hub.com';
  var m = location.pathname.match(/^\/mc(?:\/(.*))?$/i);
  var rest = m ? (m[1] || '') : null;
  var dest = rest === null ? NEW + '/' : (rest === '' || /^index\.html?$/i.test(rest)) ? NEW + '/' : NEW + '/hub/' + rest;
  location.replace(dest + location.search + location.hash);
})();
