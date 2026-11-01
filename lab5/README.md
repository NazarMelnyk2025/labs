# WEB ЛР №5 — JavaScript OOP

Студент: Мельник Назар, група КН-310.

## Запуск

Потрібен Node.js і сучасний браузер.

```bash
cd source
node index.js
python -m http.server 8055 --bind 127.0.0.1
```

Після запуску сервера сторінка доступна за адресою `http://127.0.0.1:8055/`.
Результати демонстрації виводяться в консоль браузера.

## Перевірка синтаксису

```bash
node --check index.js
node --check models/Product.js
node --check models/User.js
node --check models/Customer.js
node --check models/Order.js
```

Фактичні результати перевірок збережено в `logs/`, а справжні знімки — у
`screenshots/`. Звіт у трьох форматах міститься в `reports/`.

## Повторення незалежних тестів

З кореня архіву виконайте:

```bash
cd WEB_LR05
node --test audit/verify_models.test.mjs
```

Незалежний аудит і обмеження перевірки записані в `audit/VERIFICATION.md`.
