function displayQuiz() {
  const questions = [
    {
      question: "You just moved to a new place to start a new life!! Why are you leaving?",
      choices: ["To chase my dreams", "I need to leave", "I’m just bored", "To advance in my studies/career"],
      weights: [
        { oneScore: 1, twoScore: 0, threeScore: 0, fourScore: 0, fiveScore: 0, sixScore: 0, sevenScore: 0, eightScore: 0, nineScore: 0, tenScore: 0 }, // Weight for first choice
        { oneScore: 3, twoScore: 0, threeScore: 0, fourScore: 0, fiveScore: 0, sixScore: 0, sevenScore: 0, eightScore: 0, nineScore: 0, tenScore: 0 }, // Weight for second choice
        { oneScore: 3, twoScore: 0, threeScore: 0, fourScore: 0, fiveScore: 0, sixScore: 0, sevenScore: 0, eightScore: 0, nineScore: 0, tenScore: 0 }, // Weight for third choice
        { oneScore: 3, twoScore: 0, threeScore: 0, fourScore: 0, fiveScore: 0, sixScore: 0, sevenScore: 0, eightScore: 0, nineScore: 0, tenScore: 0 }  // Weight for fourth choice
      ]
    }
    // Add more questions here
  ];

  // Array of possible results
  const results = [
    'Result 1: Spicy Buldak Drink Special!',
    'Result 2: Iced Caramel Cappuccino!',
    'Result 3: Peach Lemon Iced Tea!',
    'Result 4: Watermelon Mint Lemonade!',
    'Result 5: Matcha Mango Coconut Latte!',
    'Result 6: Matcha Rose Latte!',
    'Result 7: Tiramisu Latte!',
    'Result 8: Sparkling Lychee Drink!',
    'Result 9: Taro Milk Tea Boba!',
    'Result 10: Dirty Chai Latte!'
  ];

  // Function to generate quiz HTML
  function generateQuiz() {
    const container = document.getElementById('questions-container');
    questions.forEach((q, index) => {
      const questionElement = document.createElement('div');
      questionElement.className = 'question';
      questionElement.innerHTML = `
        <h4>${index + 1}. ${q.question}</h4>
        ${q.choices.map((choice, i) => `
          <div class="form-check">
            <input class="form-check-input" type="radio" name="question${index}" id="q${index}c${i}" value="${i}" required>
            <label class="form-check-label" for="q${index}c${i}">${choice}</label>
          </div>
        `).join('')}
      `;
      container.appendChild(questionElement);
    });
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const answers = [];
    questions.forEach((_, index) => {
      answers.push(parseInt(formData.get(`question${index}`), 10));
    });

    const result = calculateResult(answers);
    document.getElementById('result').innerText = `Your result is: ${result}`;

    document.getElementById('questions-container').style.display = 'none';
    document.getElementById('submit').style.display = 'none';
    document.getElementById('result').style.display = 'block';
  }

  // Function to calculate the result
  function calculateResult(answers) {
    const numResults = 10;
    const scores = new Array(numResults).fill(0);

    questions.forEach((q, index) => {
      const selectedChoiceIndex = parseInt(answers[index], 10);
      if (selectedChoiceIndex !== null && selectedChoiceIndex < q.weights.length) {
        const choiceWeights = q.weights[selectedChoiceIndex];
        for (const [result, score] of Object.entries(choiceWeights)) {
          if (result !== 'weights') {
            const resultIndex = parseInt(result.replace('Score', '')) - 1;
            scores[resultIndex] += score;
          }
        }
      }
    });

    const maxScore = Math.max(...scores);
    const maxIndex = scores.indexOf(maxScore);

    return results[maxIndex];
  }

  document.getElementById('enter').addEventListener('click', function() {
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('enter').style.display = 'none';
    document.getElementById('title').style.display = 'none';
    document.getElementById('title2').style.display = 'none';
    generateQuiz(); 
  });

  // Handle form submission
  document.getElementById('quiz-form').addEventListener('submit', handleSubmit);
}

document.addEventListener('DOMContentLoaded', displayQuiz);
