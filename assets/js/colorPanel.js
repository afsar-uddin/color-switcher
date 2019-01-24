(function ($) {
    $.fn.ColorPanel = function (options) {
        var settings = $.extend({
            styleSheet: '#cpswitch'
            , colors: {
                '##ff275e': 'assets/css/cp/default.css'
                , '##fc0484': 'assets/css/cp/coral.css'
                , '#6bb737': 'assets/css/cp/yellowgreen.css'
                , '#66a6ff  ': 'assets/css/cp/paleblue.css'
                , '#fc913a  ': 'assets/css/cp/orange.css'
                , '##27c6be  ': 'assets/css/cp/palegreen.css'
            , }
            , linkClass: 'linka'
            , animateContainer: false
        }, options);
        var panelDiv = this;
		
		$('#cpToggle').click(function(e){
			e.preventDefault();
             $('#colorPanel').toggleClass('show');
			 // $(panelDiv).toggleClass('expand');
		});
		
        var colors = settings.colors || null;
        if (colors) {
            $.each(colors, function (key, value) {
                var li = $("<li/>");
                var e = $("<a />", {
                    href: value
                    , "class": settings.linkClass, // you need to quote "class" since it's a reserved keyword
                }).css('background-color', key);
                li.append(e);
                $(panelDiv).find('ul').append(li);
            });
            $('ul',panelDiv).on('click', 'a', function (e) {
                e.preventDefault();
                var CssFile = $(this).attr('href') || 'default.css';
                if (settings.animateContainer) {
                    $(settings.animateContainer).fadeOut(function () {
                        $(settings.styleSheet).attr('href', CssFile);
                        // And then:
                        $(this).fadeIn();
                    });
                }
                else {
                    $(settings.styleSheet).attr('href', CssFile);
                }
            });
        }
    };



}(jQuery)); 