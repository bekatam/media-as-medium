const main = document.querySelector('.start');

const converter = (date) => {
    const month = date[1];
    const day = +(date[2].substring(0,2));
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
    return `${day} ${months[month-1]} ${date[0]}`;
};



function getArticles(){
    fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=gShwAMuobv9s46ta3DfGKg4qWjCIPQC3')
    .then(function(promise){
      return promise.json();
    })
    .then(function(data){
        data.results.splice(2, 5).forEach(item=>{
            main.innerHTML += `
            <div class="main">
                <div class="wrapper">
                    <div class="left">
                        <div class="left__top">
                            <img src="${item.multimedia[2].url}" alt="author" class="author__img">
                            <div>
                                <span class="authorName">${item.byline.split('By ')[1]}</span> <span>in</span> <span class="topic">${item.section}</span> · <span class="data">${converter(item.created_date.split('-'))}</span>
                            </div>
                        </div>
                        <a href="article.html" class="link">
                            <div class="title">${item.title}</div>
                            <div class="caption">${item.abstract}</div>
                        </a>
                        <div class="left__bottom">
                            <div class="topic__circle">
                                <a class="topic">${item.section}</a>
                            </div>
                            <span class="topic__read">12 min read</span> <span>·</span> <span class="topic__forYou">Selected for you</span>
                            <div class="square" style="margin-left: 350px;"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                        </div>
                    </div>
                    <img src="${item.multimedia[0].url}" alt="img" class="img">
                </div>
                <hr>
            </div>
        `;});
    });
  };
  
  getArticles();
