function startApp() {
    const name = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (!name) { alert('Введите имя'); return; }
    if (!password) { alert('Введите пароль'); return; }
    
    // Проверка пароля (все тестовые пользователи: пароль 1234)
    const DEMO_PASSWORD = '1234';
    if (password !== DEMO_PASSWORD) { alert('❌ Неверный пароль. Пароль для всех: 1234'); return; }

    // Разрешаем вход с любым именем (локальный режим) — если в users есть данные, используем их как шаблон
    const user = users.find(u => u.name === name);
    const savedUser = JSON.parse(localStorage.getItem('zapretka_user_' + name));
    if (savedUser) {
        me = { name, ...savedUser };
    } else if (user) {
        me = { ...user };
    } else {
        // создаём минимальный профиль
        me = { name, avatar: `https://i.pravatar.cc/100?u=${encodeURIComponent(name)}`, nickname: '', birthplace: '', birthyear: '', bio: '' };
    }

    // Сохраняем текущего пользователя в sessionStorage для автоматического входа при обновлении
    if (typeof sessionStorage !== 'undefined') sessionStorage.setItem('current_user', name);

    // Скрыть экран входа и показать основное приложение
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('main-app').style.display = 'grid';

    // Инициализация приложения
    initApp();
}