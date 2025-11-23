document.addEventListener("DOMContentLoaded", function () {
  const cards = [
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
  drawButton.className = "button";
  document.body.appendChild(drawButton);

  drawButton.onclick = function () {
    const result = cards[Math.floor(Math.random() * cards.length)];
    const display = document.createElement("h2");
    display.textContent = `你抽到的是：${result}`;
    display.style.color = "#ff6a00";
    display.style.marginTop = "20px";
    document.body.appendChild(display);
  };
});
