# WEB ЛР №8 — фінальний комплект

Студент: Мельник Назар, КН-310. Варіант: `USER_ID = 14`.

## Збірка і запуск

```bash
cd source
npm install
npm run build
npx tsc --noEmit
python -m http.server 8088
```

Відкрити `http://127.0.0.1:8088/`.

## Вміст

- `source/` — TypeScript, SCSS, конфігурація, lockfile і production bundle;
- `tests/` — Playwright-сценарій і генератор звіту;
- `screenshots/` — справжні унікальні докази;
- `logs/` — команди збірки, HTTP, консоль і автотести;
- `reports/` — REPORT.md, REPORT.docx, REPORT.pdf;
- `VERIFICATION.md` — підсумкова матриця перевірки.

`node_modules`, кеші й тимчасові файли не включено.


## Повторення браузерних перевірок

Окремі залежності тесту й команди запуску описані в `tests/README.md`.
Тест виконує реальні POST/PUT/DELETE у спільному MockAPI лише для власного тимчасового запису.

## Перевірка пакета в ChatGPT

Незалежна перевірка `tsc --noEmit` пройшла. Локальний `npm ci --offline` був
заблокований відсутнім пакетом npm у кеші, тому повторна збірка Webpack
у середовищі аудиту не виконувалася. Успішна збірка зафіксована у журналі Codex.

Звіт DOCX/PDF переверстано; оригінальні скриншоти у `screenshots/` не змінено.
