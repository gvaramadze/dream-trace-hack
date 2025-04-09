const terminal = document.getElementById("terminal");
const music = document.getElementById("bg-music");
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");

const lines = [
  ">>> Запуск модуля: Dream_Trace_2025.exe",
  ">>> Подключение к памяти пользователя...",
  ">>> Объект найден: Алина Ж.",
  ">>> Данные мечты: Justin Timberlake Concert. 23 июля. Стадион 'Динамо Арена'",
  ">>> Статус: SOLD OUT",
  ">>> Нарушение логики: Мечта не может быть недоступной",
  ">>> Попытка обхода реальности...",
  ">>> Взлом выполнен успешно.",
  ">>> Переход в альтернативный режим...",
  "",
  `*“Ты думала, всё распродано.\nНо это не про тебя.\nТвоя реальность — это сцена, на которой мечты оживают.\nЭто 23 июля.\nЯ просто… хотел быть тем, кто сделает невозможное реальным.\nТвоим хакером. Твоим волшебником.\nТем, кто всегда на шаг впереди — чтобы дарить тебе счастье.”*`,
  "",
  ">>> Скачать билет:"
];

let i = 0;

function typeLine() {
  if (i < lines.length) {
    terminal.innerHTML += lines[i] + "\n";
    i++;
    setTimeout(typeLine, 1000);
  } else {
    const link = document.createElement("a");
    link.href = "ticket.txt";
    link.className = "download-btn";
    link.innerText = "Скачать билет";
    link.setAttribute("download", "Justin_Timberlake_23.07.2025.txt");

    link.addEventListener("click", () => {
      music.pause(); 
      music.currentTime = 0; 
    });

    terminal.appendChild(link);
  }
}

startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  terminal.style.display = "block";
  music.volume = 0.4;
  music.play();
  typeLine();
});
