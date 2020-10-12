let chromebook=new Set;function buildChromebook(){chromebook.add(13),chromebook.add(16),chromebook.add(17),chromebook.add(18),chromebook.add(188),chromebook.add(190),chromebook.add(191),chromebook.add(192),chromebook.add(219),chromebook.add(220),chromebook.add(221),chromebook.add(222),chromebook.add(27),chromebook.add(32),chromebook.add(37),chromebook.add(38),chromebook.add(39),chromebook.add(40),chromebook.add(48),chromebook.add(49),chromebook.add(50),chromebook.add(51),chromebook.add(52),chromebook.add(53),chromebook.add(54),chromebook.add(55),chromebook.add(56),chromebook.add(57),chromebook.add(65),chromebook.add(66),chromebook.add(67),chromebook.add(68),chromebook.add(69),chromebook.add(70),chromebook.add(71),chromebook.add(72),chromebook.add(73),chromebook.add(74),chromebook.add(75),chromebook.add(76),chromebook.add(77),chromebook.add(78),chromebook.add(79),chromebook.add(8),chromebook.add(80),chromebook.add(81),chromebook.add(82),chromebook.add(83),chromebook.add(84),chromebook.add(85),chromebook.add(86),chromebook.add(87),chromebook.add(88),chromebook.add(89),chromebook.add(9),chromebook.add(90)}buildChromebook();const keyCodes={0:"That key has no keycode",3:"break",8:"backspace / delete",9:"tab",12:"clear",13:"enter",16:"shift",17:"ctrl",18:"alt",19:"pause/break",20:"caps lock",21:"hangul",25:"hanja",27:"escape",28:"conversion",29:"non-conversion",32:"spacebar",33:"page up",34:"page down",35:"end",36:"home",37:"left arrow",38:"up arrow",39:"right arrow",40:"down arrow",41:"select",42:"print",43:"execute",44:"Print Screen",45:"insert",46:"delete",47:"help",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",58:":",59:"semicolon (firefox), equals",60:"<",61:"equals (firefox)",63:"ß",64:"@ (firefox)",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",91:"Windows Key / Left ⌘ / Chromebook Search key",92:"right window key",93:"Windows Menu / Right ⌘",95:"sleep",96:"numpad 0",97:"numpad 1",98:"numpad 2",99:"numpad 3",100:"numpad 4",101:"numpad 5",102:"numpad 6",103:"numpad 7",104:"numpad 8",105:"numpad 9",106:"multiply",107:"add",108:"numpad period (firefox)",109:"subtract",110:"decimal point",111:"divide",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",124:"f13",125:"f14",126:"f15",127:"f16",128:"f17",129:"f18",130:"f19",131:"f20",132:"f21",133:"f22",134:"f23",135:"f24",136:"f25",137:"f26",138:"f27",139:"f28",140:"f29",141:"f30",142:"f31",143:"f32",144:"num lock",145:"scroll lock",151:"airplane mode",160:"^",161:"!",162:"؛ (arabic semicolon)",163:"#",164:"$",165:"ù",166:"page backward",167:"page forward",168:"refresh",169:"closing paren (AZERTY)",170:"*",171:"~ + * key",172:"home key",173:"minus (firefox), mute/unmute",174:"decrease volume level",175:"increase volume level",176:"next",177:"previous",178:"stop",179:"play/pause",180:"e-mail",181:"mute/unmute (firefox)",182:"decrease volume level (firefox)",183:"increase volume level (firefox)",186:"semi-colon / ñ",187:"equal sign",188:"comma",189:"dash",190:"period",191:"forward slash / ç",192:"grave accent / ñ / æ / ö",193:"?, / or °",194:"numpad period (chrome)",219:"open bracket",220:"back slash",221:"close bracket / å",222:"single quote / ø / ä",223:"`",224:"left or right ⌘ key (firefox)",225:"altgr",226:"< /git >, left back slash",230:"GNOME Compose Key",231:"ç",233:"XF86Forward",234:"XF86Back",235:"non-conversion",240:"alphanumeric",242:"hiragana/katakana",243:"half-width/full-width",244:"kanji",251:"unlock trackpad (Chrome/Edge)",255:"toggle touchpad",256:"right shift",257:"right ctrl",258:"right alt"},body=document.querySelector("body"),canvas=document.querySelector("canvas"),ctx=canvas.getContext("2d");function isChromebook(e){return chromebook.has(e)}function updateBatteryStatus(e){document.querySelector("#charging").textContent=e.charging?"Charging: Yes":"Charging: No"}ctx.textBaseline="middle",ctx.textAlign="center",ctx.font="110px sans-serif",document.addEventListener("touchstart",e=>{if("BUTTON"===e.target.tagName)return;const o=document.createElement("input");o.setAttribute("type","text"),setTimeout(()=>{o.focus()},100)}),body.onkeydown=function(e){var o=document.getElementById("myVideo");o.muted&&(o.muted=!o.muted,o.play()),e.metaKey||e.preventDefault();document.querySelector(".cards");let a="";a=null!=e.key&&"Unidentified"===e.key?'<a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#Special_values" target="_blank" rel="noopener">Unidentified</a>':" "===e.key?'<span class="text-muted">(Space character)</span>':e.key||"";let d=e.keyCode,t=e.code;16==d&&"ShiftRight"==t&&(d=256),17==d&&"ControlRight"==t&&(d=257),18==d&&"AltRight"==t&&(d=258),186!=d&&59!=d||(d="colon"),189==d&&(d=173),187==d&&(d=61),key_highlight(d),isChromebook(d)&&!keys.has(d)&&(d>=112&&d<=123||166==d||167==d||keys.add(d),document.getElementById("loading_percent").innerHTML="Keyboard: "+keys.size/56*100+"%")},void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var o=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return o?new Promise(function(a,d){o.call(navigator,e,a,d)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}),navigator.mediaDevices.getUserMedia({video:!0}).then(function(e){var o=document.querySelector("video");"srcObject"in o?o.srcObject=e:o.src=window.URL.createObjectURL(e),o.onloadedmetadata=function(e){o.play()}}).catch(function(e){console.log(e.name+": "+e.message)}),navigator.getBattery().then(function(e){updateBatteryStatus(e),e.onchargingchange=function(){updateBatteryStatus(e)}});var FALSE_FUNCTION=new Function("return false"),key_prefix="#key",keys=new Set;function key_highlight(e){key_clear(e),91==e?(document.getElementById("key20").classList.add("key_highlight"),setTimeout("key_pressed('20')",300)):(document.getElementById("key"+e).classList.add("key_highlight"),setTimeout("key_pressed('"+e+"')",300))}function key_pressed(e){if(key_clear(e),91==e)return new_class="key_pressed",void document.getElementById("key20").classList.add(new_class);e.match(/b$/)?new_class="key_pressed_m":new_class="key_pressed",document.getElementById("key"+e).classList.add(new_class)}function key_clear(e){null!==document.getElementById("key"+e)&&(document.getElementById("key"+e).classList.remove("key_un"),document.getElementById("key"+e).classList.remove("key_pressed"),document.getElementById("key"+e).classList.remove("key_pressed_m"),document.getElementById("key"+e).classList.remove("key_highlight"))}function disableShortcuts(){document.onhelp=FALSE_FUNCTION,window.onhelp=FALSE_FUNCTION,document.onkeydown=function(){if("undefined"!=typeof event&&event.keyCode>=112&&event.keyCode<=123)return event.keyCode=0,!1}}
