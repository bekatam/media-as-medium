const elem = document.querySelector('.start');
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
            elem.innerHTML = `
            <div class="wrapper">
            <img src="${item.multimedia[2].url}" alt="author" class="author_img">
            <div class="author_text">
                <div class="author_name">${item.byline.split('By ')[1]}</div>
                <div class="author_subtext">
                    <span class="date">${converter(item.created_date.split('-'))}</span> 
                    <span>·</span>
                    <span class="read">12 min read</span>
                    <span>·</span>
                    <span class="permission" >Member only</span>
                </div>
            </div>
            <div class="socials">
                <a href="https://www.linkedin.com/"><img src="assets/LinkedIn.png" alt="linkedin" class="icon"></a>
                <a href="https://www.facebook.com/"><img src="assets/Facebook.png" alt="facebook" class="icon"></a>
                <a href="https://www.twitter.com/"><img src="assets/Twitter.png" alt="twitter" class="icon"></a>
            </div>
        </div>
        <div class="title">${item.title}</div>
        <div class="subtitle">${item.abstract}</div>
        <img src="${item.multimedia[0].url}" alt="main" class="main_img">
        <div class="subheader_title">Subheader</div>
        <div class="text">
            How long are you awake in the morning before you go online? Perhaps it's while you're still lying in bed, using a news feed or social media as the needed stimulant to push you out from under the covers. Or maybe you wait to open your device until after a warm shower and cup of coffee. If you use sleep tracking apps, you might say you never signed off in the first place. <br><br>
            And, like millions of others during the pandemic, the internet is probably what enabled you to stay in touch with family, or complete entire years of work and/or school remotely. If this sounds familiar, then you live in a part of the world where an internet connection now counts as an essential utility — one that's as easy to take for granted as the natural gas heating your shower water or the electricity powering your coffee maker.<br><br>
            But if you think we're hyperconnected today, just wait. Globally, just over 55% of today's households have an internet connection. This gap between the internet haves and have-nots is referred to as the digital divide, and access is skewed toward richer nations. The gap is projected to close in the next decade as billions of homes connect to the internet for the first time and by 2030 it's estimated that the technology industry could account for 20% of the global electricity demand. This presents a troublesome dichotomy. On one hand, it supports livelihoods, educations, and bolsters the global economy; on the other hand, the increased usage of the apps, websites, and services that we build will place an even greater strain on our already-overloaded power grids.
        </div>
        <div class="bottom">
            <div class="bottom__left">
                <img src="assets/Heart.png" alt="heart" class="icon">
                <div class="likes">180</div>
                <img src="assets/comments.png" alt="comments" class="icon">
                <div class="likes">12</div>
            </div>
            <div class="bottom__right"><img src="assets/Bookmark.png" alt="fav" class="icon"></div>
        </div>
        <hr>
        `;});
    });
  };
  
  getArticles();