const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const generatePasswordBtn = document.querySelector(".generate-passwords-btn");
const displayPassword = document.querySelectorAll(".pw-display"); // selecting all 4 divs into one array...
const changePasswordLength = document.querySelector(".change-password-length");

// generating passwords and getting it as array.....
function generatePassword(num) {
  const pwArr = []; // empty array initially..

  for (let j = 1; j <= 4; j++) {
    let resultStr = "";
    for (let i = 1; i <= num; i++) {
      // why num becoz to get password length upto user specific length...
      let randomIndex = Math.floor(Math.random() * characters.length);
      resultStr += characters[randomIndex];
    }
    pwArr.push(resultStr); // pushing the concated string to the array....
  }
  return pwArr;
}

let num = changePasswordLength.min; // initially the min password length is 8
changePasswordLength.value = num;
changePasswordLength.addEventListener(
  "input",
  () => (num = changePasswordLength.value) // when user click the input field then num will get the value...
);

function renderPassword() {
  let passwords = generatePassword(num); // getting array of 4 element (4 divs specific)...

  for (let i = 0; i < displayPassword.length; i++) {
    displayPassword[i].textContent = passwords[i];
  }
}

generatePasswordBtn.addEventListener("click", renderPassword);
