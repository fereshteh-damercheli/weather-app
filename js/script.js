const weather = () => {
    $.ajax({
        url: "https://single-runs-api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&run=2026-11-08T00%3A00&hourly=temperature_2m&models=ecmwf_ifs",
        method: "GET",
        type: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(`error: ${error}`);
        }

    })
}
document.addEventListener('DOMContentLoaded', weather);