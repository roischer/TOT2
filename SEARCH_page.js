
// navigate to main stations map//
$('#TBDestination').live('click', function () {
    $('#target').val('#TBDestination');
    MapForDestination();
});

// navigate to main stations map//
$('#searchTBDeparture').live('click', function () {
    $('#target').val('#searchTBDeparture');
    MapForDestination();
});

// redirect //
function MapForDestination() {

    window.location.href = "#masterMap";
}


//geocoder initialization //

geocoder = new google.maps.Geocoder();

var myLocation = new Object;
myLocation.lat = 0;
myLocation.long = 0;
var minDuration = 100000000000000000;
var templocationName = "";
var bestLocationName = "";
i = 0
var data = new Array();
var x;
var minutesToArriveOriginStation;



// defines nearest station by user geolocation//
function getNearestStation() {
    // defaulf date and time set
    var currnetTime = new Date();
    var year = currnetTime.getFullYear();
    var month = currnetTime.getMonth() + 1;
    var day = currnetTime.getDate();
    var defaultDate = checkDate(day) + "/" + checkDate(month) + "/" + year;
    var hours = currnetTime.getHours();
    var defaultTime = checkDate(hours) + ":00";

    $("#myDate").val(defaultDate);
    $("#myTime").val(defaultTime);


    if (navigator.geolocation) {
        var timeoutVal = 20 * 1000;
        navigator.geolocation.getCurrentPosition(setUserPosition, showError, { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 });

    }
    else
    { alert("Geolocation is not supported by this browser."); }

}

// set user location //
function setUserPosition(position) {

    myLocation.lat = position.coords.latitude;
    myLocation.long = position.coords.longitude;
    getAllStations();


}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("Location information is unavailable.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

// get all stations information from DB //
function getAllStations() {



    $.ajax({
        type: "GET",
        url: "proj.ruppin.ac.il/bgroup1/test2/B.L/findNerestStation/stations.aspx",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (res) {
            data = res["stations"];
            checkEachStation(); //calback function //


        }, // success
        error: function (error) {
            alert(error);
        } //error
    });                  // ajax

}
// callback function - returns best(nearest) station to form// 
function checkEachStation() {
    i = i + 1;
    if (i < data.length) {

        var d = data[i - 1];
        templocationName = d.Station_Name;
        myplace = new google.maps.LatLng(myLocation.lat, myLocation.long);
        destA = new google.maps.LatLng(d.latitude, d.longtitude);
        clacDistance(myplace, destA);

    }
    else {
        $("#searchTBDeparture").val(bestLocationName);
    }
}



//calculate distance between two geolocations// 
function clacDistance(myplace, destA) {
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [myplace],
        destinations: [destA],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC
    }, DistanceCallback);
}


// calculation callback function//
function DistanceCallback(response, status) {
    x = document.getElementById("demo");
    if (status != google.maps.DistanceMatrixStatus.OK) {
        alert('Error was : ' + status);

    }

    else {

        var results = response.rows[0].elements;
        var thisDuration = results[0].duration.value;
        if (thisDuration < minDuration) {
            minDuration = thisDuration;
            minutesToArriveOriginStation = (results[0].duration.text);
            $("#resAsstimateTimeToStation").text(minutesToArriveOriginStation);
            bestLocationName = templocationName;
        }
        checkEachStation();
    }

}



// corrects date display format//
function checkDate(date) {
    if (date < 10) {
        date = "0" + date;


    }
    return date;

}




// clears result when redirect to new search page //
function clearSearchResults() {

    $("#showResult").text(" ");

}
