// KILL-SWITCH SW v10 (01/07 20h) : vide les caches, se desinscrit, recharge les clients.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',(e)=>{e.waitUntil((async()=>{try{const keys=await caches.keys();await Promise.all(keys.map((k)=>caches.delete(k)));await self.registration.unregister();const cs=await self.clients.matchAll({type:'window'});cs.forEach((c)=>c.navigate(c.url));}catch(err){}})());});
