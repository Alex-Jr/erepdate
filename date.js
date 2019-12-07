
window.onload = function(){
    const initdate = new Date('11/20/2007');

    c_header = document.getElementsByClassName('eday')[0];

    c_header.innerText = addDays(initdate, parseInt(c_header.innerText.substring(4).replace(',','')))    

};

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    
    n_date = result.getDay().toString() +"/"+ result.getMonth().toString() +"/"+ result.getFullYear().toString()
    return n_date
}
