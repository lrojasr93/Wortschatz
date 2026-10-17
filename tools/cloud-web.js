// ---- Web: free account and progress sync with Supabase (replaces the Claude account sync) ----
// Inserted by tools/build.js into app.js. SB_CFG comes from tools/supabase.json; when it is empty the app
// keeps progress on the device only, as before. The Supabase library loads only for people who sign in.
var SB=null, SB_LINK='wortschatz-cloud-user', SB_AUTH='wortschatz-auth';
if(LANG==='es') Object.assign(ES,{
  '<h3 class="rt" style="margin:18px 0 4px">Backup</h3>':'<h3 class="rt" style="margin:18px 0 4px">Copia de seguridad</h3>',
  'Saved only on this device. Create a free account to keep your progress on all your devices.':'Guardado solo en este dispositivo. Crea una cuenta gratis para conservar tu progreso en todos tus dispositivos.',
  'Your email':'Tu email',
  'Send me a sign-in link':'Envíame un enlace para entrar',
  'No password needed. We email you a link and a code.':'Sin contraseña. Te enviamos por email un enlace y un código.',
  'Check your email: ':'Revisa tu email: ',
  '. Open the link on this device, or type the code from the email here.':'. Abre el enlace en este dispositivo o escribe aquí el código del email.',
  'Code from the email':'Código del email',
  'Sign in':'Entrar',
  'Use another email':'Usar otro email',
  'Sending…':'Enviando…',
  'Type a valid email.':'Escribe un email válido.',
  'Type the code from the email.':'Escribe el código del email.',
  'The email could not be sent. Try again in a minute.':'No se pudo enviar el email. Inténtalo de nuevo en un minuto.',
  'That code is wrong or has expired. Ask for a new email.':'Ese código es incorrecto o ha caducado. Pide un email nuevo.',
  'Could not connect. Check your internet and try again.':'No se pudo conectar. Revisa tu internet e inténtalo de nuevo.',
  'Connecting to your account…':'Conectando con tu cuenta…',
  'Synced with your account ':'Sincronizado con tu cuenta ',
  '. Sign in with the same email on another device and your progress follows you.':'. Entra con el mismo email en otro dispositivo y tu progreso te acompaña.',
  'No connection right now. Your progress is saved on this device and syncs when you are back online.':'Sin conexión ahora mismo. Tu progreso está guardado en este dispositivo y se sincroniza cuando vuelvas a tener internet.',
  'Your progress is too large to sync. Export a backup file instead.':'Tu progreso es demasiado grande para sincronizarlo. Exporta un archivo de copia.',
  'Sign out':'Cerrar sesión',
  'Delete account':'Borrar cuenta',
  'Your account already has progress':'Tu cuenta ya tiene progreso',
  'The account was last saved on ':'La cuenta se guardó por última vez el ',
  '. Which progress do you want to keep? The other one is replaced.':'. ¿Qué progreso quieres conservar? El otro se reemplaza.',
  'Keep the account progress':'Conservar el de la cuenta',
  'Keep this device':'Conservar el de este dispositivo',
  'Delete your account?':'¿Borrar tu cuenta?',
  'Your account and the progress saved in it are deleted for good. The progress on this device stays.':'Tu cuenta y el progreso guardado en ella se borran para siempre. El progreso de este dispositivo se queda.',
  'Cancel':'Cancelar',
  'Delete':'Borrar',
  'Account deleted.':'Cuenta borrada.',
  'The account could not be deleted. Try again later.':'No se pudo borrar la cuenta. Inténtalo más tarde.',
  'Signed out. Your progress stays on this device.':'Sesión cerrada. Tu progreso se queda en este dispositivo.'
});
function sbLib(){
  if(window.supabase&&supabase.createClient) return Promise.resolve();
  return new Promise(function(ok,no){var s=document.createElement('script');s.src=SB_CFG.lib;s.onload=ok;s.onerror=no;document.head.appendChild(s)});
}
function sbClient(){
  if(SB) return Promise.resolve(SB);
  return sbLib().then(function(){
    SB=supabase.createClient(SB_CFG.url,SB_CFG.anonKey,{auth:{flowType:'implicit',persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,storageKey:SB_AUTH}});
    // Supabase asks not to call it from inside this callback, so start the sync on the next tick.
    SB.auth.onAuthStateChange(function(ev,session){
      var u=session&&session.user;
      setTimeout(function(){
        if(u&&u.id!==CLOUD.uid) cloudStart(u);
        else if(!u&&CLOUD.uid){CLOUD.uid=null;CLOUD.db=null;CLOUD.state='off';cloudShow()}
      },0);
    });
    return SB;
  });
}
function hasProgress(o){return !!o&&['know','days','progress','verbs'].some(function(k){return o[k]&&Object.keys(o[k]).length>0})}
function cloudShow(){if(ui.tab==='prog'&&!ui.pl)render();else stats()}
function cloudFree(){return !ui.cv&&!ui.tr&&!ui.vq&&!ui.quiz&&!ui.rd&&!ui.pl&&!ui.session}
function cloudRow(){return SB.from('progress').select('data,saved_at').eq('user_id',CLOUD.uid).maybeSingle().then(function(r){if(r.error)throw r.error;return r.data})}
function cloudTake(row){adopt(JSON.parse(JSON.stringify(row.data)));S.savedAt=row.saved_at;try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}if(cloudFree())render();else stats()}
function cloudStart(u){
  CLOUD.uid=u.id;CLOUD.email=u.email||'';CLOUD.db=SB;CLOUD.state='sync';ui.clSent=null;ui.clErr='';cloudShow();
  var linked=null;try{linked=localStorage.getItem(SB_LINK)}catch(e){}
  cloudRow().then(function(row){
    if(CLOUD.uid!==u.id) return;
    if(row&&row.data){
      if(!hasProgress(S)||(linked===u.id&&row.saved_at>(S.savedAt||0))){cloudLink();CLOUD.state='on';CLOUD.at=Date.now();cloudTake(row);return}
      if(linked!==u.id&&row.saved_at!==S.savedAt&&hasProgress(row.data)){CLOUD.state='pick';ui.clPick=row;ui.tab=ui.msub='prog';ui.pl=null;render();return}
    }
    cloudLink();cloudPush();
  },function(){CLOUD.state='err';cloudShow()});
}
function cloudLink(){try{localStorage.setItem(SB_LINK,CLOUD.uid)}catch(e){}}
function cloudPush(){
  if(!SB||!CLOUD.uid||CLOUD.state==='pick') return;
  if(CLOUD.busy){CLOUD.again=true;return}
  CLOUD.busy=true;clearTimeout(CLOUD.timer);
  var at=S.savedAt||Date.now();
  SB.from('progress').upsert({user_id:CLOUD.uid,data:S,saved_at:at,updated_at:new Date().toISOString()}).then(function(r){
    if(r.error) throw r.error;
    CLOUD.state='on';CLOUD.at=Date.now();
  }).catch(function(e){CLOUD.state=e&&/check constraint|too large/i.test(e.message||'')?'full':'err'}).then(function(){
    CLOUD.busy=false;if(CLOUD.again){CLOUD.again=false;cloudPush()}if(ui.tab==='prog'&&!ui.pl)render();
  });
}
// Coming back to the app: take newer progress from another device. Leaving it: save right away.
function cloudPull(){
  if(!SB||!CLOUD.uid||CLOUD.state==='pick'||CLOUD.busy) return;
  cloudRow().then(function(row){
    if(row&&row.data&&row.saved_at>(S.savedAt||0)){CLOUD.state='on';CLOUD.at=Date.now();cloudTake(row)}
    else if(CLOUD.state==='err') cloudPush();
  },function(){});
}
function cloudInit(){
  if(!SB_CFG.url||!SB_CFG.anonKey) return;
  document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible')cloudPull();else if(CLOUD.timer&&CLOUD.state!=='pick')cloudPush()});
  addEventListener('online',function(){if(CLOUD.uid)cloudPull()});
  document.addEventListener('input',function(e){if(e.target.id==='cl-email')ui.clEmail=e.target.value;else if(e.target.id==='cl-code')ui.clCode=e.target.value});
  document.addEventListener('keydown',function(e){if(e.key==='Enter'&&/^cl-(email|code)$/.test(e.target.id)){e.preventDefault();A[e.target.id==='cl-email'?'clsend':'clcode']()}});
  var stored=false;try{stored=!!localStorage.getItem(SB_AUTH)}catch(e){}
  var back=/access_token=|error_description=/.test(location.hash);
  if(stored||back) sbClient().catch(function(){CLOUD.state='err';cloudShow()});
}
function cloudStatus(){
  var d=CLOUD.at?new Date(CLOUD.at).toLocaleTimeString(LANG==='es'?'es':'en',{hour:'2-digit',minute:'2-digit'}):'';
  return {sync:tl('Connecting to your account…'),on:'☁ '+tl('Synced with your account ')+CLOUD.email+(d?' ('+d+')':'')+tl('. Sign in with the same email on another device and your progress follows you.'),err:tl('No connection right now. Your progress is saved on this device and syncs when you are back online.'),full:tl('Your progress is too large to sync. Export a backup file instead.')}[CLOUD.state]||'';
}
function vBackup(){
  var on=SB_CFG.url&&SB_CFG.anonKey, h=tl('<h3 class="rt" style="margin:18px 0 4px">Backup</h3>');
  if(!on) h+='<p class="sub" style="margin-bottom:8px">'+tl('Saved only in this browser.')+'</p>';
  else if(CLOUD.state==='pick'&&ui.clPick){
    h+='<div class="gres a-die" style="margin:6px 0 10px"><p><b>'+tl('Your account already has progress')+'</b></p><p class="sub" style="margin:0">'+tl('The account was last saved on ')+esc(new Date(ui.clPick.saved_at).toLocaleString(LANG==='es'?'es':'en',{dateStyle:'medium',timeStyle:'short'}))+tl('. Which progress do you want to keep? The other one is replaced.')+'</p><div class="row"><button class="btn" data-a="clpick" data-v="cloud">'+tl('Keep the account progress')+'</button><button class="btn ghost" data-a="clpick" data-v="local">'+tl('Keep this device')+'</button></div></div>';
  }else if(CLOUD.uid){
    h+='<p class="sub" style="margin-bottom:8px">'+esc(cloudStatus())+'</p>';
    if(ui.clDel) h+='<div class="gres a-die" style="margin:6px 0 10px"><p><b>'+tl('Delete your account?')+'</b></p><p class="sub" style="margin:0">'+tl('Your account and the progress saved in it are deleted for good. The progress on this device stays.')+'</p><div class="row"><button class="btn ghost" data-a="cldel" data-v="no">'+tl('Cancel')+'</button><button class="btn" data-a="cldel" data-v="yes">'+tl('Delete')+'</button></div></div>';
    else h+='<div class="row" style="margin-bottom:8px"><button class="btn ghost" data-a="clout">'+tl('Sign out')+'</button><button class="btn ghost" data-a="cldel" data-v="ask">'+tl('Delete account')+'</button></div>';
  }else if(CLOUD.state==='sync'){
    h+='<p class="sub" style="margin-bottom:8px">'+tl('Connecting to your account…')+'</p>';
  }else{
    h+='<p class="sub" style="margin-bottom:8px">'+tl('Saved only on this device. Create a free account to keep your progress on all your devices.')+'</p><div class="form" style="margin-bottom:10px">';
    if(ui.clSent) h+='<p class="sub" style="margin:0 0 8px">'+tl('Check your email: ')+'<b>'+esc(ui.clSent)+'</b>'+tl('. Open the link on this device, or type the code from the email here.')+'</p><input id="cl-code" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="10" placeholder="'+tl('Code from the email')+'" aria-label="'+tl('Code from the email')+'" value="'+esc(ui.clCode||'')+'"><div class="row"><button class="btn" data-a="clcode">'+tl('Sign in')+'</button><button class="btn ghost" data-a="clsend" data-v="again">'+tl('Use another email')+'</button></div>';
    else h+='<input id="cl-email" type="email" autocomplete="email" autocapitalize="none" spellcheck="false" placeholder="'+tl('Your email')+'" aria-label="'+tl('Your email')+'" value="'+esc(ui.clEmail||'')+'"><div class="row"><button class="btn"'+(ui.clBusy?' disabled':'')+' data-a="clsend">'+(ui.clBusy?tl('Sending…'):tl('Send me a sign-in link'))+'</button></div><p class="sub" style="margin:4px 0 0">'+tl('No password needed. We email you a link and a code.')+'</p>';
    h+='</div>';
  }
  if(ui.clErr) h+='<p class="note">'+esc(ui.clErr)+'</p>';
  h+=tl('<div class="row"><button class="btn ghost" data-a="bkexp">Export file</button><button class="btn ghost" data-a="bkimp">Import file</button></div><input type="file" id="bk-file" accept=".json,application/json" hidden>');
  if(ui.bkMsg) h+='<p class="note">'+esc(ui.bkMsg)+'</p>';
  if(ui.bkPending) h+=tl('<div class="gres a-die" style="margin-top:10px"><p><b>Replace your progress?</b></p><p class="sub" style="margin:0">This backup is from ')+esc(ui.bkPending.when)+tl('. Your current progress in this browser will be replaced.</p><div class="row"><button class="btn ghost" data-a="bkno">Cancel</button><button class="btn" data-a="bkyes">Replace</button></div></div>');
  return h;
}
function clFail(msg){return function(){ui.clBusy=false;ui.clErr=msg;render()}}
Object.assign(A,{
  clsend:function(d){
    ui.clErr='';
    if(d&&d.v==='again'){ui.clSent=null;ui.clCode='';render();return}
    var el=document.getElementById('cl-email'), em=((el&&el.value)||ui.clEmail||'').trim().toLowerCase();
    ui.clEmail=em;
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)){ui.clErr=tl('Type a valid email.');render();return}
    ui.clBusy=true;render();
    sbClient().then(function(sb){
      return sb.auth.signInWithOtp({email:em,options:{emailRedirectTo:location.origin+location.pathname}}).then(function(r){
        if(r.error) throw r.error;
        ui.clBusy=false;ui.clSent=em;ui.clCode='';render();var c=document.getElementById('cl-code');if(c)c.focus();
      }).catch(clFail(tl('The email could not be sent. Try again in a minute.')));
    },clFail(tl('Could not connect. Check your internet and try again.')));
  },
  clcode:function(){
    var el=document.getElementById('cl-code'), code=((el&&el.value)||ui.clCode||'').replace(/\s/g,'');
    ui.clErr='';
    if(!/^\d{6,10}$/.test(code)){ui.clErr=tl('Type the code from the email.');render();return}
    sbClient().then(function(sb){
      return sb.auth.verifyOtp({email:ui.clSent,token:code,type:'email'}).then(function(r){if(r.error)throw r.error});
    }).catch(clFail(tl('That code is wrong or has expired. Ask for a new email.')));
  },
  clpick:function(d){
    var row=ui.clPick;ui.clPick=null;cloudLink();
    if(d.v==='cloud'&&row){CLOUD.state='on';CLOUD.at=Date.now();cloudTake(row)}
    else{CLOUD.state='sync';save();cloudPush();render()}
  },
  clout:function(){
    if(CLOUD.timer) cloudPush();
    SB.auth.signOut().catch(function(){}).then(function(){CLOUD.uid=null;CLOUD.db=null;CLOUD.state='off';ui.bkMsg=tl('Signed out. Your progress stays on this device.');render()});
  },
  cldel:function(d){
    if(d.v!=='yes'){ui.clDel=d.v==='ask';render();return}
    ui.clDel=false;
    SB.rpc('delete_account').then(function(r){
      if(r.error) throw r.error;
      try{localStorage.removeItem(SB_LINK)}catch(e){}
      return SB.auth.signOut({scope:'local'}).catch(function(){}).then(function(){CLOUD.uid=null;CLOUD.db=null;CLOUD.state='off';ui.bkMsg=tl('Account deleted.');render()});
    }).catch(function(){ui.bkMsg=tl('The account could not be deleted. Try again later.');render()});
  }
});
