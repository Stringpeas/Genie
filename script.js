currentArrayValue = 0;


let strings = [];

strings.push(

    "From pebbles and sticks I began the<br>\
    creation of my city<br>\
    <br>\
    A flourishing metropolis<br>\
    that ran on the fuel of fear<br>\
    <br>\
    Stores built from denial<br>\
    Skyscrapers molded by sorrow<br>\
    Roads paved with blame<br>\
    <br>\
    It's crazy to think<br>\
    This city I thought was impenetrable<br>\
    <br>\
    Collapsed into rubble<br>\
    The second your stubble<br>\
    touched my lips"

)

strings.push(

    "From pebbles and sticks I began the<br>\
    creation of my city<br>\
    <br>\
    A flourishing metropolis<br>\
    that ran on the fuel of fear<br>\
    <br>\
    Stores built from denial<br>\
    Skyscrapers molded by sorrow<br>\
    Roads paved with blame<br>\
    <br>\
    It's crazy to think<br>\
    This city I thought was impenetrable<br>\
    <br>\
    Collapsed into rubble<br>\
    The second your stubble<br>\
    touched my lips"

)

strings.push(

    "We are going be here until sundown<br>\
    She turns to me<br>\
    <br>\
    A woman who sees not a man with a beard<br>\
    But a child filled with joy<br>\
    <br>\
    She looks at me with her heart<br>\
    A heart too big for her own good<br>\
    <br>\
    We are going be here until sundown<br>\
    <br>\
    I wear an uneasy smile on my face<br>\
    I home a wrenching pain with grace<br>\
    <br>\
    We are going be here until sundown<br>\
    <br>\
    Yes.<br>\
    Yes we are.<br>\
    <br>\
    She trembles,<br>\
    but not in fear<br>\
    and not in cold<br>\
    <br>\
    We're gonna be here till sundown,"

)


function next() {

    if(strings[currentArrayValue] != null){
        document.getElementById("theText").innerHTML = strings[currentArrayValue];
        currentArrayValue = currentArrayValue + 1;
    }

}
