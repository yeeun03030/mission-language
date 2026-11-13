/*
 * 네팔어 학습 데이터 (12주 과정)
 * 문장 형식: { id, ko(한국어), tx(네팔어), pron(한글 발음), roman(로마자), note(설명, 선택), mission(전도 문구면 true) }
 *   - id 가 음성 파일 이름이 됩니다: audio/ne/<id>.mp3
 * ⚠️ 모든 문장은 원어민(네팔인 성도/선교사님) 검수를 권장합니다.
 */
window.COURSES = window.COURSES || {};
window.COURSES.ne = {
  code: "ne", order: 1, name: "네팔어", country: "네팔", flag: "🇳🇵", appName: "나마스떼 네팔어",
  heroTx: "नमस्ते! जय मसीह", heroSub: "나마스떼! 자이 마시 — 오늘도 네팔의 아이들을 위해 한 걸음",
  praise: "स्याबास!", praisePron: "샤바스", ttsLang: "ne",
  voice: "ne-NP-HemkalaNeural", voiceM: "ne-NP-SagarNeural",
  guide: [
    "네팔은 <b>형법(2017) 제158조</b>로 개종을 권유하는 행위를 금지하고 있어요. 외국인은 추방될 수도 있으니 조심해 주세요.",
    "<b>학교에서는</b> 학교 측과 현지 협력 교회가 <b>미리 합의한 범위</b> 안에서만 활동해 주세요. 수업 중에 아이들에게 종교 이야기를 직접 하지 않아요.",
    "상대가 <b>먼저 묻거나 원할 때</b> 간증과 기도를 나눠요. 축복하고, 들어 주고, 사랑으로 섬기는 것이 가장 큰 전도예요.",
    "선물, 돈, 혜택을 대가로 신앙을 권하지 않아요.",
    "사진 촬영이나 SNS 업로드는 꼭 허락을 받고, 아이들의 얼굴과 학교 이름은 공개하지 않아요.",
    "이 문장들은 원어민의 검수가 필요해요. 현지에 가면 네팔 성도님께 한 번 더 확인해 주세요."
  ],
  weeks: [
  {
    week: 1, title: "인사", icon: "🙏",
    goal: "만나고 헤어질 때 쓰는 기본 인사",
    items: [
      { id: "w01_01", ko: "안녕하세요", tx: "नमस्ते", pron: "나마스떼", roman: "namaste", note: "두 손을 모으고 고개를 살짝 숙이며 인사해요. 하루 중 언제나 사용." },
      { id: "w01_02", ko: "안녕하세요 (더 공손하게)", tx: "नमस्कार", pron: "나마스까르", roman: "namaskar", note: "선생님, 어른께 사용" },
      { id: "w01_03", ko: "잘 지내세요?", tx: "तपाईंलाई कस्तो छ?", pron: "따빠이라이 까스또 차?", roman: "tapainlai kasto cha?" },
      { id: "w01_04", ko: "잘 지내요", tx: "मलाई सन्चै छ", pron: "말라이 산짜이 차", roman: "malai sanchai cha" },
      { id: "w01_05", ko: "당신은요?", tx: "अनि तपाईंलाई नि?", pron: "아니 따빠이라이 니?", roman: "ani tapainlai ni?" },
      { id: "w01_06", ko: "감사합니다", tx: "धन्यवाद", pron: "단야받", roman: "dhanyabad" },
      { id: "w01_07", ko: "미안합니다", tx: "माफ गर्नुहोस्", pron: "마프 가르누호스", roman: "maaf garnuhos" },
      { id: "w01_08", ko: "괜찮아요", tx: "ठीक छ", pron: "틱 차", roman: "thik cha" },
      { id: "w01_09", ko: "네", tx: "हो", pron: "호", roman: "ho" },
      { id: "w01_10", ko: "네 (공손한 대답)", tx: "हजुर", pron: "하주르", roman: "hajur", note: "누가 부를 때 '네~' 하고 대답하는 말" },
      { id: "w01_11", ko: "아니요", tx: "होइन", pron: "호이나", roman: "hoina" },
      { id: "w01_12", ko: "만나서 반갑습니다", tx: "तपाईंलाई भेटेर खुसी लाग्यो", pron: "따빠이라이 베떼라 쿠시 락요", roman: "tapainlai bhetera khusi lagyo" },
      { id: "w01_13", ko: "좋은 아침입니다", tx: "शुभ प्रभात", pron: "수바 쁘라바뜨", roman: "shubha prabhat" },
      { id: "w01_14", ko: "안녕히 주무세요", tx: "शुभ रात्री", pron: "수바 라뜨리", roman: "shubha ratri" },
      { id: "w01_15", ko: "또 만나요", tx: "फेरि भेटौँला", pron: "페리 베따울라", roman: "pheri bhetaunla" },
      { id: "w01_16", ko: "조심히 가세요", tx: "राम्रोसँग जानुहोस्", pron: "람로상가 자누호스", roman: "ramrosanga januhos" }
    ]
  },
  {
    week: 2, title: "자기소개", icon: "🙋",
    goal: "이름·나이·출신을 말하고 묻기",
    items: [
      { id: "w02_01", ko: "제 이름은 사라입니다", tx: "मेरो नाम सारा हो", pron: "메로 남 사라 호", roman: "mero naam Sara ho", note: "'사라' 자리에 내 이름을 넣어요" },
      { id: "w02_02", ko: "성함이 어떻게 되세요?", tx: "तपाईंको नाम के हो?", pron: "따빠이꼬 남 께 호?", roman: "tapainko naam ke ho?" },
      { id: "w02_03", ko: "너 이름이 뭐야? (아이에게)", tx: "तिम्रो नाम के हो?", pron: "띰로 남 께 호?", roman: "timro naam ke ho?", note: "아이들에게는 '띰로(너의)'를 써요" },
      { id: "w02_04", ko: "저는 한국에서 왔어요", tx: "म कोरियाबाट आएको हुँ", pron: "마 꼬리야바따 아에꼬 훙", roman: "ma koriyabata aeko hun" },
      { id: "w02_05", ko: "저는 한국 사람이에요", tx: "म कोरियाली हुँ", pron: "마 꼬리얄리 훙", roman: "ma koriyali hun" },
      { id: "w02_06", ko: "저는 학생이에요", tx: "म विद्यार्थी हुँ", pron: "마 비댜르티 훙", roman: "ma bidyarthi hun" },
      { id: "w02_07", ko: "저는 선생님이에요", tx: "म शिक्षक हुँ", pron: "마 식착 훙", roman: "ma shikshak hun" },
      { id: "w02_08", ko: "저는 스무 살이에요", tx: "म बीस वर्षको हुँ", pron: "마 비스 바르사꼬 훙", roman: "ma bis barshako hun" },
      { id: "w02_09", ko: "너 몇 살이야?", tx: "तिमी कति वर्षको भयौ?", pron: "띠미 까띠 바르사꼬 바야우?", roman: "timi kati barshako bhayau?" },
      { id: "w02_10", ko: "어디에서 오셨어요?", tx: "तपाईं कहाँबाट आउनुभएको?", pron: "따빠이 까항바따 아우누바에꼬?", roman: "tapain kahanbata aunubhaeko?" },
      { id: "w02_11", ko: "저는 네팔어를 조금 해요", tx: "म अलिअलि नेपाली बोल्छु", pron: "마 알리알리 네빨리 볼추", roman: "ma ali-ali nepali bolchhu" },
      { id: "w02_12", ko: "저는 네팔어를 배우고 있어요", tx: "म नेपाली सिक्दैछु", pron: "마 네빨리 식다이추", roman: "ma nepali sikdaichhu" },
      { id: "w02_13", ko: "저는 네팔이 좋아요", tx: "मलाई नेपाल मन पर्छ", pron: "말라이 네빨 만 빠르차", roman: "malai nepal man parchha" },
      { id: "w02_14", ko: "우리는 한국에서 온 봉사팀이에요", tx: "हामी कोरियाबाट आएको स्वयंसेवक टोली हौँ", pron: "하미 꼬리야바따 아에꼬 스와양세박 똘리 하웅", roman: "hami koriyabata aeko swayamsewak toli haun" },
      { id: "w02_15", ko: "우리 가족은 다섯 명이에요", tx: "मेरो परिवारमा पाँच जना छन्", pron: "메로 빠리바르마 빤쯔 자나 찬", roman: "mero pariwarma panch jana chhan" },
      { id: "w02_16", ko: "너희를 만나서 정말 기뻐", tx: "तिमीहरूलाई भेटेर धेरै खुसी लाग्यो", pron: "띠미하루라이 베떼라 데라이 쿠시 락요", roman: "timiharulai bhetera dherai khusi lagyo" }
    ]
  },
  {
    week: 3, title: "숫자와 시간", icon: "🔢",
    goal: "1~10, 큰 수, 시간·날짜 표현",
    items: [
      { id: "w03_01", ko: "하나 (1)", tx: "एक", pron: "엑", roman: "ek" },
      { id: "w03_02", ko: "둘 (2)", tx: "दुई", pron: "두이", roman: "dui" },
      { id: "w03_03", ko: "셋 (3)", tx: "तीन", pron: "띤", roman: "tin" },
      { id: "w03_04", ko: "넷 (4)", tx: "चार", pron: "짜르", roman: "char" },
      { id: "w03_05", ko: "다섯 (5)", tx: "पाँच", pron: "빤쯔", roman: "panch" },
      { id: "w03_06", ko: "여섯 (6)", tx: "छ", pron: "차", roman: "chha" },
      { id: "w03_07", ko: "일곱 (7)", tx: "सात", pron: "사뜨", roman: "saat" },
      { id: "w03_08", ko: "여덟 (8)", tx: "आठ", pron: "아트", roman: "aath" },
      { id: "w03_09", ko: "아홉 (9)", tx: "नौ", pron: "나우", roman: "nau" },
      { id: "w03_10", ko: "열 (10)", tx: "दस", pron: "다스", roman: "das" },
      { id: "w03_11", ko: "스물 (20)", tx: "बीस", pron: "비스", roman: "bis" },
      { id: "w03_12", ko: "백 (100)", tx: "सय", pron: "사이", roman: "saya" },
      { id: "w03_13", ko: "몇 개예요?", tx: "कति वटा?", pron: "까띠 와따?", roman: "kati wata?" },
      { id: "w03_14", ko: "지금 몇 시예요?", tx: "अहिले कति बज्यो?", pron: "아힐레 까띠 바즈요?", roman: "ahile kati bajyo?" },
      { id: "w03_15", ko: "오늘 / 내일 / 어제", tx: "आज / भोलि / हिजो", pron: "아즈 / 볼리 / 히조", roman: "aaja / bholi / hijo" },
      { id: "w03_16", ko: "내일 또 올게요", tx: "भोलि फेरि आउँछु", pron: "볼리 페리 아운추", roman: "bholi pheri aunchhu" },
      { id: "w03_17", ko: "다 같이 세어 보자, 하나 둘 셋!", tx: "सबै मिलेर गनौँ, एक दुई तीन!", pron: "사바이 밀레라 가나웅, 엑 두이 띤!", roman: "sabai milera ganaun, ek dui tin!" }
    ]
  },
  {
    week: 4, title: "교실 표현", icon: "🏫",
    goal: "수업·프로그램을 진행할 때 쓰는 말",
    items: [
      { id: "w04_01", ko: "얘들아, 여기 봐", tx: "यता हेर त", pron: "야따 헤라 따", roman: "yata hera ta" },
      { id: "w04_02", ko: "모두 앉아요", tx: "सबै जना बस", pron: "사바이 자나 바스", roman: "sabai jana basa" },
      { id: "w04_03", ko: "모두 일어나요", tx: "सबै जना उठ", pron: "사바이 자나 우트", roman: "sabai jana utha" },
      { id: "w04_04", ko: "조용히 해요", tx: "शान्त होऊ", pron: "산뜨 호우", roman: "shanta hou" },
      { id: "w04_05", ko: "잘 들어요", tx: "राम्रोसँग सुन", pron: "람로상 순", roman: "ramrosanga suna" },
      { id: "w04_06", ko: "나를 따라 해요", tx: "मसँगै भन", pron: "마상가이 반", roman: "masangai bhana" },
      { id: "w04_07", ko: "한 번 더", tx: "फेरि एक पटक", pron: "페리 엑 빠딱", roman: "pheri ek patak" },
      { id: "w04_08", ko: "손 들어요", tx: "हात उठाऊ", pron: "하뜨 우타우", roman: "haat uthau" },
      { id: "w04_09", ko: "잘했어!", tx: "स्याबास!", pron: "샤바스!", roman: "syabas!", note: "아이들을 칭찬할 때 가장 많이 쓰는 말" },
      { id: "w04_10", ko: "아주 좋아요", tx: "धेरै राम्रो", pron: "데라이 람로", roman: "dherai ramro" },
      { id: "w04_11", ko: "이해했어?", tx: "बुझ्यौ?", pron: "부즈야우?", roman: "bujhyau?" },
      { id: "w04_12", ko: "질문 있어요?", tx: "केही प्रश्न छ?", pron: "께히 쁘라슨 차?", roman: "kehi prashna chha?" },
      { id: "w04_13", ko: "천천히 말해 주세요", tx: "बिस्तारै बोल्नुहोस्", pron: "비스따라이 볼누호스", roman: "bistarai bolnuhos" },
      { id: "w04_14", ko: "잘 모르겠어요", tx: "मैले बुझिनँ", pron: "마일레 부지난", roman: "maile bujhina" },
      { id: "w04_15", ko: "이것을 네팔어로 뭐라고 해요?", tx: "यसलाई नेपालीमा के भनिन्छ?", pron: "야스라이 네빨리마 께 바닌차?", roman: "yaslai nepalima ke bhaninchha?" },
      { id: "w04_16", ko: "오늘 수업 끝!", tx: "आजको कक्षा सकियो!", pron: "아즈꼬 깍차 사끼요!", roman: "aajako kakshya sakiyo!" }
    ]
  },
  {
    week: 5, title: "놀이와 활동", icon: "⚽",
    goal: "게임·레크리에이션·미술 활동 진행",
    items: [
      { id: "w05_01", ko: "같이 놀자!", tx: "सँगै खेलौँ!", pron: "상가이 켈라웅!", roman: "sangai khelaun!" },
      { id: "w05_02", ko: "줄을 서요", tx: "लाइन लगाऊ", pron: "라인 라가우", roman: "line lagau" },
      { id: "w05_03", ko: "동그랗게 서요", tx: "गोलो घेरामा उभिऊ", pron: "골로 게라마 우비우", roman: "golo gherama ubhiu" },
      { id: "w05_04", ko: "두 팀으로 나눠요", tx: "दुई टोली बनाऔँ", pron: "두이 똘리 바나웅", roman: "dui toli banaun" },
      { id: "w05_05", ko: "시작!", tx: "सुरु!", pron: "수루!", roman: "suru!" },
      { id: "w05_06", ko: "멈춰!", tx: "रोक!", pron: "로까!", roman: "roka!" },
      { id: "w05_07", ko: "네 차례야", tx: "तिम्रो पालो", pron: "띰로 빨로", roman: "timro paalo" },
      { id: "w05_08", ko: "박수 치자!", tx: "ताली बजाऔँ!", pron: "딸리 바자웅!", roman: "taali bajaun!" },
      { id: "w05_09", ko: "너희가 이겼어!", tx: "तिमीहरूले जित्यौ!", pron: "띠미하루레 지뜨야우!", roman: "timiharule jityau!" },
      { id: "w05_10", ko: "괜찮아, 다시 해 보자", tx: "ठीक छ, फेरि गरौँ", pron: "틱 차, 페리 가라웅", roman: "thik chha, pheri garaun" },
      { id: "w05_11", ko: "조심해!", tx: "होसियार!", pron: "호시야르!", roman: "hosiyar!" },
      { id: "w05_12", ko: "빨리!", tx: "छिटो!", pron: "치또!", roman: "chhito!" },
      { id: "w05_13", ko: "천천히", tx: "बिस्तारै", pron: "비스따라이", roman: "bistarai" },
      { id: "w05_14", ko: "그림 그리자", tx: "चित्र कोरौँ", pron: "찌뜨라 꼬라웅", roman: "chitra koraun" },
      { id: "w05_15", ko: "색칠해요", tx: "रङ भर", pron: "랑 바르", roman: "rang bhara" },
      { id: "w05_16", ko: "노래 부르자", tx: "गीत गाऔँ", pron: "기뜨 가웅", roman: "geet gaaun" },
      { id: "w05_17", ko: "이건 너를 위한 선물이야", tx: "यो तिम्रो लागि उपहार हो", pron: "요 띰로 라기 우빠하르 호", roman: "yo timro lagi upahar ho" }
    ]
  },
  {
    week: 6, title: "칭찬과 감정", icon: "💛",
    goal: "아이들을 격려하고 마음을 나누기",
    items: [
      { id: "w06_01", ko: "정말 예쁘다! (여자아이)", tx: "कति राम्री!", pron: "까띠 람리!", roman: "kati ramri!" },
      { id: "w06_02", ko: "정말 멋지다!", tx: "कति राम्रो!", pron: "까띠 람로!", roman: "kati ramro!" },
      { id: "w06_03", ko: "너는 소중해", tx: "तिमी बहुमूल्य छौ", pron: "띠미 바후물려 차우", roman: "timi bahumulya chhau" },
      { id: "w06_04", ko: "사랑해", tx: "म तिमीलाई माया गर्छु", pron: "마 띠미라이 마야 가르추", roman: "ma timilai maya garchhu" },
      { id: "w06_05", ko: "너는 할 수 있어!", tx: "तिमी सक्छौ!", pron: "띠미 삭차우!", roman: "timi sakchhau!" },
      { id: "w06_06", ko: "힘내!", tx: "हिम्मत गर!", pron: "힘맛 가르!", roman: "himmat gara!" },
      { id: "w06_07", ko: "기분이 어때?", tx: "तिमीलाई कस्तो लागिरहेको छ?", pron: "띠미라이 까스또 라기라헤꼬 차?", roman: "timilai kasto lagiraheko chha?" },
      { id: "w06_08", ko: "나는 행복해", tx: "म खुसी छु", pron: "마 쿠시 추", roman: "ma khusi chhu" },
      { id: "w06_09", ko: "나는 슬퍼", tx: "म दुःखी छु", pron: "마 두키 추", roman: "ma dukhi chhu" },
      { id: "w06_10", ko: "피곤해요", tx: "म थाकेँ", pron: "마 타껭", roman: "ma thaken" },
      { id: "w06_11", ko: "배고파요", tx: "मलाई भोक लाग्यो", pron: "말라이 복 락요", roman: "malai bhok lagyo" },
      { id: "w06_12", ko: "목말라요", tx: "मलाई तिर्खा लाग्यो", pron: "말라이 띠르카 락요", roman: "malai tirkha lagyo" },
      { id: "w06_13", ko: "아파? 어디가 아파?", tx: "दुख्छ? कहाँ दुख्छ?", pron: "두크차? 까항 두크차?", roman: "dukhchha? kahan dukhchha?" },
      { id: "w06_14", ko: "웃는 모습이 예뻐", tx: "तिम्रो मुस्कान राम्रो छ", pron: "띰로 무스깐 람로 차", roman: "timro muskan ramro chha" },
      { id: "w06_15", ko: "고마워, 친구야", tx: "धन्यवाद, साथी", pron: "단야받, 사티", roman: "dhanyabad, saathi" },
      { id: "w06_16", ko: "우리는 친구야", tx: "हामी साथी हौँ", pron: "하미 사티 하웅", roman: "hami saathi haun" }
    ]
  },
  {
    week: 7, title: "학생과 대화하기", icon: "🎒",
    goal: "학년·꿈·가족·좋아하는 것 묻기",
    items: [
      { id: "w07_01", ko: "몇 학년이야?", tx: "तिमी कति कक्षामा पढ्छौ?", pron: "띠미 까띠 깍차마 빠드차우?", roman: "timi kati kakshyama padhchhau?" },
      { id: "w07_02", ko: "무슨 과목을 좋아해?", tx: "तिमीलाई कुन विषय मन पर्छ?", pron: "띠미라이 꾼 비사이 만 빠르차?", roman: "timilai kun bishaya man parchha?" },
      { id: "w07_03", ko: "나는 노래하는 걸 좋아해", tx: "मलाई गीत गाउन मन पर्छ", pron: "말라이 기뜨 가우나 만 빠르차", roman: "malai geet gauna man parchha" },
      { id: "w07_04", ko: "너의 꿈은 뭐야?", tx: "तिम्रो सपना के हो?", pron: "띰로 사빠나 께 호?", roman: "timro sapana ke ho?" },
      { id: "w07_05", ko: "커서 뭐가 되고 싶어?", tx: "ठूलो भएर के बन्न चाहन्छौ?", pron: "툴로 바에라 께 반나 짜한차우?", roman: "thulo bhaera ke banna chahanchhau?" },
      { id: "w07_06", ko: "저는 의사가 되고 싶어요", tx: "म डाक्टर बन्न चाहन्छु", pron: "마 닥따르 반나 짜한추", roman: "ma doctor banna chahanchhu" },
      { id: "w07_07", ko: "가족이 몇 명이야?", tx: "तिम्रो परिवारमा कति जना छन्?", pron: "띰로 빠리바르마 까띠 자나 찬?", roman: "timro pariwarma kati jana chhan?" },
      { id: "w07_08", ko: "형제자매가 있어?", tx: "तिम्रा दाजुभाइ दिदीबहिनी छन्?", pron: "띰라 다주바이 디디바히니 찬?", roman: "timra dajubhai didibahini chhan?" },
      { id: "w07_09", ko: "집이 어디야?", tx: "तिम्रो घर कहाँ छ?", pron: "띰로 가르 까항 차?", roman: "timro ghar kahan chha?" },
      { id: "w07_10", ko: "학교 좋아?", tx: "तिमीलाई स्कुल मन पर्छ?", pron: "띠미라이 스꿀 만 빠르차?", roman: "timilai school man parchha?" },
      { id: "w07_11", ko: "밥 먹었어?", tx: "खाना खायौ?", pron: "카나 카야우?", roman: "khana khayau?", note: "네팔에서도 인사처럼 자주 묻는 말" },
      { id: "w07_12", ko: "응, 먹었어", tx: "हो, खाएँ", pron: "호, 카엥", roman: "ho, khaen" },
      { id: "w07_13", ko: "이건 뭐야?", tx: "यो के हो?", pron: "요 께 호?", roman: "yo ke ho?" },
      { id: "w07_14", ko: "같이 사진 찍을래?", tx: "सँगै फोटो खिचौँ?", pron: "상가이 포또 키짜웅?", roman: "sangai photo khichaun?" },
      { id: "w07_15", ko: "어떤 놀이를 좋아해?", tx: "तिमीलाई कुन खेल मन पर्छ?", pron: "띠미라이 꾼 켈 만 빠르차?", roman: "timilai kun khel man parchha?" },
      { id: "w07_16", ko: "선생님, 감사합니다", tx: "गुरुजी, धन्यवाद", pron: "구루지, 단야받", roman: "guruji, dhanyabad", note: "학교 선생님을 부를 때 '구루지(남)/ 미스(여)' 또는 '사르/맴'이라고도 해요" }
    ]
  },
  {
    week: 8, title: "생활 필수 표현", icon: "🍛",
    goal: "식사·길찾기·쇼핑·도움 요청",
    items: [
      { id: "w08_01", ko: "화장실이 어디예요?", tx: "शौचालय कहाँ छ?", pron: "사우짤라이 까항 차?", roman: "shauchalaya kahan chha?", note: "'뜨와일렛 까항 차?'라고 해도 통해요" },
      { id: "w08_02", ko: "이거 얼마예요?", tx: "यसको कति पर्छ?", pron: "야스꼬 까띠 빠르차?", roman: "yasko kati parchha?" },
      { id: "w08_03", ko: "조금 깎아 주세요", tx: "अलि सस्तो गर्नुहोस्", pron: "알리 사스또 가르누호스", roman: "ali sasto garnuhos" },
      { id: "w08_04", ko: "물 좀 주세요", tx: "पानी दिनुहोस्", pron: "빠니 디누호스", roman: "pani dinuhos" },
      { id: "w08_05", ko: "짜이(차) 한 잔 주세요", tx: "एक कप चिया दिनुहोस्", pron: "엑 깝 찌야 디누호스", roman: "ek cup chiya dinuhos" },
      { id: "w08_06", ko: "맛있어요", tx: "मीठो छ", pron: "미토 처", roman: "mitho chha" },
      { id: "w08_07", ko: "조금만 주세요", tx: "अलिकति मात्र दिनुहोस्", pron: "알리까띠 마뜨라 디누호스", roman: "alikati matra dinuhos" },
      { id: "w08_08", ko: "배불러요", tx: "पेट भर्यो", pron: "뻬뜨 바르요", roman: "pet bharyo", note: "더 주려고 할 때 정중히 사양하는 말" },
      { id: "w08_09", ko: "맵지 않게 해 주세요", tx: "पिरो नहाल्नुहोस्", pron: "삐로 나할누호스", roman: "piro nahalnuhos" },
      { id: "w08_10", ko: "도와주세요", tx: "मलाई सहयोग गर्नुहोस्", pron: "말라이 사하욕 가르누호스", roman: "malai sahayog garnuhos" },
      { id: "w08_11", ko: "여기가 어디예요?", tx: "यो ठाउँ कहाँ हो?", pron: "요 타웅 까항 호?", roman: "yo thau kahan ho?" },
      { id: "w08_12", ko: "학교에 가고 싶어요", tx: "म स्कुल जान चाहन्छु", pron: "마 스꿀 자나 짜한추", roman: "ma school jana chahanchhu" },
      { id: "w08_13", ko: "얼마나 걸려요?", tx: "कति समय लाग्छ?", pron: "까띠 사마이 락차?", roman: "kati samaya lagchha?" },
      { id: "w08_14", ko: "몸이 좋지 않아요", tx: "मलाई सन्चो छैन", pron: "말라이 산쪼 차이나", roman: "malai sancho chhaina" },
      { id: "w08_15", ko: "사진 찍어도 돼요?", tx: "फोटो खिच्न मिल्छ?", pron: "포또 킷짜나 밀차?", roman: "photo khichna milchha?" },
      { id: "w08_16", ko: "괜찮아요, 됐어요", tx: "पर्दैन, धन्यवाद", pron: "빠르다이나, 단야받", roman: "pardaina, dhanyabad" }
    ]
  },
  {
    week: 9, title: "축복과 기도", icon: "🕊️",
    goal: "축복하고, 기도를 제안하기",
    items: [
      { id: "w09_01", ko: "자이 마시 (그리스도인 인사)", tx: "जय मसीह", pron: "자이 마시", roman: "jaya masih", mission: true, note: "네팔 그리스도인들끼리 나누는 인사 ('메시아께 승리를')" },
      { id: "w09_02", ko: "하나님이 당신을 축복하시길", tx: "परमेश्वरले तपाईंलाई आशीष दिऊन्", pron: "빠라메스워르레 따빠이라이 아시스 디운", roman: "parameshwarle tapainlai ashish diun", mission: true },
      { id: "w09_03", ko: "하나님이 너를 사랑하셔", tx: "परमेश्वरले तिमीलाई माया गर्नुहुन्छ", pron: "빠라메스워르레 띠미라이 마야 가르누훈차", roman: "parameshwarle timilai maya garnuhunchha", mission: true },
      { id: "w09_04", ko: "당신을 위해 기도해도 될까요?", tx: "के म तपाईंको लागि प्रार्थना गर्न सक्छु?", pron: "께 마 따빠이꼬 라기 쁘라르트나 가르나 삭추?", roman: "ke ma tapainko lagi prarthana garna sakchhu?", mission: true },
      { id: "w09_05", ko: "무엇을 위해 기도할까요?", tx: "म केको लागि प्रार्थना गरूँ?", pron: "마 께꼬 라기 쁘라르트나 가룽?", roman: "ma keko lagi prarthana garun?", mission: true },
      { id: "w09_06", ko: "당신을 위해 기도할게요", tx: "म तपाईंको लागि प्रार्थना गर्छु", pron: "마 따빠이꼬 라기 쁘라르트나 가르추", roman: "ma tapainko lagi prarthana garchhu", mission: true },
      { id: "w09_07", ko: "하나님 아버지", tx: "हे पिता परमेश्वर", pron: "헤 삐따 빠라메스워르", roman: "he pita parameshwar", mission: true },
      { id: "w09_08", ko: "하나님, 감사합니다", tx: "हे परमेश्वर, धन्यवाद", pron: "헤 빠라메스워르, 단야받", roman: "he parameshwar, dhanyabad", mission: true },
      { id: "w09_09", ko: "예수님의 이름으로 기도합니다", tx: "येशूको नाममा प्रार्थना गर्छु", pron: "예수꼬 남마 쁘라르트나 가르추", roman: "yeshuko naamma prarthana garchhu", mission: true },
      { id: "w09_10", ko: "아멘", tx: "आमेन", pron: "아멘", roman: "amen", mission: true },
      { id: "w09_11", ko: "평안이 함께하기를", tx: "तपाईंलाई शान्ति होस्", pron: "따빠이라이 산띠 호스", roman: "tapainlai shanti hos", mission: true },
      { id: "w09_12", ko: "건강하세요", tx: "स्वस्थ रहनुहोस्", pron: "스와스트 라하누호스", roman: "swastha rahanuhos" },
      { id: "w09_13", ko: "하나님께서 지켜 주실 거예요", tx: "परमेश्वरले तपाईंको रक्षा गर्नुहुनेछ", pron: "빠라메스워르레 따빠이꼬 락차 가르누후네차", roman: "parameshwarle tapainko raksha garnuhunechha", mission: true },
      { id: "w09_14", ko: "우리는 교회에서 왔어요", tx: "हामी चर्चबाट आएका हौँ", pron: "하미 짜르짜바따 아에까 하웅", roman: "hami churchbata aeka haun", mission: true },
      { id: "w09_15", ko: "당신은 하나님 보시기에 소중해요", tx: "तपाईं परमेश्वरको नजरमा बहुमूल्य हुनुहुन्छ", pron: "따빠이 빠라메스워르꼬 나자르마 바후물려 후누훈차", roman: "tapain parameshwarko najarma bahumulya hunuhunchha", mission: true },
      { id: "w09_16", ko: "오늘 함께해서 감사해요", tx: "आज सँगै हुन पाएकोमा धन्यवाद", pron: "아즈 상가이 후나 빠에꼬마 단야받", roman: "aaja sangai huna paekoma dhanyabad" }
    ]
  },
  {
    week: 10, title: "나의 간증", icon: "✨",
    goal: "짧은 간증으로 내 이야기 나누기",
    items: [
      { id: "w10_01", ko: "저는 예수님을 믿어요", tx: "म येशूमा विश्वास गर्छु", pron: "마 예수마 비스와스 가르추", roman: "ma yeshuma bishwas garchhu", mission: true },
      { id: "w10_02", ko: "예수님은 나의 친구예요", tx: "येशू मेरो साथी हुनुहुन्छ", pron: "예수 메로 사티 후누훈차", roman: "yeshu mero saathi hunuhunchha", mission: true },
      { id: "w10_03", ko: "전에 저는 외롭고 슬펐어요", tx: "पहिले म एक्लो र दुःखी थिएँ", pron: "빠힐레 마 에끌로 라 두키 티엥", roman: "pahile ma eklo ra dukhi thien", mission: true },
      { id: "w10_04", ko: "예수님을 만나고 기쁨이 생겼어요", tx: "येशूलाई भेटेपछि मलाई आनन्द मिल्यो", pron: "예수라이 베떼빠치 말라이 아난다 밀요", roman: "yeshulai bhetepachhi malai ananda milyo", mission: true },
      { id: "w10_05", ko: "예수님은 나를 사랑하세요", tx: "येशूले मलाई माया गर्नुहुन्छ", pron: "예술레 말라이 마야 가르누훈차", roman: "yeshule malai maya garnuhunchha", mission: true },
      { id: "w10_06", ko: "그래서 저는 행복해요", tx: "त्यसैले म खुसी छु", pron: "뜨야사일레 마 쿠시 추", roman: "tyasaile ma khusi chhu", mission: true },
      { id: "w10_07", ko: "저는 매일 기도해요", tx: "म हरेक दिन प्रार्थना गर्छु", pron: "마 하렉 딘 쁘라르트나 가르추", roman: "ma harek din prarthana garchhu", mission: true },
      { id: "w10_08", ko: "저는 성경을 읽어요", tx: "म बाइबल पढ्छु", pron: "마 바이발 빠드추", roman: "ma bible padhchhu", mission: true },
      { id: "w10_09", ko: "하나님은 기도를 들으세요", tx: "परमेश्वरले प्रार्थना सुन्नुहुन्छ", pron: "빠라메스워르레 쁘라르트나 순누훈차", roman: "parameshwarle prarthana sunnuhunchha", mission: true },
      { id: "w10_10", ko: "이 사랑을 나누고 싶어서 왔어요", tx: "यो माया बाँड्न म यहाँ आएको हुँ", pron: "요 마야 반드나 마 야항 아에꼬 훙", roman: "yo maya baadna ma yahan aeko hun", mission: true },
      { id: "w10_11", ko: "너희를 만나려고 멀리서 왔어", tx: "म तिमीहरूलाई भेट्न टाढाबाट आएको हुँ", pron: "마 띠미하루라이 베뜨나 따다바따 아에꼬 훙", roman: "ma timiharulai bhetna tadhabata aeko hun" },
      { id: "w10_12", ko: "하나님은 모든 사람을 사랑하세요", tx: "परमेश्वरले सबै मानिसलाई माया गर्नुहुन्छ", pron: "빠라메스워르레 사바이 마니스라이 마야 가르누훈차", roman: "parameshwarle sabai manislai maya garnuhunchha", mission: true },
      { id: "w10_13", ko: "예수님이 나에게 소망을 주셨어요", tx: "येशूले मलाई आशा दिनुभयो", pron: "예술레 말라이 아샤 디누바요", roman: "yeshule malai asha dinubhayo", mission: true },
      { id: "w10_14", ko: "궁금한 게 있으면 물어보세요", tx: "केही जान्न मन लागे सोध्नुहोस्", pron: "께히 잔나 만 라게 소드누호스", roman: "kehi janna man lage sodhnuhos" },
      { id: "w10_15", ko: "당신의 이야기도 듣고 싶어요", tx: "म तपाईंको कुरा पनि सुन्न चाहन्छु", pron: "마 따빠이꼬 꾸라 빠니 순나 짜한추", roman: "ma tapainko kura pani sunna chahanchhu" },
      { id: "w10_16", ko: "우리는 하나님의 가족이에요", tx: "हामी परमेश्वरको परिवार हौँ", pron: "하미 빠라메스워르꼬 빠리바르 하웅", roman: "hami parameshwarko pariwar haun", mission: true }
    ]
  },
  {
    week: 11, title: "복음의 핵심", icon: "✝️",
    goal: "복음을 짧은 문장으로 순서대로 전하기",
    items: [
      { id: "w11_01", ko: "하나님은 세상을 만드셨어요", tx: "परमेश्वरले संसार बनाउनुभयो", pron: "빠라메스워르레 산사르 바나우누바요", roman: "parameshwarle sansar banaunubhayo", mission: true },
      { id: "w11_02", ko: "하나님은 우리를 사랑하세요", tx: "परमेश्वरले हामीलाई माया गर्नुहुन्छ", pron: "빠라메스워르레 하미라이 마야 가르누훈차", roman: "parameshwarle hamilai maya garnuhunchha", mission: true },
      { id: "w11_03", ko: "모든 사람은 죄를 지었어요", tx: "सबै मानिसले पाप गरेका छन्", pron: "사바이 마니스레 빠쁘 가레까 찬", roman: "sabai manisle paap gareka chhan", mission: true },
      { id: "w11_04", ko: "죄 때문에 하나님과 멀어졌어요", tx: "पापले गर्दा हामी परमेश्वरबाट टाढा भयौँ", pron: "빠쁘레 가르다 하미 빠라메스워르바따 따다 바야웅", roman: "paaple garda hami parameshwarbata tadha bhayaun", mission: true },
      { id: "w11_05", ko: "예수님은 하나님의 아들이세요", tx: "येशू परमेश्वरका पुत्र हुनुहुन्छ", pron: "예수 빠라메스워르까 뿌뜨라 후누훈차", roman: "yeshu parameshwarka putra hunuhunchha", mission: true },
      { id: "w11_06", ko: "예수님은 우리를 위해 십자가에서 죽으셨어요", tx: "येशू हाम्रो लागि क्रूसमा मर्नुभयो", pron: "예수 함로 라기 끄루스마 마르누바요", roman: "yeshu hamro lagi krusma marnubhayo", mission: true },
      { id: "w11_07", ko: "예수님은 다시 살아나셨어요", tx: "येशू फेरि जीवित हुनुभयो", pron: "예수 페리 지비뜨 후누바요", roman: "yeshu pheri jiwit hunubhayo", mission: true },
      { id: "w11_08", ko: "하나님은 당신을 용서하세요", tx: "परमेश्वरले तपाईंलाई क्षमा गर्नुहुन्छ", pron: "빠라메스워르레 따빠이라이 착마 가르누훈차", roman: "parameshwarle tapainlai kshama garnuhunchha", mission: true },
      { id: "w11_09", ko: "예수님을 믿는 사람은 구원을 받아요", tx: "येशूमा विश्वास गर्नेले मुक्ति पाउँछ", pron: "예수마 비스와스 가르넬레 묵띠 빠운차", roman: "yeshuma bishwas garnele mukti paunchha", mission: true },
      { id: "w11_10", ko: "구원은 하나님의 선물이에요", tx: "मुक्ति परमेश्वरको वरदान हो", pron: "묵띠 빠라메스워르꼬 바라단 호", roman: "mukti parameshwarko baradan ho", mission: true },
      { id: "w11_11", ko: "영원한 생명", tx: "अनन्त जीवन", pron: "아난따 지반", roman: "ananta jiwan", mission: true },
      { id: "w11_12", ko: "예수님은 길이요 진리요 생명이세요", tx: "येशू मार्ग, सत्य र जीवन हुनुहुन्छ", pron: "예수 마르그, 사뜨야 라 지반 후누훈차", roman: "yeshu marga, satya ra jiwan hunuhunchha", mission: true },
      { id: "w11_13", ko: "예수님은 항상 우리와 함께하세요", tx: "येशू सधैँ हामीसँग हुनुहुन्छ", pron: "예수 사다잉 하미상 후누훈차", roman: "yeshu sadhain hamisanga hunuhunchha", mission: true },
      { id: "w11_14", ko: "예수님은 당신을 기다리고 계세요", tx: "येशू तपाईंलाई पर्खिरहनुभएको छ", pron: "예수 따빠이라이 빠르키라하누바에꼬 차", roman: "yeshu tapainlai parkhirahanubhaeko chha", mission: true },
      { id: "w11_15", ko: "원하시면 함께 기도할 수 있어요", tx: "चाहनुहुन्छ भने हामी सँगै प्रार्थना गर्न सक्छौँ", pron: "짜하누훈차 바네 하미 상가이 쁘라르트나 가르나 삭차웅", roman: "chahanuhunchha bhane hami sangai prarthana garna sakchhaun", mission: true },
      { id: "w11_16", ko: "가까운 교회를 알려 드릴 수 있어요", tx: "म तपाईंलाई नजिकको चर्चबारे बताउन सक्छु", pron: "마 따빠이라이 나직꼬 짜르짜바레 바따우나 삭추", roman: "ma tapainlai najikko churchbare bataun sakchhu", mission: true }
    ]
  },
  {
    week: 12, title: "성경 말씀과 작별", icon: "📖",
    goal: "암송 구절과 마지막 날 인사",
    items: [
      { id: "w12_01", ko: "하나님은 사랑이십니다 (요한일서 4:8)", tx: "परमेश्वर प्रेम हुनुहुन्छ।", pron: "빠라메스워르 쁘렘 후누훈차", roman: "parameshwar prem hunuhunchha", mission: true, verse: true },
      { id: "w12_02", ko: "여호와는 나의 목자시니 내게 부족함이 없으리로다 (시편 23:1)", tx: "परमप्रभु मेरा गोठाला हुनुहुन्छ, मलाई कुनै कुराको खाँचो हुनेछैन।", pron: "빠람쁘라부 메라 고탈라 후누훈차, 말라이 꾸나이 꾸라꼬 칸쪼 후네차이나", roman: "paramprabhu mera gothala hunuhunchha, malai kunai kurako khancho hunechhaina", mission: true, verse: true },
      { id: "w12_03", ko: "예수께서 이르시되 내가 곧 길이요 진리요 생명이니 (요한복음 14:6)", tx: "येशूले भन्नुभयो, \"मार्ग, सत्य र जीवन म नै हुँ।\"", pron: "예술레 반누바요, 마르그, 사뜨야 라 지반 마 나이 훙", roman: "yeshule bhannubhayo, marga, satya ra jiwan ma nai hun", mission: true, verse: true },
      { id: "w12_04", ko: "수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라 (마태복음 11:28)", tx: "हे सबै थाकेका र भारी बोकेकाहरू हो, मकहाँ आओ, म तिमीहरूलाई विश्राम दिनेछु।", pron: "헤 사바이 타께까 라 바리 보께까하루 호, 마까항 아오, 마 띠미하루라이 비스람 디네추", roman: "he sabai thakeka ra bhari bokekaharu ho, makahan aao, ma timiharulai bishram dinechhu", mission: true, verse: true },
      { id: "w12_05", ko: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라 (빌립보서 4:13)", tx: "मलाई शक्ति दिनुहुने ख्रीष्टद्वारा म सबै कुरा गर्न सक्छु।", pron: "말라이 삭띠 디누후네 크리스트드와라 마 사바이 꾸라 가르나 삭추", roman: "malai shakti dinuhune khrishtadwara ma sabai kura garna sakchhu", mission: true, verse: true },
      { id: "w12_06", ko: "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라 (요한복음 3:16)", tx: "किनकि परमेश्वरले संसारलाई यति साह्रो प्रेम गर्नुभयो, कि उहाँले आफ्नो एकमात्र पुत्र दिनुभयो, ताकि उहाँमाथि विश्वास गर्ने कोही पनि नाश नहोस्, तर त्यसले अनन्त जीवन पाओस्।", pron: "끼나끼 빠라메스워르레 산사르라이 야띠 사흐로 쁘렘 가르누바요, 끼 우하레 아프노 에끄마뜨라 뿌뜨라 디누바요, 따끼 우하마티 비스와스 가르네 꼬히 빠니 나스 나호스, 따르 뜨야슬레 아난따 지반 빠오스", roman: "kinaki parameshwarle sansarlai yati sahro prem garnubhayo, ki uhanle aaphno ekmatra putra dinubhayo, taki uhanmathi bishwas garne kohi pani naash nahos, tara tyasle ananta jiwan paos", mission: true, verse: true, note: "가장 긴 문장! 쉼표 단위로 끊어서 외워 보세요." },
      { id: "w12_07", ko: "너희를 절대 잊지 않을게", tx: "म तिमीहरूलाई कहिल्यै बिर्सिने छैन", pron: "마 띠미하루라이 까힐랴이 비르시네 차이나", roman: "ma timiharulai kahilyai birsine chhaina" },
      { id: "w12_08", ko: "보고 싶을 거야", tx: "तिमीहरूको याद आउनेछ", pron: "띠미하루꼬 야드 아우네차", roman: "timiharuko yaad aunechha" },
      { id: "w12_09", ko: "너희를 위해 기도할게", tx: "म तिमीहरूको लागि प्रार्थना गर्नेछु", pron: "마 띠미하루꼬 라기 쁘라르트나 가르네추", roman: "ma timiharuko lagi prarthana garnechhu", mission: true },
      { id: "w12_10", ko: "너희와 함께한 시간이 정말 즐거웠어", tx: "तिमीहरूसँग बिताएको समय धेरै रमाइलो भयो", pron: "띠미하루상 비따에꼬 사마이 데라이 라마일로 바요", roman: "timiharusanga bitaeko samaya dherai ramailo bhayo" },
      { id: "w12_11", ko: "공부 열심히 해", tx: "राम्रोसँग पढ है", pron: "람로상 빠드 하이", roman: "ramrosanga padha hai" },
      { id: "w12_12", ko: "건강하게 지내", tx: "स्वस्थ रहनू", pron: "스와스트 라하누", roman: "swastha rahanu" },
      { id: "w12_13", ko: "선생님들, 정말 감사했습니다", tx: "शिक्षकहरू, हजुरहरूलाई धेरै धन्यवाद", pron: "식착하루, 하주르하루라이 데라이 단야받", roman: "shikshakharu, hajurharulai dherai dhanyabad" },
      { id: "w12_14", ko: "하나님이 너희를 축복하시길", tx: "परमेश्वरले तिमीहरूलाई आशीष दिऊन्", pron: "빠라메스워르레 띠미하루라이 아시스 디운", roman: "parameshwarle timiharulai ashish diun", mission: true },
      { id: "w12_15", ko: "언젠가 다시 만나자", tx: "कुनै दिन फेरि भेटौँला", pron: "꾸나이 딘 페리 베따울라", roman: "kunai din pheri bhetaunla" },
      { id: "w12_16", ko: "잘 있어, 안녕!", tx: "ल, बिदा!", pron: "라, 비다!", roman: "la, bida!" }
    ]
  }
]
};
