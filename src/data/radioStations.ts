/**
 * Radio Bahrain Vintage Broadcast Catalog & Thematic Station Definitions
 * Generated from official Radio Bahrain feeds at podcasts.adhari.com
 */

export interface EpisodeItem {
  id: string;
  videoId: string;
  playlistId: string;
  showTitle: string;
  title: string;
  publishedAt: string;
  duration: string;
  thumbnail: string;
  thematicTag?: string;
}

export interface ShowItem {
  id: string;
  title: string;
  count: number;
  category: string;
  color: string;
  thumbnail: string;
}

export interface RadioStation {
  id: string;
  frequency: number;
  frequencyDisplay: string;
  shortName: string;
  name: string;
  englishName: string;
  kicker: string;
  color: string;
  dialColor: string;
  description: string;
  thematicExplanation: string;
  episodeCount: number;
  showCount: number;
  shows: string[];
  sampleEpisodes?: EpisodeItem[];
}

export const RADIO_STATIONS: RadioStation[] = [
  {
    "id": "gulf-27-mondial",
    "frequency": 88,
    "frequencyDisplay": "88.0 FM",
    "shortName": "GULF 27",
    "name": "خليجي 27 والمونديال",
    "englishName": "Gulf 27 & World Cup",
    "kicker": "البطولات الكبرى واستوديو 27",
    "color": "#eab308",
    "dialColor": "#f59e0b",
    "description": "تغطيات بطولات المنتخبات الوطنية، كواليس خليجي 27 واستوديو 27، وتحليلات المونديال وكأس الخليج ولقاءات نجوم الكرة البحرينية.",
    "thematicExplanation": "تربط هذه المحطة بين برامج التغطية المونديالية والخليجية كـ (إف إم مونديال) و(خارج المستطيل الأخضر مع فايز السادة) واستوديو 27؛ حيث تجمع بين التحليل التكتيكي للبطولة، ذكريات كبار نجوم البحرين (مثل الكابتن حمود سلطان)، ورصد نبض الجماهير في المدرجات.",
    "episodeCount": 124,
    "showCount": 9,
    "shows": [
      "إف إم مونديال 2026",
      "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
      "بودكاست  - نجمين",
      "مسابقة  اللاتري  📡 - 2025م",
      "حكاية نجم 💫",
      "برنامج اف ام ليغ - الموسم 15",
      "مسابقات اللاتري 🌙",
      "برامج مباشرة 📡 Live Shows",
      "اسطوانة بحرينية"
    ],
    "sampleEpisodes": [
      {
        "id": "7bo061Yy_fA",
        "videoId": "7bo061Yy_fA",
        "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
        "showTitle": "إف إم مونديال 2026",
        "title": "برنامج 🏆 🎊 اف إم موندیال 40",
        "publishedAt": "",
        "duration": "PT1H18M53S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7bo061Yy_fA.jpg"
      },
      {
        "id": "utfgLosy7nM",
        "videoId": "utfgLosy7nM",
        "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
        "showTitle": "إف إم مونديال 2026",
        "title": "برنامج 🏆 🎊 اف إم موندیال 39",
        "publishedAt": "",
        "duration": "PT1H19M14S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/utfgLosy7nM.jpg"
      },
      {
        "id": "pvXHWhirOV4",
        "videoId": "pvXHWhirOV4",
        "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
        "showTitle": "إف إم مونديال 2026",
        "title": "متحف الكابتن القدير حمود سلطان نجم الكرة البحرينية وأبرز محطاته وانجازاته - تقرير إف إم مونديال",
        "publishedAt": "",
        "duration": "PT6M7S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/pvXHWhirOV4.jpg"
      },
      {
        "id": "GMf185RrbfQ",
        "videoId": "GMf185RrbfQ",
        "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
        "showTitle": "إف إم مونديال 2026",
        "title": "إف إم مونديال - مقتطفات من الحلقة 37",
        "publishedAt": "",
        "duration": "PT7M1S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/GMf185RrbfQ.jpg"
      },
      {
        "id": "PNfxSfRNDm0",
        "videoId": "PNfxSfRNDm0",
        "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
        "showTitle": "إف إم مونديال 2026",
        "title": "إف إم مونديال - مقتطفات من الحلقة 34",
        "publishedAt": "",
        "duration": "PT7M1S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/PNfxSfRNDm0.jpg"
      },
      {
        "id": "RVTk-gpjhFw",
        "videoId": "RVTk-gpjhFw",
        "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
        "showTitle": "إف إم مونديال 2026",
        "title": "إف إم مونديال - مقتطفات من الحلقة 35",
        "publishedAt": "",
        "duration": "PT7M1S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/RVTk-gpjhFw.jpg"
      },
      {
        "id": "YvLQlGaczmE",
        "videoId": "YvLQlGaczmE",
        "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
        "showTitle": "إف إم مونديال 2026",
        "title": "برنامج ⚽️ 🏆 اف ام مونديال 38",
        "publishedAt": "",
        "duration": "PT1H19M44S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/YvLQlGaczmE.jpg"
      },
      {
        "id": "KU4Tz4AQBv8",
        "videoId": "KU4Tz4AQBv8",
        "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
        "showTitle": "إف إم مونديال 2026",
        "title": "برنامج ⚽️ 🏆 اف ام مونديال 37",
        "publishedAt": "",
        "duration": "PT1H15M5S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/KU4Tz4AQBv8.jpg"
      },
      {
        "id": "1DShA1mXw_U",
        "videoId": "1DShA1mXw_U",
        "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
        "showTitle": "إف إم مونديال 2026",
        "title": "برنامج ⚽️ 🏆 اف ام مونديال 36",
        "publishedAt": "",
        "duration": "PT1H18M54S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/1DShA1mXw_U.jpg"
      },
      {
        "id": "P393SSqZLOU",
        "videoId": "P393SSqZLOU",
        "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
        "showTitle": "إف إم مونديال 2026",
        "title": "برنامج ⚽️ 🏆 اف ام مونديال 35",
        "publishedAt": "",
        "duration": "PT1H19M55S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/P393SSqZLOU.jpg"
      }
    ]
  },
  {
    "id": "football-league",
    "frequency": 90.4,
    "frequencyDisplay": "90.4 FM",
    "shortName": "LEAGUE",
    "name": "الدوري وكرة القدم المحلية",
    "englishName": "Football League & Matchday",
    "kicker": "دوري ناصر بن حمد والمنافسات",
    "color": "#22c55e",
    "dialColor": "#16a34a",
    "description": "متابعة شاملة لدوري ناصر بن حمد الممتاز، كلاسيكو البحرين، تحليلات المدربين، وصدى الجولات الكروية.",
    "thematicExplanation": "تجمع هذه المحطة بين مواسم (إف إم ليغ) المختلفة و(برنامج الدوري) و(صوت الشغف)؛ لتربط بين الاستوديو التحليلي لمباريات الدوري والتعليق الفني على قرارات التحكيم ومستويات الفرق البحرينية العريقة كالمحرق والأهلي والرفاع.",
    "episodeCount": 144,
    "showCount": 9,
    "shows": [
      "إف إم ليغ - موسم 17",
      "برنامج رونغ سايد (الموسم الثالث)",
      "إف إم ليغ - الموسم 16",
      "برنامج صوت الشغف ⚽️🏀",
      "برنامج اف ام ليغ - الموسم 15",
      "الصائم الإيجابي",
      "برنامج الدوري",
      "🎙️ برنامج #اف_ام_ليغ FM League",
      "برامج مباشرة 📡 Live Shows"
    ],
    "sampleEpisodes": [
      {
        "id": "gPUAqvTnJss",
        "videoId": "gPUAqvTnJss",
        "playlistId": "PLM2mjqKYg9rY",
        "showTitle": "إف إم ليغ - موسم 17",
        "title": "برنامج اف ام ليغ - ح 3",
        "publishedAt": "",
        "duration": "PT1H53M46S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/gPUAqvTnJss.jpg"
      },
      {
        "id": "ZN0kvmSjGmM",
        "videoId": "ZN0kvmSjGmM",
        "playlistId": "PLM2mjqKYg9rY",
        "showTitle": "إف إم ليغ - موسم 17",
        "title": "برنامج اف ام ليغ - ح 2",
        "publishedAt": "",
        "duration": "PT1H51M49S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ZN0kvmSjGmM.jpg"
      },
      {
        "id": "j-CNV-nmTGw",
        "videoId": "j-CNV-nmTGw",
        "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
        "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
        "title": "برنامج رونغ سايد - الحلقة الثالثة عشر - قتل الشغف",
        "publishedAt": "",
        "duration": "PT14M43S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/j-CNV-nmTGw.jpg"
      },
      {
        "id": "7b8N1YCLlbo",
        "videoId": "7b8N1YCLlbo",
        "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
        "showTitle": "إف إم ليغ - الموسم 16",
        "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح25",
        "publishedAt": "",
        "duration": "PT2H1M31S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7b8N1YCLlbo.jpg"
      },
      {
        "id": "M3P22RO54Qk",
        "videoId": "M3P22RO54Qk",
        "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
        "showTitle": "إف إم ليغ - الموسم 16",
        "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح24",
        "publishedAt": "",
        "duration": "PT1H58M13S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/M3P22RO54Qk.jpg"
      },
      {
        "id": "LOBDBzJ1zDs",
        "videoId": "LOBDBzJ1zDs",
        "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
        "showTitle": "إف إم ليغ - الموسم 16",
        "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح23",
        "publishedAt": "",
        "duration": "PT1H52M42S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/LOBDBzJ1zDs.jpg"
      },
      {
        "id": "OVNcKraYw4k",
        "videoId": "OVNcKraYw4k",
        "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
        "showTitle": "إف إم ليغ - الموسم 16",
        "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح22",
        "publishedAt": "",
        "duration": "PT2H38S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/OVNcKraYw4k.jpg"
      },
      {
        "id": "xFmTsd7HJ0E",
        "videoId": "xFmTsd7HJ0E",
        "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
        "showTitle": "إف إم ليغ - الموسم 16",
        "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح21",
        "publishedAt": "",
        "duration": "PT1H58M17S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/xFmTsd7HJ0E.jpg"
      },
      {
        "id": "nFKUJqrznbY",
        "videoId": "nFKUJqrznbY",
        "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
        "showTitle": "إف إم ليغ - الموسم 16",
        "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح20",
        "publishedAt": "",
        "duration": "PT1H50M48S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/nFKUJqrznbY.jpg"
      },
      {
        "id": "NzGW3U-l1jE",
        "videoId": "NzGW3U-l1jE",
        "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
        "showTitle": "إف إم ليغ - الموسم 16",
        "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح19",
        "publishedAt": "",
        "duration": "PT1H59M33S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/NzGW3U-l1jE.jpg"
      }
    ]
  },
  {
    "id": "motorsports-drs",
    "frequency": 92.8,
    "frequencyDisplay": "92.8 FM",
    "shortName": "F1 / DRS",
    "name": "حلبة البحرين وفورمولا 1",
    "englishName": "Motorsports & F1 DRS",
    "kicker": "السرعة وسباقات صخير",
    "color": "#ef4444",
    "dialColor": "#dc2626",
    "description": "تغطيات جائزة البحرين الكبرى للفورمولا 1، استوديو DRS المباشر، وأخبار رياضة المحركات في الشرق الأوسط.",
    "thematicExplanation": "محطة مخصصة لعشاق السرعة، تجمع بين التغطية الحصرية لجائزة البحرين الكبرى لسباقات الفورمولا 1 وحلقات البرنامج المباشر DRS، لتفصيل استراتيجيات التوقف وأداء المحركات والتطورات الميكانيكية لفرق الصدارة.",
    "episodeCount": 109,
    "showCount": 5,
    "shows": [
      "برنامج رونغ سايد (الموسم الثالث)",
      "البرنامج المباشر DRS",
      "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
      "برامج مباشرة 📡 Live Shows",
      "فواصل الفعاليات والبرامج الخاصة"
    ],
    "sampleEpisodes": [
      {
        "id": "5IlS0WFaNUM",
        "videoId": "5IlS0WFaNUM",
        "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
        "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
        "title": "برنامج رونغ سايد -  الحلقة الاولى - هوس الترند",
        "publishedAt": "",
        "duration": "PT13M38S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5IlS0WFaNUM.jpg"
      },
      {
        "id": "SuRV6Y84gxk",
        "videoId": "SuRV6Y84gxk",
        "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
        "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
        "title": "برنامج رونغ سايد -  الحلقة الثانية - السفر",
        "publishedAt": "",
        "duration": "PT14M52S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/SuRV6Y84gxk.jpg"
      },
      {
        "id": "_TibKeMGtrE",
        "videoId": "_TibKeMGtrE",
        "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
        "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
        "title": "برنامج رونغ سايد -  الحلقة الثالثة - الذكاء الاصطناعي",
        "publishedAt": "",
        "duration": "PT14M46S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/_TibKeMGtrE.jpg"
      },
      {
        "id": "qSkU_QgwMUU",
        "videoId": "qSkU_QgwMUU",
        "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
        "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
        "title": "برنامج رونغ سايد - الحلقة الرابعة - ثقافة الفن",
        "publishedAt": "",
        "duration": "PT14M57S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/qSkU_QgwMUU.jpg"
      },
      {
        "id": "7lLD9C11IWM",
        "videoId": "7lLD9C11IWM",
        "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
        "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
        "title": "برنامج رونغ سايد - الحلقة الخامسة - نسخ ولصق",
        "publishedAt": "",
        "duration": "PT14M48S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7lLD9C11IWM.jpg"
      },
      {
        "id": "8g8arIQ-eFA",
        "videoId": "8g8arIQ-eFA",
        "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
        "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
        "title": "برنامج رونغ سايد - الحلقة السادسة - فوضى السياقة",
        "publishedAt": "",
        "duration": "PT15M16S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8g8arIQ-eFA.jpg"
      },
      {
        "id": "bOc02zrZZDg",
        "videoId": "bOc02zrZZDg",
        "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
        "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
        "title": "برنامج رونغ سايد - الحلقة السابعة - الكوتش",
        "publishedAt": "",
        "duration": "PT12M12S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/bOc02zrZZDg.jpg"
      },
      {
        "id": "mbr8rM9S6_o",
        "videoId": "mbr8rM9S6_o",
        "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
        "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
        "title": "برنامج رونغ سايد - الحلقة الثامنة - الإعلام الإستعراضي",
        "publishedAt": "",
        "duration": "PT14M58S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/mbr8rM9S6_o.jpg"
      },
      {
        "id": "BPQuKmA4XRs",
        "videoId": "BPQuKmA4XRs",
        "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
        "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
        "title": "برنامج رونغ سايد - الحلقة التاسعة - الفطحل",
        "publishedAt": "",
        "duration": "PT14M52S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/BPQuKmA4XRs.jpg"
      },
      {
        "id": "iRRpitASNTM",
        "videoId": "iRRpitASNTM",
        "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
        "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
        "title": "برنامج رونغ سايد - الحلقة العاشرة - الطبقة الإجتماعية",
        "publishedAt": "",
        "duration": "PT14M28S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/iRRpitASNTM.jpg"
      }
    ]
  },
  {
    "id": "tech-future",
    "frequency": 95.2,
    "frequencyDisplay": "95.2 FM",
    "shortName": "TECH / AI",
    "name": "الذكاء الاصطناعي والتقنية",
    "englishName": "AI, Tech & Space",
    "kicker": "الابتكار وآفاق المستقبل",
    "color": "#06b6d4",
    "dialColor": "#0891b2",
    "description": "استشراف علوم المستقبل، تطبيقات الذكاء الاصطناعي، التحول الرقمي، واستكشاف الفضاء مع نخبة الخبراء.",
    "thematicExplanation": "تربط هذه الفئة بين برنامج (ذكاء وإبداع مع نورة أبو الشوك) وبرنامج (فضاء أقرب) وحلقات العلوم والتحول الرقمي من بودكاست (أريد أن أفهم)، لتشكل فضاءً معرفياً عن الذكاء الاصطناعي وعلوم الفلك والحياة الرقمية.",
    "episodeCount": 14,
    "showCount": 4,
    "shows": [
      "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
      "المايك الثالث 🎤 مع آلاء وناصر",
      "حكاية نجم 💫",
      "فضاء أقرب"
    ],
    "sampleEpisodes": [
      {
        "id": "HSxR_z7aWz0",
        "videoId": "HSxR_z7aWz0",
        "playlistId": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
        "showTitle": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
        "title": "برنامج ذكاء 🧠 وابداع 📲 ح1 تطبيق Pinterest",
        "publishedAt": "",
        "duration": "PT3M28S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/HSxR_z7aWz0.jpg"
      },
      {
        "id": "0rVg_A1r1wk",
        "videoId": "0rVg_A1r1wk",
        "playlistId": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
        "showTitle": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
        "title": "برنامج ذكاء 🧠 وابداع 📲 ح2 Canva",
        "publishedAt": "",
        "duration": "PT3M24S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/0rVg_A1r1wk.jpg"
      },
      {
        "id": "_fifPZydZuI",
        "videoId": "_fifPZydZuI",
        "playlistId": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
        "showTitle": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
        "title": "برنامج ذكاء 🧠 وابداع 📲 ح3 My Heritage App",
        "publishedAt": "",
        "duration": "PT3M30S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/_fifPZydZuI.jpg"
      },
      {
        "id": "EoTUl3Nukhk",
        "videoId": "EoTUl3Nukhk",
        "playlistId": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
        "showTitle": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
        "title": "برنامج ذكاء 🧠 وابداع 📲 ح4 - تطبيق IFTTT",
        "publishedAt": "",
        "duration": "PT3M18S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/EoTUl3Nukhk.jpg"
      },
      {
        "id": "XcqkrJzw2nU",
        "videoId": "XcqkrJzw2nU",
        "playlistId": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
        "showTitle": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
        "title": "برنامج ذكاء 🧠 وابداع 📲 ح5 تطبيق شعلة",
        "publishedAt": "",
        "duration": "PT2M56S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/XcqkrJzw2nU.jpg"
      },
      {
        "id": "QQa3bB2a9BM",
        "videoId": "QQa3bB2a9BM",
        "playlistId": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
        "showTitle": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
        "title": "برنامج ذكاء 🧠 وابداع 📲 ح6 Water Reminder",
        "publishedAt": "",
        "duration": "PT2M57S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/QQa3bB2a9BM.jpg"
      },
      {
        "id": "ejHhbjfXhYA",
        "videoId": "ejHhbjfXhYA",
        "playlistId": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
        "showTitle": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
        "title": "برنامج ذكاء 🧠 وابداع 📲 ح7 Snap Drop",
        "publishedAt": "",
        "duration": "PT3M5S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ejHhbjfXhYA.jpg"
      },
      {
        "id": "3_6lFk8JFWM",
        "videoId": "3_6lFk8JFWM",
        "playlistId": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
        "showTitle": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
        "title": "برنامج ذكاء 🧠 وابداع 📲 ح8 Petal Maps",
        "publishedAt": "",
        "duration": "PT2M51S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/3_6lFk8JFWM.jpg"
      },
      {
        "id": "OgkghkRxjoY",
        "videoId": "OgkghkRxjoY",
        "playlistId": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
        "showTitle": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
        "title": "برنامج ذكاء 🧠 وابداع 📲 ح9 Room Planner",
        "publishedAt": "",
        "duration": "PT2M59S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/OgkghkRxjoY.jpg"
      },
      {
        "id": "th1pKCyII74",
        "videoId": "th1pKCyII74",
        "playlistId": "PLFm3_OhqZyNb6EkXeJuXwSGGy4c_lZPUh",
        "showTitle": "المايك الثالث 🎤 مع آلاء وناصر",
        "title": "المايك الثالث 🎤 ح6 - القراءة الورقية أم الرقمية؟ 🤓",
        "publishedAt": "",
        "duration": "PT20M2S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/th1pKCyII74.jpg"
      }
    ]
  },
  {
    "id": "bahrain-heritage",
    "frequency": 97.6,
    "frequencyDisplay": "97.6 FM",
    "shortName": "HERITAGE",
    "name": "التراث وفنون الصوت البحريني",
    "englishName": "Bahrain Heritage & Sout",
    "kicker": "الأصالة والتاريخ الموسيقي",
    "color": "#f97316",
    "dialColor": "#ea580c",
    "description": "روائع فن الصوت البحريني، الفنون الشعبية والتراثية، وأندر الأسطوانات البحرينية المسجلة عبر الأجيال.",
    "thematicExplanation": "تنسج هذه المحطة جسراً موسيقياً وثائقياً يجمع بين جلسات فن الصوت العريقة للمطرب عبدالرحمن عوض، والتسجيلات النادرة لبرنامج (اسطوانة بحرينية)، والفنون الشعبية كالفجري والليوة والدور البحري.",
    "episodeCount": 84,
    "showCount": 7,
    "shows": [
      "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
      "فواصل الفعاليات والبرامج الخاصة",
      "نعم من حولنا",
      "فنون شعبية",
      "جلسة عبدالرحمن عوض - إذاعة مملكة البحرين",
      "اسطوانة بحرينية",
      "مُختارات منوعة"
    ],
    "sampleEpisodes": [
      {
        "id": "6Zhx3BdYLVA",
        "videoId": "6Zhx3BdYLVA",
        "playlistId": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
        "showTitle": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
        "title": "صوت عربية - ايا معشر العشاق 🎸 - عبدالرحمن عوض",
        "publishedAt": "",
        "duration": "PT6M52S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/6Zhx3BdYLVA.jpg"
      },
      {
        "id": "NCq89owxj-0",
        "videoId": "NCq89owxj-0",
        "playlistId": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
        "showTitle": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
        "title": "مقام منعوك عني ثم صوت يا من عليه التوكل والخلف 🎸 - عبدالرحمن عوض",
        "publishedAt": "",
        "duration": "PT8M59S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/NCq89owxj-0.jpg"
      },
      {
        "id": "l-l8KmRureo",
        "videoId": "l-l8KmRureo",
        "playlistId": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
        "showTitle": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
        "title": "صوت صبا نجد 🎸 - عبدالرحمن عوض",
        "publishedAt": "",
        "duration": "PT7M48S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/l-l8KmRureo.jpg"
      },
      {
        "id": "QdFCxB7LW8s",
        "videoId": "QdFCxB7LW8s",
        "playlistId": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
        "showTitle": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
        "title": "ضوت يحيى عمر قال في البندر 🎸 - عبدالرحمن عوض",
        "publishedAt": "",
        "duration": "PT6M46S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/QdFCxB7LW8s.jpg"
      },
      {
        "id": "qOM4aVnFNtQ",
        "videoId": "qOM4aVnFNtQ",
        "playlistId": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
        "showTitle": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
        "title": "صوت اليافعي قال كيف الحال 🎸 - عبدالرحمن عوض",
        "publishedAt": "",
        "duration": "PT8M6S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/qOM4aVnFNtQ.jpg"
      },
      {
        "id": "05f8OOzuzMg",
        "videoId": "05f8OOzuzMg",
        "playlistId": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
        "showTitle": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
        "title": "صوت بوعلي قال كيف القلب - عبدالرحمن عوض",
        "publishedAt": "",
        "duration": "PT8M2S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/05f8OOzuzMg.jpg"
      },
      {
        "id": "B-N2hxeqC_c",
        "videoId": "B-N2hxeqC_c",
        "playlistId": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
        "showTitle": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
        "title": "صوت جزيل العطا - عبدالرحمن عوض",
        "publishedAt": "",
        "duration": "PT6M15S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/B-N2hxeqC_c.jpg"
      },
      {
        "id": "Ue1d9f6r6aM",
        "videoId": "Ue1d9f6r6aM",
        "playlistId": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
        "showTitle": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
        "title": "صوت وبروحي من الغيد 🎸 - عبدالرحمن عوض",
        "publishedAt": "",
        "duration": "PT6M2S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Ue1d9f6r6aM.jpg"
      },
      {
        "id": "ErVJlCogT3A",
        "videoId": "ErVJlCogT3A",
        "playlistId": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
        "showTitle": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
        "title": "صوت مروبع - عظيم الشان 🎸 - عبدالرحمن عوض",
        "publishedAt": "",
        "duration": "PT4M24S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ErVJlCogT3A.jpg"
      },
      {
        "id": "qlP8CEgTW8s",
        "videoId": "qlP8CEgTW8s",
        "playlistId": "PLFm3_OhqZyNY1s5lB4zDWQPNDNGpgeFXe",
        "showTitle": "فواصل الفعاليات والبرامج الخاصة",
        "title": "جلسة iFM 2019",
        "publishedAt": "",
        "duration": "PT1M48S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/qlP8CEgTW8s.jpg"
      }
    ]
  },
  {
    "id": "culture-literature",
    "frequency": 100,
    "frequencyDisplay": "100.0 FM",
    "shortName": "CULTURE",
    "name": "الأدب وسهرات الحوار",
    "englishName": "Literature & Culture",
    "kicker": "خير جليس وما خط القلم",
    "color": "#a855f7",
    "dialColor": "#9333ea",
    "description": "قراءات أدبية وفكرية، سهرات حوارية راقية، حكايات النجوم، ومناقشة أمهات الكتب والمخطوطات.",
    "thematicExplanation": "توحد هذه المحطة رواد الكلمة والفكر عبر (ما خط القلم مع حسن الساعاتي)، و(سهرة خير جليس) للقراءة والمطالعة، و(سهرة الصورة الأخرى)، و(حكاية نجم) لتوثيق مسيرة الأدباء والفنانين.",
    "episodeCount": 29,
    "showCount": 5,
    "shows": [
      "بودكاست - أريد أن أفهم",
      "ما خط القلم 🪶 مع حسن الساعاتي",
      "حكاية نجم 💫",
      "سهرة الصورة الأخرى",
      "سهرة خير جليس"
    ],
    "sampleEpisodes": [
      {
        "id": "eFYtjLKnO9w",
        "videoId": "eFYtjLKnO9w",
        "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
        "showTitle": "بودكاست - أريد أن أفهم",
        "title": "أريد أن أفهم - مدخل إلى الأدب",
        "publishedAt": "",
        "duration": "PT52M9S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/eFYtjLKnO9w.jpg"
      },
      {
        "id": "7PEyE7EMPgc",
        "videoId": "7PEyE7EMPgc",
        "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
        "showTitle": "بودكاست - أريد أن أفهم",
        "title": "أريد أن افهم - ثقافة     101",
        "publishedAt": "",
        "duration": "PT53M2S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7PEyE7EMPgc.jpg"
      },
      {
        "id": "5QfM4oEJzZU",
        "videoId": "5QfM4oEJzZU",
        "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
        "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
        "title": "ما خط القلم 🪶 ح1",
        "publishedAt": "",
        "duration": "PT5M53S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5QfM4oEJzZU.jpg"
      },
      {
        "id": "aG0nimxk8E8",
        "videoId": "aG0nimxk8E8",
        "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
        "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
        "title": "ما خط القلم 🪶 ح14",
        "publishedAt": "",
        "duration": "PT5M49S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/aG0nimxk8E8.jpg"
      },
      {
        "id": "QPPDufmpZhc",
        "videoId": "QPPDufmpZhc",
        "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
        "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
        "title": "ما خط القلم 🪶 ح10",
        "publishedAt": "",
        "duration": "PT4M48S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/QPPDufmpZhc.jpg"
      },
      {
        "id": "6AOK6qmFCdg",
        "videoId": "6AOK6qmFCdg",
        "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
        "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
        "title": "ما خط القلم 🪶 ح8",
        "publishedAt": "",
        "duration": "PT4M57S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/6AOK6qmFCdg.jpg"
      },
      {
        "id": "XJylB2EGor0",
        "videoId": "XJylB2EGor0",
        "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
        "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
        "title": "ما خط القلم 🪶 ح7",
        "publishedAt": "",
        "duration": "PT5M28S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/XJylB2EGor0.jpg"
      },
      {
        "id": "I-ByX360-Fw",
        "videoId": "I-ByX360-Fw",
        "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
        "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
        "title": "ما خط القلم 🪶 ح6",
        "publishedAt": "",
        "duration": "PT5M52S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/I-ByX360-Fw.jpg"
      },
      {
        "id": "W4ahhZabK1I",
        "videoId": "W4ahhZabK1I",
        "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
        "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
        "title": "ما خط القلم 🪶 ح5",
        "publishedAt": "",
        "duration": "PT5M5S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/W4ahhZabK1I.jpg"
      },
      {
        "id": "HvIjJPrfRI8",
        "videoId": "HvIjJPrfRI8",
        "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
        "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
        "title": "ما خط القلم 🪶 ح4",
        "publishedAt": "",
        "duration": "PT5M9S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/HvIjJPrfRI8.jpg"
      }
    ]
  },
  {
    "id": "self-coaching",
    "frequency": 102.5,
    "frequencyDisplay": "102.5 FM",
    "shortName": "WELLBEING",
    "name": "تطوير الذات وجودة الحياة",
    "englishName": "Coaching & Wellbeing",
    "kicker": "جبرة خاطر ولنبدأ معاً",
    "color": "#ec4899",
    "dialColor": "#db2777",
    "description": "إرشادات نفسية وتطويرية، بناء الثقة بالنفس، تعزيز العلاقات الإنسانية، وأسرار راحة البال.",
    "thematicExplanation": "حلقة وصل بين كوتشينغ الحياة الإيجابي في (جبرة خاطر مع عائشة دانش)، وخطوات التغيير في (لنبدأ معاً مع نسرين معروف)، وفلسفة الصحة الشاملة في (بودكاست إكسير الحياة) و(أريد أن أفهم).",
    "episodeCount": 81,
    "showCount": 9,
    "shows": [
      "بودكاست - أريد أن أفهم",
      "المايك الثالث 🎤 مع آلاء وناصر",
      "الصائم الإيجابي 👌",
      "لنبدأ معاً - مع نسرين معروف",
      "جبرة خاطر 💫 مع الكوتش عائشة دانش",
      "المسلسل الكوميدي الإذاعي “هب السعد”",
      "لقاءات - برنامج ريفرش",
      "الصائم الإيجابي",
      "بودكاست إكسير الحياة"
    ],
    "sampleEpisodes": [
      {
        "id": "p9x671wZdXY",
        "videoId": "p9x671wZdXY",
        "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
        "showTitle": "بودكاست - أريد أن أفهم",
        "title": "أريد أن أفهم - مدخل إلى النفس",
        "publishedAt": "",
        "duration": "PT55M56S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/p9x671wZdXY.jpg"
      },
      {
        "id": "wGUHcho1EMI",
        "videoId": "wGUHcho1EMI",
        "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
        "showTitle": "بودكاست - أريد أن أفهم",
        "title": "أريد أن أفهم - مدخل إلى الترجمة",
        "publishedAt": "",
        "duration": "PT55M22S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/wGUHcho1EMI.jpg"
      },
      {
        "id": "F2eWddnR_XY",
        "videoId": "F2eWddnR_XY",
        "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
        "showTitle": "بودكاست - أريد أن أفهم",
        "title": "أريد أن أفهم - مدخل إلى الفيزياء",
        "publishedAt": "",
        "duration": "PT1H1M31S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/F2eWddnR_XY.jpg"
      },
      {
        "id": "SOwRfB2oaEA",
        "videoId": "SOwRfB2oaEA",
        "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
        "showTitle": "بودكاست - أريد أن أفهم",
        "title": "أريد أن أفهم - مدخل إلى الدراما",
        "publishedAt": "",
        "duration": "PT1H42S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/SOwRfB2oaEA.jpg"
      },
      {
        "id": "5C0BIJ9LgKw",
        "videoId": "5C0BIJ9LgKw",
        "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
        "showTitle": "بودكاست - أريد أن أفهم",
        "title": "أريد أن أفهم - مدخل إلى المتاحف",
        "publishedAt": "",
        "duration": "PT56M43S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5C0BIJ9LgKw.jpg"
      },
      {
        "id": "Ee-1fQpt_P4",
        "videoId": "Ee-1fQpt_P4",
        "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
        "showTitle": "بودكاست - أريد أن أفهم",
        "title": "أريد أن أفهم - مدخل إلى العمارة",
        "publishedAt": "",
        "duration": "PT52M45S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Ee-1fQpt_P4.jpg"
      },
      {
        "id": "8H4ke_Iv0-M",
        "videoId": "8H4ke_Iv0-M",
        "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
        "showTitle": "بودكاست - أريد أن أفهم",
        "title": "أريد أن أفهم - مدخل إلى الموسيقى",
        "publishedAt": "",
        "duration": "PT57M52S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8H4ke_Iv0-M.jpg"
      },
      {
        "id": "utYq0BErHEs",
        "videoId": "utYq0BErHEs",
        "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
        "showTitle": "بودكاست - أريد أن أفهم",
        "title": "أريد ان افهم - مدخل إلى التاريخ",
        "publishedAt": "",
        "duration": "PT56M55S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/utYq0BErHEs.jpg"
      },
      {
        "id": "TaDC75H0sCY",
        "videoId": "TaDC75H0sCY",
        "playlistId": "PLFm3_OhqZyNb6EkXeJuXwSGGy4c_lZPUh",
        "showTitle": "المايك الثالث 🎤 مع آلاء وناصر",
        "title": "المايك الثالث 🎤 ح5 - الحياة في المدينة 🌇",
        "publishedAt": "",
        "duration": "PT19M5S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/TaDC75H0sCY.jpg"
      },
      {
        "id": "8NeWZgJ7vMI",
        "videoId": "8NeWZgJ7vMI",
        "playlistId": "PLFm3_OhqZyNb6EkXeJuXwSGGy4c_lZPUh",
        "showTitle": "المايك الثالث 🎤 مع آلاء وناصر",
        "title": "المايك الثالث 🎤 ح2 - الصحة النفسية 🔮",
        "publishedAt": "",
        "duration": "PT28M25S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8NeWZgJ7vMI.jpg"
      }
    ]
  },
  {
    "id": "society-youth",
    "frequency": 105,
    "frequencyDisplay": "105.0 FM",
    "shortName": "SOCIETY",
    "name": "الميلس والمجتمع والشباب",
    "englishName": "Youth, Council & Society",
    "kicker": "سوالف الميلس والمايك الثالث",
    "color": "#3b82f6",
    "dialColor": "#2563eb",
    "description": "جلسات حوارية شبابية عفوية، نقاشات اجتماعية معاصرة، ونبض المجتمع البحريني اليومي.",
    "thematicExplanation": "تنقل هذه المحطة أجواء الميلس البحريني الدافئ عبر برنامج (شباب الميلس)، والنقاشات التفاعلية العفوية في (المايك الثالث مع آلاء وناصر)، ولقاءات (ريفرش) و(بودكاست نجمين) والبث المباشر.",
    "episodeCount": 94,
    "showCount": 10,
    "shows": [
      "شباب الميلس",
      "برامج خاصة 2025",
      "بودكاست  - نجمين",
      "موقع على الخريطة  🗾 📍",
      "المايك الثالث 🎤 مع آلاء وناصر",
      "برامج خاصة",
      "لقاءات - برنامج ريفرش",
      "برامج مباشرة 📡 Live Shows",
      "فواصل الفعاليات والبرامج الخاصة",
      "مُختارات منوعة"
    ],
    "sampleEpisodes": [
      {
        "id": "bFF1efeUqYE",
        "videoId": "bFF1efeUqYE",
        "playlistId": "PLBW97qEXrcO8",
        "showTitle": "شباب الميلس",
        "title": "شباب الميلس - ح 9",
        "publishedAt": "",
        "duration": "PT50M7S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/bFF1efeUqYE.jpg"
      },
      {
        "id": "w6vkjgR0nis",
        "videoId": "w6vkjgR0nis",
        "playlistId": "PLBW97qEXrcO8",
        "showTitle": "شباب الميلس",
        "title": "شباب الميلس - ح 8 مع الفنان حسن محمد",
        "publishedAt": "",
        "duration": "PT1H22M48S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/w6vkjgR0nis.jpg"
      },
      {
        "id": "9icw8X4ftwY",
        "videoId": "9icw8X4ftwY",
        "playlistId": "PLBW97qEXrcO8",
        "showTitle": "شباب الميلس",
        "title": "شباب الميلس - ح 7",
        "publishedAt": "",
        "duration": "PT50M49S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/9icw8X4ftwY.jpg"
      },
      {
        "id": "kGnJHYcqqo4",
        "videoId": "kGnJHYcqqo4",
        "playlistId": "PLBW97qEXrcO8",
        "showTitle": "شباب الميلس",
        "title": "شباب الميلس - ح 6",
        "publishedAt": "",
        "duration": "PT52M37S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/kGnJHYcqqo4.jpg"
      },
      {
        "id": "LCX7mIwrrsA",
        "videoId": "LCX7mIwrrsA",
        "playlistId": "PLBW97qEXrcO8",
        "showTitle": "شباب الميلس",
        "title": "شباب الميلس - ح 5",
        "publishedAt": "",
        "duration": "PT49M55S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/LCX7mIwrrsA.jpg"
      },
      {
        "id": "VWiPUqdg2Ok",
        "videoId": "VWiPUqdg2Ok",
        "playlistId": "PLBW97qEXrcO8",
        "showTitle": "شباب الميلس",
        "title": "شباب الميلس - ح 4",
        "publishedAt": "",
        "duration": "PT50M32S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/VWiPUqdg2Ok.jpg"
      },
      {
        "id": "MXNG_Hrrnrg",
        "videoId": "MXNG_Hrrnrg",
        "playlistId": "PLBW97qEXrcO8",
        "showTitle": "شباب الميلس",
        "title": "شباب الميلس - ح 3",
        "publishedAt": "",
        "duration": "PT38M59S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/MXNG_Hrrnrg.jpg"
      },
      {
        "id": "6t27RnVW-u8",
        "videoId": "6t27RnVW-u8",
        "playlistId": "PLBW97qEXrcO8",
        "showTitle": "شباب الميلس",
        "title": "شباب الميلس - ح2",
        "publishedAt": "",
        "duration": "PT47M59S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/6t27RnVW-u8.jpg"
      },
      {
        "id": "ljXrhhTzivQ",
        "videoId": "ljXrhhTzivQ",
        "playlistId": "PLBW97qEXrcO8",
        "showTitle": "شباب الميلس",
        "title": "شباب الميلس - الأولى",
        "publishedAt": "",
        "duration": "PT52M35S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ljXrhhTzivQ.jpg"
      },
      {
        "id": "53HVXQsEJ3w",
        "videoId": "53HVXQsEJ3w",
        "playlistId": "PLBW97qEXrcO8",
        "showTitle": "شباب الميلس",
        "title": "شباب الميلس - ح 10",
        "publishedAt": "",
        "duration": "PT48M12S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/53HVXQsEJ3w.jpg"
      }
    ]
  },
  {
    "id": "drama-comedy",
    "frequency": 107,
    "frequencyDisplay": "107.0 FM",
    "shortName": "DRAMA",
    "name": "الدراما والمسابقات الإذاعية",
    "englishName": "Drama, Comedy & Contests",
    "kicker": "هب السعد ومسابقات اللاتري",
    "color": "#8b5cf6",
    "dialColor": "#7c3aed",
    "description": "المسلسلات الإذاعية الكوميدية، نوستالجيا فرقة الأصلي، ومسابقات اللاتري التراثية والجوائز التفاعلية.",
    "thematicExplanation": "تجمع بين نوستالجيا الدراما الإذاعية البحرينية في المسلسل الكوميدي (هب السعد) و(فرقة الأصلي)، ومسابقات (اللاتري الإذاعية 2025 و2026) التي يترقبها المستمعون لحل الألغاز والتنافس الثقافي.",
    "episodeCount": 86,
    "showCount": 6,
    "shows": [
      "اللاتري 2026",
      "فرقة الأصلي",
      "المسلسل الكوميدي الإذاعي “هب السعد”",
      "مسابقة  اللاتري  📡 - 2025م",
      "مسابقات اللاتري 🌙",
      "أسئلة على الهواء"
    ],
    "sampleEpisodes": [
      {
        "id": "w7nSUsZGSx4",
        "videoId": "w7nSUsZGSx4",
        "playlistId": "PLFm3_OhqZyNZs2il3aFJci34cq0ssQPZk",
        "showTitle": "اللاتري 2026",
        "title": "مسابقة  اللاتري  🥇 9 رمضان",
        "publishedAt": "",
        "duration": "PT1H27M37S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/w7nSUsZGSx4.jpg"
      },
      {
        "id": "chua06PletQ",
        "videoId": "chua06PletQ",
        "playlistId": "PLFm3_OhqZyNZs2il3aFJci34cq0ssQPZk",
        "showTitle": "اللاتري 2026",
        "title": "مسابقة  اللاتري  🥇 8 رمضان",
        "publishedAt": "",
        "duration": "PT1H24M52S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/chua06PletQ.jpg"
      },
      {
        "id": "5Fo5c1x-4DE",
        "videoId": "5Fo5c1x-4DE",
        "playlistId": "PLFm3_OhqZyNZs2il3aFJci34cq0ssQPZk",
        "showTitle": "اللاتري 2026",
        "title": "مسابقة  اللاتري  🥇 7 رمضان",
        "publishedAt": "",
        "duration": "PT1H26M20S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5Fo5c1x-4DE.jpg"
      },
      {
        "id": "E7F5siCwHBg",
        "videoId": "E7F5siCwHBg",
        "playlistId": "PLFm3_OhqZyNZs2il3aFJci34cq0ssQPZk",
        "showTitle": "اللاتري 2026",
        "title": "مسابقة  اللاتري  🥇 6 رمضان",
        "publishedAt": "",
        "duration": "PT1H26M40S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/E7F5siCwHBg.jpg"
      },
      {
        "id": "bcdSxPuPUJk",
        "videoId": "bcdSxPuPUJk",
        "playlistId": "PLFm3_OhqZyNZs2il3aFJci34cq0ssQPZk",
        "showTitle": "اللاتري 2026",
        "title": "مسابقة  اللاتري  🥇 5 رمضان",
        "publishedAt": "",
        "duration": "PT1H28M13S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/bcdSxPuPUJk.jpg"
      },
      {
        "id": "UGJBh5DsjLw",
        "videoId": "UGJBh5DsjLw",
        "playlistId": "PLFm3_OhqZyNZs2il3aFJci34cq0ssQPZk",
        "showTitle": "اللاتري 2026",
        "title": "مسابقة  اللاتري  🥇 4 رمضان",
        "publishedAt": "",
        "duration": "PT1H42M52S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/UGJBh5DsjLw.jpg"
      },
      {
        "id": "WkG-dpkxCm0",
        "videoId": "WkG-dpkxCm0",
        "playlistId": "PLFm3_OhqZyNZs2il3aFJci34cq0ssQPZk",
        "showTitle": "اللاتري 2026",
        "title": "مسابقة  اللاتري  🥇 2 رمضان",
        "publishedAt": "",
        "duration": "PT1H29M42S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/WkG-dpkxCm0.jpg"
      },
      {
        "id": "WRN6OtQfAHM",
        "videoId": "WRN6OtQfAHM",
        "playlistId": "PLFm3_OhqZyNZs2il3aFJci34cq0ssQPZk",
        "showTitle": "اللاتري 2026",
        "title": "مسابقة  اللاتري  🥇",
        "publishedAt": "",
        "duration": "PT1H26M35S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/WRN6OtQfAHM.jpg"
      },
      {
        "id": "g-7B_VX5cwI",
        "videoId": "g-7B_VX5cwI",
        "playlistId": "PLFm3_OhqZyNZSlS3TuRV511HKpHrh1Aie",
        "showTitle": "فرقة الأصلي",
        "title": "سامري سدرة هيضتني - فرقة الأصلي",
        "publishedAt": "",
        "duration": "PT5M1S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/g-7B_VX5cwI.jpg"
      },
      {
        "id": "hn6NGQyyv5U",
        "videoId": "hn6NGQyyv5U",
        "playlistId": "PLFm3_OhqZyNZSlS3TuRV511HKpHrh1Aie",
        "showTitle": "فرقة الأصلي",
        "title": "دزة - فرقة الأصلي",
        "publishedAt": "",
        "duration": "PT5M10S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/hn6NGQyyv5U.jpg"
      }
    ]
  },
  {
    "id": "spiritual-values",
    "frequency": 108,
    "frequencyDisplay": "108.0 FM",
    "shortName": "SPIRIT",
    "name": "الروحانيات والقيم الإيمانية",
    "englishName": "Spiritual & Islamic Values",
    "kicker": "السكينة ونفحات الإيمان",
    "color": "#10b981",
    "dialColor": "#059669",
    "description": "تأملات روحانية، خواطر إيمانية، سنن وعبادات منسية، وقصص العبرة من التراث الإسلامي.",
    "thematicExplanation": "واحة للسكينة تجمع بين برنامج (الصائم الإيجابي)، و(عبادات منسية)، و(دلالات)، و(أصحاب الفيل)، و(نعم من حولنا) لترسيخ قيم التراحم والامتنان والتأمل في النعم الإلهية.",
    "episodeCount": 45,
    "showCount": 4,
    "shows": [
      "عبادات منسية",
      "دلالات",
      "أصحاب الفيل",
      "نعم من حولنا"
    ],
    "sampleEpisodes": [
      {
        "id": "wHLimbDROxQ",
        "videoId": "wHLimbDROxQ",
        "playlistId": "PLFm3_OhqZyNaY6erMT1EP28_HeA30znAg",
        "showTitle": "عبادات منسية",
        "title": "حلقة",
        "publishedAt": "",
        "duration": "PT0S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/wHLimbDROxQ.jpg"
      },
      {
        "id": "c-PKC16d34s",
        "videoId": "c-PKC16d34s",
        "playlistId": "PLFm3_OhqZyNaY6erMT1EP28_HeA30znAg",
        "showTitle": "عبادات منسية",
        "title": "عبادات منسية - الحلقة 03",
        "publishedAt": "",
        "duration": "PT10M0S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/c-PKC16d34s.jpg"
      },
      {
        "id": "OZgzRBHSYKY",
        "videoId": "OZgzRBHSYKY",
        "playlistId": "PLFm3_OhqZyNaY6erMT1EP28_HeA30znAg",
        "showTitle": "عبادات منسية",
        "title": "عبادات منسية - الحلقة 15",
        "publishedAt": "",
        "duration": "PT9M30S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/OZgzRBHSYKY.jpg"
      },
      {
        "id": "-41cRCFAxkk",
        "videoId": "-41cRCFAxkk",
        "playlistId": "PLFm3_OhqZyNaY6erMT1EP28_HeA30znAg",
        "showTitle": "عبادات منسية",
        "title": "عبادات منسية   الحلقة 05",
        "publishedAt": "",
        "duration": "PT10M48S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/-41cRCFAxkk.jpg"
      },
      {
        "id": "zd8pOKyq8A8",
        "videoId": "zd8pOKyq8A8",
        "playlistId": "PLFm3_OhqZyNaY6erMT1EP28_HeA30znAg",
        "showTitle": "عبادات منسية",
        "title": "عبادات منسية   الحلقة 04",
        "publishedAt": "",
        "duration": "PT9M24S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/zd8pOKyq8A8.jpg"
      },
      {
        "id": "Ddu1OTRnRBo",
        "videoId": "Ddu1OTRnRBo",
        "playlistId": "PLFm3_OhqZyNaY6erMT1EP28_HeA30znAg",
        "showTitle": "عبادات منسية",
        "title": "عبادات منسية   الحلقة 02",
        "publishedAt": "",
        "duration": "PT9M23S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Ddu1OTRnRBo.jpg"
      },
      {
        "id": "vGZ8mwkpePU",
        "videoId": "vGZ8mwkpePU",
        "playlistId": "PLFm3_OhqZyNaY6erMT1EP28_HeA30znAg",
        "showTitle": "عبادات منسية",
        "title": "عبادات منسية   الحلقة 01",
        "publishedAt": "",
        "duration": "PT9M19S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/vGZ8mwkpePU.jpg"
      },
      {
        "id": "ewqvgXEyp1k",
        "videoId": "ewqvgXEyp1k",
        "playlistId": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
        "showTitle": "دلالات",
        "title": "دلالات - حلقة 15 - الــمغامــرة",
        "publishedAt": "",
        "duration": "PT6M18S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ewqvgXEyp1k.jpg"
      },
      {
        "id": "-WJoAD5nqYY",
        "videoId": "-WJoAD5nqYY",
        "playlistId": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
        "showTitle": "دلالات",
        "title": "دلالات - حلقة 14 - الانـطـباع",
        "publishedAt": "",
        "duration": "PT8M45S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/-WJoAD5nqYY.jpg"
      },
      {
        "id": "CBVh8OHOS4Q",
        "videoId": "CBVh8OHOS4Q",
        "playlistId": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
        "showTitle": "دلالات",
        "title": "دلالات - حلقة 18 - ســرعة البـديهة",
        "publishedAt": "",
        "duration": "PT7M3S",
        "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/CBVh8OHOS4Q.jpg"
      }
    ]
  }
];

export const ALL_SHOWS: ShowItem[] = [
  {
    "id": "PLBW97qEXrcO8",
    "title": "شباب الميلس",
    "count": 15,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/bFF1efeUqYE.jpg"
  },
  {
    "id": "PLM2mjqKYg9rY",
    "title": "إف إم ليغ - موسم 17",
    "count": 2,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/gPUAqvTnJss.jpg"
  },
  {
    "id": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "title": "إف إم مونديال 2026",
    "count": 45,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7bo061Yy_fA.jpg"
  },
  {
    "id": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
    "title": "برنامج رونغ سايد (الموسم الثالث)",
    "count": 15,
    "category": "برامج",
    "color": "#c084fc",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5IlS0WFaNUM.jpg"
  },
  {
    "id": "PLFm3_OhqZyNZs2il3aFJci34cq0ssQPZk",
    "title": "اللاتري 2026",
    "count": 8,
    "category": "مسابقات",
    "color": "#e879f9",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/w7nSUsZGSx4.jpg"
  },
  {
    "id": "PLFm3_OhqZyNZWE7YGGhRYxJ6dtDkeQLwZ",
    "title": "برامج خاصة 2025",
    "count": 2,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/cPXhIYf0uRk.jpg"
  },
  {
    "id": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "title": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "count": 19,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ZyGjdSEMXm8.jpg"
  },
  {
    "id": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "title": "إف إم ليغ - الموسم 16",
    "count": 21,
    "category": "برامج",
    "color": "#c084fc",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7b8N1YCLlbo.jpg"
  },
  {
    "id": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
    "title": "بودكاست - أريد أن أفهم",
    "count": 10,
    "category": "بودكاست",
    "color": "#60a5fa",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/p9x671wZdXY.jpg"
  },
  {
    "id": "PLFm3_OhqZyNZdcIRpO0bLkD_XqJ-Q7Xta",
    "title": "بودكاست  - نجمين",
    "count": 12,
    "category": "بودكاست",
    "color": "#60a5fa",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/z6Q2MOzEZC8.jpg"
  },
  {
    "id": "PLFm3_OhqZyNYKfK4Og-tGM0ggShwciqkG",
    "title": "موقع على الخريطة  🗾 📍",
    "count": 1,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/QcHIMTuFSVA.jpg"
  },
  {
    "id": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
    "title": "ما خط القلم 🪶 مع حسن الساعاتي",
    "count": 11,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5QfM4oEJzZU.jpg"
  },
  {
    "id": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
    "title": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
    "count": 9,
    "category": "برامج",
    "color": "#c084fc",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/HSxR_z7aWz0.jpg"
  },
  {
    "id": "PLFm3_OhqZyNb6EkXeJuXwSGGy4c_lZPUh",
    "title": "المايك الثالث 🎤 مع آلاء وناصر",
    "count": 8,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/TaDC75H0sCY.jpg"
  },
  {
    "id": "PLFm3_OhqZyNY0kkMjr1RXSirkM-c5eWNe",
    "title": "الصائم الإيجابي 👌",
    "count": 6,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/SZy6bj96plk.jpg"
  },
  {
    "id": "PLFm3_OhqZyNZQdDlfoNL5LjbI-SeWxdeu",
    "title": "برامج خاصة",
    "count": 3,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/WcPu63f4sfQ.jpg"
  },
  {
    "id": "PLFm3_OhqZyNZnP5ZswRCA8AuLklt2-PEj",
    "title": "لنبدأ معاً - مع نسرين معروف",
    "count": 15,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ZAJCzPowB2o.jpg"
  },
  {
    "id": "PLFm3_OhqZyNaPsa8ndqb9q0AvzW40IoI4",
    "title": "جبرة خاطر 💫 مع الكوتش عائشة دانش",
    "count": 13,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/SEQ9lPGkwH8.jpg"
  },
  {
    "id": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "title": "البرنامج المباشر DRS",
    "count": 30,
    "category": "برامج",
    "color": "#c084fc",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/tm54BJG7_YE.jpg"
  },
  {
    "id": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "title": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "count": 18,
    "category": "مباشر",
    "color": "#34d399",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/s0UkPAgG7lw.jpg"
  },
  {
    "id": "PLFm3_OhqZyNZSlS3TuRV511HKpHrh1Aie",
    "title": "فرقة الأصلي",
    "count": 5,
    "category": "فن وموسيقى",
    "color": "#f87171",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/g-7B_VX5cwI.jpg"
  },
  {
    "id": "PLFm3_OhqZyNZp6KpRkY6TA1LR6RyfzBBf",
    "title": "المسلسل الكوميدي الإذاعي “هب السعد”",
    "count": 16,
    "category": "دراما",
    "color": "#fb923c",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/T1sJyOTsIT4.jpg"
  },
  {
    "id": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "title": "مسابقة  اللاتري  📡 - 2025م",
    "count": 28,
    "category": "مسابقات",
    "color": "#e879f9",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/pKUBuFawgF0.jpg"
  },
  {
    "id": "PLFm3_OhqZyNZT_-Q7To32bGf7rEEpWEan",
    "title": "حكاية نجم 💫",
    "count": 7,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/RjF5cRfNjt0.jpg"
  },
  {
    "id": "PLFm3_OhqZyNZkw0bVpAK3rXfhWQ3YKnBX",
    "title": "برنامج صوت الشغف ⚽️🏀",
    "count": 12,
    "category": "برامج",
    "color": "#c084fc",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/YGo7BzB2LaY.jpg"
  },
  {
    "id": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "title": "برنامج اف ام ليغ - الموسم 15",
    "count": 40,
    "category": "برامج",
    "color": "#c084fc",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/zMOeQnb_Qv0.jpg"
  },
  {
    "id": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
    "title": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
    "count": 9,
    "category": "فن وموسيقى",
    "color": "#f87171",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/6Zhx3BdYLVA.jpg"
  },
  {
    "id": "PLFm3_OhqZyNaY6erMT1EP28_HeA30znAg",
    "title": "عبادات منسية",
    "count": 7,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/wHLimbDROxQ.jpg"
  },
  {
    "id": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
    "title": "دلالات",
    "count": 15,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ewqvgXEyp1k.jpg"
  },
  {
    "id": "PLFm3_OhqZyNYov2q_5DfV-aIvFLx4rGu4",
    "title": "لقاءات - برنامج ريفرش",
    "count": 10,
    "category": "برامج",
    "color": "#c084fc",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/2GQETVvMeC0.jpg"
  },
  {
    "id": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "title": "الصائم الإيجابي",
    "count": 20,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/y0Fd4A34rh4.jpg"
  },
  {
    "id": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "title": "مسابقات اللاتري 🌙",
    "count": 24,
    "category": "مسابقات",
    "color": "#e879f9",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/aYgI5jZLw4Y.jpg"
  },
  {
    "id": "PLFm3_OhqZyNbjJTaW2BZYImZz0lsVazvG",
    "title": "برنامج الدوري",
    "count": 3,
    "category": "برامج",
    "color": "#c084fc",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/eVLmPViJE8w.jpg"
  },
  {
    "id": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "title": "🎙️ برنامج #اف_ام_ليغ FM League",
    "count": 27,
    "category": "برامج",
    "color": "#c084fc",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/RW8SeOMrIqw.jpg"
  },
  {
    "id": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "title": "برامج مباشرة 📡 Live Shows",
    "count": 175,
    "category": "مباشر",
    "color": "#34d399",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Zhq9zZDij8Y.jpg"
  },
  {
    "id": "PLFm3_OhqZyNbJksSW4_850XoKn6CIdqDt",
    "title": "سهرة الصورة الأخرى",
    "count": 4,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/gXynszE5Qz4.jpg"
  },
  {
    "id": "PLFm3_OhqZyNZ_vfjC6eWK6R_ykJWoKQ0F",
    "title": "أصحاب الفيل",
    "count": 13,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/jZO0-cihKtk.jpg"
  },
  {
    "id": "PLFm3_OhqZyNY1s5lB4zDWQPNDNGpgeFXe",
    "title": "فواصل الفعاليات والبرامج الخاصة",
    "count": 5,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Oznadvmgm88.jpg"
  },
  {
    "id": "PLFm3_OhqZyNYUUa3XOQwaI5rM6gWw6spn",
    "title": "سهرة خير جليس",
    "count": 7,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/sX2z2TKM9jU.jpg"
  },
  {
    "id": "PLFm3_OhqZyNbC15hxqmuOUr7Kl61sdede",
    "title": "نعم من حولنا",
    "count": 11,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/A_Hxt0UhipA.jpg"
  },
  {
    "id": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "title": "فنون شعبية",
    "count": 28,
    "category": "فن وموسيقى",
    "color": "#f87171",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/m48QTUXwVDw.jpg"
  },
  {
    "id": "PLFm3_OhqZyNbVMHq4LYTa8j-BHbKXIR4A",
    "title": "جلسة عبدالرحمن عوض - إذاعة مملكة البحرين",
    "count": 12,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/kGMqZzXGR3k.jpg"
  },
  {
    "id": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "title": "اسطوانة بحرينية",
    "count": 30,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Nprvb0Bvyuc.jpg"
  },
  {
    "id": "PLFm3_OhqZyNbvKKtLYxGBwt3VAGe7R8Pn",
    "title": "مُختارات منوعة",
    "count": 13,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/qlP8CEgTW8s.jpg"
  },
  {
    "id": "PLFm3_OhqZyNasb3clavokmAZbvsZqLFoo",
    "title": "فضاء أقرب",
    "count": 3,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/OGGZ0t2Pjuw.jpg"
  },
  {
    "id": "PLFm3_OhqZyNakkXe4dJbakNkDQPm4zqfF",
    "title": "أسئلة على الهواء",
    "count": 8,
    "category": "متنوع",
    "color": "#e7c66a",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/1eXyAtRGENU.jpg"
  },
  {
    "id": "PLFm3_OhqZyNa3PSBCPexYmm60CIOXw7jY",
    "title": "بودكاست إكسير الحياة",
    "count": 15,
    "category": "بودكاست",
    "color": "#60a5fa",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/i1NiegXBr3s.jpg"
  }
];

export const ALL_EPISODES: EpisodeItem[] = [
  {
    "id": "bFF1efeUqYE",
    "videoId": "bFF1efeUqYE",
    "playlistId": "PLBW97qEXrcO8",
    "showTitle": "شباب الميلس",
    "title": "شباب الميلس - ح 9",
    "publishedAt": "",
    "duration": "PT50M7S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/bFF1efeUqYE.jpg"
  },
  {
    "id": "w6vkjgR0nis",
    "videoId": "w6vkjgR0nis",
    "playlistId": "PLBW97qEXrcO8",
    "showTitle": "شباب الميلس",
    "title": "شباب الميلس - ح 8 مع الفنان حسن محمد",
    "publishedAt": "",
    "duration": "PT1H22M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/w6vkjgR0nis.jpg"
  },
  {
    "id": "9icw8X4ftwY",
    "videoId": "9icw8X4ftwY",
    "playlistId": "PLBW97qEXrcO8",
    "showTitle": "شباب الميلس",
    "title": "شباب الميلس - ح 7",
    "publishedAt": "",
    "duration": "PT50M49S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/9icw8X4ftwY.jpg"
  },
  {
    "id": "kGnJHYcqqo4",
    "videoId": "kGnJHYcqqo4",
    "playlistId": "PLBW97qEXrcO8",
    "showTitle": "شباب الميلس",
    "title": "شباب الميلس - ح 6",
    "publishedAt": "",
    "duration": "PT52M37S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/kGnJHYcqqo4.jpg"
  },
  {
    "id": "LCX7mIwrrsA",
    "videoId": "LCX7mIwrrsA",
    "playlistId": "PLBW97qEXrcO8",
    "showTitle": "شباب الميلس",
    "title": "شباب الميلس - ح 5",
    "publishedAt": "",
    "duration": "PT49M55S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/LCX7mIwrrsA.jpg"
  },
  {
    "id": "VWiPUqdg2Ok",
    "videoId": "VWiPUqdg2Ok",
    "playlistId": "PLBW97qEXrcO8",
    "showTitle": "شباب الميلس",
    "title": "شباب الميلس - ح 4",
    "publishedAt": "",
    "duration": "PT50M32S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/VWiPUqdg2Ok.jpg"
  },
  {
    "id": "MXNG_Hrrnrg",
    "videoId": "MXNG_Hrrnrg",
    "playlistId": "PLBW97qEXrcO8",
    "showTitle": "شباب الميلس",
    "title": "شباب الميلس - ح 3",
    "publishedAt": "",
    "duration": "PT38M59S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/MXNG_Hrrnrg.jpg"
  },
  {
    "id": "6t27RnVW-u8",
    "videoId": "6t27RnVW-u8",
    "playlistId": "PLBW97qEXrcO8",
    "showTitle": "شباب الميلس",
    "title": "شباب الميلس - ح2",
    "publishedAt": "",
    "duration": "PT47M59S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/6t27RnVW-u8.jpg"
  },
  {
    "id": "ljXrhhTzivQ",
    "videoId": "ljXrhhTzivQ",
    "playlistId": "PLBW97qEXrcO8",
    "showTitle": "شباب الميلس",
    "title": "شباب الميلس - الأولى",
    "publishedAt": "",
    "duration": "PT52M35S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ljXrhhTzivQ.jpg"
  },
  {
    "id": "53HVXQsEJ3w",
    "videoId": "53HVXQsEJ3w",
    "playlistId": "PLBW97qEXrcO8",
    "showTitle": "شباب الميلس",
    "title": "شباب الميلس - ح 10",
    "publishedAt": "",
    "duration": "PT48M12S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/53HVXQsEJ3w.jpg"
  },
  {
    "id": "3so0z028sVY",
    "videoId": "3so0z028sVY",
    "playlistId": "PLBW97qEXrcO8",
    "showTitle": "شباب الميلس",
    "title": "شباب الميلس - ح 11",
    "publishedAt": "",
    "duration": "PT52M38S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/3so0z028sVY.jpg"
  },
  {
    "id": "w5TuS3fEoA4",
    "videoId": "w5TuS3fEoA4",
    "playlistId": "PLBW97qEXrcO8",
    "showTitle": "شباب الميلس",
    "title": "شباب الميلس - ح 12",
    "publishedAt": "",
    "duration": "PT48M38S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/w5TuS3fEoA4.jpg"
  },
  {
    "id": "uh64UGc8Vws",
    "videoId": "uh64UGc8Vws",
    "playlistId": "PLBW97qEXrcO8",
    "showTitle": "شباب الميلس",
    "title": "شباب الميلس - ح 13",
    "publishedAt": "",
    "duration": "PT54M10S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/uh64UGc8Vws.jpg"
  },
  {
    "id": "UjFRqYGaG6w",
    "videoId": "UjFRqYGaG6w",
    "playlistId": "PLBW97qEXrcO8",
    "showTitle": "شباب الميلس",
    "title": "شباب الميلس - ح 14",
    "publishedAt": "",
    "duration": "PT52M18S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/UjFRqYGaG6w.jpg"
  },
  {
    "id": "Zhq9zZDij8Y",
    "videoId": "Zhq9zZDij8Y",
    "playlistId": "PLBW97qEXrcO8",
    "showTitle": "شباب الميلس",
    "title": "شباب الميلس - ح 15",
    "publishedAt": "",
    "duration": "PT0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Zhq9zZDij8Y.jpg"
  },
  {
    "id": "gPUAqvTnJss",
    "videoId": "gPUAqvTnJss",
    "playlistId": "PLM2mjqKYg9rY",
    "showTitle": "إف إم ليغ - موسم 17",
    "title": "برنامج اف ام ليغ - ح 3",
    "publishedAt": "",
    "duration": "PT1H53M46S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/gPUAqvTnJss.jpg"
  },
  {
    "id": "ZN0kvmSjGmM",
    "videoId": "ZN0kvmSjGmM",
    "playlistId": "PLM2mjqKYg9rY",
    "showTitle": "إف إم ليغ - موسم 17",
    "title": "برنامج اف ام ليغ - ح 2",
    "publishedAt": "",
    "duration": "PT1H51M49S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ZN0kvmSjGmM.jpg"
  },
  {
    "id": "7bo061Yy_fA",
    "videoId": "7bo061Yy_fA",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج 🏆 🎊 اف إم موندیال 40",
    "publishedAt": "",
    "duration": "PT1H18M53S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7bo061Yy_fA.jpg"
  },
  {
    "id": "utfgLosy7nM",
    "videoId": "utfgLosy7nM",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج 🏆 🎊 اف إم موندیال 39",
    "publishedAt": "",
    "duration": "PT1H19M14S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/utfgLosy7nM.jpg"
  },
  {
    "id": "pvXHWhirOV4",
    "videoId": "pvXHWhirOV4",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "متحف الكابتن القدير حمود سلطان نجم الكرة البحرينية وأبرز محطاته وانجازاته - تقرير إف إم مونديال",
    "publishedAt": "",
    "duration": "PT6M7S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/pvXHWhirOV4.jpg"
  },
  {
    "id": "GMf185RrbfQ",
    "videoId": "GMf185RrbfQ",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "إف إم مونديال - مقتطفات من الحلقة 37",
    "publishedAt": "",
    "duration": "PT7M1S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/GMf185RrbfQ.jpg"
  },
  {
    "id": "PNfxSfRNDm0",
    "videoId": "PNfxSfRNDm0",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "إف إم مونديال - مقتطفات من الحلقة 34",
    "publishedAt": "",
    "duration": "PT7M1S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/PNfxSfRNDm0.jpg"
  },
  {
    "id": "RVTk-gpjhFw",
    "videoId": "RVTk-gpjhFw",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "إف إم مونديال - مقتطفات من الحلقة 35",
    "publishedAt": "",
    "duration": "PT7M1S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/RVTk-gpjhFw.jpg"
  },
  {
    "id": "YvLQlGaczmE",
    "videoId": "YvLQlGaczmE",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 38",
    "publishedAt": "",
    "duration": "PT1H19M44S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/YvLQlGaczmE.jpg"
  },
  {
    "id": "KU4Tz4AQBv8",
    "videoId": "KU4Tz4AQBv8",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 37",
    "publishedAt": "",
    "duration": "PT1H15M5S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/KU4Tz4AQBv8.jpg"
  },
  {
    "id": "1DShA1mXw_U",
    "videoId": "1DShA1mXw_U",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 36",
    "publishedAt": "",
    "duration": "PT1H18M54S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/1DShA1mXw_U.jpg"
  },
  {
    "id": "P393SSqZLOU",
    "videoId": "P393SSqZLOU",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 35",
    "publishedAt": "",
    "duration": "PT1H19M55S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/P393SSqZLOU.jpg"
  },
  {
    "id": "ZEQtPK3FPmE",
    "videoId": "ZEQtPK3FPmE",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 34",
    "publishedAt": "",
    "duration": "PT1H19M19S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ZEQtPK3FPmE.jpg"
  },
  {
    "id": "rbLbWfnZyM0",
    "videoId": "rbLbWfnZyM0",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 33",
    "publishedAt": "",
    "duration": "PT1H18M14S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/rbLbWfnZyM0.jpg"
  },
  {
    "id": "Ab711VvdFGU",
    "videoId": "Ab711VvdFGU",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 32",
    "publishedAt": "",
    "duration": "PT1H19M45S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Ab711VvdFGU.jpg"
  },
  {
    "id": "-AiRIG_WftA",
    "videoId": "-AiRIG_WftA",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 31",
    "publishedAt": "",
    "duration": "PT1H19M54S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/-AiRIG_WftA.jpg"
  },
  {
    "id": "qW1nXbjj8J4",
    "videoId": "qW1nXbjj8J4",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 30",
    "publishedAt": "",
    "duration": "PT1H18M24S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/qW1nXbjj8J4.jpg"
  },
  {
    "id": "gWZ3tS44UMA",
    "videoId": "gWZ3tS44UMA",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 29",
    "publishedAt": "",
    "duration": "PT1H6M53S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/gWZ3tS44UMA.jpg"
  },
  {
    "id": "hrpE5nJo41c",
    "videoId": "hrpE5nJo41c",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 27",
    "publishedAt": "",
    "duration": "PT1H18M36S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/hrpE5nJo41c.jpg"
  },
  {
    "id": "l_2WTxymz-M",
    "videoId": "l_2WTxymz-M",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 26",
    "publishedAt": "",
    "duration": "PT1H18M29S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/l_2WTxymz-M.jpg"
  },
  {
    "id": "IPWaDlNVdb0",
    "videoId": "IPWaDlNVdb0",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 25",
    "publishedAt": "",
    "duration": "PT1H14M58S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/IPWaDlNVdb0.jpg"
  },
  {
    "id": "ewv53daKUnc",
    "videoId": "ewv53daKUnc",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 24",
    "publishedAt": "",
    "duration": "PT1H19M14S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ewv53daKUnc.jpg"
  },
  {
    "id": "JCCpF8P0in8",
    "videoId": "JCCpF8P0in8",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 23",
    "publishedAt": "",
    "duration": "PT1H16M50S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/JCCpF8P0in8.jpg"
  },
  {
    "id": "502dCMmedo8",
    "videoId": "502dCMmedo8",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 22",
    "publishedAt": "",
    "duration": "PT1H18M57S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/502dCMmedo8.jpg"
  },
  {
    "id": "LenfDyUCsgo",
    "videoId": "LenfDyUCsgo",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 21",
    "publishedAt": "",
    "duration": "PT1H18M15S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/LenfDyUCsgo.jpg"
  },
  {
    "id": "wV0d73JHFrM",
    "videoId": "wV0d73JHFrM",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 20",
    "publishedAt": "",
    "duration": "PT1H18M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/wV0d73JHFrM.jpg"
  },
  {
    "id": "dJIV-R_aFfo",
    "videoId": "dJIV-R_aFfo",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 19",
    "publishedAt": "",
    "duration": "PT1H17M40S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/dJIV-R_aFfo.jpg"
  },
  {
    "id": "Fxz7UbJE64Y",
    "videoId": "Fxz7UbJE64Y",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 18",
    "publishedAt": "",
    "duration": "PT1H18M22S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Fxz7UbJE64Y.jpg"
  },
  {
    "id": "lyTcXBTaOaQ",
    "videoId": "lyTcXBTaOaQ",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 17",
    "publishedAt": "",
    "duration": "PT1H19M54S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/lyTcXBTaOaQ.jpg"
  },
  {
    "id": "R9gJBCCs4HE",
    "videoId": "R9gJBCCs4HE",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 16",
    "publishedAt": "",
    "duration": "PT1H13M59S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/R9gJBCCs4HE.jpg"
  },
  {
    "id": "8mKU81C1o2c",
    "videoId": "8mKU81C1o2c",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 15",
    "publishedAt": "",
    "duration": "PT1H16M49S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8mKU81C1o2c.jpg"
  },
  {
    "id": "xoPRWfICRjg",
    "videoId": "xoPRWfICRjg",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 14",
    "publishedAt": "",
    "duration": "PT1H14M36S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/xoPRWfICRjg.jpg"
  },
  {
    "id": "STs990aMEvU",
    "videoId": "STs990aMEvU",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 13",
    "publishedAt": "",
    "duration": "PT1H17M43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/STs990aMEvU.jpg"
  },
  {
    "id": "9-DSi9l8cMk",
    "videoId": "9-DSi9l8cMk",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 12",
    "publishedAt": "",
    "duration": "PT1H18M5S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/9-DSi9l8cMk.jpg"
  },
  {
    "id": "T_61p9y2PIA",
    "videoId": "T_61p9y2PIA",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 11",
    "publishedAt": "",
    "duration": "PT1H18M32S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/T_61p9y2PIA.jpg"
  },
  {
    "id": "T_ywK4jPkeU",
    "videoId": "T_ywK4jPkeU",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 10",
    "publishedAt": "",
    "duration": "PT1H20M4S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/T_ywK4jPkeU.jpg"
  },
  {
    "id": "8gG896MZu7A",
    "videoId": "8gG896MZu7A",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 9",
    "publishedAt": "",
    "duration": "PT1H19M25S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8gG896MZu7A.jpg"
  },
  {
    "id": "yjr0q9iViJs",
    "videoId": "yjr0q9iViJs",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 8",
    "publishedAt": "",
    "duration": "PT1H18M34S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/yjr0q9iViJs.jpg"
  },
  {
    "id": "MjomamQeoNw",
    "videoId": "MjomamQeoNw",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 7",
    "publishedAt": "",
    "duration": "PT1H20M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/MjomamQeoNw.jpg"
  },
  {
    "id": "3EE2mixLI6s",
    "videoId": "3EE2mixLI6s",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 6",
    "publishedAt": "",
    "duration": "PT1H20M9S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/3EE2mixLI6s.jpg"
  },
  {
    "id": "kRxsA-H59fc",
    "videoId": "kRxsA-H59fc",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 5",
    "publishedAt": "",
    "duration": "PT1H14M4S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/kRxsA-H59fc.jpg"
  },
  {
    "id": "0TDaK2oz5Is",
    "videoId": "0TDaK2oz5Is",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 4",
    "publishedAt": "",
    "duration": "PT1H14M55S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/0TDaK2oz5Is.jpg"
  },
  {
    "id": "Y2Qm-ZRQ4-k",
    "videoId": "Y2Qm-ZRQ4-k",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 3",
    "publishedAt": "",
    "duration": "PT1H13M24S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Y2Qm-ZRQ4-k.jpg"
  },
  {
    "id": "Z9yaas6B_oU",
    "videoId": "Z9yaas6B_oU",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "تابعونا مباشرةً مع برنامج إف إم مونديال",
    "publishedAt": "",
    "duration": "PT50S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Z9yaas6B_oU.jpg"
  },
  {
    "id": "O1ctqsUlqdo",
    "videoId": "O1ctqsUlqdo",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 2",
    "publishedAt": "",
    "duration": "PT1H17M22S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/O1ctqsUlqdo.jpg"
  },
  {
    "id": "dx6fo9-E96Y",
    "videoId": "dx6fo9-E96Y",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "برنامج ⚽️ اف ام مونديال",
    "publishedAt": "",
    "duration": "PT1H22M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/dx6fo9-E96Y.jpg"
  },
  {
    "id": "X7Fc9dKIZ0w",
    "videoId": "X7Fc9dKIZ0w",
    "playlistId": "PLFm3_OhqZyNblLKMgs9ddFtZo-VCugHml",
    "showTitle": "إف إم مونديال 2026",
    "title": "حلقة",
    "publishedAt": "",
    "duration": "PT0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/X7Fc9dKIZ0w.jpg"
  },
  {
    "id": "5IlS0WFaNUM",
    "videoId": "5IlS0WFaNUM",
    "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
    "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
    "title": "برنامج رونغ سايد -  الحلقة الاولى - هوس الترند",
    "publishedAt": "",
    "duration": "PT13M38S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5IlS0WFaNUM.jpg"
  },
  {
    "id": "SuRV6Y84gxk",
    "videoId": "SuRV6Y84gxk",
    "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
    "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
    "title": "برنامج رونغ سايد -  الحلقة الثانية - السفر",
    "publishedAt": "",
    "duration": "PT14M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/SuRV6Y84gxk.jpg"
  },
  {
    "id": "_TibKeMGtrE",
    "videoId": "_TibKeMGtrE",
    "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
    "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
    "title": "برنامج رونغ سايد -  الحلقة الثالثة - الذكاء الاصطناعي",
    "publishedAt": "",
    "duration": "PT14M46S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/_TibKeMGtrE.jpg"
  },
  {
    "id": "qSkU_QgwMUU",
    "videoId": "qSkU_QgwMUU",
    "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
    "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
    "title": "برنامج رونغ سايد - الحلقة الرابعة - ثقافة الفن",
    "publishedAt": "",
    "duration": "PT14M57S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/qSkU_QgwMUU.jpg"
  },
  {
    "id": "7lLD9C11IWM",
    "videoId": "7lLD9C11IWM",
    "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
    "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
    "title": "برنامج رونغ سايد - الحلقة الخامسة - نسخ ولصق",
    "publishedAt": "",
    "duration": "PT14M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7lLD9C11IWM.jpg"
  },
  {
    "id": "8g8arIQ-eFA",
    "videoId": "8g8arIQ-eFA",
    "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
    "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
    "title": "برنامج رونغ سايد - الحلقة السادسة - فوضى السياقة",
    "publishedAt": "",
    "duration": "PT15M16S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8g8arIQ-eFA.jpg"
  },
  {
    "id": "bOc02zrZZDg",
    "videoId": "bOc02zrZZDg",
    "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
    "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
    "title": "برنامج رونغ سايد - الحلقة السابعة - الكوتش",
    "publishedAt": "",
    "duration": "PT12M12S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/bOc02zrZZDg.jpg"
  },
  {
    "id": "mbr8rM9S6_o",
    "videoId": "mbr8rM9S6_o",
    "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
    "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
    "title": "برنامج رونغ سايد - الحلقة الثامنة - الإعلام الإستعراضي",
    "publishedAt": "",
    "duration": "PT14M58S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/mbr8rM9S6_o.jpg"
  },
  {
    "id": "BPQuKmA4XRs",
    "videoId": "BPQuKmA4XRs",
    "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
    "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
    "title": "برنامج رونغ سايد - الحلقة التاسعة - الفطحل",
    "publishedAt": "",
    "duration": "PT14M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/BPQuKmA4XRs.jpg"
  },
  {
    "id": "iRRpitASNTM",
    "videoId": "iRRpitASNTM",
    "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
    "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
    "title": "برنامج رونغ سايد - الحلقة العاشرة - الطبقة الإجتماعية",
    "publishedAt": "",
    "duration": "PT14M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/iRRpitASNTM.jpg"
  },
  {
    "id": "e9BJRjeMyDk",
    "videoId": "e9BJRjeMyDk",
    "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
    "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
    "title": "برنامج رونغ سايد - الحلقة الحادية عشر - بيت العمر",
    "publishedAt": "",
    "duration": "PT14M44S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/e9BJRjeMyDk.jpg"
  },
  {
    "id": "q5Qul7iAFC4",
    "videoId": "q5Qul7iAFC4",
    "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
    "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
    "title": "برنامج رونغ سايد - الحلقة الثانية عشر - النرجسية",
    "publishedAt": "",
    "duration": "PT14M21S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/q5Qul7iAFC4.jpg"
  },
  {
    "id": "j-CNV-nmTGw",
    "videoId": "j-CNV-nmTGw",
    "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
    "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
    "title": "برنامج رونغ سايد - الحلقة الثالثة عشر - قتل الشغف",
    "publishedAt": "",
    "duration": "PT14M43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/j-CNV-nmTGw.jpg"
  },
  {
    "id": "8VKiQ6-2wlQ",
    "videoId": "8VKiQ6-2wlQ",
    "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
    "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
    "title": "برنامج رونغ سايد - الحلقة الرابعة عشر - الدورات",
    "publishedAt": "",
    "duration": "PT14M33S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8VKiQ6-2wlQ.jpg"
  },
  {
    "id": "J9UUXYsQue8",
    "videoId": "J9UUXYsQue8",
    "playlistId": "PLFm3_OhqZyNbIlFDL3t_34Cjm17VNkT8x",
    "showTitle": "برنامج رونغ سايد (الموسم الثالث)",
    "title": "برنامج رونغ سايد - الحلقة الخامسة عشر - عنغريزي",
    "publishedAt": "",
    "duration": "PT14M47S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/J9UUXYsQue8.jpg"
  },
  {
    "id": "w7nSUsZGSx4",
    "videoId": "w7nSUsZGSx4",
    "playlistId": "PLFm3_OhqZyNZs2il3aFJci34cq0ssQPZk",
    "showTitle": "اللاتري 2026",
    "title": "مسابقة  اللاتري  🥇 9 رمضان",
    "publishedAt": "",
    "duration": "PT1H27M37S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/w7nSUsZGSx4.jpg"
  },
  {
    "id": "chua06PletQ",
    "videoId": "chua06PletQ",
    "playlistId": "PLFm3_OhqZyNZs2il3aFJci34cq0ssQPZk",
    "showTitle": "اللاتري 2026",
    "title": "مسابقة  اللاتري  🥇 8 رمضان",
    "publishedAt": "",
    "duration": "PT1H24M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/chua06PletQ.jpg"
  },
  {
    "id": "5Fo5c1x-4DE",
    "videoId": "5Fo5c1x-4DE",
    "playlistId": "PLFm3_OhqZyNZs2il3aFJci34cq0ssQPZk",
    "showTitle": "اللاتري 2026",
    "title": "مسابقة  اللاتري  🥇 7 رمضان",
    "publishedAt": "",
    "duration": "PT1H26M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5Fo5c1x-4DE.jpg"
  },
  {
    "id": "E7F5siCwHBg",
    "videoId": "E7F5siCwHBg",
    "playlistId": "PLFm3_OhqZyNZs2il3aFJci34cq0ssQPZk",
    "showTitle": "اللاتري 2026",
    "title": "مسابقة  اللاتري  🥇 6 رمضان",
    "publishedAt": "",
    "duration": "PT1H26M40S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/E7F5siCwHBg.jpg"
  },
  {
    "id": "bcdSxPuPUJk",
    "videoId": "bcdSxPuPUJk",
    "playlistId": "PLFm3_OhqZyNZs2il3aFJci34cq0ssQPZk",
    "showTitle": "اللاتري 2026",
    "title": "مسابقة  اللاتري  🥇 5 رمضان",
    "publishedAt": "",
    "duration": "PT1H28M13S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/bcdSxPuPUJk.jpg"
  },
  {
    "id": "UGJBh5DsjLw",
    "videoId": "UGJBh5DsjLw",
    "playlistId": "PLFm3_OhqZyNZs2il3aFJci34cq0ssQPZk",
    "showTitle": "اللاتري 2026",
    "title": "مسابقة  اللاتري  🥇 4 رمضان",
    "publishedAt": "",
    "duration": "PT1H42M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/UGJBh5DsjLw.jpg"
  },
  {
    "id": "WkG-dpkxCm0",
    "videoId": "WkG-dpkxCm0",
    "playlistId": "PLFm3_OhqZyNZs2il3aFJci34cq0ssQPZk",
    "showTitle": "اللاتري 2026",
    "title": "مسابقة  اللاتري  🥇 2 رمضان",
    "publishedAt": "",
    "duration": "PT1H29M42S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/WkG-dpkxCm0.jpg"
  },
  {
    "id": "WRN6OtQfAHM",
    "videoId": "WRN6OtQfAHM",
    "playlistId": "PLFm3_OhqZyNZs2il3aFJci34cq0ssQPZk",
    "showTitle": "اللاتري 2026",
    "title": "مسابقة  اللاتري  🥇",
    "publishedAt": "",
    "duration": "PT1H26M35S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/WRN6OtQfAHM.jpg"
  },
  {
    "id": "cPXhIYf0uRk",
    "videoId": "cPXhIYf0uRk",
    "playlistId": "PLFm3_OhqZyNZWE7YGGhRYxJ6dtDkeQLwZ",
    "showTitle": "برامج خاصة 2025",
    "title": "Hoona El Bahrain 🎙️ – Commemorating 85 Years of Radio Broadcasting",
    "publishedAt": "",
    "duration": "PT12M2S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/cPXhIYf0uRk.jpg"
  },
  {
    "id": "d_p6hKOPQHM",
    "videoId": "d_p6hKOPQHM",
    "playlistId": "PLFm3_OhqZyNZWE7YGGhRYxJ6dtDkeQLwZ",
    "showTitle": "برامج خاصة 2025",
    "title": "حلقة",
    "publishedAt": "",
    "duration": "PT0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/d_p6hKOPQHM.jpg"
  },
  {
    "id": "ZyGjdSEMXm8",
    "videoId": "ZyGjdSEMXm8",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر - ح 3",
    "publishedAt": "",
    "duration": "PT1H24M30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ZyGjdSEMXm8.jpg"
  },
  {
    "id": "f7nec0Ltmkw",
    "videoId": "f7nec0Ltmkw",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H21M32S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/f7nec0Ltmkw.jpg"
  },
  {
    "id": "wjobgiZYL0M",
    "videoId": "wjobgiZYL0M",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT57M17S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/wjobgiZYL0M.jpg"
  },
  {
    "id": "ngtHuLn2LTY",
    "videoId": "ngtHuLn2LTY",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT42M40S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ngtHuLn2LTY.jpg"
  },
  {
    "id": "l6n2pUEtl_M",
    "videoId": "l6n2pUEtl_M",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H21M11S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/l6n2pUEtl_M.jpg"
  },
  {
    "id": "Tlhj2suqiwM",
    "videoId": "Tlhj2suqiwM",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H21M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Tlhj2suqiwM.jpg"
  },
  {
    "id": "GT8pT3PD5PI",
    "videoId": "GT8pT3PD5PI",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H30M15S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/GT8pT3PD5PI.jpg"
  },
  {
    "id": "CHJzAWMstD0",
    "videoId": "CHJzAWMstD0",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H17M30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/CHJzAWMstD0.jpg"
  },
  {
    "id": "lEQWNQDUYjE",
    "videoId": "lEQWNQDUYjE",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H30M23S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/lEQWNQDUYjE.jpg"
  },
  {
    "id": "AinXUy8BQz8",
    "videoId": "AinXUy8BQz8",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H29M26S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/AinXUy8BQz8.jpg"
  },
  {
    "id": "izkbD5IsQnY",
    "videoId": "izkbD5IsQnY",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H23M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/izkbD5IsQnY.jpg"
  },
  {
    "id": "izkbD5IsQnY",
    "videoId": "izkbD5IsQnY",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H23M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/izkbD5IsQnY.jpg"
  },
  {
    "id": "WaeGmJ0zbyI",
    "videoId": "WaeGmJ0zbyI",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H22M21S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/WaeGmJ0zbyI.jpg"
  },
  {
    "id": "WaeGmJ0zbyI",
    "videoId": "WaeGmJ0zbyI",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H22M21S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/WaeGmJ0zbyI.jpg"
  },
  {
    "id": "jEA8y9FNExU",
    "videoId": "jEA8y9FNExU",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H23M47S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/jEA8y9FNExU.jpg"
  },
  {
    "id": "tLowXWUWuNo",
    "videoId": "tLowXWUWuNo",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H27M46S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/tLowXWUWuNo.jpg"
  },
  {
    "id": "7eS2Al53Mwo",
    "videoId": "7eS2Al53Mwo",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H20M45S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7eS2Al53Mwo.jpg"
  },
  {
    "id": "DTQ3D4fM3Tc",
    "videoId": "DTQ3D4fM3Tc",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H16M27S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/DTQ3D4fM3Tc.jpg"
  },
  {
    "id": "MEZuRqg6vSM",
    "videoId": "MEZuRqg6vSM",
    "playlistId": "PLFm3_OhqZyNYy4Pm9lViNh9JBtEnrTFVw",
    "showTitle": "خارج المستطيل الأخضر ⚽️  مع فايز السادة",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H21M45S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/MEZuRqg6vSM.jpg"
  },
  {
    "id": "7b8N1YCLlbo",
    "videoId": "7b8N1YCLlbo",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح25",
    "publishedAt": "",
    "duration": "PT2H1M31S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7b8N1YCLlbo.jpg"
  },
  {
    "id": "M3P22RO54Qk",
    "videoId": "M3P22RO54Qk",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح24",
    "publishedAt": "",
    "duration": "PT1H58M13S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/M3P22RO54Qk.jpg"
  },
  {
    "id": "LOBDBzJ1zDs",
    "videoId": "LOBDBzJ1zDs",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح23",
    "publishedAt": "",
    "duration": "PT1H52M42S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/LOBDBzJ1zDs.jpg"
  },
  {
    "id": "OVNcKraYw4k",
    "videoId": "OVNcKraYw4k",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح22",
    "publishedAt": "",
    "duration": "PT2H38S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/OVNcKraYw4k.jpg"
  },
  {
    "id": "xFmTsd7HJ0E",
    "videoId": "xFmTsd7HJ0E",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح21",
    "publishedAt": "",
    "duration": "PT1H58M17S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/xFmTsd7HJ0E.jpg"
  },
  {
    "id": "nFKUJqrznbY",
    "videoId": "nFKUJqrznbY",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح20",
    "publishedAt": "",
    "duration": "PT1H50M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/nFKUJqrznbY.jpg"
  },
  {
    "id": "NzGW3U-l1jE",
    "videoId": "NzGW3U-l1jE",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح19",
    "publishedAt": "",
    "duration": "PT1H59M33S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/NzGW3U-l1jE.jpg"
  },
  {
    "id": "esIvMwV9dDQ",
    "videoId": "esIvMwV9dDQ",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح18",
    "publishedAt": "",
    "duration": "PT1H53M39S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/esIvMwV9dDQ.jpg"
  },
  {
    "id": "8N-yqOK55UM",
    "videoId": "8N-yqOK55UM",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح17",
    "publishedAt": "",
    "duration": "PT1H59M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8N-yqOK55UM.jpg"
  },
  {
    "id": "27lY8gB-nZo",
    "videoId": "27lY8gB-nZo",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح16",
    "publishedAt": "",
    "duration": "PT1H59M40S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/27lY8gB-nZo.jpg"
  },
  {
    "id": "tJCC63da0fA",
    "videoId": "tJCC63da0fA",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح15",
    "publishedAt": "",
    "duration": "PT2H58S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/tJCC63da0fA.jpg"
  },
  {
    "id": "KO1-fOy4c4s",
    "videoId": "KO1-fOy4c4s",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح14",
    "publishedAt": "",
    "duration": "PT1H59M45S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/KO1-fOy4c4s.jpg"
  },
  {
    "id": "w_o39YHSh5U",
    "videoId": "w_o39YHSh5U",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح13",
    "publishedAt": "",
    "duration": "PT2H13S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/w_o39YHSh5U.jpg"
  },
  {
    "id": "nqgc3xBi6hg",
    "videoId": "nqgc3xBi6hg",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح12",
    "publishedAt": "",
    "duration": "PT1H54M32S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/nqgc3xBi6hg.jpg"
  },
  {
    "id": "GwFWRDC2-BI",
    "videoId": "GwFWRDC2-BI",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح11",
    "publishedAt": "",
    "duration": "PT1H53M33S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/GwFWRDC2-BI.jpg"
  },
  {
    "id": "z_ojktWUmKc",
    "videoId": "z_ojktWUmKc",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح10",
    "publishedAt": "",
    "duration": "PT1H47M55S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/z_ojktWUmKc.jpg"
  },
  {
    "id": "oO_qr9WSIz4",
    "videoId": "oO_qr9WSIz4",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح9",
    "publishedAt": "",
    "duration": "PT1H56M22S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/oO_qr9WSIz4.jpg"
  },
  {
    "id": "wuaOZzRKNTI",
    "videoId": "wuaOZzRKNTI",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح8",
    "publishedAt": "",
    "duration": "PT1H49M47S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/wuaOZzRKNTI.jpg"
  },
  {
    "id": "oJCOKcKs-pw",
    "videoId": "oJCOKcKs-pw",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح7",
    "publishedAt": "",
    "duration": "PT1H53M1S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/oJCOKcKs-pw.jpg"
  },
  {
    "id": "hfNdtTswwJQ",
    "videoId": "hfNdtTswwJQ",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح6",
    "publishedAt": "",
    "duration": "PT1H51M7S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/hfNdtTswwJQ.jpg"
  },
  {
    "id": "FhwvTTKvQ7s",
    "videoId": "FhwvTTKvQ7s",
    "playlistId": "PLFm3_OhqZyNZD3aCeCFAEcbqHBb8v-Q0J",
    "showTitle": "إف إم ليغ - الموسم 16",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح5",
    "publishedAt": "",
    "duration": "PT1H48M43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/FhwvTTKvQ7s.jpg"
  },
  {
    "id": "p9x671wZdXY",
    "videoId": "p9x671wZdXY",
    "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
    "showTitle": "بودكاست - أريد أن أفهم",
    "title": "أريد أن أفهم - مدخل إلى النفس",
    "publishedAt": "",
    "duration": "PT55M56S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/p9x671wZdXY.jpg"
  },
  {
    "id": "wGUHcho1EMI",
    "videoId": "wGUHcho1EMI",
    "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
    "showTitle": "بودكاست - أريد أن أفهم",
    "title": "أريد أن أفهم - مدخل إلى الترجمة",
    "publishedAt": "",
    "duration": "PT55M22S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/wGUHcho1EMI.jpg"
  },
  {
    "id": "F2eWddnR_XY",
    "videoId": "F2eWddnR_XY",
    "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
    "showTitle": "بودكاست - أريد أن أفهم",
    "title": "أريد أن أفهم - مدخل إلى الفيزياء",
    "publishedAt": "",
    "duration": "PT1H1M31S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/F2eWddnR_XY.jpg"
  },
  {
    "id": "eFYtjLKnO9w",
    "videoId": "eFYtjLKnO9w",
    "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
    "showTitle": "بودكاست - أريد أن أفهم",
    "title": "أريد أن أفهم - مدخل إلى الأدب",
    "publishedAt": "",
    "duration": "PT52M9S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/eFYtjLKnO9w.jpg"
  },
  {
    "id": "SOwRfB2oaEA",
    "videoId": "SOwRfB2oaEA",
    "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
    "showTitle": "بودكاست - أريد أن أفهم",
    "title": "أريد أن أفهم - مدخل إلى الدراما",
    "publishedAt": "",
    "duration": "PT1H42S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/SOwRfB2oaEA.jpg"
  },
  {
    "id": "5C0BIJ9LgKw",
    "videoId": "5C0BIJ9LgKw",
    "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
    "showTitle": "بودكاست - أريد أن أفهم",
    "title": "أريد أن أفهم - مدخل إلى المتاحف",
    "publishedAt": "",
    "duration": "PT56M43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5C0BIJ9LgKw.jpg"
  },
  {
    "id": "Ee-1fQpt_P4",
    "videoId": "Ee-1fQpt_P4",
    "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
    "showTitle": "بودكاست - أريد أن أفهم",
    "title": "أريد أن أفهم - مدخل إلى العمارة",
    "publishedAt": "",
    "duration": "PT52M45S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Ee-1fQpt_P4.jpg"
  },
  {
    "id": "8H4ke_Iv0-M",
    "videoId": "8H4ke_Iv0-M",
    "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
    "showTitle": "بودكاست - أريد أن أفهم",
    "title": "أريد أن أفهم - مدخل إلى الموسيقى",
    "publishedAt": "",
    "duration": "PT57M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8H4ke_Iv0-M.jpg"
  },
  {
    "id": "utYq0BErHEs",
    "videoId": "utYq0BErHEs",
    "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
    "showTitle": "بودكاست - أريد أن أفهم",
    "title": "أريد ان افهم - مدخل إلى التاريخ",
    "publishedAt": "",
    "duration": "PT56M55S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/utYq0BErHEs.jpg"
  },
  {
    "id": "7PEyE7EMPgc",
    "videoId": "7PEyE7EMPgc",
    "playlistId": "PLFm3_OhqZyNYqLyHWmpN9E_scky25Cx6F",
    "showTitle": "بودكاست - أريد أن أفهم",
    "title": "أريد أن افهم - ثقافة     101",
    "publishedAt": "",
    "duration": "PT53M2S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7PEyE7EMPgc.jpg"
  },
  {
    "id": "z6Q2MOzEZC8",
    "videoId": "z6Q2MOzEZC8",
    "playlistId": "PLFm3_OhqZyNZdcIRpO0bLkD_XqJ-Q7Xta",
    "showTitle": "بودكاست  - نجمين",
    "title": "البدر والجوهرة، نجمان أضاءا اليد",
    "publishedAt": "",
    "duration": "PT1H3M8S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/z6Q2MOzEZC8.jpg"
  },
  {
    "id": "0aVzMbyNjIY",
    "videoId": "0aVzMbyNjIY",
    "playlistId": "PLFm3_OhqZyNZdcIRpO0bLkD_XqJ-Q7Xta",
    "showTitle": "بودكاست  - نجمين",
    "title": "نَجمين العمر - الكابتن غازي الكواري و الكابتن محمد جمعة بشير",
    "publishedAt": "",
    "duration": "PT1H4S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/0aVzMbyNjIY.jpg"
  },
  {
    "id": "ivmzCnbhVk0",
    "videoId": "ivmzCnbhVk0",
    "playlistId": "PLFm3_OhqZyNZdcIRpO0bLkD_XqJ-Q7Xta",
    "showTitle": "بودكاست  - نجمين",
    "title": "*نَجمين على قلب* ✨",
    "publishedAt": "",
    "duration": "PT1H1M24S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ivmzCnbhVk0.jpg"
  },
  {
    "id": "lcKBwCEnXNM",
    "videoId": "lcKBwCEnXNM",
    "playlistId": "PLFm3_OhqZyNZdcIRpO0bLkD_XqJ-Q7Xta",
    "showTitle": "بودكاست  - نجمين",
    "title": "قضاة المونديال  🚫 الحكم الدولي السابق نواف شكرالله",
    "publishedAt": "",
    "duration": "PT59M50S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/lcKBwCEnXNM.jpg"
  },
  {
    "id": "qjJdiedyCVc",
    "videoId": "qjJdiedyCVc",
    "playlistId": "PLFm3_OhqZyNZdcIRpO0bLkD_XqJ-Q7Xta",
    "showTitle": "بودكاست  - نجمين",
    "title": "الاعلام الرياضي في الزمن الجميل",
    "publishedAt": "",
    "duration": "PT59M47S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/qjJdiedyCVc.jpg"
  },
  {
    "id": "CuXzEerWXaI",
    "videoId": "CuXzEerWXaI",
    "playlistId": "PLFm3_OhqZyNZdcIRpO0bLkD_XqJ-Q7Xta",
    "showTitle": "بودكاست  - نجمين",
    "title": "نَجمين بلا فلتر - الكابتن احمد حسان والكابتن اسماعيل عبداللطيف",
    "publishedAt": "",
    "duration": "PT53M34S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/CuXzEerWXaI.jpg"
  },
  {
    "id": "D0_wr9a624E",
    "videoId": "D0_wr9a624E",
    "playlistId": "PLFm3_OhqZyNZdcIRpO0bLkD_XqJ-Q7Xta",
    "showTitle": "بودكاست  - نجمين",
    "title": "طائرة الحب 🏐 - الكابتن رضا علي و الكابتن حسن علي",
    "publishedAt": "",
    "duration": "PT52M34S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/D0_wr9a624E.jpg"
  },
  {
    "id": "j5xBTqpMFh0",
    "videoId": "j5xBTqpMFh0",
    "playlistId": "PLFm3_OhqZyNZdcIRpO0bLkD_XqJ-Q7Xta",
    "showTitle": "بودكاست  - نجمين",
    "title": "مو بس سلة 🏀 مع الكابتن محمد قربان و الكابتن عبدالرحمن غالي",
    "publishedAt": "",
    "duration": "PT58M7S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/j5xBTqpMFh0.jpg"
  },
  {
    "id": "P6pA6Qs-1V8",
    "videoId": "P6pA6Qs-1V8",
    "playlistId": "PLFm3_OhqZyNZdcIRpO0bLkD_XqJ-Q7Xta",
    "showTitle": "بودكاست  - نجمين",
    "title": "العميد والهداف مع محمد احمد و احمد عبدالنبي",
    "publishedAt": "",
    "duration": "PT50M54S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/P6pA6Qs-1V8.jpg"
  },
  {
    "id": "hsWPzvU1O6c",
    "videoId": "hsWPzvU1O6c",
    "playlistId": "PLFm3_OhqZyNZdcIRpO0bLkD_XqJ-Q7Xta",
    "showTitle": "بودكاست  - نجمين",
    "title": "من القدوة إلى الرفيق مع سامي هجرس و علي حسين",
    "publishedAt": "",
    "duration": "PT52M18S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/hsWPzvU1O6c.jpg"
  },
  {
    "id": "42DVEvzcEys",
    "videoId": "42DVEvzcEys",
    "playlistId": "PLFm3_OhqZyNZdcIRpO0bLkD_XqJ-Q7Xta",
    "showTitle": "بودكاست  - نجمين",
    "title": "رفاق الهدف - محمود عبدالرحمن (رينغو) - عبدالله الدخيل",
    "publishedAt": "",
    "duration": "PT56M25S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/42DVEvzcEys.jpg"
  },
  {
    "id": "p-4pjhQRBTs",
    "videoId": "p-4pjhQRBTs",
    "playlistId": "PLFm3_OhqZyNZdcIRpO0bLkD_XqJ-Q7Xta",
    "showTitle": "بودكاست  - نجمين",
    "title": "نجمين من ذهب في سماء الطائرة البحرينية | أيمن سلمان & محمد مفتاح",
    "publishedAt": "",
    "duration": "PT1H1M5S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/p-4pjhQRBTs.jpg"
  },
  {
    "id": "QcHIMTuFSVA",
    "videoId": "QcHIMTuFSVA",
    "playlistId": "PLFm3_OhqZyNYKfK4Og-tGM0ggShwciqkG",
    "showTitle": "موقع على الخريطة  🗾 📍",
    "title": "موقع على الخريطة  🗾 ح1 -📍 مشروع الليوان",
    "publishedAt": "",
    "duration": "PT5M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/QcHIMTuFSVA.jpg"
  },
  {
    "id": "5QfM4oEJzZU",
    "videoId": "5QfM4oEJzZU",
    "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
    "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
    "title": "ما خط القلم 🪶 ح1",
    "publishedAt": "",
    "duration": "PT5M53S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5QfM4oEJzZU.jpg"
  },
  {
    "id": "aG0nimxk8E8",
    "videoId": "aG0nimxk8E8",
    "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
    "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
    "title": "ما خط القلم 🪶 ح14",
    "publishedAt": "",
    "duration": "PT5M49S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/aG0nimxk8E8.jpg"
  },
  {
    "id": "QPPDufmpZhc",
    "videoId": "QPPDufmpZhc",
    "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
    "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
    "title": "ما خط القلم 🪶 ح10",
    "publishedAt": "",
    "duration": "PT4M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/QPPDufmpZhc.jpg"
  },
  {
    "id": "6AOK6qmFCdg",
    "videoId": "6AOK6qmFCdg",
    "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
    "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
    "title": "ما خط القلم 🪶 ح8",
    "publishedAt": "",
    "duration": "PT4M57S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/6AOK6qmFCdg.jpg"
  },
  {
    "id": "XJylB2EGor0",
    "videoId": "XJylB2EGor0",
    "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
    "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
    "title": "ما خط القلم 🪶 ح7",
    "publishedAt": "",
    "duration": "PT5M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/XJylB2EGor0.jpg"
  },
  {
    "id": "I-ByX360-Fw",
    "videoId": "I-ByX360-Fw",
    "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
    "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
    "title": "ما خط القلم 🪶 ح6",
    "publishedAt": "",
    "duration": "PT5M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/I-ByX360-Fw.jpg"
  },
  {
    "id": "W4ahhZabK1I",
    "videoId": "W4ahhZabK1I",
    "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
    "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
    "title": "ما خط القلم 🪶 ح5",
    "publishedAt": "",
    "duration": "PT5M5S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/W4ahhZabK1I.jpg"
  },
  {
    "id": "HvIjJPrfRI8",
    "videoId": "HvIjJPrfRI8",
    "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
    "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
    "title": "ما خط القلم 🪶 ح4",
    "publishedAt": "",
    "duration": "PT5M9S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/HvIjJPrfRI8.jpg"
  },
  {
    "id": "hnCTY4_8Aiw",
    "videoId": "hnCTY4_8Aiw",
    "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
    "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
    "title": "ما خط القلم 🪶 ح3",
    "publishedAt": "",
    "duration": "PT5M25S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/hnCTY4_8Aiw.jpg"
  },
  {
    "id": "Q3HjO6Yo9x4",
    "videoId": "Q3HjO6Yo9x4",
    "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
    "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
    "title": "ما خط القلم 🪶 ح2",
    "publishedAt": "",
    "duration": "PT5M22S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Q3HjO6Yo9x4.jpg"
  },
  {
    "id": "NTvxUliCKpI",
    "videoId": "NTvxUliCKpI",
    "playlistId": "PLFm3_OhqZyNYmaSAXzCvToZi5BFXTAPfC",
    "showTitle": "ما خط القلم 🪶 مع حسن الساعاتي",
    "title": "ما خط القلم 🪶 ح13",
    "publishedAt": "",
    "duration": "PT6M24S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/NTvxUliCKpI.jpg"
  },
  {
    "id": "HSxR_z7aWz0",
    "videoId": "HSxR_z7aWz0",
    "playlistId": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
    "showTitle": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
    "title": "برنامج ذكاء 🧠 وابداع 📲 ح1 تطبيق Pinterest",
    "publishedAt": "",
    "duration": "PT3M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/HSxR_z7aWz0.jpg"
  },
  {
    "id": "0rVg_A1r1wk",
    "videoId": "0rVg_A1r1wk",
    "playlistId": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
    "showTitle": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
    "title": "برنامج ذكاء 🧠 وابداع 📲 ح2 Canva",
    "publishedAt": "",
    "duration": "PT3M24S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/0rVg_A1r1wk.jpg"
  },
  {
    "id": "_fifPZydZuI",
    "videoId": "_fifPZydZuI",
    "playlistId": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
    "showTitle": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
    "title": "برنامج ذكاء 🧠 وابداع 📲 ح3 My Heritage App",
    "publishedAt": "",
    "duration": "PT3M30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/_fifPZydZuI.jpg"
  },
  {
    "id": "EoTUl3Nukhk",
    "videoId": "EoTUl3Nukhk",
    "playlistId": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
    "showTitle": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
    "title": "برنامج ذكاء 🧠 وابداع 📲 ح4 - تطبيق IFTTT",
    "publishedAt": "",
    "duration": "PT3M18S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/EoTUl3Nukhk.jpg"
  },
  {
    "id": "XcqkrJzw2nU",
    "videoId": "XcqkrJzw2nU",
    "playlistId": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
    "showTitle": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
    "title": "برنامج ذكاء 🧠 وابداع 📲 ح5 تطبيق شعلة",
    "publishedAt": "",
    "duration": "PT2M56S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/XcqkrJzw2nU.jpg"
  },
  {
    "id": "QQa3bB2a9BM",
    "videoId": "QQa3bB2a9BM",
    "playlistId": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
    "showTitle": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
    "title": "برنامج ذكاء 🧠 وابداع 📲 ح6 Water Reminder",
    "publishedAt": "",
    "duration": "PT2M57S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/QQa3bB2a9BM.jpg"
  },
  {
    "id": "ejHhbjfXhYA",
    "videoId": "ejHhbjfXhYA",
    "playlistId": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
    "showTitle": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
    "title": "برنامج ذكاء 🧠 وابداع 📲 ح7 Snap Drop",
    "publishedAt": "",
    "duration": "PT3M5S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ejHhbjfXhYA.jpg"
  },
  {
    "id": "3_6lFk8JFWM",
    "videoId": "3_6lFk8JFWM",
    "playlistId": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
    "showTitle": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
    "title": "برنامج ذكاء 🧠 وابداع 📲 ح8 Petal Maps",
    "publishedAt": "",
    "duration": "PT2M51S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/3_6lFk8JFWM.jpg"
  },
  {
    "id": "OgkghkRxjoY",
    "videoId": "OgkghkRxjoY",
    "playlistId": "PLFm3_OhqZyNZNQYeE7nkWxgpkTIRsVcRA",
    "showTitle": "برنامج ذكاء 🧠 وابداع 📲 مع نورة أبو الشوك",
    "title": "برنامج ذكاء 🧠 وابداع 📲 ح9 Room Planner",
    "publishedAt": "",
    "duration": "PT2M59S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/OgkghkRxjoY.jpg"
  },
  {
    "id": "TaDC75H0sCY",
    "videoId": "TaDC75H0sCY",
    "playlistId": "PLFm3_OhqZyNb6EkXeJuXwSGGy4c_lZPUh",
    "showTitle": "المايك الثالث 🎤 مع آلاء وناصر",
    "title": "المايك الثالث 🎤 ح5 - الحياة في المدينة 🌇",
    "publishedAt": "",
    "duration": "PT19M5S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/TaDC75H0sCY.jpg"
  },
  {
    "id": "th1pKCyII74",
    "videoId": "th1pKCyII74",
    "playlistId": "PLFm3_OhqZyNb6EkXeJuXwSGGy4c_lZPUh",
    "showTitle": "المايك الثالث 🎤 مع آلاء وناصر",
    "title": "المايك الثالث 🎤 ح6 - القراءة الورقية أم الرقمية؟ 🤓",
    "publishedAt": "",
    "duration": "PT20M2S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/th1pKCyII74.jpg"
  },
  {
    "id": "Erk5MPU77D4",
    "videoId": "Erk5MPU77D4",
    "playlistId": "PLFm3_OhqZyNb6EkXeJuXwSGGy4c_lZPUh",
    "showTitle": "المايك الثالث 🎤 مع آلاء وناصر",
    "title": "المايك الثالث 🎤 ح3 - التحصيل العلمي 🎓",
    "publishedAt": "",
    "duration": "PT23M43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Erk5MPU77D4.jpg"
  },
  {
    "id": "Erk5MPU77D4",
    "videoId": "Erk5MPU77D4",
    "playlistId": "PLFm3_OhqZyNb6EkXeJuXwSGGy4c_lZPUh",
    "showTitle": "المايك الثالث 🎤 مع آلاء وناصر",
    "title": "المايك الثالث 🎤 ح3 - التحصيل العلمي 🎓",
    "publishedAt": "",
    "duration": "PT23M43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Erk5MPU77D4.jpg"
  },
  {
    "id": "8NeWZgJ7vMI",
    "videoId": "8NeWZgJ7vMI",
    "playlistId": "PLFm3_OhqZyNb6EkXeJuXwSGGy4c_lZPUh",
    "showTitle": "المايك الثالث 🎤 مع آلاء وناصر",
    "title": "المايك الثالث 🎤 ح2 - الصحة النفسية 🔮",
    "publishedAt": "",
    "duration": "PT28M25S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8NeWZgJ7vMI.jpg"
  },
  {
    "id": "8NeWZgJ7vMI",
    "videoId": "8NeWZgJ7vMI",
    "playlistId": "PLFm3_OhqZyNb6EkXeJuXwSGGy4c_lZPUh",
    "showTitle": "المايك الثالث 🎤 مع آلاء وناصر",
    "title": "المايك الثالث 🎤 ح2 - الصحة النفسية 🔮",
    "publishedAt": "",
    "duration": "PT28M25S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8NeWZgJ7vMI.jpg"
  },
  {
    "id": "B-yNV2VCDvA",
    "videoId": "B-yNV2VCDvA",
    "playlistId": "PLFm3_OhqZyNb6EkXeJuXwSGGy4c_lZPUh",
    "showTitle": "المايك الثالث 🎤 مع آلاء وناصر",
    "title": "المايك الثالث 🎤 ح1 - التواصل الإجتماعي 🪼",
    "publishedAt": "",
    "duration": "PT22M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/B-yNV2VCDvA.jpg"
  },
  {
    "id": "B-yNV2VCDvA",
    "videoId": "B-yNV2VCDvA",
    "playlistId": "PLFm3_OhqZyNb6EkXeJuXwSGGy4c_lZPUh",
    "showTitle": "المايك الثالث 🎤 مع آلاء وناصر",
    "title": "المايك الثالث 🎤 ح1 - التواصل الإجتماعي 🪼",
    "publishedAt": "",
    "duration": "PT22M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/B-yNV2VCDvA.jpg"
  },
  {
    "id": "SZy6bj96plk",
    "videoId": "SZy6bj96plk",
    "playlistId": "PLFm3_OhqZyNY0kkMjr1RXSirkM-c5eWNe",
    "showTitle": "الصائم الإيجابي 👌",
    "title": "الصائم الإيجابي 👌ح6 - نقطة تحول ⚧️",
    "publishedAt": "",
    "duration": "PT4M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/SZy6bj96plk.jpg"
  },
  {
    "id": "Sp_rBf9relc",
    "videoId": "Sp_rBf9relc",
    "playlistId": "PLFm3_OhqZyNY0kkMjr1RXSirkM-c5eWNe",
    "showTitle": "الصائم الإيجابي 👌",
    "title": "الصائم الإيجابي 👌ح5 - تطوير المهارات",
    "publishedAt": "",
    "duration": "PT4M59S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Sp_rBf9relc.jpg"
  },
  {
    "id": "Fuv1e5nLEuY",
    "videoId": "Fuv1e5nLEuY",
    "playlistId": "PLFm3_OhqZyNY0kkMjr1RXSirkM-c5eWNe",
    "showTitle": "الصائم الإيجابي 👌",
    "title": "الصائم الإيجابي 👌ح4 - قيمة الامتنان",
    "publishedAt": "",
    "duration": "PT5M31S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Fuv1e5nLEuY.jpg"
  },
  {
    "id": "a4_MoGBoa-g",
    "videoId": "a4_MoGBoa-g",
    "playlistId": "PLFm3_OhqZyNY0kkMjr1RXSirkM-c5eWNe",
    "showTitle": "الصائم الإيجابي 👌",
    "title": "الصائم الإيجابي 👌ح3 - أهمية استشعار الحب",
    "publishedAt": "",
    "duration": "PT6M11S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/a4_MoGBoa-g.jpg"
  },
  {
    "id": "UarMkwlByMU",
    "videoId": "UarMkwlByMU",
    "playlistId": "PLFm3_OhqZyNY0kkMjr1RXSirkM-c5eWNe",
    "showTitle": "الصائم الإيجابي 👌",
    "title": "الصائم الإيجابي 👌 ح2 - فوائد مساعدة الآخرين",
    "publishedAt": "",
    "duration": "PT5M53S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/UarMkwlByMU.jpg"
  },
  {
    "id": "ermTHW3ELpM",
    "videoId": "ermTHW3ELpM",
    "playlistId": "PLFm3_OhqZyNY0kkMjr1RXSirkM-c5eWNe",
    "showTitle": "الصائم الإيجابي 👌",
    "title": "الصائم الإيجابي 👌ح1 - التَقَبُل",
    "publishedAt": "",
    "duration": "PT10M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ermTHW3ELpM.jpg"
  },
  {
    "id": "WcPu63f4sfQ",
    "videoId": "WcPu63f4sfQ",
    "playlistId": "PLFm3_OhqZyNZQdDlfoNL5LjbI-SeWxdeu",
    "showTitle": "برامج خاصة",
    "title": "إعلان نجمين من ذهب في سماء الطائرة البحرينية",
    "publishedAt": "",
    "duration": "PT43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/WcPu63f4sfQ.jpg"
  },
  {
    "id": "HtZE0nMptLk",
    "videoId": "HtZE0nMptLk",
    "playlistId": "PLFm3_OhqZyNZQdDlfoNL5LjbI-SeWxdeu",
    "showTitle": "برامج خاصة",
    "title": "حلقة خاصة للفنان الراحل محمد اسيري",
    "publishedAt": "",
    "duration": "PT10M43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/HtZE0nMptLk.jpg"
  },
  {
    "id": "xL3Z1q7D0L4",
    "videoId": "xL3Z1q7D0L4",
    "playlistId": "PLFm3_OhqZyNZQdDlfoNL5LjbI-SeWxdeu",
    "showTitle": "برامج خاصة",
    "title": "برنامج خاص بمناسبة اليوبيل الذهبي للإتحاد البحريني للرياضات المائية",
    "publishedAt": "",
    "duration": "PT1H30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/xL3Z1q7D0L4.jpg"
  },
  {
    "id": "ZAJCzPowB2o",
    "videoId": "ZAJCzPowB2o",
    "playlistId": "PLFm3_OhqZyNZnP5ZswRCA8AuLklt2-PEj",
    "showTitle": "لنبدأ معاً - مع نسرين معروف",
    "title": "لنبدأ معاً 🔰 ح1 - عدم الثقة بالنفس",
    "publishedAt": "",
    "duration": "PT6M33S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ZAJCzPowB2o.jpg"
  },
  {
    "id": "uts9cb3KGzQ",
    "videoId": "uts9cb3KGzQ",
    "playlistId": "PLFm3_OhqZyNZnP5ZswRCA8AuLklt2-PEj",
    "showTitle": "لنبدأ معاً - مع نسرين معروف",
    "title": "لنبدأ معاً 🔰 ح2 - التردد في اتخاذ القرارات",
    "publishedAt": "",
    "duration": "PT5M7S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/uts9cb3KGzQ.jpg"
  },
  {
    "id": "FFS3DCXOhcE",
    "videoId": "FFS3DCXOhcE",
    "playlistId": "PLFm3_OhqZyNZnP5ZswRCA8AuLklt2-PEj",
    "showTitle": "لنبدأ معاً - مع نسرين معروف",
    "title": "لنبدأ معاً 🔰 ح3 - التعصب للرأي والعناد",
    "publishedAt": "",
    "duration": "PT4M59S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/FFS3DCXOhcE.jpg"
  },
  {
    "id": "5qMwkxlwXhU",
    "videoId": "5qMwkxlwXhU",
    "playlistId": "PLFm3_OhqZyNZnP5ZswRCA8AuLklt2-PEj",
    "showTitle": "لنبدأ معاً - مع نسرين معروف",
    "title": "الغيرة المرضية ☠️ - ح4 لنبدأ معاً 🔰",
    "publishedAt": "",
    "duration": "PT7M55S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5qMwkxlwXhU.jpg"
  },
  {
    "id": "ccy3_A1XjO0",
    "videoId": "ccy3_A1XjO0",
    "playlistId": "PLFm3_OhqZyNZnP5ZswRCA8AuLklt2-PEj",
    "showTitle": "لنبدأ معاً - مع نسرين معروف",
    "title": "لنبدأ معاً 🔰 ح5 - الانشغال بالماضي 🥮",
    "publishedAt": "",
    "duration": "PT4M33S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ccy3_A1XjO0.jpg"
  },
  {
    "id": "bG3UVVU5p88",
    "videoId": "bG3UVVU5p88",
    "playlistId": "PLFm3_OhqZyNZnP5ZswRCA8AuLklt2-PEj",
    "showTitle": "لنبدأ معاً - مع نسرين معروف",
    "title": "لنبدأ معاً 🔰 ح6",
    "publishedAt": "",
    "duration": "PT4M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/bG3UVVU5p88.jpg"
  },
  {
    "id": "nG7Ycd86yys",
    "videoId": "nG7Ycd86yys",
    "playlistId": "PLFm3_OhqZyNZnP5ZswRCA8AuLklt2-PEj",
    "showTitle": "لنبدأ معاً - مع نسرين معروف",
    "title": "لنبدأ معاً 🔰 ح7 - الشعور بالفشل الدائم",
    "publishedAt": "",
    "duration": "PT5M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/nG7Ycd86yys.jpg"
  },
  {
    "id": "mFfmmjby_K0",
    "videoId": "mFfmmjby_K0",
    "playlistId": "PLFm3_OhqZyNZnP5ZswRCA8AuLklt2-PEj",
    "showTitle": "لنبدأ معاً - مع نسرين معروف",
    "title": "لنبدأ معاً 🔰 ح8",
    "publishedAt": "",
    "duration": "PT6M2S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/mFfmmjby_K0.jpg"
  },
  {
    "id": "PW62TO4u_0g",
    "videoId": "PW62TO4u_0g",
    "playlistId": "PLFm3_OhqZyNZnP5ZswRCA8AuLklt2-PEj",
    "showTitle": "لنبدأ معاً - مع نسرين معروف",
    "title": "لنبدأ معاً 🔰 ح9 - التسويف",
    "publishedAt": "",
    "duration": "PT5M55S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/PW62TO4u_0g.jpg"
  },
  {
    "id": "xLVnJswPlTs",
    "videoId": "xLVnJswPlTs",
    "playlistId": "PLFm3_OhqZyNZnP5ZswRCA8AuLklt2-PEj",
    "showTitle": "لنبدأ معاً - مع نسرين معروف",
    "title": "لنبدأ معاً 🔰 ح11 - الخوف من المستقبل",
    "publishedAt": "",
    "duration": "PT6M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/xLVnJswPlTs.jpg"
  },
  {
    "id": "8iMjV3Ilpw4",
    "videoId": "8iMjV3Ilpw4",
    "playlistId": "PLFm3_OhqZyNZnP5ZswRCA8AuLklt2-PEj",
    "showTitle": "لنبدأ معاً - مع نسرين معروف",
    "title": "لنبدأ معاً 🔰 ح12 - الكذب",
    "publishedAt": "",
    "duration": "PT5M51S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8iMjV3Ilpw4.jpg"
  },
  {
    "id": "F85zOW6fmTE",
    "videoId": "F85zOW6fmTE",
    "playlistId": "PLFm3_OhqZyNZnP5ZswRCA8AuLklt2-PEj",
    "showTitle": "لنبدأ معاً - مع نسرين معروف",
    "title": "لنبدأ معاً 🔰 ح13 - الانانية",
    "publishedAt": "",
    "duration": "PT6M51S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/F85zOW6fmTE.jpg"
  },
  {
    "id": "rlv-0Zo2aH4",
    "videoId": "rlv-0Zo2aH4",
    "playlistId": "PLFm3_OhqZyNZnP5ZswRCA8AuLklt2-PEj",
    "showTitle": "لنبدأ معاً - مع نسرين معروف",
    "title": "لنبدأ معاً 🔰 ح14 - ضغوطات العمل",
    "publishedAt": "",
    "duration": "PT6M54S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/rlv-0Zo2aH4.jpg"
  },
  {
    "id": "dajtKxXXNkk",
    "videoId": "dajtKxXXNkk",
    "playlistId": "PLFm3_OhqZyNZnP5ZswRCA8AuLklt2-PEj",
    "showTitle": "لنبدأ معاً - مع نسرين معروف",
    "title": "لنبدأ معاً 🔰 ح15 - كلمة لا",
    "publishedAt": "",
    "duration": "PT5M59S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/dajtKxXXNkk.jpg"
  },
  {
    "id": "hQbOgg5GEh4",
    "videoId": "hQbOgg5GEh4",
    "playlistId": "PLFm3_OhqZyNZnP5ZswRCA8AuLklt2-PEj",
    "showTitle": "لنبدأ معاً - مع نسرين معروف",
    "title": "لنبدأ معاً 🔰 ح16 - الإســــاءة",
    "publishedAt": "",
    "duration": "PT5M50S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/hQbOgg5GEh4.jpg"
  },
  {
    "id": "SEQ9lPGkwH8",
    "videoId": "SEQ9lPGkwH8",
    "playlistId": "PLFm3_OhqZyNaPsa8ndqb9q0AvzW40IoI4",
    "showTitle": "جبرة خاطر 💫 مع الكوتش عائشة دانش",
    "title": "جبرة خاطر ❤️‍🩹 ح14",
    "publishedAt": "",
    "duration": "PT4M43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/SEQ9lPGkwH8.jpg"
  },
  {
    "id": "IwBtXgNosbs",
    "videoId": "IwBtXgNosbs",
    "playlistId": "PLFm3_OhqZyNaPsa8ndqb9q0AvzW40IoI4",
    "showTitle": "جبرة خاطر 💫 مع الكوتش عائشة دانش",
    "title": "جبرة خاطر ❤️‍🩹 ح15 - القرار الخاطئ",
    "publishedAt": "",
    "duration": "PT3M47S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/IwBtXgNosbs.jpg"
  },
  {
    "id": "vbJJ0TyVE8Q",
    "videoId": "vbJJ0TyVE8Q",
    "playlistId": "PLFm3_OhqZyNaPsa8ndqb9q0AvzW40IoI4",
    "showTitle": "جبرة خاطر 💫 مع الكوتش عائشة دانش",
    "title": "جبرة خاطر ❤️‍🩹 ح12 - تحقيق الأهداف",
    "publishedAt": "",
    "duration": "PT3M57S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/vbJJ0TyVE8Q.jpg"
  },
  {
    "id": "Lf4f2R2AtFU",
    "videoId": "Lf4f2R2AtFU",
    "playlistId": "PLFm3_OhqZyNaPsa8ndqb9q0AvzW40IoI4",
    "showTitle": "جبرة خاطر 💫 مع الكوتش عائشة دانش",
    "title": "جبرة خاطر ❤️‍🩹 ح13 - إستحقاق السعادة",
    "publishedAt": "",
    "duration": "PT4M4S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Lf4f2R2AtFU.jpg"
  },
  {
    "id": "NyJuwEqTIAY",
    "videoId": "NyJuwEqTIAY",
    "playlistId": "PLFm3_OhqZyNaPsa8ndqb9q0AvzW40IoI4",
    "showTitle": "جبرة خاطر 💫 مع الكوتش عائشة دانش",
    "title": "جبرة خاطر ❤️‍🩹 ح9",
    "publishedAt": "",
    "duration": "PT4M1S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/NyJuwEqTIAY.jpg"
  },
  {
    "id": "GfH3pEn70bE",
    "videoId": "GfH3pEn70bE",
    "playlistId": "PLFm3_OhqZyNaPsa8ndqb9q0AvzW40IoI4",
    "showTitle": "جبرة خاطر 💫 مع الكوتش عائشة دانش",
    "title": "جبرة خاطر ❤️‍🩹 ح8 - إختيار شريك الحياة",
    "publishedAt": "",
    "duration": "PT3M38S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/GfH3pEn70bE.jpg"
  },
  {
    "id": "dEMhIt84XAQ",
    "videoId": "dEMhIt84XAQ",
    "playlistId": "PLFm3_OhqZyNaPsa8ndqb9q0AvzW40IoI4",
    "showTitle": "جبرة خاطر 💫 مع الكوتش عائشة دانش",
    "title": "جبرة خاطر ❤️‍🩹 ح7 - الإمتنان",
    "publishedAt": "",
    "duration": "PT3M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/dEMhIt84XAQ.jpg"
  },
  {
    "id": "AehODLlyPQk",
    "videoId": "AehODLlyPQk",
    "playlistId": "PLFm3_OhqZyNaPsa8ndqb9q0AvzW40IoI4",
    "showTitle": "جبرة خاطر 💫 مع الكوتش عائشة دانش",
    "title": "جبرة خاطر ❤️‍🩹 ح6 - الحياة حلوة",
    "publishedAt": "",
    "duration": "PT3M3S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/AehODLlyPQk.jpg"
  },
  {
    "id": "Am_DBaZhcJQ",
    "videoId": "Am_DBaZhcJQ",
    "playlistId": "PLFm3_OhqZyNaPsa8ndqb9q0AvzW40IoI4",
    "showTitle": "جبرة خاطر 💫 مع الكوتش عائشة دانش",
    "title": "جبرة خاطر ❤️‍🩹 جبرة خاطر - ح4",
    "publishedAt": "",
    "duration": "PT5M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Am_DBaZhcJQ.jpg"
  },
  {
    "id": "DzdPdguua8g",
    "videoId": "DzdPdguua8g",
    "playlistId": "PLFm3_OhqZyNaPsa8ndqb9q0AvzW40IoI4",
    "showTitle": "جبرة خاطر 💫 مع الكوتش عائشة دانش",
    "title": "جبرة خاطر ❤️‍🩹 جبرة خاطر - ح5",
    "publishedAt": "",
    "duration": "PT4M50S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/DzdPdguua8g.jpg"
  },
  {
    "id": "eTKP-eunVCI",
    "videoId": "eTKP-eunVCI",
    "playlistId": "PLFm3_OhqZyNaPsa8ndqb9q0AvzW40IoI4",
    "showTitle": "جبرة خاطر 💫 مع الكوتش عائشة دانش",
    "title": "جبرة خاطر ❤️‍🩹 جبرة خاطر - ح3",
    "publishedAt": "",
    "duration": "PT5M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/eTKP-eunVCI.jpg"
  },
  {
    "id": "upWgQJALLqg",
    "videoId": "upWgQJALLqg",
    "playlistId": "PLFm3_OhqZyNaPsa8ndqb9q0AvzW40IoI4",
    "showTitle": "جبرة خاطر 💫 مع الكوتش عائشة دانش",
    "title": "جبرة خاطر ❤️‍🩹 جبرة خاطر - ح2",
    "publishedAt": "",
    "duration": "PT5M43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/upWgQJALLqg.jpg"
  },
  {
    "id": "mxZoFA43OxQ",
    "videoId": "mxZoFA43OxQ",
    "playlistId": "PLFm3_OhqZyNaPsa8ndqb9q0AvzW40IoI4",
    "showTitle": "جبرة خاطر 💫 مع الكوتش عائشة دانش",
    "title": "جبرة خاطر ❤️‍🩹 ح1",
    "publishedAt": "",
    "duration": "PT4M40S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/mxZoFA43OxQ.jpg"
  },
  {
    "id": "tm54BJG7_YE",
    "videoId": "tm54BJG7_YE",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H2M9S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/tm54BJG7_YE.jpg"
  },
  {
    "id": "RvsGdIAFLoU",
    "videoId": "RvsGdIAFLoU",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M58S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/RvsGdIAFLoU.jpg"
  },
  {
    "id": "bdnipADh87Q",
    "videoId": "bdnipADh87Q",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT59M56S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/bdnipADh87Q.jpg"
  },
  {
    "id": "-P9It9MCOb4",
    "videoId": "-P9It9MCOb4",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT54M22S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/-P9It9MCOb4.jpg"
  },
  {
    "id": "gq_rp9EHIic",
    "videoId": "gq_rp9EHIic",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT58M50S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/gq_rp9EHIic.jpg"
  },
  {
    "id": "xW7vTIQ8M7A",
    "videoId": "xW7vTIQ8M7A",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M6S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/xW7vTIQ8M7A.jpg"
  },
  {
    "id": "yrRkw20uiXA",
    "videoId": "yrRkw20uiXA",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M32S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/yrRkw20uiXA.jpg"
  },
  {
    "id": "5Q3XPvIaUd0",
    "videoId": "5Q3XPvIaUd0",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5Q3XPvIaUd0.jpg"
  },
  {
    "id": "As-W1Xj2BCU",
    "videoId": "As-W1Xj2BCU",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H2M42S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/As-W1Xj2BCU.jpg"
  },
  {
    "id": "5qIHzaNoIdU",
    "videoId": "5qIHzaNoIdU",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H11S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5qIHzaNoIdU.jpg"
  },
  {
    "id": "c8iKRb1dqBo",
    "videoId": "c8iKRb1dqBo",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H18S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/c8iKRb1dqBo.jpg"
  },
  {
    "id": "33dC3KjO1p4",
    "videoId": "33dC3KjO1p4",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT47M30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/33dC3KjO1p4.jpg"
  },
  {
    "id": "qIAqpDZgx3w",
    "videoId": "qIAqpDZgx3w",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H5M27S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/qIAqpDZgx3w.jpg"
  },
  {
    "id": "Tsy2HOGCivw",
    "videoId": "Tsy2HOGCivw",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT55M34S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Tsy2HOGCivw.jpg"
  },
  {
    "id": "o7Xk9rJFCKI",
    "videoId": "o7Xk9rJFCKI",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H12S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/o7Xk9rJFCKI.jpg"
  },
  {
    "id": "nF060ofDObE",
    "videoId": "nF060ofDObE",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H50S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/nF060ofDObE.jpg"
  },
  {
    "id": "akK8ETQ2gsM",
    "videoId": "akK8ETQ2gsM",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H42S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/akK8ETQ2gsM.jpg"
  },
  {
    "id": "e87Dl68B30w",
    "videoId": "e87Dl68B30w",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS - Finale",
    "publishedAt": "",
    "duration": "PT1H15S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/e87Dl68B30w.jpg"
  },
  {
    "id": "ualQNN93E18",
    "videoId": "ualQNN93E18",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS - Finale",
    "publishedAt": "",
    "duration": "PT1H2S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ualQNN93E18.jpg"
  },
  {
    "id": "qZ8z8cmWLjI",
    "videoId": "qZ8z8cmWLjI",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT53M37S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/qZ8z8cmWLjI.jpg"
  },
  {
    "id": "9gGl5jwTgvo",
    "videoId": "9gGl5jwTgvo",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M39S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/9gGl5jwTgvo.jpg"
  },
  {
    "id": "wNTpeqaWM3Y",
    "videoId": "wNTpeqaWM3Y",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H25S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/wNTpeqaWM3Y.jpg"
  },
  {
    "id": "0M1cmsA8d1U",
    "videoId": "0M1cmsA8d1U",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "التوره x الملا 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H15M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/0M1cmsA8d1U.jpg"
  },
  {
    "id": "gBi9WtGAAII",
    "videoId": "gBi9WtGAAII",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M37S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/gBi9WtGAAII.jpg"
  },
  {
    "id": "zzdvAVklA7k",
    "videoId": "zzdvAVklA7k",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H2M9S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/zzdvAVklA7k.jpg"
  },
  {
    "id": "1d7q2Z1NFzY",
    "videoId": "1d7q2Z1NFzY",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H5M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/1d7q2Z1NFzY.jpg"
  },
  {
    "id": "LXIIvQFFxJE",
    "videoId": "LXIIvQFFxJE",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H2M23S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/LXIIvQFFxJE.jpg"
  },
  {
    "id": "mRyqQE9mc60",
    "videoId": "mRyqQE9mc60",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS - Round  12",
    "publishedAt": "",
    "duration": "PT1H3M15S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/mRyqQE9mc60.jpg"
  },
  {
    "id": "ebUXF7y0sOk",
    "videoId": "ebUXF7y0sOk",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS - Round  11",
    "publishedAt": "",
    "duration": "PT1H5S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ebUXF7y0sOk.jpg"
  },
  {
    "id": "6LBktsequls",
    "videoId": "6LBktsequls",
    "playlistId": "PLFm3_OhqZyNbJL7oYe_S9aKvpnJqJwWJw",
    "showTitle": "البرنامج المباشر DRS",
    "title": "البرنامج المباشر 🏎️ DRS - Round 10",
    "publishedAt": "",
    "duration": "PT1H20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/6LBktsequls.jpg"
  },
  {
    "id": "s0UkPAgG7lw",
    "videoId": "s0UkPAgG7lw",
    "playlistId": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "showTitle": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/s0UkPAgG7lw.jpg"
  },
  {
    "id": "lt9QnDaimnU",
    "videoId": "lt9QnDaimnU",
    "playlistId": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "showTitle": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT59M23S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/lt9QnDaimnU.jpg"
  },
  {
    "id": "9Jvn4O_oIl8",
    "videoId": "9Jvn4O_oIl8",
    "playlistId": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "showTitle": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/9Jvn4O_oIl8.jpg"
  },
  {
    "id": "_RcqAzvSdCw",
    "videoId": "_RcqAzvSdCw",
    "playlistId": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "showTitle": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H27S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/_RcqAzvSdCw.jpg"
  },
  {
    "id": "nOrEiY-2hyY",
    "videoId": "nOrEiY-2hyY",
    "playlistId": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "showTitle": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT59M16S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/nOrEiY-2hyY.jpg"
  },
  {
    "id": "nLw-tU7xD1k",
    "videoId": "nLw-tU7xD1k",
    "playlistId": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "showTitle": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H5S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/nLw-tU7xD1k.jpg"
  },
  {
    "id": "HalUGNfvRkE",
    "videoId": "HalUGNfvRkE",
    "playlistId": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "showTitle": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M10S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/HalUGNfvRkE.jpg"
  },
  {
    "id": "LBoKcVJhE84",
    "videoId": "LBoKcVJhE84",
    "playlistId": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "showTitle": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H19S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/LBoKcVJhE84.jpg"
  },
  {
    "id": "7CXBw8STd1I",
    "videoId": "7CXBw8STd1I",
    "playlistId": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "showTitle": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H2M27S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7CXBw8STd1I.jpg"
  },
  {
    "id": "0QlWBiDdu4w",
    "videoId": "0QlWBiDdu4w",
    "playlistId": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "showTitle": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H34S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/0QlWBiDdu4w.jpg"
  },
  {
    "id": "LsRE5WrhD24",
    "videoId": "LsRE5WrhD24",
    "playlistId": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "showTitle": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/LsRE5WrhD24.jpg"
  },
  {
    "id": "f_Kd_ho69VY",
    "videoId": "f_Kd_ho69VY",
    "playlistId": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "showTitle": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H46S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/f_Kd_ho69VY.jpg"
  },
  {
    "id": "CLOvsjjNuO8",
    "videoId": "CLOvsjjNuO8",
    "playlistId": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "showTitle": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M6S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/CLOvsjjNuO8.jpg"
  },
  {
    "id": "X7Pb_bVD1c0",
    "videoId": "X7Pb_bVD1c0",
    "playlistId": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "showTitle": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H2M16S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/X7Pb_bVD1c0.jpg"
  },
  {
    "id": "aTAiqaSJrmI",
    "videoId": "aTAiqaSJrmI",
    "playlistId": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "showTitle": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "title": "لقاء الاستاذة دانة السعد نائب رئيس التنفيذي للموارد والمشاريع في هيئة البحرين للسياحة والمعارض",
    "publishedAt": "",
    "duration": "PT8M16S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/aTAiqaSJrmI.jpg"
  },
  {
    "id": "ZgL46duCwgc",
    "videoId": "ZgL46duCwgc",
    "playlistId": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "showTitle": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "title": "لقاء سارة الهاشمي تنفيد علاقات عامة واعلام ومسؤول الاعلام الوطني - الفورمولا ون",
    "publishedAt": "",
    "duration": "PT13M38S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ZgL46duCwgc.jpg"
  },
  {
    "id": "Ev8XlYWKOuo",
    "videoId": "Ev8XlYWKOuo",
    "playlistId": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "showTitle": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "title": "لقاء صلاح صلاح الدين - ضمن تغطية Formula1",
    "publishedAt": "",
    "duration": "PT10M40S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Ev8XlYWKOuo.jpg"
  },
  {
    "id": "m8F0t18bdrI",
    "videoId": "m8F0t18bdrI",
    "playlistId": "PLFm3_OhqZyNYpCW2KxC47HZwOrtMktO9l",
    "showTitle": "تغطية إذاعة البحرين لجائزة البحرين الكبرى للفورملا وان 2025",
    "title": "دارينا ايفنوفا من بلغاريا والشاب بشار صبحي من الاردن",
    "publishedAt": "",
    "duration": "PT10M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/m8F0t18bdrI.jpg"
  },
  {
    "id": "g-7B_VX5cwI",
    "videoId": "g-7B_VX5cwI",
    "playlistId": "PLFm3_OhqZyNZSlS3TuRV511HKpHrh1Aie",
    "showTitle": "فرقة الأصلي",
    "title": "سامري سدرة هيضتني - فرقة الأصلي",
    "publishedAt": "",
    "duration": "PT5M1S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/g-7B_VX5cwI.jpg"
  },
  {
    "id": "hn6NGQyyv5U",
    "videoId": "hn6NGQyyv5U",
    "playlistId": "PLFm3_OhqZyNZSlS3TuRV511HKpHrh1Aie",
    "showTitle": "فرقة الأصلي",
    "title": "دزة - فرقة الأصلي",
    "publishedAt": "",
    "duration": "PT5M10S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/hn6NGQyyv5U.jpg"
  },
  {
    "id": "R2ElPfD8ThA",
    "videoId": "R2ElPfD8ThA",
    "playlistId": "PLFm3_OhqZyNZSlS3TuRV511HKpHrh1Aie",
    "showTitle": "فرقة الأصلي",
    "title": "سامري يوم الثلاثاء - فرقة الاصلي",
    "publishedAt": "",
    "duration": "PT6M19S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/R2ElPfD8ThA.jpg"
  },
  {
    "id": "rQP017uL-Q8",
    "videoId": "rQP017uL-Q8",
    "playlistId": "PLFm3_OhqZyNZSlS3TuRV511HKpHrh1Aie",
    "showTitle": "فرقة الأصلي",
    "title": "مروبع البارحة نوم - فرقة الاصلي",
    "publishedAt": "",
    "duration": "PT5M18S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/rQP017uL-Q8.jpg"
  },
  {
    "id": "oUKt2AzlvsU",
    "videoId": "oUKt2AzlvsU",
    "playlistId": "PLFm3_OhqZyNZSlS3TuRV511HKpHrh1Aie",
    "showTitle": "فرقة الأصلي",
    "title": "خماري نجدي يا من يسلم لي - فرقة الاصلي",
    "publishedAt": "",
    "duration": "PT5M29S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/oUKt2AzlvsU.jpg"
  },
  {
    "id": "T1sJyOTsIT4",
    "videoId": "T1sJyOTsIT4",
    "playlistId": "PLFm3_OhqZyNZp6KpRkY6TA1LR6RyfzBBf",
    "showTitle": "المسلسل الكوميدي الإذاعي “هب السعد”",
    "title": "هب السعد - معاك معاك يالأحمر",
    "publishedAt": "",
    "duration": "PT18M29S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/T1sJyOTsIT4.jpg"
  },
  {
    "id": "LHKoHmMeICc",
    "videoId": "LHKoHmMeICc",
    "playlistId": "PLFm3_OhqZyNZp6KpRkY6TA1LR6RyfzBBf",
    "showTitle": "المسلسل الكوميدي الإذاعي “هب السعد”",
    "title": "هب السعد - محفور في اليوف",
    "publishedAt": "",
    "duration": "PT12M53S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/LHKoHmMeICc.jpg"
  },
  {
    "id": "IkdJeQWOVr8",
    "videoId": "IkdJeQWOVr8",
    "playlistId": "PLFm3_OhqZyNZp6KpRkY6TA1LR6RyfzBBf",
    "showTitle": "المسلسل الكوميدي الإذاعي “هب السعد”",
    "title": "هب السعد - المخادع",
    "publishedAt": "",
    "duration": "PT12M43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/IkdJeQWOVr8.jpg"
  },
  {
    "id": "pS4r3MB8o4g",
    "videoId": "pS4r3MB8o4g",
    "playlistId": "PLFm3_OhqZyNZp6KpRkY6TA1LR6RyfzBBf",
    "showTitle": "المسلسل الكوميدي الإذاعي “هب السعد”",
    "title": "هب السعد - الكبكات",
    "publishedAt": "",
    "duration": "PT13M1S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/pS4r3MB8o4g.jpg"
  },
  {
    "id": "qWtqtyPoK_4",
    "videoId": "qWtqtyPoK_4",
    "playlistId": "PLFm3_OhqZyNZp6KpRkY6TA1LR6RyfzBBf",
    "showTitle": "المسلسل الكوميدي الإذاعي “هب السعد”",
    "title": "هب السعد - المرجلة",
    "publishedAt": "",
    "duration": "PT13M36S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/qWtqtyPoK_4.jpg"
  },
  {
    "id": "n7vwv4rEMWk",
    "videoId": "n7vwv4rEMWk",
    "playlistId": "PLFm3_OhqZyNZp6KpRkY6TA1LR6RyfzBBf",
    "showTitle": "المسلسل الكوميدي الإذاعي “هب السعد”",
    "title": "هب السعد - الفزعة",
    "publishedAt": "",
    "duration": "PT11M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/n7vwv4rEMWk.jpg"
  },
  {
    "id": "AueLu0Boepo",
    "videoId": "AueLu0Boepo",
    "playlistId": "PLFm3_OhqZyNZp6KpRkY6TA1LR6RyfzBBf",
    "showTitle": "المسلسل الكوميدي الإذاعي “هب السعد”",
    "title": "هب السعد - بنت الجيران",
    "publishedAt": "",
    "duration": "PT13M5S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/AueLu0Boepo.jpg"
  },
  {
    "id": "4uEm-ic6aUs",
    "videoId": "4uEm-ic6aUs",
    "playlistId": "PLFm3_OhqZyNZp6KpRkY6TA1LR6RyfzBBf",
    "showTitle": "المسلسل الكوميدي الإذاعي “هب السعد”",
    "title": "هب السعد - البنفسج",
    "publishedAt": "",
    "duration": "PT18M2S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/4uEm-ic6aUs.jpg"
  },
  {
    "id": "Dpu3nfcOXNE",
    "videoId": "Dpu3nfcOXNE",
    "playlistId": "PLFm3_OhqZyNZp6KpRkY6TA1LR6RyfzBBf",
    "showTitle": "المسلسل الكوميدي الإذاعي “هب السعد”",
    "title": "هب السعد -الصندقة",
    "publishedAt": "",
    "duration": "PT14M6S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Dpu3nfcOXNE.jpg"
  },
  {
    "id": "Z8cKRwi8sxQ",
    "videoId": "Z8cKRwi8sxQ",
    "playlistId": "PLFm3_OhqZyNZp6KpRkY6TA1LR6RyfzBBf",
    "showTitle": "المسلسل الكوميدي الإذاعي “هب السعد”",
    "title": "هب السعد - مريانه",
    "publishedAt": "",
    "duration": "PT12M11S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Z8cKRwi8sxQ.jpg"
  },
  {
    "id": "uVMbpufnq9Q",
    "videoId": "uVMbpufnq9Q",
    "playlistId": "PLFm3_OhqZyNZp6KpRkY6TA1LR6RyfzBBf",
    "showTitle": "المسلسل الكوميدي الإذاعي “هب السعد”",
    "title": "هب السعد - لو دامت لغيرك",
    "publishedAt": "",
    "duration": "PT11M51S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/uVMbpufnq9Q.jpg"
  },
  {
    "id": "-ujZ6jMWXbg",
    "videoId": "-ujZ6jMWXbg",
    "playlistId": "PLFm3_OhqZyNZp6KpRkY6TA1LR6RyfzBBf",
    "showTitle": "المسلسل الكوميدي الإذاعي “هب السعد”",
    "title": "هب السعد - زحمة يا دنيا",
    "publishedAt": "",
    "duration": "PT15M56S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/-ujZ6jMWXbg.jpg"
  },
  {
    "id": "eHfhbTdTcWs",
    "videoId": "eHfhbTdTcWs",
    "playlistId": "PLFm3_OhqZyNZp6KpRkY6TA1LR6RyfzBBf",
    "showTitle": "المسلسل الكوميدي الإذاعي “هب السعد”",
    "title": "هب السعد - الداعوس",
    "publishedAt": "",
    "duration": "PT14M24S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/eHfhbTdTcWs.jpg"
  },
  {
    "id": "H3Pe0R5R03Q",
    "videoId": "H3Pe0R5R03Q",
    "playlistId": "PLFm3_OhqZyNZp6KpRkY6TA1LR6RyfzBBf",
    "showTitle": "المسلسل الكوميدي الإذاعي “هب السعد”",
    "title": "هب السعد - خباز الفريج",
    "publishedAt": "",
    "duration": "PT13M6S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/H3Pe0R5R03Q.jpg"
  },
  {
    "id": "MrP1Vcq6cRY",
    "videoId": "MrP1Vcq6cRY",
    "playlistId": "PLFm3_OhqZyNZp6KpRkY6TA1LR6RyfzBBf",
    "showTitle": "المسلسل الكوميدي الإذاعي “هب السعد”",
    "title": "هب السعد - بطة يا بطة",
    "publishedAt": "",
    "duration": "PT12M42S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/MrP1Vcq6cRY.jpg"
  },
  {
    "id": "1Wbo9Wt052o",
    "videoId": "1Wbo9Wt052o",
    "playlistId": "PLFm3_OhqZyNZp6KpRkY6TA1LR6RyfzBBf",
    "showTitle": "المسلسل الكوميدي الإذاعي “هب السعد”",
    "title": "المسلسل الكوميدي الإذاعي “هب السعد”",
    "publishedAt": "",
    "duration": "PT49S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/1Wbo9Wt052o.jpg"
  },
  {
    "id": "pKUBuFawgF0",
    "videoId": "pKUBuFawgF0",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 29 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H30M8S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/pKUBuFawgF0.jpg"
  },
  {
    "id": "u9Jnlo9IEH0",
    "videoId": "u9Jnlo9IEH0",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 27 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H29M19S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/u9Jnlo9IEH0.jpg"
  },
  {
    "id": "k3sAVcyk6ZA",
    "videoId": "k3sAVcyk6ZA",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "تقلبي طبيشوه 🪘🪘",
    "publishedAt": "",
    "duration": "PT2M43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/k3sAVcyk6ZA.jpg"
  },
  {
    "id": "LNoRJvGpR48",
    "videoId": "LNoRJvGpR48",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 26 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H23M56S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/LNoRJvGpR48.jpg"
  },
  {
    "id": "DmZ1S_0JxFQ",
    "videoId": "DmZ1S_0JxFQ",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 25 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H27M29S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/DmZ1S_0JxFQ.jpg"
  },
  {
    "id": "rtAXQbQCc7E",
    "videoId": "rtAXQbQCc7E",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 24 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H31M59S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/rtAXQbQCc7E.jpg"
  },
  {
    "id": "ZX2df8OxgIc",
    "videoId": "ZX2df8OxgIc",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 23 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H19M29S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ZX2df8OxgIc.jpg"
  },
  {
    "id": "-t-N0RBI6j4",
    "videoId": "-t-N0RBI6j4",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 22 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H18M57S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/-t-N0RBI6j4.jpg"
  },
  {
    "id": "aQVs7lt2UYs",
    "videoId": "aQVs7lt2UYs",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 20 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H19M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/aQVs7lt2UYs.jpg"
  },
  {
    "id": "u3z8X1D8eSE",
    "videoId": "u3z8X1D8eSE",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 19 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H15M34S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/u3z8X1D8eSE.jpg"
  },
  {
    "id": "c6H4rtGv5Nk",
    "videoId": "c6H4rtGv5Nk",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 18 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H19M8S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/c6H4rtGv5Nk.jpg"
  },
  {
    "id": "hlzx3ggAlhU",
    "videoId": "hlzx3ggAlhU",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 17 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H22M2S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/hlzx3ggAlhU.jpg"
  },
  {
    "id": "EDDY7ZU3IfM",
    "videoId": "EDDY7ZU3IfM",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 16 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H25M5S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/EDDY7ZU3IfM.jpg"
  },
  {
    "id": "dXT-9lPs9eI",
    "videoId": "dXT-9lPs9eI",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 15 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H30M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/dXT-9lPs9eI.jpg"
  },
  {
    "id": "pl7_4zeAJNQ",
    "videoId": "pl7_4zeAJNQ",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 13 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H1M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/pl7_4zeAJNQ.jpg"
  },
  {
    "id": "XUHsj-0l5fs",
    "videoId": "XUHsj-0l5fs",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 13 رمضان 1446 - ج٢",
    "publishedAt": "",
    "duration": "PT13M3S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/XUHsj-0l5fs.jpg"
  },
  {
    "id": "_50Nom0M8I8",
    "videoId": "_50Nom0M8I8",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 12 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H30M30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/_50Nom0M8I8.jpg"
  },
  {
    "id": "au_fT2VJoj4",
    "videoId": "au_fT2VJoj4",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 11 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H28M56S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/au_fT2VJoj4.jpg"
  },
  {
    "id": "Ca3tVmUDVIg",
    "videoId": "Ca3tVmUDVIg",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 10 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H29M58S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Ca3tVmUDVIg.jpg"
  },
  {
    "id": "wtRSIoP0xXY",
    "videoId": "wtRSIoP0xXY",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 9 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H28M34S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/wtRSIoP0xXY.jpg"
  },
  {
    "id": "Fhw0rrI1lBI",
    "videoId": "Fhw0rrI1lBI",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 8 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H31M12S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Fhw0rrI1lBI.jpg"
  },
  {
    "id": "KESA4_-Epj0",
    "videoId": "KESA4_-Epj0",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "[RERUN] مسابقة  اللاتري  📡 - 6 رمضان 1446 [إعادة]",
    "publishedAt": "",
    "duration": "PT1H47M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/KESA4_-Epj0.jpg"
  },
  {
    "id": "1ou6mMIBM7E",
    "videoId": "1ou6mMIBM7E",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 6 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H30M38S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/1ou6mMIBM7E.jpg"
  },
  {
    "id": "32f0VRO5BV0",
    "videoId": "32f0VRO5BV0",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 5 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H25M44S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/32f0VRO5BV0.jpg"
  },
  {
    "id": "Rh6HQYwevVg",
    "videoId": "Rh6HQYwevVg",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 4 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H34M6S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Rh6HQYwevVg.jpg"
  },
  {
    "id": "nZ0UZUaXa5I",
    "videoId": "nZ0UZUaXa5I",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 3 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H30M57S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/nZ0UZUaXa5I.jpg"
  },
  {
    "id": "zF4fjrzkTyE",
    "videoId": "zF4fjrzkTyE",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 2 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H27M21S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/zF4fjrzkTyE.jpg"
  },
  {
    "id": "YLiq7MDkG64",
    "videoId": "YLiq7MDkG64",
    "playlistId": "PLFm3_OhqZyNaAgFYz3k9FFl1z-Bw5YgW_",
    "showTitle": "مسابقة  اللاتري  📡 - 2025م",
    "title": "مسابقة  اللاتري  📡 - 1 رمضان 1446",
    "publishedAt": "",
    "duration": "PT1H30M49S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/YLiq7MDkG64.jpg"
  },
  {
    "id": "RjF5cRfNjt0",
    "videoId": "RjF5cRfNjt0",
    "playlistId": "PLFm3_OhqZyNZT_-Q7To32bGf7rEEpWEan",
    "showTitle": "حكاية نجم 💫",
    "title": "‎⁨حكاية نجم 💫 - د. الشيخة ايشاع آل خليفة - ح28",
    "publishedAt": "",
    "duration": "PT15M42S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/RjF5cRfNjt0.jpg"
  },
  {
    "id": "VuRhAkD77W4",
    "videoId": "VuRhAkD77W4",
    "playlistId": "PLFm3_OhqZyNZT_-Q7To32bGf7rEEpWEan",
    "showTitle": "حكاية نجم 💫",
    "title": "‎⁨حكاية نجم 💫 - الذكاء الاصطناعي - ح26",
    "publishedAt": "",
    "duration": "PT9M49S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/VuRhAkD77W4.jpg"
  },
  {
    "id": "bA5Vt-l36HU",
    "videoId": "bA5Vt-l36HU",
    "playlistId": "PLFm3_OhqZyNZT_-Q7To32bGf7rEEpWEan",
    "showTitle": "حكاية نجم 💫",
    "title": "‎⁨حكاية نجم 💫 - لُبنى خميس - ح27",
    "publishedAt": "",
    "duration": "PT6M10S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/bA5Vt-l36HU.jpg"
  },
  {
    "id": "EDp-qyR0Lw8",
    "videoId": "EDp-qyR0Lw8",
    "playlistId": "PLFm3_OhqZyNZT_-Q7To32bGf7rEEpWEan",
    "showTitle": "حكاية نجم 💫",
    "title": "حكاية نجم 💫 - محمد سعيد محارب - ح25",
    "publishedAt": "",
    "duration": "PT12M18S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/EDp-qyR0Lw8.jpg"
  },
  {
    "id": "RUxsXELlsMU",
    "videoId": "RUxsXELlsMU",
    "playlistId": "PLFm3_OhqZyNZT_-Q7To32bGf7rEEpWEan",
    "showTitle": "حكاية نجم 💫",
    "title": "حكاية نجم 💫 - محمد لوري - ح17",
    "publishedAt": "",
    "duration": "PT20M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/RUxsXELlsMU.jpg"
  },
  {
    "id": "hUBYc9fRR08",
    "videoId": "hUBYc9fRR08",
    "playlistId": "PLFm3_OhqZyNZT_-Q7To32bGf7rEEpWEan",
    "showTitle": "حكاية نجم 💫",
    "title": "حكاية نجم.. علي أسعد",
    "publishedAt": "",
    "duration": "PT5M24S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/hUBYc9fRR08.jpg"
  },
  {
    "id": "ulr85aqqYVI",
    "videoId": "ulr85aqqYVI",
    "playlistId": "PLFm3_OhqZyNZT_-Q7To32bGf7rEEpWEan",
    "showTitle": "حكاية نجم 💫",
    "title": "حكاية نجم.. منى الشاذلي",
    "publishedAt": "",
    "duration": "PT10M50S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ulr85aqqYVI.jpg"
  },
  {
    "id": "YGo7BzB2LaY",
    "videoId": "YGo7BzB2LaY",
    "playlistId": "PLFm3_OhqZyNZkw0bVpAK3rXfhWQ3YKnBX",
    "showTitle": "برنامج صوت الشغف ⚽️🏀",
    "title": "صوت الشغف.. أسامة_الليث: البحرين جنة رياضة السيارات 🏎️🛡️",
    "publishedAt": "",
    "duration": "PT44M56S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/YGo7BzB2LaY.jpg"
  },
  {
    "id": "3q8WmQUrUG4",
    "videoId": "3q8WmQUrUG4",
    "playlistId": "PLFm3_OhqZyNZkw0bVpAK3rXfhWQ3YKnBX",
    "showTitle": "برنامج صوت الشغف ⚽️🏀",
    "title": "صوت الشغف مع مهدي سعد  🤾🏻‍♂️🩼",
    "publishedAt": "",
    "duration": "PT34M39S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/3q8WmQUrUG4.jpg"
  },
  {
    "id": "3zWD-fSvdZQ",
    "videoId": "3zWD-fSvdZQ",
    "playlistId": "PLFm3_OhqZyNZkw0bVpAK3rXfhWQ3YKnBX",
    "showTitle": "برنامج صوت الشغف ⚽️🏀",
    "title": "صوت الشغف.. حسين عياد:  الإصابة لم تقتلني!! 💪",
    "publishedAt": "",
    "duration": "PT46M17S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/3zWD-fSvdZQ.jpg"
  },
  {
    "id": "W3wv4Lrc7Cw",
    "videoId": "W3wv4Lrc7Cw",
    "playlistId": "PLFm3_OhqZyNZkw0bVpAK3rXfhWQ3YKnBX",
    "showTitle": "برنامج صوت الشغف ⚽️🏀",
    "title": "صوت الشغف.. محمد عبدالغفار: وسائل التواصل قلبت الموازين 🔁",
    "publishedAt": "",
    "duration": "PT43M59S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/W3wv4Lrc7Cw.jpg"
  },
  {
    "id": "K8i7hmB38HM",
    "videoId": "K8i7hmB38HM",
    "playlistId": "PLFm3_OhqZyNZkw0bVpAK3rXfhWQ3YKnBX",
    "showTitle": "برنامج صوت الشغف ⚽️🏀",
    "title": "رياضة خارج حدود المنطق مع محمد الغيص 🚴🏾‍♂️🧗🏾‍♂️🥇🏔️ - صوت الشغف",
    "publishedAt": "",
    "duration": "PT44M7S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/K8i7hmB38HM.jpg"
  },
  {
    "id": "k2D1h6hmCYg",
    "videoId": "k2D1h6hmCYg",
    "playlistId": "PLFm3_OhqZyNZkw0bVpAK3rXfhWQ3YKnBX",
    "showTitle": "برنامج صوت الشغف ⚽️🏀",
    "title": "بودكاست صوت الشغف مع بدر يوسف 🏋🏻‍♀️",
    "publishedAt": "",
    "duration": "PT40M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/k2D1h6hmCYg.jpg"
  },
  {
    "id": "ucHLQIXf1rI",
    "videoId": "ucHLQIXf1rI",
    "playlistId": "PLFm3_OhqZyNZkw0bVpAK3rXfhWQ3YKnBX",
    "showTitle": "برنامج صوت الشغف ⚽️🏀",
    "title": "صوت الشغف.. راشد_سند: فرنسا وألمانيا الحلم القادم !! 🏓",
    "publishedAt": "",
    "duration": "PT37M19S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ucHLQIXf1rI.jpg"
  },
  {
    "id": "H_x8OGAX-uo",
    "videoId": "H_x8OGAX-uo",
    "playlistId": "PLFm3_OhqZyNZkw0bVpAK3rXfhWQ3YKnBX",
    "showTitle": "برنامج صوت الشغف ⚽️🏀",
    "title": "صوت الشغف مع عيسى الرميثي 🏋🏻‍♀️",
    "publishedAt": "",
    "duration": "PT34M45S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/H_x8OGAX-uo.jpg"
  },
  {
    "id": "h8s_SFtAGX8",
    "videoId": "h8s_SFtAGX8",
    "playlistId": "PLFm3_OhqZyNZkw0bVpAK3rXfhWQ3YKnBX",
    "showTitle": "برنامج صوت الشغف ⚽️🏀",
    "title": "صوت الشغف - مع خليفة رشدان 🎾",
    "publishedAt": "",
    "duration": "PT35M57S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/h8s_SFtAGX8.jpg"
  },
  {
    "id": "BCG8REnF2IU",
    "videoId": "BCG8REnF2IU",
    "playlistId": "PLFm3_OhqZyNZkw0bVpAK3rXfhWQ3YKnBX",
    "showTitle": "برنامج صوت الشغف ⚽️🏀",
    "title": "صوت الشغف.. أسامة الكوهجي: العودة ليست بيدي.. وسلتنا اكتشفت الطريق🏀",
    "publishedAt": "",
    "duration": "PT41M22S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/BCG8REnF2IU.jpg"
  },
  {
    "id": "FwjZ3u9TRlY",
    "videoId": "FwjZ3u9TRlY",
    "playlistId": "PLFm3_OhqZyNZkw0bVpAK3rXfhWQ3YKnBX",
    "showTitle": "برنامج صوت الشغف ⚽️🏀",
    "title": "صوت الشغف.. الدكتور مؤيد العلوي🩺: الكورتيزون المتهم البريء💉 ‼️",
    "publishedAt": "",
    "duration": "PT40M47S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/FwjZ3u9TRlY.jpg"
  },
  {
    "id": "nEyP6kNAkGc",
    "videoId": "nEyP6kNAkGc",
    "playlistId": "PLFm3_OhqZyNZkw0bVpAK3rXfhWQ3YKnBX",
    "showTitle": "برنامج صوت الشغف ⚽️🏀",
    "title": "صوت الشغف.. طلال السيد: لا زال البعض يتعاقد تحت الطاولة 📑",
    "publishedAt": "",
    "duration": "PT44M32S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/nEyP6kNAkGc.jpg"
  },
  {
    "id": "zMOeQnb_Qv0",
    "videoId": "zMOeQnb_Qv0",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح5",
    "publishedAt": "",
    "duration": "PT2H39S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/zMOeQnb_Qv0.jpg"
  },
  {
    "id": "gzGULtkEpMs",
    "videoId": "gzGULtkEpMs",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح4",
    "publishedAt": "",
    "duration": "PT1H59M43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/gzGULtkEpMs.jpg"
  },
  {
    "id": "6ZNaJtkRadA",
    "videoId": "6ZNaJtkRadA",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح3",
    "publishedAt": "",
    "duration": "PT1H54M2S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/6ZNaJtkRadA.jpg"
  },
  {
    "id": "Hzma4nBdIe8",
    "videoId": "Hzma4nBdIe8",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح2",
    "publishedAt": "",
    "duration": "PT1H53M55S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Hzma4nBdIe8.jpg"
  },
  {
    "id": "yQr3ga_6lyA",
    "videoId": "yQr3ga_6lyA",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 16 - ح1",
    "publishedAt": "",
    "duration": "PT1H52M34S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/yQr3ga_6lyA.jpg"
  },
  {
    "id": "U6__8XyJ35w",
    "videoId": "U6__8XyJ35w",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح32",
    "publishedAt": "",
    "duration": "PT1H52M22S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/U6__8XyJ35w.jpg"
  },
  {
    "id": "jXuLYPTvvow",
    "videoId": "jXuLYPTvvow",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح31",
    "publishedAt": "",
    "duration": "PT1H54M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/jXuLYPTvvow.jpg"
  },
  {
    "id": "EDece_KC0os",
    "videoId": "EDece_KC0os",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح30",
    "publishedAt": "",
    "duration": "PT1H48M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/EDece_KC0os.jpg"
  },
  {
    "id": "eFvJ8kxq2tk",
    "videoId": "eFvJ8kxq2tk",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح29",
    "publishedAt": "",
    "duration": "PT1H55M37S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/eFvJ8kxq2tk.jpg"
  },
  {
    "id": "e24oJXWp5TY",
    "videoId": "e24oJXWp5TY",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "رأي الكابتن عبدالرحمن المالكي في هدف انتر ميلان الاول",
    "publishedAt": "",
    "duration": "PT5M2S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/e24oJXWp5TY.jpg"
  },
  {
    "id": "C2kEXgZRp8E",
    "videoId": "C2kEXgZRp8E",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح28",
    "publishedAt": "",
    "duration": "PT1H58M35S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/C2kEXgZRp8E.jpg"
  },
  {
    "id": "fWqz-9KOrho",
    "videoId": "fWqz-9KOrho",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح27",
    "publishedAt": "",
    "duration": "PT1H50M17S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/fWqz-9KOrho.jpg"
  },
  {
    "id": "G6GgyWv8sH8",
    "videoId": "G6GgyWv8sH8",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح26",
    "publishedAt": "",
    "duration": "PT1H58M54S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/G6GgyWv8sH8.jpg"
  },
  {
    "id": "S5Zul0FpOSU",
    "videoId": "S5Zul0FpOSU",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح25",
    "publishedAt": "",
    "duration": "PT1H46M32S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/S5Zul0FpOSU.jpg"
  },
  {
    "id": "uirn_fOWdXU",
    "videoId": "uirn_fOWdXU",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح24",
    "publishedAt": "",
    "duration": "PT1H55M36S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/uirn_fOWdXU.jpg"
  },
  {
    "id": "0LXG3wSdnf4",
    "videoId": "0LXG3wSdnf4",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح23",
    "publishedAt": "",
    "duration": "PT2H1M4S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/0LXG3wSdnf4.jpg"
  },
  {
    "id": "87goFAORje0",
    "videoId": "87goFAORje0",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح22",
    "publishedAt": "",
    "duration": "PT1H58M5S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/87goFAORje0.jpg"
  },
  {
    "id": "2pdpLK6zAWc",
    "videoId": "2pdpLK6zAWc",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح21",
    "publishedAt": "",
    "duration": "PT1H58M14S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/2pdpLK6zAWc.jpg"
  },
  {
    "id": "iXd34Hjeuf8",
    "videoId": "iXd34Hjeuf8",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح20",
    "publishedAt": "",
    "duration": "PT1H55M47S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/iXd34Hjeuf8.jpg"
  },
  {
    "id": "5UtDZzf9-3M",
    "videoId": "5UtDZzf9-3M",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح19",
    "publishedAt": "",
    "duration": "PT2H9S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5UtDZzf9-3M.jpg"
  },
  {
    "id": "zoss1zVoo1E",
    "videoId": "zoss1zVoo1E",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح18",
    "publishedAt": "",
    "duration": "PT1H58M34S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/zoss1zVoo1E.jpg"
  },
  {
    "id": "rM7_SZ4gbFY",
    "videoId": "rM7_SZ4gbFY",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح17",
    "publishedAt": "",
    "duration": "PT1H57M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/rM7_SZ4gbFY.jpg"
  },
  {
    "id": "7rhcM4Ij000",
    "videoId": "7rhcM4Ij000",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح16",
    "publishedAt": "",
    "duration": "PT1H56M4S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7rhcM4Ij000.jpg"
  },
  {
    "id": "AxOCQCqkoUU",
    "videoId": "AxOCQCqkoUU",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح15",
    "publishedAt": "",
    "duration": "PT1H57M7S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/AxOCQCqkoUU.jpg"
  },
  {
    "id": "5TdVZQDsTXg",
    "videoId": "5TdVZQDsTXg",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 - ح14",
    "publishedAt": "",
    "duration": "PT1H41M26S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5TdVZQDsTXg.jpg"
  },
  {
    "id": "BNmSqBeUGiQ",
    "videoId": "BNmSqBeUGiQ",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 -ح13",
    "publishedAt": "",
    "duration": "PT1H51M25S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/BNmSqBeUGiQ.jpg"
  },
  {
    "id": "sY_lD_rriyQ",
    "videoId": "sY_lD_rriyQ",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 -ح12",
    "publishedAt": "",
    "duration": "PT1H53M54S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/sY_lD_rriyQ.jpg"
  },
  {
    "id": "U6n475R42Ug",
    "videoId": "U6n475R42Ug",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "لقاء خاص مع السيد خافيير تيباس رئيس رابطة الدوري الإسباني",
    "publishedAt": "",
    "duration": "PT8M58S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/U6n475R42Ug.jpg"
  },
  {
    "id": "OmuIjkaHBmk",
    "videoId": "OmuIjkaHBmk",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 -ح11",
    "publishedAt": "",
    "duration": "PT1H56M49S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/OmuIjkaHBmk.jpg"
  },
  {
    "id": "dMryRufRVdM",
    "videoId": "dMryRufRVdM",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 -ح10",
    "publishedAt": "",
    "duration": "PT1H55M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/dMryRufRVdM.jpg"
  },
  {
    "id": "0zJttE4O_WA",
    "videoId": "0zJttE4O_WA",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 -ح9",
    "publishedAt": "",
    "duration": "PT1H59M4S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/0zJttE4O_WA.jpg"
  },
  {
    "id": "Av7cQrFGCF8",
    "videoId": "Av7cQrFGCF8",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 -ح8",
    "publishedAt": "",
    "duration": "PT1H59M9S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Av7cQrFGCF8.jpg"
  },
  {
    "id": "EAc3ya0Nu5I",
    "videoId": "EAc3ya0Nu5I",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 -ح7",
    "publishedAt": "",
    "duration": "PT1H56M37S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/EAc3ya0Nu5I.jpg"
  },
  {
    "id": "VSIZ6utCskI",
    "videoId": "VSIZ6utCskI",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 -ح6",
    "publishedAt": "",
    "duration": "PT1H58M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/VSIZ6utCskI.jpg"
  },
  {
    "id": "YGq4AReqmMI",
    "videoId": "YGq4AReqmMI",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 -ح5",
    "publishedAt": "",
    "duration": "PT1H55M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/YGq4AReqmMI.jpg"
  },
  {
    "id": "R0wU-U43VWc",
    "videoId": "R0wU-U43VWc",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 -ح4",
    "publishedAt": "",
    "duration": "PT2H12S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/R0wU-U43VWc.jpg"
  },
  {
    "id": "SrJzNyxlDGs",
    "videoId": "SrJzNyxlDGs",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج ⚽️ اف ام ليغ - الموسم: 15 -ح3",
    "publishedAt": "",
    "duration": "PT1H52M10S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/SrJzNyxlDGs.jpg"
  },
  {
    "id": "UUI5tPd_1JQ",
    "videoId": "UUI5tPd_1JQ",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج اف ام ليغ - الموسم: 15 -ح2",
    "publishedAt": "",
    "duration": "PT1H54M42S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/UUI5tPd_1JQ.jpg"
  },
  {
    "id": "w5PLcjia-XA",
    "videoId": "w5PLcjia-XA",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "برنامج اف ام ليغ - الموسم: 15 -",
    "publishedAt": "",
    "duration": "PT1H53M35S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/w5PLcjia-XA.jpg"
  },
  {
    "id": "81NgwBkAwHM",
    "videoId": "81NgwBkAwHM",
    "playlistId": "PLFm3_OhqZyNbiYz2jhVR04GSMKCtZ3mqN",
    "showTitle": "برنامج اف ام ليغ - الموسم 15",
    "title": "حلقة",
    "publishedAt": "",
    "duration": "PT0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/81NgwBkAwHM.jpg"
  },
  {
    "id": "6Zhx3BdYLVA",
    "videoId": "6Zhx3BdYLVA",
    "playlistId": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
    "showTitle": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
    "title": "صوت عربية - ايا معشر العشاق 🎸 - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT6M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/6Zhx3BdYLVA.jpg"
  },
  {
    "id": "NCq89owxj-0",
    "videoId": "NCq89owxj-0",
    "playlistId": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
    "showTitle": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
    "title": "مقام منعوك عني ثم صوت يا من عليه التوكل والخلف 🎸 - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT8M59S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/NCq89owxj-0.jpg"
  },
  {
    "id": "l-l8KmRureo",
    "videoId": "l-l8KmRureo",
    "playlistId": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
    "showTitle": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
    "title": "صوت صبا نجد 🎸 - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT7M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/l-l8KmRureo.jpg"
  },
  {
    "id": "QdFCxB7LW8s",
    "videoId": "QdFCxB7LW8s",
    "playlistId": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
    "showTitle": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
    "title": "ضوت يحيى عمر قال في البندر 🎸 - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT6M46S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/QdFCxB7LW8s.jpg"
  },
  {
    "id": "qOM4aVnFNtQ",
    "videoId": "qOM4aVnFNtQ",
    "playlistId": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
    "showTitle": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
    "title": "صوت اليافعي قال كيف الحال 🎸 - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT8M6S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/qOM4aVnFNtQ.jpg"
  },
  {
    "id": "05f8OOzuzMg",
    "videoId": "05f8OOzuzMg",
    "playlistId": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
    "showTitle": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
    "title": "صوت بوعلي قال كيف القلب - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT8M2S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/05f8OOzuzMg.jpg"
  },
  {
    "id": "B-N2hxeqC_c",
    "videoId": "B-N2hxeqC_c",
    "playlistId": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
    "showTitle": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
    "title": "صوت جزيل العطا - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT6M15S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/B-N2hxeqC_c.jpg"
  },
  {
    "id": "Ue1d9f6r6aM",
    "videoId": "Ue1d9f6r6aM",
    "playlistId": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
    "showTitle": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
    "title": "صوت وبروحي من الغيد 🎸 - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT6M2S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Ue1d9f6r6aM.jpg"
  },
  {
    "id": "ErVJlCogT3A",
    "videoId": "ErVJlCogT3A",
    "playlistId": "PLFm3_OhqZyNaUQmkPvWc3V5sZujzQL6RL",
    "showTitle": "🎸 جلسة فن الصوت للمطرب عبدالرحمن عوض",
    "title": "صوت مروبع - عظيم الشان 🎸 - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT4M24S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ErVJlCogT3A.jpg"
  },
  {
    "id": "wHLimbDROxQ",
    "videoId": "wHLimbDROxQ",
    "playlistId": "PLFm3_OhqZyNaY6erMT1EP28_HeA30znAg",
    "showTitle": "عبادات منسية",
    "title": "حلقة",
    "publishedAt": "",
    "duration": "PT0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/wHLimbDROxQ.jpg"
  },
  {
    "id": "c-PKC16d34s",
    "videoId": "c-PKC16d34s",
    "playlistId": "PLFm3_OhqZyNaY6erMT1EP28_HeA30znAg",
    "showTitle": "عبادات منسية",
    "title": "عبادات منسية - الحلقة 03",
    "publishedAt": "",
    "duration": "PT10M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/c-PKC16d34s.jpg"
  },
  {
    "id": "OZgzRBHSYKY",
    "videoId": "OZgzRBHSYKY",
    "playlistId": "PLFm3_OhqZyNaY6erMT1EP28_HeA30znAg",
    "showTitle": "عبادات منسية",
    "title": "عبادات منسية - الحلقة 15",
    "publishedAt": "",
    "duration": "PT9M30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/OZgzRBHSYKY.jpg"
  },
  {
    "id": "-41cRCFAxkk",
    "videoId": "-41cRCFAxkk",
    "playlistId": "PLFm3_OhqZyNaY6erMT1EP28_HeA30znAg",
    "showTitle": "عبادات منسية",
    "title": "عبادات منسية   الحلقة 05",
    "publishedAt": "",
    "duration": "PT10M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/-41cRCFAxkk.jpg"
  },
  {
    "id": "zd8pOKyq8A8",
    "videoId": "zd8pOKyq8A8",
    "playlistId": "PLFm3_OhqZyNaY6erMT1EP28_HeA30znAg",
    "showTitle": "عبادات منسية",
    "title": "عبادات منسية   الحلقة 04",
    "publishedAt": "",
    "duration": "PT9M24S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/zd8pOKyq8A8.jpg"
  },
  {
    "id": "Ddu1OTRnRBo",
    "videoId": "Ddu1OTRnRBo",
    "playlistId": "PLFm3_OhqZyNaY6erMT1EP28_HeA30znAg",
    "showTitle": "عبادات منسية",
    "title": "عبادات منسية   الحلقة 02",
    "publishedAt": "",
    "duration": "PT9M23S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Ddu1OTRnRBo.jpg"
  },
  {
    "id": "vGZ8mwkpePU",
    "videoId": "vGZ8mwkpePU",
    "playlistId": "PLFm3_OhqZyNaY6erMT1EP28_HeA30znAg",
    "showTitle": "عبادات منسية",
    "title": "عبادات منسية   الحلقة 01",
    "publishedAt": "",
    "duration": "PT9M19S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/vGZ8mwkpePU.jpg"
  },
  {
    "id": "ewqvgXEyp1k",
    "videoId": "ewqvgXEyp1k",
    "playlistId": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
    "showTitle": "دلالات",
    "title": "دلالات - حلقة 15 - الــمغامــرة",
    "publishedAt": "",
    "duration": "PT6M18S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ewqvgXEyp1k.jpg"
  },
  {
    "id": "-WJoAD5nqYY",
    "videoId": "-WJoAD5nqYY",
    "playlistId": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
    "showTitle": "دلالات",
    "title": "دلالات - حلقة 14 - الانـطـباع",
    "publishedAt": "",
    "duration": "PT8M45S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/-WJoAD5nqYY.jpg"
  },
  {
    "id": "CBVh8OHOS4Q",
    "videoId": "CBVh8OHOS4Q",
    "playlistId": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
    "showTitle": "دلالات",
    "title": "دلالات - حلقة 18 - ســرعة البـديهة",
    "publishedAt": "",
    "duration": "PT7M3S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/CBVh8OHOS4Q.jpg"
  },
  {
    "id": "Tc7irroabuM",
    "videoId": "Tc7irroabuM",
    "playlistId": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
    "showTitle": "دلالات",
    "title": "دلالات - حلقة 11 - الابتسامة",
    "publishedAt": "",
    "duration": "PT6M6S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Tc7irroabuM.jpg"
  },
  {
    "id": "c-b-xr0kgTE",
    "videoId": "c-b-xr0kgTE",
    "playlistId": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
    "showTitle": "دلالات",
    "title": "دلالات - حلقة 16 - الـطاقة السلبية والايجابية",
    "publishedAt": "",
    "duration": "PT7M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/c-b-xr0kgTE.jpg"
  },
  {
    "id": "IVnRJ8z3HoE",
    "videoId": "IVnRJ8z3HoE",
    "playlistId": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
    "showTitle": "دلالات",
    "title": "دلالات - حلقة 17 - الــقــوة",
    "publishedAt": "",
    "duration": "PT6M29S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/IVnRJ8z3HoE.jpg"
  },
  {
    "id": "JJkAfdjxj9s",
    "videoId": "JJkAfdjxj9s",
    "playlistId": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
    "showTitle": "دلالات",
    "title": "دلالات - حلقة 10 - الـكآبــة",
    "publishedAt": "",
    "duration": "PT7M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/JJkAfdjxj9s.jpg"
  },
  {
    "id": "Vx10RxrdsxE",
    "videoId": "Vx10RxrdsxE",
    "playlistId": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
    "showTitle": "دلالات",
    "title": "دلالات - حلقة 9 - الــتواضع",
    "publishedAt": "",
    "duration": "PT5M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Vx10RxrdsxE.jpg"
  },
  {
    "id": "tqdpR6HY8n4",
    "videoId": "tqdpR6HY8n4",
    "playlistId": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
    "showTitle": "دلالات",
    "title": "دلالات - حلقة 8 - الـغـضب",
    "publishedAt": "",
    "duration": "PT6M27S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/tqdpR6HY8n4.jpg"
  },
  {
    "id": "J2EJHf7lBGw",
    "videoId": "J2EJHf7lBGw",
    "playlistId": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
    "showTitle": "دلالات",
    "title": "دلالات - حلقة 5 - الجــرأة",
    "publishedAt": "",
    "duration": "PT7M53S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/J2EJHf7lBGw.jpg"
  },
  {
    "id": "nMDTaOj10Wk",
    "videoId": "nMDTaOj10Wk",
    "playlistId": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
    "showTitle": "دلالات",
    "title": "دلالات - حلقة 4 - الجمال",
    "publishedAt": "",
    "duration": "PT6M42S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/nMDTaOj10Wk.jpg"
  },
  {
    "id": "Az5u5nNNcw0",
    "videoId": "Az5u5nNNcw0",
    "playlistId": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
    "showTitle": "دلالات",
    "title": "دلالات - حلقة 3 - التسامح",
    "publishedAt": "",
    "duration": "PT6M11S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Az5u5nNNcw0.jpg"
  },
  {
    "id": "ukpnjW1zJOA",
    "videoId": "ukpnjW1zJOA",
    "playlistId": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
    "showTitle": "دلالات",
    "title": "دلالات - حلقة 2 - المجازفة",
    "publishedAt": "",
    "duration": "PT6M4S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ukpnjW1zJOA.jpg"
  },
  {
    "id": "wCDBpyQz0hw",
    "videoId": "wCDBpyQz0hw",
    "playlistId": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
    "showTitle": "دلالات",
    "title": "دلالات - حلقة 22 - الـســعادة",
    "publishedAt": "",
    "duration": "PT7M27S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/wCDBpyQz0hw.jpg"
  },
  {
    "id": "yVIaxEz9DWY",
    "videoId": "yVIaxEz9DWY",
    "playlistId": "PLFm3_OhqZyNY1Pz-9zoNm658REoT1dFSc",
    "showTitle": "دلالات",
    "title": "دلالات - حلقة 1 - الكرم",
    "publishedAt": "",
    "duration": "PT5M10S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/yVIaxEz9DWY.jpg"
  },
  {
    "id": "2GQETVvMeC0",
    "videoId": "2GQETVvMeC0",
    "playlistId": "PLFm3_OhqZyNYov2q_5DfV-aIvFLx4rGu4",
    "showTitle": "لقاءات - برنامج ريفرش",
    "title": "لقاء الاستاذة رونق محسن (مستشارة مظهر ومحللة الوان) - برنامج ريفرش",
    "publishedAt": "",
    "duration": "PT10M15S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/2GQETVvMeC0.jpg"
  },
  {
    "id": "9zQ03YiPegU",
    "videoId": "9zQ03YiPegU",
    "playlistId": "PLFm3_OhqZyNYov2q_5DfV-aIvFLx4rGu4",
    "showTitle": "لقاءات - برنامج ريفرش",
    "title": "لقاء مع الاستاذ احمد خليل (اخصائي نفسي)",
    "publishedAt": "",
    "duration": "PT13M6S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/9zQ03YiPegU.jpg"
  },
  {
    "id": "HoTY5xxrg9E",
    "videoId": "HoTY5xxrg9E",
    "playlistId": "PLFm3_OhqZyNYov2q_5DfV-aIvFLx4rGu4",
    "showTitle": "لقاءات - برنامج ريفرش",
    "title": "لقاء مع الشيخة عايشة آل خليفة (صاحبة مركز تجميلي وسبا) - برنامج ريفرش",
    "publishedAt": "",
    "duration": "PT26M17S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/HoTY5xxrg9E.jpg"
  },
  {
    "id": "l3AMCiSY5FM",
    "videoId": "l3AMCiSY5FM",
    "playlistId": "PLFm3_OhqZyNYov2q_5DfV-aIvFLx4rGu4",
    "showTitle": "لقاءات - برنامج ريفرش",
    "title": "لقاء الاستاذة رونق محسن ( مستشارة مظهر ومحللة الوان )",
    "publishedAt": "",
    "duration": "PT21M16S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/l3AMCiSY5FM.jpg"
  },
  {
    "id": "gY8iCVtubNA",
    "videoId": "gY8iCVtubNA",
    "playlistId": "PLFm3_OhqZyNYov2q_5DfV-aIvFLx4rGu4",
    "showTitle": "لقاءات - برنامج ريفرش",
    "title": "لقاء الاستاذة دانة القاضي ( مدربة في برامج الصحة المستدامة ) - برنامج ريفرش",
    "publishedAt": "",
    "duration": "PT19M34S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/gY8iCVtubNA.jpg"
  },
  {
    "id": "3LJ-0eZYY3g",
    "videoId": "3LJ-0eZYY3g",
    "playlistId": "PLFm3_OhqZyNYov2q_5DfV-aIvFLx4rGu4",
    "showTitle": "لقاءات - برنامج ريفرش",
    "title": "حلقة",
    "publishedAt": "",
    "duration": "PT0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/3LJ-0eZYY3g.jpg"
  },
  {
    "id": "6EOVrf08QAY",
    "videoId": "6EOVrf08QAY",
    "playlistId": "PLFm3_OhqZyNYov2q_5DfV-aIvFLx4rGu4",
    "showTitle": "لقاءات - برنامج ريفرش",
    "title": "لقاء الاستاذة فاتن فيصل ( مدربة لياقة بدنية ) - برنامج ريفرش",
    "publishedAt": "",
    "duration": "PT20M51S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/6EOVrf08QAY.jpg"
  },
  {
    "id": "mJFtDZXtcfQ",
    "videoId": "mJFtDZXtcfQ",
    "playlistId": "PLFm3_OhqZyNYov2q_5DfV-aIvFLx4rGu4",
    "showTitle": "لقاءات - برنامج ريفرش",
    "title": "لقاء الكوتش مي القاضي - برنامج ريفرش",
    "publishedAt": "",
    "duration": "PT15M37S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/mJFtDZXtcfQ.jpg"
  },
  {
    "id": "VtMbSJS-OzU",
    "videoId": "VtMbSJS-OzU",
    "playlistId": "PLFm3_OhqZyNYov2q_5DfV-aIvFLx4rGu4",
    "showTitle": "لقاءات - برنامج ريفرش",
    "title": "لقاء المصورة نورة زكي - برنامج ريفرش",
    "publishedAt": "",
    "duration": "PT16M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/VtMbSJS-OzU.jpg"
  },
  {
    "id": "QBqqqSeMXCY",
    "videoId": "QBqqqSeMXCY",
    "playlistId": "PLFm3_OhqZyNYov2q_5DfV-aIvFLx4rGu4",
    "showTitle": "لقاءات - برنامج ريفرش",
    "title": "لقاء الاستاذة مارلين سهلب ( خبيرة اتيكيت )",
    "publishedAt": "",
    "duration": "PT25M9S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/QBqqqSeMXCY.jpg"
  },
  {
    "id": "y0Fd4A34rh4",
    "videoId": "y0Fd4A34rh4",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الإيجابي - ح ١ خلق عادات وسلوكيات ايجابية",
    "publishedAt": "",
    "duration": "PT7M13S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/y0Fd4A34rh4.jpg"
  },
  {
    "id": "KnEFfYk1II4",
    "videoId": "KnEFfYk1II4",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الإيجابي - ح ٢ خلق الافكار الإيجابية",
    "publishedAt": "",
    "duration": "PT6M21S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/KnEFfYk1II4.jpg"
  },
  {
    "id": "W1McBrVFvZ8",
    "videoId": "W1McBrVFvZ8",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الايجابي - ح ٣ - خلق المشاعر الإيجابية",
    "publishedAt": "",
    "duration": "PT5M43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/W1McBrVFvZ8.jpg"
  },
  {
    "id": "tFHskKE1slo",
    "videoId": "tFHskKE1slo",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الايجابي - ح ٤ - خلق طاقة إيجابية",
    "publishedAt": "",
    "duration": "PT6M56S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/tFHskKE1slo.jpg"
  },
  {
    "id": "iP6qqlz4oz0",
    "videoId": "iP6qqlz4oz0",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الايجابي - ح ٥ - كيف تبادر بالعطاء في الشهر الفضيل",
    "publishedAt": "",
    "duration": "PT5M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/iP6qqlz4oz0.jpg"
  },
  {
    "id": "JuRxZS51fl0",
    "videoId": "JuRxZS51fl0",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الايجابي - ح ٦ - كيف تستقبل الخير في الشهر الفضيل",
    "publishedAt": "",
    "duration": "PT6M45S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/JuRxZS51fl0.jpg"
  },
  {
    "id": "8Yv8ddMlxLQ",
    "videoId": "8Yv8ddMlxLQ",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الايجابي - ح ٧ - كيف تستمتع في الشهر الفضيل",
    "publishedAt": "",
    "duration": "PT7M50S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8Yv8ddMlxLQ.jpg"
  },
  {
    "id": "SXekZT7-y_I",
    "videoId": "SXekZT7-y_I",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الايجابي - ح ٨ - عمل بسيط أفضل من لا شي",
    "publishedAt": "",
    "duration": "PT7M15S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/SXekZT7-y_I.jpg"
  },
  {
    "id": "bcYI-To1TR0",
    "videoId": "bcYI-To1TR0",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الايجابي - ح ٩ - احدث تقدم في حياتك",
    "publishedAt": "",
    "duration": "PT8M31S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/bcYI-To1TR0.jpg"
  },
  {
    "id": "apgVEn_bHxY",
    "videoId": "apgVEn_bHxY",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الإيجابي - ح ١٠ طور خطتك",
    "publishedAt": "",
    "duration": "PT6M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/apgVEn_bHxY.jpg"
  },
  {
    "id": "4hXWpXO-Mxs",
    "videoId": "4hXWpXO-Mxs",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الإيجابي - ح ١١ كن افضل من أمس",
    "publishedAt": "",
    "duration": "PT4M13S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/4hXWpXO-Mxs.jpg"
  },
  {
    "id": "VZqXnvEYI2o",
    "videoId": "VZqXnvEYI2o",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الإيجابي - ح ١٢ - تعلم شيء جديد",
    "publishedAt": "",
    "duration": "PT4M41S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/VZqXnvEYI2o.jpg"
  },
  {
    "id": "m4HZX-qrAHE",
    "videoId": "m4HZX-qrAHE",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الإيجابي - ح ١٣ - تقبل المختلفين",
    "publishedAt": "",
    "duration": "PT5M49S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/m4HZX-qrAHE.jpg"
  },
  {
    "id": "gUU_3KXUaNA",
    "videoId": "gUU_3KXUaNA",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الإيجابي - ح ١٤ - تعلم الرضا",
    "publishedAt": "",
    "duration": "PT7M26S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/gUU_3KXUaNA.jpg"
  },
  {
    "id": "-zpPBbiAZGI",
    "videoId": "-zpPBbiAZGI",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الإيجابي - ح ١٥ - أسعى لفهم شيء تعتقد انه صعب",
    "publishedAt": "",
    "duration": "PT6M29S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/-zpPBbiAZGI.jpg"
  },
  {
    "id": "co5oE-1knLY",
    "videoId": "co5oE-1knLY",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الإيجابي - ح ١٦ - ابحث عن أحدث المعلومات المتعلقة في مجالك",
    "publishedAt": "",
    "duration": "PT5M11S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/co5oE-1knLY.jpg"
  },
  {
    "id": "8cbygLaC-Yc",
    "videoId": "8cbygLaC-Yc",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الإيجابي - ح ١٧ - كن مبادر",
    "publishedAt": "",
    "duration": "PT5M5S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8cbygLaC-Yc.jpg"
  },
  {
    "id": "EIQlMVySBeE",
    "videoId": "EIQlMVySBeE",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الايجابي - ح ١٨ - اخلق شيء جديد",
    "publishedAt": "",
    "duration": "PT5M6S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/EIQlMVySBeE.jpg"
  },
  {
    "id": "x3bE2imgM7A",
    "videoId": "x3bE2imgM7A",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الايجابي - ح ٢٠ - عزز انجازاتك",
    "publishedAt": "",
    "duration": "PT4M7S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/x3bE2imgM7A.jpg"
  },
  {
    "id": "BICcJjydGoU",
    "videoId": "BICcJjydGoU",
    "playlistId": "PLFm3_OhqZyNZLs-OnLwnkR0NTt-tSvj4e",
    "showTitle": "الصائم الإيجابي",
    "title": "الصائم الإيجابي - ح ١٩ - عش الحياة التي تريد",
    "publishedAt": "",
    "duration": "PT4M57S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/BICcJjydGoU.jpg"
  },
  {
    "id": "aYgI5jZLw4Y",
    "videoId": "aYgI5jZLw4Y",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - الأول من رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H30M26S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/aYgI5jZLw4Y.jpg"
  },
  {
    "id": "ifaEteeHbMk",
    "videoId": "ifaEteeHbMk",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - ٢ رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H25M11S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ifaEteeHbMk.jpg"
  },
  {
    "id": "iSxAPIe7gjA",
    "videoId": "iSxAPIe7gjA",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - ٣ رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H25M6S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/iSxAPIe7gjA.jpg"
  },
  {
    "id": "npP9wlsBwSo",
    "videoId": "npP9wlsBwSo",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - ٤ رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H26M41S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/npP9wlsBwSo.jpg"
  },
  {
    "id": "Uo07nG8QTr8",
    "videoId": "Uo07nG8QTr8",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - ٦ رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H29M27S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Uo07nG8QTr8.jpg"
  },
  {
    "id": "9AKkXtNUnbU",
    "videoId": "9AKkXtNUnbU",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - ٧ رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H27M57S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/9AKkXtNUnbU.jpg"
  },
  {
    "id": "k064o7U7WWg",
    "videoId": "k064o7U7WWg",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - ٨ رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H27M53S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/k064o7U7WWg.jpg"
  },
  {
    "id": "8WOfa2U-4ls",
    "videoId": "8WOfa2U-4ls",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - ٩ رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H29M31S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8WOfa2U-4ls.jpg"
  },
  {
    "id": "sxiUbz3Tgfo",
    "videoId": "sxiUbz3Tgfo",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - ١٠ رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H28M26S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/sxiUbz3Tgfo.jpg"
  },
  {
    "id": "QzVVdeXMC7I",
    "videoId": "QzVVdeXMC7I",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - 11  رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H27M29S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/QzVVdeXMC7I.jpg"
  },
  {
    "id": "XlRj7KNume4",
    "videoId": "XlRj7KNume4",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - 13 رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H26M57S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/XlRj7KNume4.jpg"
  },
  {
    "id": "aQ5jGf-J_Nw",
    "videoId": "aQ5jGf-J_Nw",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - 14 رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H28M23S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/aQ5jGf-J_Nw.jpg"
  },
  {
    "id": "S7BtCULFR2k",
    "videoId": "S7BtCULFR2k",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - ١٥ رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H26M40S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/S7BtCULFR2k.jpg"
  },
  {
    "id": "dkmZiRrOZq4",
    "videoId": "dkmZiRrOZq4",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - 16 رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H26M9S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/dkmZiRrOZq4.jpg"
  },
  {
    "id": "eihAt0X7hHA",
    "videoId": "eihAt0X7hHA",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - 17 رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H27M3S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/eihAt0X7hHA.jpg"
  },
  {
    "id": "KO7oXYzqcHA",
    "videoId": "KO7oXYzqcHA",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - 18 رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H25M10S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/KO7oXYzqcHA.jpg"
  },
  {
    "id": "wOdbE8TGq-w",
    "videoId": "wOdbE8TGq-w",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - 21 رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H25M38S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/wOdbE8TGq-w.jpg"
  },
  {
    "id": "JWuTst_BdXU",
    "videoId": "JWuTst_BdXU",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - 24 رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H25M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/JWuTst_BdXU.jpg"
  },
  {
    "id": "sX9OgBbwVms",
    "videoId": "sX9OgBbwVms",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - 25 رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H26M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/sX9OgBbwVms.jpg"
  },
  {
    "id": "syBTujJSSC4",
    "videoId": "syBTujJSSC4",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - 27 رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H26M42S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/syBTujJSSC4.jpg"
  },
  {
    "id": "QL3yVFNlgAs",
    "videoId": "QL3yVFNlgAs",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - 28 رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H27M47S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/QL3yVFNlgAs.jpg"
  },
  {
    "id": "iGk-RlV8ZHU",
    "videoId": "iGk-RlV8ZHU",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - 1 رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H31M1S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/iGk-RlV8ZHU.jpg"
  },
  {
    "id": "P_ZuLkQeyE8",
    "videoId": "P_ZuLkQeyE8",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - 2 رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H25M45S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/P_ZuLkQeyE8.jpg"
  },
  {
    "id": "T1zGRWSevCA",
    "videoId": "T1zGRWSevCA",
    "playlistId": "PLFm3_OhqZyNYzwo693xU74ooAEHSz24Nu",
    "showTitle": "مسابقات اللاتري 🌙",
    "title": "مسابقات اللاتري - 3 رمضان 🌙",
    "publishedAt": "",
    "duration": "PT1H25M44S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/T1zGRWSevCA.jpg"
  },
  {
    "id": "eVLmPViJE8w",
    "videoId": "eVLmPViJE8w",
    "playlistId": "PLFm3_OhqZyNbjJTaW2BZYImZz0lsVazvG",
    "showTitle": "برنامج الدوري",
    "title": "برنامج  \" الدوري \" ⚽️  - بث مباشر 📡",
    "publishedAt": "",
    "duration": "PT1H35M19S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/eVLmPViJE8w.jpg"
  },
  {
    "id": "gKHIqxusg9I",
    "videoId": "gKHIqxusg9I",
    "playlistId": "PLFm3_OhqZyNbjJTaW2BZYImZz0lsVazvG",
    "showTitle": "برنامج الدوري",
    "title": "برنامج \"الدوري\" 🌙 شهر رمضان",
    "publishedAt": "",
    "duration": "PT1H17M51S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/gKHIqxusg9I.jpg"
  },
  {
    "id": "9qAtbWzwlIU",
    "videoId": "9qAtbWzwlIU",
    "playlistId": "PLFm3_OhqZyNbjJTaW2BZYImZz0lsVazvG",
    "showTitle": "برنامج الدوري",
    "title": "برنامج \"الدوري\" 🌙 شهر رمضان",
    "publishedAt": "",
    "duration": "PT1H25M8S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/9qAtbWzwlIU.jpg"
  },
  {
    "id": "RW8SeOMrIqw",
    "videoId": "RW8SeOMrIqw",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "🎙️ برنامج #اف_ام_ليغ - الحلقة الاولى الموسم 14",
    "publishedAt": "",
    "duration": "PT1H38M46S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/RW8SeOMrIqw.jpg"
  },
  {
    "id": "-QrwsOBqjdg",
    "videoId": "-QrwsOBqjdg",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "🎙️ برنامج #اف_ام_ليغ - الحلقة  الثانية الموسم 14",
    "publishedAt": "",
    "duration": "PT1H45M4S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/-QrwsOBqjdg.jpg"
  },
  {
    "id": "-TmF-ki0hL4",
    "videoId": "-TmF-ki0hL4",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "🎙️ برنامج #اف_ام_ليغ - حلقة 22-09-2023",
    "publishedAt": "",
    "duration": "PT1H49M22S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/-TmF-ki0hL4.jpg"
  },
  {
    "id": "YrH3zJD4zWQ",
    "videoId": "YrH3zJD4zWQ",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "🎙️ برنامج #اف_ام_ليغ - حلقة 13-10-2023",
    "publishedAt": "",
    "duration": "PT1H45M49S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/YrH3zJD4zWQ.jpg"
  },
  {
    "id": "627lqRNWOz4",
    "videoId": "627lqRNWOz4",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H58M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/627lqRNWOz4.jpg"
  },
  {
    "id": "sLOLPUO56Ks",
    "videoId": "sLOLPUO56Ks",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT5M41S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/sLOLPUO56Ks.jpg"
  },
  {
    "id": "YzoAVyqbQGQ",
    "videoId": "YzoAVyqbQGQ",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT2H0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/YzoAVyqbQGQ.jpg"
  },
  {
    "id": "9MajFA_R16s",
    "videoId": "9MajFA_R16s",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H55M29S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/9MajFA_R16s.jpg"
  },
  {
    "id": "_mh-oSeidLY",
    "videoId": "_mh-oSeidLY",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H59M15S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/_mh-oSeidLY.jpg"
  },
  {
    "id": "p3aNNlRdNv4",
    "videoId": "p3aNNlRdNv4",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H48M53S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/p3aNNlRdNv4.jpg"
  },
  {
    "id": "mhfV78EnZjk",
    "videoId": "mhfV78EnZjk",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H57M9S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/mhfV78EnZjk.jpg"
  },
  {
    "id": "YaGXxj-KBWQ",
    "videoId": "YaGXxj-KBWQ",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H49M53S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/YaGXxj-KBWQ.jpg"
  },
  {
    "id": "81NuTuVlmDQ",
    "videoId": "81NuTuVlmDQ",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H59M25S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/81NuTuVlmDQ.jpg"
  },
  {
    "id": "xkilI6mR8Kc",
    "videoId": "xkilI6mR8Kc",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H56M4S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/xkilI6mR8Kc.jpg"
  },
  {
    "id": "hDMv0MzMvDU",
    "videoId": "hDMv0MzMvDU",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H59M13S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/hDMv0MzMvDU.jpg"
  },
  {
    "id": "Iz-5Mt5oAGw",
    "videoId": "Iz-5Mt5oAGw",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H56M44S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Iz-5Mt5oAGw.jpg"
  },
  {
    "id": "ucl-EB_Nr2M",
    "videoId": "ucl-EB_Nr2M",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "رمضان كريم  ☪️ ⚽️ برنامج اف ام ليغ - LIVE",
    "publishedAt": "",
    "duration": "PT2H1M10S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ucl-EB_Nr2M.jpg"
  },
  {
    "id": "RvzaawMzuLU",
    "videoId": "RvzaawMzuLU",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "حلقة",
    "publishedAt": "",
    "duration": "PT0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/RvzaawMzuLU.jpg"
  },
  {
    "id": "hi1RbjP7GRU",
    "videoId": "hi1RbjP7GRU",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "رمضان كريم  ☪️ ⚽️ برنامج اف ام ليغ - LIVE",
    "publishedAt": "",
    "duration": "PT1H53M44S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/hi1RbjP7GRU.jpg"
  },
  {
    "id": "FOFFVkschAY",
    "videoId": "FOFFVkschAY",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "رمضان كريم  ☪️ ⚽️ برنامج اف ام ليغ - LIVE",
    "publishedAt": "",
    "duration": "PT1H59M18S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/FOFFVkschAY.jpg"
  },
  {
    "id": "sFT0caDpfVI",
    "videoId": "sFT0caDpfVI",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "⚽️ برنامج اف ام ليغ - LIVE",
    "publishedAt": "",
    "duration": "PT1H48M38S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/sFT0caDpfVI.jpg"
  },
  {
    "id": "Jf1JdGMRUpE",
    "videoId": "Jf1JdGMRUpE",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "⚽️ برنامج اف ام ليغ - LIVE",
    "publishedAt": "",
    "duration": "PT1H54M40S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Jf1JdGMRUpE.jpg"
  },
  {
    "id": "8tW4SojdSjM",
    "videoId": "8tW4SojdSjM",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "⚽️ برنامج اف ام ليغ - LIVE",
    "publishedAt": "",
    "duration": "PT1H45M14S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8tW4SojdSjM.jpg"
  },
  {
    "id": "OEBSuwMRvy0",
    "videoId": "OEBSuwMRvy0",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "⚽️ برنامج اف ام ليغ - LIVE",
    "publishedAt": "",
    "duration": "PT1H54M18S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/OEBSuwMRvy0.jpg"
  },
  {
    "id": "k_EoB4xbXUs",
    "videoId": "k_EoB4xbXUs",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "⚽️ برنامج اف ام ليغ - LIVE",
    "publishedAt": "",
    "duration": "PT1H52M16S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/k_EoB4xbXUs.jpg"
  },
  {
    "id": "7Jc0McyNgUQ",
    "videoId": "7Jc0McyNgUQ",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "⚽️ برنامج اف ام ليغ - الحلقة الأخيرة - الموسم 14",
    "publishedAt": "",
    "duration": "PT1H17M43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7Jc0McyNgUQ.jpg"
  },
  {
    "id": "hF7qPZYQI6g",
    "videoId": "hF7qPZYQI6g",
    "playlistId": "PLFm3_OhqZyNYatMtuGlThtyMg9s9tfsPm",
    "showTitle": "🎙️ برنامج #اف_ام_ليغ FM League",
    "title": "⚽️ برنامج اف ام ليغ - LIVE",
    "publishedAt": "",
    "duration": "PT34S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/hF7qPZYQI6g.jpg"
  },
  {
    "id": "Zhq9zZDij8Y",
    "videoId": "Zhq9zZDij8Y",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "شباب الميلس - ح 15",
    "publishedAt": "",
    "duration": "PT0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Zhq9zZDij8Y.jpg"
  },
  {
    "id": "UjFRqYGaG6w",
    "videoId": "UjFRqYGaG6w",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "شباب الميلس - ح 14",
    "publishedAt": "",
    "duration": "PT52M18S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/UjFRqYGaG6w.jpg"
  },
  {
    "id": "3so0z028sVY",
    "videoId": "3so0z028sVY",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "شباب الميلس - ح 11",
    "publishedAt": "",
    "duration": "PT52M38S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/3so0z028sVY.jpg"
  },
  {
    "id": "w5TuS3fEoA4",
    "videoId": "w5TuS3fEoA4",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "شباب الميلس - ح 12",
    "publishedAt": "",
    "duration": "PT48M38S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/w5TuS3fEoA4.jpg"
  },
  {
    "id": "gPUAqvTnJss",
    "videoId": "gPUAqvTnJss",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج اف ام ليغ - ح 3",
    "publishedAt": "",
    "duration": "PT1H53M46S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/gPUAqvTnJss.jpg"
  },
  {
    "id": "uh64UGc8Vws",
    "videoId": "uh64UGc8Vws",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "شباب الميلس - ح 13",
    "publishedAt": "",
    "duration": "PT54M10S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/uh64UGc8Vws.jpg"
  },
  {
    "id": "BxLacNq6_Ds",
    "videoId": "BxLacNq6_Ds",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر  Zone 2",
    "publishedAt": "",
    "duration": "PT55M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/BxLacNq6_Ds.jpg"
  },
  {
    "id": "tm54BJG7_YE",
    "videoId": "tm54BJG7_YE",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H2M9S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/tm54BJG7_YE.jpg"
  },
  {
    "id": "ZyGjdSEMXm8",
    "videoId": "ZyGjdSEMXm8",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "خارج المستطيل ⚽️ الأخضر - ح 3",
    "publishedAt": "",
    "duration": "PT1H24M30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ZyGjdSEMXm8.jpg"
  },
  {
    "id": "53HVXQsEJ3w",
    "videoId": "53HVXQsEJ3w",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "شباب الميلس - ح 10",
    "publishedAt": "",
    "duration": "PT48M12S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/53HVXQsEJ3w.jpg"
  },
  {
    "id": "bFF1efeUqYE",
    "videoId": "bFF1efeUqYE",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "شباب الميلس - ح 9",
    "publishedAt": "",
    "duration": "PT50M7S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/bFF1efeUqYE.jpg"
  },
  {
    "id": "MXNG_Hrrnrg",
    "videoId": "MXNG_Hrrnrg",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "شباب الميلس - ح 3",
    "publishedAt": "",
    "duration": "PT38M59S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/MXNG_Hrrnrg.jpg"
  },
  {
    "id": "w6vkjgR0nis",
    "videoId": "w6vkjgR0nis",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "شباب الميلس - ح 8 مع الفنان حسن محمد",
    "publishedAt": "",
    "duration": "PT1H22M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/w6vkjgR0nis.jpg"
  },
  {
    "id": "ZN0kvmSjGmM",
    "videoId": "ZN0kvmSjGmM",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج اف ام ليغ - ح 2",
    "publishedAt": "",
    "duration": "PT1H51M49S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ZN0kvmSjGmM.jpg"
  },
  {
    "id": "9icw8X4ftwY",
    "videoId": "9icw8X4ftwY",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "شباب الميلس - ح 7",
    "publishedAt": "",
    "duration": "PT50M49S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/9icw8X4ftwY.jpg"
  },
  {
    "id": "RvsGdIAFLoU",
    "videoId": "RvsGdIAFLoU",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M58S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/RvsGdIAFLoU.jpg"
  },
  {
    "id": "kGnJHYcqqo4",
    "videoId": "kGnJHYcqqo4",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "شباب الميلس - ح 6",
    "publishedAt": "",
    "duration": "PT52M37S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/kGnJHYcqqo4.jpg"
  },
  {
    "id": "nq6FNdW63AQ",
    "videoId": "nq6FNdW63AQ",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر  Zone 2 - ٨ سبتمبر ٢٠٢٦",
    "publishedAt": "",
    "duration": "PT1H3M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/nq6FNdW63AQ.jpg"
  },
  {
    "id": "ljXrhhTzivQ",
    "videoId": "ljXrhhTzivQ",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "شباب الميلس - الأولى",
    "publishedAt": "",
    "duration": "PT52M35S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ljXrhhTzivQ.jpg"
  },
  {
    "id": "f7nec0Ltmkw",
    "videoId": "f7nec0Ltmkw",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H21M32S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/f7nec0Ltmkw.jpg"
  },
  {
    "id": "LCX7mIwrrsA",
    "videoId": "LCX7mIwrrsA",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "شباب الميلس - ح 5",
    "publishedAt": "",
    "duration": "PT49M55S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/LCX7mIwrrsA.jpg"
  },
  {
    "id": "VWiPUqdg2Ok",
    "videoId": "VWiPUqdg2Ok",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "شباب الميلس - ح 4",
    "publishedAt": "",
    "duration": "PT50M32S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/VWiPUqdg2Ok.jpg"
  },
  {
    "id": "bdnipADh87Q",
    "videoId": "bdnipADh87Q",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT59M56S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/bdnipADh87Q.jpg"
  },
  {
    "id": "tScghiLlP2A",
    "videoId": "tScghiLlP2A",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج اف ام ليغ - ح 1",
    "publishedAt": "",
    "duration": "PT1H45M7S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/tScghiLlP2A.jpg"
  },
  {
    "id": "ak1yGCZfPiI",
    "videoId": "ak1yGCZfPiI",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ Zone 2",
    "publishedAt": "",
    "duration": "PT59M41S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ak1yGCZfPiI.jpg"
  },
  {
    "id": "-P9It9MCOb4",
    "videoId": "-P9It9MCOb4",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT54M22S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/-P9It9MCOb4.jpg"
  },
  {
    "id": "L0TMA5YGr5E",
    "videoId": "L0TMA5YGr5E",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "أستوديو الشباب - مدينة الشباب 2030 - ح 22",
    "publishedAt": "",
    "duration": "PT1H11M6S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/L0TMA5YGr5E.jpg"
  },
  {
    "id": "u_yVY4PApXo",
    "videoId": "u_yVY4PApXo",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "أستوديو الشباب - مدينة الشباب 2030 - ح 20",
    "publishedAt": "",
    "duration": "PT1H6M6S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/u_yVY4PApXo.jpg"
  },
  {
    "id": "mMgj5EpfzPA",
    "videoId": "mMgj5EpfzPA",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "أستوديو الشباب - مدينة الشباب 2030 - ح 19",
    "publishedAt": "",
    "duration": "PT1H25M18S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/mMgj5EpfzPA.jpg"
  },
  {
    "id": "xW7vTIQ8M7A",
    "videoId": "xW7vTIQ8M7A",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M6S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/xW7vTIQ8M7A.jpg"
  },
  {
    "id": "NNBXa0aHTAM",
    "videoId": "NNBXa0aHTAM",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "أستوديو الشباب - مدينة الشباب 2030 - ح 18",
    "publishedAt": "",
    "duration": "PT1H16M22S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/NNBXa0aHTAM.jpg"
  },
  {
    "id": "yrRkw20uiXA",
    "videoId": "yrRkw20uiXA",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M32S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/yrRkw20uiXA.jpg"
  },
  {
    "id": "JLIJxObe1LQ",
    "videoId": "JLIJxObe1LQ",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "أستوديو الشباب - مدينة الشباب 2030 - ح 13",
    "publishedAt": "",
    "duration": "PT1H10M29S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/JLIJxObe1LQ.jpg"
  },
  {
    "id": "5Q3XPvIaUd0",
    "videoId": "5Q3XPvIaUd0",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5Q3XPvIaUd0.jpg"
  },
  {
    "id": "BuT42JWaOEM",
    "videoId": "BuT42JWaOEM",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "أستوديو الشباب - مدينة الشباب 2030 - ح 7",
    "publishedAt": "",
    "duration": "PT1H2M19S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/BuT42JWaOEM.jpg"
  },
  {
    "id": "VQI95pP4Ric",
    "videoId": "VQI95pP4Ric",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "أستوديو الشباب - مدينة الشباب 2030 - ح 8",
    "publishedAt": "",
    "duration": "PT1H1M46S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/VQI95pP4Ric.jpg"
  },
  {
    "id": "X-rubmskJDs",
    "videoId": "X-rubmskJDs",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "أستوديو الشباب - مدينة الشباب 2030 - ح 3",
    "publishedAt": "",
    "duration": "PT1H10M30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/X-rubmskJDs.jpg"
  },
  {
    "id": "As-W1Xj2BCU",
    "videoId": "As-W1Xj2BCU",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H2M42S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/As-W1Xj2BCU.jpg"
  },
  {
    "id": "OFG3GnAz11E",
    "videoId": "OFG3GnAz11E",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "أستوديو الشباب - مدينة الشباب 2030 - ح 2",
    "publishedAt": "",
    "duration": "PT1H8M21S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/OFG3GnAz11E.jpg"
  },
  {
    "id": "5qIHzaNoIdU",
    "videoId": "5qIHzaNoIdU",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H11S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5qIHzaNoIdU.jpg"
  },
  {
    "id": "7bo061Yy_fA",
    "videoId": "7bo061Yy_fA",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج 🏆 🎊 اف إم موندیال 40",
    "publishedAt": "",
    "duration": "PT1H18M53S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7bo061Yy_fA.jpg"
  },
  {
    "id": "utfgLosy7nM",
    "videoId": "utfgLosy7nM",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج 🏆 🎊 اف إم موندیال 39",
    "publishedAt": "",
    "duration": "PT1H19M14S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/utfgLosy7nM.jpg"
  },
  {
    "id": "YvLQlGaczmE",
    "videoId": "YvLQlGaczmE",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 38",
    "publishedAt": "",
    "duration": "PT1H19M44S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/YvLQlGaczmE.jpg"
  },
  {
    "id": "KU4Tz4AQBv8",
    "videoId": "KU4Tz4AQBv8",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 37",
    "publishedAt": "",
    "duration": "PT1H15M5S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/KU4Tz4AQBv8.jpg"
  },
  {
    "id": "1DShA1mXw_U",
    "videoId": "1DShA1mXw_U",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 36",
    "publishedAt": "",
    "duration": "PT1H18M54S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/1DShA1mXw_U.jpg"
  },
  {
    "id": "P393SSqZLOU",
    "videoId": "P393SSqZLOU",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 35",
    "publishedAt": "",
    "duration": "PT1H19M55S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/P393SSqZLOU.jpg"
  },
  {
    "id": "ZEQtPK3FPmE",
    "videoId": "ZEQtPK3FPmE",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 34",
    "publishedAt": "",
    "duration": "PT1H19M19S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ZEQtPK3FPmE.jpg"
  },
  {
    "id": "c8iKRb1dqBo",
    "videoId": "c8iKRb1dqBo",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H18S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/c8iKRb1dqBo.jpg"
  },
  {
    "id": "rbLbWfnZyM0",
    "videoId": "rbLbWfnZyM0",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 33",
    "publishedAt": "",
    "duration": "PT1H18M14S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/rbLbWfnZyM0.jpg"
  },
  {
    "id": "Ab711VvdFGU",
    "videoId": "Ab711VvdFGU",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 32",
    "publishedAt": "",
    "duration": "PT1H19M45S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Ab711VvdFGU.jpg"
  },
  {
    "id": "-AiRIG_WftA",
    "videoId": "-AiRIG_WftA",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 31",
    "publishedAt": "",
    "duration": "PT1H19M54S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/-AiRIG_WftA.jpg"
  },
  {
    "id": "qW1nXbjj8J4",
    "videoId": "qW1nXbjj8J4",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 30",
    "publishedAt": "",
    "duration": "PT1H18M24S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/qW1nXbjj8J4.jpg"
  },
  {
    "id": "gWZ3tS44UMA",
    "videoId": "gWZ3tS44UMA",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 29",
    "publishedAt": "",
    "duration": "PT1H6M53S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/gWZ3tS44UMA.jpg"
  },
  {
    "id": "hrpE5nJo41c",
    "videoId": "hrpE5nJo41c",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 27",
    "publishedAt": "",
    "duration": "PT1H18M36S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/hrpE5nJo41c.jpg"
  },
  {
    "id": "33dC3KjO1p4",
    "videoId": "33dC3KjO1p4",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT47M30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/33dC3KjO1p4.jpg"
  },
  {
    "id": "l_2WTxymz-M",
    "videoId": "l_2WTxymz-M",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 26",
    "publishedAt": "",
    "duration": "PT1H18M29S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/l_2WTxymz-M.jpg"
  },
  {
    "id": "qIAqpDZgx3w",
    "videoId": "qIAqpDZgx3w",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H5M27S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/qIAqpDZgx3w.jpg"
  },
  {
    "id": "IPWaDlNVdb0",
    "videoId": "IPWaDlNVdb0",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 25",
    "publishedAt": "",
    "duration": "PT1H14M58S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/IPWaDlNVdb0.jpg"
  },
  {
    "id": "ewv53daKUnc",
    "videoId": "ewv53daKUnc",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 24",
    "publishedAt": "",
    "duration": "PT1H19M14S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ewv53daKUnc.jpg"
  },
  {
    "id": "JCCpF8P0in8",
    "videoId": "JCCpF8P0in8",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 23",
    "publishedAt": "",
    "duration": "PT1H16M50S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/JCCpF8P0in8.jpg"
  },
  {
    "id": "502dCMmedo8",
    "videoId": "502dCMmedo8",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 22",
    "publishedAt": "",
    "duration": "PT1H18M57S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/502dCMmedo8.jpg"
  },
  {
    "id": "LenfDyUCsgo",
    "videoId": "LenfDyUCsgo",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 21",
    "publishedAt": "",
    "duration": "PT1H18M15S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/LenfDyUCsgo.jpg"
  },
  {
    "id": "wV0d73JHFrM",
    "videoId": "wV0d73JHFrM",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 20",
    "publishedAt": "",
    "duration": "PT1H18M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/wV0d73JHFrM.jpg"
  },
  {
    "id": "Tsy2HOGCivw",
    "videoId": "Tsy2HOGCivw",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT55M34S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Tsy2HOGCivw.jpg"
  },
  {
    "id": "dJIV-R_aFfo",
    "videoId": "dJIV-R_aFfo",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 19",
    "publishedAt": "",
    "duration": "PT1H17M40S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/dJIV-R_aFfo.jpg"
  },
  {
    "id": "Fxz7UbJE64Y",
    "videoId": "Fxz7UbJE64Y",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 18",
    "publishedAt": "",
    "duration": "PT1H18M22S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Fxz7UbJE64Y.jpg"
  },
  {
    "id": "lyTcXBTaOaQ",
    "videoId": "lyTcXBTaOaQ",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 17",
    "publishedAt": "",
    "duration": "PT1H19M54S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/lyTcXBTaOaQ.jpg"
  },
  {
    "id": "R9gJBCCs4HE",
    "videoId": "R9gJBCCs4HE",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 16",
    "publishedAt": "",
    "duration": "PT1H13M59S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/R9gJBCCs4HE.jpg"
  },
  {
    "id": "8mKU81C1o2c",
    "videoId": "8mKU81C1o2c",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 15",
    "publishedAt": "",
    "duration": "PT1H16M49S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8mKU81C1o2c.jpg"
  },
  {
    "id": "xoPRWfICRjg",
    "videoId": "xoPRWfICRjg",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 14",
    "publishedAt": "",
    "duration": "PT1H14M36S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/xoPRWfICRjg.jpg"
  },
  {
    "id": "STs990aMEvU",
    "videoId": "STs990aMEvU",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 13",
    "publishedAt": "",
    "duration": "PT1H17M43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/STs990aMEvU.jpg"
  },
  {
    "id": "9-DSi9l8cMk",
    "videoId": "9-DSi9l8cMk",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 12",
    "publishedAt": "",
    "duration": "PT1H18M5S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/9-DSi9l8cMk.jpg"
  },
  {
    "id": "T_61p9y2PIA",
    "videoId": "T_61p9y2PIA",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 11",
    "publishedAt": "",
    "duration": "PT1H18M32S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/T_61p9y2PIA.jpg"
  },
  {
    "id": "T_ywK4jPkeU",
    "videoId": "T_ywK4jPkeU",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 10",
    "publishedAt": "",
    "duration": "PT1H20M4S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/T_ywK4jPkeU.jpg"
  },
  {
    "id": "8gG896MZu7A",
    "videoId": "8gG896MZu7A",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆 اف ام مونديال 9",
    "publishedAt": "",
    "duration": "PT1H19M25S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8gG896MZu7A.jpg"
  },
  {
    "id": "yjr0q9iViJs",
    "videoId": "yjr0q9iViJs",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 8",
    "publishedAt": "",
    "duration": "PT1H18M34S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/yjr0q9iViJs.jpg"
  },
  {
    "id": "MjomamQeoNw",
    "videoId": "MjomamQeoNw",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 7",
    "publishedAt": "",
    "duration": "PT1H20M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/MjomamQeoNw.jpg"
  },
  {
    "id": "3EE2mixLI6s",
    "videoId": "3EE2mixLI6s",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 6",
    "publishedAt": "",
    "duration": "PT1H20M9S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/3EE2mixLI6s.jpg"
  },
  {
    "id": "kRxsA-H59fc",
    "videoId": "kRxsA-H59fc",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 5",
    "publishedAt": "",
    "duration": "PT1H14M4S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/kRxsA-H59fc.jpg"
  },
  {
    "id": "0TDaK2oz5Is",
    "videoId": "0TDaK2oz5Is",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 4",
    "publishedAt": "",
    "duration": "PT1H14M55S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/0TDaK2oz5Is.jpg"
  },
  {
    "id": "Y2Qm-ZRQ4-k",
    "videoId": "Y2Qm-ZRQ4-k",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 3",
    "publishedAt": "",
    "duration": "PT1H13M24S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Y2Qm-ZRQ4-k.jpg"
  },
  {
    "id": "O1ctqsUlqdo",
    "videoId": "O1ctqsUlqdo",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ 🏆  اف ام مونديال 2",
    "publishedAt": "",
    "duration": "PT1H17M22S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/O1ctqsUlqdo.jpg"
  },
  {
    "id": "dx6fo9-E96Y",
    "videoId": "dx6fo9-E96Y",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج ⚽️ اف ام مونديال",
    "publishedAt": "",
    "duration": "PT1H22M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/dx6fo9-E96Y.jpg"
  },
  {
    "id": "o7Xk9rJFCKI",
    "videoId": "o7Xk9rJFCKI",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H12S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/o7Xk9rJFCKI.jpg"
  },
  {
    "id": "nF060ofDObE",
    "videoId": "nF060ofDObE",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H50S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/nF060ofDObE.jpg"
  },
  {
    "id": "akK8ETQ2gsM",
    "videoId": "akK8ETQ2gsM",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H42S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/akK8ETQ2gsM.jpg"
  },
  {
    "id": "e87Dl68B30w",
    "videoId": "e87Dl68B30w",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS - Finale",
    "publishedAt": "",
    "duration": "PT1H15S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/e87Dl68B30w.jpg"
  },
  {
    "id": "wjobgiZYL0M",
    "videoId": "wjobgiZYL0M",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT57M17S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/wjobgiZYL0M.jpg"
  },
  {
    "id": "WoD_ClC34xE",
    "videoId": "WoD_ClC34xE",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "🎙️ مسابقة براحة IFM بدعم من سوق البراحة",
    "publishedAt": "",
    "duration": "PT1H56M39S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/WoD_ClC34xE.jpg"
  },
  {
    "id": "ualQNN93E18",
    "videoId": "ualQNN93E18",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS - Finale",
    "publishedAt": "",
    "duration": "PT1H2S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ualQNN93E18.jpg"
  },
  {
    "id": "jzqwne749HQ",
    "videoId": "jzqwne749HQ",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "🎙️ مسابقة براحة IFM بدعم من سوق البراحة",
    "publishedAt": "",
    "duration": "PT1H39M39S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/jzqwne749HQ.jpg"
  },
  {
    "id": "qZ8z8cmWLjI",
    "videoId": "qZ8z8cmWLjI",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT53M37S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/qZ8z8cmWLjI.jpg"
  },
  {
    "id": "ngtHuLn2LTY",
    "videoId": "ngtHuLn2LTY",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT42M40S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ngtHuLn2LTY.jpg"
  },
  {
    "id": "9gGl5jwTgvo",
    "videoId": "9gGl5jwTgvo",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M39S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/9gGl5jwTgvo.jpg"
  },
  {
    "id": "l6n2pUEtl_M",
    "videoId": "l6n2pUEtl_M",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H21M11S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/l6n2pUEtl_M.jpg"
  },
  {
    "id": "wNTpeqaWM3Y",
    "videoId": "wNTpeqaWM3Y",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H25S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/wNTpeqaWM3Y.jpg"
  },
  {
    "id": "Tlhj2suqiwM",
    "videoId": "Tlhj2suqiwM",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H21M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Tlhj2suqiwM.jpg"
  },
  {
    "id": "GT8pT3PD5PI",
    "videoId": "GT8pT3PD5PI",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H30M15S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/GT8pT3PD5PI.jpg"
  },
  {
    "id": "0M1cmsA8d1U",
    "videoId": "0M1cmsA8d1U",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "التوره x الملا 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H15M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/0M1cmsA8d1U.jpg"
  },
  {
    "id": "gBi9WtGAAII",
    "videoId": "gBi9WtGAAII",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M37S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/gBi9WtGAAII.jpg"
  },
  {
    "id": "CHJzAWMstD0",
    "videoId": "CHJzAWMstD0",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H17M30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/CHJzAWMstD0.jpg"
  },
  {
    "id": "zzdvAVklA7k",
    "videoId": "zzdvAVklA7k",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H2M9S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/zzdvAVklA7k.jpg"
  },
  {
    "id": "1d7q2Z1NFzY",
    "videoId": "1d7q2Z1NFzY",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H5M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/1d7q2Z1NFzY.jpg"
  },
  {
    "id": "lEQWNQDUYjE",
    "videoId": "lEQWNQDUYjE",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H30M23S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/lEQWNQDUYjE.jpg"
  },
  {
    "id": "LXIIvQFFxJE",
    "videoId": "LXIIvQFFxJE",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H2M23S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/LXIIvQFFxJE.jpg"
  },
  {
    "id": "AinXUy8BQz8",
    "videoId": "AinXUy8BQz8",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H29M26S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/AinXUy8BQz8.jpg"
  },
  {
    "id": "izkbD5IsQnY",
    "videoId": "izkbD5IsQnY",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H23M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/izkbD5IsQnY.jpg"
  },
  {
    "id": "s0UkPAgG7lw",
    "videoId": "s0UkPAgG7lw",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/s0UkPAgG7lw.jpg"
  },
  {
    "id": "WaeGmJ0zbyI",
    "videoId": "WaeGmJ0zbyI",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H22M21S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/WaeGmJ0zbyI.jpg"
  },
  {
    "id": "lt9QnDaimnU",
    "videoId": "lt9QnDaimnU",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT59M23S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/lt9QnDaimnU.jpg"
  },
  {
    "id": "jEA8y9FNExU",
    "videoId": "jEA8y9FNExU",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H23M47S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/jEA8y9FNExU.jpg"
  },
  {
    "id": "9Jvn4O_oIl8",
    "videoId": "9Jvn4O_oIl8",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/9Jvn4O_oIl8.jpg"
  },
  {
    "id": "tLowXWUWuNo",
    "videoId": "tLowXWUWuNo",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H27M46S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/tLowXWUWuNo.jpg"
  },
  {
    "id": "_RcqAzvSdCw",
    "videoId": "_RcqAzvSdCw",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H27S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/_RcqAzvSdCw.jpg"
  },
  {
    "id": "7eS2Al53Mwo",
    "videoId": "7eS2Al53Mwo",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H20M45S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7eS2Al53Mwo.jpg"
  },
  {
    "id": "nOrEiY-2hyY",
    "videoId": "nOrEiY-2hyY",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT59M16S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/nOrEiY-2hyY.jpg"
  },
  {
    "id": "DTQ3D4fM3Tc",
    "videoId": "DTQ3D4fM3Tc",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H16M27S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/DTQ3D4fM3Tc.jpg"
  },
  {
    "id": "nLw-tU7xD1k",
    "videoId": "nLw-tU7xD1k",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H5S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/nLw-tU7xD1k.jpg"
  },
  {
    "id": "MEZuRqg6vSM",
    "videoId": "MEZuRqg6vSM",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "خارج المستطيل ⚽️ الأخضر",
    "publishedAt": "",
    "duration": "PT1H21M45S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/MEZuRqg6vSM.jpg"
  },
  {
    "id": "HalUGNfvRkE",
    "videoId": "HalUGNfvRkE",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M10S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/HalUGNfvRkE.jpg"
  },
  {
    "id": "LBoKcVJhE84",
    "videoId": "LBoKcVJhE84",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H19S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/LBoKcVJhE84.jpg"
  },
  {
    "id": "7CXBw8STd1I",
    "videoId": "7CXBw8STd1I",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H2M27S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7CXBw8STd1I.jpg"
  },
  {
    "id": "0QlWBiDdu4w",
    "videoId": "0QlWBiDdu4w",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H34S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/0QlWBiDdu4w.jpg"
  },
  {
    "id": "LsRE5WrhD24",
    "videoId": "LsRE5WrhD24",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/LsRE5WrhD24.jpg"
  },
  {
    "id": "f_Kd_ho69VY",
    "videoId": "f_Kd_ho69VY",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H46S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/f_Kd_ho69VY.jpg"
  },
  {
    "id": "CLOvsjjNuO8",
    "videoId": "CLOvsjjNuO8",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H1M6S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/CLOvsjjNuO8.jpg"
  },
  {
    "id": "X7Pb_bVD1c0",
    "videoId": "X7Pb_bVD1c0",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS",
    "publishedAt": "",
    "duration": "PT1H2M16S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/X7Pb_bVD1c0.jpg"
  },
  {
    "id": "mRyqQE9mc60",
    "videoId": "mRyqQE9mc60",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS - Round  12",
    "publishedAt": "",
    "duration": "PT1H3M15S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/mRyqQE9mc60.jpg"
  },
  {
    "id": "ebUXF7y0sOk",
    "videoId": "ebUXF7y0sOk",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS - Round  11",
    "publishedAt": "",
    "duration": "PT1H5S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ebUXF7y0sOk.jpg"
  },
  {
    "id": "6LBktsequls",
    "videoId": "6LBktsequls",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "البرنامج المباشر 🏎️ DRS - Round 10",
    "publishedAt": "",
    "duration": "PT1H20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/6LBktsequls.jpg"
  },
  {
    "id": "AbIY0v7VLX0",
    "videoId": "AbIY0v7VLX0",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "تحليل مجريات سباق جائزة برشلونة 🏎️ 🏁",
    "publishedAt": "",
    "duration": "PT59M55S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/AbIY0v7VLX0.jpg"
  },
  {
    "id": "kcPLkYumgbw",
    "videoId": "kcPLkYumgbw",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "سباق جائزة موناكو الكبرى 2025 - DRS",
    "publishedAt": "",
    "duration": "PT1H40S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/kcPLkYumgbw.jpg"
  },
  {
    "id": "nJgcQUghTl8",
    "videoId": "nJgcQUghTl8",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "سباق جائزة إيميليا رومانيا الكبرى 2025 - DRS",
    "publishedAt": "",
    "duration": "PT1H3M2S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/nJgcQUghTl8.jpg"
  },
  {
    "id": "hF7qPZYQI6g",
    "videoId": "hF7qPZYQI6g",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "⚽️ برنامج اف ام ليغ - LIVE",
    "publishedAt": "",
    "duration": "PT34S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/hF7qPZYQI6g.jpg"
  },
  {
    "id": "7Jc0McyNgUQ",
    "videoId": "7Jc0McyNgUQ",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "⚽️ برنامج اف ام ليغ - الحلقة الأخيرة - الموسم 14",
    "publishedAt": "",
    "duration": "PT1H17M43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7Jc0McyNgUQ.jpg"
  },
  {
    "id": "k_EoB4xbXUs",
    "videoId": "k_EoB4xbXUs",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "⚽️ برنامج اف ام ليغ - LIVE",
    "publishedAt": "",
    "duration": "PT1H52M16S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/k_EoB4xbXUs.jpg"
  },
  {
    "id": "OEBSuwMRvy0",
    "videoId": "OEBSuwMRvy0",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "⚽️ برنامج اف ام ليغ - LIVE",
    "publishedAt": "",
    "duration": "PT1H54M18S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/OEBSuwMRvy0.jpg"
  },
  {
    "id": "8tW4SojdSjM",
    "videoId": "8tW4SojdSjM",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "⚽️ برنامج اف ام ليغ - LIVE",
    "publishedAt": "",
    "duration": "PT1H45M14S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8tW4SojdSjM.jpg"
  },
  {
    "id": "Jf1JdGMRUpE",
    "videoId": "Jf1JdGMRUpE",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "⚽️ برنامج اف ام ليغ - LIVE",
    "publishedAt": "",
    "duration": "PT1H54M40S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Jf1JdGMRUpE.jpg"
  },
  {
    "id": "sFT0caDpfVI",
    "videoId": "sFT0caDpfVI",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "⚽️ برنامج اف ام ليغ - LIVE",
    "publishedAt": "",
    "duration": "PT1H48M38S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/sFT0caDpfVI.jpg"
  },
  {
    "id": "FOFFVkschAY",
    "videoId": "FOFFVkschAY",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "رمضان كريم  ☪️ ⚽️ برنامج اف ام ليغ - LIVE",
    "publishedAt": "",
    "duration": "PT1H59M18S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/FOFFVkschAY.jpg"
  },
  {
    "id": "hi1RbjP7GRU",
    "videoId": "hi1RbjP7GRU",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "رمضان كريم  ☪️ ⚽️ برنامج اف ام ليغ - LIVE",
    "publishedAt": "",
    "duration": "PT1H53M44S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/hi1RbjP7GRU.jpg"
  },
  {
    "id": "ucl-EB_Nr2M",
    "videoId": "ucl-EB_Nr2M",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "رمضان كريم  ☪️ ⚽️ برنامج اف ام ليغ - LIVE",
    "publishedAt": "",
    "duration": "PT2H1M10S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ucl-EB_Nr2M.jpg"
  },
  {
    "id": "gKHIqxusg9I",
    "videoId": "gKHIqxusg9I",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج \"الدوري\" 🌙 شهر رمضان",
    "publishedAt": "",
    "duration": "PT1H17M51S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/gKHIqxusg9I.jpg"
  },
  {
    "id": "Iz-5Mt5oAGw",
    "videoId": "Iz-5Mt5oAGw",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H56M44S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Iz-5Mt5oAGw.jpg"
  },
  {
    "id": "hDMv0MzMvDU",
    "videoId": "hDMv0MzMvDU",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H59M13S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/hDMv0MzMvDU.jpg"
  },
  {
    "id": "xkilI6mR8Kc",
    "videoId": "xkilI6mR8Kc",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H56M4S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/xkilI6mR8Kc.jpg"
  },
  {
    "id": "81NuTuVlmDQ",
    "videoId": "81NuTuVlmDQ",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H59M25S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/81NuTuVlmDQ.jpg"
  },
  {
    "id": "YaGXxj-KBWQ",
    "videoId": "YaGXxj-KBWQ",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H49M53S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/YaGXxj-KBWQ.jpg"
  },
  {
    "id": "mhfV78EnZjk",
    "videoId": "mhfV78EnZjk",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H57M9S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/mhfV78EnZjk.jpg"
  },
  {
    "id": "p3aNNlRdNv4",
    "videoId": "p3aNNlRdNv4",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H48M53S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/p3aNNlRdNv4.jpg"
  },
  {
    "id": "_mh-oSeidLY",
    "videoId": "_mh-oSeidLY",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H59M15S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/_mh-oSeidLY.jpg"
  },
  {
    "id": "eVLmPViJE8w",
    "videoId": "eVLmPViJE8w",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج  \" الدوري \" ⚽️  - بث مباشر 📡",
    "publishedAt": "",
    "duration": "PT1H35M19S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/eVLmPViJE8w.jpg"
  },
  {
    "id": "9MajFA_R16s",
    "videoId": "9MajFA_R16s",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H55M29S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/9MajFA_R16s.jpg"
  },
  {
    "id": "YzoAVyqbQGQ",
    "videoId": "YzoAVyqbQGQ",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT2H0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/YzoAVyqbQGQ.jpg"
  },
  {
    "id": "Tk--uV8fN7I",
    "videoId": "Tk--uV8fN7I",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج  \" الدوري \" ⚽️  - بث مباشر 📡",
    "publishedAt": "",
    "duration": "PT1H27M7S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Tk--uV8fN7I.jpg"
  },
  {
    "id": "sLOLPUO56Ks",
    "videoId": "sLOLPUO56Ks",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT5M41S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/sLOLPUO56Ks.jpg"
  },
  {
    "id": "KUTbNDBPP5A",
    "videoId": "KUTbNDBPP5A",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج  \" الدوري \" ⚽️  - بث مباشر 📡",
    "publishedAt": "",
    "duration": "PT1H25M7S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/KUTbNDBPP5A.jpg"
  },
  {
    "id": "627lqRNWOz4",
    "videoId": "627lqRNWOz4",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H58M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/627lqRNWOz4.jpg"
  },
  {
    "id": "eahg1m44JLs",
    "videoId": "eahg1m44JLs",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج  \" الدوري \" ⚽️  - بث مباشر 📡",
    "publishedAt": "",
    "duration": "PT1H33M5S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/eahg1m44JLs.jpg"
  },
  {
    "id": "c1UKoAj-Ca4",
    "videoId": "c1UKoAj-Ca4",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج  \" الدوري \" ⚽️  - بث مباشر 📡",
    "publishedAt": "",
    "duration": "PT1H34M32S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/c1UKoAj-Ca4.jpg"
  },
  {
    "id": "72p0FQ_3JQs",
    "videoId": "72p0FQ_3JQs",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H56M49S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/72p0FQ_3JQs.jpg"
  },
  {
    "id": "adDz-Z8ACNw",
    "videoId": "adDz-Z8ACNw",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج  \" الدوري \" ⚽️  - بث مباشر 📡",
    "publishedAt": "",
    "duration": "PT1H20M29S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/adDz-Z8ACNw.jpg"
  },
  {
    "id": "nOOkVZCYqz4",
    "videoId": "nOOkVZCYqz4",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT1H59M31S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/nOOkVZCYqz4.jpg"
  },
  {
    "id": "Mab1SClumNw",
    "videoId": "Mab1SClumNw",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج  \" الدوري \" ⚽️  - بث مباشر 📡",
    "publishedAt": "",
    "duration": "PT1H35M9S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Mab1SClumNw.jpg"
  },
  {
    "id": "wtK25HiEw9s",
    "videoId": "wtK25HiEw9s",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "FM League ⚽️ برنامج اف ام ليغ - LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT2H1M42S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/wtK25HiEw9s.jpg"
  },
  {
    "id": "c22Z7U4AUn8",
    "videoId": "c22Z7U4AUn8",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "برنامج  \" الدوري \" ⚽️  - بث مباشر 📡",
    "publishedAt": "",
    "duration": "PT1H50M1S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/c22Z7U4AUn8.jpg"
  },
  {
    "id": "R6b3dQYHtOs",
    "videoId": "R6b3dQYHtOs",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "FM League - برنامج اف ام ليغ LIVE بث مباشر",
    "publishedAt": "",
    "duration": "PT2H13S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/R6b3dQYHtOs.jpg"
  },
  {
    "id": "S3CcVNEfxEc",
    "videoId": "S3CcVNEfxEc",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "حلقة",
    "publishedAt": "",
    "duration": "PT0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/S3CcVNEfxEc.jpg"
  },
  {
    "id": "X7Fc9dKIZ0w",
    "videoId": "X7Fc9dKIZ0w",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "حلقة",
    "publishedAt": "",
    "duration": "PT0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/X7Fc9dKIZ0w.jpg"
  },
  {
    "id": "N7KJo3RnZqM",
    "videoId": "N7KJo3RnZqM",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "حلقة",
    "publishedAt": "",
    "duration": "PT0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/N7KJo3RnZqM.jpg"
  },
  {
    "id": "3LP6BXxotHU",
    "videoId": "3LP6BXxotHU",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "حلقة",
    "publishedAt": "",
    "duration": "PT0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/3LP6BXxotHU.jpg"
  },
  {
    "id": "Oth-AXkDSNk",
    "videoId": "Oth-AXkDSNk",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "حلقة",
    "publishedAt": "",
    "duration": "PT0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Oth-AXkDSNk.jpg"
  },
  {
    "id": "8ktHcUEUd2g",
    "videoId": "8ktHcUEUd2g",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "حلقة",
    "publishedAt": "",
    "duration": "PT0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8ktHcUEUd2g.jpg"
  },
  {
    "id": "RvzaawMzuLU",
    "videoId": "RvzaawMzuLU",
    "playlistId": "PLFm3_OhqZyNb9_nSKLs7hlnFcTtpxYhRj",
    "showTitle": "برامج مباشرة 📡 Live Shows",
    "title": "حلقة",
    "publishedAt": "",
    "duration": "PT0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/RvzaawMzuLU.jpg"
  },
  {
    "id": "gXynszE5Qz4",
    "videoId": "gXynszE5Qz4",
    "playlistId": "PLFm3_OhqZyNbJksSW4_850XoKn6CIdqDt",
    "showTitle": "سهرة الصورة الأخرى",
    "title": "سهرة الصورة الاخرى - الحلقة 4",
    "publishedAt": "",
    "duration": "PT1H29M46S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/gXynszE5Qz4.jpg"
  },
  {
    "id": "MNGN16oB_3I",
    "videoId": "MNGN16oB_3I",
    "playlistId": "PLFm3_OhqZyNbJksSW4_850XoKn6CIdqDt",
    "showTitle": "سهرة الصورة الأخرى",
    "title": "سهرة الصورة الاخرى - الحلقة 3",
    "publishedAt": "",
    "duration": "PT1H29M36S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/MNGN16oB_3I.jpg"
  },
  {
    "id": "TEumTvGMkms",
    "videoId": "TEumTvGMkms",
    "playlistId": "PLFm3_OhqZyNbJksSW4_850XoKn6CIdqDt",
    "showTitle": "سهرة الصورة الأخرى",
    "title": "سهرة الصورة الاخرى - الحلقة 2",
    "publishedAt": "",
    "duration": "PT1H32M12S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/TEumTvGMkms.jpg"
  },
  {
    "id": "QDbXv-VNd28",
    "videoId": "QDbXv-VNd28",
    "playlistId": "PLFm3_OhqZyNbJksSW4_850XoKn6CIdqDt",
    "showTitle": "سهرة الصورة الأخرى",
    "title": "سهرة الصورة الاخرى - الحلقة 1",
    "publishedAt": "",
    "duration": "PT1H30M7S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/QDbXv-VNd28.jpg"
  },
  {
    "id": "jZO0-cihKtk",
    "videoId": "jZO0-cihKtk",
    "playlistId": "PLFm3_OhqZyNZ_vfjC6eWK6R_ykJWoKQ0F",
    "showTitle": "أصحاب الفيل",
    "title": "أصحاب الفيل - ح١",
    "publishedAt": "",
    "duration": "PT5M44S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/jZO0-cihKtk.jpg"
  },
  {
    "id": "kOC_DwbuFSw",
    "videoId": "kOC_DwbuFSw",
    "playlistId": "PLFm3_OhqZyNZ_vfjC6eWK6R_ykJWoKQ0F",
    "showTitle": "أصحاب الفيل",
    "title": "أصحاب الفيل - ح٢",
    "publishedAt": "",
    "duration": "PT5M43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/kOC_DwbuFSw.jpg"
  },
  {
    "id": "CuYIB3pzwMw",
    "videoId": "CuYIB3pzwMw",
    "playlistId": "PLFm3_OhqZyNZ_vfjC6eWK6R_ykJWoKQ0F",
    "showTitle": "أصحاب الفيل",
    "title": "أصحاب الفيل ح٣",
    "publishedAt": "",
    "duration": "PT6M37S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/CuYIB3pzwMw.jpg"
  },
  {
    "id": "OBGpZ9Azewk",
    "videoId": "OBGpZ9Azewk",
    "playlistId": "PLFm3_OhqZyNZ_vfjC6eWK6R_ykJWoKQ0F",
    "showTitle": "أصحاب الفيل",
    "title": "أصحاب الفيل ح٤",
    "publishedAt": "",
    "duration": "PT6M39S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/OBGpZ9Azewk.jpg"
  },
  {
    "id": "n9kkWEtwYSM",
    "videoId": "n9kkWEtwYSM",
    "playlistId": "PLFm3_OhqZyNZ_vfjC6eWK6R_ykJWoKQ0F",
    "showTitle": "أصحاب الفيل",
    "title": "أصحاب الفيل ح٥",
    "publishedAt": "",
    "duration": "PT6M45S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/n9kkWEtwYSM.jpg"
  },
  {
    "id": "7ugh1dcqJKg",
    "videoId": "7ugh1dcqJKg",
    "playlistId": "PLFm3_OhqZyNZ_vfjC6eWK6R_ykJWoKQ0F",
    "showTitle": "أصحاب الفيل",
    "title": "أصحاب الفيل ح٦",
    "publishedAt": "",
    "duration": "PT5M29S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7ugh1dcqJKg.jpg"
  },
  {
    "id": "UXXzlTh4LB8",
    "videoId": "UXXzlTh4LB8",
    "playlistId": "PLFm3_OhqZyNZ_vfjC6eWK6R_ykJWoKQ0F",
    "showTitle": "أصحاب الفيل",
    "title": "أصحاب الفيل ح ٧",
    "publishedAt": "",
    "duration": "PT6M30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/UXXzlTh4LB8.jpg"
  },
  {
    "id": "BUltsoJ3Rok",
    "videoId": "BUltsoJ3Rok",
    "playlistId": "PLFm3_OhqZyNZ_vfjC6eWK6R_ykJWoKQ0F",
    "showTitle": "أصحاب الفيل",
    "title": "أصحاب الفيل ح ١٠",
    "publishedAt": "",
    "duration": "PT4M34S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/BUltsoJ3Rok.jpg"
  },
  {
    "id": "SMkqgjJjJ1w",
    "videoId": "SMkqgjJjJ1w",
    "playlistId": "PLFm3_OhqZyNZ_vfjC6eWK6R_ykJWoKQ0F",
    "showTitle": "أصحاب الفيل",
    "title": "أصحاب الفيل ح ١١",
    "publishedAt": "",
    "duration": "PT6M54S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/SMkqgjJjJ1w.jpg"
  },
  {
    "id": "maOCvk24yJQ",
    "videoId": "maOCvk24yJQ",
    "playlistId": "PLFm3_OhqZyNZ_vfjC6eWK6R_ykJWoKQ0F",
    "showTitle": "أصحاب الفيل",
    "title": "أصحاب الفيل ح ١٢",
    "publishedAt": "",
    "duration": "PT7M24S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/maOCvk24yJQ.jpg"
  },
  {
    "id": "ipTf3XXGITw",
    "videoId": "ipTf3XXGITw",
    "playlistId": "PLFm3_OhqZyNZ_vfjC6eWK6R_ykJWoKQ0F",
    "showTitle": "أصحاب الفيل",
    "title": "أصحاب الفيل ح ١٣",
    "publishedAt": "",
    "duration": "PT5M43S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ipTf3XXGITw.jpg"
  },
  {
    "id": "k7t-j5sDoTI",
    "videoId": "k7t-j5sDoTI",
    "playlistId": "PLFm3_OhqZyNZ_vfjC6eWK6R_ykJWoKQ0F",
    "showTitle": "أصحاب الفيل",
    "title": "أصحاب الفيل ح ١٤",
    "publishedAt": "",
    "duration": "PT11M5S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/k7t-j5sDoTI.jpg"
  },
  {
    "id": "uGM5rh1Pgmk",
    "videoId": "uGM5rh1Pgmk",
    "playlistId": "PLFm3_OhqZyNZ_vfjC6eWK6R_ykJWoKQ0F",
    "showTitle": "أصحاب الفيل",
    "title": "أصحاب الفيل - خلف الكواليس",
    "publishedAt": "",
    "duration": "PT1M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/uGM5rh1Pgmk.jpg"
  },
  {
    "id": "Oznadvmgm88",
    "videoId": "Oznadvmgm88",
    "playlistId": "PLFm3_OhqZyNY1s5lB4zDWQPNDNGpgeFXe",
    "showTitle": "فواصل الفعاليات والبرامج الخاصة",
    "title": "لقطات من موسم السباقات F1",
    "publishedAt": "",
    "duration": "PT1M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Oznadvmgm88.jpg"
  },
  {
    "id": "qlP8CEgTW8s",
    "videoId": "qlP8CEgTW8s",
    "playlistId": "PLFm3_OhqZyNY1s5lB4zDWQPNDNGpgeFXe",
    "showTitle": "فواصل الفعاليات والبرامج الخاصة",
    "title": "جلسة iFM 2019",
    "publishedAt": "",
    "duration": "PT1M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/qlP8CEgTW8s.jpg"
  },
  {
    "id": "gspubQskRzY",
    "videoId": "gspubQskRzY",
    "playlistId": "PLFm3_OhqZyNY1s5lB4zDWQPNDNGpgeFXe",
    "showTitle": "فواصل الفعاليات والبرامج الخاصة",
    "title": "إذاعة البحرين - عام 2020م",
    "publishedAt": "",
    "duration": "PT3M54S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/gspubQskRzY.jpg"
  },
  {
    "id": "lC00IfR91yo",
    "videoId": "lC00IfR91yo",
    "playlistId": "PLFm3_OhqZyNY1s5lB4zDWQPNDNGpgeFXe",
    "showTitle": "فواصل الفعاليات والبرامج الخاصة",
    "title": "صيفنا أمان",
    "publishedAt": "",
    "duration": "PT28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/lC00IfR91yo.jpg"
  },
  {
    "id": "xk4zi8nwtQU",
    "videoId": "xk4zi8nwtQU",
    "playlistId": "PLFm3_OhqZyNY1s5lB4zDWQPNDNGpgeFXe",
    "showTitle": "فواصل الفعاليات والبرامج الخاصة",
    "title": "وصلة إعلانية",
    "publishedAt": "",
    "duration": "PT2M8S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/xk4zi8nwtQU.jpg"
  },
  {
    "id": "sX2z2TKM9jU",
    "videoId": "sX2z2TKM9jU",
    "playlistId": "PLFm3_OhqZyNYUUa3XOQwaI5rM6gWw6spn",
    "showTitle": "سهرة خير جليس",
    "title": "سهرة خير جليس - ح٣ م٢",
    "publishedAt": "",
    "duration": "PT49M35S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/sX2z2TKM9jU.jpg"
  },
  {
    "id": "YZPU5rf_aNI",
    "videoId": "YZPU5rf_aNI",
    "playlistId": "PLFm3_OhqZyNYUUa3XOQwaI5rM6gWw6spn",
    "showTitle": "سهرة خير جليس",
    "title": "سهرة خير جليس - ح٤ م٢",
    "publishedAt": "",
    "duration": "PT1H3M37S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/YZPU5rf_aNI.jpg"
  },
  {
    "id": "dYE-WfKxmdE",
    "videoId": "dYE-WfKxmdE",
    "playlistId": "PLFm3_OhqZyNYUUa3XOQwaI5rM6gWw6spn",
    "showTitle": "سهرة خير جليس",
    "title": "سهرة خير جليس - ح١ م٢",
    "publishedAt": "",
    "duration": "PT45M34S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/dYE-WfKxmdE.jpg"
  },
  {
    "id": "U8uRnD8jdzs",
    "videoId": "U8uRnD8jdzs",
    "playlistId": "PLFm3_OhqZyNYUUa3XOQwaI5rM6gWw6spn",
    "showTitle": "سهرة خير جليس",
    "title": "سهرة خير جليس - ح٤ م١",
    "publishedAt": "",
    "duration": "PT41M29S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/U8uRnD8jdzs.jpg"
  },
  {
    "id": "lXXz1V2oaHI",
    "videoId": "lXXz1V2oaHI",
    "playlistId": "PLFm3_OhqZyNYUUa3XOQwaI5rM6gWw6spn",
    "showTitle": "سهرة خير جليس",
    "title": "سهرة خير جليس - ح٣ م١",
    "publishedAt": "",
    "duration": "PT50M54S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/lXXz1V2oaHI.jpg"
  },
  {
    "id": "4FyVt5f5_7s",
    "videoId": "4FyVt5f5_7s",
    "playlistId": "PLFm3_OhqZyNYUUa3XOQwaI5rM6gWw6spn",
    "showTitle": "سهرة خير جليس",
    "title": "سهرة خير جليس - ح٢ م١",
    "publishedAt": "",
    "duration": "PT1H3M37S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/4FyVt5f5_7s.jpg"
  },
  {
    "id": "BeyDVqZuzcI",
    "videoId": "BeyDVqZuzcI",
    "playlistId": "PLFm3_OhqZyNYUUa3XOQwaI5rM6gWw6spn",
    "showTitle": "سهرة خير جليس",
    "title": "سهرة خير جليس - ح١ م١",
    "publishedAt": "",
    "duration": "PT51M4S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/BeyDVqZuzcI.jpg"
  },
  {
    "id": "A_Hxt0UhipA",
    "videoId": "A_Hxt0UhipA",
    "playlistId": "PLFm3_OhqZyNbC15hxqmuOUr7Kl61sdede",
    "showTitle": "نعم من حولنا",
    "title": "برنامج نعم من حولنا 12 - نعمة الصوت",
    "publishedAt": "",
    "duration": "PT2M55S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/A_Hxt0UhipA.jpg"
  },
  {
    "id": "aJj8ONzqe_M",
    "videoId": "aJj8ONzqe_M",
    "playlistId": "PLFm3_OhqZyNbC15hxqmuOUr7Kl61sdede",
    "showTitle": "نعم من حولنا",
    "title": "برنامج نعم من حولنا 11 - نعمة الضحك",
    "publishedAt": "",
    "duration": "PT3M26S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/aJj8ONzqe_M.jpg"
  },
  {
    "id": "33h-i3MxRG4",
    "videoId": "33h-i3MxRG4",
    "playlistId": "PLFm3_OhqZyNbC15hxqmuOUr7Kl61sdede",
    "showTitle": "نعم من حولنا",
    "title": "برنامج نعم من حولنا 10 - نعمة الانجاز",
    "publishedAt": "",
    "duration": "PT3M31S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/33h-i3MxRG4.jpg"
  },
  {
    "id": "Y5LYmY1Mxco",
    "videoId": "Y5LYmY1Mxco",
    "playlistId": "PLFm3_OhqZyNbC15hxqmuOUr7Kl61sdede",
    "showTitle": "نعم من حولنا",
    "title": "برنامج نعم من حولنا 08 - نعمة الإضاءة",
    "publishedAt": "",
    "duration": "PT3M55S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Y5LYmY1Mxco.jpg"
  },
  {
    "id": "Cd2Cow63UIA",
    "videoId": "Cd2Cow63UIA",
    "playlistId": "PLFm3_OhqZyNbC15hxqmuOUr7Kl61sdede",
    "showTitle": "نعم من حولنا",
    "title": "برنامج نعمة من حولنا 07 - نعمة الأمان",
    "publishedAt": "",
    "duration": "PT3M19S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Cd2Cow63UIA.jpg"
  },
  {
    "id": "guUymigDrd8",
    "videoId": "guUymigDrd8",
    "playlistId": "PLFm3_OhqZyNbC15hxqmuOUr7Kl61sdede",
    "showTitle": "نعم من حولنا",
    "title": "برنامج نعم من حولنا 06 - نعمة الذكريات",
    "publishedAt": "",
    "duration": "PT3M36S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/guUymigDrd8.jpg"
  },
  {
    "id": "diUZUT-h198",
    "videoId": "diUZUT-h198",
    "playlistId": "PLFm3_OhqZyNbC15hxqmuOUr7Kl61sdede",
    "showTitle": "نعم من حولنا",
    "title": "نعم من حولنا 05 - نعمة الصداقة",
    "publishedAt": "",
    "duration": "PT2M51S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/diUZUT-h198.jpg"
  },
  {
    "id": "pISyIzJQ8MQ",
    "videoId": "pISyIzJQ8MQ",
    "playlistId": "PLFm3_OhqZyNbC15hxqmuOUr7Kl61sdede",
    "showTitle": "نعم من حولنا",
    "title": "برنامج نعم من حولنا 02 - نعمة العلم",
    "publishedAt": "",
    "duration": "PT4M1S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/pISyIzJQ8MQ.jpg"
  },
  {
    "id": "z2fbDIE9Qjs",
    "videoId": "z2fbDIE9Qjs",
    "playlistId": "PLFm3_OhqZyNbC15hxqmuOUr7Kl61sdede",
    "showTitle": "نعم من حولنا",
    "title": "برنامج نعم من حولنا 04 - نعمة الامتنان 🙏🏼",
    "publishedAt": "",
    "duration": "PT3M51S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/z2fbDIE9Qjs.jpg"
  },
  {
    "id": "VpiEqNBpXZw",
    "videoId": "VpiEqNBpXZw",
    "playlistId": "PLFm3_OhqZyNbC15hxqmuOUr7Kl61sdede",
    "showTitle": "نعم من حولنا",
    "title": "نعم من حولنا 03 - نعمة الصداقة",
    "publishedAt": "",
    "duration": "PT3M17S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/VpiEqNBpXZw.jpg"
  },
  {
    "id": "EBVxrg5MZro",
    "videoId": "EBVxrg5MZro",
    "playlistId": "PLFm3_OhqZyNbC15hxqmuOUr7Kl61sdede",
    "showTitle": "نعم من حولنا",
    "title": "برنامج نعم من حولنا 01 - نعمة أحلام اليقظة⁩",
    "publishedAt": "",
    "duration": "PT3M38S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/EBVxrg5MZro.jpg"
  },
  {
    "id": "m48QTUXwVDw",
    "videoId": "m48QTUXwVDw",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "فرقة بوسلمان لفن الليوة",
    "publishedAt": "",
    "duration": "PT20M54S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/m48QTUXwVDw.jpg"
  },
  {
    "id": "VZ1fWrDHN_4",
    "videoId": "VZ1fWrDHN_4",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "فرقة شباب الحد - مقتطفات من تسجيلات فن الفجري",
    "publishedAt": "",
    "duration": "PT50S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/VZ1fWrDHN_4.jpg"
  },
  {
    "id": "Rk-fWH6jGuQ",
    "videoId": "Rk-fWH6jGuQ",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "فرقة  شباب الحد - مقتطفات من تسجيلات اذاعة البحرين لفن الفجري",
    "publishedAt": "",
    "duration": "PT47S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Rk-fWH6jGuQ.jpg"
  },
  {
    "id": "Sar2YPgYMKo",
    "videoId": "Sar2YPgYMKo",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "عرضة فرقة شباب الحد - مقتطفات من تسجيلات اذاعة البحرين",
    "publishedAt": "",
    "duration": "PT44S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Sar2YPgYMKo.jpg"
  },
  {
    "id": "LRLsafb98SI",
    "videoId": "LRLsafb98SI",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "فن الياهي | موال حياكم الله - النهام أحمد عبدالله",
    "publishedAt": "",
    "duration": "PT1M59S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/LRLsafb98SI.jpg"
  },
  {
    "id": "9SCJaiWFTCI",
    "videoId": "9SCJaiWFTCI",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "فن الياهي | موال يا من غرامه - النهام احمد عبدالله",
    "publishedAt": "",
    "duration": "PT2M2S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/9SCJaiWFTCI.jpg"
  },
  {
    "id": "z2tkWVErpfQ",
    "videoId": "z2tkWVErpfQ",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "فن الياهي | موال حنا ذوات العرف - النهام احمد عبدالله",
    "publishedAt": "",
    "duration": "PT1M54S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/z2tkWVErpfQ.jpg"
  },
  {
    "id": "ESiZ4vvpGvs",
    "videoId": "ESiZ4vvpGvs",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "فن الياهي | موال يا زين اقفيت - النهام احمد عبدالله",
    "publishedAt": "",
    "duration": "PT2M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ESiZ4vvpGvs.jpg"
  },
  {
    "id": "cRVoF-HNo6U",
    "videoId": "cRVoF-HNo6U",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "فن الياهي | موال هيض غرامي - النهام احمد عبدالله",
    "publishedAt": "",
    "duration": "PT1M51S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/cRVoF-HNo6U.jpg"
  },
  {
    "id": "-NEtAT0ZCwA",
    "videoId": "-NEtAT0ZCwA",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "فن الياهي | موال حالي نحل - النهام احمد عبدالله",
    "publishedAt": "",
    "duration": "PT2M10S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/-NEtAT0ZCwA.jpg"
  },
  {
    "id": "PNQFrvPrB_8",
    "videoId": "PNQFrvPrB_8",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "فن الياهي | موال نار الغضى لوعن - النهام احمد عبدالله",
    "publishedAt": "",
    "duration": "PT2M2S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/PNQFrvPrB_8.jpg"
  },
  {
    "id": "cWo6_Oday1s",
    "videoId": "cWo6_Oday1s",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "فن الياهي | موال سلام يا عزوتي - النهام احمد عبدالله",
    "publishedAt": "",
    "duration": "PT2M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/cWo6_Oday1s.jpg"
  },
  {
    "id": "I3x_Ai3CZjg",
    "videoId": "I3x_Ai3CZjg",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "فن الياهي | موال غرٍ جما البان - النهام احمد عبدالله",
    "publishedAt": "",
    "duration": "PT1M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/I3x_Ai3CZjg.jpg"
  },
  {
    "id": "-Fyx60yrcX8",
    "videoId": "-Fyx60yrcX8",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "فن الياهي | موال ارسلت مرسول - النهام احمد عبدالله",
    "publishedAt": "",
    "duration": "PT1M37S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/-Fyx60yrcX8.jpg"
  },
  {
    "id": "g-7B_VX5cwI",
    "videoId": "g-7B_VX5cwI",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "سامري سدرة هيضتني - فرقة الأصلي",
    "publishedAt": "",
    "duration": "PT5M1S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/g-7B_VX5cwI.jpg"
  },
  {
    "id": "hn6NGQyyv5U",
    "videoId": "hn6NGQyyv5U",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "دزة - فرقة الأصلي",
    "publishedAt": "",
    "duration": "PT5M10S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/hn6NGQyyv5U.jpg"
  },
  {
    "id": "R2ElPfD8ThA",
    "videoId": "R2ElPfD8ThA",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "سامري يوم الثلاثاء - فرقة الاصلي",
    "publishedAt": "",
    "duration": "PT6M19S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/R2ElPfD8ThA.jpg"
  },
  {
    "id": "rQP017uL-Q8",
    "videoId": "rQP017uL-Q8",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "مروبع البارحة نوم - فرقة الاصلي",
    "publishedAt": "",
    "duration": "PT5M18S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/rQP017uL-Q8.jpg"
  },
  {
    "id": "oUKt2AzlvsU",
    "videoId": "oUKt2AzlvsU",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "خماري نجدي يا من يسلم لي - فرقة الاصلي",
    "publishedAt": "",
    "duration": "PT5M29S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/oUKt2AzlvsU.jpg"
  },
  {
    "id": "Ue1d9f6r6aM",
    "videoId": "Ue1d9f6r6aM",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "صوت وبروحي من الغيد 🎸 - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT6M2S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Ue1d9f6r6aM.jpg"
  },
  {
    "id": "B-N2hxeqC_c",
    "videoId": "B-N2hxeqC_c",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "صوت جزيل العطا - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT6M15S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/B-N2hxeqC_c.jpg"
  },
  {
    "id": "ErVJlCogT3A",
    "videoId": "ErVJlCogT3A",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "صوت مروبع - عظيم الشان 🎸 - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT4M24S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/ErVJlCogT3A.jpg"
  },
  {
    "id": "05f8OOzuzMg",
    "videoId": "05f8OOzuzMg",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "صوت بوعلي قال كيف القلب - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT8M2S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/05f8OOzuzMg.jpg"
  },
  {
    "id": "qOM4aVnFNtQ",
    "videoId": "qOM4aVnFNtQ",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "صوت اليافعي قال كيف الحال 🎸 - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT8M6S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/qOM4aVnFNtQ.jpg"
  },
  {
    "id": "6Zhx3BdYLVA",
    "videoId": "6Zhx3BdYLVA",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "صوت عربية - ايا معشر العشاق 🎸 - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT6M52S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/6Zhx3BdYLVA.jpg"
  },
  {
    "id": "NCq89owxj-0",
    "videoId": "NCq89owxj-0",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "مقام منعوك عني ثم صوت يا من عليه التوكل والخلف 🎸 - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT8M59S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/NCq89owxj-0.jpg"
  },
  {
    "id": "QdFCxB7LW8s",
    "videoId": "QdFCxB7LW8s",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "ضوت يحيى عمر قال في البندر 🎸 - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT6M46S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/QdFCxB7LW8s.jpg"
  },
  {
    "id": "l-l8KmRureo",
    "videoId": "l-l8KmRureo",
    "playlistId": "PLFm3_OhqZyNZMYCaPljjygCphBdfynv6U",
    "showTitle": "فنون شعبية",
    "title": "صوت صبا نجد 🎸 - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT7M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/l-l8KmRureo.jpg"
  },
  {
    "id": "kGMqZzXGR3k",
    "videoId": "kGMqZzXGR3k",
    "playlistId": "PLFm3_OhqZyNbVMHq4LYTa8j-BHbKXIR4A",
    "showTitle": "جلسة عبدالرحمن عوض - إذاعة مملكة البحرين",
    "title": "لا وين - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT6M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/kGMqZzXGR3k.jpg"
  },
  {
    "id": "oiVmU4a4pkU",
    "videoId": "oiVmU4a4pkU",
    "playlistId": "PLFm3_OhqZyNbVMHq4LYTa8j-BHbKXIR4A",
    "showTitle": "جلسة عبدالرحمن عوض - إذاعة مملكة البحرين",
    "title": "يا ورد يا كادي - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT4M39S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/oiVmU4a4pkU.jpg"
  },
  {
    "id": "6Ns261TQQfI",
    "videoId": "6Ns261TQQfI",
    "playlistId": "PLFm3_OhqZyNbVMHq4LYTa8j-BHbKXIR4A",
    "showTitle": "جلسة عبدالرحمن عوض - إذاعة مملكة البحرين",
    "title": "ياسمار - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT5M51S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/6Ns261TQQfI.jpg"
  },
  {
    "id": "4SMYYDAtSQM",
    "videoId": "4SMYYDAtSQM",
    "playlistId": "PLFm3_OhqZyNbVMHq4LYTa8j-BHbKXIR4A",
    "showTitle": "جلسة عبدالرحمن عوض - إذاعة مملكة البحرين",
    "title": "غيار - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT5M46S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/4SMYYDAtSQM.jpg"
  },
  {
    "id": "5D1aGAH7pQ4",
    "videoId": "5D1aGAH7pQ4",
    "playlistId": "PLFm3_OhqZyNbVMHq4LYTa8j-BHbKXIR4A",
    "showTitle": "جلسة عبدالرحمن عوض - إذاعة مملكة البحرين",
    "title": "يا مسيكين  - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT5M21S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5D1aGAH7pQ4.jpg"
  },
  {
    "id": "6Ns261TQQfI",
    "videoId": "6Ns261TQQfI",
    "playlistId": "PLFm3_OhqZyNbVMHq4LYTa8j-BHbKXIR4A",
    "showTitle": "جلسة عبدالرحمن عوض - إذاعة مملكة البحرين",
    "title": "ياسمار - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT5M51S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/6Ns261TQQfI.jpg"
  },
  {
    "id": "8j2Agtb7130",
    "videoId": "8j2Agtb7130",
    "playlistId": "PLFm3_OhqZyNbVMHq4LYTa8j-BHbKXIR4A",
    "showTitle": "جلسة عبدالرحمن عوض - إذاعة مملكة البحرين",
    "title": "عيني لغير جمالكم - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT5M30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8j2Agtb7130.jpg"
  },
  {
    "id": "QNhdbYe8CP4",
    "videoId": "QNhdbYe8CP4",
    "playlistId": "PLFm3_OhqZyNbVMHq4LYTa8j-BHbKXIR4A",
    "showTitle": "جلسة عبدالرحمن عوض - إذاعة مملكة البحرين",
    "title": "يوم الاحد - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT5M18S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/QNhdbYe8CP4.jpg"
  },
  {
    "id": "WNoKwXceQgA",
    "videoId": "WNoKwXceQgA",
    "playlistId": "PLFm3_OhqZyNbVMHq4LYTa8j-BHbKXIR4A",
    "showTitle": "جلسة عبدالرحمن عوض - إذاعة مملكة البحرين",
    "title": "زمان والله - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT4M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/WNoKwXceQgA.jpg"
  },
  {
    "id": "kGMqZzXGR3k",
    "videoId": "kGMqZzXGR3k",
    "playlistId": "PLFm3_OhqZyNbVMHq4LYTa8j-BHbKXIR4A",
    "showTitle": "جلسة عبدالرحمن عوض - إذاعة مملكة البحرين",
    "title": "لا وين - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT6M20S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/kGMqZzXGR3k.jpg"
  },
  {
    "id": "oiVmU4a4pkU",
    "videoId": "oiVmU4a4pkU",
    "playlistId": "PLFm3_OhqZyNbVMHq4LYTa8j-BHbKXIR4A",
    "showTitle": "جلسة عبدالرحمن عوض - إذاعة مملكة البحرين",
    "title": "يا ورد يا كادي - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT4M39S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/oiVmU4a4pkU.jpg"
  },
  {
    "id": "yHJt09WuL_M",
    "videoId": "yHJt09WuL_M",
    "playlistId": "PLFm3_OhqZyNbVMHq4LYTa8j-BHbKXIR4A",
    "showTitle": "جلسة عبدالرحمن عوض - إذاعة مملكة البحرين",
    "title": "بسالك يا عاشور - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT5M59S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/yHJt09WuL_M.jpg"
  },
  {
    "id": "Nprvb0Bvyuc",
    "videoId": "Nprvb0Bvyuc",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "اسطوانة بحرينية - الحلقة 01",
    "publishedAt": "",
    "duration": "PT18M21S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Nprvb0Bvyuc.jpg"
  },
  {
    "id": "gtbOxVvifBA",
    "videoId": "gtbOxVvifBA",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "اسطوانة بحرينية - الحلقة 02",
    "publishedAt": "",
    "duration": "PT17M55S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/gtbOxVvifBA.jpg"
  },
  {
    "id": "NGnqZXwXPPA",
    "videoId": "NGnqZXwXPPA",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "اسطوانة بحرينية - الحلقة 03",
    "publishedAt": "",
    "duration": "PT15M47S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/NGnqZXwXPPA.jpg"
  },
  {
    "id": "FnOZO1FNSjU",
    "videoId": "FnOZO1FNSjU",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "اسطوانة بحرينية - الحلقة 04",
    "publishedAt": "",
    "duration": "PT19M37S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/FnOZO1FNSjU.jpg"
  },
  {
    "id": "fvNdB6XkKB0",
    "videoId": "fvNdB6XkKB0",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "اسطوانه بحرينية - الحلقة 05",
    "publishedAt": "",
    "duration": "PT14M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/fvNdB6XkKB0.jpg"
  },
  {
    "id": "AnS9KvgARjY",
    "videoId": "AnS9KvgARjY",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "اسطوانة بحرينية - الحلقة 06",
    "publishedAt": "",
    "duration": "PT15M1S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/AnS9KvgARjY.jpg"
  },
  {
    "id": "0X7JcVGfEF8",
    "videoId": "0X7JcVGfEF8",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "اسطوانه بحرينية - الحلقة 07",
    "publishedAt": "",
    "duration": "PT12M42S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/0X7JcVGfEF8.jpg"
  },
  {
    "id": "y8UCFWq-wwM",
    "videoId": "y8UCFWq-wwM",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "أسطوانة بحرينية - الحلقة 8",
    "publishedAt": "",
    "duration": "PT12M19S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/y8UCFWq-wwM.jpg"
  },
  {
    "id": "fOLhCgChEbc",
    "videoId": "fOLhCgChEbc",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "اسطوانة بحرينية - الحلقة 09",
    "publishedAt": "",
    "duration": "PT11M15S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/fOLhCgChEbc.jpg"
  },
  {
    "id": "HdPxD8fU-E0",
    "videoId": "HdPxD8fU-E0",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "اسطوانة بحرينية - الحلقة 10",
    "publishedAt": "",
    "duration": "PT14M45S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/HdPxD8fU-E0.jpg"
  },
  {
    "id": "XnJnRvVBl2Y",
    "videoId": "XnJnRvVBl2Y",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "اسطوانة بحرينية - الحلقة 11",
    "publishedAt": "",
    "duration": "PT11M1S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/XnJnRvVBl2Y.jpg"
  },
  {
    "id": "JnVIJ0aAHtk",
    "videoId": "JnVIJ0aAHtk",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "اسطوانة بحرينية - الحلقة 12",
    "publishedAt": "",
    "duration": "PT15M55S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/JnVIJ0aAHtk.jpg"
  },
  {
    "id": "-0ULPzFia20",
    "videoId": "-0ULPzFia20",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "اسطوانة بحرينية - الحلقة 13",
    "publishedAt": "",
    "duration": "PT13M11S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/-0ULPzFia20.jpg"
  },
  {
    "id": "yeqPTVWkVGI",
    "videoId": "yeqPTVWkVGI",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "اسطوانة بحرينية - الحلقة 14",
    "publishedAt": "",
    "duration": "PT14M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/yeqPTVWkVGI.jpg"
  },
  {
    "id": "npC_DetW3Fk",
    "videoId": "npC_DetW3Fk",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "اسطوانة بحرينية - الحلقة 15",
    "publishedAt": "",
    "duration": "PT10M26S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/npC_DetW3Fk.jpg"
  },
  {
    "id": "EGAxDb3bJKY",
    "videoId": "EGAxDb3bJKY",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "اسطوانة بحرينية - الحلقة 16",
    "publishedAt": "",
    "duration": "PT10M35S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/EGAxDb3bJKY.jpg"
  },
  {
    "id": "vTAzvf4ARKo",
    "videoId": "vTAzvf4ARKo",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "اسطوانة بحرينية - الحلقة 17",
    "publishedAt": "",
    "duration": "PT12M36S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/vTAzvf4ARKo.jpg"
  },
  {
    "id": "mWNytYf_TO0",
    "videoId": "mWNytYf_TO0",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "اسطوانة بحرينية - الحلقة 18",
    "publishedAt": "",
    "duration": "PT11M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/mWNytYf_TO0.jpg"
  },
  {
    "id": "vletUUNO6V8",
    "videoId": "vletUUNO6V8",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "أسطوانة بحرينية - الحلقة 19",
    "publishedAt": "",
    "duration": "PT11M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/vletUUNO6V8.jpg"
  },
  {
    "id": "t3ncnkfYEv0",
    "videoId": "t3ncnkfYEv0",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "أسطوانة بحرينية - الحلقة 20",
    "publishedAt": "",
    "duration": "PT11M9S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/t3ncnkfYEv0.jpg"
  },
  {
    "id": "0UUzz629M5o",
    "videoId": "0UUzz629M5o",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "أسطوانة بحرينية - الحلقة 21",
    "publishedAt": "",
    "duration": "PT12M30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/0UUzz629M5o.jpg"
  },
  {
    "id": "qNDf0s15-wA",
    "videoId": "qNDf0s15-wA",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "أسطوانة بحرينية - الحلقة 22",
    "publishedAt": "",
    "duration": "PT14M39S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/qNDf0s15-wA.jpg"
  },
  {
    "id": "2kRz3Z-ntU8",
    "videoId": "2kRz3Z-ntU8",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "أسطوانة بحرينية - الحلقة 23",
    "publishedAt": "",
    "duration": "PT14M30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/2kRz3Z-ntU8.jpg"
  },
  {
    "id": "6U-c0oSBMd0",
    "videoId": "6U-c0oSBMd0",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "أسطوانة بحرينية - الحلقة 24",
    "publishedAt": "",
    "duration": "PT11M54S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/6U-c0oSBMd0.jpg"
  },
  {
    "id": "rFG0pMe3mw4",
    "videoId": "rFG0pMe3mw4",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "أسطوانة بحرينية - الحلقة 25",
    "publishedAt": "",
    "duration": "PT15M30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/rFG0pMe3mw4.jpg"
  },
  {
    "id": "q8T5W-mLLNA",
    "videoId": "q8T5W-mLLNA",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "أسطوانة بحرينية - الحلقة 26",
    "publishedAt": "",
    "duration": "PT12M32S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/q8T5W-mLLNA.jpg"
  },
  {
    "id": "xbYfQKYXQ_Q",
    "videoId": "xbYfQKYXQ_Q",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "أسطوانة بحرينية - الحلقة 27",
    "publishedAt": "",
    "duration": "PT12M38S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/xbYfQKYXQ_Q.jpg"
  },
  {
    "id": "zyiu3IksYWE",
    "videoId": "zyiu3IksYWE",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "أسطوانة بحرينية - الحلقة 28",
    "publishedAt": "",
    "duration": "PT12M59S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/zyiu3IksYWE.jpg"
  },
  {
    "id": "160NzTmssU4",
    "videoId": "160NzTmssU4",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "أسطوانة بحرينية - الحلقة 29",
    "publishedAt": "",
    "duration": "PT8M31S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/160NzTmssU4.jpg"
  },
  {
    "id": "U2OGRE_11i0",
    "videoId": "U2OGRE_11i0",
    "playlistId": "PLFm3_OhqZyNa7YAIUgDUrGgkP1-FvqB_i",
    "showTitle": "اسطوانة بحرينية",
    "title": "أسطوانة بحرينية - الحلقة 30",
    "publishedAt": "",
    "duration": "PT11M12S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/U2OGRE_11i0.jpg"
  },
  {
    "id": "qlP8CEgTW8s",
    "videoId": "qlP8CEgTW8s",
    "playlistId": "PLFm3_OhqZyNbvKKtLYxGBwt3VAGe7R8Pn",
    "showTitle": "مُختارات منوعة",
    "title": "جلسة iFM 2019",
    "publishedAt": "",
    "duration": "PT1M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/qlP8CEgTW8s.jpg"
  },
  {
    "id": "KsNdAMX1-EU",
    "videoId": "KsNdAMX1-EU",
    "playlistId": "PLFm3_OhqZyNbvKKtLYxGBwt3VAGe7R8Pn",
    "showTitle": "مُختارات منوعة",
    "title": "محمد الحمادي - ياليالي 🌕",
    "publishedAt": "",
    "duration": "PT8M15S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/KsNdAMX1-EU.jpg"
  },
  {
    "id": "5ZAHa8O7W4c",
    "videoId": "5ZAHa8O7W4c",
    "playlistId": "PLFm3_OhqZyNbvKKtLYxGBwt3VAGe7R8Pn",
    "showTitle": "مُختارات منوعة",
    "title": "محمد التميمي - صحيت جمرة 🔥",
    "publishedAt": "",
    "duration": "PT5M42S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5ZAHa8O7W4c.jpg"
  },
  {
    "id": "wqzDsnQfaqM",
    "videoId": "wqzDsnQfaqM",
    "playlistId": "PLFm3_OhqZyNbvKKtLYxGBwt3VAGe7R8Pn",
    "showTitle": "مُختارات منوعة",
    "title": "فيصل الانصاري - الي نساك 💨",
    "publishedAt": "",
    "duration": "PT5M35S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/wqzDsnQfaqM.jpg"
  },
  {
    "id": "IrJc7GrFgaI",
    "videoId": "IrJc7GrFgaI",
    "playlistId": "PLFm3_OhqZyNbvKKtLYxGBwt3VAGe7R8Pn",
    "showTitle": "مُختارات منوعة",
    "title": "فاضل جمعة - ضناني الشوق",
    "publishedAt": "",
    "duration": "PT5M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/IrJc7GrFgaI.jpg"
  },
  {
    "id": "z_hqKUcMpAw",
    "videoId": "z_hqKUcMpAw",
    "playlistId": "PLFm3_OhqZyNbvKKtLYxGBwt3VAGe7R8Pn",
    "showTitle": "مُختارات منوعة",
    "title": "سيروس جمعه - يابعدهم",
    "publishedAt": "",
    "duration": "PT5M30S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/z_hqKUcMpAw.jpg"
  },
  {
    "id": "0MzM-uWIWxc",
    "videoId": "0MzM-uWIWxc",
    "playlistId": "PLFm3_OhqZyNbvKKtLYxGBwt3VAGe7R8Pn",
    "showTitle": "مُختارات منوعة",
    "title": "ابراهيم دشتي - بكرة بتعود",
    "publishedAt": "",
    "duration": "PT4M57S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/0MzM-uWIWxc.jpg"
  },
  {
    "id": "m48QTUXwVDw",
    "videoId": "m48QTUXwVDw",
    "playlistId": "PLFm3_OhqZyNbvKKtLYxGBwt3VAGe7R8Pn",
    "showTitle": "مُختارات منوعة",
    "title": "فرقة بوسلمان لفن الليوة",
    "publishedAt": "",
    "duration": "PT20M54S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/m48QTUXwVDw.jpg"
  },
  {
    "id": "4SMYYDAtSQM",
    "videoId": "4SMYYDAtSQM",
    "playlistId": "PLFm3_OhqZyNbvKKtLYxGBwt3VAGe7R8Pn",
    "showTitle": "مُختارات منوعة",
    "title": "غيار - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT5M46S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/4SMYYDAtSQM.jpg"
  },
  {
    "id": "WNoKwXceQgA",
    "videoId": "WNoKwXceQgA",
    "playlistId": "PLFm3_OhqZyNbvKKtLYxGBwt3VAGe7R8Pn",
    "showTitle": "مُختارات منوعة",
    "title": "زمان والله - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT4M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/WNoKwXceQgA.jpg"
  },
  {
    "id": "5D1aGAH7pQ4",
    "videoId": "5D1aGAH7pQ4",
    "playlistId": "PLFm3_OhqZyNbvKKtLYxGBwt3VAGe7R8Pn",
    "showTitle": "مُختارات منوعة",
    "title": "يا مسيكين  - عبدالرحمن عوض",
    "publishedAt": "",
    "duration": "PT5M21S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5D1aGAH7pQ4.jpg"
  },
  {
    "id": "MK5PEYvTEbk",
    "videoId": "MK5PEYvTEbk",
    "playlistId": "PLFm3_OhqZyNbvKKtLYxGBwt3VAGe7R8Pn",
    "showTitle": "مُختارات منوعة",
    "title": "حلقة خاصة بمناسبة انعقاد القمة العربية 32 - جدة",
    "publishedAt": "",
    "duration": "PT17M17S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/MK5PEYvTEbk.jpg"
  },
  {
    "id": "x_GqaqvcWO4",
    "videoId": "x_GqaqvcWO4",
    "playlistId": "PLFm3_OhqZyNbvKKtLYxGBwt3VAGe7R8Pn",
    "showTitle": "مُختارات منوعة",
    "title": "حلقة الفنان الراحل عبدالكريم عبدالقادر",
    "publishedAt": "",
    "duration": "PT1H2M49S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/x_GqaqvcWO4.jpg"
  },
  {
    "id": "OGGZ0t2Pjuw",
    "videoId": "OGGZ0t2Pjuw",
    "playlistId": "PLFm3_OhqZyNasb3clavokmAZbvsZqLFoo",
    "showTitle": "فضاء أقرب",
    "title": "04 أجهزة الاستشعار تنقذ البشرية - عايشة الهاجري",
    "publishedAt": "",
    "duration": "PT11M49S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/OGGZ0t2Pjuw.jpg"
  },
  {
    "id": "tzxDrdywH2E",
    "videoId": "tzxDrdywH2E",
    "playlistId": "PLFm3_OhqZyNasb3clavokmAZbvsZqLFoo",
    "showTitle": "فضاء أقرب",
    "title": "03 لماذا تطلق الأقمار الصناعية - أحمد بوخاطر",
    "publishedAt": "",
    "duration": "PT9M4S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/tzxDrdywH2E.jpg"
  },
  {
    "id": "HiyWuPu-_fw",
    "videoId": "HiyWuPu-_fw",
    "playlistId": "PLFm3_OhqZyNasb3clavokmAZbvsZqLFoo",
    "showTitle": "فضاء أقرب",
    "title": "فضاء أقرب - علوم الفضاء الطريق الامثل للتنمية المستدامة",
    "publishedAt": "",
    "duration": "PT10M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/HiyWuPu-_fw.jpg"
  },
  {
    "id": "1eXyAtRGENU",
    "videoId": "1eXyAtRGENU",
    "playlistId": "PLFm3_OhqZyNakkXe4dJbakNkDQPm4zqfF",
    "showTitle": "أسئلة على الهواء",
    "title": "أسئلة على الهواء - الحلقة 8",
    "publishedAt": "",
    "duration": "PT1H2M23S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/1eXyAtRGENU.jpg"
  },
  {
    "id": "Gh9y-3gP0g8",
    "videoId": "Gh9y-3gP0g8",
    "playlistId": "PLFm3_OhqZyNakkXe4dJbakNkDQPm4zqfF",
    "showTitle": "أسئلة على الهواء",
    "title": "أسئلة على الهواء - الحلقة 7",
    "publishedAt": "",
    "duration": "PT1H1M25S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Gh9y-3gP0g8.jpg"
  },
  {
    "id": "9oobWp9OkZE",
    "videoId": "9oobWp9OkZE",
    "playlistId": "PLFm3_OhqZyNakkXe4dJbakNkDQPm4zqfF",
    "showTitle": "أسئلة على الهواء",
    "title": "أسئلة على الهواء - الحلقة 4",
    "publishedAt": "",
    "duration": "PT58M58S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/9oobWp9OkZE.jpg"
  },
  {
    "id": "Uh6nYEdgzAo",
    "videoId": "Uh6nYEdgzAo",
    "playlistId": "PLFm3_OhqZyNakkXe4dJbakNkDQPm4zqfF",
    "showTitle": "أسئلة على الهواء",
    "title": "أسئلة على الهواء - الحلقة 6",
    "publishedAt": "",
    "duration": "PT1H2M53S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/Uh6nYEdgzAo.jpg"
  },
  {
    "id": "5HACWLOF5HU",
    "videoId": "5HACWLOF5HU",
    "playlistId": "PLFm3_OhqZyNakkXe4dJbakNkDQPm4zqfF",
    "showTitle": "أسئلة على الهواء",
    "title": "أسئلة على الهواء - الحلقة 5",
    "publishedAt": "",
    "duration": "PT1H1M26S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/5HACWLOF5HU.jpg"
  },
  {
    "id": "6QjtTIQjVLs",
    "videoId": "6QjtTIQjVLs",
    "playlistId": "PLFm3_OhqZyNakkXe4dJbakNkDQPm4zqfF",
    "showTitle": "أسئلة على الهواء",
    "title": "أسئلة على الهواء - الحلقة 3",
    "publishedAt": "",
    "duration": "PT1H1M31S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/6QjtTIQjVLs.jpg"
  },
  {
    "id": "_9hz53uGcgc",
    "videoId": "_9hz53uGcgc",
    "playlistId": "PLFm3_OhqZyNakkXe4dJbakNkDQPm4zqfF",
    "showTitle": "أسئلة على الهواء",
    "title": "أسئلة على الهواء - الحلقة 2",
    "publishedAt": "",
    "duration": "PT1H34S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/_9hz53uGcgc.jpg"
  },
  {
    "id": "lRa8v516u1o",
    "videoId": "lRa8v516u1o",
    "playlistId": "PLFm3_OhqZyNakkXe4dJbakNkDQPm4zqfF",
    "showTitle": "أسئلة على الهواء",
    "title": "أسئلة على الهواء - الحلقة 1",
    "publishedAt": "",
    "duration": "PT1H1M10S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/lRa8v516u1o.jpg"
  },
  {
    "id": "i1NiegXBr3s",
    "videoId": "i1NiegXBr3s",
    "playlistId": "PLFm3_OhqZyNa3PSBCPexYmm60CIOXw7jY",
    "showTitle": "بودكاست إكسير الحياة",
    "title": "د. مريم فدا - بودكاست إكسير الحياة",
    "publishedAt": "",
    "duration": "PT14M17S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/i1NiegXBr3s.jpg"
  },
  {
    "id": "NxZn-NMEYco",
    "videoId": "NxZn-NMEYco",
    "playlistId": "PLFm3_OhqZyNa3PSBCPexYmm60CIOXw7jY",
    "showTitle": "بودكاست إكسير الحياة",
    "title": "رانية كايد - بودكاست إكسير الحياة",
    "publishedAt": "",
    "duration": "PT14M9S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/NxZn-NMEYco.jpg"
  },
  {
    "id": "7ycoyBgrwXs",
    "videoId": "7ycoyBgrwXs",
    "playlistId": "PLFm3_OhqZyNa3PSBCPexYmm60CIOXw7jY",
    "showTitle": "بودكاست إكسير الحياة",
    "title": "فراس سلعس - بودكاست إكسير الحياة",
    "publishedAt": "",
    "duration": "PT14M54S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/7ycoyBgrwXs.jpg"
  },
  {
    "id": "nIFTsi3EUeA",
    "videoId": "nIFTsi3EUeA",
    "playlistId": "PLFm3_OhqZyNa3PSBCPexYmm60CIOXw7jY",
    "showTitle": "بودكاست إكسير الحياة",
    "title": "محمد الجلابي - بودكاست إكسير الحياة",
    "publishedAt": "",
    "duration": "PT17M41S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/nIFTsi3EUeA.jpg"
  },
  {
    "id": "CIKE52YeQxo",
    "videoId": "CIKE52YeQxo",
    "playlistId": "PLFm3_OhqZyNa3PSBCPexYmm60CIOXw7jY",
    "showTitle": "بودكاست إكسير الحياة",
    "title": "أبرار - بودكاست إكسير الحياة",
    "publishedAt": "",
    "duration": "PT12M12S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/CIKE52YeQxo.jpg"
  },
  {
    "id": "cjWr7__rtok",
    "videoId": "cjWr7__rtok",
    "playlistId": "PLFm3_OhqZyNa3PSBCPexYmm60CIOXw7jY",
    "showTitle": "بودكاست إكسير الحياة",
    "title": "محمد أمان - بودكاست إكسير الحياة",
    "publishedAt": "",
    "duration": "PT13M28S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/cjWr7__rtok.jpg"
  },
  {
    "id": "BmUgdw2tyuQ",
    "videoId": "BmUgdw2tyuQ",
    "playlistId": "PLFm3_OhqZyNa3PSBCPexYmm60CIOXw7jY",
    "showTitle": "بودكاست إكسير الحياة",
    "title": "الدكتور سامر بشير - بودكاست إكسير الحياة",
    "publishedAt": "",
    "duration": "PT15M0S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/BmUgdw2tyuQ.jpg"
  },
  {
    "id": "zLoDS9YNFtE",
    "videoId": "zLoDS9YNFtE",
    "playlistId": "PLFm3_OhqZyNa3PSBCPexYmm60CIOXw7jY",
    "showTitle": "بودكاست إكسير الحياة",
    "title": "الدكتور صبحي عاقلة - بودكاست إكسير الحياة",
    "publishedAt": "",
    "duration": "PT14M45S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/zLoDS9YNFtE.jpg"
  },
  {
    "id": "8-D3Cv7DLtE",
    "videoId": "8-D3Cv7DLtE",
    "playlistId": "PLFm3_OhqZyNa3PSBCPexYmm60CIOXw7jY",
    "showTitle": "بودكاست إكسير الحياة",
    "title": "الدكتور إسحاق مبارك - بودكاست إكسير الحياة",
    "publishedAt": "",
    "duration": "PT15M1S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/8-D3Cv7DLtE.jpg"
  },
  {
    "id": "M9r6o2Uofsc",
    "videoId": "M9r6o2Uofsc",
    "playlistId": "PLFm3_OhqZyNa3PSBCPexYmm60CIOXw7jY",
    "showTitle": "بودكاست إكسير الحياة",
    "title": "أميرة الدرازي - بودكاست إكسير الحياة",
    "publishedAt": "",
    "duration": "PT11M48S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/M9r6o2Uofsc.jpg"
  },
  {
    "id": "9hCudaCInis",
    "videoId": "9hCudaCInis",
    "playlistId": "PLFm3_OhqZyNa3PSBCPexYmm60CIOXw7jY",
    "showTitle": "بودكاست إكسير الحياة",
    "title": "الدكتور حسن عبدالجبار - بودكاست إكسير الحياة",
    "publishedAt": "",
    "duration": "PT14M56S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/9hCudaCInis.jpg"
  },
  {
    "id": "pqoHM10vcqk",
    "videoId": "pqoHM10vcqk",
    "playlistId": "PLFm3_OhqZyNa3PSBCPexYmm60CIOXw7jY",
    "showTitle": "بودكاست إكسير الحياة",
    "title": "المدربة كوثر محمد - بودكاست إكسير الحياة",
    "publishedAt": "",
    "duration": "PT14M6S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/pqoHM10vcqk.jpg"
  },
  {
    "id": "WVthS_oithU",
    "videoId": "WVthS_oithU",
    "playlistId": "PLFm3_OhqZyNa3PSBCPexYmm60CIOXw7jY",
    "showTitle": "بودكاست إكسير الحياة",
    "title": "أحمد الجودر - بودكاست إكسير الحياة",
    "publishedAt": "",
    "duration": "PT24M29S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/WVthS_oithU.jpg"
  },
  {
    "id": "AOvJtsckXts",
    "videoId": "AOvJtsckXts",
    "playlistId": "PLFm3_OhqZyNa3PSBCPexYmm60CIOXw7jY",
    "showTitle": "بودكاست إكسير الحياة",
    "title": "أحمد العلوي - بودكاست إكسير الحياة",
    "publishedAt": "",
    "duration": "PT15M2S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/AOvJtsckXts.jpg"
  },
  {
    "id": "XltCy-wQP8w",
    "videoId": "XltCy-wQP8w",
    "playlistId": "PLFm3_OhqZyNa3PSBCPexYmm60CIOXw7jY",
    "showTitle": "بودكاست إكسير الحياة",
    "title": "الدكتورة هالة رضي - بودكاست إكسير الحياة",
    "publishedAt": "",
    "duration": "PT12M21S",
    "thumbnail": "https://cloud.adhari.com/audio/newsletter-assets/thumbnails/XltCy-wQP8w.jpg"
  }
];
