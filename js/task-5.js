function checkForSpam(message) {
    let result;
    // Пиши код ниже этой строки
  
   
    
    
        if (message.toLowerCase().includes('spam')) {
            result = true;
        } else if(message.toLowerCase().includes('sale')) {
            result = true;
        } else {
            result = false;
    }
    
        // Пиши код выше этой строки
        return result;
    }

console.log(checkForSpam('[SPAM] How to earn fast money?'));


// Объявлена функция checkForSpam(message).
// Вызов функции checkForSpam('Latest technology news') возвращает false.
// Вызов функции checkForSpam('JavaScript weekly newsletter')возвращает false.
// Вызов функции checkForSpam('Get best sale offers now!') возвращает true.
// Вызов функции checkForSpam('Amazing SalE, only tonight!') возвращает true.
// Вызов функции checkForSpam('Trust me, this is not a spam message') возвращает true.
// Вызов функции checkForSpam('Get rid of sPaM emails. Our book in on sale!') возвращает true.
// Вызов функции checkForSpam('[SPAM] How to earn fast money?') возвращает true.