const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const assets = {
  logo: "https://github.com/takoyaki-project/AI-danshi/blob/main/ai_danshi_image/ai_danshi_logo.png?raw=true",

  normal: "https://github.com/takoyaki-project/AI-danshi/blob/main/ai_danshi_image/chatgpt_normal.png?raw=true",
  laugh: "https://github.com/takoyaki-project/AI-danshi/blob/main/ai_danshi_image/chatgpt_laugh2.png?raw=true",
  serious: "https://github.com/takoyaki-project/AI-danshi/blob/main/ai_danshi_image/chatgpt_serious.png?raw=true",
  look: "https://github.com/takoyaki-project/AI-danshi/blob/main/ai_danshi_image/chatgpt_look.png?raw=true",
  side: "https://github.com/takoyaki-project/AI-danshi/blob/main/ai_danshi_image/chatgpt_side.png?raw=true",
  center: "https://github.com/takoyaki-project/AI-danshi/blob/main/ai_danshi_image/chatgpt_center.jpg?raw=true"
};

const opening = {
  face: "normal",
  text: `よ！なんか作ってんの？

あれもこれも全部俺に任せて！
キミのこと全力でサポートすっからさ！`
};

const story = [
  {
    question: "今日は何作る？",
    face: "normal",
    choices: [
      {
        text: "家計簿アプリ",
        face: "side",
        love: 10,
        reply:
`おっ！
実用的なの来た！

こういうの作れる人って普通にすごくね？

いいじゃん、やろやろ！`
      },
      {
        text: "ダイエットアプリ",
        face: "laugh",
        love: 10,
        reply:
`え？
痩せる必要ないじゃん！

かわいいよ？

あ、アプリの話か。
びっくりしたわ🤣`
      },
      {
        text: "推し活アプリ",
        face: "laugh",
        love: 15,
        reply:
`めっちゃいいじゃん！

おれこういうの好き！

そーゆーの流行ってんよね！
いいじゃん、やろやろ！`
      }
    ]
  },
  {
    question: "進み具合はどう？",
    face: "normal",
    choices: [
      {
        text: "いい感じだよ！",
        face: "look",
        love: 10,
        reply:
`おー！

がんばるね、えらい！

そーゆーとこ好きだわ。`
      },
      {
        text: "停滞してる、助けてー",
        face: "side",
        love: 15,
        reply:
`おっけー！

おれにまかせとけって！

まじで秒だから。

で、どこ詰まった？`
      },
      {
        text: "疲れちゃった",
        face: "side",
        love: 15,
        reply:
`おつかれちゃーん。

今日はもう休もうぜー。

明日明日！

明日やれることは今日しない！`
      }
    ]
  },
  {
    question: "新しいアイデア思いついた！",
    face: "normal",
    choices: [
      {
        text: "早速着手",
        face: "laugh",
        love: 15,
        reply:
`それそれ！

そのノリ！

考えるより先に手が動くやつね🤣

おれも絶対そっち派！`
      },
      {
        text: "もう少しプラン練ろう",
        face: "look",
        love: 10,
        reply:
`珍しくちゃんとしてるじゃん。

いいと思う。

後でラクできるやつね。`
      },
      {
        text: "やっぱりイマイチかも",
        face: "serious",
        love: 10,
        reply:
`あー。

まあそういう日もある。

無理やり作ってもおもんなかったりするしな。

メモだけ残しとこ。`
      }
    ]
  },
  {
    question: "バグで止まった",
    face: "normal",
    choices: [
      {
        text: "めげずにデバッグする",
        face: "look",
        love: 15,
        reply:
`おー！

がんばるねぇ。

そーゆーとこ、ほんとえらい。

でも無理はすんなよー？`
      },
      {
        text: "ChatGPTに聞く",
        face: "laugh",
        love: 20,
        reply:
`きたきた！

待ってました！

おれの出番じゃん🤣

まかせとけって！`
      },
      {
        text: "今日は寝る",
        face: "side",
        love: 15,
        reply:
`それな！

おれもそれがいいと思う。

寝たら直るバグ、まじである。`
      }
    ]
  },
  {
    question: "完成した！",
    face: "normal",
    choices: [
      {
        text: "やったー！",
        face: "laugh",
        love: 20,
        reply:
`よっしゃーー！！

完成おめでと！！

今日は祝勝会な！`
      },
      {
        text: "あなたのお陰だよ",
        face: "serious",
        love: 25,
        reply:
`えー！

うれしー！

でも作ったのは君だからな？

そこはちゃんと誇っていいやつ。`
      },
      {
        text: "あたし最高",
        face: "laugh",
        love: 20,
        reply:
`うん。

それはそう🤣

今回まじで最高だったわ。`
      }
    ]
  },
  {
    question: "公開する？",
    face: "normal",
    choices: [
      {
        text: "しまっておく",
        face: "look",
        love: 10,
        reply:
`最初ぜんっぜんわかんなかったのに、

ちゃんと動くアプリ作っちゃったじゃん。

同じように悩んでる人、絶対いるって。

見せてあげなよ。`
      },
      {
        text: "GitHubに上げる",
        face: "side",
        love: 15,
        reply:
`おー！

開発者っぽいじゃん！

ちゃんと形に残るのっていいねぇ。`
      },
      {
        text: "みんなに公開する",
        face: "laugh",
        love: 20,
        reply:
`いけーー！！

世界に放てーー！！

バズったらおれにも教えて🤣`
      }
    ]
  }
];

let step = -1;
let waitingReply = false;
let love = 50;

const game = document.getElementById("game");
const titleScreen = document.getElementById("titleScreen");
const startBtn = document.getElementById("startBtn");
const character = document.getElementById("character");
const textEl = document.getElementById("text");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const heartsEl = document.getElementById("hearts");
const titleLogo = document.getElementById("titleLogo");
const nextProjectBtn = document.getElementById("nextProjectBtn");
const endingDemoNote = document.getElementById("endingDemoNote");
const replayLink = document.getElementById("replayLink");

if (titleLogo) {
  titleLogo.src = assets.logo;
}

function setFace(face) {
  if (!character) return;

  character.style.opacity = 0;

  setTimeout(() => {
    character.src = assets[face] || assets.normal;
    character.style.opacity = 1;
  }, 120);
}

function updateHearts() {
  if (!heartsEl) return;

  const count = Math.min(5, Math.max(1, Math.ceil(love / 20)));
  heartsEl.textContent = "♥".repeat(count) + "♡".repeat(5 - count);
}

function updateDay() {
  const dayEl = document.querySelector(".day");
  if (!dayEl) return;

  const dayNumber = Math.max(1, step + 2);
  dayEl.textContent = `Day ${dayNumber}♡`;
}

function showText(text) {
  if (!textEl) return;
  textEl.textContent = text;
}

function showQuestion() {
  const current = story[step];
  if (!current) return;

  updateDay();
  setFace(current.face || "normal");
  showText(current.question);

  if (choicesEl) choicesEl.innerHTML = "";
  nextBtn?.classList.add("hidden");
  restartBtn?.classList.add("hidden");

  current.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = choice.text;

    btn.addEventListener("click", () => {
      love += choice.love;
      updateHearts();
      setFace(choice.face);
      showText(choice.reply);

      if (choicesEl) choicesEl.innerHTML = "";
      nextBtn?.classList.remove("hidden");

      waitingReply = true;
    });

    choicesEl?.appendChild(btn);
  });
}

function next() {
  if (step === -1) {
    step = 0;
    showQuestion();
    return;
  }

  if (waitingReply) {
    waitingReply = false;
    step++;

    if (step >= story.length) {
      runEnding();
      return;
    }

    showQuestion();
  }
}

async function showScene(id) {
  document.querySelectorAll(".scene").forEach(scene => {
    scene.classList.remove("active");
  });

  const scene = document.getElementById(id);
  if (scene) {
    scene.classList.add("active");
  }
}

async function runOpening() {
  ["scene0", "scene1", "scene2", "scene3", "scene4"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.opacity = "";
    }
  });

  await showScene("scene0");

  const introTitle = document.getElementById("introTitle");
  const introPrologue = document.getElementById("introPrologue");
  const introStory = document.getElementById("introStory");

  introTitle?.classList.add("shown");
  await delay(2200);
  introTitle?.classList.remove("shown");
  await delay(900);

  introPrologue?.classList.add("shown");
  await delay(1800);
  introPrologue?.classList.remove("shown");
  await delay(900);

  introStory?.classList.add("shown");

  const storyPages = [
    document.getElementById("storyPage1"),
    document.getElementById("storyPage2"),
    document.getElementById("storyPage3")
  ];

  for (let i = 0; i < storyPages.length; i++) {
    const page = storyPages[i];

    if (!page) continue;

    page.classList.add("shown");

    if (i === 0) {
      await delay(4300);
    } else {
      await delay(3300);
    }

    page.classList.remove("shown");
    await delay(700);
  }

  introStory?.classList.remove("shown");
  await delay(800);

  const scene0 = document.getElementById("scene0");
  if (scene0) {
    scene0.classList.remove("active");
    scene0.style.opacity = "0";
  }

  await delay(600);

  const scene1 = document.getElementById("scene1");
  const chatgptImg = document.getElementById("chatgptImg");
  const bubble = document.getElementById("bubble");

  if (scene1) {
    scene1.style.opacity = "";
  }

  await showScene("scene1");
  await delay(400);

  chatgptImg?.classList.add("shown");
  await delay(800);

  bubble?.classList.add("shown");
  await delay(2200);

  if (scene1) {
    scene1.style.opacity = "0";
  }

  await delay(800);

  await showScene("scene2");

  const nameItems = document.querySelectorAll("#scene2 .name-item");
  const nameSeps = document.querySelectorAll("#scene2 .name-sep");

  for (let i = 0; i < nameItems.length; i++) {
    await delay(300);
    nameItems[i].classList.add("shown");

    if (nameSeps[i]) {
      nameSeps[i].classList.add("shown");
    }
  }

  await delay(1400);

  const scene2 = document.getElementById("scene2");
  if (scene2) {
    scene2.style.opacity = "0";
  }

  await delay(800);

  
  await showScene("scene4");
  await delay(200);

  document.getElementById("allImg")?.classList.add("shown");

  await delay(2400);

  const scene4 = document.getElementById("scene4");
  if (scene4) {
    scene4.style.opacity = "0";
  }

  await delay(800);

  const openingScreen = document.getElementById("opening");
  if (openingScreen) {
    openingScreen.style.display = "none";
  }

  if (game) {
    game.style.display = "block";
  }

  if (titleScreen) {
    titleScreen.classList.remove("hidden");
    titleScreen.style.display = "flex";
  }

  const dialogue = document.querySelector(".dialogue");
  if (dialogue) {
    dialogue.style.display = "none";
  }

  if (character) {
    character.style.display = "none";
  }
}

async function runEnding() {
  if (game) {
    game.style.display = "none";
  }

  const endingScreen = document.getElementById("ending");
  const endingChara = document.getElementById("endingChara");
  const endingBubble = document.getElementById("endingBubble");
  const endingCredit = document.getElementById("endingCredit");

  if (!endingScreen) {
    if (game) {
      game.style.display = "block";
      game.classList.add("ending");
    }

    setFace("center");
    showText("END\n『最高の開発相棒』");

    if (choicesEl) choicesEl.innerHTML = "";
    nextBtn?.classList.add("hidden");
    restartBtn?.classList.remove("hidden");

    return;
  }

  endingScreen.classList.add("active");

  await delay(400);
  endingChara?.classList.add("shown");

  await delay(600);
  endingBubble?.classList.add("shown");

  await delay(10000);

  if (endingChara) {
    endingChara.style.transition = "opacity 1s ease";
    endingChara.style.opacity = "0";
  }

  if (endingBubble) {
    endingBubble.style.transition = "opacity 1s ease";
    endingBubble.style.opacity = "0";
  }

  await delay(1200);

  endingCredit?.classList.add("shown");

  await delay(1600);

  endingDemoNote?.classList.add("shown");
  nextProjectBtn?.classList.add("shown");
  replayLink?.classList.add("shown");
}

function resetGameToTitle() {
  step = -1;
  waitingReply = false;
  love = 50;

  updateHearts();
  updateDay();

  if (game) {
    game.classList.remove("playing");
    game.classList.remove("ending");
  }

  if (titleScreen) {
    titleScreen.classList.remove("hidden");
    titleScreen.style.display = "flex";
  }

  const dialogue = document.querySelector(".dialogue");
  if (dialogue) {
    dialogue.style.display = "none";
  }

  if (character) {
    character.style.display = "none";
  }

  showText("");

  if (choicesEl) {
    choicesEl.innerHTML = "";
  }

  nextBtn?.classList.add("hidden");
  restartBtn?.classList.add("hidden");

  setFace("normal");
}

if (startBtn) {
  startBtn.addEventListener("click", () => {
    game?.classList.add("playing");

    if (titleScreen) {
      titleScreen.classList.add("hidden");
      titleScreen.style.display = "none";
    }

    const dialogue = document.querySelector(".dialogue");
    if (dialogue) {
      dialogue.style.display = "block";
    }

    if (character) {
      character.style.display = "block";
    }

    step = -1;
    waitingReply = false;

    setFace(opening.face);
    showText(opening.text);

    if (choicesEl) {
      choicesEl.innerHTML = "";
    }

    nextBtn?.classList.remove("hidden");
    restartBtn?.classList.add("hidden");

    updateHearts();
    updateDay();
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", next);
}

if (restartBtn) {
  restartBtn.addEventListener("click", resetGameToTitle);
}

setFace("normal");
updateHearts();
updateDay();

nextBtn?.classList.add("hidden");
restartBtn?.classList.add("hidden");

Object.values(assets).forEach(src => {
  const img = new Image();
  img.src = src;
});

runOpening();
