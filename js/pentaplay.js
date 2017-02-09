var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

var pitch = {
    "A0": 21,
    "A1": 33,
    "A2": 45,
    "A3": 57,
    "A4": 69,
    "A5": 81,
    "A6": 93,
    "A7": 105,
    "Ab1": 32,
    "Ab2": 44,
    "Ab3": 56,
    "Ab4": 68,
    "Ab5": 80,
    "Ab6": 92,
    "Ab7": 104,
    "B0": 23,
    "B1": 35,
    "B2": 47,
    "B3": 59,
    "B4": 71,
    "B5": 83,
    "B6": 95,
    "B7": 107,
    "Bb0": 22,
    "Bb1": 34,
    "Bb2": 46,
    "Bb3": 58,
    "Bb4": 70,
    "Bb5": 82,
    "Bb6": 94,
    "Bb7": 106,
    "C1": 24,
    "C2": 36,
    "C3": 48,
    "C4": 60,
    "C5": 72,
    "C6": 84,
    "C7": 96,
    "C8": 108,
    "D1": 26,
    "D2": 38,
    "D3": 50,
    "D4": 62,
    "D5": 74,
    "D6": 86,
    "D7": 98,
    "Db1": 25,
    "Db2": 37,
    "Db3": 49,
    "Db4": 61,
    "Db5": 73,
    "Db6": 85,
    "Db7": 97,
    "E1": 28,
    "E2": 40,
    "E3": 52,
    "E4": 64,
    "E5": 76,
    "E6": 88,
    "E7": 100,
    "Eb1": 27,
    "Eb2": 39,
    "Eb3": 51,
    "Eb4": 63,
    "Eb5": 75,
    "Eb6": 87,
    "Eb7": 99,
    "F1": 29,
    "F2": 41,
    "F3": 53,
    "F4": 65,
    "F5": 77,
    "F6": 89,
    "F7": 101,
    "G1": 31,
    "G2": 43,
    "G3": 55,
    "G4": 67,
    "G5": 79,
    "G6": 91,
    "G7": 103,
    "Gb1": 30,
    "Gb2": 42,
    "Gb3": 54,
    "Gb4": 66,
    "Gb5": 78,
    "Gb6": 90,
    "Gb7": 102
};

function getPitch(interval, octave, key) {
    var note = document.getElementById(interval).innerText;

    if (notes.indexOf(note) < notes.indexOf(key)) {
        return pitch[note + "" + (octave + 1)];
    } else {
        return pitch[note + "" + octave];
    }
}

function getNote(note, step) {
    return notes[(notes.indexOf(note) + step) % notes.length];
}

var playNote;

var hook = false;

var octave = 1;

function submitForm() {
    var key = document.getElementById('setKey').value;

    $(document).blur();

    document.getElementById('tonic').innerText = key;
    document.getElementById('second').innerText = getNote(key, 2);
    document.getElementById('third').innerText = getNote(key, 4);
    document.getElementById('fourth').innerText = getNote(key, 7);
    document.getElementById('fifth').innerText = getNote(key, 9);

    document.getElementById('notes').removeAttribute("hidden");
    console.log(key);

    if (!hook) {
        hook = true;
        $(document).keydown(function (e) {
            if (e.keyCode == 65) {
                background($("#tonic")[0]);
                playNote(getPitch('tonic', octave, key));
            } else if (e.keyCode == 83) {
                background($("#second")[0]);
                playNote(getPitch('second', octave, key));
            } else if (e.keyCode == 68) {
                background($("#third")[0]);
                playNote(getPitch('third', octave, key));
            } else if (e.keyCode == 70) {
                background($("#fourth")[0]);
                playNote(getPitch('fourth', octave, key));
            } else if (e.keyCode == 32) {
                background($("#fifth")[0]);
                playNote(getPitch('fifth', octave, key));
            } else if (e.keyCode == 39) {
                octave = octave + 1;
                if (octave > 7) octave = 6;
            } else if (e.keyCode == 37) {
                octave = octave - 1;
                if (octave < 1) octave = 1;
            }
        });
    }

}

function background(elm) {
    elm.style.background = "#a275d8";
    setTimeout(function () {
        elm.style.background = "#0275d8";
    }, 200);
}
