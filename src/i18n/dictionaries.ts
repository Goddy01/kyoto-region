import type { Locale } from "./config";

type DeepString<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends readonly (infer U)[]
      ? ReadonlyArray<DeepString<U>>
      : T[K] extends object
        ? DeepString<T[K]>
        : T[K];
};

const en = {
  nav: {
    about: "About",
    results: "Results",
    roster: "Roster",
    staff: "Staff",
    recruitment: "Recruitment",
    community: "Community",
    events: "Events",
    news: "News",
    partners: "Partners",
    contact: "Contact",
  },
  common: {
    join: "Join Kyoto Region",
    contact: "Contact",
    readMore: "Read more",
    readArticle: "Read article",
    scroll: "Scroll",
    viewAllResults: "View all results",
    fullRoster: "Full roster",
    joinTheOrg: "Join the org",
    apply: "Apply",
    backToRoster: "Back to roster",
    news: "News",
    featured: "Featured",
    all: "All",
    language: "Language",
    switchToEn: "Switch to English",
    switchToJa: "Switch to Japanese",
  },
  footer: {
    organization: "Organization",
    compete: "Compete",
    connect: "Connect",
    rights: "All rights reserved.",
    bloom: "Precision in bloom",
    tagline: "Precision in bloom. Dominance in silence.",
  },
  home: {
    heroEyebrow: "Esports Organization · 京",
    joinCta: "Join Kyoto Region",
    enter: "Enter",
    marquee: [
      "Precision in bloom",
      "Competitive excellence",
      "京 · Kyoto Region",
      "Challengers Champions 2026",
      "Craft over noise",
      "Join the region",
    ],
    philosophyEyebrow: "三 · Philosophy · Four movements",
    philosophyTitle: "How Kyoto moves.",
    legacyEyebrow: "Legacy",
    legacyTitle: "Featured achievements",
    legacyDesc: "Titles earned through discipline—not noise.",
    newsEyebrow: "News",
    newsTitle: "Latest announcement",
    newsDesc: "Stay inside the bloom.",
    rosterEyebrow: "Roster",
    rosterTitle: "The sharp edge",
    rosterDesc: "Athletes forged for pressure.",
    movements: [
      {
        label: "Restraint",
        title: "Silence before the shot",
        body: "We prepare like monks. No noise. No fluff. Intent arrives before the first round.",
      },
      {
        label: "Bloom",
        title: "Violence with elegance",
        body: "When the window opens, Kyoto doesn't hesitate — executions land clean and cinematic.",
      },
      {
        label: "Bond",
        title: "One call, five minds",
        body: "Chemistry is our map pool. Trust forged in VOD reviews and quiet bootcamp dinners.",
      },
      {
        label: "Peak",
        title: "Hardware as proof",
        body: "Titles are receipts. Every placement is evidence of hours the public never sees.",
      },
    ],
  },
  pages: {
    about: {
      eyebrow: "About",
      titleLead: "Quiet discipline.",
      titleAccent: "Sudden bloom.",
      description:
        "Kyoto Region was founded to prove Japanese minimalism and modern esports intensity can share one house.",
      mission: "Mission",
      vision: "Vision",
      philosophy: "Competitive Philosophy",
      values: "Community Values",
      missionBody:
        "Build a Pacific esports house where craft, culture, and competition reinforce each other—never compromise one for another.",
      visionBody:
        "Stand among the world's most respected organizations—recognized as much for presence as for trophies.",
      philosophyBody:
        "Prepare like monks. Execute like predators. Review without ego. Win with elegance.",
      valuesBody:
        "Respect over toxicity. Ambition over arrogance. Fans are part of the roster—treated with clarity and care.",
      timelineEyebrow: "Timeline",
      timelineTitle: "Milestones",
      timelineDesc: "From foundation to Challengers crown.",
    },
    results: {
      eyebrow: "Results",
      titleLead: "Hardware.",
      titleAccent: "Hard-earned.",
      description:
        "Every placement is a receipt—proof of hours the public never sees.",
      trophiesEyebrow: "Trophies",
      trophiesTitle: "Featured hardware",
      trophiesDesc: "Championship moments that defined Kyoto Region.",
      archiveEyebrow: "Archive",
      archiveTitle: "Tournament placements",
    },
    roster: {
      eyebrow: "Roster",
      titleLead: "Athletes of",
      titleAccent: "the region.",
      description:
        "A multi-title squad built for pressure, chemistry, and cinematic play.",
      achievements: "Achievements",
    },
    staff: {
      eyebrow: "Staff",
      titleLead: "The house",
      titleAccent: "behind the stage.",
      description:
        "Operators, coaches, and creatives who keep Kyoto Region sharp.",
      owners: "Owners",
      management: "Management",
      coaches: "Coaches",
      designers: "Designers",
      editors: "Editors",
      moderators: "Moderators",
    },
    recruitment: {
      eyebrow: "Recruitment",
      titleLead: "Apply to the",
      titleAccent: "region.",
      description:
        "We hire for standards, not noise. Show us craft, consistency, and hunger.",
    },
    community: {
      eyebrow: "Community",
      titleLead: "Where fans",
      titleAccent: "become family.",
      description:
        "Kyoto Region isn't a broadcast—it's a gathering. Join the Discord and stay close.",
      discordTitle: "Enter the garden",
      discordBody:
        "Real-time updates, exclusive VODs, and a culture that prizes respect over toxicity.",
      joinDiscord: "Join Discord",
      engageEyebrow: "Engage",
      engageTitle: "How we gather",
      engageDesc: "Programs designed for presence—not spam.",
      features: [
        {
          title: "Discord HQ",
          body: "Matchday threads, VODs, creator drops, and direct access to the community team.",
        },
        {
          title: "Community Events",
          body: "Watch parties, creator nights, and Sakura Community Week programming.",
        },
        {
          title: "Giveaways",
          body: "Merch, peripherals, and signed drops reserved for active community members.",
        },
        {
          title: "Fan Tournaments",
          body: "Bracketed showcases where fans compete under the Kyoto banner.",
        },
      ],
    },
    events: {
      eyebrow: "Events",
      titleLead: "Next on the",
      titleAccent: "calendar.",
      description:
        "Tournaments, opponents, and live status—always current for the prototype.",
      upcoming: "Upcoming",
      live: "Live",
      completed: "Completed",
      vs: "vs",
    },
    news: {
      eyebrow: "News",
      titleLead: "Signals from",
      titleAccent: "the region.",
      description:
        "Announcements, match reports, roster moves, and community drops.",
      announcement: "Announcement",
      match: "Match",
      community: "Community",
      roster: "Roster",
    },
    partners: {
      eyebrow: "Partners",
      titleLead: "Alliances with",
      titleAccent: "intention.",
      description:
        "We partner with brands that respect restraint, performance, and craft.",
      sponsors: "Sponsors",
      partners: "Partners",
      affiliates: "Affiliates",
      sponsorsDesc: "Brands powering competitive excellence.",
      partnersDesc: "Long-term allies in craft and culture.",
      affiliatesDesc: "Creators and communities in the Kyoto orbit.",
      partnerCtaEyebrow: "Partner with us",
      partnerCtaTitle: "Build with Kyoto",
      partnerCtaBody:
        "Serious inquiries welcome. Let's design something worth remembering.",
      startConversation: "Start a conversation",
    },
    contact: {
      eyebrow: "Contact",
      titleLead: "Speak with",
      titleAccent: "Kyoto Region.",
      description: "Partnerships, applications, press—reach out cleanly.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send message",
      received: "Message received",
      receivedBody:
        "Prototype confirmation only—no backend is connected yet. Your client can wire this later.",
      sendAnother: "Send another",
      applyingFor: "Applying for:",
    },
  },
};

export type Dictionary = DeepString<typeof en>;

const ja: Dictionary = {
  nav: {
    about: "私たちについて",
    results: "戦績",
    roster: "ロスター",
    staff: "スタッフ",
    recruitment: "募集",
    community: "コミュニティ",
    events: "イベント",
    news: "ニュース",
    partners: "パートナー",
    contact: "お問い合わせ",
  },
  common: {
    join: "京都リージョンに参加",
    contact: "お問い合わせ",
    readMore: "続きを読む",
    readArticle: "記事を読む",
    scroll: "スクロール",
    viewAllResults: "すべての戦績を見る",
    fullRoster: "フルロスター",
    joinTheOrg: "参加する",
    apply: "応募する",
    backToRoster: "ロスターに戻る",
    news: "ニュース",
    featured: "特集",
    all: "すべて",
    language: "言語",
    switchToEn: "英語に切り替える",
    switchToJa: "日本語に切り替える",
  },
  footer: {
    organization: "組織",
    compete: "競技",
    connect: "つながる",
    rights: "無断転載を禁じます。",
    bloom: "静かに咲く、精密さ。",
    tagline: "静かに咲く精密さ。沈黙の中の支配。",
  },
  home: {
    heroEyebrow: "eスポーツ組織 · 京",
    joinCta: "京都リージョンに参加",
    enter: "進む",
    marquee: [
      "静かに咲く精密さ",
      "競技の卓越性",
      "京 · Kyoto Region",
      "チャレンジャーズ優勝 2026",
      "騒がしさより、匠の技",
      "リージョンへ参加",
    ],
    philosophyEyebrow: "三 · 哲学 · 四つの動き",
    philosophyTitle: "京都の動き方。",
    legacyEyebrow: "レガシー",
    legacyTitle: "主な実績",
    legacyDesc: "雑音ではなく、規律が生んだ称号。",
    newsEyebrow: "ニュース",
    newsTitle: "最新のお知らせ",
    newsDesc: "咲き続ける情報を、近くで。",
    rosterEyebrow: "ロスター",
    rosterTitle: "鋭い刃",
    rosterDesc: "圧力の中で鍛えられた選手たち。",
    movements: [
      {
        label: "慎",
        title: "撃つ前の沈黙",
        body: "僧のように整える。無駄な音もなく、余分もない。初手の前に、意思がある。",
      },
      {
        label: "咲",
        title: "優雅な暴力",
        body: "窓が開いた瞬間、京都は迷わない——クリーンで、映画のような実行。",
      },
      {
        label: "結",
        title: "一つのコール、五つの意思",
        body: "ケミストリーがマッププール。VODと静かな合宿が、信頼を鍛える。",
      },
      {
        label: "極",
        title: "トロフィーは証拠",
        body: "順位はレシート。観客の見えない時間が、形になったものだ。",
      },
    ],
  },
  pages: {
    about: {
      eyebrow: "私たちについて",
      titleLead: "静かな規律。",
      titleAccent: "突然の開花。",
      description:
        "京都リージョンは、日本のミニマリズムと現代eスポーツの熱量が同じ屋根の下にあることを証明するために生まれました。",
      mission: "ミッション",
      vision: "ビジョン",
      philosophy: "競技哲学",
      values: "コミュニティの価値観",
      missionBody:
        "クラフト・文化・競技が互いに強め合うパシフィックのeスポーツハウスを築く——どれも犠牲にしない。",
      visionBody:
        "世界で最も敬われる組織の一員となる——トロフィーと同様に、立ち振る舞いでも認められる存在へ。",
      philosophyBody:
        "僧のように整え、捕食者のように実行し、エゴなく振り返り、優雅に勝つ。",
      valuesBody:
        "毒性より敬意。傲慢より野心。ファンもロスターの一部——明快さと敬意をもって向き合う。",
      timelineEyebrow: "タイムライン",
      timelineTitle: "マイルストーン",
      timelineDesc: "創設からチャレンジャーズ戴冠まで。",
    },
    results: {
      eyebrow: "戦績",
      titleLead: "ハードウェア。",
      titleAccent: "勝ち取った証。",
      description: "すべての順位はレシート——観客の見えない時間の証拠。",
      trophiesEyebrow: "トロフィー",
      trophiesTitle: "主なハードウェア",
      trophiesDesc: "京都リージョンを定義した優勝の瞬間。",
      archiveEyebrow: "アーカイブ",
      archiveTitle: "トーナメント成績",
    },
    roster: {
      eyebrow: "ロスター",
      titleLead: "リージョンの",
      titleAccent: "アスリートたち。",
      description:
        "圧力・ケミストリー・映像美のために組み上げられた、複数タイトルの部隊。",
      achievements: "実績",
    },
    staff: {
      eyebrow: "スタッフ",
      titleLead: "舞台裏の",
      titleAccent: "家。",
      description: "京都リージョンを鋭く保つ運営・コーチ・クリエイティブ。",
      owners: "オーナー",
      management: "マネジメント",
      coaches: "コーチ",
      designers: "デザイナー",
      editors: "エディター",
      moderators: "モデレーター",
    },
    recruitment: {
      eyebrow: "募集",
      titleLead: "リージョンへ",
      titleAccent: "応募する。",
      description:
        "騒がしさではなく基準で選ぶ。クラフト・継続・飢えを見せてほしい。",
    },
    community: {
      eyebrow: "コミュニティ",
      titleLead: "ファンが",
      titleAccent: "家族になる場所。",
      description:
        "京都リージョンは放送ではない——集いだ。Discordに参加して、近くにいてほしい。",
      discordTitle: "庭へ入る",
      discordBody:
        "リアルタイム更新、限定VOD、毒性より敬意を重んじる文化。",
      joinDiscord: "Discordに参加",
      engageEyebrow: "交流",
      engageTitle: "集まり方",
      engageDesc: "スパムではなく、居場所のためのプログラム。",
      features: [
        {
          title: "Discord HQ",
          body: "試合日のスレッド、VOD、クリエイター配信、コミュニティチームへの直接アクセス。",
        },
        {
          title: "コミュニティイベント",
          body: "ウォッチパーティ、クリエイターナイト、桜コミュニティウィークなど。",
        },
        {
          title: "ギブアウェイ",
          body: "アクティブなコミュニティ向けのマーチャント、周辺機器、サイン入りドロップ。",
        },
        {
          title: "ファン大会",
          body: "京都の旗の下でファンが競うブラケット型ショーケース。",
        },
      ],
    },
    events: {
      eyebrow: "イベント",
      titleLead: "次の",
      titleAccent: "カレンダー。",
      description:
        "大会・対戦相手・ステータス——プロトタイプ向けに常に最新。",
      upcoming: "予定",
      live: "配信中",
      completed: "終了",
      vs: "対",
    },
    news: {
      eyebrow: "ニュース",
      titleLead: "リージョンからの",
      titleAccent: "シグナル。",
      description: "お知らせ、試合レポート、ロスター変更、コミュニティ情報。",
      announcement: "お知らせ",
      match: "試合",
      community: "コミュニティ",
      roster: "ロスター",
    },
    partners: {
      eyebrow: "パートナー",
      titleLead: "意思ある",
      titleAccent: "同盟。",
      description:
        "抑制・パフォーマンス・クラフトを理解するブランドと組む。",
      sponsors: "スポンサー",
      partners: "パートナー",
      affiliates: "アフィリエイト",
      sponsorsDesc: "競技の卓越を支えるブランド。",
      partnersDesc: "クラフトと文化の長期的な同志。",
      affiliatesDesc: "京都の軌道にあるクリエイターとコミュニティ。",
      partnerCtaEyebrow: "パートナーになる",
      partnerCtaTitle: "京都とつくる",
      partnerCtaBody:
        "本気の問い合わせを歓迎します。記憶に残るものを設計しましょう。",
      startConversation: "話を始める",
    },
    contact: {
      eyebrow: "お問い合わせ",
      titleLead: "京都リージョンに",
      titleAccent: "話す。",
      description: "提携・応募・取材——澄んだ一本の線で。",
      name: "お名前",
      email: "メール",
      subject: "件名",
      message: "メッセージ",
      send: "送信する",
      received: "受信しました",
      receivedBody:
        "プロトタイプの確認です。バックエンドは未接続です。後で接続できます。",
      sendAnother: "もう一度送る",
      applyingFor: "応募職種：",
    },
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  ja,
};
