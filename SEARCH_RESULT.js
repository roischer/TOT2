

var allData;

//operates server side search trains engine //
function findTrains() {
    depStation = $("#searchTBDeparture").val();
    arrStation = $("#TBDestination").val();
    mydate = $("#myDate").val();
    hoursAdvance = $("#myTime").val();

    var datePart = mydate.split("/");
    tempdate = new Date(datePart[2],datePart[1]-1,datePart[0]);
    day = tempdate.getDay();
    var hebrewDaysNames = new Array("ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת");
    var getDay = hebrewDaysNames[day];
    $("#resDay").text(getDay);
    $("#resDate").text(mydate);
    $("#resDepature").text(depStation);
    $("#resArrival").text(arrStation);



    $.ajax({
        type: "GET",
        url: "proj.ruppin.ac.il/bgroup1/test2/B.L/getLuzTrain/GetStations.aspx",
        data: { 'depStation': depStation, 'arrStation': arrStation, 'mydate': mydate, 'hoursAdvance': hoursAdvance },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (res) {
            request(res);

        }, // success
        error: function (error) {
            alert(error);
        } //error
    });    // ajax

}

// callback function + filtering results by user request + generate results to html dynamic table// 
function request(res) {

    

    var indexTrainNumber = 0;
    var stationData = res["Stations"];
    var trainData = res["trains"];
    if (trainData == "1") {
        alert("אין רכבות ליעד המבוקש");
    }
    else {

        allData = res;

        var userTime = new Date(new Date().toDateString() + ' ' + $("#myTime").val());
        var userHours = userTime.getHours();

        var trainLastIndex = -1;
        var counter = 0;
        var dynamicTable = "<table id='dynamicTable' class='tsc_table_s9' style='width:100%'>";
        dynamicTable += "<thead><tr> <th>דווח</th> <th>פרטים</th> <th>הגעה מעודכן</th><th>יציאה מעודכן</th><th>יציאה מתוכנן</th></tr></thead>";

        for (var j = 0; j < trainData.length; j++) {

            trainTime = parseInt(trainData[j].DepartureTime.slice(11, 13));



            if (trainTime >= userHours && (userHours + 2) >= trainTime || (trainLastIndex == trainData[j].IndexTrain && trainData[j].Direct == "InDirect")) {

                if (trainData[j].OrignStation == $("#searchTBDeparture").val() || counter != 0) {

                    counter = counter + 1;
                    var originStation = trainData[j].OrignStation;
                    var destinationStation = trainData[j].DestinationStation;
                    stopStations = trainData[j].stops;
                    var arrivalTime;
                    var departureTime = showTimeFormat(trainData[j].DepartureTime);

                    if (trainLastIndex != trainData[j].IndexTrain || trainData[j].Direct == "Direct") {

                        if (trainData[j].Direct == "Direct") {
                            functionName = "showinfoTrainDirect(";
                        }
                        else {
                            functionName = "showinfoTrainInDirect(";
                        }

                        numOftrainToLine = parseInt(trainData[j].NumOfChanges);
                        arrivalTime = showTimeFormat(trainData[j + numOftrainToLine].ArrivalTime);

                        indexTrainNumber = indexTrainNumber + 1;
                        if (indexTrainNumber % 2 == 0) {
                            dynamicTable += "<tbody><tr> <td><a data-role='button'   class='button mobilebutton4 ui-btn ui-shadow ui-btn-corner-all ui-mini ui-btn-inline ui-btn-icon-left ui-btn-up-a' data-corners='true'  data-inline='true' data-mini='true' data-shadow='true'  style='font-family: Gisha; width:70%; font-size:12px; color: #003366; text-align: center' id='mmm" + j + "'" + "onclick='myfunc()'>עליתי לרכבת<a/></td> <td><a data-role='button' id='btn" + j + "'onclick='" + functionName + j + ")'" + "><img class='mobileImage mobileimage1' src='files/views/assets/image/infoIcon.png'/></a></td> <td>" + arrivalTime + "</td><td>on time</td><td>" + departureTime + "</td></tr></tbody>";
                        }
                        else {
                            dynamicTable += "<tbody><tr class='odd'> <td><a data-role='button'class='button mobilebutton4 ui-btn ui-shadow ui-btn-corner-all ui-mini ui-btn-inline ui-btn-icon-left ui-btn-up-a' data-corners='true' data-inline='true' data-mini='true' data-shadow='true'  style='font-family: Gisha; width:70%; font-size:12px; color: #003366; text-align: center' id='mmm" + j + "'" + "onclick='myfunc()'>עליתי לרכבת<a/></td> <td><a data-role='button' id='btn" + j + "'onclick='" + functionName + j + ")'" + "><img class='mobileImage mobileimage1' src='files/views/assets/image/infoIcon.png'/></a></td> <td>" + arrivalTime + "</td><td>on time</td><td>" + departureTime + "</td></tr></tbody>";
                        }


                    }
                    trainLastIndex = trainData[j].IndexTrain;
                }
            }
        }

        dynamicTable += "<thead><tr><th></th><th></th><th></th><th></th><th></th></tr></thead></table>";
        document.getElementById("showResult").innerHTML = dynamicTable;
    }

}

// genrates relevents direct trains detailed view //
function showinfoTrainDirect(index) {
   

    $.mobile.changePage('#stopStationDialog', 'flip', false, false);
   
 
   
    var dynamicDirectInfo = "";
    var tempIndex;
    if (allData["stopStations" + index] != null) {
        var trainNo = allData["trains"][index].Trainno;
        dynamicDirectInfo = "<p 'text-align:right'>" + trainNo + " :מס. רכבת</p><table class='tsc_table_s9' style='text-align:center; width:100%'>";
        dynamicDirectInfo += "<thead><tr><th>רציף</th><th>תחנה</th><th>זמן</th></tr></thead>";
        // dynamicTableInfo += "<tr><td>  </td></tr>
        var origenTime = showTimeFormat(allData["trains"][index].DepartureTime);
        var destanationTime = showTimeFormat(allData["trains"][index].ArrivalTime);

        var org = allData["trains"][index].OrignStation;
        var des = allData["trains"][index].DestinationStation;

        dynamicDirectInfo += "<tbody><tr><td>" + allData["trains"][index].Platform + "</td><td>" + org + "</td><td>" + origenTime + "</td></tr>";
        for (var j = 0; j < allData["stopStations" + index].length; j++) {
            var StationName = allData["stopStations" + index][j].StationName;
            var Platform = allData["stopStations" + index][j].Platform;

            var arrivalTime = showTimeFormat(allData["stopStations" + index][j].ArrivalTime);
            var departureTime = showTimeFormat(allData["stopStations" + index][j].DepartureTime);

            if (j % 2 == 0) {
                dynamicDirectInfo += "<tr class='odd' ><td>" + Platform + "</td><td>" + StationName + "</td><td>" + arrivalTime + "</td></tr>";
            }
            else {
                dynamicDirectInfo += "<tr><td>" + Platform + "</td><td>" + StationName + "</td><td>" + arrivalTime + "</td></tr>";
            }
            tempIndex = j;
        }
        if (tempIndex % 2 == 0) {
            dynamicDirectInfo += "<tr><td>" + allData["trains"][index].Platform + "</td><td>" + des + "</td><td>" + destanationTime + "</td></tr></tbody>";
        }
        else {
            dynamicDirectInfo += "<tr class='odd'><td>" + allData["trains"][index].Platform + "</td><td>" + des + "</td><td>" + destanationTime + "</td></tr></tbody>";
        }
        dynamicDirectInfo += "<thead><tr><th></th><th></th><th></th></tr></thead></table>";

        document.getElementById("infoForTrain").innerHTML = dynamicDirectInfo;
    }
    else {
        alert("רכבת ישירה");
    }

}


// genrates relevents INdirect trains detailed view //
function showinfoTrainInDirect(index) {


    $.mobile.changePage('#stopStationDialog', 'flip', false, false);

 


    var tempIndex;

    var NumTrainInLines = parseInt(allData["trains"][index].NumOfChanges);
    var dynamicInDirectInfo = "";

    for (i = 0; i <= NumTrainInLines; i++) {



        var origenTime = showTimeFormat(allData["trains"][index + i].DepartureTime);
        var destanationTime = showTimeFormat(allData["trains"][index + i].ArrivalTime);




        var trainNo = allData["trains"][index + i].Trainno;
        dynamicInDirectInfo += "<p style='text-align:right'>" + trainNo + " :מס. רכבת</p><table class='tsc_table_s9' style='text-align:center; width:100%'>";
        dynamicInDirectInfo += "<thead><tr><th>רציף</th><th>תחנה</th><th>זמן</th></tr></thead>";
        // dynamicTableInfo += "<tr><td>  </td></tr>
        var org = allData["trains"][index + i].OrignStation;
        var des = allData["trains"][index + i].DestinationStation;

        dynamicInDirectInfo += "<tbody><tr><td>" + allData["trains"][index + i].Platform + "</td><td>" + org + "</td><td>" + origenTime + "</td></tr>";

        for (var j = 0; j < allData["stopStations" + (index + i)].length; j++) {

            tempIndex = j;
            var StationName = allData["stopStations" + (index + i)][j].StationName;
            var Platform = allData["stopStations" + (index + i)][j].Platform;

            var arrivalTime = showTimeFormat(allData["stopStations" + (index + i)][j].ArrivalTime);
            var departureTime = showTimeFormat(allData["stopStations" + (index + i)][j].DepartureTime);

            if (tempIndex % 2 == 0) {
                dynamicInDirectInfo += "<tr class='odd'><td>" + Platform + "</td><td>" + StationName + "</td><td>" + departureTime + "</td></tr>";
            }
            else {
                dynamicInDirectInfo += "<tr><td>" + Platform + "</td><td>" + StationName + "</td><td>" + departureTime + "</td></tr>";


            }


        }
        if (tempIndex % 2 == 0) {
            dynamicInDirectInfo += "<tr><td>" + allData["trains"][index + i].Platform + "</td><td>" + des + "</td><td>" + destanationTime + "</td></tr>";
        }
        else {
            dynamicInDirectInfo += "<tr class='odd'><td>" + allData["trains"][index + i].Platform + "</td><td>" + des + "</td><td>" + destanationTime + "</td></tr>";
        }
        if (i < NumTrainInLines) {
            tempLocation = i + 1;
            var tempTime = showTimeFormat(allData["trains"][index + tempLocation].DepartureTime);
            tempArrivalMinutes = parseInt(destanationTime.slice(3));
            tempDepartureTimeMinutes = parseInt(tempTime.slice(3));
            tempArrivalHours = parseInt(destanationTime.slice(0, 2));
            tempDepartureTimeHours = parseInt(tempTime.slice(0, 2));


            var awitingTime = calcAwaitingTime(tempArrivalMinutes, tempDepartureTimeMinutes, tempArrivalHours, tempDepartureTimeHours);
            if (tempIndex % 2 == 0) {
                dynamicInDirectInfo += "<tr class='odd'td> " + awitingTime + " :זמן המתנה</td></tr>"
            }
            else {
                dynamicInDirectInfo += "<tr><td> " + awitingTime + " :זמן המתנה</td></tr>"
            }
        }

        dynamicInDirectInfo += "</tbody><thead><tr><th></th><th></th><th></th></tr></thead></table>";

    }

    document.getElementById("infoForTrain").innerHTML = dynamicInDirectInfo;

}


// takes HH:MM substring //
function showTimeFormat(time) {

    theRightTime = time.slice(11, 16);
    return theRightTime;


}



// future module - INACTIVE//
function myfunc() {

    alert("לא פעיל");

}


// calculates waiting time between train in one lane //
function calcAwaitingTime(arrMin, depMin, arrHours, depHours) {


    var awaiting;
    if (depHours > arrHours) {
        if (arrMin > depMin) {
            awaiting = 60 - (arrMin - depMin);
        }
        else {
            awaiting = 60 + (depMin - arrMin);

        }

    }
    else {

        awaiting = depMin - arrMin;

    }
    return awaiting;


}


function closeDialog() {
    $('#stopStationDialog').dialog('close');
}


