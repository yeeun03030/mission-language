/* 단기선교 언어학습 — 네팔어·캄보디아어·태국어 반복학습 */
(() => {
  "use strict";

  // ---------- data (언어별 과정) ----------
  const COURSES = window.COURSES;
  const LANGS = Object.values(COURSES).sort((a, b) => a.order - b.order);
  const NEWS = window.NEWS || [], NEWS_CATS = window.NEWS_CATS || {};
  const VOCAB = window.VOCAB || [], VOCAB_CATS = window.VOCAB_CATS || [], PATTERNS = window.PATTERNS || [];
  let C, WEEKS, ALL, BY_ID, VOC, BUILT;
  function useLang(code) {
    C = COURSES[code] || LANGS[0];
    WEEKS = C.weeks;
    ALL = WEEKS.flatMap(w => w.items.map(it => ({ ...it, week: w.week })));
    // 단어장: 현재 언어의 단어 (문장과 같은 형식으로)
    VOC = VOCAB.map(w => ({ id: w.id, ko: w.ko, tx: w[C.code][0], pron: w[C.code][1], roman: w[C.code][2], cat: w.cat }));
    // 문장 만들기: 틀 × 단어로 만든 문장 (음성 파일도 미리 만들어 둠)
    const vById = Object.fromEntries(VOCAB.map(w => [w.id, w]));
    BUILT = PATTERNS.flatMap(p => p.words.map(id => window.composeSentence(p, vById[id], C.code)));
    BY_ID = Object.fromEntries([...ALL, ...VOC, ...BUILT].map(i => [i.id, i]));
    document.documentElement.dataset.lang = C.code;
    document.documentElement.lang = "ko";
  }
  const DAY = 86400000;
  const INTERVALS = [0, 1, 2, 4, 8, 16, 32]; // 상자(box)별 다음 복습까지 일수
  const MASTER_BOX = 3;

  // 전도 문구 페이지 구성
  const MISSION_SECTIONS = [
    { title: "🙏 축복 인사", desc: "처음 만났을 때, 헤어질 때 따뜻하게", ids: ["w09_01", "w09_02", "w09_03", "w09_11", "w09_13", "w09_15", "w12_14"] },
    { title: "🕊️ 기도 제안하기", desc: "상대가 원할 때, 짧고 따뜻하게", ids: ["w09_04", "w09_05", "w09_06", "w09_07", "w09_08", "w09_09", "w09_10"] },
    { title: "✨ 나의 간증 (순서대로)", desc: "전 → 만남 → 변화 → 지금", flow: true, ids: ["w10_01", "w10_03", "w10_04", "w10_05", "w10_06", "w10_13", "w10_10", "w10_15"] },
    { title: "✝️ 복음 이야기 (순서대로)", desc: "창조 → 사랑 → 죄 → 예수님 → 믿음 → 초대", flow: true, ids: ["w11_01", "w11_02", "w11_03", "w11_04", "w11_05", "w11_06", "w11_07", "w11_08", "w11_09", "w11_10", "w11_13", "w11_14", "w11_15", "w11_16"] },
    { title: "📖 암송 말씀", desc: "", ids: ["w12_01", "w12_02", "w12_03", "w12_04", "w12_05", "w12_06"] }
  ];

  // ---------- storage ----------
  // 기존 네팔어 사용자의 기록이 그대로 이어지도록 같은 저장 키를 씁니다.
  const KEY = "nepali-study-v1";
  const defaults = () => ({
    lang: "", langs: {}, read: {}, trHist: {}, streak: { last: "", count: 0 },
    settings: { showPron: true, showRoman: false, rate: 1, dir: "ko", repeat: 3, gap: 1.5, koFirst: true, theme: "" }
  });
  function load() {
    try {
      const d = JSON.parse(localStorage.getItem(KEY) || "{}");
      const base = defaults();
      const s = { ...base, ...d, langs: d.langs || {}, read: d.read || {}, trHist: d.trHist || {}, settings: { ...base.settings, ...(d.settings || {}) } };
      // v1(네팔어 전용) 기록 → 언어별 기록으로 옮기기
      if (d.srs || d.fav) {
        s.langs.ne = { srs: d.srs || {}, fav: d.fav || {}, departure: (d.settings && d.settings.departure) || "" };
        s.lang = s.lang || "ne";
        delete s.srs; delete s.fav; delete s.settings.departure;
      }
      return s;
    } catch (e) { return defaults(); }
  }
  let S = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* private mode */ } }
  // 현재 언어의 학습 기록 (외운 정도, 즐겨찾기, 출발일)
  const P = (code = C.code) => (S.langs[code] = S.langs[code] || { srs: {}, fav: {}, departure: "" });
  useLang(S.lang || "ne");

  // ---------- helpers ----------
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const app = $("#app");
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const dayStart = (t = Date.now()) => { const d = new Date(t); d.setHours(0, 0, 0, 0); return d.getTime(); };
  const todayStr = () => new Date().toLocaleDateString("en-CA");
  const isLong = it => it.tx.length > 60;

  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.hidden = false;
    clearTimeout(toast._t); toast._t = setTimeout(() => (t.hidden = true), 2000);
  }

  // ---------- SRS (간격 반복) ----------
  const srs = id => P().srs[id];
  const box = id => (P().srs[id] ? P().srs[id].box : 0);
  const isMastered = id => box(id) >= MASTER_BOX;
  const isDue = id => { const s = P().srs[id]; return !!s && s.due <= Date.now(); };
  const tracked = () => [...ALL, ...VOC, ...BUILT]; // 문장 + 단어 + 만든 문장
  const dueItems = () => tracked().filter(i => isDue(i.id));
  function masteryClass(id) { const b = box(id); return b >= MASTER_BOX ? "m3" : b === 2 ? "m2" : b >= 1 ? "m1" : ""; }

  function rate(id, r) {
    const s = P().srs[id] || { box: 0, due: 0, reps: 0 };
    if (r === "dont") { s.box = 1; s.due = Date.now(); }
    else if (r === "unsure") { s.box = Math.max(1, s.box); s.due = dayStart() + DAY; }
    else { s.box = Math.min(INTERVALS.length - 1, s.box + 1); s.due = dayStart() + INTERVALS[s.box] * DAY; }
    s.reps = (s.reps || 0) + 1; s.last = Date.now();
    P().srs[id] = s; bumpStreak(); save();
  }
  function bumpStreak() {
    const t = todayStr(); const st = S.streak;
    if (st.last === t) return;
    const y = new Date(Date.now() - DAY).toLocaleDateString("en-CA");
    st.count = st.last === y ? st.count + 1 : 1; st.last = t;
  }
  function streakNow() {
    const st = S.streak; const y = new Date(Date.now() - DAY).toLocaleDateString("en-CA");
    return (st.last === todayStr() || st.last === y) ? st.count : 0;
  }

  // ---------- 학습 범위(scope) ----------
  let lastWrong = [];
  function scopeItems(scope) {
    if (!scope) return ALL;
    if (/^w\d+$/.test(scope)) { const w = WEEKS.find(x => x.week === +scope.slice(1)); return w ? w.items.map(i => BY_ID[i.id]) : []; }
    if (scope === "review") return dueItems();
    if (scope === "fav") return tracked().filter(i => P().fav[i.id]);
    if (scope === "mission") return MISSION_SECTIONS.flatMap(s => s.ids).map(id => BY_ID[id]);
    if (scope === "weak") return tracked().filter(i => P().srs[i.id] && box(i.id) <= 1);
    if (scope === "vocab") return VOC;
    if (/^v-/.test(scope)) return VOC.filter(i => i.cat === scope.slice(2));
    if (/^b-/.test(scope)) return BUILT.filter(i => i.pattern === scope.slice(2));
    if (scope === "wrong") return lastWrong.map(id => BY_ID[id]);
    if (scope === "upto") { const rec = recommendedWeek() || 12; return ALL.filter(i => i.week <= rec); }
    return ALL;
  }
  function scopeLabel(scope) {
    if (/^w\d+$/.test(scope)) { const w = WEEKS.find(x => x.week === +scope.slice(1)); return w ? `${w.week}주차 · ${w.title}` : ""; }
    if (/^v-/.test(scope)) { const c = VOCAB_CATS.find(x => x.id === scope.slice(2)); return c ? `단어 · ${c.name}` : "단어"; }
    if (/^b-/.test(scope)) { const pt = PATTERNS.find(x => x.id === scope.slice(2)); return pt ? `문장 만들기 · ${pt.title}` : "문장 만들기"; }
    return { vocab: "단어 전체", review: "오늘의 복습", fav: "즐겨찾기", mission: "전도 문구", weak: "약한 문장", wrong: "틀린 문장", upto: "지금까지 배운 문장", all: "전체 문장" }[scope] || "전체 문장";
  }

  // ---------- 출발일 / 추천 주차 ----------
  function daysLeft() {
    if (!P().departure) return null;
    return Math.ceil((new Date(P().departure + "T00:00:00").getTime() - dayStart()) / DAY);
  }
  function recommendedWeek() {
    const d = daysLeft(); if (d === null) return null;
    const weeksLeft = Math.ceil(d / 7);
    return Math.min(12, Math.max(1, 12 - weeksLeft + 1));
  }

  // ---------- audio ----------
  const player = new Audio();
  player.preload = "auto";
  let playingBtn = null;
  function setPlayingBtn(btn) {
    if (playingBtn) playingBtn.classList.remove("playing");
    playingBtn = btn; if (btn) btn.classList.add("playing");
  }
  // 음성 파일을 통째로 받아 blob 주소로 재생한다.
  // (python http.server처럼 Range 요청을 지원하지 않는 서버나 서비스워커 캐시에서도 Safari/iOS가 재생할 수 있게)
  const blobUrls = {};
  async function audioUrl(path) {
    if (blobUrls[path]) return blobUrls[path];
    const r = await fetch(path);
    if (!r.ok) throw new Error("audio " + r.status);
    return (blobUrls[path] = URL.createObjectURL(await r.blob()));
  }
  // iOS: 첫 터치 때 플레이어를 한 번 재생해 두어야 이후 비동기 재생이 허용된다
  const SILENT = "data:audio/wav;base64,UklGRuwAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==";
  let unlocked = false;
  const unlock = () => {
    if (unlocked) return; unlocked = true;
    if (player.src) return;
    player.src = SILENT; const p = player.play(); if (p && p.catch) p.catch(() => {});
  };
  ["pointerdown", "touchend", "keydown"].forEach(ev => document.addEventListener(ev, unlock, { capture: true, once: true }));

  let playToken = 0;
  function play(item, rateOverride) {
    const token = ++playToken;
    return new Promise(resolve => {
      let done = false;
      const finish = () => { if (done) return; done = true; if (token === playToken) setPlayingBtn(null); resolve(); };
      const fallback = () => { if (done) return; if (token !== playToken) return finish(); speak(item.tx, rateOverride).then(finish); };
      try { speechSynthesis.cancel(); } catch (e) {}
      const start = url => {
        if (token !== playToken) return finish(); // 그사이 다른 문장을 눌렀으면 취소
        player.onended = finish;
        player.onerror = fallback;
        player.src = url;
        player.playbackRate = rateOverride || S.settings.rate;
        const p = player.play();
        if (p && p.catch) p.catch(err => { if (err && (err.name === "AbortError" || err.name === "NotAllowedError")) return finish(); fallback(); }); // NotAllowed: 브라우저가 자동 재생을 막음 → ▶를 직접 누르면 재생
      };
      const path = `audio/${C.code}/${item.id}.mp3`;
      if (blobUrls[path]) start(blobUrls[path]);
      else audioUrl(path).then(start, fallback);
    });
  }
  function stopAudio() { playToken++; player.pause(); player.onended = player.onerror = null; setPlayingBtn(null); try { speechSynthesis.cancel(); } catch (e) {} }
  function speak(text, r) {
    return new Promise(resolve => {
      try {
        const voices = speechSynthesis.getVoices();
        const v = voices.find(v => v.lang.toLowerCase().startsWith(C.ttsLang)) || (C.code === "ne" ? voices.find(v => /^hi/i.test(v.lang)) : null);
        if (!v) { toast("음성 파일을 불러올 수 없어요"); return resolve(); }
        const u = new SpeechSynthesisUtterance(text);
        u.voice = v; u.lang = v.lang; u.rate = (r || S.settings.rate) * 0.9;
        u.onend = u.onerror = () => resolve();
        speechSynthesis.speak(u);
      } catch (e) { resolve(); }
    });
  }

  // ---------- router ----------
  let session = 0; // 화면이 바뀌면 진행 중인 반복 재생 중단
  const routes = { "": home, week: weekPage, cards, listen, quiz, mission, fav, settings, news, lang: langPage, vocab: vocabPage, build: buildPage, tr: trPage };
  function route() {
    session++; stopAudio(); closeBig();
    let [name = "", arg] = location.hash.replace(/^#\/?/, "").split("/");
    if (!S.lang && name !== "lang") name = "lang"; // 처음 방문: 언어부터 고르기
    (routes[name] || home)(arg);
    $("#backBtn").hidden = name === "" || (name === "lang" && !S.lang);
    $("#langBtn").textContent = C.flag;
    const unread = newsFor(C.code).filter(n => !S.read[n.id]).length;
    $("#newsDot").hidden = !unread;
    $$(".bottomnav a").forEach(a => {
      const n = a.dataset.nav;
      a.classList.toggle("active", (n === "home" && name === "") || (n === "review" && name === "cards" && arg === "review") || n === name);
    });
    window.scrollTo(0, 0);
  }
  function setTitle(t) { $("#pageTitle").textContent = t; document.title = t === C.appName ? t : `${t} · ${C.appName}`; }
  $("#backBtn").addEventListener("click", () => (history.length > 1 ? history.back() : (location.hash = "#/")));
  window.addEventListener("hashchange", route);

  // ---------- 공통: 문장 행 ----------
  function sentRow(it, opts = {}) {
    return `<div class="sent card" data-id="${it.id}">
      <button class="play-btn" data-play="${it.id}" aria-label="듣기">▶</button>
      <div class="txt">
        ${opts.step ? `<div class="flow-step">STEP ${opts.step}</div>` : ""}
        <div class="ko"><i class="mastery ${masteryClass(it.id)}"></i>${esc(it.ko)}</div>
        <div class="ne" lang="${C.code}">${esc(it.tx)}</div>
        <div class="pron">${esc(it.pron)}</div>
        <div class="roman">${esc(it.roman)}</div>
        ${it.note ? `<div class="note">💡 ${esc(it.note)}</div>` : ""}
      </div>
      <div class="side">
        <button class="star-btn ${P().fav[it.id] ? "on" : ""}" data-fav="${it.id}" aria-label="즐겨찾기">${P().fav[it.id] ? "★" : "☆"}</button>
        ${opts.big ? `<button class="big-btn" data-big="${it.id}" aria-label="크게 보기">⤢</button>` : ""}
      </div>
    </div>`;
  }
  function listClasses() { return `${S.settings.showPron ? "" : "hide-pron"} ${S.settings.showRoman ? "" : "hide-roman"}`; }

  // 전역 클릭 처리 (재생/즐겨찾기/크게보기/가리기 해제)
  app.addEventListener("click", e => {
    const p = e.target.closest("[data-play]");
    if (p) { stopAudio(); setPlayingBtn(p); play(BY_ID[p.dataset.play]); return; }
    const f = e.target.closest("[data-fav]");
    if (f) {
      const id = f.dataset.fav; P().fav[id] = !P().fav[id]; if (!P().fav[id]) delete P().fav[id]; save();
      f.classList.toggle("on", !!P().fav[id]); f.textContent = P().fav[id] ? "★" : "☆";
      toast(P().fav[id] ? "즐겨찾기에 추가했어요" : "즐겨찾기에서 뺐어요"); return;
    }
    const b = e.target.closest("[data-big]");
    if (b) { openBig(BY_ID[b.dataset.big]); return; }
    const s = e.target.closest(".list.hide-ko .sent, .list.hide-ne .sent");
    if (s) s.classList.toggle("revealed");
  });

  // ---------- 홈 ----------
  function home() {
    setTitle(C.appName);
    const d = daysLeft(), rec = recommendedWeek();
    const mastered = ALL.filter(i => isMastered(i.id)).length;
    const due = dueItems().length;
    const ddayHtml = d === null
      ? `<a class="pill" href="#/settings">출발일을 설정하면 주차별 진도를 추천해 드려요 →</a>`
      : d > 0 ? `<b>D-${d}</b><span class="pill">이번 주 추천: ${rec}주차</span>`
      : d === 0 ? `<b>D-DAY 🙏</b><span class="pill">오늘 출발! 주님이 함께하십니다</span>`
      : `<b>사역 중 ${C.flag}</b><span class="pill">전도 문구를 자주 꺼내 보세요</span>`;
    const latest = newsFor(C.code).slice(0, 2);

    app.innerHTML = `
      <div class="lang-switch chips">
        ${LANGS.map(l => `<button class="chip ${l.code === C.code ? "on" : ""}" data-lang="${l.code}">${l.flag} ${l.name}</button>`).join("")}
      </div>
      <section class="hero">
        <div class="ne" lang="${C.code}">${esc(C.heroTx)}</div>
        <p>${esc(C.heroSub)}</p>
        ${C.intro ? `<p class="hero-intro">💡 ${esc(C.intro)}</p>` : ""}
        <div class="dday">${ddayHtml}</div>
      </section>

      <div class="stats">
        <div class="stat"><b>${mastered}<small class="muted" style="font-size:13px">/${ALL.length}</small></b><span>외운 문장</span></div>
        <div class="stat"><b>${due}</b><span>복습할 문장</span></div>
        <div class="stat"><b>${streakNow()}일</b><span>연속 학습</span></div>
      </div>

      <div class="card review-cta">
        <div class="txt">
          <b>${due ? `오늘 복습할 문장 ${due}개` : "오늘 복습은 모두 끝났어요 🎉"}</b>
          <small class="muted">${due ? "잊어버릴 때쯤 다시 보여 드려요" : "새 주차를 학습하면 복습 카드가 생겨요"}</small>
        </div>
        <a class="btn primary" href="${due ? "#/cards/review" : `#/week/${rec || nextWeek()}`}">${due ? "복습 시작" : "학습하기"}</a>
      </div>

      <div class="section-title">12주 학습 과정 <small>주 16문장 · 하루 15분</small></div>
      <div class="weeks">
        ${WEEKS.map(w => {
          const m = w.items.filter(i => isMastered(i.id)).length, pct = Math.round((m / w.items.length) * 100);
          const isMission = w.items.some(i => i.mission);
          return `<a class="card week-card ${rec === w.week ? "rec" : ""} ${isMission ? "mission-week" : ""}" href="#/week/${w.week}">
            ${rec === w.week ? `<span class="badge">이번 주</span>` : pct === 100 ? `<span class="badge" style="background:var(--good-soft);color:var(--good)">완료</span>` : ""}
            <div class="ico">${w.icon}</div>
            <div class="wk">${w.week}주차</div>
            <div class="ttl">${esc(w.title)}</div>
            <div class="progress"><i style="width:${pct}%"></i></div>
            <div class="cnt">${m}/${w.items.length} 외움</div>
          </a>`;
        }).join("")}
      </div>

      <div class="section-title">반복 학습 도구</div>
      <div class="tools">
        <a class="card tool" href="#/listen/upto"><span>🎧</span><div><b>듣기 반복</b><small>이동 중에 틀어 두기</small></div></a>
        <a class="card tool" href="#/quiz/upto"><span>📝</span><div><b>랜덤 퀴즈</b><small>배운 범위에서 10문제</small></div></a>
        <a class="card tool" href="#/cards/weak"><span>💪</span><div><b>약한 문장</b><small>자주 틀린 문장만</small></div></a>
        <a class="card tool" href="#/fav"><span>⭐</span><div><b>즐겨찾기</b><small>꼭 외울 문장 모음</small></div></a>
        <a class="card tool" href="#/build"><span>🧩</span><div><b>문장 만들기</b><small>단어를 넣어 내 문장으로</small></div></a>
        <a class="card tool" href="#/tr"><span>🌐</span><div><b>번역기</b><small>하고 싶은 말 직접 쓰기</small></div></a>
      </div>

      <div class="section-title">${C.country} 현지 소식 <a class="more" href="#/news">전체 보기 ›</a></div>
      <div class="news-list">${latest.map(newsCard).join("")}</div>
    `;
    // app 안의 버튼만 (<html data-lang>까지 잡으면 화면 어디를 눌러도 언어 전환이 실행됨)
    $$("[data-lang]", app).forEach(b => b.onclick = () => switchLang(b.dataset.lang));
  }
  function switchLang(code) {
    if (!COURSES[code]) return;
    S.lang = code; save(); useLang(code); hideMode = "";
    newsFilter.c = ""; // 소식 탭도 새 언어의 나라로
    if (location.hash === "#/" || location.hash === "") route(); else location.hash = "#/";
    toast(`${C.flag} ${C.name} 학습으로 바꿨어요`);
  }

  // ---------- 언어 선택 ----------
  function langPage() {
    setTitle("언어 선택");
    app.innerHTML = `
      <section class="hero"><div style="font-size:22px;font-weight:700">어느 나라로 가시나요?</div>
        <p>배울 언어를 골라 주세요. 언어마다 학습 기록이 따로 저장되고, 언제든 위의 국기를 눌러 바꿀 수 있어요.</p></section>
      <div class="lang-list">
        ${LANGS.map(l => {
          const p = P(l.code), all = l.weeks.flatMap(w => w.items);
          const m = all.filter(i => p.srs[i.id] && p.srs[i.id].box >= MASTER_BOX).length;
          return `<button class="card lang-card ${S.lang === l.code ? "on" : ""}" data-lang="${l.code}">
            <span class="flag">${l.flag}</span>
            <span class="txt"><b>${l.name}</b><span class="ne" lang="${l.code}">${esc(l.heroTx.split("!")[0])}</span>
              <small class="muted">${l.country} · ${all.length}문장 · 외운 문장 ${m}개</small></span>
            <span class="go">›</span></button>`;
        }).join("")}
      </div>`;
    // app 안의 버튼만 (<html data-lang>까지 잡으면 화면 어디를 눌러도 언어 전환이 실행됨)
    $$("[data-lang]", app).forEach(b => b.onclick = () => switchLang(b.dataset.lang));
  }

  // ---------- 현지 소식 ----------
  const newsFor = code => NEWS.filter(n => n.c.includes(code) || n.c.includes("all")).sort((a, b) => (b.date > a.date ? 1 : b.date < a.date ? -1 : (b.cat === "now") - (a.cat === "now")));
  const fmtDate = d => d.replace(/^(\d{4})-(\d{2})-(\d{2})$/, (_, y, m, dd) => `${y}.${+m}.${+dd}`);
  function newsCard(n) {
    const cat = NEWS_CATS[n.cat] || { label: "", icon: "" };
    const flags = n.c.includes("all") ? "🌏 공통" : n.c.map(c => COURSES[c] ? COURSES[c].flag : "").join(" ");
    return `<a class="card news-card ${S.read[n.id] ? "read" : ""}" href="#/news/${n.id}">
      <div class="meta"><span class="badge cat-${n.cat}">${cat.icon} ${cat.label}</span><span>${flags}</span><span>${fmtDate(n.date)}</span>${S.read[n.id] ? "" : `<i class="new">NEW</i>`}</div>
      <b>${esc(n.title)}</b>
      <p>${esc(n.lead)}</p>
    </a>`;
  }
  let newsFilter = { c: "", cat: "" };
  function news(id) {
    if (id) return newsArticle(id);
    setTitle("현지 소식");
    if (!newsFilter.c) newsFilter.c = C.code;
    const render = () => {
      const list = NEWS
        .filter(n => newsFilter.c === "all" || n.c.includes(newsFilter.c) || n.c.includes("all"))
        .filter(n => !newsFilter.cat || n.cat === newsFilter.cat)
        .sort((a, b) => (b.date > a.date ? 1 : b.date < a.date ? -1 : (b.cat === "now") - (a.cat === "now")));
      app.innerHTML = `
        <div class="chips news-filter">
          <button class="chip ${newsFilter.c === "all" ? "on" : ""}" data-nc="all">전체</button>
          ${LANGS.map(l => `<button class="chip ${newsFilter.c === l.code ? "on" : ""}" data-nc="${l.code}">${l.flag} ${l.country}</button>`).join("")}
        </div>
        <div class="chips news-filter">
          <button class="chip ${!newsFilter.cat ? "on" : ""}" data-ncat="">모든 주제</button>
          ${Object.entries(NEWS_CATS).map(([k, v]) => `<button class="chip ${newsFilter.cat === k ? "on" : ""}" data-ncat="${k}">${v.icon} ${v.label}</button>`).join("")}
        </div>
        <p class="muted news-note">📌 ‘최신 정세’는 작성일 기준이에요. 출발 전 <a href="https://www.0404.go.kr" target="_blank" rel="noopener">외교부 해외안전여행</a>에서 꼭 다시 확인하세요.</p>
        <div class="news-list">${list.length ? list.map(newsCard).join("") : `<div class="empty"><p>해당하는 글이 없어요.</p></div>`}</div>`;
      $$("[data-nc]").forEach(b => b.onclick = () => { newsFilter.c = b.dataset.nc; render(); });
      $$("[data-ncat]").forEach(b => b.onclick = () => { newsFilter.cat = b.dataset.ncat; render(); });
    };
    render();
  }
  function newsArticle(id) {
    const n = NEWS.find(x => x.id === id); if (!n) { location.hash = "#/news"; return; }
    if (!S.read[id]) { S.read[id] = 1; save(); $("#newsDot").hidden = !newsFor(C.code).some(x => !S.read[x.id]); }
    const cat = NEWS_CATS[n.cat] || { label: "", icon: "" };
    setTitle(cat.label || "현지 소식");
    const flags = n.c.includes("all") ? "🌏 공통" : n.c.map(c => COURSES[c] ? `${COURSES[c].flag} ${COURSES[c].country}` : "").join(" · ");
    // 본문은 앱에 포함된 신뢰할 수 있는 데이터라 <b> 같은 간단한 태그를 그대로 씁니다.
    const block = b => typeof b === "string" ? `<p>${b}</p>`
      : b.h ? `<h3>${b.h}</h3>`
      : b.ul ? `<ul>${b.ul.map(x => `<li>${x}</li>`).join("")}</ul>`
      : b.tip ? `<div class="tip">💡 ${b.tip}</div>` : "";
    const others = newsFor(C.code).filter(x => x.id !== id).slice(0, 3);
    app.innerHTML = `
      <article class="card article">
        <div class="meta"><span class="badge cat-${n.cat}">${cat.icon} ${cat.label}</span><span>${flags}</span><span>${fmtDate(n.date)} 기준</span></div>
        <h2>${esc(n.title)}</h2>
        <p class="lead">${esc(n.lead)}</p>
        ${n.body.map(block).join("")}
        ${n.src && n.src.length ? `<div class="src"><b>출처</b>${n.src.map(s => `<a href="${esc(s.u)}" target="_blank" rel="noopener">${esc(s.t)}</a>`).join("")}</div>` : ""}
      </article>
      ${others.length ? `<div class="section-title">다른 소식</div><div class="news-list">${others.map(newsCard).join("")}</div>` : ""}`;
  }
  function nextWeek() { const w = WEEKS.find(w => w.items.some(i => !isMastered(i.id))); return w ? w.week : 1; }

  // ---------- 주차 페이지 ----------
  let hideMode = ""; // "", "ko", "ne"
  function weekPage(n) {
    const w = WEEKS.find(x => x.week === +n); if (!w) return home();
    setTitle(`${w.week}주차 · ${w.title}`);
    const m = w.items.filter(i => isMastered(i.id)).length;
    const render = () => {
      app.innerHTML = `
        <section class="card week-head">
          <p class="goal">${w.icon} ${esc(w.goal)}</p>
          <div class="progress"><i style="width:${(m / w.items.length) * 100}%"></i></div>
          <small class="muted">${m}/${w.items.length} 외움 · ● 색이 진할수록 잘 외운 문장</small>
          <div class="actions">
            <a class="btn primary" href="#/cards/w${w.week}"><span>🃏</span>카드 학습</a>
            <a class="btn accent" href="#/listen/w${w.week}"><span>🎧</span>듣기 반복</a>
            <a class="btn" href="#/quiz/w${w.week}"><span>📝</span>퀴즈</a>
          </div>
        </section>
        <div class="toggles chips">
          <button class="chip ${hideMode === "" ? "on" : ""}" data-hide="">모두 보기</button>
          <button class="chip ${hideMode === "ko" ? "on" : ""}" data-hide="ko">한국어 가리기</button>
          <button class="chip ${hideMode === "ne" ? "on" : ""}" data-hide="ne">${C.name} 가리기</button>
          <button class="chip ${S.settings.showPron ? "on" : ""}" data-toggle="showPron">한글 발음</button>
          <button class="chip ${S.settings.showRoman ? "on" : ""}" data-toggle="showRoman">로마자</button>
        </div>
        <div class="list ${hideMode ? "hide-" + hideMode : ""} ${listClasses()}">
          ${w.items.map(i => sentRow(BY_ID[i.id], { big: i.mission })).join("")}
        </div>
        <div class="row" style="margin-top:16px">
          ${w.week > 1 ? `<a class="btn ghost" href="#/week/${w.week - 1}">‹ ${w.week - 1}주차</a>` : "<span></span>"}
          ${w.week < 12 ? `<a class="btn ghost" href="#/week/${w.week + 1}">${w.week + 1}주차 ›</a>` : "<span></span>"}
        </div>`;
      $$("[data-hide]").forEach(b => b.onclick = () => { hideMode = b.dataset.hide; render(); });
      $$("[data-toggle]").forEach(b => b.onclick = () => { const k = b.dataset.toggle; S.settings[k] = !S.settings[k]; save(); render(); });
    };
    render();
  }

  // ---------- 카드 학습 ----------
  function cards(scope = "all") {
    setTitle(`카드 학습 · ${scopeLabel(scope)}`);
    let items = scopeItems(scope);
    if (!items.length) return emptyState(scope);
    // 아직 못 외운 문장 먼저, 복습/약한 문장은 섞어서
    items = /^w\d+$/.test(scope)
      ? [...items.filter(i => !isMastered(i.id)), ...items.filter(i => isMastered(i.id))]
      : shuffle(items);
    const queue = items.map(i => i.id);
    const total = queue.length;
    const stats = { know: 0, unsure: 0, dont: 0 };
    const doneSet = new Set();
    let flipped = false;
    const my = session;

    const render = () => {
      if (!queue.length) return summary();
      const it = BY_ID[queue[0]], dir = S.settings.dir;
      const front = dir === "ko"
        ? `<div class="hint">${C.name}로 어떻게 말할까요?</div><div class="front-ko">${esc(it.ko)}</div>`
        : `<div class="hint">🔊 듣고 뜻을 떠올려 보세요</div><div class="front-ne" lang="${C.code}">${esc(it.tx)}</div>`;
      const back = `
        <div class="ko">${esc(it.ko)}</div><hr>
        <div class="ne" lang="${C.code}">${esc(it.tx)}</div>
        ${S.settings.showPron ? `<div class="pron">${esc(it.pron)}</div>` : ""}
        ${S.settings.showRoman ? `<div class="roman">${esc(it.roman)}</div>` : ""}
        ${it.note ? `<div class="note">💡 ${esc(it.note)}</div>` : ""}`;
      app.innerHTML = `
        <div class="session-top">
          <div class="progress"><i style="width:${(doneSet.size / total) * 100}%"></i></div>
          <div class="count">${doneSet.size}/${total}</div>
        </div>
        <div class="card flash ${isLong(it) ? "long" : ""}" id="flash">${flipped ? back : front}
          ${flipped ? "" : `<div class="hint" style="margin-top:14px">탭해서 정답 보기</div>`}
        </div>
        ${flipped ? `
          <div class="rate-row">
            <button class="btn dont" data-rate="dont">모름<small>곧 다시</small></button>
            <button class="btn unsure" data-rate="unsure">애매<small>내일</small></button>
            <button class="btn know" data-rate="know">앎<small>${INTERVALS[Math.min(6, box(it.id) + 1)]}일 뒤</small></button>
          </div>` : `<button class="btn primary block" style="margin-top:12px" id="flipBtn">정답 보기</button>`}
        <div class="card-tools">
          <button class="chip" id="replay">🔊 다시 듣기</button>
          <button class="chip" id="dirBtn">${dir === "ko" ? `한→${C.name[0]}` : `${C.name[0]}→한`} 방향 바꾸기</button>
          <button class="chip star-btn ${P().fav[it.id] ? "on" : ""}" data-fav="${it.id}" style="width:auto;height:auto;font-size:13px">${P().fav[it.id] ? "★" : "☆"}</button>
        </div>`;
      const flip = () => { if (!flipped) { flipped = true; render(); play(it); } };
      $("#flash").onclick = flip;
      if ($("#flipBtn")) $("#flipBtn").onclick = flip;
      $("#replay").onclick = () => play(it);
      $("#dirBtn").onclick = () => { S.settings.dir = dir === "ko" ? "ne" : "ko"; save(); flipped = false; render(); if (S.settings.dir === "ne") play(it); };
      $$("[data-rate]").forEach(b => b.onclick = () => doRate(b.dataset.rate));
      if (!flipped && dir === "ne") play(it);
    };
    const doRate = r => {
      const id = queue.shift();
      rate(id, r); stats[r]++;
      if (r === "dont") queue.splice(Math.min(3, queue.length), 0, id); // 3장 뒤에 다시
      else doneSet.add(id);
      flipped = false; stopAudio(); render();
    };
    const summary = () => {
      const ok = stats.know >= stats.dont;
      app.innerHTML = `<div class="card summary">
        <div class="big">${ok ? "🎉" : "💪"}</div>
        <h2 style="margin:6px 0">${total}문장 학습 완료!</h2>
        <p class="muted">${ok ? `${C.praise} (${C.praisePron}! 잘했어요!)` : "반복이 실력이 됩니다. 내일 다시 만나요!"}</p>
        <div class="nums">
          <div><b style="color:var(--good)">${stats.know}</b><small>앎</small></div>
          <div><b style="color:var(--warn)">${stats.unsure}</b><small>애매</small></div>
          <div><b style="color:var(--bad)">${stats.dont}</b><small>모름</small></div>
        </div>
        <div class="row"><a class="btn ghost" href="#/">홈으로</a><button class="btn primary" id="again">한 번 더</button></div>
      </div>`;
      $("#again").onclick = () => route();
    };
    document.onkeydown = e => {
      if (my !== session || !location.hash.startsWith("#/cards")) return;
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); if (!flipped) $("#flash")?.click(); }
      if (flipped && ["1", "2", "3"].includes(e.key)) doRate(["dont", "unsure", "know"][+e.key - 1]);
    };
    render();
  }

  function emptyState(scope) {
    const msg = {
      review: ["🎉", "오늘 복습할 문장이 없어요!", "새 주차를 카드로 학습하면, 잊어버릴 때쯤 여기서 다시 보여 드려요."],
      fav: ["⭐", "즐겨찾기한 문장이 없어요", "문장 옆의 ☆ 를 눌러 꼭 외울 문장을 모아 보세요."],
      weak: ["💪", "약한 문장이 없어요", "카드 학습에서 '모름'을 누른 문장이 여기에 모여요."]
    }[scope] || ["📭", "문장이 없어요", ""];
    app.innerHTML = `<div class="empty"><div class="big">${msg[0]}</div><h3>${msg[1]}</h3><p>${msg[2]}</p>
      <a class="btn primary" href="#/week/${recommendedWeek() || nextWeek()}">학습하러 가기</a></div>`;
  }

  // ---------- 듣기 반복 ----------
  function listen(scope = "all") {
    setTitle(`듣기 반복 · ${scopeLabel(scope)}`);
    let items = scopeItems(scope);
    if (!items.length) return emptyState(scope);
    const L = { i: 0, r: 0, playing: false, loop: true, shuffled: false, order: items };
    let token = 0;
    const my = session;

    const render = () => {
      const it = L.order[L.i];
      app.innerHTML = `
        <div class="card now ${isLong(it) ? "long" : ""}" id="now"></div>
        <div class="player">
          <button class="icon-btn" id="prev" aria-label="이전">⏮</button>
          <button class="icon-btn main" id="toggle" aria-label="재생">${L.playing ? "⏸" : "▶"}</button>
          <button class="icon-btn" id="next" aria-label="다음">⏭</button>
        </div>
        <div class="card">
          <div class="opt-group"><label>한 문장 반복 횟수</label>
            <div class="chips">${[1, 2, 3, 5].map(n => `<button class="chip ${S.settings.repeat === n ? "on" : ""}" data-rep="${n}">${n}회</button>`).join("")}</div></div>
          <div class="opt-group"><label>속도</label>
            <div class="chips">${[0.7, 0.85, 1, 1.2].map(n => `<button class="chip ${S.settings.rate === n ? "on" : ""}" data-rate="${n}">${n}x</button>`).join("")}</div></div>
          <div class="opt-group"><label>문장 사이 쉬는 시간 (따라 말하기)</label>
            <div class="chips">${[1, 2.5, 4].map(n => `<button class="chip ${S.settings.gap === n ? "on" : ""}" data-gap="${n}">${n}초</button>`).join("")}</div></div>
          <div class="opt-group"><label>옵션</label>
            <div class="chips">
              <button class="chip ${L.loop ? "on" : ""}" id="loopBtn">🔁 전체 반복</button>
              <button class="chip ${L.shuffled ? "on" : ""}" id="shufBtn">🔀 섞기</button>
              <button class="chip ${S.settings.koFirst ? "on" : ""}" id="koBtn">한국어 보이기</button>
            </div></div>
        </div>
        <div class="queue">${L.order.map((x, k) => `<button data-q="${k}" class="${k === L.i ? "cur" : ""}"><span class="n">${k + 1}</span>${esc(x.ko)}</button>`).join("")}</div>`;
      renderNow();
      $("#toggle").onclick = () => (L.playing ? pause() : start());
      $("#prev").onclick = () => jump(L.i - 1);
      $("#next").onclick = () => jump(L.i + 1);
      $$("[data-rep]").forEach(b => b.onclick = () => { S.settings.repeat = +b.dataset.rep; save(); render(); });
      $$("[data-rate]").forEach(b => b.onclick = () => { S.settings.rate = +b.dataset.rate; player.playbackRate = S.settings.rate; save(); render(); });
      $$("[data-gap]").forEach(b => b.onclick = () => { S.settings.gap = +b.dataset.gap; save(); render(); });
      $("#loopBtn").onclick = () => { L.loop = !L.loop; render(); };
      $("#shufBtn").onclick = () => { L.shuffled = !L.shuffled; const cur = L.order[L.i]; L.order = L.shuffled ? shuffle(items) : items; L.i = Math.max(0, L.order.indexOf(cur)); render(); };
      $("#koBtn").onclick = () => { S.settings.koFirst = !S.settings.koFirst; save(); render(); };
      $$("[data-q]").forEach(b => b.onclick = () => jump(+b.dataset.q));
    };
    const renderNow = () => {
      const it = L.order[L.i], el = $("#now"); if (!el) return;
      el.className = `card now ${isLong(it) ? "long" : ""}`;
      el.innerHTML = `
        <div class="rep">${L.i + 1} / ${L.order.length}${L.playing ? ` · ${L.r + 1}/${S.settings.repeat}회` : ""}</div>
        ${S.settings.koFirst ? `<div class="ko">${esc(it.ko)}</div>` : ""}
        <div class="ne" lang="${C.code}">${esc(it.tx)}</div>
        ${S.settings.showPron ? `<div class="pron">${esc(it.pron)}</div>` : ""}`;
      $$("[data-q]").forEach(b => b.classList.toggle("cur", +b.dataset.q === L.i));
      const cur = $(`[data-q="${L.i}"]`); if (cur && L.playing) cur.scrollIntoView({ block: "nearest", behavior: "smooth" });
      if ("mediaSession" in navigator) {
        try { navigator.mediaSession.metadata = new MediaMetadata({ title: it.ko, artist: it.tx, album: C.appName }); } catch (e) {}
      }
    };
    const alive = t => t === token && my === session && L.playing;
    const run = async t => {
      while (alive(t)) {
        const it = L.order[L.i];
        for (L.r = 0; L.r < S.settings.repeat; L.r++) {
          renderNow();
          await play(it); if (!alive(t)) return;
          await sleep(S.settings.gap * 1000); if (!alive(t)) return;
        }
        if (L.i + 1 >= L.order.length) {
          if (!L.loop) { L.playing = false; L.r = 0; render(); return; }
          L.i = 0;
        } else L.i++;
      }
    };
    const start = () => { L.playing = true; token++; render(); run(token); };
    const pause = () => { L.playing = false; token++; stopAudio(); render(); };
    const jump = k => { L.i = (k + L.order.length) % L.order.length; L.r = 0; if (L.playing) { token++; stopAudio(); render(); run(token); } else render(); };
    if ("mediaSession" in navigator) {
      try {
        navigator.mediaSession.setActionHandler("play", () => my === session && start());
        navigator.mediaSession.setActionHandler("pause", () => my === session && pause());
        navigator.mediaSession.setActionHandler("nexttrack", () => my === session && jump(L.i + 1));
        navigator.mediaSession.setActionHandler("previoustrack", () => my === session && jump(L.i - 1));
      } catch (e) {}
    }
    render();
  }

  // ---------- 퀴즈 ----------
  function quiz(scope = "all") {
    setTitle(`퀴즈 · ${scopeLabel(scope)}`);
    const pool = scopeItems(scope);
    if (!pool.length) return emptyState(scope);
    const qs = shuffle(pool).slice(0, 10).map(it => ({ it, type: Math.random() < 0.5 ? "ko2ne" : "listen" }));
    let qi = 0, score = 0;
    const wrong = [];

    const optionsFor = it => {
      const pool = it.cat ? VOC : it.pattern ? BUILT : ALL;
      const same = x => (it.cat ? x.cat === it.cat : it.pattern ? x.pattern === it.pattern : x.week === it.week);
      const sameWeek = pool.filter(x => same(x) && x.id !== it.id);
      const others = pool.filter(x => x.id !== it.id && !same(x));
      const picks = [];
      for (const x of [...shuffle(sameWeek), ...shuffle(others)]) {
        if (picks.length >= 3) break;
        if (!picks.some(p => p.tx === x.tx || p.ko === x.ko) && x.tx !== it.tx && x.ko !== it.ko) picks.push(x);
      }
      return shuffle([it, ...picks]);
    };

    const render = () => {
      if (qi >= qs.length) return result();
      const { it, type } = qs[qi];
      const opts = optionsFor(it);
      app.innerHTML = `
        <div class="session-top">
          <div class="progress"><i style="width:${(qi / qs.length) * 100}%"></i></div>
          <div class="count">${qi + 1}/${qs.length}</div>
        </div>
        <div class="card q-prompt">
          ${type === "ko2ne"
            ? `<div class="q-type">알맞은 ${C.name}를 고르세요</div><div class="q-main">${esc(it.ko)}</div>`
            : `<div class="q-type">듣고 알맞은 뜻을 고르세요</div>
               <button class="play-btn" style="width:72px;height:72px;font-size:28px;margin:12px auto 0" id="qplay">🔊</button>`}
        </div>
        <div class="options">
          ${opts.map(o => `<button class="option ${type === "ko2ne" ? "ne" : ""}" data-opt="${o.id}" ${type === "ko2ne" ? `lang="${C.code}"` : ""}>
            ${esc(type === "ko2ne" ? o.tx : o.ko)}</button>`).join("")}
        </div>
        <div id="fb"></div>`;
      if (type === "listen") { $("#qplay").onclick = () => play(it); play(it); }
      $$("[data-opt]").forEach(b => b.onclick = () => answer(b, it));
    };
    const answer = (btn, it) => {
      const ok = btn.dataset.opt === it.id;
      $$("[data-opt]").forEach(b => { b.disabled = true; if (b.dataset.opt === it.id) b.classList.add("correct"); });
      if (ok) score++; else { btn.classList.add("wrong"); wrong.push(it.id); rate(it.id, "dont"); }
      $("#fb").innerHTML = `
        <div class="feedback ${ok ? "ok" : "no"}">
          <b>${ok ? "정답! ${C.praise}" : "아쉬워요!"}</b><br>
          ${esc(it.ko)} — <span lang="${C.code}">${esc(it.tx)}</span><br><small>${esc(it.pron)}</small>
        </div>
        <button class="btn primary block" style="margin-top:12px" id="nextQ">${qi + 1 < qs.length ? "다음 문제" : "결과 보기"}</button>`;
      $("#nextQ").onclick = () => { qi++; stopAudio(); render(); };
      play(it);
    };
    const result = () => {
      lastWrong = wrong;
      app.innerHTML = `<div class="card summary">
        <div class="big">${score >= 8 ? "🏆" : score >= 5 ? "👍" : "💪"}</div>
        <h2 style="margin:6px 0">${qs.length}문제 중 ${score}개 정답</h2>
        <p class="muted">${score >= 8 ? "훌륭해요! 현장에서 바로 쓸 수 있겠어요." : "틀린 문장은 '오늘 복습'에 자동으로 추가됐어요."}</p>
        ${wrong.length ? `<div class="list" style="text-align:left;margin:16px 0">${wrong.map(id => sentRow(BY_ID[id])).join("")}</div>` : ""}
        <div class="row" style="margin-top:12px">
          ${wrong.length ? `<a class="btn ghost" href="#/cards/wrong">틀린 문장 카드</a>` : `<a class="btn ghost" href="#/">홈으로</a>`}
          <button class="btn primary" id="again">다시 풀기</button>
        </div></div>`;
      $("#again").onclick = () => route();
    };
    render();
  }

  // ---------- 전도 문구 ----------
  function mission() {
    setTitle("전도 문구");
    app.innerHTML = `
      <details class="card guide">
        <summary>⚠️ ${C.country} 현장에서 꼭 기억할 점 (먼저 읽어 주세요)</summary>
        <ul>
          ${C.guide.map(g => `<li>${g}</li>`).join("")}
        </ul>
      </details>
      <div class="row" style="margin-top:12px">
        <a class="btn primary" href="#/cards/mission">🃏 카드 학습</a>
        <a class="btn accent" href="#/listen/mission">🎧 듣기 반복</a>
      </div>
      <p class="muted" style="font-size:13px;margin:12px 4px 0">⤢ 버튼을 누르면 ${C.name}를 화면 가득 크게 띄워 상대에게 보여 줄 수 있어요.</p>
      ${MISSION_SECTIONS.map(sec => `
        <div class="section-title">${sec.title} ${sec.desc ? `<small>${esc(sec.desc)}</small>` : ""}</div>
        <div class="list ${listClasses()}">${sec.ids.map((id, k) => sentRow(BY_ID[id], { big: true, step: sec.flow ? k + 1 : 0 })).join("")}</div>
      `).join("")}`;
  }

  // 크게 보기 (상대에게 보여주기)
  function openBig(it) {
    const el = $("#bigView");
    el.innerHTML = `
      <div class="ne" lang="${C.code}">${esc(it.tx)}</div>
      <div class="pron">${esc(it.pron)}</div>
      <div class="ko">${esc(it.ko)}</div>
      <div class="row"><button class="btn" id="bigPlay">🔊 듣기</button><button class="btn primary" id="bigClose">닫기</button></div>`;
    el.hidden = false;
    $("#bigPlay").onclick = () => play(it);
    $("#bigClose").onclick = closeBig;
    play(it);
  }
  function closeBig() { const el = $("#bigView"); if (!el.hidden) { el.hidden = true; stopAudio(); } }
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeBig(); });

  // ---------- 즐겨찾기 ----------
  function fav() {
    setTitle("즐겨찾기");
    const items = tracked().filter(i => P().fav[i.id]);
    if (!items.length) return emptyState("fav");
    app.innerHTML = `
      <div class="row">
        <a class="btn primary" href="#/cards/fav">🃏 카드 학습</a>
        <a class="btn accent" href="#/listen/fav">🎧 듣기 반복</a>
      </div>
      <div class="list ${listClasses()}" style="margin-top:12px">${items.map(i => sentRow(i, { big: true })).join("")}</div>`;
  }

  // ---------- 단어장 ----------
  let vocabQuery = "";
  function vocabPage(catId) {
    const cat = VOCAB_CATS.find(c => c.id === catId);
    const studyRow = scope => `<div class="row">
        <a class="btn primary" href="#/cards/${scope}"><span>🃏</span>카드</a>
        <a class="btn accent" href="#/listen/${scope}"><span>🎧</span>듣기</a>
        <a class="btn" href="#/quiz/${scope}"><span>📝</span>퀴즈</a>
      </div>`;
    if (cat) {
      setTitle(`단어장 · ${cat.name}`);
      const items = VOC.filter(i => i.cat === cat.id);
      const pats = PATTERNS.filter(p => p.words.some(id => items.some(i => i.id === id)));
      app.innerHTML = `
        <div class="vocab-head"><span class="ico">${cat.icon}</span><div><b>${cat.name}</b>
          <small class="muted">${items.length}단어 · 외운 단어 ${items.filter(i => isMastered(i.id)).length}개</small></div></div>
        ${studyRow("v-" + cat.id)}
        ${pats.length ? `<div class="section-title">이 단어로 문장 만들기</div>
          <div class="chips">${pats.map(p => `<a class="chip" href="#/build/${p.id}">${p.icon} ${esc(p.title)}</a>`).join("")}</div>` : ""}
        <div class="list ${listClasses()}" style="margin-top:12px">${items.map(i => sentRow(i, { big: true })).join("")}</div>`;
      return;
    }
    setTitle("단어장");
    const render = () => {
      const q = vocabQuery.trim().toLowerCase();
      const hits = q ? VOC.filter(i => [i.ko, i.tx, i.pron, i.roman].some(t => String(t).toLowerCase().includes(q))) : [];
      $("#vocabBody").innerHTML = q
        ? (hits.length
          ? `<div class="list ${listClasses()}">${hits.map(i => sentRow(i, { big: true })).join("")}</div>`
          : `<p class="muted center">‘${esc(vocabQuery)}’ 단어가 없어요. <a href="#/tr">🌐 번역기</a>에서 찾아보세요.</p>`)
        : `<div class="weeks">${VOCAB_CATS.map(c => {
            const items = VOC.filter(i => i.cat === c.id), m = items.filter(i => isMastered(i.id)).length;
            return `<a class="card week-card" href="#/vocab/${c.id}">
              <span class="ico">${c.icon}</span><span class="ttl">${c.name}</span>
              <div class="progress"><i style="width:${items.length ? (m / items.length) * 100 : 0}%"></i></div>
              <div class="cnt">${m}/${items.length} 외움</div></a>`;
          }).join("")}</div>`;
    };
    app.innerHTML = `
      <p class="muted" style="margin:0 0 10px">문장에 끼워 쓸 기본 단어 ${VOC.length}개예요. 외운 단어는 ‘오늘 복습’에도 나와요.</p>
      <input class="search" id="vocabQ" type="search" placeholder="🔍 한국어나 ${C.name}로 단어 찾기" value="${esc(vocabQuery)}">
      <div style="margin:12px 0">${studyRow("vocab")}</div>
      <div id="vocabBody"></div>`;
    $("#vocabQ").oninput = e => { vocabQuery = e.target.value; render(); };
    render();
  }

  // ---------- 문장 만들기 ----------
  const buildSel = { p: "", w: "" };
  function buildPage(pid) {
    setTitle("문장 만들기");
    if (pid && PATTERNS.some(p => p.id === pid)) { if (buildSel.p !== pid) buildSel.w = ""; buildSel.p = pid; }
    if (!buildSel.p) buildSel.p = PATTERNS[0].id;
    const blank = `<span class="blank">＿＿</span>`;
    const frame = s => esc(s).replace(/\{X(?::\w+)?\}/g, "\u0000").replace(/\{(을\/를|이\/가|은\/는|이에요\/예요)\}/g, "$1").replace(/\u0000/g, blank);
    const render = autoplay => {
      const p = PATTERNS.find(x => x.id === buildSel.p);
      const words = p.words.map(id => BY_ID[id]).filter(Boolean);
      const item = buildSel.w ? BY_ID[`b_${p.id}_${buildSel.w.slice(2)}`] : null;
      app.innerHTML = `
        <p class="muted" style="margin:0 0 10px">① 문장 틀을 고르고 ② 단어를 넣으면, ${C.name} 문장과 발음·음성이 바로 만들어져요.</p>
        <div class="chips pat-chips">${PATTERNS.map(x => `<button class="chip ${x.id === p.id ? "on" : ""}" data-pat="${x.id}">${x.icon} ${esc(x.title)}</button>`).join("")}</div>
        <div class="card frame">
          <div class="ko">${frame(p.ko)}</div>
          <div class="ne" lang="${C.code}">${frame(p[C.code][0])}</div>
          <div class="pron">${frame(p[C.code][1])}</div>
        </div>
        <div class="section-title">② 넣을 단어 <small>${words.length}개</small></div>
        <div class="word-chips">${words.map(w => `<button class="wchip ${buildSel.w === w.id ? "on" : ""}" data-w="${w.id}">
          <b>${esc(w.ko.replace(/\s*\(.*?\)/, ""))}</b><span lang="${C.code}">${esc(w.tx)}</span></button>`).join("")}</div>
        <div id="built">${item
          ? `<div class="section-title">③ 완성! <small>▶ 눌러 듣고 따라 말해 보세요</small></div>
             <div class="list ${listClasses()}">${sentRow(item, { big: true })}</div>`
          : `<p class="muted center" style="margin:16px 0">위에서 단어를 골라 보세요 👆</p>`}</div>
        <div class="row" style="margin-top:12px">
          <button class="btn ghost" id="rnd">🔀 아무 단어나</button>
          <a class="btn ghost" href="#/cards/b-${p.id}">🃏 이 틀 연습</a>
        </div>
        <a class="card tool" href="#/tr" style="margin-top:12px"><span>🌐</span><div><b>원하는 문장이 없나요?</b><small>번역기로 하고 싶은 말을 직접 써 보세요</small></div></a>`;
      $$("[data-pat]", app).forEach(b => b.onclick = () => { buildSel.p = b.dataset.pat; buildSel.w = ""; history.replaceState(null, "", `#/build/${buildSel.p}`); render(); });
      $$("[data-w]", app).forEach(b => b.onclick = () => { buildSel.w = b.dataset.w; render(true); });
      $("#rnd").onclick = () => { const w = words[Math.floor(Math.random() * words.length)]; buildSel.w = w.id; render(true); };
      if (item && autoplay) {
        $("#built").scrollIntoView({ behavior: "smooth", block: "nearest" });
        const btn = $("#built [data-play]"); stopAudio(); setPlayingBtn(btn); play(item);
      }
    };
    render(false);
  }

  // ---------- 번역기 ----------
  // MyMemory 무료 번역 API (키 필요 없음, 하루 사용량 제한 있음). 인터넷이 필요합니다.
  const trState = { dir: "to", text: "", out: "", err: "" };
  const decodeHtml = s => { const t = document.createElement("textarea"); t.innerHTML = s; return t.value; };
  async function translateText(text, from, to) {
    const ctl = new AbortController(); const timer = setTimeout(() => ctl.abort(), 15000);
    let r;
    try { r = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`, { signal: ctl.signal }); }
    catch (e) { throw new Error(e.name === "AbortError" ? "번역 서버가 응답하지 않아요. 잠시 후 다시 시도해 주세요." : "번역 서버에 연결하지 못했어요. 인터넷 연결을 확인해 주세요."); }
    finally { clearTimeout(timer); }
    if (!r.ok) throw new Error(r.status === 429 ? "오늘 무료 번역 사용량을 다 썼어요. 내일 다시 시도하거나 아래 Google 번역을 이용하세요." : `번역 서버 오류 (${r.status})`);
    const d = await r.json();
    const out = d && d.responseData && d.responseData.translatedText;
    if (!out || /MYMEMORY WARNING|QUOTA/i.test(out)) throw new Error("오늘 무료 번역 사용량을 다 썼어요. 내일 다시 시도하거나 아래 Google 번역을 이용하세요.");
    if (+d.responseStatus !== 200) throw new Error(d.responseDetails || "번역하지 못했어요");
    return decodeHtml(out).trim();
  }
  function hasLocalVoice() {
    try { return speechSynthesis.getVoices().some(v => v.lang.toLowerCase().startsWith(C.ttsLang)); } catch (e) { return false; }
  }
  function trPage() {
    setTitle("번역기");
    // 언어가 바뀌면 이전 언어의 번역 결과는 지움
    if (trState.lang !== C.code) Object.assign(trState, { lang: C.code, text: "", out: "", err: "" });
    const hist = () => (S.trHist[C.code] = S.trHist[C.code] || []);
    const EX = ["화장실이 어디에 있어요?", "물 좀 주세요", "만나서 정말 반가워요", "다음에 또 만나요", "하나님이 당신을 축복하시길 바라요"];
    const render = () => {
      const to = trState.dir === "to";
      const [from, dest] = to ? ["ko", C.code] : [C.code, "ko"];
      const gUrl = `https://translate.google.com/?sl=${from}&tl=${dest}&text=${encodeURIComponent(trState.text)}&op=translate`;
      app.innerHTML = `
        <div class="tr-dir">
          <b>${to ? "한국어" : C.name}</b>
          <button class="chip" id="swap" aria-label="방향 바꾸기">⇄</button>
          <b>${to ? C.name : "한국어"}</b>
        </div>
        <textarea id="trIn" class="tr-in" maxlength="450" rows="3" ${to ? "" : `lang="${C.code}"`}
          placeholder="${to ? "하고 싶은 말을 한국어로 써 보세요" : `${C.name}를 붙여 넣으면 뜻을 알려 드려요`}">${esc(trState.text)}</textarea>
        ${to ? `<div class="chips" style="margin:8px 0">${EX.map(e => `<button class="chip" data-ex="${esc(e)}">${esc(e)}</button>`).join("")}</div>` : ""}
        <button class="btn primary block" id="trGo" style="margin-top:8px">번역하기</button>
        <div id="trOut">${trState.err ? `<div class="feedback no" style="margin-top:12px">${esc(trState.err)}</div>`
          : trState.out ? `<div class="card tr-out">
              <div class="${to ? "ne" : "ko"}" ${to ? `lang="${C.code}"` : ""}>${esc(trState.out)}</div>
              <div class="row" style="margin-top:12px">
                <button class="btn ghost" id="copy">📋 복사</button>
                ${to && hasLocalVoice() ? `<button class="btn ghost" id="say">🔊 듣기</button>` : ""}
                <a class="btn ghost" href="${gUrl}" target="_blank" rel="noopener">발음·음성 보기 ↗</a>
              </div>
            </div>` : ""}</div>
        <div class="card tr-note">
          <b>⚠️ 기계 번역이에요</b>
          <ul>
            <li>틀릴 수 있어요. 특히 <b>신앙 표현, 성경 구절, 중요한 부탁</b>은 현지 사역자나 통역에게 꼭 확인하세요.</li>
            <li>인터넷이 있어야 해요 (현장에서 데이터가 없으면 안 돼요).</li>
            <li>이름·연락처·주소 같은 개인정보는 넣지 마세요. 번역 서버(MyMemory)로 전송돼요.</li>
            <li>한글 발음은 나오지 않아요. ‘발음·음성 보기’를 누르면 Google 번역에서 로마자와 소리를 확인할 수 있어요.</li>
          </ul>
        </div>
        ${hist().length ? `<div class="section-title">최근 번역 <button class="more linklike" id="clr">지우기</button></div>
          <div class="list">${hist().map((h, i) => `<button class="card hist" data-h="${i}">
            <span class="${h.dir === "to" ? "" : "ne"}" ${h.dir === "to" ? "" : `lang="${C.code}"`}>${esc(h.src)}</span>
            <span class="${h.dir === "to" ? "ne" : ""}" ${h.dir === "to" ? `lang="${C.code}"` : ""}>${esc(h.out)}</span></button>`).join("")}</div>` : ""}`;
      const inp = $("#trIn");
      inp.oninput = () => { trState.text = inp.value; };
      $("#swap").onclick = () => { trState.dir = to ? "from" : "to"; trState.text = trState.out || ""; trState.out = ""; trState.err = ""; render(); };
      $$("[data-ex]", app).forEach(b => b.onclick = () => { trState.text = b.dataset.ex; go(); });
      $("#trGo").onclick = go;
      if ($("#copy")) $("#copy").onclick = async () => {
        try { await navigator.clipboard.writeText(trState.out); toast("복사했어요"); }
        catch (e) { const t = document.createElement("textarea"); t.value = trState.out; document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove(); toast("복사했어요"); }
      };
      if ($("#say")) $("#say").onclick = () => speak(trState.out);
      if ($("#clr")) $("#clr").onclick = () => { S.trHist[C.code] = []; save(); render(); };
      $$("[data-h]", app).forEach(b => b.onclick = () => {
        const h = hist()[+b.dataset.h]; trState.dir = h.dir; trState.text = h.src; trState.out = h.out; trState.err = ""; render(); window.scrollTo(0, 0);
      });
      async function go() {
        const text = trState.text.trim();
        if (!text) { inp.focus(); return; }
        if (!navigator.onLine) { trState.err = "인터넷에 연결되어 있지 않아요. 번역기는 인터넷이 있어야 해요."; trState.out = ""; return render(); }
        const btn = $("#trGo"); btn.disabled = true; btn.textContent = "번역 중…";
        $("#trOut").innerHTML = ""; // 이전 결과 숨기기
        try {
          trState.out = await translateText(text, from, dest); trState.err = "";
          const h = hist().filter(x => !(x.src === text && x.dir === trState.dir));
          h.unshift({ dir: trState.dir, src: text, out: trState.out }); S.trHist[C.code] = h.slice(0, 15); save();
        } catch (e) {
          trState.out = ""; trState.err = e && e.message && !/fetch|network/i.test(e.message) ? e.message : "번역 서버에 연결하지 못했어요. 인터넷 연결을 확인해 주세요.";
        }
        render();
      }
    };
    render();
  }

  // ---------- 설정 ----------
  function settings() {
    setTitle("설정");
    const st = S.settings;
    const sw = (k, label, sub) => `<div class="set-item"><div class="lbl"><b>${label}</b>${sub ? `<small>${sub}</small>` : ""}</div>
      <label class="switch"><input type="checkbox" data-set="${k}" ${st[k] ? "checked" : ""}><i></i></label></div>`;
    app.innerHTML = `
      <div class="card">
        <div class="set-item"><div class="lbl"><b>배우는 언어</b><small>언어마다 학습 기록이 따로 저장돼요</small></div>
          <select id="langSel">${LANGS.map(l => `<option value="${l.code}" ${l.code === C.code ? "selected" : ""}>${l.flag} ${l.name}</option>`).join("")}</select></div>
        <div class="set-item"><div class="lbl"><b>${C.country} 출발일</b><small>D-day와 이번 주 추천 학습을 보여 드려요</small></div>
          <input type="date" id="dep" value="${esc(P().departure)}"></div>
        ${sw("showPron", "한글 발음 표시", "예: 나마스떼")}
        ${sw("showRoman", "로마자 표시", "예: namaste")}
        <div class="set-item"><div class="lbl"><b>카드 방향</b></div>
          <select id="dir"><option value="ko" ${st.dir === "ko" ? "selected" : ""}>한국어 → ${C.name}</option><option value="ne" ${st.dir === "ne" ? "selected" : ""}>${C.name} → 한국어</option></select></div>
        <div class="set-item"><div class="lbl"><b>음성 속도</b></div>
          <select id="rate">${[0.7, 0.85, 1, 1.2].map(r => `<option value="${r}" ${st.rate === r ? "selected" : ""}>${r}x</option>`).join("")}</select></div>
        <div class="set-item"><div class="lbl"><b>화면 테마</b></div>
          <select id="theme"><option value="" ${!st.theme ? "selected" : ""}>기기 설정 따름</option><option value="light" ${st.theme === "light" ? "selected" : ""}>밝게</option><option value="dark" ${st.theme === "dark" ? "selected" : ""}>어둡게</option></select></div>
      </div>

      <div class="section-title">휴대폰에 앱처럼 설치하기</div>
      <div class="card info">
        <p><b>아이폰</b>: Safari에서 열고 → 공유 버튼(□↑) → "홈 화면에 추가"</p>
        <p><b>안드로이드</b>: Chrome에서 열고 → ⋮ 메뉴 → "앱 설치" 또는 "홈 화면에 추가"</p>
        <p>한 번 열어 두면 <b>인터넷이 없어도</b> 음성까지 모두 사용할 수 있어요. 출국 전에 Wi-Fi에서 꼭 한 번 열어 두세요.</p>
      </div>

      <div class="section-title">안내</div>
      <div class="card info">
        <p>🔊 현재 음성은 ${C.name} <b>AI 합성 음성</b>이에요. 원어민 녹음을 받으면 같은 파일 이름으로 바꿔 넣을 수 있어요.</p>
        <p>✍️ 모든 문장은 원어민의 검수를 권장해요. 특히 전도 문구와 성경 구절은 현지 교회에서 쓰는 표현으로 다시 확인해 주세요.</p>
        <p>💾 학습 기록은 이 기기의 브라우저에만 저장돼요.</p>
      </div>
      <button class="btn ghost block" id="reset" style="margin-top:16px;color:var(--bad)">${C.name} 학습 기록 초기화</button>`;
    $$("[data-set]").forEach(i => i.onchange = () => { st[i.dataset.set] = i.checked; save(); });
    $("#langSel").onchange = e => switchLang(e.target.value);
    $("#dep").onchange = e => { P().departure = e.target.value; save(); toast("출발일을 저장했어요"); };
    $("#dir").onchange = e => { st.dir = e.target.value; save(); };
    $("#rate").onchange = e => { st.rate = +e.target.value; save(); };
    $("#theme").onchange = e => { st.theme = e.target.value; save(); applyTheme(); };
    $("#reset").onclick = () => {
      if (confirm(`${C.name}의 외운 기록, 복습 일정, 즐겨찾기가 모두 지워져요. 초기화할까요?`)) {
        S.langs[C.code] = { srs: {}, fav: {}, departure: P().departure }; save(); toast("초기화했어요"); route();
      }
    };
  }
  function applyTheme() {
    if (S.settings.theme) document.documentElement.dataset.theme = S.settings.theme;
    else delete document.documentElement.dataset.theme;
  }

  // ---------- start ----------
  applyTheme();
  try { speechSynthesis.getVoices(); } catch (e) {}
  route();
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
