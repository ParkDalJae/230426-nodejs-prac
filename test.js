import inquirer from "inquirer";

function shuffle(array) {
  // Fisher–Yates shuffle 알고리즘을 이용하여 배열을 섞는다.
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function promptQuestion() {
  const choices = shuffle([
    { name: "JavaScript", value: "js" },
    { name: "Python", value: "py" },
    { name: "Java", value: "java", short: "J" },
    { name: "C++", value: "cpp" },
    { name: "Ruby", value: "ruby" },
  ]);

  inquirer
    .prompt([
      {
        type: "list",
        name: "language",
        message: "What is your favorite programming language?",
        choices: choices,
      },
    ])
    .then((answers) => {
      console.log(`Your favorite programming language is ${answers.language}`);
      promptQuestion(); // 다시 호출
    });
}

promptQuestion(); // 함수 호출
