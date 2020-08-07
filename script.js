// from keycodes

// #region Declare Variables

const keyCodes = {
    0: 'That key has no keycode',
    3: 'break',
    8: 'backspace / delete',
    9: 'tab',
    12: 'clear',
    13: 'enter',
    16: 'shift',
    17: 'ctrl',
    18: 'alt',
    19: 'pause/break',
    20: 'caps lock',
    21: 'hangul',
    25: 'hanja',
    27: 'escape',
    28: 'conversion',
    29: 'non-conversion',
    32: 'spacebar',
    33: 'page up',
    34: 'page down',
    35: 'end',
    36: 'home',
    37: 'left arrow',
    38: 'up arrow',
    39: 'right arrow',
    40: 'down arrow',
    41: 'select',
    42: 'print',
    43: 'execute',
    44: 'Print Screen',
    45: 'insert',
    46: 'delete',
    47: 'help',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    58: ':',
    59: 'semicolon (firefox), equals',
    60: '<',
    61: 'equals (firefox)',
    63: 'ß',
    64: '@ (firefox)',
    65: 'a',
    66: 'b',
    67: 'c',
    68: 'd',
    69: 'e',
    70: 'f',
    71: 'g',
    72: 'h',
    73: 'i',
    74: 'j',
    75: 'k',
    76: 'l',
    77: 'm',
    78: 'n',
    79: 'o',
    80: 'p',
    81: 'q',
    82: 'r',
    83: 's',
    84: 't',
    85: 'u',
    86: 'v',
    87: 'w',
    88: 'x',
    89: 'y',
    90: 'z',
    91: 'Windows Key / Left ⌘ / Chromebook Search key',
    92: 'right window key',
    93: 'Windows Menu / Right ⌘',
    95: 'sleep',
    96: 'numpad 0',
    97: 'numpad 1',
    98: 'numpad 2',
    99: 'numpad 3',
    100: 'numpad 4',
    101: 'numpad 5',
    102: 'numpad 6',
    103: 'numpad 7',
    104: 'numpad 8',
    105: 'numpad 9',
    106: 'multiply',
    107: 'add',
    108: 'numpad period (firefox)',
    109: 'subtract',
    110: 'decimal point',
    111: 'divide',
    112: 'f1',
    113: 'f2',
    114: 'f3',
    115: 'f4',
    116: 'f5',
    117: 'f6',
    118: 'f7',
    119: 'f8',
    120: 'f9',
    121: 'f10',
    122: 'f11',
    123: 'f12',
    124: 'f13',
    125: 'f14',
    126: 'f15',
    127: 'f16',
    128: 'f17',
    129: 'f18',
    130: 'f19',
    131: 'f20',
    132: 'f21',
    133: 'f22',
    134: 'f23',
    135: 'f24',
    136: 'f25',
    137: 'f26',
    138: 'f27',
    139: 'f28',
    140: 'f29',
    141: 'f30',
    142: 'f31',
    143: 'f32',
    144: 'num lock',
    145: 'scroll lock',
    151: 'airplane mode',
    160: '^',
    161: '!',
    162: '؛ (arabic semicolon)',
    163: '#',
    164: '$',
    165: 'ù',
    166: 'page backward',
    167: 'page forward',
    168: 'refresh',
    169: 'closing paren (AZERTY)',
    170: '*',
    171: '~ + * key',
    172: 'home key',
    173: 'minus (firefox), mute/unmute',
    174: 'decrease volume level',
    175: 'increase volume level',
    176: 'next',
    177: 'previous',
    178: 'stop',
    179: 'play/pause',
    180: 'e-mail',
    181: 'mute/unmute (firefox)',
    182: 'decrease volume level (firefox)',
    183: 'increase volume level (firefox)',
    186: 'semi-colon / ñ',
    187: 'equal sign',
    188: 'comma',
    189: 'dash',
    190: 'period',
    191: 'forward slash / ç',
    192: 'grave accent / ñ / æ / ö',
    193: '?, / or °',
    194: 'numpad period (chrome)',
    219: 'open bracket',
    220: 'back slash',
    221: 'close bracket / å',
    222: 'single quote / ø / ä',
    223: '`',
    224: 'left or right ⌘ key (firefox)',
    225: 'altgr',
    226: '< /git >, left back slash',
    230: 'GNOME Compose Key',
    231: 'ç',
    233: 'XF86Forward',
    234: 'XF86Back',
    235: 'non-conversion',
    240: 'alphanumeric',
    242: 'hiragana/katakana',
    243: 'half-width/full-width',
    244: 'kanji',
    251: 'unlock trackpad (Chrome/Edge)',
    255: 'toggle touchpad',

    // new keycodes
    256: 'right shift',
    257: 'right ctrl',
    258: 'right alt',
};

const keyLocations = {
    0: 'General keys',
    1: 'Left-side modifier keys',
    2: 'Right-side modifier keys',
    3: 'Numpad',
};

const body = document.querySelector('body');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.textBaseline = 'middle';
ctx.textAlign = 'center';
ctx.font = '110px sans-serif';

// #endregion

// #region Event Listeners

document.addEventListener('touchstart', e => {    
    if (e.target.tagName === 'BUTTON') return;

    const input = document.createElement('input');
    input.setAttribute('type', 'text');

    // For some reason, the focus is immediately lost unless there is a delay on setting the focus
    setTimeout(() => {
        input.focus();
    }, 100);
});

body.onkeydown = function(e) {
    var vid = document.getElementById("myVideo");
    if (vid.muted) {
        vid.muted = !vid.muted;
    }

    if (!e.metaKey) {
        e.preventDefault();
    }

    // Show the cards with all
    const cards = document.querySelector('.cards');

    // Check if Key_Values is Unidentified then redirect to docs
    let newKeyText = '';
    if (e.key != null && e.key === 'Unidentified') {
        newKeyText = '<a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#Special_values" target="_blank" rel="noopener">Unidentified</a>';
    } else if (e.key === ' ') {
        newKeyText = `<span class="text-muted">(Space character)</span>`;
    } else {
        newKeyText = e.key || '';
    }

    // Check if location is Unidentified then redirect to docs
    let newLocationText = '';
    let newLocationFriendlyText = '';
    if (e.location == null) {
        newLocationFriendlyText = 'Unknown';
    } else if (!(e.location in keyLocations)) {
        newLocationFriendlyText = '<a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/location" target="_blank" rel="noopener">Other</a>';
    } else {
        newLocationFriendlyText = keyLocations[e.location];
    }

    if (newLocationFriendlyText !== 'Unknown') {
        newLocationText = `${e.location} <span class="text-muted">(${newLocationFriendlyText})</span>`;
    } else {
        newLocationText = newLocationFriendlyText;
    }

    // Check if code is Unidentified then redirect to docs
    let newCodeText = '';
    if (e.code != null && e.code === 'Unidentified') {
        newCodeText = '<a href="https://w3c.github.io/uievents-code/#table-key-code-special" target="_blank" rel="noopener">Unidentified</a>';
    } else {
        newCodeText = e.code || '';
    }
    
    let a = e.keyCode;
    let b = e.code;

    if(a == 16 && b == "ShiftRight") {
        a = 256;
    }
    
    if(a == 17 && b == "ControlRight") {
        a = 257;
    }
    
    if(a == 18 && b == "AltRight") {
        a = 258;
    }

    if (a == 186 || a == 59) {
        a = "colon";
    }
    if (a == 189) {
        a = 173;
    }
    if (a == 187) {
        a = 61;
    }
    if ($(key_prefix + a)) {
        key_highlight(a);
    }
    if ($(key_prefix + a + "b")) {
        key_highlight(a + "b");
    }

    if (!(keys.has(a))) {
        if (!(a >= 112 && a <=123) && (a != 166) && (a != 167)) {
            keys.add(a);
        }
        document.getElementById("loading_percent").innerHTML = (keys.size / 63) * 100 + '%';
        console.log('keycode: ' + e.keyCode, ' code: ', e.code, ' size: ', keys.size);
    }

};

const cardDivs = document.querySelectorAll('.card');

// #endregion

// end key codes

function hasGetUserMedia() {
    return !!(navigator.mediaDevices &&
              navigator.mediaDevices.getUserMedia);
}

// if (hasGetUserMedia()) {
//     // Good to go!
// } else {
//     alert('Use another tool to test the webcam');
// }

// Prefer camera resolution nearest to 1280x720.
var constraints = { video: { width: 1280, height: 720 } }; 

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  var video = document.querySelector('video');
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.


// const constraints = {
//     video: true
// };

// const video = document.querySelector('video');

// navigator.mediaDevices.getUserMedia(constraints).
//     then((stream) => {video.srcObject = stream});

// var vid = document.getElementById("myVideo");
// vid.autoplay = true;
// vid.load();
