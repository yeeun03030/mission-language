/*
 * 태국어 학습 데이터 (12주 과정)
 * 문장 형식: { id, ko(한국어), tx(태국어), pron(한글 발음), roman(로마자), note(설명, 선택), mission(전도 문구면 true), voice:"m"(남성 음성) }
 *   - id 가 음성 파일 이름이 됩니다: audio/th/<id>.mp3
 * 공손 어미: 여자는 문장 끝에 ค่ะ(카, 질문은 คะ), 남자는 ครับ(크랍)을 붙여요.
 *   이 데이터는 여성 음성 기준이라 '카'로 적었어요. 남자 팀원은 '카'를 '크랍'으로 바꿔 말하면 됩니다.
 * ⚠️ 모든 문장은 원어민(태국인 성도/선교사님) 검수가 필요합니다.
 *    특히 신앙 용어와 성경 구절은 현지 교회에서 쓰는 성경(THSV 2011 등) 표현과 대조해 주세요.
 */
window.COURSES = window.COURSES || {};
window.COURSES.th = {
  code: "th", order: 3, name: "태국어", country: "태국", flag: "🇹🇭", appName: "싸왓디 태국어",
  heroTx: "สวัสดีค่ะ! พระเจ้าอวยพร", heroSub: "싸왓디! — 오늘도 태국의 아이들을 위해 한 걸음",
  praise: "เก่งมาก!", praisePron: "껭 막", ttsLang: "th",
  voice: "th-TH-PremwadeeNeural", voiceM: "th-TH-NiwatNeural",
  intro: "남자는 문장 끝의 '카(ค่ะ/คะ)'를 '크랍(ครับ)'으로 바꿔 말하세요.",
  guide: [
    "태국은 <b>종교의 자유</b>가 있지만, 국민 대부분이 불교도이고 불교와 <b>왕실</b>을 매우 존중해요. 왕실을 비판하는 말은 <b>형법 제112조(왕실모독죄)</b>로 무겁게 처벌받으니 농담으로도 하지 않아요.",
    "선교·사역 활동은 비자 종류에 따라 '일'로 볼 수도 있어요. 반드시 <b>현지 협력 교회·단체</b>의 안내에 따라 합법적인 범위에서 해요.",
    "<b>학교에서는</b> 학교 측과 미리 합의한 프로그램만 진행하고, 수업 중에 아이들에게 종교 이야기를 직접 하지 않아요.",
    "아이의 <b>머리를 쓰다듬지 않아요</b>(머리는 가장 귀한 곳). 아이와 단둘이 있지 않고, 얼굴·학교 이름이 나온 사진은 SNS에 올리지 않아요.",
    "상대가 <b>먼저 묻거나 원할 때</b> 간증과 기도를 나눠요. 선물, 돈, 혜택을 대가로 신앙을 권하지 않아요.",
    "이 문장들은 원어민의 검수가 필요해요. 현지에 가면 태국 성도님께 한 번 더 확인해 주세요."
  ],
  weeks: [
  {
    week: 1, title: "인사", icon: "🙏",
    goal: "만나고 헤어질 때 쓰는 기본 인사",
    items: [
      { id: "w01_01", ko: "안녕하세요 (여자)", tx: "สวัสดีค่ะ", pron: "싸왓디 카", roman: "sawatdee kha", note: "두 손을 모으는 '와이'와 함께 인사해요. 하루 중 언제나, 헤어질 때도 써요." },
      { id: "w01_02", ko: "안녕하세요 (남자)", tx: "สวัสดีครับ", pron: "싸왓디 크랍", roman: "sawatdee khrap", voice: "m", note: "남자는 문장 끝에 '크랍'을 붙여요" },
      { id: "w01_03", ko: "잘 지내세요?", tx: "สบายดีไหมคะ", pron: "싸바이 디 마이 카?", roman: "sabai dee mai kha?" },
      { id: "w01_04", ko: "잘 지내요", tx: "สบายดีค่ะ", pron: "싸바이 디 카", roman: "sabai dee kha" },
      { id: "w01_05", ko: "당신은요?", tx: "แล้วคุณล่ะคะ", pron: "래우 쿤 라 카?", roman: "laeo khun la kha?" },
      { id: "w01_06", ko: "감사합니다", tx: "ขอบคุณค่ะ", pron: "컵쿤 카", roman: "khop khun kha" },
      { id: "w01_07", ko: "미안합니다", tx: "ขอโทษค่ะ", pron: "커톳 카", roman: "kho thot kha", note: "'실례합니다'의 뜻으로도 써요" },
      { id: "w01_08", ko: "괜찮아요", tx: "ไม่เป็นไรค่ะ", pron: "마이 뻰 라이 카", roman: "mai pen rai kha", note: "태국 사람들이 가장 많이 쓰는 말 중 하나예요" },
      { id: "w01_09", ko: "네 (여자)", tx: "ค่ะ", pron: "카", roman: "kha" },
      { id: "w01_10", ko: "네 (남자)", tx: "ครับ", pron: "크랍", roman: "khrap", voice: "m" },
      { id: "w01_11", ko: "아니요", tx: "ไม่ใช่ค่ะ", pron: "마이 차이 카", roman: "mai chai kha" },
      { id: "w01_12", ko: "만나서 반갑습니다", tx: "ยินดีที่ได้รู้จักค่ะ", pron: "인디 티 다이 루짝 카", roman: "yindee thi dai ruchak kha" },
      { id: "w01_13", ko: "좋은 아침입니다", tx: "อรุณสวัสดิ์ค่ะ", pron: "아룬 싸왓 카", roman: "arun sawat kha" },
      { id: "w01_14", ko: "안녕히 주무세요", tx: "ราตรีสวัสดิ์ค่ะ", pron: "라뜨리 싸왓 카", roman: "ratri sawat kha" },
      { id: "w01_15", ko: "또 만나요", tx: "แล้วพบกันใหม่ค่ะ", pron: "래우 폽 깐 마이 카", roman: "laeo phop kan mai kha" },
      { id: "w01_16", ko: "조심히 가세요", tx: "เดินทางปลอดภัยนะคะ", pron: "든탕 쁠럿파이 나카", roman: "doen thang plot phai na kha" }
    ]
  },
  {
    week: 2, title: "자기소개", icon: "🙋",
    goal: "이름·나이·출신을 말하고 묻기",
    items: [
      { id: "w02_01", ko: "제 이름은 사라입니다", tx: "ฉันชื่อซาร่าค่ะ", pron: "찬 츠 싸라 카", roman: "chan chue Sara kha", note: "'사라' 자리에 내 이름을. 남자는 '폼(ผม) 츠 ○○ 크랍'" },
      { id: "w02_02", ko: "성함이 어떻게 되세요?", tx: "คุณชื่ออะไรคะ", pron: "쿤 츠 아라이 카?", roman: "khun chue arai kha?" },
      { id: "w02_03", ko: "너 이름이 뭐야? (아이에게)", tx: "หนูชื่ออะไร", pron: "누 츠 아라이?", roman: "nu chue arai?", note: "아이들은 '누(หนู)'라고 다정하게 불러요" },
      { id: "w02_04", ko: "저는 한국에서 왔어요", tx: "ฉันมาจากประเทศเกาหลีค่ะ", pron: "찬 마 짝 쁘라텟 까올리 카", roman: "chan ma chak prathet Kaoli kha" },
      { id: "w02_05", ko: "저는 한국 사람이에요", tx: "ฉันเป็นคนเกาหลีค่ะ", pron: "찬 뻰 콘 까올리 카", roman: "chan pen khon Kaoli kha" },
      { id: "w02_06", ko: "저는 학생이에요", tx: "ฉันเป็นนักเรียนค่ะ", pron: "찬 뻰 낙리안 카", roman: "chan pen nakrian kha", note: "대학생은 '낙쓱싸(นักศึกษา)'" },
      { id: "w02_07", ko: "저는 선생님이에요", tx: "ฉันเป็นครูค่ะ", pron: "찬 뻰 크루 카", roman: "chan pen khru kha" },
      { id: "w02_08", ko: "저는 스무 살이에요", tx: "ฉันอายุยี่สิบปีค่ะ", pron: "찬 아유 이씹 삐 카", roman: "chan ayu yi sip pi kha" },
      { id: "w02_09", ko: "너 몇 살이야?", tx: "หนูอายุเท่าไหร่", pron: "누 아유 타오라이?", roman: "nu ayu thaorai?" },
      { id: "w02_10", ko: "어디에서 오셨어요?", tx: "คุณมาจากไหนคะ", pron: "쿤 마 짝 나이 카?", roman: "khun ma chak nai kha?" },
      { id: "w02_11", ko: "저는 태국어를 조금 해요", tx: "ฉันพูดภาษาไทยได้นิดหน่อยค่ะ", pron: "찬 풋 파사 타이 다이 닛너이 카", roman: "chan phut phasa Thai dai nitnoi kha" },
      { id: "w02_12", ko: "저는 태국어를 배우고 있어요", tx: "ฉันกำลังเรียนภาษาไทยค่ะ", pron: "찬 깜랑 리안 파사 타이 카", roman: "chan kamlang rian phasa Thai kha" },
      { id: "w02_13", ko: "저는 태국이 좋아요", tx: "ฉันชอบประเทศไทยค่ะ", pron: "찬 첩 쁘라텟 타이 카", roman: "chan chop prathet Thai kha" },
      { id: "w02_14", ko: "우리는 한국에서 온 봉사팀이에요", tx: "พวกเราเป็นทีมอาสาสมัครจากเกาหลีค่ะ", pron: "푸억 라오 뻰 팀 아싸싸막 짝 까올리 카", roman: "phuak rao pen thim asasamak chak Kaoli kha" },
      { id: "w02_15", ko: "우리 가족은 다섯 명이에요", tx: "ครอบครัวของฉันมีห้าคนค่ะ", pron: "크럽크루아 컹 찬 미 하 콘 카", roman: "khropkhrua khong chan mi ha khon kha" },
      { id: "w02_16", ko: "너희를 만나서 정말 기뻐", tx: "ดีใจมากที่ได้เจอพวกหนู", pron: "디짜이 막 티 다이 쯔어 푸억 누", roman: "dijai mak thi dai choe phuak nu" }
    ]
  },
  {
    week: 3, title: "숫자와 시간", icon: "🔢",
    goal: "1~10, 큰 수, 시간·날짜 표현",
    items: [
      { id: "w03_01", ko: "하나 (1)", tx: "หนึ่ง", pron: "능", roman: "nueng" },
      { id: "w03_02", ko: "둘 (2)", tx: "สอง", pron: "썽", roman: "song" },
      { id: "w03_03", ko: "셋 (3)", tx: "สาม", pron: "쌈", roman: "sam" },
      { id: "w03_04", ko: "넷 (4)", tx: "สี่", pron: "씨", roman: "si" },
      { id: "w03_05", ko: "다섯 (5)", tx: "ห้า", pron: "하", roman: "ha" },
      { id: "w03_06", ko: "여섯 (6)", tx: "หก", pron: "혹", roman: "hok" },
      { id: "w03_07", ko: "일곱 (7)", tx: "เจ็ด", pron: "쩻", roman: "chet" },
      { id: "w03_08", ko: "여덟 (8)", tx: "แปด", pron: "뺏", roman: "paet" },
      { id: "w03_09", ko: "아홉 (9)", tx: "เก้า", pron: "까오", roman: "kao" },
      { id: "w03_10", ko: "열 (10)", tx: "สิบ", pron: "씹", roman: "sip" },
      { id: "w03_11", ko: "스물 (20)", tx: "ยี่สิบ", pron: "이씹", roman: "yi sip", note: "20만 '썽씹'이 아니라 '이씹'이라고 해요" },
      { id: "w03_12", ko: "백 (100)", tx: "หนึ่งร้อย", pron: "능 러이", roman: "nueng roi" },
      { id: "w03_13", ko: "몇 개예요?", tx: "กี่อันคะ", pron: "끼 안 카?", roman: "ki an kha?" },
      { id: "w03_14", ko: "지금 몇 시예요?", tx: "ตอนนี้กี่โมงแล้วคะ", pron: "떤니 끼 몽 래우 카?", roman: "tonni ki mong laeo kha?" },
      { id: "w03_15", ko: "오늘 / 내일 / 어제", tx: "วันนี้ / พรุ่งนี้ / เมื่อวาน", pron: "완니 / 프룽니 / 므어완", roman: "wanni / phrungni / mueawan" },
      { id: "w03_16", ko: "내일 또 올게요", tx: "พรุ่งนี้จะมาอีกนะคะ", pron: "프룽니 짜 마 익 나카", roman: "phrungni cha ma ik na kha" },
      { id: "w03_17", ko: "다 같이 세어 보자, 하나 둘 셋!", tx: "มานับด้วยกัน หนึ่ง สอง สาม!", pron: "마 납 두어이 깐, 능 썽 쌈!", roman: "ma nap duai kan, nueng song sam!" }
    ]
  },
  {
    week: 4, title: "교실 표현", icon: "🏫",
    goal: "수업·프로그램을 진행할 때 쓰는 말",
    items: [
      { id: "w04_01", ko: "얘들아, 여기 봐", tx: "เด็กๆ ดูตรงนี้", pron: "덱덱, 두 뜨롱 니", roman: "dek dek, du trong ni", note: "'ๆ' 표시는 앞 단어를 한 번 더 읽으라는 뜻이에요" },
      { id: "w04_02", ko: "모두 앉아요", tx: "นั่งลงทุกคน", pron: "낭 롱 툭 콘", roman: "nang long thuk khon" },
      { id: "w04_03", ko: "모두 일어나요", tx: "ลุกขึ้นทุกคน", pron: "룩 큰 툭 콘", roman: "luk khuen thuk khon" },
      { id: "w04_04", ko: "조용히 해요", tx: "เงียบๆ นะ", pron: "응이얍 응이얍 나", roman: "ngiap ngiap na" },
      { id: "w04_05", ko: "잘 들어요", tx: "ฟังดีๆ นะ", pron: "팡 디디 나", roman: "fang di di na" },
      { id: "w04_06", ko: "선생님을 따라 말해요", tx: "พูดตามครูนะ", pron: "풋 땀 크루 나", roman: "phut tam khru na", note: "아이들 앞에서는 나를 '크루(선생님)'라고 불러요" },
      { id: "w04_07", ko: "한 번 더", tx: "อีกครั้ง", pron: "익 크랑", roman: "ik khrang" },
      { id: "w04_08", ko: "손 들어요", tx: "ยกมือขึ้น", pron: "욕 므 큰", roman: "yok mue khuen" },
      { id: "w04_09", ko: "잘했어!", tx: "เก่งมาก!", pron: "껭 막!", roman: "keng mak!", note: "아이들을 칭찬할 때 가장 많이 쓰는 말" },
      { id: "w04_10", ko: "아주 좋아요", tx: "ดีมาก", pron: "디 막", roman: "di mak" },
      { id: "w04_11", ko: "이해했어?", tx: "เข้าใจไหม", pron: "카오짜이 마이?", roman: "khaochai mai?" },
      { id: "w04_12", ko: "질문 있어요?", tx: "มีคำถามไหม", pron: "미 캄탐 마이?", roman: "mi khamtham mai?" },
      { id: "w04_13", ko: "천천히 말해 주세요", tx: "พูดช้าๆ หน่อยค่ะ", pron: "풋 차차 너이 카", roman: "phut cha cha noi kha" },
      { id: "w04_14", ko: "잘 모르겠어요", tx: "ไม่ค่อยเข้าใจค่ะ", pron: "마이 커이 카오짜이 카", roman: "mai khoi khaochai kha" },
      { id: "w04_15", ko: "이것을 태국어로 뭐라고 해요?", tx: "อันนี้ภาษาไทยเรียกว่าอะไรคะ", pron: "안니 파사 타이 리약 와 아라이 카?", roman: "anni phasa Thai riak wa arai kha?" },
      { id: "w04_16", ko: "오늘 수업 끝!", tx: "วันนี้เรียนจบแล้ว!", pron: "완니 리안 쫍 래우!", roman: "wanni rian chop laeo!" }
    ]
  },
  {
    week: 5, title: "놀이와 활동", icon: "⚽",
    goal: "게임·레크리에이션·미술 활동 진행",
    items: [
      { id: "w05_01", ko: "같이 놀자!", tx: "มาเล่นด้วยกัน!", pron: "마 렌 두어이 깐!", roman: "ma len duai kan!" },
      { id: "w05_02", ko: "줄을 서요", tx: "เข้าแถว", pron: "카오 태우", roman: "khao thaeo" },
      { id: "w05_03", ko: "동그랗게 서요", tx: "ยืนเป็นวงกลม", pron: "연 뻰 웡끌롬", roman: "yuen pen wongklom" },
      { id: "w05_04", ko: "두 팀으로 나눠요", tx: "แบ่งเป็นสองทีม", pron: "뱅 뻰 썽 팀", roman: "baeng pen song thim" },
      { id: "w05_05", ko: "시작!", tx: "เริ่ม!", pron: "름!", roman: "roem!" },
      { id: "w05_06", ko: "멈춰!", tx: "หยุด!", pron: "윳!", roman: "yut!" },
      { id: "w05_07", ko: "네 차례야", tx: "ถึงตาหนูแล้ว", pron: "틍 따 누 래우", roman: "thueng ta nu laeo" },
      { id: "w05_08", ko: "박수 치자!", tx: "ปรบมือกัน!", pron: "쁘롭 므 깐!", roman: "prop mue kan!" },
      { id: "w05_09", ko: "너희가 이겼어!", tx: "พวกหนูชนะแล้ว!", pron: "푸억 누 차나 래우!", roman: "phuak nu chana laeo!" },
      { id: "w05_10", ko: "괜찮아, 다시 해 보자", tx: "ไม่เป็นไร ลองใหม่นะ", pron: "마이 뻰 라이, 렁 마이 나", roman: "mai pen rai, long mai na" },
      { id: "w05_11", ko: "조심해!", tx: "ระวัง!", pron: "라왕!", roman: "rawang!" },
      { id: "w05_12", ko: "빨리!", tx: "เร็วๆ!", pron: "레우 레우!", roman: "reo reo!" },
      { id: "w05_13", ko: "천천히", tx: "ช้าๆ", pron: "차 차", roman: "cha cha" },
      { id: "w05_14", ko: "그림 그리자", tx: "มาวาดรูปกัน", pron: "마 왓 룹 깐", roman: "ma wat rup kan" },
      { id: "w05_15", ko: "색칠해요", tx: "ระบายสี", pron: "라바이 씨", roman: "rabai si" },
      { id: "w05_16", ko: "노래 부르자", tx: "มาร้องเพลงกัน", pron: "마 렁 플렝 깐", roman: "ma rong phleng kan" },
      { id: "w05_17", ko: "이건 너를 위한 선물이야", tx: "นี่คือของขวัญสำหรับหนู", pron: "니 크 컹콴 쌈랍 누", roman: "ni khue khongkhwan samrap nu" }
    ]
  },
  {
    week: 6, title: "칭찬과 감정", icon: "💛",
    goal: "아이들을 격려하고 마음을 나누기",
    items: [
      { id: "w06_01", ko: "정말 예쁘다!", tx: "สวยมาก!", pron: "쑤어이 막!", roman: "suai mak!" },
      { id: "w06_02", ko: "정말 멋지다!", tx: "เท่มาก!", pron: "테 막!", roman: "the mak!" },
      { id: "w06_03", ko: "너는 소중해", tx: "หนูมีค่ามากนะ", pron: "누 미 카 막 나", roman: "nu mi kha mak na" },
      { id: "w06_04", ko: "사랑해", tx: "รักนะ", pron: "락 나", roman: "rak na" },
      { id: "w06_05", ko: "너는 할 수 있어!", tx: "หนูทำได้!", pron: "누 탐 다이!", roman: "nu tham dai!" },
      { id: "w06_06", ko: "힘내!", tx: "สู้ๆ!", pron: "쑤 쑤!", roman: "su su!", note: "한국어 '화이팅!'과 같은 말" },
      { id: "w06_07", ko: "기분이 어때?", tx: "รู้สึกยังไงบ้าง", pron: "루쓱 양응아이 방?", roman: "rusuek yangngai bang?" },
      { id: "w06_08", ko: "나는 행복해", tx: "ฉันมีความสุข", pron: "찬 미 쾀쑥", roman: "chan mi khwamsuk" },
      { id: "w06_09", ko: "나는 슬퍼", tx: "ฉันเสียใจ", pron: "찬 씨아짜이", roman: "chan siachai" },
      { id: "w06_10", ko: "피곤해요", tx: "เหนื่อยค่ะ", pron: "느어이 카", roman: "nueai kha" },
      { id: "w06_11", ko: "배고파요", tx: "หิวข้าวค่ะ", pron: "히우 카우 카", roman: "hiu khao kha" },
      { id: "w06_12", ko: "목말라요", tx: "หิวน้ำค่ะ", pron: "히우 남 카", roman: "hiu nam kha" },
      { id: "w06_13", ko: "아파? 어디가 아파?", tx: "เจ็บไหม เจ็บตรงไหน", pron: "쩹 마이? 쩹 뜨롱 나이?", roman: "chep mai? chep trong nai?" },
      { id: "w06_14", ko: "웃는 모습이 예뻐", tx: "ยิ้มสวยจัง", pron: "임 쑤어이 짱", roman: "yim suai chang" },
      { id: "w06_15", ko: "고마워, 친구야", tx: "ขอบใจนะเพื่อน", pron: "컵짜이 나 프언", roman: "khopchai na phuean", note: "친구·아랫사람에게는 '컵쿤' 대신 '컵짜이'" },
      { id: "w06_16", ko: "우리는 친구야", tx: "เราเป็นเพื่อนกัน", pron: "라오 뻰 프언 깐", roman: "rao pen phuean kan" }
    ]
  },
  {
    week: 7, title: "학생과 대화하기", icon: "🎒",
    goal: "학년·꿈·가족·좋아하는 것 묻기",
    items: [
      { id: "w07_01", ko: "몇 학년이야?", tx: "หนูเรียนชั้นอะไร", pron: "누 리안 찬 아라이?", roman: "nu rian chan arai?" },
      { id: "w07_02", ko: "무슨 과목을 좋아해?", tx: "ชอบวิชาอะไร", pron: "첩 위차 아라이?", roman: "chop wicha arai?" },
      { id: "w07_03", ko: "나는 노래하는 걸 좋아해", tx: "ฉันชอบร้องเพลง", pron: "찬 첩 렁 플렝", roman: "chan chop rong phleng" },
      { id: "w07_04", ko: "너의 꿈은 뭐야?", tx: "ความฝันของหนูคืออะไร", pron: "쾀판 컹 누 크 아라이?", roman: "khwamfan khong nu khue arai?" },
      { id: "w07_05", ko: "커서 뭐가 되고 싶어?", tx: "โตขึ้นอยากเป็นอะไร", pron: "또 큰 약 뻰 아라이?", roman: "to khuen yak pen arai?" },
      { id: "w07_06", ko: "저는 의사가 되고 싶어요", tx: "หนูอยากเป็นหมอ", pron: "누 약 뻰 머", roman: "nu yak pen mo", note: "아이가 대답하는 말투예요" },
      { id: "w07_07", ko: "가족이 몇 명이야?", tx: "บ้านหนูมีกี่คน", pron: "반 누 미 끼 콘?", roman: "ban nu mi ki khon?" },
      { id: "w07_08", ko: "형제자매가 있어?", tx: "มีพี่น้องไหม", pron: "미 피넝 마이?", roman: "mi phinong mai?" },
      { id: "w07_09", ko: "집이 어디야?", tx: "บ้านอยู่ที่ไหน", pron: "반 유 티 나이?", roman: "ban yu thi nai?" },
      { id: "w07_10", ko: "학교 좋아?", tx: "ชอบโรงเรียนไหม", pron: "첩 롱리안 마이?", roman: "chop rongrian mai?" },
      { id: "w07_11", ko: "밥 먹었어?", tx: "กินข้าวหรือยัง", pron: "낀 카우 르 양?", roman: "kin khao rue yang?", note: "태국에서도 인사처럼 자주 묻는 말" },
      { id: "w07_12", ko: "응, 먹었어", tx: "กินแล้ว", pron: "낀 래우", roman: "kin laeo" },
      { id: "w07_13", ko: "이건 뭐야?", tx: "นี่อะไร", pron: "니 아라이?", roman: "ni arai?" },
      { id: "w07_14", ko: "같이 사진 찍을래?", tx: "ถ่ายรูปด้วยกันไหม", pron: "타이 룹 두어이 깐 마이?", roman: "thai rup duai kan mai?" },
      { id: "w07_15", ko: "어떤 놀이를 좋아해?", tx: "ชอบเล่นอะไร", pron: "첩 렌 아라이?", roman: "chop len arai?" },
      { id: "w07_16", ko: "선생님, 감사합니다", tx: "ขอบคุณค่ะคุณครู", pron: "컵쿤 카 쿤크루", roman: "khop khun kha khun khru", note: "선생님은 '크루', 높여 부를 때는 '쿤크루'" }
    ]
  },
  {
    week: 8, title: "생활 필수 표현", icon: "🍜",
    goal: "식사·길찾기·쇼핑·도움 요청",
    items: [
      { id: "w08_01", ko: "화장실이 어디예요?", tx: "ห้องน้ำอยู่ที่ไหนคะ", pron: "헝남 유 티 나이 카?", roman: "hongnam yu thi nai kha?" },
      { id: "w08_02", ko: "이거 얼마예요?", tx: "อันนี้เท่าไหร่คะ", pron: "안니 타오라이 카?", roman: "anni thaorai kha?" },
      { id: "w08_03", ko: "조금 깎아 주세요", tx: "ลดหน่อยได้ไหมคะ", pron: "롯 너이 다이 마이 카?", roman: "lot noi dai mai kha?", note: "시장에서는 웃으면서 부드럽게 흥정해요" },
      { id: "w08_04", ko: "물 좀 주세요", tx: "ขอน้ำหน่อยค่ะ", pron: "커 남 너이 카", roman: "kho nam noi kha" },
      { id: "w08_05", ko: "차옌(태국식 밀크티) 한 잔 주세요", tx: "ขอชาเย็นหนึ่งแก้วค่ะ", pron: "커 차옌 능 깨우 카", roman: "kho cha yen nueng kaeo kha", note: "주황색의 달콤한 태국식 아이스 밀크티" },
      { id: "w08_06", ko: "맛있어요", tx: "อร่อยค่ะ", pron: "아러이 카", roman: "aroi kha" },
      { id: "w08_07", ko: "조금만 주세요", tx: "ขอนิดเดียวค่ะ", pron: "커 닛 디여우 카", roman: "kho nit diao kha" },
      { id: "w08_08", ko: "배불러요", tx: "อิ่มแล้วค่ะ", pron: "임 래우 카", roman: "im laeo kha", note: "더 주려고 할 때 정중히 사양하는 말" },
      { id: "w08_09", ko: "맵지 않게 해 주세요", tx: "ไม่เผ็ดนะคะ", pron: "마이 펫 나카", roman: "mai phet na kha" },
      { id: "w08_10", ko: "도와주세요", tx: "ช่วยด้วย!", pron: "추어이 두어이!", roman: "chuai duai!" },
      { id: "w08_11", ko: "여기가 어디예요?", tx: "ที่นี่ที่ไหนคะ", pron: "티니 티 나이 카?", roman: "thini thi nai kha?" },
      { id: "w08_12", ko: "학교에 가고 싶어요", tx: "อยากไปโรงเรียนค่ะ", pron: "약 빠이 롱리안 카", roman: "yak pai rongrian kha" },
      { id: "w08_13", ko: "얼마나 걸려요?", tx: "ใช้เวลานานเท่าไหร่คะ", pron: "차이 웰라 난 타오라이 카?", roman: "chai wela nan thaorai kha?" },
      { id: "w08_14", ko: "몸이 좋지 않아요", tx: "ไม่สบายค่ะ", pron: "마이 싸바이 카", roman: "mai sabai kha" },
      { id: "w08_15", ko: "사진 찍어도 돼요?", tx: "ถ่ายรูปได้ไหมคะ", pron: "타이 룹 다이 마이 카?", roman: "thai rup dai mai kha?" },
      { id: "w08_16", ko: "괜찮아요, 됐어요", tx: "ไม่เป็นไรค่ะ ขอบคุณค่ะ", pron: "마이 뻰 라이 카, 컵쿤 카", roman: "mai pen rai kha, khop khun kha" }
    ]
  },
  {
    week: 9, title: "축복과 기도", icon: "🕊️",
    goal: "축복하고, 기도를 제안하기",
    items: [
      { id: "w09_01", ko: "주 안에서 형제자매 (그리스도인끼리)", tx: "พี่น้องในพระคริสต์", pron: "피넝 나이 프라 크릿", roman: "phinong nai Phra Khrit", mission: true, note: "태국 그리스도인들이 서로를 부르는 말" },
      { id: "w09_02", ko: "하나님이 당신을 축복하시길", tx: "ขอพระเจ้าอวยพรคุณค่ะ", pron: "커 프라짜오 우어이펀 쿤 카", roman: "kho Phrachao uayphon khun kha", mission: true, note: "태국 교회에서는 '프라짜오 우어이펀'을 인사처럼 나눠요" },
      { id: "w09_03", ko: "하나님이 너를 사랑하셔", tx: "พระเจ้ารักหนูนะ", pron: "프라짜오 락 누 나", roman: "Phrachao rak nu na", mission: true },
      { id: "w09_04", ko: "당신을 위해 기도해도 될까요?", tx: "ขอฉันอธิษฐานเผื่อคุณได้ไหมคะ", pron: "커 찬 아팃싸탄 프어 쿤 다이 마이 카?", roman: "kho chan athitthan phuea khun dai mai kha?", mission: true },
      { id: "w09_05", ko: "무엇을 위해 기도할까요?", tx: "อยากให้อธิษฐานเรื่องอะไรคะ", pron: "약 하이 아팃싸탄 르앙 아라이 카?", roman: "yak hai athitthan rueang arai kha?", mission: true },
      { id: "w09_06", ko: "당신을 위해 기도할게요", tx: "ฉันจะอธิษฐานเผื่อคุณค่ะ", pron: "찬 짜 아팃싸탄 프어 쿤 카", roman: "chan cha athitthan phuea khun kha", mission: true },
      { id: "w09_07", ko: "하나님 아버지", tx: "ข้าแต่พระบิดา", pron: "카때 프라 비다", roman: "khatae Phra Bida", mission: true },
      { id: "w09_08", ko: "하나님, 감사합니다", tx: "ขอบคุณพระเจ้า", pron: "컵쿤 프라짜오", roman: "khop khun Phrachao", mission: true },
      { id: "w09_09", ko: "예수님의 이름으로 기도합니다", tx: "อธิษฐานในพระนามพระเยซูคริสต์", pron: "아팃싸탄 나이 프라남 프라예쑤 크릿", roman: "athitthan nai phranam Phra Yesu Khrit", mission: true },
      { id: "w09_10", ko: "아멘", tx: "อาเมน", pron: "아멘", roman: "amen", mission: true },
      { id: "w09_11", ko: "평안이 함께하기를", tx: "ขอให้มีสันติสุขค่ะ", pron: "커 하이 미 싼띠쑥 카", roman: "kho hai mi santisuk kha", mission: true },
      { id: "w09_12", ko: "건강하세요", tx: "ขอให้สุขภาพแข็งแรงนะคะ", pron: "커 하이 쑥카팝 캥랭 나카", roman: "kho hai sukkhaphap khaengraeng na kha" },
      { id: "w09_13", ko: "하나님께서 지켜 주실 거예요", tx: "พระเจ้าจะปกป้องคุณค่ะ", pron: "프라짜오 짜 뽁뻥 쿤 카", roman: "Phrachao cha pokpong khun kha", mission: true },
      { id: "w09_14", ko: "우리는 한국 교회에서 왔어요", tx: "พวกเรามาจากคริสตจักรในเกาหลีค่ะ", pron: "푸억 라오 마 짝 크릿짜착 나이 까올리 카", roman: "phuak rao ma chak khritsachak nai Kaoli kha", mission: true },
      { id: "w09_15", ko: "당신은 하나님 보시기에 소중해요", tx: "คุณมีค่ามากในสายพระเนตรของพระเจ้า", pron: "쿤 미 카 막 나이 싸이 프라넷 컹 프라짜오", roman: "khun mi kha mak nai sai phranet khong Phrachao", mission: true },
      { id: "w09_16", ko: "오늘 함께해서 감사해요", tx: "ขอบคุณที่อยู่ด้วยกันวันนี้ค่ะ", pron: "컵쿤 티 유 두어이 깐 완니 카", roman: "khop khun thi yu duai kan wanni kha" }
    ]
  },
  {
    week: 10, title: "나의 간증", icon: "✨",
    goal: "짧은 간증으로 내 이야기 나누기",
    items: [
      { id: "w10_01", ko: "저는 예수님을 믿어요", tx: "ฉันเชื่อในพระเยซูค่ะ", pron: "찬 츠어 나이 프라예쑤 카", roman: "chan chuea nai Phra Yesu kha", mission: true },
      { id: "w10_02", ko: "예수님은 나의 친구예요", tx: "พระเยซูเป็นเพื่อนของฉัน", pron: "프라예쑤 뻰 프언 컹 찬", roman: "Phra Yesu pen phuean khong chan", mission: true },
      { id: "w10_03", ko: "전에 저는 외롭고 슬펐어요", tx: "เมื่อก่อนฉันเหงาและเศร้า", pron: "므어껀 찬 응아오 래 싸오", roman: "mueakon chan ngao lae sao", mission: true },
      { id: "w10_04", ko: "예수님을 만나고 기쁨이 생겼어요", tx: "พอได้รู้จักพระเยซู ฉันก็มีความสุข", pron: "퍼 다이 루짝 프라예쑤, 찬 꺼 미 쾀쑥", roman: "pho dai ruchak Phra Yesu, chan ko mi khwamsuk", mission: true },
      { id: "w10_05", ko: "예수님은 나를 사랑하세요", tx: "พระเยซูทรงรักฉัน", pron: "프라예쑤 쏭 락 찬", roman: "Phra Yesu song rak chan", mission: true, note: "'쏭(ทรง)'은 하나님·왕에게 쓰는 높임말이에요" },
      { id: "w10_06", ko: "그래서 저는 행복해요", tx: "ฉันจึงมีความสุขค่ะ", pron: "찬 쯩 미 쾀쑥 카", roman: "chan chueng mi khwamsuk kha", mission: true },
      { id: "w10_07", ko: "저는 매일 기도해요", tx: "ฉันอธิษฐานทุกวัน", pron: "찬 아팃싸탄 툭 완", roman: "chan athitthan thuk wan", mission: true },
      { id: "w10_08", ko: "저는 성경을 읽어요", tx: "ฉันอ่านพระคัมภีร์", pron: "찬 안 프라캄피", roman: "chan an phrakhamphi", mission: true },
      { id: "w10_09", ko: "하나님은 기도를 들으세요", tx: "พระเจ้าทรงฟังคำอธิษฐาน", pron: "프라짜오 쏭 팡 캄 아팃싸탄", roman: "Phrachao song fang kham athitthan", mission: true },
      { id: "w10_10", ko: "이 사랑을 나누고 싶어서 왔어요", tx: "ฉันมาเพื่อแบ่งปันความรักนี้ค่ะ", pron: "찬 마 프어 뱅빤 쾀락 니 카", roman: "chan ma phuea baengpan khwamrak ni kha", mission: true },
      { id: "w10_11", ko: "너희를 만나려고 멀리서 왔어", tx: "ครูมาจากที่ไกลเพื่อมาเจอพวกหนู", pron: "크루 마 짝 티 끌라이 프어 마 쯔어 푸억 누", roman: "khru ma chak thi klai phuea ma choe phuak nu" },
      { id: "w10_12", ko: "하나님은 모든 사람을 사랑하세요", tx: "พระเจ้าทรงรักทุกคน", pron: "프라짜오 쏭 락 툭 콘", roman: "Phrachao song rak thuk khon", mission: true },
      { id: "w10_13", ko: "예수님이 나에게 소망을 주셨어요", tx: "พระเยซูประทานความหวังให้ฉัน", pron: "프라예쑤 쁘라탄 쾀왕 하이 찬", roman: "Phra Yesu prathan khwamwang hai chan", mission: true },
      { id: "w10_14", ko: "궁금한 게 있으면 물어보세요", tx: "ถ้าสงสัยอะไร ถามได้นะคะ", pron: "타 쏭싸이 아라이, 탐 다이 나카", roman: "tha songsai arai, tham dai na kha" },
      { id: "w10_15", ko: "당신의 이야기도 듣고 싶어요", tx: "ฉันอยากฟังเรื่องของคุณด้วยค่ะ", pron: "찬 약 팡 르앙 컹 쿤 두어이 카", roman: "chan yak fang rueang khong khun duai kha" },
      { id: "w10_16", ko: "우리는 하나님의 가족이에요", tx: "เราเป็นครอบครัวของพระเจ้า", pron: "라오 뻰 크럽크루아 컹 프라짜오", roman: "rao pen khropkhrua khong Phrachao", mission: true }
    ]
  },
  {
    week: 11, title: "복음의 핵심", icon: "✝️",
    goal: "복음을 짧은 문장으로 순서대로 전하기",
    items: [
      { id: "w11_01", ko: "하나님은 세상을 만드셨어요", tx: "พระเจ้าทรงสร้างโลก", pron: "프라짜오 쏭 쌍 록", roman: "Phrachao song sang lok", mission: true },
      { id: "w11_02", ko: "하나님은 우리를 사랑하세요", tx: "พระเจ้าทรงรักเรา", pron: "프라짜오 쏭 락 라오", roman: "Phrachao song rak rao", mission: true },
      { id: "w11_03", ko: "모든 사람은 죄를 지었어요", tx: "ทุกคนทำบาป", pron: "툭 콘 탐 밥", roman: "thuk khon tham bap", mission: true },
      { id: "w11_04", ko: "죄 때문에 하나님과 멀어졌어요", tx: "บาปทำให้เราห่างไกลจากพระเจ้า", pron: "밥 탐 하이 라오 항끌라이 짝 프라짜오", roman: "bap tham hai rao hangklai chak Phrachao", mission: true },
      { id: "w11_05", ko: "예수님은 하나님의 아들이세요", tx: "พระเยซูเป็นพระบุตรของพระเจ้า", pron: "프라예쑤 뻰 프라붓 컹 프라짜오", roman: "Phra Yesu pen Phrabut khong Phrachao", mission: true },
      { id: "w11_06", ko: "예수님은 우리를 위해 십자가에서 죽으셨어요", tx: "พระเยซูสิ้นพระชนม์บนไม้กางเขนเพื่อเรา", pron: "프라예쑤 씬 프라촌 본 마이깡켄 프어 라오", roman: "Phra Yesu sin phrachon bon maikangkhen phuea rao", mission: true },
      { id: "w11_07", ko: "예수님은 다시 살아나셨어요", tx: "พระเยซูทรงฟื้นคืนพระชนม์", pron: "프라예쑤 쏭 픈 큰 프라촌", roman: "Phra Yesu song fuen khuen phrachon", mission: true },
      { id: "w11_08", ko: "하나님은 당신을 용서하세요", tx: "พระเจ้าทรงยกโทษให้คุณ", pron: "프라짜오 쏭 욕톳 하이 쿤", roman: "Phrachao song yokthot hai khun", mission: true },
      { id: "w11_09", ko: "예수님을 믿는 사람은 구원을 받아요", tx: "ทุกคนที่เชื่อในพระเยซูจะได้รับความรอด", pron: "툭 콘 티 츠어 나이 프라예쑤 짜 다이 랍 쾀럿", roman: "thuk khon thi chuea nai Phra Yesu cha dai rap khwamrot", mission: true },
      { id: "w11_10", ko: "구원은 하나님의 선물이에요", tx: "ความรอดเป็นของประทานจากพระเจ้า", pron: "쾀럿 뻰 컹 쁘라탄 짝 프라짜오", roman: "khwamrot pen khong prathan chak Phrachao", mission: true },
      { id: "w11_11", ko: "영원한 생명", tx: "ชีวิตนิรันดร์", pron: "치윗 니란", roman: "chiwit niran", mission: true },
      { id: "w11_12", ko: "예수님은 길이요 진리요 생명이세요", tx: "พระเยซูทรงเป็นทางนั้น เป็นความจริง และเป็นชีวิต", pron: "프라예쑤 쏭 뻰 탕 난, 뻰 쾀찡, 래 뻰 치윗", roman: "Phra Yesu song pen thang nan, pen khwamching, lae pen chiwit", mission: true },
      { id: "w11_13", ko: "예수님은 항상 우리와 함께하세요", tx: "พระเยซูทรงอยู่กับเราเสมอ", pron: "프라예쑤 쏭 유 깝 라오 싸머", roman: "Phra Yesu song yu kap rao samoe", mission: true },
      { id: "w11_14", ko: "예수님은 당신을 기다리고 계세요", tx: "พระเยซูทรงรอคุณอยู่", pron: "프라예쑤 쏭 러 쿤 유", roman: "Phra Yesu song ro khun yu", mission: true },
      { id: "w11_15", ko: "원하시면 함께 기도할 수 있어요", tx: "ถ้าคุณต้องการ เราอธิษฐานด้วยกันได้ค่ะ", pron: "타 쿤 떵깐, 라오 아팃싸탄 두어이 깐 다이 카", roman: "tha khun tongkan, rao athitthan duai kan dai kha", mission: true },
      { id: "w11_16", ko: "가까운 교회를 알려 드릴 수 있어요", tx: "ฉันแนะนำคริสตจักรใกล้ๆ ให้ได้ค่ะ", pron: "찬 내남 크릿짜착 끌라이 끌라이 하이 다이 카", roman: "chan naenam khritsachak klai klai hai dai kha", mission: true }
    ]
  },
  {
    week: 12, title: "성경 말씀과 작별", icon: "📖",
    goal: "암송 구절과 마지막 날 인사",
    items: [
      { id: "w12_01", ko: "하나님은 사랑이십니다 (요한일서 4:8)", tx: "พระเจ้าทรงเป็นความรัก", pron: "프라짜오 쏭 뻰 쾀락", roman: "Phrachao song pen khwamrak", mission: true, verse: true },
      { id: "w12_02", ko: "여호와는 나의 목자시니 내게 부족함이 없으리로다 (시편 23:1)", tx: "พระยาห์เวห์ทรงเป็นผู้เลี้ยงดูข้าพเจ้า ข้าพเจ้าจะไม่ขาดสิ่งใด", pron: "프라야웨 쏭 뻰 푸 리앙두 카파짜오, 카파짜오 짜 마이 캇 씽 다이", roman: "Phra Yahwe song pen phu liangdu khaphachao, khaphachao cha mai khat sing dai", mission: true, verse: true, note: "현재 성경(THSV)은 '프라야웨', 옛 성경은 '프라예호와'라고 해요" },
      { id: "w12_03", ko: "예수께서 이르시되 내가 곧 길이요 진리요 생명이니 (요한복음 14:6)", tx: "พระเยซูตรัสว่า \"เราเป็นทางนั้น เป็นความจริง และเป็นชีวิต\"", pron: "프라예쑤 뜨랏 와, 라오 뻰 탕 난, 뻰 쾀찡, 래 뻰 치윗", roman: "Phra Yesu trat wa, rao pen thang nan, pen khwamching, lae pen chiwit", mission: true, verse: true },
      { id: "w12_04", ko: "수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라 (마태복음 11:28)", tx: "บรรดาผู้ที่เหน็ดเหนื่อยและแบกภาระหนัก จงมาหาเรา และเราจะให้พวกท่านได้หยุดพัก", pron: "반다 푸 티 넷느어이 래 백 파라 낙, 쫑 마 하 라오, 래 라오 짜 하이 푸억 탄 다이 윳 팍", roman: "banda phu thi netnueai lae baek phara nak, chong ma ha rao, lae rao cha hai phuak than dai yut phak", mission: true, verse: true },
      { id: "w12_05", ko: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라 (빌립보서 4:13)", tx: "ข้าพเจ้าทำทุกสิ่งได้โดยพระองค์ผู้ทรงเสริมกำลังข้าพเจ้า", pron: "카파짜오 탐 툭 씽 다이 도이 프라옹 푸 쏭 썸 깜랑 카파짜오", roman: "khaphachao tham thuk sing dai doi Phra-ong phu song soem kamlang khaphachao", mission: true, verse: true },
      { id: "w12_06", ko: "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라 (요한복음 3:16)", tx: "เพราะว่าพระเจ้าทรงรักโลก จนได้ประทานพระบุตรองค์เดียวของพระองค์ เพื่อทุกคนที่วางใจในพระบุตรนั้นจะไม่พินาศ แต่มีชีวิตนิรันดร์", pron: "프러와 프라짜오 쏭 락 록, 쫀 다이 쁘라탄 프라붓 옹 디여우 컹 프라옹, 프어 툭 콘 티 왕짜이 나이 프라붓 난 짜 마이 피낫, 때 미 치윗 니란", roman: "phro wa Phrachao song rak lok, chon dai prathan Phrabut ong diao khong Phra-ong, phuea thuk khon thi wangchai nai Phrabut nan cha mai phinat, tae mi chiwit niran", mission: true, verse: true, note: "가장 긴 문장! 쉼표 단위로 끊어서 외워 보세요." },
      { id: "w12_07", ko: "너희를 절대 잊지 않을게", tx: "ครูจะไม่ลืมพวกหนูเลย", pron: "크루 짜 마이 름 푸억 누 러이", roman: "khru cha mai luem phuak nu loei" },
      { id: "w12_08", ko: "보고 싶을 거야", tx: "ครูจะคิดถึงพวกหนูนะ", pron: "크루 짜 킷틍 푸억 누 나", roman: "khru cha khitthueng phuak nu na" },
      { id: "w12_09", ko: "너희를 위해 기도할게", tx: "ครูจะอธิษฐานเผื่อพวกหนูนะ", pron: "크루 짜 아팃싸탄 프어 푸억 누 나", roman: "khru cha athitthan phuea phuak nu na", mission: true },
      { id: "w12_10", ko: "너희와 함께한 시간이 정말 즐거웠어", tx: "ช่วงเวลากับพวกหนูสนุกมาก", pron: "추엉 웰라 깝 푸억 누 싸눅 막", roman: "chuang wela kap phuak nu sanuk mak" },
      { id: "w12_11", ko: "공부 열심히 해", tx: "ตั้งใจเรียนนะ", pron: "땅짜이 리안 나", roman: "tangchai rian na" },
      { id: "w12_12", ko: "건강하게 지내", tx: "รักษาสุขภาพนะ", pron: "락싸 쑥카팝 나", roman: "raksa sukkhaphap na" },
      { id: "w12_13", ko: "선생님들, 정말 감사했습니다", tx: "ขอบคุณคุณครูทุกท่านมากค่ะ", pron: "컵쿤 쿤크루 툭 탄 막 카", roman: "khop khun khun khru thuk than mak kha" },
      { id: "w12_14", ko: "하나님이 너희를 축복하시길", tx: "ขอพระเจ้าอวยพรพวกหนูนะ", pron: "커 프라짜오 우어이펀 푸억 누 나", roman: "kho Phrachao uayphon phuak nu na", mission: true },
      { id: "w12_15", ko: "언젠가 다시 만나자", tx: "สักวันเราจะได้เจอกันอีก", pron: "싹 완 라오 짜 다이 쯔어 깐 익", roman: "sak wan rao cha dai choe kan ik" },
      { id: "w12_16", ko: "잘 있어, 안녕!", tx: "ลาก่อนนะ!", pron: "라 껀 나!", roman: "la kon na!" }
    ]
  }
  ]
};
