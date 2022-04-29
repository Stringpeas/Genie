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



function next() {

    if(strings[currentArrayValue] != null){
        document.getElementById("theText").innerHTML = strings[currentArrayValue];
        currentArrayValue = currentArrayValue + 1;
    }

}
