function show_throbber(div_to_hide) {
    if(div_to_hide) {
        $('#' + div_to_hide).hide();
    }
    
    $('#global-throbber').show();
}

function hide_throbber(div_to_show) {
    $('#global-throbber').hide();
    
    if(div_to_show) {
        $('#' + div_to_show).show();
    }
}
