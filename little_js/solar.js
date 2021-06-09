const duration_time = 0

$(document).ready(function() {
    $("#mercury-area").mouseover(function() {
        $("#mercury").fadeIn();
        $("#tech-info").css('opacity', '0');
    });
    $("#mercury-area").mouseout(function() {
        $("#mercury").fadeOut(duration=duration_time);
        $("#tech-info").css('opacity', '100');
    });

    $("#venus-area").mouseover(function() {
        $("#venus").fadeIn();
        $("#tech-info").css('opacity', '0');
    });
    $("#venus-area").mouseout(function() {
        $("#venus").fadeOut(duration=duration_time);
        $("#tech-info").css('opacity', '100');
    });

    $("#earth-area").mouseover(function() {
        $("#earth").fadeIn();
        $("#tech-info").css('opacity', '0');
    });
    $("#earth-area").mouseout(function() {
        $("#earth").fadeOut(duration=duration_time);
        $("#tech-info").css('opacity', '100');
    });

    $("#mars-area").mouseover(function() {
        $("#mars").fadeIn();
        $("#tech-info").css('opacity', '0');
    });
    $("#mars-area").mouseout(function() {
        $("#mars").fadeOut(duration=duration_time);
        $("#tech-info").css('opacity', '100');
    });

    $("#jupiter-area").mouseover(function() {
        $("#jupiter").fadeIn();
        $("#tech-info").css('opacity', '0');
    });
    $("#jupiter-area").mouseout(function() {
        $("#jupiter").fadeOut(duration=duration_time);
        $("#tech-info").css('opacity', '100');
    });

    $("#saturn-area").mouseover(function() {
        $("#saturn").fadeIn();
        $("#tech-info").css('opacity', '0');
    });
    $("#saturn-area").mouseout(function() {
        $("#saturn").fadeOut(duration=duration_time);
        $("#tech-info").css('opacity', '100');
    });

    $("#uranus-area").mouseover(function() {
        $("#uranus").fadeIn();
        $("#tech-info").css('opacity', '0');
    });
    $("#uranus-area").mouseout(function() {
        $("#uranus").fadeOut(duration=duration_time);
        $("#tech-info").css('opacity', '100');
    });

    $("#neptune-area").mouseover(function() {
        $("#neptune").fadeIn();
        $("#tech-info").css('opacity', '0');
    });
    $("#neptune-area").mouseout(function() {
        $("#neptune").fadeOut(duration=duration_time);
        $("#tech-info").css('opacity', '100');
    });
})