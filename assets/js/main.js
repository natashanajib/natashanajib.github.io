(function(){
var r=document.documentElement,b=document.getElementById('tb');
function cur(){return r.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}
function lab(){b.textContent=cur()==='dark'?'Light mode':'Dark mode'}
b.onclick=function(){var n=cur()==='dark'?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}lab()};lab();
var tx=document.getElementById('tier-text'),ts=document.querySelectorAll('.tier');
ts.forEach(function(t){t.onclick=function(){ts.forEach(function(o){o.setAttribute('aria-pressed','false')});t.setAttribute('aria-pressed','true');tx.textContent=t.dataset.t}});
var c=document.getElementById('cb'),e=document.getElementById('em');
c.onclick=function(){var d=function(){c.textContent='Copied';setTimeout(function(){c.textContent='Copy email'},1800)};
try{navigator.clipboard.writeText(e.textContent.trim()).then(d,function(){c.textContent='Press Ctrl+C'})}catch(x){c.textContent='Press Ctrl+C'}};
document.getElementById('yr').textContent=new Date().getFullYear();
})();
