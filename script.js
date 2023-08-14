currentArrayValue = 0;


let strings = [];

strings.push(

    "something about the moonlight<br>\
    <br>\
    how it shines on our skin and turns us blue<br>\
    <br>\
    our eyes meet yet I can't imagine your point of view<br>\
    <br>\
    <br>\
    <br>\
    i hope to one day<br>\
    <br>\
    look up at the stars<br>\
    <br>\
    and feel safe<br>\
    <br>\
    knowing you’re looking up at them<br>\
    <br>\
    thinking of me<br>\
    <br>\
    while i think of you"

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

strings.push(

    "My two brown boots, wrapped in green on their trek<br>\
    Where they come face to face with a red rose<br>\
    Who smells as sweet with petals made of mountain<br>\
    <br>\
    The promised pretty pastures painted on maps filled my eyes with sparkle<br>\
    Winding withered paths that lead down rural roads<br>\
    Where the days came hearty with an apple in its mouth<br>\
    <br>\
    Half-way through my journey everything fell<br>\
    Sand slipping through my fingers<br>\
    Dust twirling me into a choke<br>\
    <br>\
    When I found my feet I looked back at the map<br>\
    Magnetized by the X marked the spot of my sweet rose<br>\
    A decision that took much more than the tightening of laces<br>\
    <br>\
    To my surprise, lonsesome on the X, was a rose<br>\
    Now with a deeper, richer purple colour<br>\
    Grown and stained by tears<br>\
    <br>\
    Tears that are now in my own smiled eyes<br>\
    The storm had changed us both<br>\
    And that is beautiful<br>\
    <br>\
    I’d miss the aftertaste of your love that lingered in my heart,<br>\
    But shocked I realized I could never find the rose I once knew, twice,<br>\
    Not even in the same rose."

)


strings.push(
    "i saw a pretty leaf today<br>\
    that will defy laws of matter tomorrow when it vanishes in midair<br>\
    there are things i’ve done today that i struggle to recall, things i've seen but haven't watched,<br>\
    things i've heard but haven't listened<br>\
    i continue to roll the pebble that i found not too long ago in my shoe, who will soon disappear once i exhaust everything she has to offer,<br>\
    simple dull periodic jabs to my big toe, but nothing he hasn’t dealt with before<br>\
    today i took the bus to school, and i think, because im always thinking around the people i trust the least,<br>\
    and i try to recall the temporary, the fleet that will flee<br>\
    the puddle my left foot fell into walking to the bus stop, the bus that came a minute too early driving past my lustful eyes moving left to right,<br>\
    the awful smell from the garbage can that should really be cleaned out more often sitting to the left of the bus stop who I'm already pretty upset at<br>\
    meanwhile, the american robin effortlessly sitting on a tree who could probably win a red ribbon in a basket weaving competition,<br>\
    the delicious shade from the side of an old pharmacy created at my usual waiting spot, the wave of an innocent child greeting me as i sit down on the bus and indulge in a smile<br>\
    today joins the long list of yesterdays that thankfully never seems to end, depending on when you ask me of course,<br>\
    but there really isn’t any time for that right now because the days i cherish seem to go by twice as fast<br>\
    tomorrow carries me by the nape, a painless paralyzing pickup into the pit of opportunity.<br>\
    A place where we ought to forget and find comfort that things go. What I’m feeling now will not last forever, which draws pleasure on those painful days<br>\
    lets freeze this insignificant moment<br>\
    i pick up my journal<br>\
    i cant remember if the leaf was red or yellow."
)

strings.push(

    "after a little deliberation I decide it’s probably best to get some sleep<br>\
a choice I make that is unmotivated by drowsiness <br>\
I crawl into bed and think<br>\
<br>\
a bed stained with every emotion I’ve ever felt<br>\
thoughts of nothing but emotion I’ve never felt<br>\
<br>\
i’ve been here before,<br>\
exchanging a cold handshake with a Crumpled Sheet,<br>\
an empty hug with a Breathless Pillow<br>\
<br>\
realizing that no matter how many times i change these sheets,<br>\
everything continues to feel unclean<br>\
<br>\
as my mind and body find today’s final consensus<br>\
i lay there small and full of feeling <br>\
and though it’s not much, it’s all i have<br>\
<br>\
i take a deep breath<br>\
and try once more to accept solitude<br>\
calmly"
    
)



function next() {

    if(strings[currentArrayValue] != null){
        document.getElementById("theText").innerHTML = strings[currentArrayValue];
        currentArrayValue = currentArrayValue + 1;
    }

}
