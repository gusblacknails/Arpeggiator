function oneNoteSequence(SelectSynth,arpegioMatrix, twoScales, time, col) {
    console.error(SelectSynth)
    arpegioMatrix.place = col;
    var column = arpegioMatrix.matrix[col];
    for (var i = 0; i < column.length; i++) {
        if (column[i]) {
        console.log("inside if")
         SelectSynth.triggerAttackRelease(twoScales, '8n',time)   
        }
    }
   }

function twoNoteSequence(SelectSynth,arpegioMatrix2, twoScales, time, col) {
    arpegioMatrix2.place = col;

    var twoNoteSeq = new Tone.Sequence(function(time, note){
    var column = arpegioMatrix2.matrix[col];
    for (var i = 0; i < column.length; i++) {
        if (column[i]) {
         SelectSynth.triggerAttackRelease(note, '8n',time) 
        }
    }     

}, [twoScales],"8n")
    
    twoNoteSeq.loop = 2;
    twoNoteSeq.loopEnd = "2m";
    twoNoteSeq.humanize = true;
    twoNoteSeq.start()
    
   
   }

function threeNoteSequence(SelectSynth,arpegioMatrix3, twoScales, time, col) {
 arpegioMatrix3.place = col;

    var threeNoteSeq = new Tone.Sequence(function(time, note){
    var column = arpegioMatrix3.matrix[col];
    for (var i = 0; i < column.length; i++) {
        if (column[i]) {
         SelectSynth.triggerAttackRelease(note, '8n',time) 
        }
    } 
   
}, [twoScales],"12n")
    
    threeNoteSeq.loop = 2;
    threeNoteSeq.loopEnd = "2m";
    threeNoteSeq.humanize = true;
    threeNoteSeq.start()
    
    
   }


function fourNoteSequence(SelectSynth,arpegioMatrix4, twoScales, time, col) {
 arpegioMatrix4.place = col;

    var fourNoteSeq = new Tone.Sequence(function(time, note){
    var column = arpegioMatrix4.matrix[col];
    for (var i = 0; i < column.length; i++) {
        if (column[i]) {
         SelectSynth.triggerAttackRelease(note, '8n',time) 
        }
    } 
   
}, [twoScales],"8n")
    
    fourNoteSeq.loop = 2;
    fourNoteSeq.loopEnd = "2m";
    fourNoteSeq.humanize = true;
    fourNoteSeq.start()
}

