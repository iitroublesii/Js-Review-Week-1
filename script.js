function refrain() {
 console.log("Rock a bye baby, on the tree top,");
    console.log("When the wind blows the cradle will rock.");
}

function song() {
    refrain();
    console.log("When the bough breaks the cradle will fall,");
    console.log("And down will come baby cradle and all.");

    refrain();
}

song(); 

function refactoredRefrain() {
    return "Rock a bye baby, on the tree top,\nWhen the wind blows the cradle will rock.";
}

function refactoredSong() {
    console.log(refactoredRefrain());
    console.log("When the bough breaks the cradle will fall,");
    console.log("And down will come baby cradle and all.");
    console.log(refactoredRefrain());
}

refactoredSong();
