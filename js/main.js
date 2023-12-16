var quote = [
  {
    author: "Jim Rohn",
    quote: "Beware of what you become in pursuit of what you want.",
  },
  {
    author: "Epictetus",
    quote:
      "It's not what happens to you, but how you react to it that matters.",
  },
  { author: "Frank Sinatra", quote: "The best revenge is massive success." },
  {
    author: "Wayne Gretzy",
    quote: "You miss 100% of the shots you don't take.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
  },
  {
    author: "Elbert Hubbard",
    quote: "Do not take life too seriously. You will not get out alive.",
  },
];

// by using random function
document.getElementById("quoteOutput").innerHTML = ` ${quote[0].quote}`;
document.getElementById(
  "authorOutput"
).innerHTML = `--${quote[randomNum].author}`;
function addQuote() {
  const randomNum = Number.parseInt(Math.random() * quote.length);
  document.getElementById(
    "quoteOutput"
  ).innerHTML = `\"${quote[randomNum].quote}\"`;
  document.getElementById(
    "authorOutput"
  ).innerHTML = `--${quote[randomNum].author}`;
}

/*by using counter*/
// document.getElementById("demo").innerHTML = quote[0];
// var cartona = "";
// var i = 0;
// function addQuote() {
//   if (i === quote.length - 1) {
//     i = 0;
//   } else {
//     cartona = quote[i++];
//   }

//   document.getElementById("demo").innerHTML = cartona;
// }
