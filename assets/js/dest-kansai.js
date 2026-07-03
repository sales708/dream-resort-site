/* Kansai 6D5N – sourced from 关西一地 6天5晚 行程報価表.xlsx + KANSAI CULTURAL JOURNEY poster */
window.DEST_DATA.kansai = {
  image: "../assets/images/posters/poster-kansai-discovery.png",
  poster: "../assets/images/posters/poster-kansai-discovery.png",
  pricing: [
    { pax: 12, price: 100340 },
    { pax: 13, price: 96494 },
    { pax: 14, price: 93197 },
    { pax: 15, price: 90340 },
    { pax: 16, price: 87840 },
    { pax: 17, price: 90046 },
    { pax: 18, price: 87840 },
    { pax: 19, price: 85866, featured: true },
    { pax: 20, price: 84090 },
    { pax: 21, price: 82483 }
  ],
  spots: [
    "Kuroshio Market · Tuna Show",
    "Tama Densha · Cat Train",
    "Osaka Castle · Dotonbori",
    "CupNoodles Museum",
    "Katsuo-ji Temple · Daruma",
    "Kiyomizu · Fushimi Inari",
    "Nara Park · Deer"
  ],
  ja: {
    title: "関西一地 6日5晚モデルコース",
    subtitle: "1日自由行 · KANSAI CULTURAL JOURNEY",
    posterHeadline: "KANSAI CULTURAL JOURNEY",
    posterTagline: "大阪・京都・神戸・奈良 — 食・文化・歴史・ショッピング",
    lead: "《関西一地 6天5晚 行程報価表》に基づく定番関西プラン。黒潮市場、小玉電車、勝尾寺、清水寺、奈良公園などを網羅。1日自由行（3択）付き。2026年通年対応。",
    duration: "6 Days 5 Nights",
    group: "12–21名（报价表）",
    season: "2026年通年",
    highlights: [
      "関西空港→黒潮市場：マグロ解体ショー（海鮮料理込）",
      "小玉電車（猫電車・乗車券込）・和歌山城",
      "水陸両用バス観光（乗車券込）・大阪城・道頓堀・心斎橋",
      "カップヌードルミュージアム・勝尾寺（達磨祈願・入場込）",
      "D4：自由行 / USJ送迎 / 神戸コース（3択）",
      "清水寺・伏見稲荷大社・奈良公園（入場込）"
    ],
    includes: [
      "食事：計4餐 ★昼1500円/人/餐 夕2000円/人/餐★（报价表条件）",
      "参考ホテル：C-trip 4星以上、1泊5星ホテル保証",
      "車両：16名以内コースター、16名以上マイクロ/大型バス",
      "旅行期間：2026年全年"
    ],
    days: [
      {
        label: "D1",
        title: "大阪到着 · 黒潮市場 · 小玉電車 · 和歌山城",
        schedule: [
          { time: "AM", text: "関西空港到着・ピックアップ" },
          { time: "PM", text: "黒潮市場 → マグロ解体ショー（海鮮料理込）→ 小玉電車（乗車券込）→ 和歌山城" }
        ],
        meals: "昼：× / 夕：○",
        hotel: "南千里クリスタルホテル或同级",
        transport: "空港–行程 专车"
      },
      {
        label: "D2",
        title: "大阪 · 水陸両用バス · 大阪城 · 道頓堀",
        schedule: [
          { time: "全天", text: "水陸両用バス観光（乗車券込）→ 大阪城公園 → 道頓堀・心斎橋" }
        ],
        meals: "B / L / D",
        hotel: "南千里クリスタルホテル或同级",
        transport: "全天包车"
      },
      {
        label: "D3",
        title: "大阪 → 京都 → 大阪",
        schedule: [
          { time: "全天", text: "カップヌードルミュージアム → 勝尾寺（達磨祈願・入場门票込）" }
        ],
        meals: "B",
        hotel: "南千里クリスタルホテル或同级",
        transport: "全天包车"
      },
      {
        label: "D4",
        title: "自由活动日（1 Day Free）",
        schedule: [
          { time: "A", text: "自由活动" },
          { time: "B", text: "ユニバーサル・スタジオ・ジャパン送迎" },
          { time: "C", text: "三田アウトレット → 神戸港・メリケンパーク → 神戸中華街" }
        ],
        meals: "B",
        hotel: "南千里クリスタルホテル或同级",
        transport: "选项B/C含部分接送"
      },
      {
        label: "D5",
        title: "大阪 → 京都 → 奈良 → 大阪",
        schedule: [
          { time: "全天", text: "清水寺（入場込）→ 伏見稲荷大社 → 奈良公園（今晚入住关空奥特莱斯附近，可步行前往）" }
        ],
        meals: "B / L",
        hotel: "OMO関西空港 by 星野リゾート或同级",
        transport: "全天包车"
      },
      {
        label: "D6",
        title: "送机 · 回国",
        schedule: [
          { time: "AM", text: "大阪酒店接送 → 関西国際空港" },
          { time: "PM", text: "関西国際空港 → 帰国" }
        ],
        meals: "B",
        hotel: "—",
        transport: "酒店–机场 专车"
      }
    ]
  },
  zh: {
    title: "关西一地 6天5晚",
    subtitle: "含1天自由行 · KANSAI CULTURAL JOURNEY",
    posterHeadline: "KANSAI CULTURAL JOURNEY",
    posterTagline: "大阪 · 京都 · 神户 · 奈良 — 美食 · 文化 · 历史 · 购物",
    lead: "依据《关西一地 6天5晚 行程報価表》整理。涵盖黑潮市场金枪鱼解体秀、小玉电车、水陆两栖bus、泡面博物馆、胜尾寺、清水寺、伏见稻荷、奈良公园，含1天自由活动（可选环球或神户）。",
    duration: "6天5晚",
    group: "12–21人（见报价表）",
    season: "2026年全年",
    highlights: [
      "关西机场 → 黑潮市场：金枪鱼解体秀（含海鲜料理）",
      "小玉电车（含车票）· 和歌山城",
      "水陆两栖bus观光（含车票）· 大阪城 · 道顿堀 · 心斋桥",
      "泡面博物馆 · 胜尾寺（祈福达摩 · 含入场门票）",
      "D4 三选一：自由活动 / 环球接送 / 三田奥特莱斯·神户港·中华街",
      "清水寺（含门票）· 伏见稻荷大社 · 奈良公园"
    ],
    includes: [
      "餐食：共4餐 ★午餐1500日币/人/餐 晚餐2000日币/人/餐★（报价表条件）",
      "参考酒店：C-trip 4星以上，保证一晚5星酒店",
      "参考用车：16人以内考斯特，16人以上中巴或大巴",
      "期限：2026年全年"
    ],
    days: [
      {
        label: "D1",
        title: "抵达大阪",
        schedule: [
          { time: "全天", text: "关西机场接机 → 黑潮市场 · 金枪鱼解体秀（含海鲜料理）→ 小玉电车（含车票）→ 和歌山城" }
        ],
        meals: "午：× / 晚：○",
        hotel: "南千里水晶酒店或同级",
        transport: "机场接机 + 全天用车"
      },
      {
        label: "D2",
        title: "大阪",
        schedule: [
          { time: "全天", text: "水陆两栖bus观光（含车票）→ 大阪城公园 → 道顿堀 · 心斋桥" }
        ],
        meals: "B / L / D",
        hotel: "南千里水晶酒店或同级",
        transport: "全天包车"
      },
      {
        label: "D3",
        title: "大阪 → 京都 → 大阪",
        schedule: [
          { time: "全天", text: "泡面博物馆 → 胜尾寺（祈福达摩 · 含入场门票）" }
        ],
        meals: "B",
        hotel: "南千里水晶酒店或同级",
        transport: "全天包车"
      },
      {
        label: "D4",
        title: "自由活动 / 环球 / 神户",
        schedule: [
          { time: "A", text: "自由活动" },
          { time: "B", text: "环球接送" },
          { time: "C", text: "三田奥特莱斯 → 神户港美利坚公园 → 神户中华街" }
        ],
        meals: "B",
        hotel: "南千里水晶酒店或同级",
        transport: "按选项安排"
      },
      {
        label: "D5",
        title: "大阪 → 京都 → 奈良 → 大阪",
        schedule: [
          { time: "全天", text: "清水寺（含入场门票）→ 伏见稻荷大社 → 奈良公园（今晚入住酒店在关空奥特莱斯附近，可步行前往）" }
        ],
        meals: "B / L",
        hotel: "OMO関西空港 by 星野リゾート或同级",
        transport: "全天包车"
      },
      {
        label: "D6",
        title: "送机回国",
        schedule: [
          { time: "行程", text: "大阪酒店接送 → 关西国际机场 → 回国" }
        ],
        meals: "B",
        hotel: "—",
        transport: "送机专车"
      }
    ]
  },
  en: {
    title: "Kansai Discovery · 6 Days 5 Nights",
    subtitle: "1 Day Free · KANSAI CULTURAL JOURNEY",
    posterHeadline: "KANSAI CULTURAL JOURNEY",
    posterTagline: "Osaka · Kyoto · Kobe · Nara — Cuisine · Culture · History · Shopping",
    lead: "Market-ready 6D5N Kansai land program from DRD quotation sheet. Kuroshio Market tuna show, Tama cat train, amphibious bus, Cup Noodles Museum, Katsuo-ji, Kiyomizu, Fushimi Inari and Nara Park.",
    duration: "6 Days 5 Nights",
    group: "12–21 pax (see fare table)",
    season: "Year 2026",
    highlights: [
      "Kansai Airport → Kuroshio Market tuna dismantling show with seafood meal",
      "Tama Densha cat train (ticket included) · Wakayama Castle",
      "Amphibious sightseeing bus · Osaka Castle · Dotonbori · Shinsaibashi",
      "Cup Noodles Museum · Katsuo-ji Temple daruma blessings (admission included)",
      "Day 4 options: Free time / USJ transfer / Kobe & Mitsui Outlet tour",
      "Kiyomizu-dera · Fushimi Inari · Nara Park (admissions included)"
    ],
    includes: [
      "Meals: 4 meals per quotation · lunch JPY 1,500 / dinner JPY 2,000 per person",
      "Hotels: C-trip 4★ or above, one guaranteed 5★ night",
      "Vehicle: coaster under 16 pax, micro/bus for 16+",
      "Travel period: full year 2026"
    ],
    days: [
      {
        label: "D1",
        title: "Arrive Osaka",
        schedule: [
          { time: "AM", text: "Pick-up at Kansai International Airport" },
          { time: "PM", text: "Kuroshio Market → tuna show (seafood included) → Tama Densha → Wakayama Castle" }
        ],
        meals: "Lunch excluded · Dinner included",
        hotel: "Crystal Hotel Minamisenri or similar",
        transport: "Airport pick-up + coach"
      },
      {
        label: "D2",
        title: "Osaka City Tour",
        schedule: [
          { time: "Full", text: "Amphibious bus tour (ticket included) → Osaka Castle Park → Dotonbori & Shinsaibashi" }
        ],
        meals: "B / L / D",
        hotel: "Crystal Hotel Minamisenri or similar",
        transport: "Full-day charter bus"
      },
      {
        label: "D3",
        title: "Osaka → Kyoto → Osaka",
        schedule: [
          { time: "Full", text: "Cup Noodles Museum → Katsuo-ji Temple (daruma blessings, admission included)" }
        ],
        meals: "Breakfast",
        hotel: "Crystal Hotel Minamisenri or similar",
        transport: "Full-day charter bus"
      },
      {
        label: "D4",
        title: "Free Day (Choose One)",
        schedule: [
          { time: "A", text: "Free time at leisure" },
          { time: "B", text: "Universal Studios Japan transfer" },
          { time: "C", text: "Mitsui Outlet · Kobe Harborland · Meriken Park · Nankinmachi" }
        ],
        meals: "Breakfast",
        hotel: "Crystal Hotel Minamisenri or similar",
        transport: "Per option"
      },
      {
        label: "D5",
        title: "Osaka → Kyoto → Nara → Osaka",
        schedule: [
          { time: "Full", text: "Kiyomizu-dera (admission) → Fushimi Inari Taisha → Nara Park · stay near Rinku Premium Outlets" }
        ],
        meals: "B / L",
        hotel: "OMO Kansai Airport by Hoshino Resorts or similar",
        transport: "Full-day charter bus"
      },
      {
        label: "D6",
        title: "Airport Transfer · Departure",
        schedule: [
          { time: "AM", text: "Hotel pick-up → Kansai International Airport" },
          { time: "PM", text: "International departure" }
        ],
        meals: "Breakfast",
        hotel: "—",
        transport: "Airport transfer"
      }
    ]
  }
};
