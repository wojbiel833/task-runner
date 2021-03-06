'use strict';
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts .post.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);
  
  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* [DONE] add class 'active' to the correct article */

  targetArticle.classList.add('active');

};
// MOJA FUNKCJA
function generateTitleLinks(){

  // remove contents of titleList 

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  // for each article 

  const articles = document.querySelectorAll(optArticleSelector);

  for(let article of articles){

    // get the article id 

    const articleId = article.getAttribute('id');
    console.log(articleId);

    // find the title element 

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log(articleTitle);

    // get the title from the title element 

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

    // create HTML of the link 

    titleList.insertAdjacentHTML('beforeend', linkHTML);

  }
      
  const links = document.querySelectorAll('.titles a');
  console.log(links);
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

/*
// FUNKCJA KODILLI
function generateTitleLinks(){
// remove contents of titleList 
  
  const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

// find all the articles and save them to variable: articles 
  
  const articles = document.querySelectorAll(optArticleSelector);

  let html = '';

  for(let article of articles){
// get the article id 

    const articleId = article.getAttribute('id');
    console.log(articleId);

// find the title element 

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log(articleTitle);

// get the title from the title element 

  const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
  console.log(linkHTML);

// create HTML of the link 

  titleList.insertAdjacentHTML('beforeend', linkHTML);
    html = html + linkHTML;
    console.log(html);
  }

  titleList.innerHTML = html;
}

generateTitleLinks();
*/