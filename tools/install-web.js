// ---- Install the web app (web build only; inserted into app.js by tools/build.js) ----
// Android/desktop Chrome: the browser's own install prompt. iPhone/iPad: Share → Add to Home Screen.
// Hidden when the app already runs installed (home-screen app or the Google Play app).
var INST={ev:window.__bip||null};
addEventListener('beforeinstallprompt',function(e){e.preventDefault();INST.ev=window.__bip=e;try{render()}catch(x){}});
addEventListener('appinstalled',function(){INST.ev=window.__bip=null;S.instDone=1;save();gc('install-done',true);try{render()}catch(x){}});
function instMode(){
  try{if(matchMedia('(display-mode: standalone)').matches||navigator.standalone||document.referrer.indexOf('android-app://')===0)return ''}catch(e){}
  var ua=navigator.userAgent||'';
  if(/iphone|ipad|ipod/i.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1))return 'ios';
  if(/android/i.test(ua))return INST_PLAY?'play':INST.ev?'prompt':'android';
  return INST.ev?'prompt':'';
}
function instCard(where){
  var m=instMode();
  if(!m||S.instDone) return '';
  if(where==='today'&&(S.instNo||Object.keys(S.days||{}).length<2)) return '';
  var h='<div class="panel acct inst" style="margin-bottom:14px"><b>📲 '+tl('Install Wortschatz on your phone')+'</b><p class="sub">'+tl('Open it from your home screen, full screen, and keep practicing without internet.')+'</p>';
  if(m==='ios') h+='<ol class="sub" style="margin:4px 0 8px;padding-left:1.2em"><li>'+tl('Open this page in Safari.')+'</li><li>'+tl('Tap Share (the square with an arrow ⬆︎).')+'</li><li>'+tl('Choose “Add to Home Screen”, then “Add”.')+'</li></ol>';
  else if(m==='android') h+='<p class="sub">'+tl('In Chrome, open the menu ⋮ and tap “Install app” or “Add to Home screen”.')+'</p>';
  h+='<div class="row">';
  if(where==='today') h+='<button class="btn ghost" data-a="instno">'+tl('Not now')+'</button>';
  if(m==='prompt') h+='<button class="btn" data-a="inst">'+tl('Install')+'</button>';
  if(m==='play') h+='<a class="btn" href="'+INST_PLAY+'" target="_blank" rel="noopener" data-a="instplay">'+tl('Get it on Google Play')+'</a>';
  return h+'</div></div>';
}
A.inst=function(){
  var e=INST.ev;if(!e)return;gc('install-ask',true);
  e.prompt();(e.userChoice||Promise.resolve({})).then(function(r){INST.ev=window.__bip=null;if(r&&r.outcome==='accepted'){S.instDone=1;save()}gc('install-'+((r&&r.outcome)||'unknown'),true);render()}).catch(function(){});
};
A.instno=function(){S.instNo=1;save();gc('install-later',true);render()};
A.instplay=function(){gc('install-play',true)};
