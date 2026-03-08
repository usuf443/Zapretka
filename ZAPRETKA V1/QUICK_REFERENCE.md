# 🎯 QUICK REFERENCE — СПРАВКА

## ⚡ ЧТО ИМЕННО ДОБАВЛЕНО?

### 5 Тестовых пользователей
```javascript
// data.js
const users = [
    { name: 'Саня', ... },
    { name: 'Маша', ... },
    { name: 'Тимур', ... },
    { name: 'Александр', ... },
    { name: 'Иван', ... }
];
```

### Проверка пароля
```javascript
// auth.js
if (password !== '1234') { 
    alert('❌ Неверный пароль'); 
    return; 
}
```

### Поиск по сообщениям
```javascript
// script.js - setupSearch()
// Ищет контакты по имени
// Ищет сообщения по содержимому
// Клик переходит в чат
```

### WebSocket синхронизация
```javascript
// script.js - initWebSocket()
const ws = new WebSocket('ws://localhost:3000');
ws.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if (data.type === 'msg') {
        messages.push(data.msg);
        renderMessages();
    }
};
```

### Logout функция
```javascript
// script.js - logout()
sessionStorage.removeItem('current_user');
document.getElementById('auth-screen').style.display = 'flex';
document.getElementById('main-app').style.display = 'none';
```

---

## 📋 ФАЙЛЫ ДЛЯ РЕДАКТИРОВАНИЯ

Если нужно изменить тестовых пользователей:

### 1. Добавить нового пользователя
**Файл:** `data.js`
```javascript
const users = [
    { name: 'Новое имя', avatar: 'https://i.pravatar.cc/100?u=newname', nickname: '', birthplace: '', birthyear: '', bio: '' },
    // ... остальные
];
```

### 2. Изменить пароль
**Файл:** `auth.js`
```javascript
const DEMO_PASSWORD = '0000'; // Измените на новый пароль
```

### 3. Добавить контакт Zapret Bot
**Файл:** `data.js`
```javascript
const chats = [
    { id: 'zapretbot', name: 'Zapret Bot', type: 'channel', pinned: true, ... }
];
```

---

## 🎮 КАК ИСПОЛЬЗОВАТЬ

### Вариант 1: 2 вкладки одного браузера
```bash
python -m http.server 8000
# Вкладка 1: логин как Саня
# Вкладка 2: логин как Маша
```

### Вариант 2: 2 браузера (Chrome + Firefox)
```bash
npm install && npm start          # Терминал 1
python -m http.server 8000        # Терминал 2
# Chrome: логин как Саня
# Firefox: логин как Маша
```

---

## ✅ ЧЕКЛИСТ

- [x] 5 тестовых пользователей (Саня, Маша, Тимур, Александр, Иван)
- [x] Пароль для всех: 1234
- [x] Поиск по сообщениям и контактам
- [x] Прокрутка вверх/вниз работает
- [x] Кнопка выхода в профиле
- [x] WebSocket синхронизация между браузерами
- [x] localStorage fallback
- [x] BroadcastChannel для вкладок
- [x] Автоматический вход при F5
- [x] Sticky input field (всегда видно)
- [x] Файлы и голос
- [x] Эмодзи панель
- [x] Zapret Bot отвечает
- [x] Архив чатов

**Все готово! ✅**

---

## 🔗 БЫСТРЫЕ ССЫЛКИ

| Документ | Где |
|----------|-----|
| Полная инструкция | INSTALL.md |
| Быстрый старт (30с) | QUICKSTART.md |
| Тестирование 2 браузеров | BROWSER_TEST.md |
| Все функции | FEATURES.md |
| История изменений | CHANGELOG.md |
| Базовая инфо | README.md |

---

## 💬 ПРИМЕРЫ СООБЩЕНИЙ

**Саня → Маша:**
```
Привет, Маша! 👋
Как дела?
```

**Маша → Саня:**
```
Привет! 😊
Все хорошо, спасибо!
```

**Саня → Zapret Bot:**
```
Привет, бот!
```

**Zapret Bot → Саня:**
```
Здравствуй! Я Zapret Bot 🤖
Чем я могу тебе помочь?
```

---

## 🚨 ЕСЛИ НЕ РАБОТАЕТ

1. **Проверьте WebSocket сервер:**
   ```bash
   npm start
   ```
   Должны увидеть: `Server listening on ws://localhost:3000`

2. **Проверьте HTTP сервер:**
   ```bash
   python -m http.server 8000
   ```
   Должны увидеть: `Serving HTTP on 0.0.0.0 port 8000`

3. **Откройте консоль браузера (F12):**
   - Нет красных ошибок?
   - Есть сообщение "Connected to WebSocket"?

4. **Обновите страницу (F5) и попробуйте снова**

---

## 🎯 ГЛАВНОЕ

**Главное условие для синхронизации:**
1. WebSocket сервер должен быть **запущен** (`npm start`)
2. HTTP сервер должен быть **запущен** (`python -m http.server 8000`)
3. 2 браузера должны открыть **одинаковый URL** (`http://localhost:8000`)
4. Пользователи должны **войти разными именами** (Саня и Маша)

**Если это всё выполнено — синхронизация будет работать на 100%!** ✅

---

**Версия:** 1.0  
**Обновлено:** 8 марта 2026  
**Статус:** ✅ READY
