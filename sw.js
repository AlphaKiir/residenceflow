// SW v34
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',(e)=>{e.waitUntil((async()=>{try{const k=await caches.keys();await Promise.all(k.map(x=>caches.delete(x)));await self.registration.unregister();const c=await self.clients.matchAll({type:'window'});c.forEach(x=>x.navigate(x.url));}catch(err){}})());});
