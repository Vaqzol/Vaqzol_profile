const BRAND_ICONS={"instagram":"<svg aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077\"/></svg>","youtube":"<svg aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z\"/></svg>","youtubemusic":"<svg aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z\"/></svg>","steam":"<svg aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z\"/></svg>","github":"<svg aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"/></svg>","discord":"<svg aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z\"/></svg>"};
const $=id=>document.getElementById(id);
const profile={name:'Vaqzol',handle:'@vaqzol',bio:'Music on. World off.\nA little bit of everything I love.',links:[
 {title:'Instagram',subtitle:'@zxlsmxkky',url:'https://www.instagram.com/zxlsmxkky/',icon:'instagram'},
 {title:'YouTube',subtitle:'@vaqzol',url:'https://www.youtube.com/@vaqzol',icon:'youtube'},
 {title:'YouTube Music',subtitle:'@vaqzol',url:'https://music.youtube.com/@vaqzol',icon:'youtubemusic'},
 {title:'Steam',subtitle:'vaqzol',url:'https://steamcommunity.com/id/vaqzol',icon:'steam'},
 {title:'GitHub',subtitle:'Vaqzol',url:'https://github.com/Vaqzol',icon:'github'},
 {title:'Discord',subtitle:'@vaqzol · Copy username',url:'',icon:'discord'}
]};
let prefs={accent:'#e83b35',motion:true};
try{const saved=JSON.parse(localStorage.getItem('vaqzol-view-prefs'));if(saved){if(/^#[0-9a-f]{6}$/i.test(saved.accent))prefs.accent=saved.accent;if(typeof saved.motion==='boolean')prefs.motion=saved.motion}}catch{}
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let toastTimer,navigationTimer,touchTimer,navigating=false,lastCard=null,pendingTab=null,nativeOpen=false,exitCleanup=null;
function persistPrefs(){try{localStorage.setItem('vaqzol-view-prefs',JSON.stringify(prefs))}catch{}}
function notify(text){$('toast').textContent=text;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),3200)}
function applyPrefs(){document.documentElement.style.setProperty('--accent',prefs.accent);document.body.classList.toggle('motion-off',!prefs.motion);$('motionToggle').textContent=prefs.motion?'MOTION ON':'MOTION OFF';$('motionToggle').setAttribute('aria-pressed',String(prefs.motion));document.querySelectorAll('[data-color]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.color===prefs.accent)))}
function brandIcon(slug,title){const holder=document.createElement('span');holder.innerHTML=BRAND_ICONS[slug];const svg=holder.firstElementChild;if(!svg)throw new Error('Missing embedded icon: '+slug);return svg}
async function copyDiscord(){try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText('vaqzol');notify('Copied vaqzol. Paste it in Discord to add me.');return}}catch{}const field=document.createElement('textarea');field.value='vaqzol';field.readOnly=true;field.style.cssText='position:fixed;left:-9999px;top:0';document.body.append(field);field.select();let copied=false;try{copied=document.execCommand('copy')}catch{}field.remove();notify(copied?'Copied vaqzol. Paste it in Discord to add me.':'Discord username: vaqzol — copy it manually.')}
function cancelNavigation(restoreFocus=false){shapeMusic('restore');if(exitCleanup)exitCleanup();clearTimeout(navigationTimer);if(restoreFocus&&pendingTab&&!pendingTab.closed){try{pendingTab.close()}catch{}}pendingTab=null;navigating=false;document.body.classList.remove('leaving');$('departure').hidden=true;$('departure').setAttribute('aria-hidden','true');$('links').removeAttribute('aria-busy');if(restoreFocus&&lastCard)lastCard.focus({preventScroll:true})}
function goToLink(event,link,card){
 if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
 if(!prefs.motion||reducedMotion.matches)return;
 event.preventDefault();if(navigating)return;navigating=true;lastCard=card;unlockAudio();shapeMusic('muffle');playSfx('slide');warmDestination(link.url);
 const overlay=$('departure');overlay.classList.remove('finished','ready','closing','waiting','fallback');
 $('departIcon').replaceChildren(brandIcon(link.icon,link.title));$('departTitle').replaceChildren();let letterIndex=0;
 link.title.split(' ').forEach(word=>{const w=document.createElement('span');w.className='title-word';w.style.setProperty('--word',$('departTitle').children.length);Array.from(word).forEach(letter=>{const s=document.createElement('span');s.className='title-letter';s.textContent=letter;s.style.setProperty('--letter',letterIndex++);w.append(s)});$('departTitle').append(w)});
 $('departEcho').textContent=link.title.toUpperCase();$('departCount').textContent=String(profile.links.indexOf(link)+1).padStart(2,'0')+' / '+String(profile.links.length).padStart(2,'0');$('departStatus').textContent='Opening '+link.title;
 $('departOpen').href=link.url;$('departOpen').textContent='Open '+link.title;
 overlay.hidden=false;overlay.setAttribute('aria-hidden','false');$('links').setAttribute('aria-busy','true');document.body.classList.add('leaving');
 // Let Ready settle before the curtain closes, then open the destination.
 navigationTimer=setTimeout(()=>{
  overlay.classList.add('ready');$('departStatus').textContent='Ready';
  navigationTimer=setTimeout(()=>closeDeparture(()=>{
   finishNavigation();
  }),180);
 },1100);
}
function closeDeparture(afterClose){
 clearTimeout(navigationTimer);if(exitCleanup)exitCleanup();
 const overlay=$('departure');let complete=false;
 const cleanup=()=>{overlay.removeEventListener('animationend',onEnd);clearTimeout(navigationTimer);exitCleanup=null};
 const finish=()=>{if(complete)return;complete=true;cleanup();afterClose()};
 const onEnd=e=>{if(e.target===overlay&&e.animationName==='curtain-depart')finish()};
 exitCleanup=cleanup;overlay.addEventListener('animationend',onEnd);
 overlay.classList.add('closing');shapeMusic('fade');playSfx('exit');
 // The CSS animationend event opens the link; this is only a missing-event fallback.
 const durations=getComputedStyle(overlay).animationDuration.split(',').map(v=>parseFloat(v)*(v.trim().endsWith('ms')?1:1000));
 navigationTimer=setTimeout(finish,Math.max(...durations.filter(Number.isFinite),0)+150);
}
function finishNavigation(){
 const anchor=$('departOpen');nativeOpen=true;
 try{
  $('departure').classList.add('waiting');$('departure').classList.remove('closing');$('departStatus').textContent='Opening…';
  anchor.click();
  // If a preview rejects navigation, retain a real link instead of trapping the visitor.
  navigationTimer=setTimeout(()=>{
   if(!navigating)return;
   const overlay=$('departure');overlay.classList.add('fallback');
   $('departStatus').textContent='Tap Open to continue.';$('departOpen').focus({preventScroll:true});
  },4500);
 }catch{
  $('departure').classList.remove('closing');$('departure').classList.add('finished');
  $('departStatus').textContent='Ready. Tap Open to continue.';shapeMusic('restore');
 }finally{nativeOpen=false}
}
function openReadyLink(event){
 if(nativeOpen||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
 if(!prefs.motion||reducedMotion.matches){cancelNavigation();return}
 event.preventDefault();
 if($('departure').classList.contains('closing'))return;
 closeDeparture(finishNavigation);
}

function render(){document.title=profile.name+' — personal space';$('displayHandle').textContent=profile.handle;$('displayBio').textContent=profile.bio;$('linkCount').textContent=String(profile.links.length).padStart(2,'0')+' LINKS';$('links').replaceChildren();profile.links.forEach((link,i)=>{const card=document.createElement(link.url?'a':'button');card.className='link-card';card.style.setProperty('--i',i);if(link.url){card.href=link.url;card.target='_self';card.rel='noopener noreferrer';card.addEventListener('click',e=>goToLink(e,link,card))}else{card.type='button';card.setAttribute('aria-label','Copy Discord username vaqzol');card.addEventListener('click',copyDiscord)}const icon=document.createElement('span');icon.className='link-icon';icon.setAttribute('aria-hidden','true');icon.append(brandIcon(link.icon,link.title));const copy=document.createElement('span');copy.className='link-copy';const title=document.createElement('span');title.className='link-title';title.textContent=link.title;const subtitle=document.createElement('span');subtitle.className='link-subtitle';subtitle.textContent=link.subtitle;copy.append(title,subtitle);const number=document.createElement('span');number.className='link-number';number.textContent=String(i+1).padStart(2,'0');card.append(icon,copy,number);$('links').append(card)});$('demoNote').hidden=true;applyPrefs()}
const warmedOrigins=new Set();
function warmDestination(url){
 try{const origin=new URL(url).origin;if(warmedOrigins.has(origin))return;warmedOrigins.add(origin);
  const hint=document.createElement('link');hint.rel='preconnect';hint.href=origin;document.head.append(hint);
 }catch{}
}
const menu=$('links');
menu.addEventListener('pointerover',e=>{const card=e.target.closest('a.link-card');if(card)warmDestination(card.href)});
menu.addEventListener('focusin',e=>{const card=e.target.closest('a.link-card');if(card)warmDestination(card.href)});
function selectCard(card){menu.querySelectorAll('.selected').forEach(c=>{if(c!==card)c.classList.remove('selected')});if(card)card.classList.add('selected');document.body.classList.toggle('menu-active',!!card)}
menu.addEventListener('pointerover',e=>{if(e.pointerType!=='touch'){const card=e.target.closest('.link-card');if(card)selectCard(card)}});menu.addEventListener('pointerleave',()=>selectCard(menu.contains(document.activeElement)?document.activeElement.closest('.link-card'):null));menu.addEventListener('focusin',e=>selectCard(e.target.closest('.link-card')));menu.addEventListener('focusout',e=>{if(!menu.contains(e.relatedTarget))selectCard(null)});menu.addEventListener('pointerdown',e=>{const card=e.target.closest('.link-card');if(!card)return;selectCard(card);if(e.pointerType==='touch'){clearTimeout(touchTimer);touchTimer=setTimeout(()=>selectCard(null),800)}});
document.querySelectorAll('[data-color]').forEach(b=>b.addEventListener('click',()=>{prefs.accent=b.dataset.color;persistPrefs();applyPrefs()}));$('motionToggle').addEventListener('click',()=>{prefs.motion=!prefs.motion;persistPrefs();applyPrefs()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&navigating){e.preventDefault();cancelNavigation(true)}});$('departCancel').addEventListener('click',()=>cancelNavigation(true));$('departOpen').addEventListener('click',openReadyLink);window.addEventListener('pageshow',()=>cancelNavigation());reducedMotion.addEventListener('change',e=>{if(e.matches&&navigating)cancelNavigation(true)});
// Public background track: put your chosen file at audio/bgm.mp3.
const bgm=$('bgm');let musicVolume=.24;
try{const saved=Number(localStorage.getItem('vaqzol-music-volume'));if(localStorage.getItem('vaqzol-music-volume')!==null&&Number.isFinite(saved))musicVolume=Math.max(0,Math.min(1,saved))}catch{}
function updateMusicVolume(){bgm.volume=musicVolume;$('musicVolume').value=String(Math.round(musicVolume*100));$('musicVolume').style.setProperty('--volume-fill',Math.round(musicVolume*100)+'%');$('volumeValue').textContent=Math.round(musicVolume*100)+'%';$('musicVolume').setAttribute('aria-valuetext',Math.round(musicVolume*100)+' percent')}
updateMusicVolume();
let musicSource=null,musicFilter=null,musicGain=null,musicRestoreTimer=null;
let audioContext=null,sfxBus=null,audioUnlocked=false,lastHoverSound=0,muted=false;
try{muted=localStorage.getItem('vaqzol-audio-muted')==='true'}catch{}
function updateSoundControl(){
 bgm.muted=muted;
 if(sfxBus){sfxBus.gain.cancelScheduledValues(audioContext.currentTime);sfxBus.gain.setTargetAtTime(muted?0:.32,audioContext.currentTime,.025)}
 $('soundToggle').setAttribute('aria-pressed',String(muted));
 $('soundToggle').setAttribute('aria-label',muted?'Unmute music and effects':'Mute music and effects');
 $('soundLabel').textContent=muted?'MUTED':audioUnlocked?'SOUND ON':'SOUND';
}
function startMusic(){if(!muted&&audioUnlocked&&bgm.paused&&!bgm.error)bgm.play().catch(()=>{})}
function unlockAudio(){
 audioUnlocked=true;
 try{if(!audioContext){const AudioCtor=window.AudioContext||window.webkitAudioContext;if(AudioCtor){audioContext=new AudioCtor();sfxBus=audioContext.createGain();sfxBus.gain.value=muted?0:.32;sfxBus.connect(audioContext.destination)}}
  if(audioContext?.state==='suspended')audioContext.resume().catch(()=>{});
 }catch{}
 ensureMusicGraph();updateSoundControl();startMusic();
}

function tryAutoplayMusic(){
 if(muted||bgm.error)return;
 bgm.play().then(()=>{audioUnlocked=true;updateSoundControl()},()=>{updateSoundControl();$('soundToggle').title='Click to enable sound'});
}
function ensureMusicGraph(){
 if(musicSource||!audioContext)return;
 // Keep the HTML slider controlling music volume; this gain shapes only the transition.
 try{musicFilter=audioContext.createBiquadFilter();musicFilter.type='lowpass';musicFilter.frequency.value=20000;musicFilter.Q.value=.7;
  musicGain=audioContext.createGain();musicGain.gain.value=1;
  musicSource=audioContext.createMediaElementSource(bgm);musicSource.connect(musicFilter);musicFilter.connect(musicGain);musicGain.connect(audioContext.destination);
 }catch{musicFilter=null;musicGain=null}
}
function shapeMusic(stage){
 if(!audioContext||!musicFilter||!musicGain)return;
 clearTimeout(musicRestoreTimer);const t=audioContext.currentTime;
 const hold=param=>{if(param.cancelAndHoldAtTime)param.cancelAndHoldAtTime(t);else{const value=param.value;param.cancelScheduledValues(t);param.setValueAtTime(value,t)}};
 hold(musicFilter.frequency);hold(musicGain.gain);
 if(stage==='muffle'){musicFilter.frequency.exponentialRampToValueAtTime(850,t+.22);musicGain.gain.linearRampToValueAtTime(.82,t+.22)}
 if(stage==='fade'){musicFilter.frequency.exponentialRampToValueAtTime(500,t+.48);musicGain.gain.linearRampToValueAtTime(0,t+.52)}
 if(stage==='restore'){musicFilter.frequency.exponentialRampToValueAtTime(20000,t+.28);musicGain.gain.linearRampToValueAtTime(1,t+.28)}
}
function playSfx(kind){
 if(muted||!audioUnlocked||!audioContext||audioContext.state!=='running')return;
 const t=audioContext.currentTime;
 try{
  if(kind==='slide'||kind==='exit'){
   const duration=kind==='exit'?.36:.27,buffer=audioContext.createBuffer(1,Math.ceil(audioContext.sampleRate*duration),audioContext.sampleRate),data=buffer.getChannelData(0);
   for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
   const source=audioContext.createBufferSource(),filter=audioContext.createBiquadFilter(),gain=audioContext.createGain();source.buffer=buffer;filter.type='bandpass';filter.Q.value=.8;
   filter.frequency.setValueAtTime(kind==='exit'?1600:450,t);filter.frequency.exponentialRampToValueAtTime(kind==='exit'?250:2400,t+duration);
   gain.gain.setValueAtTime(.001,t);gain.gain.exponentialRampToValueAtTime(.11,t+.035);gain.gain.exponentialRampToValueAtTime(.001,t+duration);
   source.connect(filter);filter.connect(gain);gain.connect(sfxBus);source.start(t);source.stop(t+duration);
   source.onended=()=>{source.disconnect();filter.disconnect();gain.disconnect()};return;
  }
  const click=kind==='click',duration=click?.11:.055,osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.type='sine';osc.frequency.setValueAtTime(click?740:1100,t);osc.frequency.exponentialRampToValueAtTime(click?380:1450,t+duration);
  gain.gain.setValueAtTime(.001,t);gain.gain.exponentialRampToValueAtTime(click?.13:.07,t+.008);gain.gain.exponentialRampToValueAtTime(.001,t+duration);
  osc.connect(gain);gain.connect(sfxBus);osc.start(t);osc.stop(t+duration);osc.onended=()=>{osc.disconnect();gain.disconnect()};
 }catch{}
}
document.addEventListener('pointerdown',e=>{if(!document.body.classList.contains('booting')&&!e.target.closest('#soundToggle'))unlockAudio()},{capture:true});
document.addEventListener('keydown',e=>{if(!document.body.classList.contains('booting')&&(e.key==='Enter'||e.key===' ')&&!e.target.closest('#soundToggle'))unlockAudio()},{capture:true});
document.addEventListener('click',e=>{if(e.target.closest('button,a')&&!e.target.closest('#soundToggle'))playSfx('click')},{capture:true});
function hoverSound(e){
 if(e.pointerType==='touch')return;
 const button=e.target.closest('button,a');if(!button||button.contains(e.relatedTarget))return;
 const now=performance.now();if(now-lastHoverSound<65)return;lastHoverSound=now;playSfx('hover');
}
document.addEventListener('pointerover',hoverSound);
document.addEventListener('focusin',e=>{if(e.target.matches('button,a'))playSfx('hover')});
$('soundToggle').addEventListener('click',()=>{if(!audioUnlocked&&!muted){unlockAudio();return}muted=!muted;try{localStorage.setItem('vaqzol-audio-muted',String(muted))}catch{}if(!muted)unlockAudio();else updateSoundControl()});
$('musicVolume').addEventListener('input',e=>{musicVolume=Math.max(0,Math.min(1,Number(e.target.value)/100));updateMusicVolume();try{localStorage.setItem('vaqzol-music-volume',String(musicVolume))}catch{}unlockAudio()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.activeElement===$('musicVolume'))$('musicVolume').blur()});
bgm.addEventListener('error',()=>{if(!document.body.classList.contains('booting'))notify('Music could not load. UI sounds are still available.')});
document.addEventListener('visibilitychange',()=>{if(document.hidden){bgm.pause();if(audioContext?.state==='running')audioContext.suspend().catch(()=>{})}else if(audioUnlocked){if(audioContext?.state==='suspended')audioContext.resume().catch(()=>{});startMusic()}});
window.addEventListener('pagehide',()=>bgm.pause());
window.addEventListener('pageshow',()=>{if(audioUnlocked)startMusic()});
updateSoundControl();

render();
// Entrance loading is separate from the outbound link curtain.
let bootReady=false,bootEntering=false,bootDismiss=null,bootAudioURL=null;
const bootParts={page:false,fonts:false,music:false},bootWarnings=[];
const boot=$('bootScreen'),bootStart=$('bootStart');
const profileRegions=[...document.querySelectorAll('.topbar,.layout,.page-footer')];
profileRegions.forEach(region=>region.inert=true);
function bootProgress(part,ok=true){
 bootParts[part]=true;if(!ok)bootWarnings.push(part);
 const complete=Object.values(bootParts).filter(Boolean).length,percent=Math.round(complete/3*100);
 $('bootProgress').value=percent;$('bootPercent').textContent=String(percent).padStart(2,'0')+'%';
 const item=$('bootAsset-'+part);item.dataset.state=ok?'ready':'unavailable';
 item.querySelector('.boot-asset-state').textContent=ok?'READY':'UNAVAILABLE';
 if(complete===3){bootReady=true;boot.classList.add('ready');bootStart.disabled=false;
  $('bootStatus').textContent=bootWarnings.includes('music')?'CLICK TO ENTER · MUSIC UNAVAILABLE':bootWarnings.length?'CLICK ANYWHERE TO ENTER':'CLICK ANYWHERE TO ENTER';
  $('bootTrackLabel').textContent=bootWarnings.includes('music')?'SOUNDTRACK UNAVAILABLE':'SOUNDTRACK / COLOR YOUR NIGHT';
 }
}
function waitForPlayableMusic(){
 return new Promise((resolve,reject)=>{
  let timeout;
  const cleanup=()=>{clearTimeout(timeout);bgm.removeEventListener('canplaythrough',ready);bgm.removeEventListener('error',failed)};
  const ready=()=>{cleanup();resolve()};const failed=()=>{cleanup();reject(Error('Music unavailable'))};
  bgm.addEventListener('canplaythrough',ready);bgm.addEventListener('error',failed);
  timeout=setTimeout(failed,15000);
  bgm.preload='auto';bgm.load();if(bgm.readyState>=4)ready();
 });
}
async function prepareBootMusic(){
 // Use an owned data URL for local-file playback, avoiding cross-origin audio processing.
 if(window.location.protocol==='file:'&&!bgm.src.startsWith('data:')){
  await new Promise((resolve,reject)=>{
   const script=document.createElement('script');script.src='audio/local-track.js';
   const timeout=setTimeout(()=>{script.remove();reject(Error('Local song unavailable'))},15000);
   script.onload=()=>{clearTimeout(timeout);if(window.VAQZOL_LOCAL_TRACK){bgm.src=window.VAQZOL_LOCAL_TRACK;delete window.VAQZOL_LOCAL_TRACK;script.remove();resolve()}else reject(Error('Local song unavailable'))};
   script.onerror=()=>{clearTimeout(timeout);script.remove();reject(Error('Local song unavailable'))};document.head.append(script);
  });
 }
 // HTTP: download the complete track before decoding. Embedded tracks already contain the bytes.
 if(/^https?:$/.test(window.location.protocol)&&!bgm.src.startsWith('data:')){
  const abort=new AbortController(),deadline=setTimeout(()=>abort.abort(),15000);
  try{const response=await fetch(bgm.src,{signal:abort.signal});if(!response.ok)throw Error('Music request failed');
   const blob=await response.blob();if(!blob.size)throw Error('Empty music file');
   bootAudioURL=URL.createObjectURL(blob);bgm.src=bootAudioURL;
  }finally{clearTimeout(deadline)}
 }
 await waitForPlayableMusic();
}
function finishBootExit(){
 if(bootDismiss){bootDismiss();bootDismiss=null}
 boot.hidden=true;profileRegions.forEach(region=>region.inert=false);
 
}
function enterProfile(){
 if(bootEntering)return;bootEntering=true;
 // A real click/key press unlocks the prepared song and starts the reveal together.
 unlockAudio();playSfx('slide');bootStart.disabled=true;
 document.body.classList.remove('booting');
 if(!prefs.motion||reducedMotion.matches){finishBootExit();return}
 document.body.classList.add('intro');setTimeout(()=>document.body.classList.remove('intro'),1700);
 let watchdog;const onEnd=e=>{if(e.target===boot&&e.animationName==='boot-exit')finishBootExit()};
 bootDismiss=()=>{boot.removeEventListener('animationend',onEnd);clearTimeout(watchdog)};
 boot.addEventListener('animationend',onEnd);boot.classList.add('entering');
 watchdog=setTimeout(finishBootExit,900);
}
bootStart.addEventListener('click',()=>{if(bootReady)enterProfile()});
document.addEventListener('keydown',e=>{if(document.body.classList.contains('booting')&&bootReady&&(e.key==='Enter'||e.key===' ')){e.preventDefault();enterProfile()}});
// Real readiness, never a simulated progress timer. Each required resource reports its own state.
Promise.resolve().then(()=>bootProgress('page'));
const fontTimeout=setTimeout(()=>bootProgress('fonts',false),12000);
(document.fonts?.ready||Promise.resolve()).then(()=>{clearTimeout(fontTimeout);if(!bootParts.fonts)bootProgress('fonts')},()=>{clearTimeout(fontTimeout);if(!bootParts.fonts)bootProgress('fonts',false)});
prepareBootMusic().then(()=>bootProgress('music'),()=>bootProgress('music',false));
reducedMotion.addEventListener('change',e=>{if(e.matches&&bootEntering)finishBootExit()});
window.addEventListener('pagehide',e=>{if(!e.persisted&&bootAudioURL)URL.revokeObjectURL(bootAudioURL)});


// Read the music bus only: UI sound effects do not animate the waveform.
(()=>{
 const region=document.querySelector('.edge-waveforms');if(!region)return;
 const canvases=Array.from(region.querySelectorAll('canvas'));
 const desktop=window.matchMedia('(min-width:900px)');
 const points=96,envelope=new Float32Array(points);
 let analyser=null,samples=null,frame=0,lastFrame=0,ink='#e83b35';
 function enabled(){return desktop.matches&&prefs.motion&&!reducedMotion.matches&&!document.hidden&&!document.body.classList.contains('leaving')}
 function audible(){return enabled()&&!bgm.paused&&!bgm.muted&&!muted&&musicVolume>0&&audioContext?.state==='running'}
 function draw(){
  for(const canvas of canvases){
   const context=canvas.getContext('2d');if(!context)continue;
   const width=canvas.clientWidth,height=canvas.clientHeight;if(!width||!height)continue;
   const ratio=Math.min(window.devicePixelRatio||1,2);
   if(canvas.width!==Math.round(width*ratio)||canvas.height!==Math.round(height*ratio)){canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio)}
   context.setTransform(ratio,0,0,ratio,0,0);context.clearRect(0,0,width,height);
   context.fillStyle=ink;
   const right=canvas.classList.contains('wave-right');
   const spacing=height/points,barHeight=Math.min(2,spacing*.26);
   for(let i=0;i<points;i++){
    const length=2+envelope[right?points-1-i:i]*(width-6);
    const x=right?width-2-length:2;
    const y=(i+.5)*spacing-barHeight/2;
    context.fillRect(x,y,length,barHeight);
   }
  }
 }
 function flat(){envelope.fill(0);draw()}
 function stop(){if(frame)cancelAnimationFrame(frame);frame=0;lastFrame=0;flat()}
 function attach(){
  if(analyser||!desktop.matches||!audioContext||!musicGain)return;
  try{analyser=audioContext.createAnalyser();analyser.fftSize=8192;analyser.minDecibels=-85;analyser.maxDecibels=-15;analyser.smoothingTimeConstant=.78;samples=new Uint8Array(analyser.frequencyBinCount);musicGain.connect(analyser)}catch{analyser=null;samples=null}
 }
 function tick(now){
  frame=0;if(!audible()||!analyser){flat();return}
  if(now-lastFrame>=1000/30){
   lastFrame=now;analyser.getByteFrequencyData(samples);
   const binHz=audioContext.sampleRate/analyser.fftSize;
   const highHz=Math.min(16000,audioContext.sampleRate/2),ratio=highHz/20;
   for(let i=0;i<points;i++){
    // Logarithmic frequency bands: treble at the top, bass at the bottom.
    const band=points-1-i;
    const low=Math.min(samples.length-1,Math.max(1,Math.floor(20*Math.pow(ratio,band/points)/binHz)));
    const high=Math.min(samples.length,Math.max(low+1,Math.ceil(20*Math.pow(ratio,(band+1)/points)/binHz)));
    let sum=0;for(let j=low;j<high;j++)sum+=samples[j]*samples[j];
    const strength=Math.sqrt(sum/(high-low))/255;
    const target=Math.pow(strength,2.2);
    envelope[i]+=(target-envelope[i])*.18;
   }
   draw();
  }
  frame=requestAnimationFrame(tick);
 }
 function sync(){
  if(!desktop.matches){stop();if(analyser){try{musicGain.disconnect(analyser)}catch{}analyser=null;samples=null}return}
  ink=getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()||'#e83b35';
  if(!audible()){stop();return}
  attach();if(analyser&&!frame){lastFrame=0;frame=requestAnimationFrame(tick)}
 }
 for(const event of ['playing','pause','ended','volumechange','error'])bgm.addEventListener(event,sync);
 for(const id of ['motionToggle','soundToggle'])$(id).addEventListener('click',sync);
 $('musicVolume').addEventListener('input',sync);
 desktop.addEventListener('change',sync);reducedMotion.addEventListener('change',sync);
 document.addEventListener('visibilitychange',sync);window.addEventListener('resize',()=>{draw();sync()});
 window.addEventListener('pagehide',stop);window.addEventListener('pageshow',sync);
 new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:['class']});
 new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['style']});
 if(audioContext)audioContext.addEventListener('statechange',sync);
 sync();
})();
