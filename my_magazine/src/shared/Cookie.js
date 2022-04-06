const getCookie = (name) => {
    let values = "; " + document.cookie.trim();
    let parsing = values.split(`; ${name}=`);
    if(parsing.length === 2){
        console.log(parsing)
        return parsing.pop().split(';').shift();
        
    }
}

const setCookie = (name, value, exp = 5) => {

    let date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
}

const delCookie = (name) => {
    let date = new Date("2020-01-01").toUTCString();

    console.log(date);

    document.cookie = name+"=; expires="+date;
}

export {getCookie,setCookie,delCookie};