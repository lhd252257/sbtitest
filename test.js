const QUESTIONS = [
  {
    id: 'q8', text: 'I often worry about being abandoned by my partner.',
    options: ['Yes', 'Sometimes', 'No']
  },
  {
    id: 'q11', text: 'Your partner is very clingy after you start dating. How do you feel?',
    options: ["That's great, I love it!", "Doesn't matter either way", "I prefer keeping my own space"]
  },
  {
    id: 'q14', text: 'A super cute little girl skips toward you on the street and hands you a lollipop. Your reaction?',
    options: ['Aww she\'s so sweet! A lollipop for me!', 'Totally confused, scratch your head', 'This might be some new scam — better walk away']
  },
  {
    id: 'q16', text: 'I like breaking the rules and hate being constrained.',
    options: ['Agree', 'Neutral', 'Disagree']
  },
  {
    id: 'q19', text: 'I act mainly to achieve results and progress, not to avoid trouble and risk.',
    options: ['Disagree', 'Neutral', 'Agree']
  },
  {
    id: 'q17', text: 'I usually have a goal when I do things.',
    options: ['Disagree', 'Neutral', 'Agree']
  },
  {
    id: 'q22', text: 'This question has no prompt — pick blindly.',
    options: ['After much thought, maybe A?', 'Hmm, how about B?', "Can't decide, just go with C"]
  },
  {
    id: 'q12', text: 'I value personal space in all my relationships.',
    options: ['I prefer mutual dependence', 'Depends on the situation', 'Yes! (said decisively)']
  },
  {
    id: 'q15', text: "Exams are coming, school requires evening study, but tonight you planned to play PUBG with your crush. What do you do?",
    options: ['Skip it! Just this once!', 'Ask for leave, I guess.', "Exams are coming — no way I'm going out."]
  },
  {
    id: 'q6', text: "Other people's opinions mean nothing to me.",
    options: ['Disagree', 'Neutral', 'Agree']
  },
  {
    id: 'q30', text: 'I show different sides of myself to different people.',
    options: ['Disagree', 'Neutral', 'Agree']
  },
  {
    id: 'q23', text: 'Someone calls you "highly efficient." Which thought is closest to yours?',
    options: ['I get super efficient when pushed to the last second...', 'Sometimes, I guess.', 'Yes — things should just get done.']
  },
  {
    id: 'q3', text: 'I have a clear sense of who I really am.',
    options: ['Disagree', 'Neutral', 'Agree']
  },
  {
    id: 'q27', text: 'I keep people at arm\'s length — get too close and the alarm goes off.',
    options: ['Agree', 'Neutral', 'Disagree']
  },
  {
    id: 'q28', text: 'I crave deep closeness with people I trust — like long-lost family.',
    options: ['Agree', 'Neutral', 'Disagree']
  },
  {
    id: 'q26', text: 'A friend brings their friend along to hang out. Your most likely reaction?',
    options: ["I feel a bit distant from 'friend's friend' — worried it'll affect our dynamic", 'Depends on them — if we click, cool.', "Friend's friend is basically my friend too! Let's chat!"]
  },
  {
    id: 'q2', text: "I'm not good enough — everyone around me is better than me.",
    options: ['Definitely', 'Sometimes', 'Not really']
  },
  {
    id: 'q5', text: 'I must keep climbing and becoming more powerful.',
    options: ['Disagree', 'Neutral', 'Agree']
  },
  {
    id: 'q20', text: "You've been constipated on the toilet for 30 minutes. You're most like:",
    options: ['Sit another 30 minutes — maybe something will happen.', 'Slap your own butt and yell: "Come on, just go!"', 'Use a laxative — get it done efficiently.']
  },
  {
    id: 'q18', text: 'One day you realize life has no meaning — humans are just driven by desires like animals, controlled by hormones.',
    options: ['True.', 'Maybe, maybe not.', 'That\'s nonsense.']
  },
  {
    id: 'q25', text: "You made online friends through a game and they invite you to meet IRL. Your thoughts?",
    options: ["Online banter is fine, but meeting in person feels a bit nerve-wracking.", "Meeting online friends is fine — I'll chat with whoever shows up.", "I'll dress up and be super friendly — you never know!"]
  },
  {
    id: 'q7', text: "Your partner hasn't replied in 5 hours and says they had diarrhea. What do you think?",
    options: ["Diarrhea doesn't last 5 hours — they're hiding something.", 'Swinging between trust and suspicion.', 'Maybe they really were feeling unwell today.']
  },
  {
    id: 'q29', text: "Sometimes you have a negative opinion but don't say it. Usually because:",
    options: ["That rarely happens to me.", "Probably to save face or protect the relationship.", "I don't want people to think I'm a dark person."]
  },
  {
    id: 'q21', text: 'I make decisions quickly and hate hesitating.',
    options: ['Disagree', 'Neutral', 'Agree']
  },
  {
    id: 'q10', text: 'Your partner is someone who respects elders, cares for the young, is gentle and virtuous, pure and upright, righteous and dignified, eloquent and articulate, observant and knowledgeable, learned and tireless in teaching, kind and approachable, warm-hearted and benevolent, positive and ambitious, full of spirit, graceful and handsome, breathtakingly beautiful, devastatingly gorgeous, and radiantly stunning. You would:',
    options: ["No matter how great they are, I won't fall too deep.", 'Somewhere between A and C.', 'Cherish them deeply — might become totally lovesick.']
  },
  {
    id: 'q13', text: 'Most people are good.',
    options: ['Evil hearts outnumber hemorrhoids in this world.', 'Maybe.', 'Yes — I choose to believe good people are the majority.']
  },
  {
    id: 'q24', text: 'I often make plans, ____',
    options: ['but plans never survive reality.', 'sometimes I follow through, sometimes not.', "and I hate when plans get disrupted."]
  },
  {
    id: 'drink_gate_q1', text: 'What are your hobbies?',
    options: ['Eating, sleeping, existing', 'Art and creative stuff', 'Drinking', 'Working out'],
    extra: true
  },
  {
    id: 'q1', text: "I'm a loser, a joker, a salted fish. Never been in a relationship my whole life. Timid and self-loathing. My youth was one fantasy after another — dreaming of a girl to walk the streets with, hang out with, just be with. Reality: burned through my parents' money, went to a terrible school, found a dead-end job. No dreams, no goals, no skills — a triple-nothing. Every time I see people joking about losers online, I want to cry. I'm the rat underground, peering at the beautiful world above through a sewer grate. Every glimpse is another wound to my soul, another compression of my will to exist. Please, just leave us clowns a little room to breathe. I really don't want to cry my pillow soaking wet in the middle of the day.",
    options: ['I cried...', 'What is this...', "That's not me!"]
  },
  {
    id: 'q9', text: 'I swear to heaven — I have been sincere in every relationship I\'ve ever had!',
    options: ['Not really', 'Maybe?', 'Yes! (proud and guilt-free)']
  },
  {
    id: 'q4', text: 'I have something I truly pursue deep in my heart.',
    options: ['Disagree', 'Neutral', 'Agree']
  }
];

// Scoring map: each question id maps to dimension scores per option index (0=A,1=B,2=C)
// Dimensions: attachment(A), independence(I), ambition(M), social(S), selfAware(W), cynicism(C), planning(P), drink(D)
const SCORE_MAP = {
  q8:  [{A:3},{A:2},{A:1}],
  q11: [{A:1},{A:2},{A:3}],
  q14: [{S:3},{S:2},{S:1}],
  q16: [{I:3},{I:2},{I:1}],
  q19: [{M:1},{M:2},{M:3}],
  q17: [{M:1},{M:2},{M:3}],
  q22: [{W:1},{W:2},{W:3}],
  q12: [{A:3},{A:2},{I:3}],
  q15: [{I:3},{I:2},{I:1}],
  q6:  [{W:1},{W:2},{W:3}],
  q30: [{W:1},{W:2},{W:3}],
  q23: [{M:1},{M:2},{M:3}],
  q3:  [{W:1},{W:2},{W:3}],
  q27: [{I:3},{I:2},{I:1}],
  q28: [{A:3},{A:2},{A:1}],
  q26: [{S:1},{S:2},{S:3}],
  q2:  [{C:3},{C:2},{C:1}],
  q5:  [{M:1},{M:2},{M:3}],
  q20: [{P:1},{P:2},{P:3}],
  q18: [{C:3},{C:2},{C:1}],
  q25: [{S:1},{S:2},{S:3}],
  q7:  [{A:3},{A:2},{A:1}],
  q29: [{W:3},{W:2},{W:1}],
  q21: [{P:1},{P:2},{P:3}],
  q10: [{A:1},{A:2},{A:3}],
  q13: [{C:3},{C:2},{C:1}],
  q24: [{P:1},{P:2},{P:3}],
  drink_gate_q1: [{D:1},{D:2},{D:3},{D:4}],
  q1:  [{C:3},{C:2},{C:1}],
  q9:  [{A:1},{A:2},{A:3}],
  q4:  [{M:1},{M:2},{M:3}]
};

const TYPES = {
  BOSS:   { name: 'The Leader', desc: 'You are a natural-born BOSS. You set goals, you chase them, and you expect others to keep up. You have high ambitions, strong self-awareness, and zero patience for mediocrity. People either love your drive or find you intimidating — and honestly, you\'re fine with both. The SBTI test has spoken: you lead, others follow.' },
  MONK:   { name: 'The Monk', desc: 'Your SBTI test result is MONK. You have transcended the petty dramas of everyday life. Relationships? Complicated. Ambition? Overrated. You\'ve found a kind of inner peace that most people spend their whole lives chasing. Some call it enlightenment. Others call it giving up. You call it Tuesday.' },
  SEXY:   { name: 'The Charmer', desc: 'SEXY is your SBTI test result — and honestly, it tracks. You have a magnetic quality that draws people in. You\'re socially fluent, emotionally intelligent, and you know exactly how to work a room. The SBTI test recognizes your power. Use it wisely.' },
  CTRL:   { name: 'The Controller', desc: 'Your SBTI test result is CTRL. You like things done your way, on your schedule, according to your plan. You\'re not controlling — you\'re just right. The SBTI test confirms: you have an exceptional need for order, and the world would genuinely be better if everyone just listened to you.' },
  GOGO:   { name: 'The Doer', desc: 'GOGO is your SBTI test result. You don\'t overthink — you act. While others are still making pros-and-cons lists, you\'ve already finished the task. Your energy is infectious, your execution is legendary, and your to-do list is always shorter than everyone else\'s.' },
  HHHH:   { name: 'The Laugher', desc: 'Your SBTI test result is HHHH. Life is a comedy and you\'re the best audience. You find humor in everything, laugh at yourself freely, and your presence makes any room lighter. The SBTI test sees you: pure, unfiltered joy in human form.' },
  SOLO:   { name: 'The Lone Wolf', desc: 'SOLO is your SBTI test result. You don\'t need a crowd — you need space. Deep relationships are rare for you, but when they happen, they\'re real. You\'re self-sufficient, independent, and slightly suspicious of people who are too friendly too fast. The SBTI test respects your boundaries.' },
  FAKE:   { name: 'The Pretender', desc: 'Your SBTI test result is FAKE. You wear different masks for different people, and you\'ve gotten very good at it. This isn\'t necessarily bad — social adaptability is a skill. But the SBTI test wonders: do you even know which face is the real one?' },
  DEAD:   { name: 'The Ghost', desc: 'DEAD is your SBTI test result. You\'re not dead — you just have the energy of someone who has seen too much. You float through life with a detached calm that others find either deeply cool or mildly concerning. The SBTI test sees you. Barely.' },
  ZZZZ:   { name: 'The Sleeper', desc: 'Your SBTI test result is ZZZZ. You are the master of strategic inactivity. Why do today what you can sleep through tomorrow? The SBTI test has identified you as someone who has elevated rest to an art form. Respect.' },
  OJBK:   { name: 'The Chill One', desc: 'OJBK is your SBTI test result. Everything is fine. You\'re fine. It\'s all fine. You have a remarkable ability to roll with whatever life throws at you without losing your cool. The SBTI test admires your unshakeable equanimity.' },
  SHIT:   { name: 'The Cynic', desc: 'Your SBTI test result is SHIT. You see through the BS. You\'ve looked at the world, assessed the situation, and concluded that most of it is, well, SHIT. This makes you honest, perceptive, and occasionally exhausting at parties. The SBTI test respects your clarity.' },
  'LOVE-R': { name: 'The Romantic', desc: 'LOVE-R is your SBTI test result. You feel everything deeply. Love, loss, longing — you experience it all at full volume. You give your whole heart and sometimes get it handed back in pieces. But you keep loving anyway. The SBTI test finds this both beautiful and slightly alarming.' },
  'JOKE-R': { name: 'The Clown', desc: 'Your SBTI test result is JOKE-R. You are the clown — and you know it. Life has handed you lemons and you\'ve made a whole comedy special out of them. Self-deprecating, resilient, and funnier than you should be given your circumstances. The SBTI test salutes you.' },
  'THIN-K': { name: 'The Thinker', desc: 'THIN-K is your SBTI test result. You think before you act, analyze before you decide, and question everything. Your mind is always running. The SBTI test has identified you as someone who probably overthinks this result right now.' },
  'THAN-K': { name: 'The Grateful', desc: 'Your SBTI test result is THAN-K. You count your blessings. You appreciate the small things. You say thank you and mean it. In a world full of cynics, you are a rare and precious thing. The SBTI test is grateful for you.' },
  MUM:    { name: 'The Caretaker', desc: 'MUM is your SBTI test result. You take care of everyone around you — sometimes at the expense of yourself. You remember birthdays, check in on people, and always have snacks. The SBTI test sees your nurturing soul and says: please also take care of yourself.' },
  IMSB:   { name: 'The Fool', desc: 'Your SBTI test result is IMSB. You are gloriously, unapologetically foolish — and that\'s a compliment. You stumble through life with a smile, make mistakes loudly, and somehow land on your feet. The SBTI test loves your chaotic energy.' },
  MALO:   { name: 'The Underdog', desc: 'MALO is your SBTI test result. You\'re the underdog — scrappy, overlooked, and quietly determined. The world hasn\'t made things easy for you, but you\'re still here. The SBTI test sees your resilience and roots for you.' },
  DRUNK:  { name: 'The Party Animal', desc: 'Your SBTI test result is DRUNK. You live for the moment, the vibe, the next round. Life is a party and you\'re the last one standing. The SBTI test can\'t tell if you\'re having the time of your life or slowly destroying yourself — possibly both.' },
  POOR:   { name: 'The Broke One', desc: 'POOR is your SBTI test result. Money comes and goes — mostly goes. You have a complicated relationship with financial stability, but a rich inner life. The SBTI test notes that personality is free, which is good news for you.' },
  'OH-NO': { name: 'The Worrier', desc: 'Your SBTI test result is OH-NO. Something is always about to go wrong, and you\'re the only one who sees it. Your anxiety is exhausting but also occasionally correct. The SBTI test acknowledges your vigilance and suggests you breathe.' },
  'WOC!':  { name: 'The Shocked', desc: 'WOC! is your SBTI test result. You are perpetually surprised by the world. Every day brings new revelations that make you go "WOC!" The SBTI test finds your capacity for astonishment genuinely refreshing.' },
  'ATM-er': { name: 'The Giver', desc: 'Your SBTI test result is ATM-er. You give and give and give. Money, time, energy — you\'re generous to a fault. The SBTI test wonders if anyone gives back to you with the same enthusiasm.' },
  IMFW:   { name: 'The Slacker', desc: 'IMFW is your SBTI test result. You are, by your own admission, a waste of space — and you\'ve made peace with that. The SBTI test respects the honesty. Not everyone can be a BOSS. Someone has to be IMFW.' },
  FUCK:   { name: 'The Wild One', desc: 'Your SBTI test result is FUCK. You do what you want, when you want, how you want. Rules are suggestions. Plans are jokes. The SBTI test cannot predict your next move, and neither can you.' },
  'Dior-s': { name: 'The Underachiever', desc: 'Dior-s is your SBTI test result. You had potential. You still have potential. You\'re just not using it right now. The SBTI test sees the gap between who you are and who you could be, and gently encourages you to close it.' }
};

function getResult(scores) {
  const { A=0, I=0, M=0, S=0, W=0, C=0, P=0, D=0 } = scores;
  // Normalize to 0-100 based on max possible per dimension
  const MAX = { A:21, I:12, M:15, S:9, W:15, C:12, P:9 };
  const n = dim => Math.round((scores[dim] || 0) / MAX[dim] * 100);
  const nA=n('A'), nI=n('I'), nM=n('M'), nS=n('S'), nW=n('W'), nC=n('C'), nP=n('P');

  // Special drink gate
  if (D === 3) return 'DRUNK';

  // High thresholds (>=65%) for primary dims, medium (>=45%) for secondary
  if (nM >= 65 && nW >= 55 && nC <= 40) return 'BOSS';
  if (nI >= 65 && nC >= 55) return 'MONK';
  if (nI >= 65 && nW >= 55) return 'SOLO';
  if (nS >= 65 && nW >= 55) return 'SEXY';
  if (nA >= 65 && nS >= 55) return 'LOVE-R';
  if (nA >= 65 && nC >= 55) return 'OH-NO';
  if (nM >= 65 && nS >= 55) return 'GOGO';
  if (nM >= 65 && nP >= 60) return 'CTRL';
  if (nS >= 65 && nA >= 55) return 'MUM';
  if (nW >= 65 && nC <= 35) return 'THIN-K';
  if (nC >= 65 && nM <= 35) return 'SHIT';
  if (nC >= 65 && nA >= 50) return 'JOKE-R';
  if (nW >= 60 && nM >= 55) return 'FAKE';
  if (nS >= 60 && nM >= 50) return 'HHHH';
  if (nI >= 60 && nM <= 35) return 'DEAD';
  if (nA >= 55 && nW <= 35) return 'IMSB';
  if (nC >= 55 && nI >= 55) return 'ZZZZ';
  if (nA >= 55 && nM >= 50) return 'ATM-er';
  if (nM >= 50 && nC >= 50) return 'THAN-K';
  if (nS >= 50 && nC >= 50) return 'MALO';
  if (nI >= 50 && nS >= 50) return 'FUCK';
  if (nC >= 50 && nS <= 35) return 'WOC!';
  if (nM <= 35 && nA >= 45) return 'POOR';
  if (nM <= 30 && nW <= 30) return 'IMFW';
  if (nM <= 40 && nC <= 40 && nA <= 40) return 'OJBK';
  return 'Dior-s';
}

let answers = {};

function renderQuestions() {
  const list = document.getElementById('questionsList');
  if (!list) return;
  list.innerHTML = '';
  const isZh = typeof currentLang !== 'undefined' && currentLang === 'zh';
  QUESTIONS.forEach((q, qi) => {
    const card = document.createElement('article');
    card.className = 'question-card';
    const letters = ['A','B','C','D'];
    // Use Chinese text if available and lang is zh
    const qText = (isZh && typeof QUESTIONS_ZH !== 'undefined' && QUESTIONS_ZH[qi]) ? QUESTIONS_ZH[qi] : q.text;
    const qOpts = (isZh && typeof OPTIONS_ZH !== 'undefined' && OPTIONS_ZH[qi]) ? OPTIONS_ZH[qi] : q.options;
    const optionsHtml = qOpts.map((opt, oi) => `
      <label class="option-label${answers[q.id] === oi ? ' selected' : ''}" id="label_${q.id}_${oi}">
        <input type="radio" name="${q.id}" value="${oi}" ${answers[q.id] === oi ? 'checked' : ''} onchange="onAnswer('${q.id}', ${oi}, this)" />
        <span class="option-letter">${letters[oi]}</span>
        <span class="option-text">${opt}</span>
      </label>
    `).join('');
    card.innerHTML = `
      <div class="question-meta">
        <span class="question-num">${isZh ? '第 ' + (qi+1) + ' 题' : 'Q' + (qi+1)}</span>
      </div>
      <p class="question-text">${qText}</p>
      <div class="options-list">${optionsHtml}</div>
    `;
    list.appendChild(card);
  });
}

function onAnswer(qid, optIdx, input) {
  answers[qid] = optIdx;
  // Update visual selection
  QUESTIONS.forEach(q => {
    if (q.id === qid) {
      q.options.forEach((_, oi) => {
        const lbl = document.getElementById(`label_${qid}_${oi}`);
        if (lbl) lbl.classList.toggle('selected', oi === optIdx);
      });
    }
  });
  updateProgress();
}

function updateProgress() {
  const total = QUESTIONS.length;
  const done = Object.keys(answers).length;
  const pct = Math.round((done / total) * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = `${done} / ${total}`;
  document.getElementById('submitBtn').disabled = done < total;
}

function resetTest() {
  answers = {};
  renderQuestions();
  updateProgress();
}

document.getElementById('sbtiForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Calculate scores
  const scores = { A:0, I:0, M:0, S:0, W:0, C:0, P:0, D:0 };
  QUESTIONS.forEach(q => {
    const optIdx = answers[q.id];
    if (optIdx === undefined) return;
    const scoreEntry = SCORE_MAP[q.id];
    if (!scoreEntry) return;
    const entry = scoreEntry[optIdx];
    if (!entry) return;
    Object.entries(entry).forEach(([dim, val]) => {
      scores[dim] = (scores[dim] || 0) + val;
    });
  });
  const typeKey = getResult(scores);
  const type = TYPES[typeKey] || TYPES['Dior-s'];
  // Save to sessionStorage and redirect
  sessionStorage.setItem('sbtiResult', JSON.stringify({ key: typeKey, scores, ...type }));
  window.location.href = 'result.html';
});

renderQuestions();
updateProgress();
