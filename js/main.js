var quote = [
  `   <p>
"The best revenge is massive success."
<br />
--Frank Sinatra
</p>`,

  `<p>
“Be yourself; everyone else is already taken.”
<br />
― Oscar Wilde</p> `,

  `<p>“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
  <br />
  ― Bernard M. Baruch</p>`,

  ` <p>
  “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    <br />
     ― Albert Einstein
    </p>`,
  `<p>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
    <br />
     ― Marilyn Monroe</p>`,
];

// by using random function
/*function addQuote() {
   const randomNum = Number.parseInt(Math.random() * quote.length);
   document.getElementById("demo").innerHTML = quote[randomNum];
}*/
/*by using counter*/
document.getElementById("demo").innerHTML = quote[0];
var cartona = "";
var i = 0;
function addQuote() {
  if (i === quote.length - 1) {
    i = 0;
  } else {
    cartona = quote[i++];
  }

  document.getElementById("demo").innerHTML = cartona;
}
