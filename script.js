(function(){
var P=document.getElementById('v-profil'),C=document.getElementById('v-cv'),tb=document.getElementById('t-beranda'),tc=document.getElementById('t-cv');
function show(v){var cv=v==='cv';C.hidden=!cv;P.hidden=cv;tc.setAttribute('aria-current',String(cv));tb.setAttribute('aria-current',String(!cv));window.scrollTo(0,0);}
function route(){var h=location.hash.slice(1);if(h==='cv'||h==='beranda')show(h);}
window.addEventListener('hashchange',route);route();
document.getElementById('pr').addEventListener('click',function(){show('cv');try{history.replaceState(null,'','#cv')}catch(e){}setTimeout(function(){window.print()},150);});
})();
