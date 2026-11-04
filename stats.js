// Anonymous, cookieless visit counts with GoatCounter (rumboalemania.goatcounter.com).
// Our own tiny sender instead of loading gc.zgo.at/count.js: no third-party code runs on rumboalemania.com,
// where the app keeps the Supabase sign-in. Used by the landing (landing.js) and inlined into app/app.js by tools/build.js.
// goatcounter.count({path, title, event}) sends one count; without a path it counts the current page.
(function(){
  var END = 'https://rumboalemania.goatcounter.com/count';
  function count(o){
    try{
      o = o || {};
      if (navigator.webdriver || /^(localhost|127\.|\[::1\])/.test(location.hostname) || location.protocol === 'file:') return;
      var loc = location, c = document.querySelector('link[rel="canonical"][href]');
      if (c) { var a = document.createElement('a'); a.href = c.href; if (a.hostname === location.hostname) loc = a; }
      var q = { p: o.path || (loc.pathname + loc.search) || '/', t: o.title || document.title, rnd: Math.random().toString(36).slice(2) };
      if (o.event) q.e = 'true';
      else { if (document.referrer) q.r = document.referrer; if (location.search) q.q = location.search; }
      var url = END + '?' + Object.keys(q).map(function(k){ return k + '=' + encodeURIComponent(String(q[k]).slice(0, 500)); }).join('&');
      if (navigator.sendBeacon && navigator.sendBeacon(url)) return;
      new Image().src = url;
    }catch(e){}
  }
  window.goatcounter = { count: count };
})();
