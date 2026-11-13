/*
 * 캄보디아어(크메르어) 학습 데이터 (12주 과정)
 * 문장 형식: { id, ko(한국어), tx(크메르어), pron(한글 발음), roman(로마자), note(설명, 선택), mission(전도 문구면 true), voice:"m"(남성 음성) }
 *   - id 가 음성 파일 이름이 됩니다: audio/km/<id>.mp3
 * ⚠️ 모든 문장은 원어민(캄보디아인 성도/선교사님) 검수가 필요합니다.
 *    특히 신앙 용어와 성경 구절은 현지 교회에서 쓰는 성경(KSV 등) 표현과 대조해 주세요.
 */
window.COURSES = window.COURSES || {};
window.COURSES.km = {
  code: "km", order: 2, name: "캄보디아어", country: "캄보디아", flag: "🇰🇭", appName: "쑤어스다이 캄보디아어",
  heroTx: "សួស្តី! សូមព្រះប្រទានពរ", heroSub: "쑤어스다이! — 오늘도 캄보디아의 아이들을 위해 한 걸음",
  praise: "ពូកែណាស់!", praisePron: "뿌까에 나", ttsLang: "km",
  voice: "km-KH-SreymomNeural", voiceM: "km-KH-PisethNeural",
  guide: [
    "캄보디아 헌법은 종교의 자유를 보장하지만 <b>불교가 국교</b>예요. 종교부 지침(2007)은 <b>집집마다 찾아가 전도하는 것</b>과 <b>돈·물건을 대가로 신앙을 권하는 것</b>을 금지하고 있어요.",
    "모든 활동은 <b>정부에 등록된 현지 교회·단체</b>와 함께, 그들이 정한 범위 안에서 해요.",
    "<b>학교에서는</b> 학교 측과 미리 합의한 프로그램만 진행하고, 수업 중에 아이들에게 종교 이야기를 직접 하지 않아요.",
    "캄보디아는 <b>아동 보호</b>에 특히 민감해요. 아이와 단둘이 있지 않고, 아이들의 얼굴·학교 이름이 나온 사진을 SNS에 올리지 않아요.",
    "상대가 <b>먼저 묻거나 원할 때</b> 간증과 기도를 나눠요. 선물, 돈, 혜택을 대가로 신앙을 권하지 않아요.",
    "이 문장들은 원어민의 검수가 필요해요. 현지에 가면 캄보디아 성도님께 한 번 더 확인해 주세요."
  ],
  weeks: [
  {
    week: 1, title: "인사", icon: "🙏",
    goal: "만나고 헤어질 때 쓰는 기본 인사",
    items: [
      { id: "w01_01", ko: "안녕 (친구·아이들에게)", tx: "សួស្តី", pron: "쑤어스다이", roman: "suosdei" },
      { id: "w01_02", ko: "안녕하세요 (공손하게)", tx: "ជំរាបសួរ", pron: "쭘리읍 쑤어", roman: "chumreap suor", note: "두 손을 모아 올리는 '삼페아' 인사와 함께해요. 손이 높을수록 더 공손해요." },
      { id: "w01_03", ko: "잘 지내세요?", tx: "សុខសប្បាយជាទេ?", pron: "쏙 써바이 찌어 떼?", roman: "sok sabay chea te?" },
      { id: "w01_04", ko: "잘 지내요", tx: "ខ្ញុំសុខសប្បាយជាទេ", pron: "크뇸 쏙 써바이 찌어 떼", roman: "khnhom sok sabay chea te" },
      { id: "w01_05", ko: "당신은요?", tx: "ចុះអ្នកវិញ?", pron: "쪼 네악 빈?", roman: "choh neak vinh?" },
      { id: "w01_06", ko: "감사합니다", tx: "អរគុណ", pron: "어꾼", roman: "arkun", note: "더 고마울 때는 '어꾼 쯔라은(អរគុណច្រើន)'" },
      { id: "w01_07", ko: "미안합니다", tx: "សុំទោស", pron: "쏨 또", roman: "som tos", note: "'실례합니다'의 뜻으로도 써요" },
      { id: "w01_08", ko: "괜찮아요", tx: "មិនអីទេ", pron: "먼 아이 떼", roman: "min ey te" },
      { id: "w01_09", ko: "네 (남자가 대답할 때)", tx: "បាទ", pron: "밧", roman: "baat", voice: "m", note: "남자는 '밧', 여자는 '짜'라고 대답해요" },
      { id: "w01_10", ko: "네 (여자가 대답할 때)", tx: "ចាស", pron: "짜", roman: "chas" },
      { id: "w01_11", ko: "아니요", tx: "ទេ", pron: "떼", roman: "te" },
      { id: "w01_12", ko: "만나서 반갑습니다", tx: "រីករាយដែលបានជួបអ្នក", pron: "릭리어이 다엘 반 쭈읍 네악", roman: "rikreay del ban chuob neak" },
      { id: "w01_13", ko: "좋은 아침입니다", tx: "អរុណសួស្តី", pron: "아로운 쑤어스다이", roman: "arun suosdei" },
      { id: "w01_14", ko: "안녕히 주무세요", tx: "រាត្រីសួស្តី", pron: "리어뜨레이 쑤어스다이", roman: "reatrey suosdei" },
      { id: "w01_15", ko: "또 만나요", tx: "ជួបគ្នាពេលក្រោយ", pron: "쭈읍 크니어 뻴 끄라오이", roman: "chuob knea pel kraoy" },
      { id: "w01_16", ko: "조심히 가세요", tx: "សូមធ្វើដំណើរដោយសុវត្ថិភាព", pron: "쏨 트어 덤나어 다오이 쏘왓테이피읍", roman: "som thveu domnaeur daoy sovatthepheap" }
    ]
  },
  {
    week: 2, title: "자기소개", icon: "🙋",
    goal: "이름·나이·출신을 말하고 묻기",
    items: [
      { id: "w02_01", ko: "제 이름은 사라입니다", tx: "ខ្ញុំឈ្មោះសារ៉ា", pron: "크뇸 츠모어 사라", roman: "khnhom chmuoh Sara", note: "'사라' 자리에 내 이름을 넣어요" },
      { id: "w02_02", ko: "성함이 어떻게 되세요?", tx: "តើអ្នកឈ្មោះអ្វី?", pron: "따어 네악 츠모어 아이?", roman: "tae neak chmuoh avei?" },
      { id: "w02_03", ko: "너 이름이 뭐야? (아이에게)", tx: "ប្អូនឈ្មោះអ្វី?", pron: "버운 츠모어 아이?", roman: "p'oun chmuoh avei?", note: "아이들은 '버운(동생)'이라고 다정하게 불러요" },
      { id: "w02_04", ko: "저는 한국에서 왔어요", tx: "ខ្ញុំមកពីប្រទេសកូរ៉េ", pron: "크뇸 목 삐 쁘러떼 꼬레", roman: "khnhom mok pi prateh Kore" },
      { id: "w02_05", ko: "저는 한국 사람이에요", tx: "ខ្ញុំជាជនជាតិកូរ៉េ", pron: "크뇸 찌어 쭌찌엇 꼬레", roman: "khnhom chea chuncheat Kore" },
      { id: "w02_06", ko: "저는 학생이에요", tx: "ខ្ញុំជាសិស្ស", pron: "크뇸 찌어 섯", roman: "khnhom chea ses" },
      { id: "w02_07", ko: "저는 선생님이에요", tx: "ខ្ញុំជាគ្រូបង្រៀន", pron: "크뇸 찌어 끄루 벙리언", roman: "khnhom chea kru bangrien" },
      { id: "w02_08", ko: "저는 스무 살이에요", tx: "ខ្ញុំអាយុម្ភៃឆ្នាំ", pron: "크뇸 아유 머페이 츠남", roman: "khnhom ayu mphey chhnam" },
      { id: "w02_09", ko: "너 몇 살이야?", tx: "ប្អូនអាយុប៉ុន្មានឆ្នាំ?", pron: "버운 아유 뽄만 츠남?", roman: "p'oun ayu ponman chhnam?" },
      { id: "w02_10", ko: "어디에서 오셨어요?", tx: "តើអ្នកមកពីណា?", pron: "따어 네악 목 삐 나?", roman: "tae neak mok pi na?" },
      { id: "w02_11", ko: "저는 캄보디아어를 조금 해요", tx: "ខ្ញុំចេះនិយាយភាសាខ្មែរបន្តិចបន្តួច", pron: "크뇸 째 니예이 피어싸 크마에 번뗏 번뚜잇", roman: "khnhom cheh niyeay phiesa Khmer bantech bantuoch", note: "캄보디아어는 '피어싸 크마에(크메르어)'라고 해요" },
      { id: "w02_12", ko: "저는 캄보디아어를 배우고 있어요", tx: "ខ្ញុំកំពុងរៀនភាសាខ្មែរ", pron: "크뇸 껌뽕 리언 피어싸 크마에", roman: "khnhom kampung rien phiesa Khmer" },
      { id: "w02_13", ko: "저는 캄보디아가 좋아요", tx: "ខ្ញុំស្រឡាញ់ប្រទេសកម្ពុជា", pron: "크뇸 쓰럴라인 쁘러떼 깜뿌찌어", roman: "khnhom srolanh prateh Kampuchea" },
      { id: "w02_14", ko: "우리는 한국에서 온 봉사팀이에요", tx: "យើងជាក្រុមស្ម័គ្រចិត្តមកពីកូរ៉េ", pron: "여엉 찌어 끄롬 스머잇 목 삐 꼬레", roman: "yeung chea krom smakchet mok pi Kore" },
      { id: "w02_15", ko: "우리 가족은 다섯 명이에요", tx: "គ្រួសារខ្ញុំមានប្រាំនាក់", pron: "끄루어싸 크뇸 미언 브람 넥", roman: "kruosar khnhom mean pram neak" },
      { id: "w02_16", ko: "너희를 만나서 정말 기뻐", tx: "ខ្ញុំសប្បាយចិត្តណាស់ដែលបានជួបប្អូនៗ", pron: "크뇸 써바이 쩟 나 다엘 반 쭈읍 버운 버운", roman: "khnhom sabay chet nas del ban chuob p'oun p'oun", note: "'ៗ' 표시는 앞 단어를 한 번 더 읽으라는 뜻이에요" }
    ]
  },
  {
    week: 3, title: "숫자와 시간", icon: "🔢",
    goal: "1~10, 큰 수, 시간·날짜 표현",
    items: [
      { id: "w03_01", ko: "하나 (1)", tx: "មួយ", pron: "무어이", roman: "muoy" },
      { id: "w03_02", ko: "둘 (2)", tx: "ពីរ", pron: "삐", roman: "pi" },
      { id: "w03_03", ko: "셋 (3)", tx: "បី", pron: "버이", roman: "bei" },
      { id: "w03_04", ko: "넷 (4)", tx: "បួន", pron: "부언", roman: "buon" },
      { id: "w03_05", ko: "다섯 (5)", tx: "ប្រាំ", pron: "브람", roman: "pram" },
      { id: "w03_06", ko: "여섯 (6)", tx: "ប្រាំមួយ", pron: "브람 무어이", roman: "pram muoy", note: "6~9는 '5+1, 5+2…'처럼 만들어요" },
      { id: "w03_07", ko: "일곱 (7)", tx: "ប្រាំពីរ", pron: "브람 삐", roman: "pram pi" },
      { id: "w03_08", ko: "여덟 (8)", tx: "ប្រាំបី", pron: "브람 버이", roman: "pram bei" },
      { id: "w03_09", ko: "아홉 (9)", tx: "ប្រាំបួន", pron: "브람 부언", roman: "pram buon" },
      { id: "w03_10", ko: "열 (10)", tx: "ដប់", pron: "덥", roman: "dop" },
      { id: "w03_11", ko: "스물 (20)", tx: "ម្ភៃ", pron: "머페이", roman: "mphey" },
      { id: "w03_12", ko: "백 (100)", tx: "មួយរយ", pron: "무어이 로이", roman: "muoy roy" },
      { id: "w03_13", ko: "몇 개예요? / 얼마예요?", tx: "ប៉ុន្មាន?", pron: "뽄만?", roman: "ponman?", note: "개수와 값을 물을 때 모두 써요" },
      { id: "w03_14", ko: "지금 몇 시예요?", tx: "ឥឡូវនេះម៉ោងប៉ុន្មាន?", pron: "아일러우 니 마옹 뽄만?", roman: "eiloveh maong ponman?" },
      { id: "w03_15", ko: "오늘 / 내일 / 어제", tx: "ថ្ងៃនេះ / ថ្ងៃស្អែក / ម្សិលមិញ", pron: "틍아이 니 / 틍아이 써아엑 / 머썰 민", roman: "thngai nih / thngai saek / msel minh" },
      { id: "w03_16", ko: "내일 또 올게요", tx: "ថ្ងៃស្អែកខ្ញុំនឹងមកម្តងទៀត", pron: "틍아이 써아엑 크뇸 능 목 머덩 띠엇", roman: "thngai saek khnhom nueng mok mdong tiet" },
      { id: "w03_17", ko: "다 같이 세어 보자, 하나 둘 셋!", tx: "តោះរាប់ទាំងអស់គ្នា មួយ ពីរ បី!", pron: "따 로읍 띠엉 아 크니어, 무어이 삐 버이!", roman: "tos roap teang os knea, muoy pi bei!" }
    ]
  },
  {
    week: 4, title: "교실 표현", icon: "🏫",
    goal: "수업·프로그램을 진행할 때 쓰는 말",
    items: [
      { id: "w04_01", ko: "얘들아, 여기 봐", tx: "ប្អូនៗ មើលមកនេះ", pron: "버운 버운, 멀 목 니", roman: "p'oun p'oun, meul mok nih" },
      { id: "w04_02", ko: "모두 앉아요", tx: "អង្គុយចុះទាំងអស់គ្នា", pron: "엉꾸이 쪼 띠엉 아 크니어", roman: "angkuy choh teang os knea" },
      { id: "w04_03", ko: "모두 일어나요", tx: "ក្រោកឈរទាំងអស់គ្នា", pron: "끄라옥 초 띠엉 아 크니어", roman: "kraok chhor teang os knea" },
      { id: "w04_04", ko: "조용히 해요", tx: "សូមស្ងាត់", pron: "쏨 스응앗", roman: "som sngat" },
      { id: "w04_05", ko: "잘 들어요", tx: "ស្តាប់ឱ្យល្អ", pron: "스답 아오이 러어", roman: "sdap aoy l'o" },
      { id: "w04_06", ko: "나를 따라 말해요", tx: "និយាយតាមខ្ញុំ", pron: "니예이 땀 크뇸", roman: "niyeay tam khnhom" },
      { id: "w04_07", ko: "한 번 더", tx: "ម្តងទៀត", pron: "머덩 띠엇", roman: "mdong tiet" },
      { id: "w04_08", ko: "손 들어요", tx: "លើកដៃឡើង", pron: "러억 다이 라엉", roman: "leuk dai laeung" },
      { id: "w04_09", ko: "잘했어!", tx: "ពូកែណាស់!", pron: "뿌까에 나!", roman: "pukae nas!", note: "아이들을 칭찬할 때 가장 많이 쓰는 말" },
      { id: "w04_10", ko: "아주 좋아요", tx: "ល្អណាស់", pron: "러어 나", roman: "l'o nas" },
      { id: "w04_11", ko: "이해했어?", tx: "យល់ទេ?", pron: "열 떼?", roman: "yol te?" },
      { id: "w04_12", ko: "질문 있어요?", tx: "មានសំណួរទេ?", pron: "미언 썸누어 떼?", roman: "mean samnuor te?" },
      { id: "w04_13", ko: "천천히 말해 주세요", tx: "សូមនិយាយយឺតៗ", pron: "쏨 니예이 이읏 이읏", roman: "som niyeay yeut yeut" },
      { id: "w04_14", ko: "잘 모르겠어요", tx: "ខ្ញុំមិនសូវយល់ទេ", pron: "크뇸 먼 쏘우 열 떼", roman: "khnhom min sov yol te" },
      { id: "w04_15", ko: "이것을 캄보디아어로 뭐라고 해요?", tx: "នេះភាសាខ្មែរហៅថាអ្វី?", pron: "니 피어싸 크마에 하우 타 아이?", roman: "nih phiesa Khmer hav tha avei?" },
      { id: "w04_16", ko: "오늘 수업 끝!", tx: "ថ្ងៃនេះរៀនចប់ហើយ!", pron: "틍아이 니 리언 쩝 하이!", roman: "thngai nih rien chob haey!" }
    ]
  },
  {
    week: 5, title: "놀이와 활동", icon: "⚽",
    goal: "게임·레크리에이션·미술 활동 진행",
    items: [
      { id: "w05_01", ko: "같이 놀자!", tx: "តោះលេងជាមួយគ្នា!", pron: "따 렝 찌어 무어이 크니어!", roman: "tos leng chea muoy knea!" },
      { id: "w05_02", ko: "줄을 서요", tx: "តម្រង់ជួរ", pron: "덤롱 쭈어", roman: "tamrong chuor" },
      { id: "w05_03", ko: "동그랗게 서요", tx: "ឈរជារង្វង់", pron: "초 찌어 롱붕", roman: "chhor chea rongvong" },
      { id: "w05_04", ko: "두 팀으로 나눠요", tx: "ចែកជាពីរក្រុម", pron: "짜엑 찌어 삐 끄롬", roman: "chaek chea pi krom" },
      { id: "w05_05", ko: "시작!", tx: "ចាប់ផ្តើម!", pron: "짭 프다엄!", roman: "chab phdaeum!" },
      { id: "w05_06", ko: "멈춰!", tx: "ឈប់!", pron: "춥!", roman: "chhob!" },
      { id: "w05_07", ko: "네 차례야", tx: "ដល់វេនប្អូនហើយ", pron: "덜 웬 버운 하이", roman: "dol ven p'oun haey" },
      { id: "w05_08", ko: "박수 치자!", tx: "តោះទះដៃ!", pron: "따 띠어 다이!", roman: "tos teah dai!" },
      { id: "w05_09", ko: "너희가 이겼어!", tx: "ប្អូនៗឈ្នះហើយ!", pron: "버운 버운 츠네아 하이!", roman: "p'oun p'oun chhneah haey!" },
      { id: "w05_10", ko: "괜찮아, 다시 해 보자", tx: "មិនអីទេ តោះសាកម្តងទៀត", pron: "먼 아이 떼, 따 싹 머덩 띠엇", roman: "min ey te, tos sak mdong tiet" },
      { id: "w05_11", ko: "조심해!", tx: "ប្រយ័ត្ន!", pron: "쁘러얏!", roman: "prayat!" },
      { id: "w05_12", ko: "빨리!", tx: "លឿនៗ!", pron: "르언 르언!", roman: "lueun lueun!" },
      { id: "w05_13", ko: "천천히", tx: "យឺតៗ", pron: "이읏 이읏", roman: "yeut yeut" },
      { id: "w05_14", ko: "그림 그리자", tx: "តោះគូររូប", pron: "따 꾸 룹", roman: "tos kou rup" },
      { id: "w05_15", ko: "색칠해요", tx: "លាបពណ៌", pron: "리읍 뽀어", roman: "leap poa" },
      { id: "w05_16", ko: "노래 부르자", tx: "តោះច្រៀងចម្រៀង", pron: "따 쯔리엉 쩜리엉", roman: "tos chrieng chamrieng" },
      { id: "w05_17", ko: "이건 너를 위한 선물이야", tx: "នេះជាកាដូសម្រាប់ប្អូន", pron: "니 찌어 까도 썸랍 버운", roman: "nih chea kado samrab p'oun" }
    ]
  },
  {
    week: 6, title: "칭찬과 감정", icon: "💛",
    goal: "아이들을 격려하고 마음을 나누기",
    items: [
      { id: "w06_01", ko: "정말 예쁘다!", tx: "ស្អាតណាស់!", pron: "써앗 나!", roman: "s'at nas!" },
      { id: "w06_02", ko: "정말 멋지다!", tx: "ឡូយណាស់!", pron: "로이 나!", roman: "loy nas!", note: "아이들과 젊은 층이 즐겨 쓰는 '멋지다'" },
      { id: "w06_03", ko: "너는 소중해", tx: "ប្អូនមានតម្លៃណាស់", pron: "버운 미언 덤라이 나", roman: "p'oun mean tamlai nas" },
      { id: "w06_04", ko: "사랑해", tx: "ខ្ញុំស្រឡាញ់ប្អូន", pron: "크뇸 쓰럴라인 버운", roman: "khnhom srolanh p'oun" },
      { id: "w06_05", ko: "너는 할 수 있어!", tx: "ប្អូនអាចធ្វើបាន!", pron: "버운 앗 트어 반!", roman: "p'oun ach thveu ban!" },
      { id: "w06_06", ko: "힘내!", tx: "ខំប្រឹងឡើង!", pron: "콤 쁘릉 라엉!", roman: "khom proeng laeung!" },
      { id: "w06_07", ko: "기분이 어때?", tx: "ប្អូនមានអារម្មណ៍យ៉ាងម៉េច?", pron: "버운 미언 아롬 양 멋?", roman: "p'oun mean aram yang mech?" },
      { id: "w06_08", ko: "나는 행복해", tx: "ខ្ញុំសប្បាយចិត្ត", pron: "크뇸 써바이 쩟", roman: "khnhom sabay chet" },
      { id: "w06_09", ko: "나는 슬퍼", tx: "ខ្ញុំកើតទុក្ខ", pron: "크뇸 까엇 똑", roman: "khnhom kaeut tuk" },
      { id: "w06_10", ko: "피곤해요", tx: "ខ្ញុំហត់", pron: "크뇸 홋", roman: "khnhom hot" },
      { id: "w06_11", ko: "배고파요", tx: "ខ្ញុំឃ្លាន", pron: "크뇸 클리언", roman: "khnhom khlean" },
      { id: "w06_12", ko: "목말라요", tx: "ខ្ញុំស្រេកទឹក", pron: "크뇸 쓰렉 뜩", roman: "khnhom srek tuk" },
      { id: "w06_13", ko: "아파? 어디가 아파?", tx: "ឈឺទេ? ឈឺត្រង់ណា?", pron: "츠 떼? 츠 뜨롱 나?", roman: "chheu te? chheu trong na?" },
      { id: "w06_14", ko: "웃는 모습이 예뻐", tx: "ប្អូនញញឹមស្អាតណាស់", pron: "버운 뇨념 써앗 나", roman: "p'oun nhonhim s'at nas" },
      { id: "w06_15", ko: "고마워, 친구야", tx: "អរគុណ មិត្តភក្តិ", pron: "어꾼, 멋페악", roman: "arkun, mitpheak" },
      { id: "w06_16", ko: "우리는 친구야", tx: "យើងជាមិត្តភក្តិ", pron: "여엉 찌어 멋페악", roman: "yeung chea mitpheak" }
    ]
  },
  {
    week: 7, title: "학생과 대화하기", icon: "🎒",
    goal: "학년·꿈·가족·좋아하는 것 묻기",
    items: [
      { id: "w07_01", ko: "몇 학년이야?", tx: "ប្អូនរៀនថ្នាក់ទីប៉ុន្មាន?", pron: "버운 리언 트낙 띠 뽄만?", roman: "p'oun rien thnak ti ponman?" },
      { id: "w07_02", ko: "무슨 과목을 좋아해?", tx: "ប្អូនចូលចិត្តមុខវិជ្ជាអ្វី?", pron: "버운 쫄쩟 목 위찌어 아이?", roman: "p'oun chol chet mukh vichea avei?" },
      { id: "w07_03", ko: "나는 노래하는 걸 좋아해", tx: "ខ្ញុំចូលចិត្តច្រៀង", pron: "크뇸 쫄쩟 쯔리엉", roman: "khnhom chol chet chrieng" },
      { id: "w07_04", ko: "너의 꿈은 뭐야?", tx: "ក្តីស្រមៃរបស់ប្អូនជាអ្វី?", pron: "끄다이 쓰러마이 로버 버운 찌어 아이?", roman: "kdei sramai robos p'oun chea avei?" },
      { id: "w07_05", ko: "커서 뭐가 되고 싶어?", tx: "ធំឡើងប្អូនចង់ធ្វើអ្វី?", pron: "톰 라엉 버운 쩡 트어 아이?", roman: "thom laeung p'oun chang thveu avei?" },
      { id: "w07_06", ko: "저는 의사가 되고 싶어요", tx: "ខ្ញុំចង់ធ្វើជាគ្រូពេទ្យ", pron: "크뇸 쩡 트어 찌어 끄루 뻿", roman: "khnhom chang thveu chea kru pet" },
      { id: "w07_07", ko: "가족이 몇 명이야?", tx: "គ្រួសារប្អូនមានប៉ុន្មាននាក់?", pron: "끄루어싸 버운 미언 뽄만 넥?", roman: "kruosar p'oun mean ponman neak?" },
      { id: "w07_08", ko: "형제자매가 있어?", tx: "ប្អូនមានបងប្អូនទេ?", pron: "버운 미언 벙 버운 떼?", roman: "p'oun mean bang p'oun te?" },
      { id: "w07_09", ko: "집이 어디야?", tx: "ផ្ទះប្អូននៅឯណា?", pron: "프떼아 버운 너우 아에 나?", roman: "phteah p'oun nov ae na?" },
      { id: "w07_10", ko: "학교 좋아?", tx: "ប្អូនចូលចិត្តសាលារៀនទេ?", pron: "버운 쫄쩟 싸라 리언 떼?", roman: "p'oun chol chet sala rien te?" },
      { id: "w07_11", ko: "밥 먹었어?", tx: "ញ៉ាំបាយហើយឬនៅ?", pron: "냠 바이 하이 르 너우?", roman: "nham bay haey reu nov?", note: "캄보디아에서도 인사처럼 자주 묻는 말" },
      { id: "w07_12", ko: "응, 먹었어", tx: "ញ៉ាំហើយ", pron: "냠 하이", roman: "nham haey" },
      { id: "w07_13", ko: "이건 뭐야?", tx: "នេះជាអ្វី?", pron: "니 찌어 아이?", roman: "nih chea avei?" },
      { id: "w07_14", ko: "같이 사진 찍을래?", tx: "ថតរូបជាមួយគ្នាទេ?", pron: "탓 룹 찌어 무어이 크니어 떼?", roman: "thot rup chea muoy knea te?" },
      { id: "w07_15", ko: "어떤 놀이를 좋아해?", tx: "ប្អូនចូលចិត្តលេងល្បែងអ្វី?", pron: "버운 쫄쩟 렝 러바엥 아이?", roman: "p'oun chol chet leng lbaeng avei?" },
      { id: "w07_16", ko: "선생님, 감사합니다", tx: "អរគុណលោកគ្រូ", pron: "어꾼 록 끄루", roman: "arkun lok kru", note: "남자 선생님은 '록 끄루', 여자 선생님은 '네악 끄루(អ្នកគ្រូ)'" }
    ]
  },
  {
    week: 8, title: "생활 필수 표현", icon: "🍚",
    goal: "식사·길찾기·쇼핑·도움 요청",
    items: [
      { id: "w08_01", ko: "화장실이 어디예요?", tx: "បន្ទប់ទឹកនៅឯណា?", pron: "번똡 뜩 너우 아에 나?", roman: "bantob tuk nov ae na?" },
      { id: "w08_02", ko: "이거 얼마예요?", tx: "នេះថ្លៃប៉ុន្មាន?", pron: "니 틀라이 뽄만?", roman: "nih thlai ponman?", note: "미국 달러와 리엘을 함께 써요. 1달러보다 작은 잔돈은 리엘로 받아요." },
      { id: "w08_03", ko: "조금 깎아 주세요", tx: "ចុះថ្លៃបន្តិចបានទេ?", pron: "쪼 틀라이 번뗏 반 떼?", roman: "choh thlai bantech ban te?" },
      { id: "w08_04", ko: "물 좀 주세요", tx: "សុំទឹកបន្តិច", pron: "쏨 뜩 번뗏", roman: "som tuk bantech" },
      { id: "w08_05", ko: "아이스커피 한 잔 주세요", tx: "សុំកាហ្វេទឹកកកមួយកែវ", pron: "쏨 까페 뜩꺽 무어이 까에우", roman: "som kafe tuk kok muoy kaev", note: "연유를 넣은 아주 단 커피가 나와요" },
      { id: "w08_06", ko: "맛있어요", tx: "ឆ្ងាញ់ណាស់", pron: "층안 나", roman: "chhnganh nas" },
      { id: "w08_07", ko: "조금만 주세요", tx: "សុំតិចៗ", pron: "쏨 떳 떳", roman: "som tech tech" },
      { id: "w08_08", ko: "배불러요", tx: "ខ្ញុំឆ្អែតហើយ", pron: "크뇸 츠아엣 하이", roman: "khnhom chh'aet haey", note: "더 주려고 할 때 정중히 사양하는 말" },
      { id: "w08_09", ko: "맵지 않게 해 주세요", tx: "កុំដាក់ហឹរ", pron: "꼼 닥 흐", roman: "kom dak heur" },
      { id: "w08_10", ko: "도와주세요", tx: "ជួយផង!", pron: "쭈어이 펑!", roman: "chuoy phong!" },
      { id: "w08_11", ko: "여기가 어디예요?", tx: "នេះនៅកន្លែងណា?", pron: "니 너우 껀라엥 나?", roman: "nih nov kanlaeng na?" },
      { id: "w08_12", ko: "학교에 가고 싶어요", tx: "ខ្ញុំចង់ទៅសាលារៀន", pron: "크뇸 쩡 떠우 싸라 리언", roman: "khnhom chang tov sala rien" },
      { id: "w08_13", ko: "얼마나 걸려요?", tx: "ចំណាយពេលប៉ុន្មាន?", pron: "쩜나이 뻴 뽄만?", roman: "chamnay pel ponman?" },
      { id: "w08_14", ko: "몸이 좋지 않아요", tx: "ខ្ញុំមិនស្រួលខ្លួន", pron: "크뇸 먼 쓰루얼 클루언", roman: "khnhom min sruol khluon" },
      { id: "w08_15", ko: "사진 찍어도 돼요?", tx: "ខ្ញុំថតរូបបានទេ?", pron: "크뇸 탓 룹 반 떼?", roman: "khnhom thot rup ban te?" },
      { id: "w08_16", ko: "괜찮아요, 됐어요", tx: "មិនអីទេ អរគុណ", pron: "먼 아이 떼, 어꾼", roman: "min ey te, arkun" }
    ]
  },
  {
    week: 9, title: "축복과 기도", icon: "🕊️",
    goal: "축복하고, 기도를 제안하기",
    items: [
      { id: "w09_01", ko: "주 안에서 형제자매 (그리스도인끼리)", tx: "បងប្អូនក្នុងព្រះគ្រីស្ទ", pron: "벙 버운 끄농 쁘레아 끄리스", roman: "bang p'oun knong Preah Krist", mission: true, note: "캄보디아 그리스도인들이 서로를 부르는 말" },
      { id: "w09_02", ko: "하나님이 당신을 축복하시길", tx: "សូមព្រះប្រទានពរដល់អ្នក", pron: "쏨 쁘레아 쁘러띠언 뽀 덜 네악", roman: "som Preah protean por dol neak", mission: true },
      { id: "w09_03", ko: "하나님이 너를 사랑하셔", tx: "ព្រះស្រឡាញ់ប្អូន", pron: "쁘레아 쓰럴라인 버운", roman: "Preah srolanh p'oun", mission: true, note: "'쁘레아'는 하나님을 뜻하지만 왕·부처님 등에 붙는 존칭이기도 해요" },
      { id: "w09_04", ko: "당신을 위해 기도해도 될까요?", tx: "តើខ្ញុំអាចអធិស្ឋានឱ្យអ្នកបានទេ?", pron: "따어 크뇸 앗 아티쓰탄 아오이 네악 반 떼?", roman: "tae khnhom ach athisthan aoy neak ban te?", mission: true },
      { id: "w09_05", ko: "무엇을 위해 기도할까요?", tx: "ចង់ឱ្យខ្ញុំអធិស្ឋានសម្រាប់អ្វី?", pron: "쩡 아오이 크뇸 아티쓰탄 썸랍 아이?", roman: "chang aoy khnhom athisthan samrab avei?", mission: true },
      { id: "w09_06", ko: "당신을 위해 기도할게요", tx: "ខ្ញុំនឹងអធិស្ឋានឱ្យអ្នក", pron: "크뇸 능 아티쓰탄 아오이 네악", roman: "khnhom nueng athisthan aoy neak", mission: true },
      { id: "w09_07", ko: "하나님 아버지", tx: "ឱព្រះវរបិតា", pron: "아오 쁘레아 워러비다", roman: "ao Preah Vorabeida", mission: true },
      { id: "w09_08", ko: "하나님, 감사합니다", tx: "អរព្រះគុណព្រះអង្គ", pron: "어 쁘레아꾼 쁘레아 엉", roman: "ar Preah kun Preah ang", mission: true },
      { id: "w09_09", ko: "예수님의 이름으로 기도합니다", tx: "ខ្ញុំសូមអធិស្ឋានក្នុងព្រះនាមព្រះយេស៊ូវ", pron: "크뇸 쏨 아티쓰탄 끄농 쁘레아 니엄 쁘레아 예수", roman: "khnhom som athisthan knong Preah neam Preah Yesu", mission: true },
      { id: "w09_10", ko: "아멘", tx: "អាម៉ែន", pron: "아멘", roman: "amen", mission: true },
      { id: "w09_11", ko: "평안이 함께하기를", tx: "សូមឱ្យមានសេចក្តីសុខសាន្ត", pron: "쏨 아오이 미언 쎄익끄다이 쏙싼", roman: "som aoy mean sechkdei soksan", mission: true },
      { id: "w09_12", ko: "건강하세요", tx: "សូមឱ្យមានសុខភាពល្អ", pron: "쏨 아오이 미언 쏙카피읍 러어", roman: "som aoy mean sokhapheap l'o" },
      { id: "w09_13", ko: "하나님께서 지켜 주실 거예요", tx: "ព្រះនឹងការពារអ្នក", pron: "쁘레아 능 까삐어 네악", roman: "Preah nueng kar pear neak", mission: true },
      { id: "w09_14", ko: "우리는 한국 교회에서 왔어요", tx: "យើងមកពីក្រុមជំនុំនៅកូរ៉េ", pron: "여엉 목 삐 끄롬 쭘눔 너우 꼬레", roman: "yeung mok pi krom chumnum nov Kore", mission: true, note: "개신교에서는 교회를 '끄롬 쭘눔(모임)'이라고 해요" },
      { id: "w09_15", ko: "당신은 하나님 보시기에 소중해요", tx: "អ្នកមានតម្លៃណាស់នៅចំពោះព្រះ", pron: "네악 미언 덤라이 나 너우 쩜뿌어 쁘레아", roman: "neak mean tamlai nas nov chompoh Preah", mission: true },
      { id: "w09_16", ko: "오늘 함께해서 감사해요", tx: "អរគុណដែលបាននៅជាមួយគ្នាថ្ងៃនេះ", pron: "어꾼 다엘 반 너우 찌어 무어이 크니어 틍아이 니", roman: "arkun del ban nov chea muoy knea thngai nih" }
    ]
  },
  {
    week: 10, title: "나의 간증", icon: "✨",
    goal: "짧은 간증으로 내 이야기 나누기",
    items: [
      { id: "w10_01", ko: "저는 예수님을 믿어요", tx: "ខ្ញុំជឿលើព្រះយេស៊ូវ", pron: "크뇸 쯔어 르 쁘레아 예수", roman: "khnhom chuea leu Preah Yesu", mission: true },
      { id: "w10_02", ko: "예수님은 나의 친구예요", tx: "ព្រះយេស៊ូវជាមិត្តរបស់ខ្ញុំ", pron: "쁘레아 예수 찌어 멋 로버 크뇸", roman: "Preah Yesu chea mit robos khnhom", mission: true },
      { id: "w10_03", ko: "전에 저는 외롭고 슬펐어요", tx: "ពីមុន ខ្ញុំឯកោ ហើយកើតទុក្ខ", pron: "삐 문, 크뇸 아엑까오 하이 까엇 똑", roman: "pi mun, khnhom aekkao haey kaeut tuk", mission: true },
      { id: "w10_04", ko: "예수님을 만나고 기쁨이 생겼어요", tx: "ពេលខ្ញុំស្គាល់ព្រះយេស៊ូវ ខ្ញុំមានអំណរ", pron: "뻴 크뇸 스꼬알 쁘레아 예수, 크뇸 미언 엄노", roman: "pel khnhom skoal Preah Yesu, khnhom mean amnar", mission: true },
      { id: "w10_05", ko: "예수님은 나를 사랑하세요", tx: "ព្រះយេស៊ូវស្រឡាញ់ខ្ញុំ", pron: "쁘레아 예수 쓰럴라인 크뇸", roman: "Preah Yesu srolanh khnhom", mission: true },
      { id: "w10_06", ko: "그래서 저는 행복해요", tx: "ដូច្នេះ ខ្ញុំសប្បាយចិត្ត", pron: "도츠네, 크뇸 써바이 쩟", roman: "dochneh, khnhom sabay chet", mission: true },
      { id: "w10_07", ko: "저는 매일 기도해요", tx: "ខ្ញុំអធិស្ឋានរាល់ថ្ងៃ", pron: "크뇸 아티쓰탄 로알 틍아이", roman: "khnhom athisthan roal thngai", mission: true },
      { id: "w10_08", ko: "저는 성경을 읽어요", tx: "ខ្ញុំអានព្រះគម្ពីរ", pron: "크뇸 안 쁘레아 꼼삐", roman: "khnhom an Preah Kampi", mission: true },
      { id: "w10_09", ko: "하나님은 기도를 들으세요", tx: "ព្រះស្តាប់សេចក្តីអធិស្ឋាន", pron: "쁘레아 스답 쎄익끄다이 아티쓰탄", roman: "Preah sdap sechkdei athisthan", mission: true },
      { id: "w10_10", ko: "이 사랑을 나누고 싶어서 왔어요", tx: "ខ្ញុំមកដើម្បីចែកចាយសេចក្តីស្រឡាញ់នេះ", pron: "크뇸 목 다엄버이 짜엑짜이 쎄익끄다이 쓰럴라인 니", roman: "khnhom mok daembei chaek chay sechkdei srolanh nih", mission: true },
      { id: "w10_11", ko: "너희를 만나려고 멀리서 왔어", tx: "ខ្ញុំមកពីឆ្ងាយដើម្បីជួបប្អូនៗ", pron: "크뇸 목 삐 층아이 다엄버이 쭈읍 버운 버운", roman: "khnhom mok pi chhngay daembei chuob p'oun p'oun" },
      { id: "w10_12", ko: "하나님은 모든 사람을 사랑하세요", tx: "ព្រះស្រឡាញ់មនុស្សគ្រប់គ្នា", pron: "쁘레아 쓰럴라인 머누 끄롭 크니어", roman: "Preah srolanh menus krob knea", mission: true },
      { id: "w10_13", ko: "예수님이 나에게 소망을 주셨어요", tx: "ព្រះយេស៊ូវបានប្រទានសេចក្តីសង្ឃឹមដល់ខ្ញុំ", pron: "쁘레아 예수 반 쁘러띠언 쎄익끄다이 썽큼 덜 크뇸", roman: "Preah Yesu ban protean sechkdei sangkhum dol khnhom", mission: true },
      { id: "w10_14", ko: "궁금한 게 있으면 물어보세요", tx: "បើមានចម្ងល់ សូមសួរមក", pron: "바어 미언 쩜응얼, 쏨 쑤어 목", roman: "baeu mean chamngol, som suor mok" },
      { id: "w10_15", ko: "당신의 이야기도 듣고 싶어요", tx: "ខ្ញុំក៏ចង់ស្តាប់រឿងរបស់អ្នកដែរ", pron: "크뇸 꺼 쩡 스답 르응 로버 네악 다에", roman: "khnhom kor chang sdap rueng robos neak dae" },
      { id: "w10_16", ko: "우리는 하나님의 가족이에요", tx: "យើងជាក្រុមគ្រួសាររបស់ព្រះ", pron: "여엉 찌어 끄롬 끄루어싸 로버 쁘레아", roman: "yeung chea krom kruosar robos Preah", mission: true }
    ]
  },
  {
    week: 11, title: "복음의 핵심", icon: "✝️",
    goal: "복음을 짧은 문장으로 순서대로 전하기",
    items: [
      { id: "w11_01", ko: "하나님은 세상을 만드셨어요", tx: "ព្រះបានបង្កើតពិភពលោក", pron: "쁘레아 반 벙까엇 삐폽록", roman: "Preah ban bangkaeut piphoplok", mission: true },
      { id: "w11_02", ko: "하나님은 우리를 사랑하세요", tx: "ព្រះស្រឡាញ់យើង", pron: "쁘레아 쓰럴라인 여엉", roman: "Preah srolanh yeung", mission: true },
      { id: "w11_03", ko: "모든 사람은 죄를 지었어요", tx: "មនុស្សគ្រប់គ្នាបានធ្វើបាប", pron: "머누 끄롭 크니어 반 트어 밥", roman: "menus krob knea ban thveu bap", mission: true },
      { id: "w11_04", ko: "죄 때문에 하나님과 멀어졌어요", tx: "ដោយសារបាប យើងនៅឆ្ងាយពីព្រះ", pron: "다오이 싸 밥, 여엉 너우 층아이 삐 쁘레아", roman: "daoy sar bap, yeung nov chhngay pi Preah", mission: true },
      { id: "w11_05", ko: "예수님은 하나님의 아들이세요", tx: "ព្រះយេស៊ូវជាព្រះរាជបុត្រារបស់ព្រះ", pron: "쁘레아 예수 찌어 쁘레아 리읏 보뜨라 로버 쁘레아", roman: "Preah Yesu chea Preah reach botra robos Preah", mission: true },
      { id: "w11_06", ko: "예수님은 우리를 위해 십자가에서 죽으셨어요", tx: "ព្រះយេស៊ូវបានសុគតនៅលើឈើឆ្កាងសម្រាប់យើង", pron: "쁘레아 예수 반 쏘꼿 너우 르 처어 츠깡 썸랍 여엉", roman: "Preah Yesu ban sokot nov leu chheu chhkang samrab yeung", mission: true },
      { id: "w11_07", ko: "예수님은 다시 살아나셨어요", tx: "ព្រះយេស៊ូវបានរស់ឡើងវិញ", pron: "쁘레아 예수 반 로 라엉 빈", roman: "Preah Yesu ban ros laeung vinh", mission: true },
      { id: "w11_08", ko: "하나님은 당신을 용서하세요", tx: "ព្រះអត់ទោសឱ្យអ្នក", pron: "쁘레아 엇 또 아오이 네악", roman: "Preah ot tos aoy neak", mission: true },
      { id: "w11_09", ko: "예수님을 믿는 사람은 구원을 받아요", tx: "អ្នកណាដែលជឿលើព្រះយេស៊ូវ នឹងបានសង្គ្រោះ", pron: "네악 나 다엘 쯔어 르 쁘레아 예수, 능 반 썽끄루어", roman: "neak na del chuea leu Preah Yesu, nueng ban sangkruoh", mission: true },
      { id: "w11_10", ko: "구원은 하나님의 선물이에요", tx: "សេចក្តីសង្គ្រោះជាអំណោយទានរបស់ព្រះ", pron: "쎄익끄다이 썽끄루어 찌어 엄나오이 띠언 로버 쁘레아", roman: "sechkdei sangkruoh chea amnaoy tean robos Preah", mission: true },
      { id: "w11_11", ko: "영원한 생명", tx: "ជីវិតអស់កល្បជានិច្ច", pron: "찌웟 아 깔 찌어 닛", roman: "chivit os kal chea nich", mission: true },
      { id: "w11_12", ko: "예수님은 길이요 진리요 생명이세요", tx: "ព្រះយេស៊ូវជាផ្លូវ ជាសេចក្តីពិត និងជាជីវិត", pron: "쁘레아 예수 찌어 플러우, 찌어 쎄익끄다이 뻿, 능 찌어 찌웟", roman: "Preah Yesu chea phlov, chea sechkdei pit, nueng chea chivit", mission: true },
      { id: "w11_13", ko: "예수님은 항상 우리와 함께하세요", tx: "ព្រះយេស៊ូវគង់នៅជាមួយយើងជានិច្ច", pron: "쁘레아 예수 꽁 너우 찌어 무어이 여엉 찌어 닛", roman: "Preah Yesu kong nov chea muoy yeung chea nich", mission: true },
      { id: "w11_14", ko: "예수님은 당신을 기다리고 계세요", tx: "ព្រះយេស៊ូវកំពុងរង់ចាំអ្នក", pron: "쁘레아 예수 껌뽕 롱짬 네악", roman: "Preah Yesu kampung rongcham neak", mission: true },
      { id: "w11_15", ko: "원하시면 함께 기도할 수 있어요", tx: "បើអ្នកចង់ យើងអាចអធិស្ឋានជាមួយគ្នា", pron: "바어 네악 쩡, 여엉 앗 아티쓰탄 찌어 무어이 크니어", roman: "baeu neak chang, yeung ach athisthan chea muoy knea", mission: true },
      { id: "w11_16", ko: "가까운 교회를 알려 드릴 수 있어요", tx: "ខ្ញុំអាចប្រាប់អ្នកពីក្រុមជំនុំដែលនៅជិត", pron: "크뇸 앗 쁘랍 네악 삐 끄롬 쭘눔 다엘 너우 쩟", roman: "khnhom ach prab neak pi krom chumnum del nov chit", mission: true }
    ]
  },
  {
    week: 12, title: "성경 말씀과 작별", icon: "📖",
    goal: "암송 구절과 마지막 날 인사",
    items: [
      { id: "w12_01", ko: "하나님은 사랑이십니다 (요한일서 4:8)", tx: "ព្រះជាសេចក្តីស្រឡាញ់", pron: "쁘레아 찌어 쎄익끄다이 쓰럴라인", roman: "Preah chea sechkdei srolanh", mission: true, verse: true },
      { id: "w12_02", ko: "여호와는 나의 목자시니 내게 부족함이 없으리로다 (시편 23:1)", tx: "ព្រះយេហូវ៉ាជាអ្នកគង្វាលខ្ញុំ ខ្ញុំនឹងមិនខ្វះខាតអ្វីឡើយ", pron: "쁘레아 예호와 찌어 네악 꿍왈 크뇸, 크뇸 능 먼 크와 캇 아이 라어이", roman: "Preah Yehova chea neak kongveal khnhom, khnhom nueng min khvah khat avei laeuy", mission: true, verse: true, note: "현지 교회 성경의 표현과 대조해 주세요" },
      { id: "w12_03", ko: "예수께서 이르시되 내가 곧 길이요 진리요 생명이니 (요한복음 14:6)", tx: "ព្រះយេស៊ូវមានព្រះបន្ទូលថា «ខ្ញុំជាផ្លូវ ជាសេចក្តីពិត ហើយជាជីវិត»", pron: "쁘레아 예수 미언 쁘레아 번뚤 타, 크뇸 찌어 플러우, 찌어 쎄익끄다이 뻿, 하이 찌어 찌웟", roman: "Preah Yesu mean Preah bantul tha, khnhom chea phlov, chea sechkdei pit, haey chea chivit", mission: true, verse: true },
      { id: "w12_04", ko: "수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라 (마태복음 11:28)", tx: "អស់អ្នកដែលនឿយហត់ ហើយផ្ទុកធ្ងន់ ចូរមករកខ្ញុំ ខ្ញុំនឹងឱ្យអ្នករាល់គ្នាបានសម្រាក", pron: "아 네악 다엘 느어이 홋 하이 프똑 트응언, 쪼 목 록 크뇸, 크뇸 능 아오이 네악 로알 크니어 반 썸락", roman: "os neak del nueuy hot haey phtuk thngon, chaur mok rok khnhom, khnhom nueng aoy neak roal knea ban samrak", mission: true, verse: true },
      { id: "w12_05", ko: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라 (빌립보서 4:13)", tx: "ខ្ញុំអាចធ្វើគ្រប់ការទាំងអស់បាន ដោយសារព្រះគ្រីស្ទដែលប្រទានកម្លាំងដល់ខ្ញុំ", pron: "크뇸 앗 트어 끄롭 까 띠엉 아 반, 다오이 싸 쁘레아 끄리스 다엘 쁘러띠언 껌랑 덜 크뇸", roman: "khnhom ach thveu krob kar teang os ban, daoy sar Preah Krist del protean kamlang dol khnhom", mission: true, verse: true },
      { id: "w12_06", ko: "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라 (요한복음 3:16)", tx: "ដ្បិតព្រះស្រឡាញ់មនុស្សលោកខ្លាំងណាស់ បានជាទ្រង់ប្រទានព្រះរាជបុត្រាតែមួយរបស់ទ្រង់ ដើម្បីឱ្យអ្នកណាដែលជឿលើព្រះរាជបុត្រានោះ មិនត្រូវវិនាសឡើយ គឺឱ្យមានជីវិតអស់កល្បជានិច្ចវិញ", pron: "다빗 쁘레아 쓰럴라인 머누 록 클랑 나, 반 찌어 뜨롱 쁘러띠언 쁘레아 리읏 보뜨라 따에 무어이 로버 뜨롱, 다엄버이 아오이 네악 나 다엘 쯔어 르 쁘레아 리읏 보뜨라 누, 먼 뜨러우 위니어 라어이, 끄 아오이 미언 찌웟 아 깔 찌어 닛 빈", roman: "dbet Preah srolanh menus lok khlang nas, ban chea trong protean Preah reach botra tae muoy robos trong, daembei aoy neak na del chuea leu Preah reach botra noh, min trov vineas laeuy, keu aoy mean chivit os kal chea nich vinh", mission: true, verse: true, note: "가장 긴 문장! 쉼표 단위로 끊어서 외워 보세요." },
      { id: "w12_07", ko: "너희를 절대 잊지 않을게", tx: "ខ្ញុំនឹងមិនភ្លេចប្អូនៗទេ", pron: "크뇸 능 먼 플렛 버운 버운 떼", roman: "khnhom nueng min phlech p'oun p'oun te" },
      { id: "w12_08", ko: "보고 싶을 거야", tx: "ខ្ញុំនឹងនឹកប្អូនៗ", pron: "크뇸 능 닉 버운 버운", roman: "khnhom nueng nuek p'oun p'oun" },
      { id: "w12_09", ko: "너희를 위해 기도할게", tx: "ខ្ញុំនឹងអធិស្ឋានឱ្យប្អូនៗ", pron: "크뇸 능 아티쓰탄 아오이 버운 버운", roman: "khnhom nueng athisthan aoy p'oun p'oun", mission: true },
      { id: "w12_10", ko: "너희와 함께한 시간이 정말 즐거웠어", tx: "ពេលវេលាជាមួយប្អូនៗ សប្បាយណាស់", pron: "뻴웰리어 찌어 무어이 버운 버운, 써바이 나", roman: "pelvelea chea muoy p'oun p'oun, sabay nas" },
      { id: "w12_11", ko: "공부 열심히 해", tx: "ខំរៀនឱ្យពូកែ", pron: "콤 리언 아오이 뿌까에", roman: "khom rien aoy pukae" },
      { id: "w12_12", ko: "건강하게 지내", tx: "រក្សាសុខភាពផង", pron: "레악싸 쏙카피읍 펑", roman: "reaksa sokhapheap phong" },
      { id: "w12_13", ko: "선생님들, 정말 감사했습니다", tx: "អរគុណច្រើន លោកគ្រូ អ្នកគ្រូទាំងអស់", pron: "어꾼 쯔라은, 록 끄루 네악 끄루 띠엉 아", roman: "arkun chraeun, lok kru neak kru teang os" },
      { id: "w12_14", ko: "하나님이 너희를 축복하시길", tx: "សូមព្រះប្រទានពរដល់ប្អូនៗ", pron: "쏨 쁘레아 쁘러띠언 뽀 덜 버운 버운", roman: "som Preah protean por dol p'oun p'oun", mission: true },
      { id: "w12_15", ko: "언젠가 다시 만나자", tx: "ថ្ងៃណាមួយ យើងជួបគ្នាម្តងទៀត", pron: "틍아이 나 무어이, 여엉 쭈읍 크니어 머덩 띠엇", roman: "thngai na muoy, yeung chuob knea mdong tiet" },
      { id: "w12_16", ko: "잘 있어, 안녕!", tx: "លាសិនហើយ!", pron: "리어 썬 하이!", roman: "lea sen haey!" }
    ]
  }
  ]
};
