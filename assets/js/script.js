/**
 * @author
 * Devcrib @ Planet NEST
 * planetnest.org/devcrib
 * Friday, 17th March, 2017
 */

$(function() {

    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();

    // responsible for ticking the clock
    var tick = function() {
        if (seconds == 59) {
            seconds = 0;

            if (minutes == 59) {
                minutes = 0;

                if (hours == 23) hours = 0;
                else hours++;
            }
            else minutes++;

        } else seconds++;

        displayIt( minutes, seconds );
        hourDisplay( hours );
    };

    // responsible for fomatting time display
    var displayIt = function( minute, second ) {
        second = (second < 10)? '0'+second:second;
        minute = (minute < 10)? '0'+minute:minute;

        $('#sec').text(second);
        $('#min').text(minute);
    }

    // responsible for formatting the hour display
    var hourDisplay = function( hour ) {
        var h = hour % 12;
        h = h == 0? 12:h;

        var am_pm = hour >= 12? 'pm' : 'am';
        $('#hour').text( h + am_pm );
    }

    // set the wheels rolling
    setInterval(tick, 1000);
});
