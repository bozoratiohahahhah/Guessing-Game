// Add JavaScript code for your web site here and call it from index.html.  
//const IDarr = ["hideq1","hideq2","hideq3","hideq4","hideq5","hideq6","hideq7","hideq8","hideq9","hideq10"];//
/*namesubmitbtn = document.getElementById("namesubmitbtn");
namesubmitbtn.addEventListener("click", namesubmit);
startquiz.addEventListener("click", startq);
finishbtn.addEventListener("click",submit);
play2btn.addEventListener("click",playagain);*/


let scoree = 0;


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function namesubmit(){
    namee = name123.value;
    namee = namee.toLowerCase();
    namee = capitalizeFirstLetter(namee);
    namesubmitbtn.disabled = true;
    name123.disabled = true;
    const qstartbtn = document.getElementById("startquiz");
    qstartbtn.disabled = false;
    startq22.disabled = false;
    document.getElementById("alerter").innerHTML = namee + ", Click Start quiz to start the quiz. This also starts the timer";
    document.getElementById("entername").innerHTML = "Ok " + namee + ", Let's play!"; 
}

//This is for the mcqs

function pickq(){
    const numberpick = new Set();
    //set is a group of values where none of the values can be repeated, which is exactly what i want to get with 5 distinct integers
    while (numberpick.size<5){
        numberpick.add(Math.floor(Math.random()*15)+1);
        //1 is added beacuse this eliminates 0
    }  
    return Array.from(numberpick);
    console.log(numberpick)
}

function showq(){
    let qarray = pickq();
    qarray.forEach((num) => {
        document.getElementById(`Q${num}`).hidden=false;
        //for each does the thing for each value.
    });
}

function startq(){
    finishbtn.disabled = false;
    startquiz.disabled = true;
    let timer = new Date();
    timestart = timer.getTime();
    hideall.hidden = false;
    hidea.hidden = false;
    pickq();
    showq();
}


function submit(){
    finishbtn.disabled = true;
    play2btn.disabled = false;
    if(q1a3.checked){
        scoree++;
    }
    if(q2a4.checked){
        scoree++;
    }
    if(q3a1.checked){
        scoree++;
    }
    if(q4a1.checked){
        scoree++;
    }
    if(q5a4.checked){
        scoree++;
    }
    if(q6a3.checked){
        scoree++;
    }
    if(q7a2.checked){
        scoree++;
    }
    if(q8a3.checked){
        scoree++;
    }
    if(q9a4.checked){
        scoree++;
    }
    if(q10a2.checked){
        scoree++;
    }
    if(q11a4.checked){
        scoree++;
    }
    if(q12a1.checked){
        scoree++;
    }
    if(q13a2.checked){
        scoree++;
    }
    if(q14a4.checked){
        scoree++;
    }
    if(q15a4.checked){
        scoree++;
    }
    updateScore(scoree);
    updatetime();
}

const scoreArr = [];
const timeArr = [];

function updatetime(){ 
    let timer = new Date();
    timeend = timer.getTime();
    totaltime = (timeend-timestart)/1000;
    totaltime.toFixed(2);
    document.getElementById("times").innerHTML = namee + ", Your time was "+ totaltime;
    timeArr.push(totaltime);  
    let sum2 = 0;
    for(let i = 0; i<timeArr.length; i++){
        sum2 += Number(timeArr[i]);
    }
    let avg2 = sum2/timeArr.length;
    avgTime.innerHTML = namee+ ", Your average Time was " + avg2.toFixed(2);
}

function updateScore(value){
    document.getElementById("scoree").innerHTML = namee + ", Your score is " + scoree + " out of 5.";
    let sum = 0;
    scoreArr.push(value);
    for(let i = 0; i<scoreArr.length; i++){
        sum += scoreArr[i];
    }
    let avg = sum/scoreArr.length;
    avgScore.innerHTML = namee+ ", Your average Score was " + avg.toFixed(2);
    const perc = (value/5)*100;
    if(scoree>3){
        document.getElementById("congrats").innerHTML = namee + ", you got a " + perc+ "%! That means you passed!";
    }
    else if(scoree==3 || scoree == 2){
        document.getElementById("congrats").innerHTML = namee + ", you got a " + perc+ "%. You got an OK score. ";
    }
    else{
        document.getElementById("congrats").innerHTML = namee + ", you got a " + perc+ "%. You failed!";
    }

}

function playagain(){
    let randintarr = [1,2,3,4,5,6,7,8,9,10];
    play2btn.disabled = true;
    startquiz.disabled = false;
    document.getElementById("alerter").innerHTML = namee + ", click the start button again to restart the quiz and the timer."
    scoree = 0;
    for (let i =1; i<=15; i++){
        document.getElementById(`Q${i}`).hidden = true;;
    }
}

function switchfrq(){
    for (let i =1; i<=15; i++){
        document.getElementById(`Q${i}`).hidden = true;;
    }
    hideall.hidden = true;
    hidea.hidden = true;
    startquiz.disabled = true;
    document.getElementById("startq22").disabled = false;
}

//this is for the frq
function startfrq(){
    let timer = new Date();
    frqtimestart = timer.getTime();
    namesubmitbtn.disabeld = true;
    startquiz.disabled = true;
    frq.hidden = false;
    qbrcalc.disabled = false;
}

function calc(){
    var att = parseInt(document.getElementById('att').value);
	var comop = parseInt(document.getElementById('comop').value);
	var yards = parseInt(document.getElementById('yds').value);
	var touchd = parseInt(document.getElementById('tds').value);
	var intss = parseInt(document.getElementById('ints').value);
    let a = ((comop/att)-0.3)*5;
    let b = ((yards/att)-3)*25;
    let c = (touchd/att)*20;
    let d = 2.375 - ((intss/att)*25);
    //qbr value has a max of 158.3, which is set by these values. It also can't be negative
    if(a>2.375){
        a = 2.375
    }
    else if(a<0){
        a = 0
    }

    if(b>2.375){
        b = 2.375;
    }
    else if(b<0){
        b = 0;
    }
    
    if(c>2.375){
        c = 2.375;
    }
    else if(c<0){
        c = 0;
    }
    
    if(d>2.375){
        d = 2.375;
    }
    else if(d<0){
        d = 0;
    }
    let qbr = ((a+b+c+d)/6)*100;
    qbr = qbr.toFixed(2);
    //this is a check for negative values. only yards can be negative
    if(comop <0){
        document.getElementById("qbrating").innerHTML = "Completions cannot be negative. Please try again " + namee;
    }
    else if(att<0){
        document.getElementById("qbrating").innerHTML = "Attempts can't be negative, please try again "+ namee ;
    }
    else if(touchd<0){
        document.getElementById("qbrating").innerHTML = "Touchdowns can't be negative, Please try agai " + namee;
    }
    else if(intss < 0 ){
        document.getElementById("qbrating").innerHTML = "Intercepions can't excede Compleitions, Please try again "+ namee;
    }
    //this is a check for if one item exceeds another. 
    if(comop > att){
        document.getElementById("qbrating").innerHTML = "Completions cannot excede Attempts. Please try again "+ namee;
    }
    else if(touchd>comop){
        document.getElementById("qbrating").innerHTML = "Touchdowns can't excede Completions "+ namee;
    }
    else if(intss > comop){
        document.getElementById("qbrating").innerHTML = "Intercepions can't excede Compleitions, Please try again "+ namee;
    }
    else{
        document.getElementById("qbrating").innerHTML = "Passer Rating is " + qbr;
    }
}

const timefrqArr = [];
const scorefrqArr = [];

function finishfrq(){
    frqscore = 0
    var frq1 = parseInt(document.getElementById('frq1').value);
    var frq2 = parseInt(document.getElementById('frq2').value);
    var frq3 = parseInt(document.getElementById('frq3').value);
    var frq4 = parseInt(document.getElementById('frq4').value);
    var frq5 = parseInt(document.getElementById('frq5').value);
    if(frq1==158.33){
        frqscore++;
    }
    if(frq2==122.92){
        frqscore++;
    }
    if(frq3==2){
        frqscore++;
    }
    if(frq4==43){
        frqscore++;
    }
    if(frq5==79.17){
        frqscore++;
    }

    let timer = new Date();
    frqtimeend = timer.getTime();
    frqtotaltime = (frqtimeend-frqtimestart)/1000;
    frqtotaltime.toFixed(2);
    document.getElementById("times").innerHTML = namee + ", Your time was "+ frqtotaltime;
    timefrqArr.push(frqtotaltime);  
    let sum22 = 0;
    for(let i = 0; i<timefrqArr.length; i++){
        sum22 += Number(timefrqArr[i]);
    }
    let avg22 = sum22/timefrqArr.length;
    avgTime.innerHTML = namee+ ", Your average Time was " + avg22.toFixed(2);

    document.getElementById("scoree").innerHTML = namee + ", Your score is " + frqscore + " out of 5.";
    let sum23 = 0;
    scorefrqArr.push(frqscore);
    for(let i = 0; i<scorefrqArr.length; i++){
        sum23 += scorefrqArr[i];
    }
    let avg123 = sum23/scorefrqArr.length;
    avgScore.innerHTML = namee+ ", Your average Score was " + avg123.toFixed(2);
}

function switchmcq(){
    startquiz.disabled = false;
    frq.hidden = true;
    document.getElementById("startq22").disabled = true;
}

function resetfrq(){
    frq.hidden = true;
}



