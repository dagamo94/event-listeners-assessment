import "./styles.css";

/*
Add event listeners to the `.expand_button` buttons
In this function, first select all the buttons with the class .expand_button. On each button, add a click event listener that does the following:

Find the article in which the button that was clicked belongs.
If the text on the button that was clicked is a V, then set the display property of the article's body to none. Also set the text on the button to >.
If the text on the button that was clicked is not a V, then set the display property of the article's body to block. Also set the text on the button to V.
Hint: To write this function, you may need a method to find a node that matches a provided selector string. As a learning how to learn exercise, do a Google search on something like "MDN js find parent of child element." Read the method's documentation and use it to write the function.
*/
function expandArticleBody() {
  // your code here
  const articleHeads = document.querySelectorAll(".article_head");
  articleHeads.forEach((article) => {
    const expandBtn = article.querySelector(".expand_button");
    expandBtn.addEventListener("click", (event) => {
      const articleBody = article.parentElement.querySelector(".article_body");

      if (expandBtn.innerHTML === "V") {
        articleBody.style.display = "none";
        expandBtn.innerHTML = "&gt;";
      } else {
        expandBtn.innerHTML = "V";
        articleBody.style.display = "block";
      }
    });
  });
}

/*
Add event listeners to the `.highlightBtn` buttons
In this function first select all buttons with the class .highlightBtn. On each button, add a click event listener that does the following:

Find the article in which the button that was clicked belongs.
If the text on the button is +, then add the .highlight class to the article and set the text on the button to -.
If the text on the button is not +, then remove the .highlight class from the article and set the text on the button to +.
*/
function highlightArticle() {
  const articles = document.querySelectorAll("article");
  articles.forEach(article => {
    const highlightBtn = article.querySelector(".highlightBtn");
    highlightBtn.addEventListener("click", event => {
      if(highlightBtn.innerText === '+'){
        article.classList.add("highlight");
        highlightBtn.innerText = '-';
      }else{
        article.classList.remove("highlight");
        highlightBtn.innerText = '+';
      }
    });
  });
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
