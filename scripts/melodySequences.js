


function oneNoteSequence(arpegioMatrix, twoScales, time, col) {
    
    arpegioMatrix.place = col;
    var column = arpegioMatrix.matrix[col];
    for (var i = 0; i < column.length; i++) {
        if (column[i] === 1) {
        console.log("inside if")
         sinte3.triggerAttackRelease(twoScales, '4n',time)   
        }
    }
   }

function twoNoteSequence(arpegioMatrix2, twoScales, time, col) {
    arpegioMatrix2.place = col;

    var twoNoteSeq = new Tone.Sequence(function(time, note){
    var column = arpegioMatrix2.matrix[col];
    for (var i = 0; i < column.length; i++) {
        if (column[i] === 1) {
         sinte3.triggerAttackRelease(note, '4n',time) 
        }
    }     

}, [twoScales,[null],[null],[null]],"8n")
    
    twoNoteSeq.loop = 2;
    twoNoteSeq.loopEnd = "2m";
    twoNoteSeq.start()
   
   }

function threeNoteSequence(arpegioMatrix3, twoScales, time, col) {
 arpegioMatrix3.place = col;

    var threeNoteSeq = new Tone.Sequence(function(time, note){
    var column = arpegioMatrix3.matrix[col];
    for (var i = 0; i < column.length; i++) {
        if (column[i] === 1) {
         sinte3.triggerAttackRelease(note, '4n',time) 
        }
    } 
   
}, [[twoScales],[null],[null],[null]],"8n")
    
    threeNoteSeq.loop = 2;
    threeNoteSeq.loopEnd = "2m";
    threeNoteSeq.start()
    
   }


function fourNoteSequence(arpegioMatrix4, twoScales, time, col) {
 arpegioMatrix4.place = col;

    var fourNoteSeq = new Tone.Sequence(function(time, note){
    var column = arpegioMatrix4.matrix[col];
    for (var i = 0; i < column.length; i++) {
        if (column[i] === 1) {
         sinte3.triggerAttackRelease(note, '4n',time) 
        }
    } 
   
}, [[twoScales],[null],[null],[null]],"8n")
    
    fourNoteSeq.loop = 2;
    fourNoteSeq.loopEnd = "2m";
    fourNoteSeq.start()
    
   }