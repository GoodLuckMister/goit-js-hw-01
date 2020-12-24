'use strict'
const ADMIN_PASSWORD = 'reactismyjam';
let message;
message = prompt()
if (message === null) {
    alert('Отменено пользователем')
}
else if (message === ADMIN_PASSWORD) {
    message = 'Добро пожаловать'   
}
else {
    message = 'Доступ запрещен, пароль неверный'
    
}
alert( message );