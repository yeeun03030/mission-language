/* 오프라인 지원: 앱 파일 + 세 언어의 음성 파일 전부를 기기에 저장 */
const VERSION = "v5";
const CACHE = `nepali-study-${VERSION}`;

self.window = self;
const DATA = ["data/ne.js", "data/km.js", "data/th.js", "data/vocab.js", "data/news.js"];
importScripts(...DATA);
// 음성: 과정 문장 + 단어 + 문장 만들기 문장
const AUDIO = Object.values(self.COURSES).flatMap(c => {
  const ids = c.weeks.flatMap(w => w.items.map(i => i.id));
  self.VOCAB.forEach(w => ids.push(w.id));
  self.PATTERNS.forEach(p => p.words.forEach(id => ids.push(`b_${p.id}_${id.slice(2)}`)));
  return ids.map(id => `audio/${c.code}/${id}.mp3`);
});
const CORE = ["./", "index.html", "css/style.css", "js/app.js", ...DATA, "manifest.json",
  "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(CORE);
    // 음성은 하나가 실패해도 설치가 멈추지 않게 개별 저장
    await Promise.all(AUDIO.map(u => c.add(u).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // 번역 API는 항상 실시간으로 (저장하지 않음)
  if (url.hostname.endsWith("mymemory.translated.net")) return;
  // 음성: 캐시 우선
  if (url.pathname.includes("/audio/")) {
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    })));
    return;
  }
  // 나머지(앱 파일, 글꼴): 캐시를 먼저 보여주고 뒤에서 최신으로 갱신
  e.respondWith(caches.match(req).then(cached => {
    const net = fetch(req).then(res => {
      if (res && (res.ok || res.type === "opaque")) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => cached);
    return cached || net;
  }));
});
