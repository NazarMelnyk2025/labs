# WEB ЛР №6 — DOM та події

Студент: Мельник Назар, група КН-310.

## Запуск сторінки

```bash
cd WEB_LR06
python -m http.server 8066 --bind 127.0.0.1 --directory source
```

Відкрити `http://127.0.0.1:8066/` у браузері.

## Синтаксична перевірка

```bash
node --check source/js/index.js
node --check tests/dom-flow.cjs
```

## Автоматичний браузерний тест

Потрібні Node.js, пакет Playwright і встановлений Chromium. В окремому
терміналі залишити запущеним HTTP-сервер, після чого виконати:

```bash
NODE_PATH=/шлях/до/node_modules node tests/dom-flow.cjs http://127.0.0.1:8066/
```

На машині підготовки використано
`NODE_PATH=/home/ilchik/Проекти/dsd/node_modules`. Тест містить assertions для
початкового стану, створення, редагування, порожнього введення, видалення,
browser console та page errors. Він також створює чотири PNG у `screenshots/`.

Фактичні журнали запуску містяться у `logs/`, а звіти — у `reports/`.
