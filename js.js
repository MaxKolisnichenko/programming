// Масив цитат
const quotes = [
    "Життя — це те, що трапляється, поки ви плануєте інші речі.",
    "Мрії не працюють, поки ви не працюєте над ними.",
    "Щастя не залежить від того, що ви маєте, а від того, як ви це сприймаєте.",
    "Ніколи не пізно бути тим, ким ви могли б стати.",
    "Успіх приходить до тих, хто не боїться ризикувати."
  ];
  
  // Функція для отримання випадкової цитати
  const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
  
  // Робота з DOM, оновлення цитати при натисканні кнопки
  const displayRandomQuote = () => {
    document.getElementById("quote-box").textContent = getRandomQuote();
  };
  
  // Додаємо обробник події на кнопку
  document.getElementById("new-quote").addEventListener("click", displayRandomQuote);
  