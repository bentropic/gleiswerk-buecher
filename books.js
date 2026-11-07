fetch('books.json').then(r=>{if(!r.ok)throw new Error('Konfiguration nicht verfügbar');return r.json()}).then(books=>{
 const valid=u=>{try{const x=new URL(u);return x.protocol==='https:'&&(x.hostname==='amazon.de'||x.hostname==='www.amazon.de'||x.hostname==='amzn.to')}catch{return false}};
 const next=books.kurz?.amazonUrl;if(valid(next)){const a=document.querySelector('#short-amazon');a.href=next;a.hidden=false;document.querySelector('#coming').hidden=true;}
 if(valid(books.grundlagen?.amazonUrl))document.querySelector('#deep-amazon').href=books.grundlagen.amazonUrl;
}).catch(()=>{});
