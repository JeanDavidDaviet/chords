<?php extract($_GET); ?>
<style type="text/css">
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 16vw;
        margin: 0 auto;
    }
</style>
<h1></h1>
<input type="hidden" id="tempo" value="<?php echo $t ?: 80; ?>">
<input type="hidden" id="minor" value="<?php echo !is_null($m) ? 1 : 0; ?>">
<input type="hidden" id="seventh" value="<?php echo !is_null($s) ? 1 : 0; ?>">
<script type="text/javascript">
    let tempo = document.querySelector('#tempo').value;
    let minor = parseInt(document.querySelector('#minor').value, 10);
    let seventh = parseInt(document.querySelector('#seventh').value, 10);
    let chordText = document.querySelector('h1');
    let intervalID = setInterval(changeChords, 1000 / (tempo / 60));
    let notes = [
        "C",
        "C#",
        "Db",
        "D",
        "D#",
        "Eb",
        "E",
        "F",
        "F#",
        "Gb",
        "G",
        "G#",
        "Ab",
        "A",
        "A#",
        "Bb",
        "B"
    ];

    function changeChords(){
        let randomNote = Math.floor(Math.random() * notes.length);
        let randomMinor = minor ? ( Math.round(Math.random()) ? 'm' : '' ) : '';
        let randomSeventh = seventh ? ( Math.round(Math.random()) ? '7' : '' ) : '';
        chordText.innerHTML = notes[randomNote] + randomMinor + randomSeventh;
    }
    changeChords();
</script>