$(document).keydown( function(event) {       
        IsCurrentlyPlaying(event);
}); 

$(document).keyup( function(event) {
  KeyUpActions(event.which)
}); 


var keys = [];
    keys.push({key:49, value:"key16", id:"#octate3C", type:"white", playing: false})
    keys.push({key:50, value:"key17", id:"#octate3Cs",type:"black", playing: false})
    keys.push({key:51, value:"key18", id:"#octate3D",type:"white", playing: false})
    keys.push({key:52, value:"key19", id:"#octate3Ds",type:"black", playing: false})
    keys.push({key:53, value:"key20", id:"#octate3E",type:"white", playing: false})
    keys.push({key:54, value:"key21", id:"#octate3F",type:"white", playing: false})
    keys.push({key:55, value:"key22", id:"#octate3Fs",type:"black", playing: false})
    keys.push({key:56, value:"key23", id:"#octate3G",type:"white", playing: false})
    keys.push({key:57, value:"key24", id:"#octate3Gs",type:"black", playing: false})
    keys.push({key:48, value:"key25", id:"#octate3A",type:"white", playing: false})
    keys.push({key:189, value:"key26", id:"#octate3As",type:"black", playing: false})
    keys.push({key:187, value:"key27", id:"#octate3B",type:"white", playing: false})

    keys.push({key:81, value:"key28", id:"#octate4C", type:"white", playing: false})
    keys.push({key:87, value:"key29", id:"#octate4Cs",type:"black", playing: false})
    keys.push({key:69, value:"key30", id:"#octate4D",type:"white", playing: false})
    keys.push({key:82, value:"key31", id:"#octate4Ds",type:"black", playing: false})
    keys.push({key:84, value:"key32", id:"#octate4E",type:"white", playing: false})
    keys.push({key:89, value:"key33", id:"#octate4F",type:"white", playing: false})
    keys.push({key:85, value:"key34", id:"#octate4Fs",type:"black", playing: false})
    keys.push({key:73, value:"key35", id:"#octate4G",type:"white", playing: false})
    keys.push({key:79, value:"key36", id:"#octate4Gs",type:"black", playing: false})
    keys.push({key:80, value:"key37", id:"#octate4A",type:"white", playing: false})
    keys.push({key:219, value:"key38", id:"#octate4As",type:"black", playing: false})
    keys.push({key:221, value:"key39", id:"#octate4B",type:"white", playing: false})

    keys.push({key:65, value:"key40", id:"#octate5C",type:"white", playing: false})
    keys.push({key:83, value:"key41", id:"#octate5Cs",type:"black", playing: false})
    keys.push({key:68, value:"key42", id:"#octate5D",type:"white", playing: false})
    keys.push({key:70, value:"key43", id:"#octate5Ds",type:"black", playing: false})
    keys.push({key:71, value:"key44", id:"#octate5E",type:"white", playing: false})
    keys.push({key:72, value:"key45", id:"#octate5F",type:"white", playing: false})
    keys.push({key:74, value:"key46", id:"#octate5Fs",type:"black", playing: false})
    keys.push({key:75, value:"key47", id:"#octate5G",type:"white", playing: false})
    keys.push({key:76, value:"key48", id:"#octate5Gs",type:"black", playing: false})
    keys.push({key:186, value:"key49", id:"#octate5A",type:"white", playing: false})
    keys.push({key:222, value:"key50", id:"#octate5As",type:"black", playing: false})
    keys.push({key:13, value:"key51", id:"#octate5B",type:"white", playing: false})

    keys.push({key:90, value:"key52", id:"#octate6C",type:"white", playing: false})
    keys.push({key:88, value:"key53", id:"#octate6Cs",type:"black", playing: false})
    keys.push({key:67, value:"key54", id:"#octate6D",type:"white", playing: false})
    keys.push({key:86, value:"key55", id:"#octate6Ds",type:"black", playing: false})
    keys.push({key:66, value:"key56", id:"#octate6E",type:"white", playing: false})
    keys.push({key:78, value:"key57", id:"#octate6F",type:"white", playing: false})
    keys.push({key:77, value:"key58", id:"#octate6Fs",type:"black", playing: false})
    keys.push({key:188, value:"key59", id:"#octate6G",type:"white", playing: false})
    keys.push({key:190, value:"key60", id:"#octate6Gs",type:"black", playing: false})
    keys.push({key:191, value:"key61", id:"#octate6A",type:"white", playing: false})
    keys.push({key:16, value:"key62", id:"#octate6As",type:"black", playing: false})
    keys.push({key:35, value:"key63", id:"#octate6B",type:"white", playing: false})

$("li").mousedown(function()
             {
      ExecuteMouseDown(this);
})

$("li").mouseup(function()
             {
    ExecuteMouseUp(this);
})

$("li").on('touchstart', function() {
    ExecuteMouseDown(this);
});

$(document).on('touchmove', function() {
    ClearTouches();
    ExecuteMouseUp(this);
});

$(document).on('click touchend', function(event) {
    ExecuteMouseUp(this);
    
 });

function IsCurrentlyPlaying(event)
{
    for(i = 0; i<keys.length; i++)
        {
            if(keys[i].key == event.which)
                {
                    if(!event.originalEvent.repeat)
                        {   
                            keys[i].playing = true;
                            KeyDownActions(event.which);
                        }
                    
                    return;
                }        
        }
}


function ExecuteMouseUp(obj)
{
    for(i = 0; i<keys.length; i++)
        {
            var current = keys[i].id;
            var desired = "#"+$(obj)[0].id;
            
            if(current == desired)
                KeyUpActions(keys[i].key);
        }
}

function ExecuteMouseDown(obj)
{
    for(i = 0; i<keys.length; i++)
        {
            var current = keys[i].id;
            var desired = "#"+$(obj)[0].id;
            
            if(current == desired)
                KeyDownActions(keys[i].key);
        }  
}

function KeyDownActions(key)
{   
    for(i = 0; i<keys.length; i++)
        {
            if(keys[i].key == key)
                {
                    if(keys[i].type == "white")
                        $(keys[i].id).addClass("whiteClick");
                    else
                        $(keys[i].id).addClass("blackClick");
                    
                    var x = document.getElementById(keys[i]. value); 
                    
                    x.currentTime = 0.2;
                                        
                    x.play();
                
                    
                    return;
                }
        }
}

function KeyUpActions(key)
{
    for(i = 0; i<keys.length; i++)
        {
            if(keys[i].key == key)
                {
                    if(keys[i].type == "white")
                        $(keys[i].id).removeClass("whiteClick");
                    else
                        $(keys[i].id).removeClass("blackClick");
                    
                    keys[i].playing= false;
                    
                    return;
                }
        }
}

function ClearTouches(){
    for(i = 0; i<keys.length; i++)
        {
            if(keys[i].type == "white")
                $(keys[i].id).removeClass("whiteClick");
            else
                $(keys[i].id).removeClass("blackClick");
        }
}