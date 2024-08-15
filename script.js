function displayQuiz() {
  const questions = [
    { question: "You just moved to a new place to start a new life!! Why are you leaving?",
      choices: ["To chase my dreams", "I need to leave", "I’m just bored", "To advance in my studies/career"],
      weights: [
        { oneScore: 1, twoScore: 1, threeScore: 3, fourScore: 2, fiveScore: 2, sixScore: 1, sevenScore: 3, eightScore: 3, nineScore: 1, tenScore: 1 }, 
        { oneScore: 3, twoScore: 2, threeScore: 0, fourScore: 0, fiveScore: 3, sixScore: 2, sevenScore: 1, eightScore: 1, nineScore: 2, tenScore: 2 }, 
        { oneScore: 2, twoScore: 0, threeScore: 2, fourScore: 1, fiveScore: 0, sixScore: 0, sevenScore: 0, eightScore: 2, nineScore: 0, tenScore: 0 }, 
        { oneScore: 0, twoScore: 3, threeScore: 0, fourScore: 3, fiveScore: 1, sixScore: 3, sevenScore: 2, eightScore: 0, nineScore: 3, tenScore: 3 }  
      ]
    },
    {question: "What did you pack to remind you of home?",
      choices: ["A copy of your family recipe cookbook", "Asian snacks", "A lucky charm", "Pictures of your friends and family"],
      weights: [
        { oneScore: 2, twoScore: 2, threeScore: 1, fourScore: 0, fiveScore: 2, sixScore: 0, sevenScore: 0, eightScore: 0, nineScore: 0, tenScore: 0 }, // Weight for first choice
        { oneScore: 3, twoScore: 0, threeScore: 0, fourScore: 2, fiveScore: 1, sixScore: 0, sevenScore: 0, eightScore: 0, nineScore: 3, tenScore: 0 }, // Weight for second choice
        { oneScore: 0, twoScore: 1, threeScore: 3, fourScore: 1, fiveScore: 0, sixScore: 3, sevenScore: 2, eightScore: 3, nineScore: 0, tenScore: 0 }, // Weight for third choice
        { oneScore: 1, twoScore: 3, threeScore: 0, fourScore: 3, fiveScore: 3, sixScore: 2, sevenScore: 3, eightScore: 0, nineScore: 0, tenScore: 3 }  // Weight for fourth choice
      ]
    },
  {question: "What’s the first thing you do to make your new place feel like home?",
    choices: ["Hang your pictures on the wall", "Put some plants everywhere", "Relax and make a cup of coffee and then sleep", "Dance party in the house !!"],
    weights: [
      { oneScore: 0, twoScore: 1, threeScore: 0, fourScore: 2, fiveScore: 3, sixScore: 0, sevenScore: 3, eightScore: 0, nineScore: 0, tenScore: 2 }, // Weight for first choice
      { oneScore: 0, twoScore: 2, threeScore: 0, fourScore: 0, fiveScore: 0, sixScore: 2, sevenScore: 2, eightScore: 0, nineScore: 0, tenScore: 3 }, // Weight for second choice
      { oneScore: 0, twoScore: 3, threeScore: 0, fourScore: 3, fiveScore: 0, sixScore: 3, sevenScore: 0, eightScore: 0, nineScore: 0, tenScore: 1 }, // Weight for third choice
      { oneScore: 3, twoScore: 0, threeScore: 3, fourScore: 1, fiveScore: 2, sixScore: 1, sevenScore: 0, eightScore: 3, nineScore: 3, tenScore: 0 }  // Weight for fourth choice
    ]
  },
  {question: "How do you plan to explore your new neighborhood?",
    choices: ["Go for a walk around the city", "Research and make a must-visit list", "Make friends with your neighbors and ask them", "I’ll think about it later"],
    weights: [
      { oneScore: 0, twoScore: 3, threeScore: 0, fourScore: 2, fiveScore: 3, sixScore: 2, sevenScore: 0, eightScore: 3, nineScore: 1, tenScore: 2 }, // Weight for first choice
      { oneScore: 0, twoScore: 1, threeScore: 0, fourScore: 1, fiveScore: 2, sixScore: 3, sevenScore: 3, eightScore: 0, nineScore: 0, tenScore: 0 }, // Weight for second choice
      { oneScore: 3, twoScore: 2, threeScore: 0, fourScore: 3, fiveScore: 0, sixScore: 0, sevenScore: 0, eightScore: 2, nineScore: 0, tenScore: 3 }, // Weight for third choice
      { oneScore: 2, twoScore: 0, threeScore: 3, fourScore: 0, fiveScore: 0, sixScore: 0, sevenScore: 2, eightScore: 1, nineScore: 3, tenScore: 0 }  // Weight for fourth choice
    ]
  },
  {question: "A new place calls for a celebration! Who are you inviting to your party?",
    choices: ["My only 1-2 friends", "All of my besties", "The new friends i made along the way", "I don’t invite people; I wait for them to invite me…"],
    weights: [
      { oneScore: 0, twoScore: 3, threeScore: 0, fourScore: 3, fiveScore: 2, sixScore: 3, sevenScore: 2, eightScore: 3, nineScore: 0, tenScore: 3 }, // Weight for first choice
      { oneScore: 2, twoScore: 0, threeScore: 3, fourScore: 0, fiveScore: 3, sixScore: 0, sevenScore: 3, eightScore: 0, nineScore: 0, tenScore: 0 }, // Weight for second choice
      { oneScore: 3, twoScore: 0, threeScore: 2, fourScore: 0, fiveScore: 0, sixScore: 0, sevenScore: 0, eightScore: 0, nineScore: 0, tenScore: 2 }, // Weight for third choice
      { oneScore: 0, twoScore: 0, threeScore: 0, fourScore: 0, fiveScore: 0, sixScore: 2, sevenScore: 0, eightScore: 2, nineScore: 3, tenScore: 0 }  // Weight for fourth choice
    ]
  },
  {question: "Let’s hype up the party! What playlist do you put on?",
    choices: ["TIK TOK VIRAL HITS 🔥🔥", "Your favorite Kpop songs", "Good ol’ retro classics", "Jazzy music"],
    weights: [
      { oneScore: 3, twoScore: 0, threeScore: 0, fourScore: 0, fiveScore: 3, sixScore: 3, sevenScore: 3, eightScore: 0, nineScore: 2, tenScore: 0 }, // Weight for first choice
      { oneScore: 3, twoScore: 1, threeScore: 3, fourScore: 0, fiveScore: 2, sixScore: 2, sevenScore: 2, eightScore: 0, nineScore: 3, tenScore: 0 }, // Weight for second choice
      { oneScore: 0, twoScore: 2, threeScore: 2, fourScore: 3, fiveScore: 0, sixScore: 0, sevenScore: 0, eightScore: 3, nineScore: 0, tenScore: 0 }, // Weight for third choice
      { oneScore: 0, twoScore: 3, threeScore: 1, fourScore: 2, fiveScore: 0, sixScore: 1, sevenScore: 0, eightScore: 0, nineScore: 0, tenScore: 3 }  // Weight for fourth choice
    ]
  },
  {question: "Everyone is hungry! What snacks do you feed them?",
    choices: ["All the pastries - croissants, pain au chocolates, bread", "Fancy scones and light cakes", "Fresh fruit", "You cant cook, oops"],
    weights: [
      { oneScore: 0, twoScore: 0, threeScore: 3, fourScore: 2, fiveScore: 3, sixScore: 0, sevenScore: 3, eightScore: 0, nineScore: 0, tenScore: 2 }, // Weight for first choice
      { oneScore: 0, twoScore: 3, threeScore: 0, fourScore: 3, fiveScore: 2, sixScore: 2, sevenScore: 0, eightScore: 3, nineScore: 0, tenScore: 1 }, // Weight for second choice
      { oneScore: 0, twoScore: 0, threeScore: 0, fourScore: 1, fiveScore: 0, sixScore: 3, sevenScore: 0, eightScore: 0, nineScore: 3, tenScore: 3 }, // Weight for third choice
      { oneScore: 3, twoScore: 0, threeScore: 0, fourScore: 0, fiveScore: 0, sixScore: 1, sevenScore: 3, eightScore: 0, nineScore: 2, tenScore: 0 }  // Weight for fourth choice
    ]
  },
  {question: "What are you guys doing for entertainment at the party?",
    choices: ["Time for board game night", "Movie marathon", "Karaoke, of course", "Dance-off and rap battle"],
    weights: [
      { oneScore: 0, twoScore: 3, threeScore: 0, fourScore: 3, fiveScore: 2, sixScore: 3, sevenScore: 2, eightScore: 3, nineScore: 0, tenScore: 0 }, // Weight for first choice
      { oneScore: 0, twoScore: 2, threeScore: 0, fourScore: 2, fiveScore: 0, sixScore: 2, sevenScore: 0, eightScore: 2, nineScore: 3, tenScore: 3 }, // Weight for second choice
      { oneScore: 2, twoScore: 1, threeScore: 3, fourScore: 1, fiveScore: 3, sixScore: 0, sevenScore: 3, eightScore: 0, nineScore: 0, tenScore: 0 }, // Weight for third choice
      { oneScore: 3, twoScore: 0, threeScore: 2, fourScore: 0, fiveScore: 0, sixScore: 0, sevenScore: 1, eightScore: 0, nineScore: 2, tenScore: 0 }  // Weight for fourth choice
    ]
  },
  {question: "Oh no– a stalker just crashed your party! What do you do?",
    choices: ["Throw canon balls at them", "Scare them away", "Invite them to join the party", "Calmly ask them to leave"],
    weights: [
      { oneScore: 0, twoScore: 0, threeScore: 2, fourScore: 0, fiveScore: 3, sixScore: 2, sevenScore: 0, eightScore: 2, nineScore: 3, tenScore: 0 }, // Weight for first choice
      { oneScore: 3, twoScore: 0, threeScore: 0, fourScore: 0, fiveScore: 2, sixScore: 1, sevenScore: 3, eightScore: 0, nineScore: 2, tenScore: 0 }, // Weight for second choice
      { oneScore: 1, twoScore: 0, threeScore: 3, fourScore: 0, fiveScore: 0, sixScore: 0, sevenScore: 0, eightScore: 3, nineScore: 0, tenScore: 0 }, // Weight for third choice
      { oneScore: 0, twoScore: 3, threeScore: 0, fourScore: 3, fiveScore: 0, sixScore: 3, sevenScore: 2, eightScore: 0, nineScore: 0, tenScore: 3 }  // Weight for fourth choice
    ]
  },
  {question: "Turns out the stalker is a delivery guy who’s giving everyone their own free drinks!",
    choices: ["You ask why and are skeptical", "You immediately take the drinks, FREE STUFF!", "YOU INVITE THE DELIVERY GUY TO THE PARTY", "You say thank you, goodbye"],
    weights: [
      { oneScore: 0, twoScore: 2, threeScore: 0, fourScore: 3, fiveScore: 0, sixScore: 3, sevenScore: 2, eightScore: 0, nineScore: 0, tenScore: 3 }, // Weight for first choice
      { oneScore: 3, twoScore: 0, threeScore: 0, fourScore: 0, fiveScore: 3, sixScore: 0, sevenScore: 0, eightScore: 0, nineScore: 3, tenScore: 0 }, // Weight for second choice
      { oneScore: 0, twoScore: 0, threeScore: 3, fourScore: 0, fiveScore: 0, sixScore: 0, sevenScore: 0, eightScore: 3, nineScore: 0, tenScore: 0 }, // Weight for third choice
      { oneScore: 0, twoScore: 3, threeScore: 0, fourScore: 0, fiveScore: 0, sixScore: 2, sevenScore: 3, eightScore: 2, nineScore: 0, tenScore: 0 }  // Weight for fourth choice
    ]
  },
  {question: "It is now time to find out your drink",
    choices: ["Collect my personality drink"],
    weights: [
      { oneScore: 0, twoScore: 0, threeScore: 0, fourScore: 0, fiveScore: 0, sixScore: 0, sevenScore: 0, eightScore: 0, nineScore: 0, tenScore: 0 }
    ]//Placeholder
  }
  ];

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

  function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const answers = [];

      questions.forEach((_, index) => {
          const choice = formData.get(`question${index}`);
          answers.push(choice !== null ? parseInt(choice, 10) : 0);
      });

      console.log("Answers Array:", answers);

      const result = calculateResult(answers);
      document.getElementById('result').innerText = `Your result is: ${result}`;

      document.getElementById('questions-container').style.display = 'none';
      document.getElementById('submit').style.display = 'none';
      document.getElementById('result').style.display = 'block';
  }

  function calculateResult(answers) {
      const numResults = 10; // Number of results
      const scores = new Array(numResults).fill(0); // Initialize scores array

      answers.forEach((answer, qIndex) => {
          // Skip placeholder question
          if (qIndex >= questions.length - 1) return;

          if (answer < 0 || answer >= questions[qIndex].weights.length) return;

          const weights = questions[qIndex].weights[answer];
          for (let i = 1; i <= numResults; i++) {
              const weightKey = `${i}Score`;
              scores[i - 1] += weights[weightKey] || 0;
          }
      });

      console.log("Scores:", scores);

      const maxScore = Math.max(...scores);
      const maxIndexes = scores
        .map((score, index) => (score === maxScore ? index : null))
        .filter(index => index !== null);

      if (maxIndexes.length === 0) return "No results available.";

      const randomIndex = maxIndexes[Math.floor(Math.random() * maxIndexes.length)];
      console.log("Selected Index:", randomIndex);

      return results[randomIndex];
  }

document.getElementById('enter').addEventListener('click', function() {
  document.getElementById('quiz-container').style.display = 'block';
  document.getElementById('enter').style.display = 'none';
  document.getElementById('title').style.display = 'none';

  generateQuiz(); 
});

document.getElementById('quiz-form').addEventListener('submit', handleSubmit);
}

document.addEventListener('DOMContentLoaded', displayQuiz);