$(document).ready(function(){    
    $('#info-toggle, #info-close').click(function(e) {
        e.preventDefault();
        $('#info-panel, #info-toggle, #info-close').toggle();
        $('body').css('overflow', 'hidden');
    });  
    $('#info-close').click(function(e) {
        e.preventDefault();
        $('body').css('overflow', 'auto');
    });
    $('#info-helper').click(function(e) {
        e.preventDefault();
        $('#info-panel, #info-toggle, #info-close').toggle();
        $('body').css('overflow', 'auto');
    });
    $('#nav-menu a').click(function() {
        $('#info-panel, #info-toggle, #info-close').toggle();
        $('body').css('overflow', 'auto');
    });
    
    const dateDiv = document.getElementById('date');
    
    var options = { weekday: 'long', year: '2-digit', month: 'short', day: 'numeric', hour12: true, hour: 'numeric', minute: '2-digit', second: '2-digit', };

    function myDateFunction() {
        const now = new Date();
        const nowStr = now.toLocaleString('en-GB', options);
        dateDiv.innerHTML = nowStr;
    }
    setInterval(myDateFunction, 1000);
});



