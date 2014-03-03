//  wow
(function($) {
    //  such plugin
    $.doge = function(tings) {
        //  very jquery
        var doge = $('body').css('font-family', 'Comic Sans MS, Comic Sans, Chalkboard, cursive');

        //  much array
        tings = $.extend(['doge', 'shibe', 'help', 'good deed', 'thankful', 'complete', 'yay', 'dogecoin', 'well', 'drinking', 'water'], tings);

        var r = function(arr) {
            if (!arr) arr = tings;
            return arr[Math.floor(Math.random() * arr.length)];
        };

        var dogefix = [
            'wow', 'such ' + r(), 'very ' + r(), 'much ' + r(),
            'wow', 'such ' + r(), 'very ' + r(), 'much ' + r(),
            'so ' + r(), 'many ' + r(), 'want ' + r(),
            'wow', 'amaze'
        ];

        var very = doge.append('<div class="such overlay" />').children('.such.overlay').css({
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            pointerEvents: 'none'
        });

        setInterval(function() {
            $('<span style="position: absolute; display: none; left: ' + Math.random() * 100 + '%;top: ' + Math.random() * 100 + '%;font-size: ' + Math.max(24, (Math.random() * 50 + 50)) + 'px; color: rgb(' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ');">' + r(dogefix) +
                '</span>').appendTo('.such.overlay').fadeIn('fast').delay(1000).fadeOut('fast');
        }, 500);
    };
})(jQuery);