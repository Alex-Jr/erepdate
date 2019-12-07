
window.onload = function(){
    const initdate = new Date('11/20/2007');

    c_header = document.getElementsByClassName('eday')[0];

    c_header.innerText = addDays(initdate, parseInt(c_header.innerText.substring(4).replace(',','')))    
    
    feed_dates = document.getElementsByClassName('time_posted');
    for (i = 0; i < feed_dates.length; i++){
        days = parseInt(feed_dates[i].innerText.substr(4).replace(',',''));
        if (days !== days){
            continue
        }
        feed_dates[i].innerText = addDays(initdate, days);
    }

    article_dates = document.getElementsByClassName('date');
    for (i = 1; i < article_dates.length; i++){
        days = parseInt(article_dates[i].innerText.substr(4).replace(',',''));
        if (days !== days){
            continue
        }
        article_dates[i].innerText = addDays(initdate, days);
    }
};

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    
    n_date = result.getDay().toString() +"/"+ result.getMonth().toString() +"/"+ result.getFullYear().toString()
    return n_date
}
