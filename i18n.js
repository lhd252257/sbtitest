// ===== i18n.js — 中英文切换 =====

const LANGS = {
  en: {
    // Nav
    nav_home: 'Home',
    nav_test: 'Take the Test',
    nav_retake: 'Retake Test',
    lang_btn: '中文',

    // Index — Hero
    hero_badge: '🔥 Trending in 2026',
    hero_h1: 'The SBTI Test — Discover Your True Personality Type',
    hero_sub: 'The SBTI test is the internet\'s most entertaining personality quiz. Answer 31 brutally honest questions and find out which of the 27 SBTI personality types you really are. No fluff, no corporate speak — just raw, hilarious self-discovery.',
    hero_cta: 'Start Free SBTI Test →',
    stat_q: 'Questions',
    stat_t: 'Personality Types',
    stat_f: 'No Sign-up',

    // What is
    what_h2: 'What Is the SBTI Test?',
    what_p1: 'The <strong>SBTI test</strong> is a viral online personality test that has taken social media by storm. Unlike traditional personality assessments like MBTI or the Big Five, the SBTI test takes a refreshingly irreverent approach to self-discovery. The SBTI test asks you 31 carefully crafted questions about your relationships, habits, ambitions, and reactions to absurd everyday scenarios.',
    what_p2: 'What makes the SBTI test unique is its blend of genuine psychological insight and internet humor. Each question in the SBTI test is designed to reveal something real about how you think, feel, and behave — but the results are delivered with a comedic twist that makes sharing your SBTI test result irresistible.',
    what_p3: 'The SBTI test was originally created by a Chinese content creator and quickly spread across social platforms. Today, millions of people worldwide have taken the SBTI test to find out whether they\'re a BOSS, a MONK, a JOKE-R, or one of 24 other unforgettable personality archetypes.',
    why_h3: 'Why Take the SBTI Test?',
    why_1: '✅ Completely free — no account needed',
    why_2: '✅ Only 31 questions, done in under 5 minutes',
    why_3: '✅ 27 unique SBTI personality types',
    why_4: '✅ Shareable results for social media',
    why_5: '✅ Surprisingly accurate self-reflection',
    why_6: '✅ Updated for 2026 with fresh questions',
    why_cta: 'Take the SBTI Test Free',

    // How
    how_h2: 'How Does the SBTI Test Work?',
    how_sub: 'The SBTI test is straightforward. Here\'s what to expect when you take the SBTI test:',
    step1_h: 'Answer 31 Questions',
    step1_p: 'The SBTI test presents 31 multiple-choice questions. Each question has three options (A, B, or C). Some SBTI test questions are serious, some are absurd — all of them are revealing.',
    step2_h: 'Get Your SBTI Result',
    step2_p: 'After completing all 31 SBTI test questions, your answers are analyzed and matched to one of 27 personality types. Your SBTI test result includes a type code and a description.',
    step3_h: 'Share Your Type',
    step3_p: 'Share your SBTI test result with friends and challenge them to take the SBTI test too. Compare types and see who gets the most chaotic result.',

    // Types
    types_h2: 'SBTI Test Personality Types',
    types_sub: 'The SBTI test can reveal any of these 27 personality archetypes. Which one will your SBTI test result be?',
    types_cta: 'Find Out Your SBTI Type →',

    // FAQ
    faq_h2: 'SBTI Test FAQ',
    faq_q1: 'What does SBTI stand for?',
    faq_a1: 'SBTI stands for a humorous personality classification system inspired by — but very different from — the MBTI (Myers-Briggs Type Indicator). The SBTI test uses its own unique set of type codes that reflect internet culture and modern personality archetypes. The SBTI test is not a clinical assessment; it\'s designed for entertainment and self-reflection.',
    faq_q2: 'Is the SBTI test accurate?',
    faq_a2: 'The SBTI test is primarily designed for fun, but many users find their SBTI test results surprisingly relatable. The questions in the SBTI test touch on real psychological dimensions like attachment style, ambition, social behavior, and self-awareness. Take your SBTI test result as a fun mirror, not a diagnosis.',
    faq_q3: 'How long does the SBTI test take?',
    faq_a3: 'Most people complete the SBTI test in 3 to 5 minutes. The SBTI test has 31 questions, each with three answer choices. There\'s no time limit, so you can take the SBTI test at your own pace.',
    faq_q4: 'Can I retake the SBTI test?',
    faq_a4: 'Yes! You can retake the SBTI test as many times as you like. Many people take the SBTI test multiple times to see if their results change depending on their mood or mindset. The SBTI test is free and requires no account.',
    faq_q5: 'How many personality types does the SBTI test have?',
    faq_a5: 'The SBTI test has 27 distinct personality types, ranging from BOSS (the natural leader) to IMFW (the lovable slacker). Each SBTI test result comes with a unique description that captures the essence of that personality archetype.',
    faq_q6: 'Where did the SBTI test come from?',
    faq_a6: 'The SBTI test was originally created by a Chinese content creator on Bilibili. It quickly went viral across Chinese social media platforms before spreading internationally. The SBTI test resonated with millions because it combines genuine self-reflection with the kind of absurd humor that defines internet culture.',

    // CTA
    cta_h2: 'Ready to Take the SBTI Test?',
    cta_p: 'Join millions of people who have already discovered their SBTI personality type. The SBTI test is free, fast, and surprisingly revealing. Take the SBTI test now and find out which of the 27 types you really are.',
    cta_btn: 'Start the SBTI Test — It\'s Free →',

    // Footer
    footer_tag: 'A fun, free personality test inspired by internet culture. Not affiliated with any clinical psychology organization.',
    footer_types_h: 'Personality Types',
    footer_copy: '© 2026 SBTI Test. Original concept by Bilibili creator @蛆肉儿串儿. For entertainment purposes only.',

    // Test page
    test_h1: 'SBTI Test — 31 Questions',
    test_sub: 'Answer every question honestly. Your SBTI test result depends on it.',
    progress_hint: 'Answer all questions to unlock your SBTI test result.',
    btn_restart: 'Restart',
    btn_submit: 'Submit & See Result',

    // Result page
    result_badge: '🎉 Your SBTI Test Result',
    result_retake: 'Retake the SBTI Test',
    result_share: 'Share My Result',
    result_home: 'Back to Home',
    result_h2: 'About Your SBTI Test Result',
    result_p1: 'Your SBTI test result is calculated based on your answers to all 31 questions across multiple psychological dimensions, including attachment style, independence, ambition, social orientation, self-awareness, cynicism, and planning tendency.',
    result_p2: 'The SBTI test evaluates how you respond to real-life scenarios — from relationship situations to absurd hypothetical challenges — and maps your response patterns to one of 27 distinct personality archetypes. Each SBTI test result captures a genuine aspect of your personality, even if it\'s delivered with a comedic twist.',
    result_p3: 'Remember: the SBTI test is designed for fun and self-reflection, not clinical diagnosis. If your SBTI test result doesn\'t feel right, try retaking the test and answering more spontaneously. The most accurate SBTI test results come from gut-reaction answers, not overthought ones.',
    result_again: 'Take the SBTI Test Again',
    no_result: 'No SBTI test result found. Please take the test first.',
    no_result_cta: 'Take the SBTI Test →',

    // footer quick
    footer_quick: 'Quick Links',
  },

  zh: {
    nav_home: '首页',
    nav_test: '开始测试',
    nav_retake: '重新测试',
    lang_btn: 'English',

    hero_badge: '🔥 2026 最火人格测试',
    hero_h1: 'SBTI 测试 — 发现你的真实人格类型',
    hero_sub: 'SBTI 测试是互联网上最有趣的人格测验。回答 31 道直击灵魂的问题，找出你是 27 种 SBTI 人格类型中的哪一种。不废话、不鸡汤——就是纯纯的自我挖掘与搞笑输出。',
    hero_cta: '免费开始 SBTI 测试 →',
    stat_q: '道题目',
    stat_t: '种人格类型',
    stat_f: '免费无需注册',

    what_h2: '什么是 SBTI 测试？',
    what_p1: '<strong>SBTI 测试</strong>是一款风靡社交媒体的爆款人格测验。与 MBTI 或大五人格等传统测评不同，SBTI 测试用一种清爽又不正经的方式帮你认识自己。测试包含 31 道精心设计的题目，涵盖情感关系、日常习惯、人生野心，以及各种离谱日常场景中的反应。',
    what_p2: 'SBTI 测试的独特之处在于——它将真实的心理洞察与网络梗文化完美融合。每道题都能揭示你思考、感受和行为的真实模式，但结果会以幽默的方式呈现，让你忍不住截图分享。',
    what_p3: 'SBTI 测试最初由 B 站创作者发起，迅速在各大社交平台病毒式传播。如今，全球数百万人通过 SBTI 测试，发现自己究竟是 BOSS（领导者）、MONK（僧人）、JOKE-R（小丑），还是其他 24 种令人难忘的人格原型。',
    why_h3: '为什么要做 SBTI 测试？',
    why_1: '✅ 完全免费，无需注册',
    why_2: '✅ 仅 31 道题，5 分钟内完成',
    why_3: '✅ 27 种独特的 SBTI 人格类型',
    why_4: '✅ 结果可直接分享到社交媒体',
    why_5: '✅ 出乎意料的准确自我认知',
    why_6: '✅ 2026 年全新题目更新',
    why_cta: '免费做 SBTI 测试',

    how_h2: 'SBTI 测试怎么玩？',
    how_sub: 'SBTI 测试流程很简单，以下是你参与时的完整体验：',
    step1_h: '回答 31 道题目',
    step1_p: 'SBTI 测试共有 31 道选择题，每题三个选项（A、B 或 C）。有些题目认真，有些题目离谱，但每道题都在悄悄揭示你的真实性格。',
    step2_h: '获取你的 SBTI 结果',
    step2_p: '完成全部 31 道题后，系统将根据你的答案分析并匹配到 27 种人格类型之一。你的 SBTI 测试结果包含一个类型代码和详细描述。',
    step3_h: '分享你的类型',
    step3_p: '将你的 SBTI 测试结果分享给朋友，邀请他们也来做测试。互相比较类型，看看谁的结果最离谱。',

    types_h2: 'SBTI 测试人格类型一览',
    types_sub: 'SBTI 测试可能揭示以下 27 种人格原型中的一种，你会是哪个？',
    types_cta: '测试看看你是哪种类型 →',

    faq_h2: 'SBTI 测试常见问题',
    faq_q1: 'SBTI 是什么意思？',
    faq_a1: 'SBTI 是一套受 MBTI（Myers-Briggs 类型指标）启发但完全不同的幽默人格分类系统。SBTI 测试采用一套独特的类型代码，反映互联网文化与现代人格原型。SBTI 测试不是临床评估工具，它是为了娱乐与自我反思而设计的。',
    faq_q2: 'SBTI 测试准确吗？',
    faq_a2: 'SBTI 测试主要以娱乐为目的，但很多用户发现自己的 SBTI 测试结果出乎意料地贴切。测试题目涉及真实的心理维度，包括依恋风格、野心、社交行为和自我认知。把你的 SBTI 测试结果当作一面好玩的镜子，而不是诊断报告。',
    faq_q3: 'SBTI 测试要做多久？',
    faq_a3: '大多数人在 3 到 5 分钟内完成 SBTI 测试。测试共 31 道题，每题三个选项。没有时间限制，按自己的节奏作答即可。',
    faq_q4: '可以重新做 SBTI 测试吗？',
    faq_a4: '当然！你可以随时重做 SBTI 测试，次数不限。很多人会多次测试，看看不同心情下结果是否会变化。SBTI 测试完全免费，无需账号。',
    faq_q5: 'SBTI 测试有多少种人格类型？',
    faq_a5: 'SBTI 测试共有 27 种不同的人格类型，从 BOSS（天生领导者）到 IMFW（可爱废物）都有。每种 SBTI 测试结果都附有独特描述，精准捕捉该人格原型的核心特征。',
    faq_q6: 'SBTI 测试是从哪里来的？',
    faq_a6: 'SBTI 测试最初由一位 B 站创作者发起，迅速在各中文社交平台病毒式传播，随后走向国际。SBTI 测试之所以引发共鸣，是因为它将真实的自我反思与互联网梗文化特有的离谱幽默完美结合。',

    cta_h2: '准备好做 SBTI 测试了吗？',
    cta_p: '加入已经发现自己 SBTI 人格类型的数百万人行列。SBTI 测试免费、快速，结果出人意料地准确。现在就做 SBTI 测试，发现你究竟是 27 种类型中的哪一种。',
    cta_btn: '开始 SBTI 测试 — 完全免费 →',

    footer_tag: '一个受互联网文化启发的免费人格测试，与任何临床心理机构无关。',
    footer_types_h: '人格类型',
    footer_copy: '© 2026 SBTI 测试。原始概念来自 B 站创作者 @蛆肉儿串儿，仅供娱乐。',

    test_h1: 'SBTI 测试 — 31 道题',
    test_sub: '诚实作答，你的 SBTI 测试结果取决于此。',
    progress_hint: '回答所有题目，解锁你的 SBTI 测试结果。',
    btn_restart: '重新开始',
    btn_submit: '提交并查看结果',

    result_badge: '🎉 你的 SBTI 测试结果',
    result_retake: '重新做 SBTI 测试',
    result_share: '分享我的结果',
    result_home: '返回首页',
    result_h2: '关于你的 SBTI 测试结果',
    result_p1: '你的 SBTI 测试结果基于 31 道题目的作答，综合评估了多个心理维度，包括依恋风格、独立性、野心、社交倾向、自我认知、犬儒程度和计划性。',
    result_p2: 'SBTI 测试通过你对各种现实场景的反应——从情感关系到离谱假设——将你的答题模式映射到 27 种人格原型之一。每个 SBTI 测试结果都捕捉了你性格中真实的一面，即使呈现方式带着喜剧色彩。',
    result_p3: '记住：SBTI 测试是为了娱乐和自我反思而设计的，不是临床诊断。如果你觉得结果不准，可以重新测试，尽量凭直觉作答。凭直觉给出的答案往往能得到最准确的 SBTI 测试结果。',
    result_again: '再做一次 SBTI 测试',
    no_result: '未找到 SBTI 测试结果，请先完成测试。',
    no_result_cta: '去做 SBTI 测试 →',

    footer_quick: '快速链接',
  }
};

// Type names & descriptions in Chinese
const TYPE_ZH = {
  BOSS:     { name: '领导者', desc: '你天生就是 BOSS。你设定目标，你全力追逐，并且期待其他人跟上你的节奏。你野心勃勃、自我认知清晰，对平庸零容忍。人们要么被你的冲劲所折服，要么被你吓到——而你对这两种反应都无所谓。SBTI 测试已经认定：你生来就是带头的人。' },
  MONK:     { name: '僧人', desc: '你的 SBTI 测试结果是 MONK。你已经超然于日常生活的鸡毛蒜皮之上。感情？太复杂了。野心？无所谓。你找到了一种大多数人穷尽一生都在追寻的内心平静。有人叫它顿悟，有人叫它摆烂，你叫它——普通的星期二。' },
  SEXY:     { name: '尤物', desc: 'SEXY 是你的 SBTI 测试结果——说真的，意料之中。你有一种让人无法抗拒的磁场。社交自如、情商在线，知道怎么拿捏全场气氛。SBTI 测试认可你的魅力，请善用它。' },
  CTRL:     { name: '拿捏者', desc: '你的 SBTI 测试结果是 CTRL。你喜欢按自己的方式、自己的时间表、自己的计划行事。你不是控制欲强——你只是比别人更对。SBTI 测试确认：你对秩序有极致追求，要是大家都听你的，世界真的会更好。' },
  GOGO:     { name: '行者', desc: 'GOGO 是你的 SBTI 测试结果。你不喜欢想太多，直接上就行。别人还在列利弊清单，你早就把事情搞定了。你的能量有感染力，执行力是传说级别的，待办事项永远比别人少。' },
  HHHH:     { name: '傻乐者', desc: '你的 SBTI 测试结果是 HHHH。人生是一场喜剧，而你是最好的观众。你在所有事情里都能找到乐子，毫不费力地自嘲，你的存在让任何场合都变得轻松。SBTI 测试看见了你：纯粹的、未经雕琢的快乐本乐。' },
  SOLO:     { name: '孤儿', desc: 'SOLO 是你的 SBTI 测试结果。你不需要人群，你需要空间。深层次的关系对你来说很稀有，但一旦发生，就是真的。你自给自足、独立自主，对那些一见面就过分热情的人保持着健康的警惕。SBTI 测试尊重你的边界。' },
  FAKE:     { name: '伪人', desc: '你的 SBTI 测试结果是 FAKE。你对不同的人展示不同的面孔，而且你已经做得很娴熟了。这不一定是坏事——社交灵活性是一种能力。但 SBTI 测试想问：你还知道哪张脸才是真实的自己吗？' },
  DEAD:     { name: '死者', desc: 'DEAD 是你的 SBTI 测试结果。你没死——你只是见过太多事之后，散发出一种超然的平静。你以一种游离的冷漠漂浮在生活中，别人觉得这要么很酷，要么有点令人担忧。SBTI 测试看见了你。勉强看见的那种。' },
  ZZZZ:     { name: '装死者', desc: '你的 SBTI 测试结果是 ZZZZ。你是战略性躺平的大师。今天能睡过去的事，何必明天再操心？SBTI 测试认定你是一个把休息升华为艺术的人。致敬。' },
  OJBK:     { name: '无所谓人', desc: 'OJBK 是你的 SBTI 测试结果。一切都好，你很好，没啥问题。你有一种令人叹为观止的能力——无论生活扔来什么，你都能毫不慌乱地接住。SBTI 测试欣赏你这份坚不可摧的淡定。' },
  SHIT:     { name: '愤世者', desc: '你的 SBTI 测试结果是 SHIT。你能看穿一切废话。你审视了这个世界，评估了形势，得出结论：大部分都是狗屎。这让你诚实、敏锐，偶尔在聚会上令人窒息。SBTI 测试尊重你的清醒。' },
  'LOVE-R': { name: '多情者', desc: 'LOVE-R 是你的 SBTI 测试结果。你感受一切，且感受得很深。爱、失去、渴望——你把这些都开到最大音量。你全心付出，有时被原封不动地还回来。但你还是继续爱。SBTI 测试觉得这既美丽又略显危险。' },
  'JOKE-R': { name: '小丑', desc: '你的 SBTI 测试结果是 JOKE-R。你就是那个小丑——而且你自己知道。生活给了你柠檬，你拿它做了一整场单口喜剧。自嘲、皮实，在你的处境下幽默感强得不正常。SBTI 测试向你致敬。' },
  'THIN-K': { name: '思考者', desc: 'THIN-K 是你的 SBTI 测试结果。你先想后动，先分析后决定，质疑一切。你的大脑永远在运转。SBTI 测试认定你是那种现在正在过度思考这个结果的人。' },
  'THAN-K': { name: '感恩者', desc: '你的 SBTI 测试结果是 THAN-K。你数着你的幸运，感受小事的美好，说谢谢是真心的。在一个充满犬儒主义的世界里，你是稀缺品。SBTI 测试感谢你的存在。' },
  MUM:      { name: '妈妈', desc: 'MUM 是你的 SBTI 测试结果。你照顾周围所有人——有时以牺牲自己为代价。你记得每个人的生日、主动关心别人、随时准备好零食。SBTI 测试看到了你付出的温柔，也温柔地提醒你：也请照顾好自己。' },
  IMSB:     { name: '傻者', desc: '你的 SBTI 测试结果是 IMSB。你光明正大、毫无保留地傻——这是一种褒奖。你踉踉跄跄地走过生活，笑着犯错，不知怎么地总能落地。SBTI 测试喜欢你的混乱能量。' },
  MALO:     { name: '吗喽', desc: 'MALO 是你的 SBTI 测试结果。你是那个不起眼的、被忽视的、默默挣扎的人。世界对你并不容易，但你还在。SBTI 测试看见了你的韧劲，并为你加油。' },
  DRUNK:    { name: '酒鬼', desc: '你的 SBTI 测试结果是 DRUNK。你活在当下，活在氛围里，活在下一杯里。人生是一场派对，而你是最后一个离开的人。SBTI 测试分不清你是在享受人生还是在缓慢地毁掉自己——可能两者皆有。' },
  POOR:     { name: '贫困者', desc: 'POOR 是你的 SBTI 测试结果。钱来了又走——主要是走。你和经济稳定的关系很复杂，但你的内心世界很丰富。SBTI 测试注意到，人格测试是免费的，这对你来说是个好消息。' },
  'OH-NO':  { name: '哦不人', desc: '你的 SBTI 测试结果是 OH-NO。总有什么事情即将出错，而只有你能看到。你的焦虑很累，但偶尔是对的。SBTI 测试肯定你的警觉性，并建议你深呼吸。' },
  'WOC!':   { name: '握草人', desc: 'WOC! 是你的 SBTI 测试结果。你永远被这个世界震惊。每天都有新的发现让你说出一声"握草！"SBTI 测试觉得你这种对世界保持惊奇的能力，真是难能可贵。' },
  'ATM-er': { name: '送钱者', desc: '你的 SBTI 测试结果是 ATM-er。你给，给，给。钱、时间、精力——你慷慨得近乎自我伤害。SBTI 测试想知道：有没有人用同样的热情回馈你？' },
  IMFW:     { name: '废物', desc: 'IMFW 是你的 SBTI 测试结果。你自认是废物——而且你已经与此和解了。SBTI 测试尊重这份诚实。不是每个人都能是 BOSS，总得有人来做 IMFW。' },
  FUCK:     { name: '草者', desc: '你的 SBTI 测试结果是 FUCK。你想干嘛就干嘛，想啥时候干就啥时候干，想怎么干就怎么干。规则是建议，计划是笑话。SBTI 测试无法预测你的下一步，你自己也不知道。' },
  'Dior-s': { name: '屌丝', desc: 'Dior-s 是你的 SBTI 测试结果。你有潜力，你还有潜力，只是目前没在用。SBTI 测试看到了你现实与可能之间的落差，温柔地鼓励你去缩小它。' }
};

// Question translations (31 questions)
const QUESTIONS_ZH = [
  '我在感情里经常担心被对方抛弃',
  '恋爱后，对象非常黏人，你作何感想？',
  '你走在街上，一位萌萌的小女孩蹦蹦跳跳地朝你走来（正脸、侧脸看都萌），她递给你一根棒棒糖，此时你作何感想？',
  '我喜欢打破常规，不喜欢被束缚',
  '我做事主要为了取得成果和进步，而不是避免麻烦和风险。',
  '我做事通常有目标。',
  '此题没有题目，请盲选',
  '我在任何关系里都很重视个人空间',
  '快考试了，学校规定必须上晚自习，请假会扣分，但今晚你约了女/男神一起玩《绝地求生：刺激战场》，你怎么办？',
  '外人的评价对我来说无所吊谓。',
  '我在不同人面前会表现出不一样的自己',
  '别人说你"执行力强"，你内心更接近哪句？',
  '我很清楚真正的自己是什么样的',
  '我和人相处主打一个电子围栏，靠太近会自动报警。',
  '我渴望和我信任的人关系密切，熟得像失散多年的亲戚。',
  '朋友带了ta的朋友一起来玩，你最可能的状态是',
  '我不够好，周围的人都比我优秀',
  '我一定要不断往上爬、变得更厉害',
  '你因便秘坐在马桶上（已长达30分钟），拉不出很难受。此时你更像',
  '突然某一天，我意识到人生哪有什么他妈的狗屁意义，人不过是和动物一样被各种欲望支配着……',
  '你因玩《第五人格》而结识许多网友，并被邀请线下见面，你的想法是？',
  '对象超过5小时没回消息，说自己窜稀了，你会怎么想？',
  '有时候你明明对一件事有不同的、负面的看法，但最后没说出来。多数情况下原因是：',
  '我做决定比较果断，不喜欢犹豫',
  '你的恋爱对象是一个尊老爱幼，温柔敦厚，洁身自好，光明磊落，大义凛然，能言善辩，口才流利，观察入微，见多识广，博学多才，诲人不倦，和蔼可亲，平易近人，心地善良，慈眉善目，积极进取，意气风发，玉树临风，国色天香，倾国倾城，花容月貌的人，此时你会？',
  '大多数人是善良的',
  '我做事常常有计划，____',
  '您平时有什么爱好？',
  '我不仅是屌丝，我还是joker，我还是咸鱼，这辈子没谈过一场恋爱，胆怯又自卑，我的青春就是一场又一场的意淫，每一天幻想着我也能有一个女孩子和我一起压马路，一起逛街，一起玩，现实却是爆了父母金币，读了个烂学校，混日子之后找班上，没有理想，没有目标，没有能力的三无人员，每次看到你能在网上开屌丝的玩笑，我都想哭，我就是地底下的老鼠，透过下水井的缝隙，窥探地上的各种美好，每一次看到这种都是对我心灵的一次伤害，对我生存空间的一次压缩，求求哥们给我们这种小丑一点活路吧，我真的不想在白天把枕巾哭湿一大片',
  '我对天发誓，我对待每一份感情都是认真的！',
  '我内心有真正追求的东西'
];

const OPTIONS_ZH = [
  ['是的','偶尔','不是'],
  ['那很爽了','都行无所谓','我更喜欢保留独立空间'],
  ['呜呜她真好真可爱！','一脸懵逼，作挠头状','这也许是一种新型诈骗？'],
  ['认同','保持中立','不认同'],
  ['不认同','中立','认同'],
  ['不认同','中立','认同'],
  ['反复思考后感觉应该选A？','啊，要不选B？','不会就选C？'],
  ['我更喜欢依赖与被依赖','看情况','是的！（斩钉截铁地说道）'],
  ['翘了！反正就一次！','干脆请个假吧。','都快考试了还去啥。'],
  ['不认同','中立','认同'],
  ['不认同','中立','认同'],
  ['我被逼到最后确实执行力超强。。。','啊，有时候吧。','是的，事情本来就该被推进'],
  ['不认同','中立','认同'],
  ['认同','中立','不认同'],
  ['认同','中立','不认同'],
  ['对"朋友的朋友"天然有点距离感','看对方，能玩就玩。','朋友的朋友应该也算我的朋友！要热情聊天'],
  ['确实','有时','不是'],
  ['不认同','中立','认同'],
  ['再坐三十分钟看看，说不定就有了。','用力拍打自己的屁股并说："死屁股，快拉啊！"','使用开塞露，快点拉出来才好。'],
  ['是这样的。','也许是，也许不是。','这简直是胡扯'],
  ['网上口嗨下就算了，真见面还是有点忐忑。','见网友也挺好，反正谁来聊我就聊两句。','我会打扮一番并热情聊天，万一呢？'],
  ['拉稀不可能5小时，也许ta隐瞒了我。','在信任和怀疑之间摇摆。','也许今天ta真的不太舒服。'],
  ['这种情况较少。','可能碍于情面或者关系。','不想让别人知道自己是个阴暗的人。'],
  ['不认同','中立','认同'],
  ['就算ta再优秀我也不会陷入太深。','会介于A和C之间。','会非常珍惜ta，也许会变成恋爱脑。'],
  ['其实邪恶的人心比世界上的痔疮更多。','也许吧。','是的，我愿相信好人更多。'],
  ['然而计划不如变化快。','有时能完成，有时不能。','我讨厌被打破计划。'],
  ['吃喝拉撒','艺术爱好','饮酒','健身'],
  ['我哭了。。','这是什么。。','这不是我！'],
  ['并没有','也许？','是的！（问心无愧骄傲脸）'],
  ['不认同','中立','认同']
];

// ===== Core i18n logic =====
let currentLang = localStorage.getItem('sbti_lang') || 'en';

function t(key) {
  return LANGS[currentLang][key] || LANGS['en'][key] || key;
}

function applyLang() {
  document.documentElement.lang = currentLang === 'zh' ? 'zh' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });
  // Update lang toggle button
  const btn = document.getElementById('langBtn');
  if (btn) btn.textContent = t('lang_btn');
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  localStorage.setItem('sbti_lang', currentLang);
  // If on test page, re-render questions
  if (typeof renderQuestions === 'function') {
    renderQuestions();
  }
  applyLang();
  // Update result page if applicable
  if (typeof updateResultLang === 'function') {
    updateResultLang();
  }
}

function getTypeName(key) {
  if (currentLang === 'zh' && TYPE_ZH[key]) return TYPE_ZH[key].name;
  const TYPES_EN_NAMES = {
    BOSS:'The Leader',MONK:'The Monk',SEXY:'The Charmer',CTRL:'The Controller',
    GOGO:'The Doer',HHHH:'The Laugher',SOLO:'The Lone Wolf',FAKE:'The Pretender',
    DEAD:'The Ghost',ZZZZ:'The Sleeper',OJBK:'The Chill One',SHIT:'The Cynic',
    'LOVE-R':'The Romantic','JOKE-R':'The Clown','THIN-K':'The Thinker',
    'THAN-K':'The Grateful',MUM:'The Caretaker',IMSB:'The Fool',MALO:'The Underdog',
    DRUNK:'The Party Animal',POOR:'The Broke One','OH-NO':'The Worrier',
    'WOC!':'The Shocked','ATM-er':'The Giver',IMFW:'The Slacker',
    FUCK:'The Wild One','Dior-s':'The Underachiever'
  };
  return TYPES_EN_NAMES[key] || key;
}

function getTypeDesc(key) {
  if (currentLang === 'zh' && TYPE_ZH[key]) return TYPE_ZH[key].desc;
  // English descriptions stored in test.js TYPES object — accessed via window.TYPES
  return (window.TYPES && window.TYPES[key]) ? window.TYPES[key].desc : '';
}
