/* Tokyo 7D5N – sourced from 东京一地 7天5晚 行程報価表.xlsx + TOKYO DISCOVERY poster */
window.DEST_DATA.tokyo = {
  image: "../assets/images/posters/poster-tokyo-discovery.png",
  poster: "../assets/images/posters/poster-tokyo-discovery.png",
  pricing: [
    { pax: 12, price: 110107 },
    { pax: 13, price: 105940 },
    { pax: 14, price: 102369 },
    { pax: 15, price: 99273, featured: true },
    { pax: 16, price: 96565 },
    { pax: 17, price: 98587 },
    { pax: 18, price: 96218 },
    { pax: 19, price: 94098, featured: true },
    { pax: 20, price: 92190 },
    { pax: 21, price: 90464 }
  ],
  spots: [
    "Enoden · Kamakura",
    "Senso-ji · Asakusa",
    "Mt. Fuji · Kawaguchiko",
    "Shibuya Crossing",
    "Oshino Hakkai",
    "Ginza · Chuo",
    "Owakudani · Hakone"
  ],
  ja: {
    title: "東京一地 7日5晚モデルコース",
    subtitle: "1 Day Free · Classic Tokyo Discovery",
    posterHeadline: "TOKYO DISCOVERY",
    posterTagline: "A Journey Through Classic Tokyo — 現代都市・文化体験・グルメショッピング",
    lead: "お台場・浅草・富士山・鎌倉・東京タワー・銀座を網羅。1日自由行を含む7日5晚の定番東京プラン。2026年通年対応。",
    duration: "7 Days 5 Nights",
    group: "12–21名（报价表）",
    season: "2026年通年",
    highlights: [
      "HIMIKO水上バス（東京湾クルーズ・船票込）",
      "富士山いちご摘み（季節によりブルーベリー/富士急雪場に変更）",
      "温泉ホテル：女性限定着物体験＋日本酒90分飲み放題",
      "江ノ電体験・湘南海岸ドライブ・江の島",
      "D4：自由行 / ディズニー送迎 / 川越コース（3択）",
      "東京タワー150m展望（门票込）・銀座・秋葉原"
    ],
    includes: [
      "食事：昼1500円うなぎ定食 / 夕2500円焼肉自助または2000円温泉料理（报价表条件）",
      "参考ホテル：C-trip 4星（Hotel Cadenza Tokyo / 温泉旅館 / Narita Gateway 等）",
      "車両：16名以内コースター、16名以上マイクロ/大型バス",
      "旅行期間：2026年全年"
    ],
    days: [
      {
        label: "D1",
        title: "東京到着 · お台場 · 浅草 · 渋谷",
        schedule: [
          { time: "AM", text: "成田/羽田空港到着・ピックアップ（例：KUL-NRT MH88）" },
          { time: "PM", text: "お台場海浜公園（自由女神像・ガンダム）→ 宇宙船水上バス（HIMIKO・船票込）→ 浅草寺 → 渋谷" }
        ],
        meals: "夕食あり（昼食不含）",
        hotel: "Hotel Cadenza Tokyo 或同级",
        transport: "空港–市区 专车"
      },
      {
        label: "D2",
        title: "东京 → 富士山",
        schedule: [
          { time: "AM", text: "大涌谷（Owakudani）" },
          { time: "PM", text: "忍野八海 → 富士山草莓采摘（7–9月蓝莓、10–12月富士急雪场）" },
          { time: "EV", text: "温泉酒店：女士限定着物体验（价值2000日元/人）+ 日式清酒90分钟自助（价值5000日元/人）" }
        ],
        meals: "早 / 午 / 晚",
        hotel: "Kyousuiso 温泉酒店或同级",
        transport: "全天包车"
      },
      {
        label: "D3",
        title: "富士山 → 镰仓 → 东京",
        schedule: [
          { time: "AM", text: "江ノ電（Enoden）体验 · 自由活动时间" },
          { time: "PM", text: "湘南海岸ドライブ → 江の島" }
        ],
        meals: "早餐",
        hotel: "Hotel Cadenza Tokyo 或同级",
        transport: "全天包车"
      },
      {
        label: "D4",
        title: "自由活动日（1 Day Free）",
        schedule: [
          { time: "A", text: "自由活动" },
          { time: "B", text: "迪士尼乐园接送（可选）" },
          { time: "C", text: "小江户川越：一番街商店街、时之钟、川越冰川神社、菓子屋横丁" }
        ],
        meals: "早餐",
        hotel: "Hotel Cadenza Tokyo 或同级",
        transport: "选项B/C含部分接送"
      },
      {
        label: "D5",
        title: "东京 · 东京塔 · 银座 · 秋叶原",
        schedule: [
          { time: "AM", text: "东京塔 150m 登塔（含门票）" },
          { time: "PM", text: "银座自由购物 → 秋叶原" }
        ],
        meals: "早 / 午 / 晚",
        hotel: "Narita Gateway Hotel 或同级",
        transport: "全天包车"
      },
      {
        label: "D6",
        title: "送机 · 回国",
        schedule: [
          { time: "AM", text: "东京酒店接送 → 成田国际机场（例：NRT-KUL MH89 10:20-16:45）" },
          { time: "PM", text: "成田国际机场 → 回国" }
        ],
        meals: "早 / 午 / 晚",
        hotel: "—",
        transport: "酒店–机场 专车"
      }
    ]
  },
  zh: {
    title: "东京一地 7天5晚",
    subtitle: "含1天自由行 · TOKYO DISCOVERY",
    posterHeadline: "TOKYO DISCOVERY",
    posterTagline: "经典东京之旅 — 现代都市 · 文化体验 · 美食购物 · 人气景点",
    lead: "依据《东京一地 7天5晚 行程報価表》整理。涵盖台场、浅草、富士山、镰仓、东京塔、银座、秋叶原，含1天自由活动（可选迪士尼或川越）。",
    duration: "7天5晚",
    group: "12–21人（见报价表）",
    season: "2026年全年",
    highlights: [
      "台场海滨公园 → 宇宙飞船水上bus（含船票）→ 浅草寺 → 涩谷",
      "大涌谷 · 忍野八海 · 富士山草莓采摘（季节替换蓝莓/富士急雪场）",
      "温泉酒店：女士限定和服体验 + 日式清酒90分钟自助",
      "江之电体验 · 湘南海岸 · 江之岛",
      "D4 三选一：自由活动 / 迪士尼接送 / 川越小江户",
      "东京塔150m登塔（含门票）· 银座 · 秋叶原"
    ],
    includes: [
      "餐食：午餐1500日币鳗鱼饭定食；晚餐2500日币烤肉自助或2000日币温泉料理（报价表条件）",
      "参考酒店：C-trip 4星",
      "参考用车：16人以内考斯特，16人以上中巴或大巴",
      "期限：2026年全年"
    ],
    days: [
      {
        label: "D1",
        title: "抵达东京",
        schedule: [
          { time: "全天", text: "抵达东京 KUL-NRT MH88 2330-0740+1" },
          { time: "行程", text: "台场海滨公园（自由女神像、高达基地）→ 宇宙飞船水上bus（含船票）→ 浅草寺 → 涩谷" }
        ],
        meals: "午：× / 晚：○",
        hotel: "Hotel Cadenza Tokyo 或同级",
        transport: "机场接机 + 全天用车"
      },
      {
        label: "D2",
        title: "东京 → 富士山",
        schedule: [
          { time: "行程", text: "大涌谷 → 忍野八海 → 富士山草莓采摘（含门票，7-9月改蓝莓，10-12月改富士急雪场乐园）" },
          { time: "特别", text: "温泉酒店赠送：女士限定和服体验（价值2000日币/人）+ 日式清酒90分钟自助（价值5000日币/人）" }
        ],
        meals: "B / L / D",
        hotel: "温泉酒店 Kyousuiso 或同级",
        transport: "全天包车"
      },
      {
        label: "D3",
        title: "富士山 → 镰仓 → 东京",
        schedule: [
          { time: "行程", text: "江之电（Enoden）体验 · 湘南海岸公路 · 江之岛" }
        ],
        meals: "B",
        hotel: "Hotel Cadenza Tokyo 或同级",
        transport: "全天包车"
      },
      {
        label: "D4",
        title: "自由活动 / 迪士尼 / 川越",
        schedule: [
          { time: "A", text: "自由活动" },
          { time: "B", text: "迪士尼接送" },
          { time: "C", text: "小江户川越：一番街商店街、时之钟、川越冰川神社、菓子屋横丁" }
        ],
        meals: "B",
        hotel: "Hotel Cadenza Tokyo 或同级",
        transport: "按选项安排"
      },
      {
        label: "D5",
        title: "东京",
        schedule: [
          { time: "行程", text: "东京塔（150m登塔，含门票）→ 银座 → 秋叶原" }
        ],
        meals: "B / L / D",
        hotel: "Narita Gateway Hotel 或同级",
        transport: "全天包车"
      },
      {
        label: "D6",
        title: "送机回国",
        schedule: [
          { time: "行程", text: "东京酒店接送 → 回程 NRT-KUL MH89 1020-1645" },
          { time: "PM", text: "成田国际机场 → 回国" }
        ],
        meals: "B / L / D",
        hotel: "—",
        transport: "送机专车"
      }
    ]
  },
  en: {
    title: "Tokyo Discovery · 7 Days 5 Nights",
    subtitle: "1 Day Free · Classic Tokyo",
    posterHeadline: "TOKYO DISCOVERY",
    posterTagline: "A Journey Through Classic Tokyo — Modern City · Culture · Gourmet Shopping",
    lead: "Market-ready 7D5N Tokyo land program based on DRD quotation sheet and poster. Includes Mt. Fuji, Kamakura Enoden, free day options and Tokyo Tower.",
    duration: "7 Days 5 Nights",
    group: "12–21 pax (see fare table)",
    season: "Year 2026",
    highlights: [
      "HIMIKO futuristic water bus cruise on Tokyo Bay (ticket included)",
      "Mt. Fuji strawberry picking (seasonal alternates)",
      "Onsen stay with kimono experience & sake buffet",
      "Enoden tram experience along Kamakura & Shonan coast",
      "Day 4 options: Free time / Disneyland transfer / Kawagoe tour",
      "Tokyo Tower 150m observatory, Ginza & Akihabara"
    ],
    includes: [
      "Meals per quotation: lunch JPY 1,500 unagi set / dinner JPY 2,000–2,500",
      "Hotels: C-trip 4★ or similar",
      "Vehicle: coaster under 16 pax, micro/bus for 16+",
      "Travel period: full year 2026"
    ],
    days: [
      {
        label: "D1",
        title: "Arrive Tokyo",
        schedule: [
          { time: "AM", text: "Pick-up at Narita/Haneda Airport" },
          { time: "PM", text: "Odaiba Seaside Park → Himiko water bus → Senso-ji Temple → Shibuya" }
        ],
        meals: "Dinner included",
        hotel: "Hotel Cadenza Tokyo or similar",
        transport: "Airport pick-up + coach"
      },
      {
        label: "D2",
        title: "Tokyo → Mt. Fuji",
        schedule: [
          { time: "AM", text: "Owakudani volcanic valley" },
          { time: "PM", text: "Oshino Hakkai → Mt. Fuji 5th Station area · strawberry picking" },
          { time: "EV", text: "Onsen hotel: kimono experience & Japanese sake buffet" }
        ],
        meals: "B / L / D",
        hotel: "Kyousuiso onsen hotel or similar",
        transport: "Full-day charter bus"
      },
      {
        label: "D3",
        title: "Mt. Fuji → Kamakura → Tokyo",
        schedule: [
          { time: "AM", text: "Enoden Line experience" },
          { time: "PM", text: "Shonan Coast drive · Enoshima" }
        ],
        meals: "Breakfast",
        hotel: "Hotel Cadenza Tokyo or similar",
        transport: "Full-day charter bus"
      },
      {
        label: "D4",
        title: "Free Day (Choose One)",
        schedule: [
          { time: "A", text: "Free time at leisure" },
          { time: "B", text: "Disneyland transfer (optional)" },
          { time: "C", text: "Kawagoe: Ichibangai, Toki-no-Kane, Kawagoe Hikawa Shrine" }
        ],
        meals: "Breakfast",
        hotel: "Hotel Cadenza Tokyo or similar",
        transport: "Per option"
      },
      {
        label: "D5",
        title: "Tokyo City Tour",
        schedule: [
          { time: "AM", text: "Tokyo Tower 150m observatory (ticket included)" },
          { time: "PM", text: "Ginza shopping · Akihabara" }
        ],
        meals: "B / L / D",
        hotel: "Narita Gateway Hotel or similar",
        transport: "Full-day charter bus"
      },
      {
        label: "D6",
        title: "Airport Transfer · Departure",
        schedule: [
          { time: "AM", text: "Hotel pick-up → Narita/Haneda Airport" },
          { time: "PM", text: "International departure" }
        ],
        meals: "B / L / D",
        hotel: "—",
        transport: "Airport transfer"
      }
    ]
  }
};
