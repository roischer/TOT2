
// returns station selection to search form //
function stationPicked(station) {
    target = $('#target').val();
    $(target).val(station);
    window.location.href = "#SEARCH";
}
