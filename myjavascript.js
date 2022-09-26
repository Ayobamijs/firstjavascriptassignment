// let multiple1 = 3
// multiple1 *= 2

// document.getElementById('ans').innerHTML = "<code> let multiple1=3 </code> <br> <code> multiple1 *=2 </code> <br> <code> Ans =" + multiple1;
// // window.alert(multiple1)


// let exponent = 10
// exponent **= 10

// document.getElementById('expo').innerHTML = "<code> let exponent=10</code><br> <code> exponent **=10 </code><br> Ans =" + exponent;

// let modu = 20
// modu %= 3


// document.getElementById('modulous').innerHTML = "<code>let modu = 20 </code><br> <code>modu % =3</code><br> Ans =" + modu;

// let divnumber = 30
// divnumber /= 5

// document.getElementById('diviop').innerHTML = "<code>let divnumber = 30</code><br> <code>divnumber /= 5 </code><br>Ans =" + divnumber;

let random = Math.random();
let link = (random < 0.7) ? "<a href='https//Twitter.com'>TWITTER LINK</a>" : "<a href='https//facebook.com'>FACEBOOK LINK</a>";
document.getElementById('link1').innerHTML = link

let random1 = Math.random();
let link1 = (random1 > 0.4) ? "<a href='https//Konga.com'>KONGA LINK</a>" : "<a href='https//aliexpress.com'>Aliexpress Link</a>";
document.getElementById('Link2').innerHTML = link1

let random2 = Math.random();
let link3 = (random2 < 0.8) ? "<a href='https//fiverr.com'>FIVERR LINK</a>" : "<a href='https//freelancer.com'>FREELANCER LINK</a>";
document.getElementById('link3').innerHTML = link3

let scorea = 78
let result = (scorea >= 75) ? "You Scored A" : "You Failed";
document.getElementById('score1').innerHTML = "<code>let scorea = 78</code><br> <code>let result = (scorea >= 75) ? \"You Scored A\" : \"You Failed\" <br>" + result

let scoreb = 66
let resultb = (scoreb >= 65) ? "You Scored B" : "You Failed";
document.getElementById('score2').innerHTML = "<code>let scoreb = 66</code><br> <code>let resultb = (scoreb >= 65) ? \"You Scored B\" : \"You Failed\" <br>" + resultb

let scorec = 53
let resultc = (scorec >= 55) ? "You Scored C" : "You Failed";
document.getElementById('score3').innerHTML = "<code>let scorec = 53</code><br> <code>let resultc = (scorec >= 55) ? \"You Scored C\" : \"You Failed\" <br>" + resultc

let scored = 46
let resultd = (scored >= 45) ? "You Scored D" : "You Failed"
document.getElementById('score4').innerHTML = "<code>let scored = 46</code><br> <code>let resultd = (scored >= 45) ? \"You Scored D\" : \"You Failed\" <br>git" + resultd
