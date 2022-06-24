// window.addEventListener('DOMContentLoaded', () =>{}

window.onload = initPage;
function initPage(){

    // GRAPHIC LEVEL AGREEMENT

    (function valuesGraphicLevelAgreement(){
        const graphicLevelAgreement = document.querySelector(".graphic-level-agreement");
        const dataPercent = graphicLevelAgreement.getElementsByClassName("number-graphic");
        const dataGoal = graphicLevelAgreement.getElementsByClassName("goal-graphic");
        
        if(isNaN(parseFloat(dataPercent[0].dataset.number))){
            var percentNumber = parseFloat(0).toFixed(2);
        }

        else{
            var percentNumber = parseFloat(dataPercent[0].dataset.number).toFixed(2);
        }

        dataPercent[0].innerText = `${percentNumber.toString().replace('.', ',')}%`;
        
        const goalNumber = parseFloat(dataGoal[0].dataset.goal).toFixed(2);
        if(goalNumber < 0){
            dataGoal[0].classList.add('lower');
        }
        else{
            dataGoal[0].classList.add('higher');
        }
        dataGoal[0].innerText = `${goalNumber.toString().replace('.', ',')}%`;

        const progress = graphicLevelAgreement.querySelector(".progress");
        progress.style.strokeDashoffset = `calc(376 - (376 * ${percentNumber}) / 100)`;
    }) ();



    // GRAPHIC ACCEPTED AND MISSED (CONTENT LEFT)

    (function valuesGraphicsAcceptedMissed(){
        const graphicsAcceptedMissed = document.querySelector(".graphics-accepted-missed");
        const graphicAccepted = graphicsAcceptedMissed.querySelector(".bar.accepted");
        const graphicMissed = graphicsAcceptedMissed.querySelector(".bar.missed");
        const dataNumber = graphicsAcceptedMissed.querySelectorAll(".number p");
        
        var total = 0, valuesGraph = [];
        Array.prototype.forEach.call(dataNumber, function(value) {
            if(isNaN(parseFloat(value.dataset.value))){
                var number = 0;
            }
    
            else{
                var number = parseInt(value.dataset.value);
            }

            valuesGraph.push(number);

            value.innerText = number;
            total += parseInt(number);
        });


        accepted = ((valuesGraph[0] * 100) / total).toFixed(2);
        missed = ((valuesGraph[1] * 100) / total).toFixed(2);

        graphicAccepted.style.width = `${accepted}%`;
        graphicMissed.style.width = `${missed}%`;
    }) ();



    // GRAPHIC DONUT HALF

    (function valuesGraphicDonutHalf(){
        const graphicDonutHalf = document.querySelector(".graphic-donut-half");
        const dataPercent = graphicDonutHalf.getElementsByClassName("number-graphic");
        const dataGoal = graphicDonutHalf.getElementsByClassName("goal-graphic");
        
        if(isNaN(parseFloat(dataPercent[0].dataset.number))){
            var percentNumber = parseFloat(0).toFixed(2);
        }

        else{
            var percentNumber = parseFloat(dataPercent[0].dataset.number).toFixed(2);
        }

        dataPercent[0].innerText = `${percentNumber.toString().replace('.', ',')}%`;
        
        const goalNumber = parseFloat(dataGoal[0].dataset.goal).toFixed(2);
        if(goalNumber < 0){
            dataGoal[0].classList.add('lower');
        }
        else{
            dataGoal[0].classList.add('higher');
        }
        dataGoal[0].innerText = `${goalNumber.toString().replace('.', ',')}%`;

        const progress = graphicDonutHalf.querySelector(".progress");
        progress.style.strokeDashoffset = `calc(377 - (377 * (${percentNumber} / 2)) / 100)`;
    }) ();



    // TIME GOOD-BAD

    (function valuesTimeGoodBad(){
        const dataTime = document.getElementsByClassName("detail-time-elapsed");
        Array.prototype.forEach.call(dataTime, function(value) {
            if(value.dataset.detail.charAt(0) == '-'){
                value.classList.add('time-bad');
            }

            else{
                value.classList.add('time-good');
            }
        });
    }) ();



    // GRAPHICS BAR HORIZONTAL MOST USED

    (function valuesGraphicsBarHorizontalMostUsed(){
        const graphicsBarHorizontalMostUsed = document.getElementsByClassName("most-used-box");
        Array.prototype.forEach.call(graphicsBarHorizontalMostUsed, function(value) {
            const dataValues = value.getElementsByClassName("data-value");
            const dataPercent = value.querySelector(".number-percent");
            var accepted, missed;

            if(isNaN(parseInt(dataValues[0].dataset.value))){
                accepted = 0;
            }
    
            else{
                accepted = parseInt(dataValues[0].dataset.value);
            }

            if(isNaN(parseInt(dataValues[1].dataset.value))){
                missed = 0;
            }
    
            else{
                missed = parseInt(dataValues[1].dataset.value);
            }

            dataValues[0].innerText = accepted;
            dataValues[1].innerText = missed;

            const barAccepted = value.querySelector(".graphics-bar-horizontal .bar.accepted");
            const barMissed= value.querySelector(".graphics-bar-horizontal .bar.missed");

            const total = parseInt(accepted + missed);

            dataPercent.dataset.percent = ((accepted * 100) / total).toFixed(2);

            accepted = (220 * ((accepted * 100) / total) / 100).toFixed(2);
            missed = (220 * ((missed * 100) / total) / 100).toFixed(2);

            barAccepted.style.width = `${accepted}px`;
            barMissed.style.width = `${missed}px`;
            
        });

    }) ();



    // GRAPHICS DOUGHNUT MOST USED

    (function valuesGraphicsDoughnutMostUsed(){
        const graphicsDoughnutMostUsed = document.getElementsByClassName("most-used-box");
            
        Array.prototype.forEach.call(graphicsDoughnutMostUsed, function(value) {
            const dataPercent = value.querySelector(".number-percent");
            console.log();
                
            if(isNaN(parseFloat(dataPercent.dataset.percent))){
                var number = (0).toFixed(2);
            }
        
            else{
                var number = parseFloat(dataPercent.dataset.percent).toFixed(2);
            }
    
            dataPercent.innerText = `${number.toString().replace('.', ',')}%`;
    
            const graph = value.querySelector(".progress");
            graph.style.strokeDashoffset = `calc(189 - (189 * ${number}) / 100)`;
                
        });
    }) ();




    // GRAPHIC BAR HORIZONTAL DIALOGUE VOLUME

    (function valuesGraphicsBarHorizontalVolume(){
        const graphicsBarHorizontalVolume = document.getElementsByClassName("dialogue-volume"),
        legends = graphicsBarHorizontalVolume[0].getElementsByClassName("legend-content"),
        call = graphicsBarHorizontalVolume[0].querySelector(".call"),
        chat = graphicsBarHorizontalVolume[0].querySelector(".chat"),
        email = graphicsBarHorizontalVolume[0].querySelector(".email"),
        callme = graphicsBarHorizontalVolume[0].querySelector(".callme"),
        text = graphicsBarHorizontalVolume[0].querySelector(".text"),
        dialer = graphicsBarHorizontalVolume[0].querySelector(".dialer"),
        contentTotal = document.querySelector(".content-volume .total span");

        const callTotal = parseInt(call.dataset.value), chatTotal = parseInt(chat.dataset.value), emailTotal = parseInt(email.dataset.value), callmeTotal = parseInt(callme.dataset.value), textTotal = parseInt(text.dataset.value), dialerTotal = parseInt(dialer.dataset.value);

        const valuesTotal = callTotal + chatTotal + emailTotal + callmeTotal + textTotal + dialerTotal;
        contentTotal.innerText = valuesTotal;

        

        const callPercent = ((callTotal * 100) / valuesTotal).toFixed(2),
        chatPercent = ((chatTotal * 100) / valuesTotal).toFixed(2),
        emailPercent = ((emailTotal * 100) / valuesTotal).toFixed(2),
        callmePercent = ((callmeTotal * 100) / valuesTotal).toFixed(2),
        textPercent = ((textTotal * 100) / valuesTotal).toFixed(2),
        dialerPercent = ((dialerTotal * 100) / valuesTotal).toFixed(2);

        call.style.width = `${callPercent}%`;
        chat.style.width = `${chatPercent}%`;
        email.style.width = `${emailPercent}%`;
        callme.style.width = `${callmePercent}%`;
        text.style.width = `${textPercent}%`;
        dialer.style.width = `${dialerPercent}%`;
        

        legends[0].getElementsByClassName("total")[0].innerText = callTotal;
        legends[1].getElementsByClassName("total")[0].innerText = chatTotal;
        legends[2].getElementsByClassName("total")[0].innerText = emailTotal;
        legends[3].getElementsByClassName("total")[0].innerText = callmeTotal;
        legends[4].getElementsByClassName("total")[0].innerText = textTotal;
        legends[5].getElementsByClassName("total")[0].innerText = dialerTotal;
    }) ();




    // VALUES TIME ELAPSED AND DETAIL

    (function valuesTimeElapsedAndDetail(){
        const timeElapsed = document.getElementsByClassName("time-elapsed");
        const detailTimeElapsed = document.getElementsByClassName("detail-time-elapsed");
        Array.prototype.forEach.call(timeElapsed, function(value) {
            if(!value.dataset.time){
                value.innerText = "--";
            }
            else{
                value.innerText = value.dataset.time;
            }
        });

        Array.prototype.forEach.call(detailTimeElapsed, function(value) {
            if(!value.dataset.detail){
                value.innerText = "--";
            }
            else{
                value.innerText = value.dataset.detail;
            }
        });
        
    }) ();



    // BAR GRAPHIC
    var ctx = document.getElementById("bar-chart");
    var chartGraph = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["May 1", "May 2", "May 3", "May 4", "May 5", "May 6", "May 7"],
            datasets: [
                {
                    label: "Accepted",
                    data: [25, 11, 2, 15, 13, 8, 4],
                    backgroundColor: '#0FCB8E'
                },
                {
                    label: "Callback",
                    data: [2, 17, 8, 1, 7, 6, 10],
                    backgroundColor: '#05ABB3'
                },
                {
                    label: "Forwarded",
                    data: [19, 25, 5, 11, 7, 5, 16],
                    backgroundColor: '#663CB2'
                },
                {
                    label: "Missed",
                    data: [14, 4, 6, 5, 13, 8, 4],
                    backgroundColor: '#F9393A'
                },
                {
                    label: "NoContact",
                    data: [11, 9, 10, 2, 13, 14, 20],
                    backgroundColor: '#0457CB'
                },
                {
                    label: "NoSkill",
                    data: [18, 1, 8, 18, 13, 10, 9],
                    backgroundColor: '#0783FF'
                },
                {
                    label: "Overflow",
                    data: [17, 13, 9, 11, 13, 15, 1],
                    backgroundColor: '#F5A603'
                },
                {
                    label: "VoiceMail",
                    data: [15, 15, 5, 16, 13, 18, 5],
                    backgroundColor: '#FE7226'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255,0.9)',
                    titleColor: 'black',
                    titleAlign: 'center',
                    titleFont: {family: 'Poppins Regular'},
                    bodyColor: 'black',
                    bodyFont: {family: 'Poppins Regular'}
    
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        color: 'white',
                        font: {
                            family: 'Poppins Regular',
                            size: 10
                        }
                    },
                    title: {
                        color: 'black'
                    }
                    
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: 'white',
                        font: {
                            family: 'Poppins Regular', // Your font family
                            size: 10
                        },
                    },
                },
                y: {
                    grid: {
                        display: true,
                        color: '#44454A'
                    },
                    beginAtZero: true,
                    ticks: {
                        color: 'white',
                        font: {
                            family: 'Poppins Regular', // Your font family
                            size: 10
                        }
                    }
                }
            }
        }
    });
    
    
    // LINE GRAPHIC
    var ctxLine = document.getElementById("line-chart");
    var chartGraph = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ["May 1", "May 2", "May 3", "May 4", "May 5", "May 6", "May 7"],
            datasets: [
                {
                    fill: {
                        target: 'origin',
                        above: 'rgba(44, 117, 190, 0.5)',
                    },
                    label: "SLA",
                    data: [85, 40, 50, 80, 75, 95, 50],
                    backgroundColor: '#2C75BE'
                }
            ]
        },
        options: {
            elements: {
                point: {
                    pointStyle: 'line'
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            datasets: {
                line: {
                    borderColor: '#2C75BE',
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: context => 'SLA: ' + context.formattedValue + '%',
                    },
                    backgroundColor: 'rgba(255, 255, 255,0.9)',
                    titleColor: 'black',
                    titleAlign: 'center',
                    titleFont: {family: 'Poppins Regular'},
                    bodyColor: 'black',
                    bodyFont: {family: 'Poppins Regular'}
    
                },
                legend: {
                    callback: function(value) {
                        return `${value}%`
                    },
                    display: false,
                    position: 'bottom',
                    labels: {
                        color: 'white',
                        font: {
                            family: 'Poppins Regular',
                            size: 10
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: true,
                        color: '#44454A'
                    },
                    ticks: {
                        color: 'white',
                        font: {
                            family: 'Poppins Regular',
                            size: 10
                        },
                    },
                },
                y: {
                    grid: {
                        display: true,
                        color: '#44454A'
                    },
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return `${value}%`
                        },
                        max: 100,
                        min: 0,
                        stepSize: 25,
                        color: 'white',
                        font: {
                            family: 'Poppins Regular',
                            size: 10
                        }
                    }
                }
            }
        }
    });
}