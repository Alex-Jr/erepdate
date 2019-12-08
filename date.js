const initdate = new Date('11/20/2007');

window.onload = function(){
    feedDate()
    switchers = document.getElementsByClassName('switchers')
    for (i = 0; i < switchers.length; i++){
        switchers[i].addEventListener("click", function(){
            feedDate()
        });
    }
        
    article_dates = document.getElementsByClassName('date');
    for (i = 1; i < article_dates.length; i++){
        days = parseInt(article_dates[i].innerText.substr(4).replace(',',''));
        if (days !== days){
            continue
        }
        article_dates[i].innerText = addDays(initdate, days);
    }

    comments_dates = document.getElementsByClassName('replyDetails');
    for (i = 0; i < comments_dates.length; i++){
        aux = comments_dates[i].children[0].innerText.split(" ");
        days = parseInt(aux[1].replace(',','').replace(',',''));
        if (days !== days){
            continue
        }
        comments_dates[i].children[0].innerText = addDays(initdate, days) + ' ' + aux[2];
    }

    mu_founded = document.getElementsByClassName('muFounded')[0]
    if(mu_founded !== undefined){
        mu_founded.innerText = addDays(initdate ,parseInt(mu_founded.children[1].children[0].innerText.substring(4).replace(',','')))
    }

    military = document.getElementsByClassName('citizen_military')[1]
    if(military !== undefined){
        words = military.children[2].firstElementChild.innerText.split(' ')
        size = words.length-1
        words[size] = addDays(initdate, parseInt(words[size].replace(',', '')))

        military.children[2].firstElementChild.innerText = words.join(' ')
        }
    
    mas_destruction = document.getElementsByClassName('citizen_mass_destruction')[0]
    if(mas_destruction !== undefined){
        words = mas_destruction.lastElementChild.innerText.split(' ')
        size = words.length-1
        words[size] = addDays(initdate, parseInt(words[size].replace(',', '')))

        mas_destruction.lastElementChild.innerText = words.join(' ')
    }
};

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    n_date = result.getDate().toString() +"/"+ (result.getMonth()+1).toString() +"/"+ result.getFullYear().toString()
    return n_date
}

function feedDate(){
    setTimeout(function(){
        feed_dates = document.getElementsByClassName('time_posted');
        for (i = 0; i < feed_dates.length; i++){
            days = parseInt(feed_dates[i].innerText.substr(4).replace(',',''));
            if (days !== days){
                continue
            }
        feed_dates[i].innerText = addDays(initdate, days);
    }
    }, 2000);   
}
