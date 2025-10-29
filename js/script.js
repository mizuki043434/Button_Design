// ギャラリーデータ
const buttons = [
  "button1",
  "button2",
  "button3",
  "button4",
  "button5",
  "button6",
  "button7",
  "button8",
  "button9",
  "button10",
  "button11"
];

const gallery = document.getElementById("gallery");

// 各ボタンのカードを生成
buttons.forEach(btn => {
  const card = document.createElement("div");
  card.className = "card";

  // iframeでボタンをプレビュー
  const iframe = document.createElement("iframe");
  iframe.src = `${btn}/index.html`;

  // ボタン名表示
  const label = document.createElement("p");
  label.textContent = btn;

  card.appendChild(iframe);
  card.appendChild(label);
  gallery.appendChild(card);
});
