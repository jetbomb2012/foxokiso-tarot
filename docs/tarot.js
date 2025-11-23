document.addEventListener("DOMContentLoaded", function () {
  let cards = [
    "🃏 The Fool", "🪄 The Magician", "🌙 The High Priestess",
    "👑 The Empress", "🗡️ The Emperor", "💘 The Lovers",
    "🛡️ The Chariot", "🕯️ The Hermit", "⚖️ Justice",
    "🔄 Wheel of Fortune", "🌪️ Strength", "🌫️ The Hanged Man",
    "💀 Death", "🌟 Temperance", "🔥 The Devil",
    "⚡ The Tower", "🌈 The Star", "🌕 The Moon",
    "☀️ The Sun", "🌍 Judgement", "🏁 The World"
  ];

  const drawButton = document.createElement("button");
  drawButton.textContent = "抽一張牌";
  document.body.appendChild(drawButton);

  drawButton.onclick = function () {
    if (cards.length === 0) {
      alert("所有牌已抽完，請重新整理頁面！");
      return;
    }
    const index = Math.floor(Math.random() * cards.length);
    const result = cards.splice(index, 1)[0]; // 抽出並移除該牌
    const display = document.createElement("h2");
    display.textContent = `你抽到的是：${result}`;
    display.style.color = "#ff6a00";
    document.body.appendChild(display);
  };
});
