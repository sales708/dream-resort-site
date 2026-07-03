/* Golden Route Standard 6D5N – Osaka → Tokyo (poster) */
window.DEST_DATA.goldenRoute = {
  image: "../assets/images/posters/poster-golden-route.png",
  poster: "../assets/images/posters/poster-golden-route.png",
  pricing: [
    { pax: 15, price: 96500 },
    { pax: 16, price: 94500 },
    { pax: 17, price: 92500 },
    { pax: 18, price: 90500 },
    { pax: 19, price: 88500 },
    { pax: 20, price: 81500, featured: true },
    { pax: 21, price: 79500 },
    { pax: 22, price: 77500 },
    { pax: 23, price: 75500 },
    { pax: 24, price: 73500 },
    { pax: 25, price: 72400, featured: true },
    { pax: 26, price: 71000 },
    { pax: 27, price: 69600 },
    { pax: 28, price: 68200 },
    { pax: 29, price: 67300 },
    { pax: 30, price: 66400, featured: true },
    { pax: 31, price: 65200 },
    { pax: 32, price: 64100 },
    { pax: 33, price: 63200 },
    { pax: 34, price: 62600 },
    { pax: 35, price: 62100, featured: true },
    { pax: 36, price: 60800 },
    { pax: 37, price: 59800 },
    { pax: 38, price: 59400 },
    { pax: 39, price: 59100 },
    { pax: 40, price: 58800, featured: true }
  ],
  spots: [
    "Osaka Castle",
    "Fushimi Inari",
    "Shirakawa-go",
    "Takayama Jinya",
    "Oshino Hakkai",
    "Mt. Fuji 5th Station",
    "Senso-ji · SkyTree",
    "Shibuya · Odaiba"
  ],
  ja: {
    title: "ゴールデンルート 6日5晚（普通版）",
    subtitle: "大阪 → 東京 · GOLDEN ROUTE TOUR",
    posterHeadline: "GOLDEN ROUTE TOUR",
    posterTagline: "KIX – 大阪 – 京都 – 中部 – 富士山 – 東京",
    lead: "関西空港から東京まで、定番ゴールデンルートを6日5晚で効率よく周遊。白川郷・高山・富士山・東京定番スポットを網羅したB2B向け普通版プラン。2026年12月31日まで有効。",
    duration: "6 Days 5 Nights",
    group: "15–40名（报价表）",
    season: "〜2026年12月31日",
    highlights: [
      "D1：関空 → 大阪城 → 心斎橋・道頓堀 → 伏見稲荷（桜モイスチャークリーム贈呈）",
      "D2：白川郷（世界遺産）→ 高山陣屋（入場込）→ 上三之町",
      "D3：名古屋わさび博物館 → 忍野八海 → 温泉（日本酒飲み放題贈呈）",
      "D4：富士山五合目 → 富士地震体験 → 河口湖",
      "D5：新宿免税店 → 渋谷 → 浅草 → スカイツリー → お台場",
      "Gift付き：化粧品 / 温泉ホテル日本酒 / 着物体験（女性）"
    ],
    includes: [
      "食事：5B / 2L / 4D、D1–D5 水1本/日",
      "参考ホテル：3–4星（Hotel Koyo Annex / 温泉旅館 / Narita Gateway 等）",
      "車両：16名以内コースター、16名以上中バスまたは大型バス",
      "チップ：500円/人/日 · ガイド：インドネシア語 / 英語",
      "桜シーズン追加料金（3/15–4/10）：15,000円/人"
    ],
    days: [
      {
        label: "D1",
        title: "関西空港 – 大阪 – 京都 – 中部",
        schedule: [
          { time: "AM", text: "関西空港到着・ピックアップ" },
          { time: "PM", text: "大阪城公園 → 心斎橋・道頓堀 → 伏見稲荷大社 → 中部へ" },
          { time: "Gift", text: "贈呈①：Sakura Moisture Cream（9,000円相当・8/31まで）" }
        ],
        meals: "D",
        hotel: "Hotel Koyo Annex 或同级",
        transport: "空港–中部 专车"
      },
      {
        label: "D2",
        title: "中部 – 白川郷 – 中部",
        schedule: [
          { time: "全天", text: "白川郷合掌造り集落（世界遺産）→ 高山陣屋（门票込）→ 上三之町" },
          { time: "Gift", text: "贈呈②：温泉ホテル日本酒飲み放題（8/31まで）" }
        ],
        meals: "B / D",
        hotel: "Hotel Koyo Annex 或同级",
        transport: "全天包车"
      },
      {
        label: "D3",
        title: "中部 – 富士山",
        schedule: [
          { time: "全天", text: "名古屋わさび博物館 → 山梨移動 → 忍野八海 → 温泉" },
          { time: "Gift", text: "贈呈③：着物体験（女性限定）" }
        ],
        meals: "B / L / D",
        hotel: "Isawa Onsen Kyousuiso 或同级",
        transport: "全天包车"
      },
      {
        label: "D4",
        title: "富士山",
        schedule: [
          { time: "全天", text: "富士山五合目 → 富士地震体験 → 河口湖" }
        ],
        meals: "B / L / D",
        hotel: "Isawa Onsen Kyousuiso 或同级",
        transport: "全天包车"
      },
      {
        label: "D5",
        title: "富士山 – 東京",
        schedule: [
          { time: "全天", text: "新宿免税店 → 渋谷・ハチ公 → 浅草・仲見世 → スカイツリー（バス観光）→ お台場ガンダム・自由の女神" }
        ],
        meals: "B",
        hotel: "Narita Gateway Hotel 或同级",
        transport: "全天包车"
      },
      {
        label: "D6",
        title: "東京空港送机",
        schedule: [
          { time: "AM", text: "ホテル → 空港（送迎のみ）→ 帰国" }
        ],
        meals: "B",
        hotel: "—",
        transport: "送机"
      }
    ]
  },
  zh: {
    title: "黄金路线 6天5晚（普通版）",
    subtitle: "大阪 → 东京 · GOLDEN ROUTE TOUR",
    posterHeadline: "GOLDEN ROUTE TOUR",
    posterTagline: "关西机场 – 大阪 – 京都 – 中部 – 富士山 – 东京",
    lead: "从关西机场到东京，6天5晚经典黄金路线。涵盖白川乡、高山、富士山及东京精华景点，B2B普通版报价方案。有效期至2026年12月31日。",
    duration: "6天5晚",
    group: "15–40人（见报价表）",
    season: "至2026年12月31日",
    highlights: [
      "D1：关空 → 大阪城 → 心斋桥·道顿堀 → 伏见稻荷（赠樱花保湿霜）",
      "D2：白川乡世界遗产 → 高山阵屋（含门票）→ 上三之町",
      "D3：名古屋芥末博物馆 → 忍野八海 → 温泉（赠清酒畅饮）",
      "D4：富士山五合目 → 富士地震体验 → 河口湖",
      "D5：新宿免税店 → 涩谷 → 浅草 → 晴空塔 → 台场",
      "三项赠品：护肤品 / 温泉酒店清酒 / 和服体验（女士）"
    ],
    includes: [
      "餐食：5早 / 2午 / 4晚，D1–D5 每日1瓶水",
      "参考酒店：3–4星",
      "用车：16人以内考斯特，16人以上中巴或大巴",
      "小费：500日元/人/天 · 导游：印尼语 / 英语",
      "樱花季附加费（3/15–4/10）：15,000日元/人"
    ],
    days: [
      {
        label: "D1",
        title: "关西机场 – 大阪 – 京都 – 中部",
        schedule: [
          { time: "全天", text: "关西机场接机 → 大阪城公园 → 心斋桥·道顿堀 → 伏见稻荷大社 → 前往中部" },
          { time: "赠品", text: "赠①：Sakura Moisture Cream（价值9,000日元·至8/31）" }
        ],
        meals: "D",
        hotel: "Hotel Koyo Annex 或同级",
        transport: "机场接机 + 全天用车"
      },
      {
        label: "D2",
        title: "中部 – 白川乡 – 中部",
        schedule: [
          { time: "全天", text: "白川乡合掌村 → 高山阵屋（含门票）→ 上三之町" },
          { time: "赠品", text: "赠②：温泉酒店日本酒畅饮（至8/31）" }
        ],
        meals: "B / D",
        hotel: "Hotel Koyo Annex 或同级",
        transport: "全天包车"
      },
      {
        label: "D3",
        title: "中部 – 富士山",
        schedule: [
          { time: "全天", text: "名古屋山葵博物馆 → 山梨 → 忍野八海 → 温泉" },
          { time: "赠品", text: "赠③：和服体验（女士限定）" }
        ],
        meals: "B / L / D",
        hotel: "石川温泉 Kyousuiso 或同级",
        transport: "全天包车"
      },
      {
        label: "D4",
        title: "富士山",
        schedule: [
          { time: "全天", text: "富士山五合目 → 富士地震体验 → 河口湖" }
        ],
        meals: "B / L / D",
        hotel: "石川温泉 Kyousuiso 或同级",
        transport: "全天包车"
      },
      {
        label: "D5",
        title: "富士山 – 东京",
        schedule: [
          { time: "全天", text: "新宿免税店 → 涩谷·八公 → 浅草·仲见世 → 晴空塔（巴士观光）→ 台场高达·自由女神" }
        ],
        meals: "B",
        hotel: "Narita Gateway Hotel 或同级",
        transport: "全天包车"
      },
      {
        label: "D6",
        title: "东京送机",
        schedule: [
          { time: "AM", text: "酒店 → 机场（仅送机）→ 回国" }
        ],
        meals: "B",
        hotel: "—",
        transport: "送机"
      }
    ]
  },
  en: {
    title: "Golden Route · 6 Days 5 Nights (Standard)",
    subtitle: "Osaka → Tokyo · GOLDEN ROUTE TOUR",
    posterHeadline: "GOLDEN ROUTE TOUR",
    posterTagline: "KIX – Osaka – Kyoto – Chubu – Mt. Fuji – Tokyo",
    lead: "Classic 6D5N Golden Route from Kansai Airport to Tokyo. Shirakawa-go, Takayama, Mt. Fuji and Tokyo highlights for B2B partners. Valid until Dec 31, 2026.",
    duration: "6 Days 5 Nights",
    group: "15–40 pax (see fare table)",
    season: "Until Dec 31, 2026",
    highlights: [
      "Day 1: KIX → Osaka Castle → Dotonbori → Fushimi Inari (moisture cream gift)",
      "Day 2: Shirakawa-go UNESCO site → Takayama Jinya → old town",
      "Day 3: Wasabi Museum → Oshino Hakkai → onsen (sake buffet gift)",
      "Day 4: Mt. Fuji 5th Station → earthquake experience → Lake Kawaguchiko",
      "Day 5: Shinjuku DFS → Shibuya → Asakusa → SkyTree → Odaiba",
      "Complimentary gifts: skincare / onsen sake / kimono (ladies)"
    ],
    includes: [
      "Meals: 5B / 2L / 4D, 1 water bottle/day D1–D5",
      "Hotels: 3–4★ reference properties",
      "Vehicle: coaster under 16 pax, micro/bus for 16+",
      "Tips: JPY 500/person/day · Guide: Indonesian / English",
      "Cherry blossom surcharge (Mar 15–Apr 10): JPY 15,000/pax"
    ],
    days: [
      {
        label: "D1",
        title: "KIX – Osaka – Kyoto – Chubu",
        schedule: [
          { time: "AM", text: "Arrive Kansai International Airport" },
          { time: "PM", text: "Osaka Castle → Shinsaibashi & Dotonbori → Fushimi Inari → transfer to Chubu" },
          { time: "Gift", text: "Gift ①: Sakura Moisture Cream (JPY 9,000 value, until Aug 31)" }
        ],
        meals: "Dinner",
        hotel: "Hotel Koyo Annex or similar",
        transport: "Airport pick-up + coach"
      },
      {
        label: "D2",
        title: "Chubu – Shirakawa-go – Chubu",
        schedule: [
          { time: "Full", text: "Shirakawa-go gassho village → Takayama Jinya (admission) → Kamisan No Machi" },
          { time: "Gift", text: "Gift ②: Unlimited sake at onsen hotel (until Aug 31)" }
        ],
        meals: "B / D",
        hotel: "Hotel Koyo Annex or similar",
        transport: "Full-day charter bus"
      },
      {
        label: "D3",
        title: "Chubu – Mt. Fuji",
        schedule: [
          { time: "Full", text: "Nagoya Wasabi Museum → Yamanashi → Oshino Hakkai → onsen" },
          { time: "Gift", text: "Gift ③: Kimono experience (ladies only)" }
        ],
        meals: "B / L / D",
        hotel: "Isawa Onsen Kyousuiso or similar",
        transport: "Full-day charter bus"
      },
      {
        label: "D4",
        title: "Mt. Fuji Area",
        schedule: [
          { time: "Full", text: "Mt. Fuji 5th Station → Fuji Earthquake Experience → Lake Kawaguchiko" }
        ],
        meals: "B / L / D",
        hotel: "Isawa Onsen Kyousuiso or similar",
        transport: "Full-day charter bus"
      },
      {
        label: "D5",
        title: "Mt. Fuji – Tokyo",
        schedule: [
          { time: "Full", text: "Shinjuku duty free → Shibuya → Senso-ji → SkyTree → Odaiba Gundam & Liberty Statue" }
        ],
        meals: "Breakfast",
        hotel: "Narita Gateway Hotel or similar",
        transport: "Full-day charter bus"
      },
      {
        label: "D6",
        title: "Tokyo Airport Transfer",
        schedule: [
          { time: "AM", text: "Hotel → airport (drop-off only) · departure" }
        ],
        meals: "Breakfast",
        hotel: "—",
        transport: "Airport transfer"
      }
    ]
  }
};
