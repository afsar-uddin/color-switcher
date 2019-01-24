
(function(){
     "use strict";
	jQuery(document).ready(function(){
		$('#colorPanel').ColorPanel({
            styleSheet: '#cpswitch'
            , animateContainer: '#wrapper'
            , colors: {
                '##ff275e': 'assets/css/cp/default.css'
                , '##fc0484': 'assets/css/cp/coral.css'
                , '#6bb737': 'assets/css/cp/yellowgreen.css'
                , '#66a6ff  ': 'assets/css/cp/paleblue.css'
                , '#fc913a  ': 'assets/css/cp/orange.css'
                , '##27c6be  ': 'assets/css/cp/palegreen.css'
               
            , }
        });

	});
})();