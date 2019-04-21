module.exports = [
  {
    scratch3_selector: "MOTION_MOVESTEPS",
    scratch2_selector: "forward:",
    scratch2_spec: "move %1 steps",
    inputs: ["%n"],
    shape: "stack",
    category: "motion",
  },
  {
    scratch3_selector: "MOTION_TURNRIGHT",
    scratch2_selector: "turnRight:",
    scratch2_spec: "turn @turnRight %1 degrees",
    inputs: ["%n"],
    shape: "stack",
    category: "motion",
  },
  {
    scratch3_selector: "MOTION_TURNLEFT",
    scratch2_selector: "turnLeft:",
    scratch2_spec: "turn @turnLeft %1 degrees",
    inputs: ["%n"],
    shape: "stack",
    category: "motion",
  },
  {
    scratch3_selector: "MOTION_POINTINDIRECTION",
    scratch2_selector: "heading:",
    scratch2_spec: "point in direction %1",
    inputs: ["%d.direction"],
    shape: "stack",
    category: "motion",
  },
  {
    scratch3_selector: "MOTION_POINTTOWARDS",
    scratch2_selector: "pointTowards:",
    scratch2_spec: "point towards %1",
    inputs: ["%m.spriteOrMouse"],
    shape: "stack",
    category: "motion",
  },
  {
    scratch3_selector: "MOTION_GOTOXY",
    scratch2_selector: "gotoX:y:",
    scratch2_spec: "go to x:%1 y:%2",
    inputs: ["%n", "%n"],
    shape: "stack",
    category: "motion",
  },
  {
    scratch3_selector: "MOTION_GOTO",
    scratch2_selector: "gotoSpriteOrMouse:",
    scratch2_spec: "go to %1",
    inputs: ["%m.location"],
    shape: "stack",
    category: "motion",
  },
  {
    scratch3_selector: "MOTION_GLIDESECSTOXY",
    scratch2_selector: "glideSecs:toX:y:elapsed:from:",
    scratch2_spec: "glide %1 secs to x:%2 y:%3",
    inputs: ["%n", "%n", "%n"],
    shape: "stack",
    category: "motion",
  },
  {
    scratch3_selector: "MOTION_GLIDETO",
    scratch2_spec: "glide %1 secs to %2",
    inputs: ["%n", "%m.location"],
    shape: "stack",
    category: "motion",
  },
  {
    scratch3_selector: "MOTION_CHANGEXBY",
    scratch2_selector: "changeXposBy:",
    scratch2_spec: "change x by %1",
    inputs: ["%n"],
    shape: "stack",
    category: "motion",
  },
  {
    scratch3_selector: "MOTION_SETX",
    scratch2_selector: "xpos:",
    scratch2_spec: "set x to %1",
    inputs: ["%n"],
    shape: "stack",
    category: "motion",
  },
  {
    scratch3_selector: "MOTION_CHANGEYBY",
    scratch2_selector: "changeYposBy:",
    scratch2_spec: "change y by %1",
    inputs: ["%n"],
    shape: "stack",
    category: "motion",
  },
  {
    scratch3_selector: "MOTION_SETY",
    scratch2_selector: "ypos:",
    scratch2_spec: "set y to %1",
    inputs: ["%n"],
    shape: "stack",
    category: "motion",
  },
  {
    scratch3_selector: "MOTION_SETROTATIONSTYLE",
    scratch2_selector: "setRotationStyle",
    scratch2_spec: "set rotation style %1",
    inputs: ["%m.rotationStyle"],
    shape: "stack",
    category: "motion",
  },
  {
    scratch2_selector: "say:duration:elapsed:from:",
    scratch2_spec: "say %1 for %2 secs",
    inputs: ["%s", "%n"],
    shape: "stack",
    category: "looks",
  },
  {
    scratch3_selector: "LOOKS_SAYFORSECS",
    scratch2_selector: "say:duration:elapsed:from:",
    scratch2_spec: "say %1 for %2 seconds", // New name in Scratch 3
    inputs: ["%s", "%n"],
    shape: "stack",
    category: "looks",
  },
  {
    scratch3_selector: "LOOKS_SAY",
    scratch2_selector: "say:",
    scratch2_spec: "say %1",
    inputs: ["%s"],
    shape: "stack",
    category: "looks",
  },
  {
    scratch2_selector: "think:duration:elapsed:from:",
    scratch2_spec: "think %1 for %2 secs",
    inputs: ["%s", "%n"],
    shape: "stack",
    category: "looks",
  },
  {
    scratch3_selector: "LOOKS_THINKFORSECS",
    scratch2_selector: "think:duration:elapsed:from:",
    scratch2_spec: "think %1 for %2 seconds", // New name in Scratch 3
    inputs: ["%s", "%n"],
    shape: "stack",
    category: "looks",
  },
  {
    scratch3_selector: "LOOKS_THINK",
    scratch2_selector: "think:",
    scratch2_spec: "think %1",
    inputs: ["%s"],
    shape: "stack",
    category: "looks",
  },
  {
    scratch3_selector: "LOOKS_SHOW",
    scratch2_selector: "show",
    scratch2_spec: "show",
    inputs: [],
    shape: "stack",
    category: "looks",
  },
  {
    scratch3_selector: "LOOKS_HIDE",
    scratch2_selector: "hide",
    scratch2_spec: "hide",
    inputs: [],
    shape: "stack",
    category: "looks",
  },
  {
    scratch3_selector: "LOOKS_SWITCHCOSTUMETO",
    scratch2_selector: "lookLike:",
    scratch2_spec: "switch costume to %1",
    inputs: ["%m.costume"],
    shape: "stack",
    category: "looks",
  },
  {
    scratch3_selector: "LOOKS_NEXTCOSTUME",
    scratch2_selector: "nextCostume",
    scratch2_spec: "next costume",
    inputs: [],
    shape: "stack",
    category: "looks",
  },
  {
    scratch3_selector: "LOOKS_NEXTBACKDROP",
    scratch2_selector: "nextScene",
    scratch2_spec: "next backdrop",
    inputs: [],
    shape: "stack",
    category: "looks",
  },
  {
    scratch3_selector: "LOOKS_SWITCHBACKDROPTO",
    scratch2_selector: "startScene",
    scratch2_spec: "switch backdrop to %1",
    inputs: ["%m.backdrop"],
    shape: "stack",
    category: "looks",
  },
  {
    scratch3_selector: "LOOKS_SWITCHBACKDROPTOANDWAIT",
    scratch2_selector: "startSceneAndWait",
    scratch2_spec: "switch backdrop to %1 and wait",
    inputs: ["%m.backdrop"],
    shape: "stack",
    category: "looks",
  },
  {
    scratch3_selector: "SOUND_CHANGEEFFECTBY",
    scratch2_selector: "changeGraphicEffect:by:",
    scratch2_spec: "change %1 effect by %2",
    inputs: ["%m.effect", "%n"],
    shape: "stack",
    category: "looks",
  },
  {
    scratch3_selector: "SOUND_SETEFFECTO", // sic
    scratch2_selector: "setGraphicEffect:to:",
    scratch2_spec: "set %1 effect to %2",
    inputs: ["%m.effect", "%n"],
    shape: "stack",
    category: "looks",
  },
  {
    scratch3_selector: "LOOKS_CLEARGRAPHICEFFECTS",
    scratch2_selector: "filterReset",
    scratch2_spec: "clear graphic effects",
    inputs: [],
    shape: "stack",
    category: "looks",
  },
  {
    scratch3_selector: "LOOKS_CHANGESIZEBY",
    scratch2_selector: "changeSizeBy:",
    scratch2_spec: "change size by %1",
    inputs: ["%n"],
    shape: "stack",
    category: "looks",
  },
  {
    scratch3_selector: "LOOKS_SETSIZETO",
    scratch2_selector: "setSizeTo:",
    scratch2_spec: "set size to %1%",
    inputs: ["%n"],
    shape: "stack",
    category: "looks",
  },
  {
    scratch2_selector: "comeToFront",
    scratch2_spec: "go to front",
    inputs: [],
    shape: "stack",
    category: "looks",
  },
  {
    scratch3_selector: "LOOKS_GOTOFRONTBACK",
    scratch2_spec: "go to %1 layer",
    inputs: ["%m"],
    shape: "stack",
    category: "looks",
  },
  {
    scratch2_selector: "goBackByLayers:",
    scratch2_spec: "go back %1 layers",
    inputs: ["%n"],
    shape: "stack",
    category: "looks",
  },
  {
    scratch3_selector: "LOOKS_GOFORWARDBACKWARDLAYERS",
    scratch2_spec: "go %1 %2 layers",
    inputs: ["%m", "%n"],
    shape: "stack",
    category: "looks",
  },
  {
    scratch2_selector: "playSound:",
    scratch2_spec: "play sound %1",
    inputs: ["%m.sound"],
    shape: "stack",
    category: "sound",
  },
  {
    scratch3_selector: "SOUND_PLAY",
    scratch2_selector: "playSound:",
    scratch2_spec: "start sound %1", // New name in Scratch 3
    inputs: ["%m.sound"],
    shape: "stack",
    category: "sound",
  },
  {
    scratch3_selector: "SOUND_CHANGEEFFECTBY",
    scratch2_spec: "change %1 effect by %2",
    inputs: ["%m", "%n"],
    shape: "stack",
    category: "sound",
  },
  {
    scratch3_selector: "SOUND_SETEFFECTO",
    scratch2_spec: "set %1 effect to %2",
    inputs: ["%m", "%n"],
    shape: "stack",
    category: "sound",
  },
  {
    scratch3_selector: "SOUND_CLEAREFFECTS",
    scratch2_spec: "clear sound effects",
    inputs: [],
    shape: "stack",
    category: "sound",
  },
  {
    scratch3_selector: "SOUND_PLAYUNTILDONE",
    scratch2_selector: "doPlaySoundAndWait",
    scratch2_spec: "play sound %1 until done",
    inputs: ["%m.sound"],
    shape: "stack",
    category: "sound",
  },
  {
    scratch3_selector: "SOUND_STOPALLSOUNDS",
    scratch2_selector: "stopAllSounds",
    scratch2_spec: "stop all sounds",
    inputs: [],
    shape: "stack",
    category: "sound",
  },
  {
    scratch3_selector: "music.playDrumForBeats",
    scratch2_selector: "playDrum",
    scratch2_spec: "play drum %1 for %2 beats",
    inputs: ["%d.drum", "%n"],
    shape: "stack",
    category: "music",
  },
  {
    scratch3_selector: "music.restForBeats",
    scratch2_selector: "rest:elapsed:from:",
    scratch2_spec: "rest for %1 beats",
    inputs: ["%n"],
    shape: "stack",
    category: "music",
  },
  {
    scratch3_selector: "music.playNoteForBeats",
    scratch2_selector: "noteOn:duration:elapsed:from:",
    scratch2_spec: "play note %1 for %2 beats",
    inputs: ["%d.note", "%n"],
    shape: "stack",
    category: "music",
  },
  {
    scratch3_selector: "music.setInstrument",
    scratch2_selector: "instrument:",
    scratch2_spec: "set instrument to %1",
    inputs: ["%d.instrument"],
    shape: "stack",
    category: "music",
  },
  {
    scratch3_selector: "SOUND_CHANGEVOLUMEBY",
    scratch2_selector: "changeVolumeBy:",
    scratch2_spec: "change volume by %1",
    inputs: ["%n"],
    shape: "stack",
    category: "sound",
  },
  {
    scratch3_selector: "SOUND_SETVOLUMETO",
    scratch2_selector: "setVolumeTo:",
    scratch2_spec: "set volume to %1%",
    inputs: ["%n"],
    shape: "stack",
    category: "sound",
  },
  {
    scratch3_selector: "music.changeTempo",
    scratch2_selector: "changeTempoBy:",
    scratch2_spec: "change tempo by %1",
    inputs: ["%n"],
    shape: "stack",
    category: "music",
  },
  {
    scratch2_selector: "setTempoTo:",
    scratch2_spec: "set tempo to %1 bpm",
    inputs: ["%n"],
    shape: "stack",
    category: "sound",
  },
  {
    scratch3_selector: "music.setTempo",
    scratch2_selector: "setTempoTo:",
    scratch2_spec: "set tempo to %1",
    inputs: ["%n"],
    shape: "stack",
    category: "music",
  },
  {
    scratch2_selector: "clearPenTrails",
    scratch2_spec: "clear",
    inputs: [],
    shape: "stack",
    category: "pen",
  },
  {
    scratch3_selector: "pen.clear",
    scratch2_selector: "clearPenTrails",
    scratch2_spec: "erase all", // New name in Scratch 3
    inputs: [],
    shape: "stack",
    category: "pen",
  },
  {
    scratch3_selector: "pen.stamp",
    scratch2_selector: "stampCostume",
    scratch2_spec: "stamp",
    inputs: [],
    shape: "stack",
    category: "pen",
  },
  {
    scratch3_selector: "pen.penDown",
    scratch2_selector: "putPenDown",
    scratch2_spec: "pen down",
    inputs: [],
    shape: "stack",
    category: "pen",
  },
  {
    scratch3_selector: "pen.penUp",
    scratch2_selector: "putPenUp",
    scratch2_spec: "pen up",
    inputs: [],
    shape: "stack",
    category: "pen",
  },
  {
    scratch3_selector: "pen.setColor",
    scratch2_selector: "penColor:",
    scratch2_spec: "set pen color to %1",
    inputs: ["%c"],
    shape: "stack",
    category: "pen",
  },
  {
    scratch3_selector: "pen.changeHue",
    scratch2_selector: "changePenHueBy:",
    scratch2_spec: "change pen color by %1",
    inputs: ["%n"],
    shape: "stack",
    category: "pen",
  },
  {
    scratch3_selector: "pen.setColorParam",
    scratch2_spec: "set pen %1 to %2",
    inputs: ["%m.color", "%c"],
    shape: "stack",
    category: "pen",
  },
  {
    scratch3_selector: "pen.changeColorParam",
    scratch2_spec: "change pen %1 by %2",
    inputs: ["%m.color", "%n"],
    shape: "stack",
    category: "pen",
  },
  {
    scratch3_selector: "pen.setHue",
    scratch2_selector: "setPenHueTo:",
    scratch2_spec: "set pen color to %1",
    inputs: ["%n"],
    shape: "stack",
    category: "pen",
  },
  {
    scratch3_selector: "pen.changeShade",
    scratch2_selector: "changePenShadeBy:",
    scratch2_spec: "change pen shade by %1",
    inputs: ["%n"],
    shape: "stack",
    category: "pen",
  },
  {
    scratch3_selector: "pen.setShade",
    scratch2_selector: "setPenShadeTo:",
    scratch2_spec: "set pen shade to %1",
    inputs: ["%n"],
    shape: "stack",
    category: "pen",
  },
  {
    scratch3_selector: "pen.changeSize",
    scratch2_selector: "changePenSizeBy:",
    scratch2_spec: "change pen size by %1",
    inputs: ["%n"],
    shape: "stack",
    category: "pen",
  },
  {
    scratch3_selector: "pen.setSize",
    scratch2_selector: "penSize:",
    scratch2_spec: "set pen size to %1",
    inputs: ["%n"],
    shape: "stack",
    category: "pen",
  },
  {
    scratch3_selector: "EVENT_WHENFLAGCLICKED",
    scratch2_selector: "whenGreenFlag",
    scratch2_spec: "when @greenFlag clicked",
    inputs: [],
    shape: "hat",
    category: "events",
  },
  {
    scratch3_selector: "EVENT_WHENKEYPRESSED",
    scratch2_selector: "whenKeyPressed",
    scratch2_spec: "when %1 key pressed",
    inputs: ["%m.key"],
    shape: "hat",
    category: "events",
  },
  {
    scratch3_selector: "EVENT_WHENTHISSPRITECLICKED",
    scratch2_selector: "whenClicked",
    scratch2_spec: "when this sprite clicked",
    inputs: [],
    shape: "hat",
    category: "events",
  },
  {
    scratch3_selector: "EVENT_WHENBACKDROPSWITCHESTO",
    scratch2_selector: "whenSceneStarts",
    scratch2_spec: "when backdrop switches to %1",
    inputs: ["%m.backdrop"],
    shape: "hat",
    category: "events",
  },
  {
    scratch3_selector: "EVENT_WHENGREATERTHAN",
    scratch2_selector: "whenSensorGreaterThan",
    scratch2_spec: "when %1 > %2",
    inputs: ["%m.triggerSensor", "%n"],
    shape: "hat",
    category: "events",
  },
  {
    scratch3_selector: "EVENT_WHENBROADCASTRECEIVED",
    scratch2_selector: "whenIReceive",
    scratch2_spec: "when I receive %1",
    inputs: ["%m.broadcast"],
    shape: "hat",
    category: "events",
  },
  {
    scratch3_selector: "EVENT_BROADCAST",
    scratch2_selector: "broadcast:",
    scratch2_spec: "broadcast %1",
    inputs: ["%m.broadcast"],
    shape: "stack",
    category: "events",
  },
  {
    scratch3_selector: "EVENT_BROADCASTANDWAIT",
    scratch2_selector: "doBroadcastAndWait",
    scratch2_spec: "broadcast %1 and wait",
    inputs: ["%m.broadcast"],
    shape: "stack",
    category: "events",
  },
  {
    scratch2_selector: "wait:elapsed:from:",
    scratch2_spec: "wait %1 secs",
    inputs: ["%n"],
    shape: "stack",
    category: "control",
  },
  {
    scratch3_selector: "CONTROL_WAIT",
    scratch2_selector: "wait:elapsed:from:",
    scratch2_spec: "wait %1 seconds", // New name in Scratch 3
    inputs: ["%n"],
    shape: "stack",
    category: "control",
  },
  {
    scratch3_selector: "CONTROL_REPEAT",
    scratch2_selector: "doRepeat",
    scratch2_spec: "repeat %1",
    inputs: ["%n"],
    shape: "c-block",
    category: "control",
    hasLoopArrow: true,
  },
  {
    scratch3_selector: "CONTROL_FOREVER",
    scratch2_selector: "doForever",
    scratch2_spec: "forever",
    inputs: [],
    shape: "c-block cap",
    category: "control",
    hasLoopArrow: true,
  },
  {
    scratch3_selector: "CONTROL_IF",
    scratch2_selector: "doIf",
    scratch2_spec: "if %1 then",
    inputs: ["%b"],
    shape: "c-block",
    category: "control",
  },
  {
    scratch3_selector: "CONTROL_IF",
    scratch2_selector: "doIfElse",
    scratch2_spec: "if %1 then",
    inputs: ["%b"],
    shape: "if-block",
    category: "control",
  },
  {
    scratch3_selector: "CONTROL_WAITUNTIL",
    scratch2_selector: "doWaitUntil",
    scratch2_spec: "wait until %1",
    inputs: ["%b"],
    shape: "stack",
    category: "control",
  },
  {
    scratch3_selector: "CONTROL_REPEATUNTIL",
    scratch2_selector: "doUntil",
    scratch2_spec: "repeat until %1",
    inputs: ["%b"],
    shape: "c-block",
    category: "control",
    hasLoopArrow: true,
  },
  {
    scratch3_selector: "CONTROL_STOP",
    scratch2_selector: "stopScripts",
    scratch2_spec: "stop %1",
    inputs: ["%m.stop"],
    shape: "cap",
    category: "control",
  },
  {
    scratch3_selector: "CONTROL_STARTASCLONE",
    scratch2_selector: "whenCloned",
    scratch2_spec: "when I start as a clone",
    inputs: [],
    shape: "hat",
    category: "control",
  },
  {
    scratch3_selector: "CONTROL_CREATECLONEOF",
    scratch2_selector: "createCloneOf",
    scratch2_spec: "create clone of %1",
    inputs: ["%m.spriteOnly"],
    shape: "stack",
    category: "control",
  },
  {
    scratch3_selector: "CONTROL_DELETETHISCLONE",
    scratch2_selector: "deleteClone",
    scratch2_spec: "delete this clone",
    inputs: [],
    shape: "cap",
    category: "control",
  },
  {
    scratch3_selector: "SENSING_ASKANDWAIT",
    scratch2_selector: "doAsk",
    scratch2_spec: "ask %1 and wait",
    inputs: ["%s"],
    shape: "stack",
    category: "sensing",
  },
  {
    scratch3_selector: "videoSensing.videoToggle",
    scratch2_selector: "setVideoState",
    scratch2_spec: "turn video %1",
    inputs: ["%m.videoState"],
    shape: "stack",
    category: "video",
  },
  {
    scratch3_selector: "videoSensing.setVideoTransparency",
    scratch2_selector: "setVideoTransparency",
    scratch2_spec: "set video transparency to %1%",
    inputs: ["%n"],
    shape: "stack",
    category: "video",
  },
  {
    scratch3_selector: "videoSensing.whenMotionGreaterThan",
    scratch2_spec: "when video motion > %1",
    inputs: ["%n"],
    shape: "hat",
    category: "video",
  },
  {
    scratch3_selector: "SENSING_RESETTIMER",
    scratch2_selector: "timerReset",
    scratch2_spec: "reset timer",
    inputs: [],
    shape: "stack",
    category: "sensing",
  },
  {
    scratch3_selector: "DATA_SETVARIABLETO",
    scratch2_selector: "setVar:to:",
    scratch2_spec: "set %1 to %2",
    inputs: ["%m.var", "%s"],
    shape: "stack",
    category: "variables",
  },
  {
    scratch3_selector: "DATA_CHANGEVARIABLEBY",
    scratch2_selector: "changeVar:by:",
    scratch2_spec: "change %1 by %2",
    inputs: ["%m.var", "%n"],
    shape: "stack",
    category: "variables",
  },
  {
    scratch3_selector: "DATA_SHOWVARIABLE",
    scratch2_selector: "showVariable:",
    scratch2_spec: "show variable %1",
    inputs: ["%m.var"],
    shape: "stack",
    category: "variables",
  },
  {
    scratch3_selector: "DATA_HIDEVARIABLE",
    scratch2_selector: "hideVariable:",
    scratch2_spec: "hide variable %1",
    inputs: ["%m.var"],
    shape: "stack",
    category: "variables",
  },
  {
    scratch3_selector: "DATA_ADDTOLIST",
    scratch2_selector: "append:toList:",
    scratch2_spec: "add %1 to %2",
    inputs: ["%s", "%m.list"],
    shape: "stack",
    category: "list",
  },
  {
    scratch3_selector: "DATA_DELETEOFLIST",
    scratch2_selector: "deleteLine:ofList:",
    scratch2_spec: "delete %1 of %2",
    inputs: ["%d.listDeleteItem", "%m.list"],
    shape: "stack",
    category: "list",
  },
  {
    scratch3_selector: "DATA_DELETEALLOFLIST",
    scratch2_spec: "delete all of %1",
    inputs: ["%m.list"],
    shape: "stack",
    category: "list",
  },
  {
    scratch3_selector: "MOTION_IFONEDGEBOUNCE",
    scratch2_selector: "bounceOffEdge",
    scratch2_spec: "if on edge, bounce",
    inputs: [],
    shape: "stack",
    category: "motion",
  },
  {
    scratch3_selector: "DATA_INSERTATLIST",
    scratch2_selector: "insert:at:ofList:",
    scratch2_spec: "insert %1 at %2 of %3",
    inputs: ["%s", "%d.listItem", "%m.list"],
    shape: "stack",
    category: "list",
  },
  {
    scratch3_selector: "DATA_REPLACEITEMOFLIST",
    scratch2_selector: "setLine:ofList:to:",
    scratch2_spec: "replace item %1 of %2 with %3",
    inputs: ["%d.listItem", "%m.list", "%s"],
    shape: "stack",
    category: "list",
  },
  {
    scratch3_selector: "DATA_SHOWLIST",
    scratch2_selector: "showList:",
    scratch2_spec: "show list %1",
    inputs: ["%m.list"],
    shape: "stack",
    category: "list",
  },
  {
    scratch3_selector: "DATA_HIDELIST",
    scratch2_selector: "hideList:",
    scratch2_spec: "hide list %1",
    inputs: ["%m.list"],
    shape: "stack",
    category: "list",
  },
  {
    scratch3_selector: "SENSING_OF_XPOSITION",
    scratch2_selector: "xpos",
    scratch2_spec: "x position",
    inputs: [],
    shape: "reporter",
    category: "motion",
  },
  {
    scratch3_selector: "SENSING_OF_YPOSITION",
    scratch2_selector: "ypos",
    scratch2_spec: "y position",
    inputs: [],
    shape: "reporter",
    category: "motion",
  },
  {
    scratch3_selector: "SENSING_OF_DIRECTION",
    scratch2_selector: "heading",
    scratch2_spec: "direction",
    inputs: [],
    shape: "reporter",
    category: "motion",
  },
  {
    scratch3_selector: "SENSING_OF_COSTUMENUMBER",
    scratch2_selector: "costumeIndex",
    scratch2_spec: "costume #",
    inputs: [],
    shape: "reporter",
    category: "looks",
  },
  {
    scratch3_selector: "LOOKS_COSTUMENUMBERNAME",
    scratch2_selector: "LOOKS_COSTUMENUMBERNAME",
    scratch2_spec: "costume %1",
    inputs: ["%m"],
    shape: "reporter",
    category: "looks",
  },
  {
    scratch3_selector: "SENSING_OF_SIZE",
    scratch2_selector: "scale",
    scratch2_spec: "size",
    inputs: [],
    shape: "reporter",
    category: "looks",
  },
  {
    scratch3_selector: "SENSING_OF_BACKDROPNAME",
    scratch2_selector: "sceneName",
    scratch2_spec: "backdrop name",
    inputs: [],
    shape: "reporter",
    category: "looks",
  },
  {
    scratch3_selector: "LOOKS_BACKDROPNUMBERNAME",
    scratch2_spec: "backdrop %1",
    inputs: ["%m"],
    shape: "reporter",
    category: "looks",
  },
  {
    scratch3_selector: "SENSING_OF_BACKDROPNUMBER",
    scratch2_selector: "backgroundIndex",
    scratch2_spec: "backdrop #",
    inputs: [],
    shape: "reporter",
    category: "looks",
  },
  {
    scratch3_selector: "SOUND_VOLUME",
    scratch2_selector: "volume",
    scratch2_spec: "volume",
    inputs: [],
    shape: "reporter",
    category: "sound",
  },
  {
    scratch3_selector: "music.getTempo",
    scratch2_selector: "tempo",
    scratch2_spec: "tempo",
    inputs: [],
    shape: "reporter",
    category: "music",
  },
  {
    scratch3_selector: "SENSING_TOUCHINGOBJECT",
    scratch2_selector: "touching:",
    scratch2_spec: "touching %1?",
    inputs: ["%m.touching"],
    shape: "boolean",
    category: "sensing",
  },
  {
    scratch3_selector: "SENSING_TOUCHINGCOLOR",
    scratch2_selector: "touchingColor:",
    scratch2_spec: "touching color %1?",
    inputs: ["%c"],
    shape: "boolean",
    category: "sensing",
  },
  {
    scratch3_selector: "SENSING_COLORISTOUCHINGCOLOR",
    scratch2_selector: "color:sees:",
    scratch2_spec: "color %1 is touching %2?",
    inputs: ["%c", "%c"],
    shape: "boolean",
    category: "sensing",
  },
  {
    scratch3_selector: "SENSING_DISTANCETO",
    scratch2_selector: "distanceTo:",
    scratch2_spec: "distance to %1",
    inputs: ["%m.spriteOrMouse"],
    shape: "reporter",
    category: "sensing",
  },
  {
    scratch3_selector: "SENSING_ANSWER",
    scratch2_selector: "answer",
    scratch2_spec: "answer",
    inputs: [],
    shape: "reporter",
    category: "sensing",
  },
  {
    scratch3_selector: "SENSING_KEYPRESSED",
    scratch2_selector: "keyPressed:",
    scratch2_spec: "key %1 pressed?",
    inputs: ["%m.key"],
    shape: "boolean",
    category: "sensing",
  },
  {
    scratch3_selector: "SENSING_MOUSEDOWN",
    scratch2_selector: "mousePressed",
    scratch2_spec: "mouse down?",
    inputs: [],
    shape: "boolean",
    category: "sensing",
  },
  {
    scratch3_selector: "SENSING_MOUSEX",
    scratch2_selector: "mouseX",
    scratch2_spec: "mouse x",
    inputs: [],
    shape: "reporter",
    category: "sensing",
  },
  {
    scratch3_selector: "SENSING_MOUSEY",
    scratch2_selector: "mouseY",
    scratch2_spec: "mouse y",
    inputs: [],
    shape: "reporter",
    category: "sensing",
  },
  {
    scratch3_selector: "SENSING_SETDRAGMODE",
    scratch2_spec: "set drag mode %1",
    inputs: ["%m"],
    shape: "stack",
    category: "sensing",
  },
  {
    scratch3_selector: "SENSING_LOUDNESS",
    scratch2_selector: "soundLevel",
    scratch2_spec: "loudness",
    inputs: [],
    shape: "reporter",
    category: "sensing",
  },
  {
    scratch3_selector: "videoSensing.videoOn",
    scratch2_selector: "senseVideoMotion",
    scratch2_spec: "video %1 on %2",
    inputs: ["%m.videoMotionType", "%m.stageOrThis"],
    shape: "reporter",
    category: "video",
  },
  {
    scratch3_selector: "SENSING_TIMER",
    scratch2_selector: "timer",
    scratch2_spec: "timer",
    inputs: [],
    shape: "reporter",
    category: "sensing",
  },
  {
    scratch3_selector: "SENSING_OF",
    scratch2_selector: "getAttribute:of:",
    scratch2_spec: "%1 of %2",
    inputs: ["%m.attribute", "%m.spriteOrStage"],
    shape: "reporter",
    category: "sensing",
  },
  {
    scratch3_selector: "SENSING_CURRENT",
    scratch2_selector: "timeAndDate",
    scratch2_spec: "current %1",
    inputs: ["%m.timeAndDate"],
    shape: "reporter",
    category: "sensing",
  },
  {
    scratch3_selector: "SENSING_DAYSSINCE2000",
    scratch2_selector: "timestamp",
    scratch2_spec: "days since 2000",
    inputs: [],
    shape: "reporter",
    category: "sensing",
  },
  {
    scratch3_selector: "SENSING_USERNAME",
    scratch2_selector: "getUserName",
    scratch2_spec: "username",
    inputs: [],
    shape: "reporter",
    category: "sensing",
  },
  {
    scratch3_selector: "OPERATORS_ADD",
    scratch2_selector: "+",
    scratch2_spec: "%1 + %2",
    inputs: ["%n", "%n"],
    shape: "reporter",
    category: "operators",
  },
  {
    scratch3_selector: "OPERATORS_SUBTRACT",
    scratch2_selector: "-",
    scratch2_spec: "%1 - %2",
    inputs: ["%n", "%n"],
    shape: "reporter",
    category: "operators",
  },
  {
    scratch3_selector: "OPERATORS_MULTIPLY",
    scratch2_selector: "*",
    scratch2_spec: "%1 * %2",
    inputs: ["%n", "%n"],
    shape: "reporter",
    category: "operators",
  },
  {
    scratch3_selector: "OPERATORS_DIVIDE",
    scratch2_selector: "/",
    scratch2_spec: "%1 / %2",
    inputs: ["%n", "%n"],
    shape: "reporter",
    category: "operators",
  },
  {
    scratch3_selector: "OPERATORS_RANDOM",
    scratch2_selector: "randomFrom:to:",
    scratch2_spec: "pick random %1 to %2",
    inputs: ["%n", "%n"],
    shape: "reporter",
    category: "operators",
  },
  {
    scratch3_selector: "OPERATORS_LT",
    scratch2_selector: "<",
    scratch2_spec: "%1 < %2",
    inputs: ["%s", "%s"],
    shape: "boolean",
    category: "operators",
  },
  {
    scratch3_selector: "OPERATORS_EQUALS",
    scratch2_selector: "=",
    scratch2_spec: "%1 = %2",
    inputs: ["%s", "%s"],
    shape: "boolean",
    category: "operators",
  },
  {
    scratch3_selector: "OPERATORS_GT",
    scratch2_selector: ">",
    scratch2_spec: "%1 > %2",
    inputs: ["%s", "%s"],
    shape: "boolean",
    category: "operators",
  },
  {
    scratch3_selector: "OPERATORS_AND",
    scratch2_selector: "&",
    scratch2_spec: "%1 and %2",
    inputs: ["%b", "%b"],
    shape: "boolean",
    category: "operators",
  },
  {
    scratch3_selector: "OPERATORS_OR",
    scratch2_selector: "|",
    scratch2_spec: "%1 or %2",
    inputs: ["%b", "%b"],
    shape: "boolean",
    category: "operators",
  },
  {
    scratch3_selector: "OPERATORS_NOT",
    scratch2_selector: "not",
    scratch2_spec: "not %1",
    inputs: ["%b"],
    shape: "boolean",
    category: "operators",
  },
  {
    scratch3_selector: "OPERATORS_JOIN",
    scratch2_selector: "concatenate:with:",
    scratch2_spec: "join %1 %2",
    inputs: ["%s", "%s"],
    shape: "reporter",
    category: "operators",
  },
  {
    scratch3_selector: "OPERATORS_LETTEROF",
    scratch2_selector: "letter:of:",
    scratch2_spec: "letter %1 of %2",
    inputs: ["%n", "%s"],
    shape: "reporter",
    category: "operators",
  },
  {
    scratch3_selector: "OPERATORS_LENGTH",
    scratch2_selector: "stringLength:",
    scratch2_spec: "length of %1",
    inputs: ["%s"],
    shape: "reporter",
    category: "operators",
  },
  {
    scratch3_selector: "OPERATORS_MOD",
    scratch2_selector: "%",
    scratch2_spec: "%1 mod %2",
    inputs: ["%n", "%n"],
    shape: "reporter",
    category: "operators",
  },
  {
    scratch3_selector: "OPERATORS_ROUND",
    scratch2_selector: "rounded",
    scratch2_spec: "round %1",
    inputs: ["%n"],
    shape: "reporter",
    category: "operators",
  },
  {
    scratch3_selector: "SENSING_OF",
    scratch2_selector: "computeFunction:of:",
    scratch2_spec: "%1 of %2",
    inputs: ["%m.mathOp", "%n"],
    shape: "reporter",
    category: "operators",
  },
  {
    scratch3_selector: "OPERATORS_CONTAINS",
    scratch2_spec: "%1 contains %2?",
    inputs: ["%s", "%s"],
    shape: "boolean",
    category: "operators",
  },
  {
    scratch3_selector: "DATA_ITEMOFLIST",
    scratch2_selector: "getLine:ofList:",
    scratch2_spec: "item %1 of %2",
    inputs: ["%d.listItem", "%m.list"],
    shape: "reporter",
    category: "list",
  },
  {
    scratch3_selector: "DATA_ITEMNUMOFLIST",
    scratch2_spec: "item # of %1 in %2",
    inputs: ["%s", "%m.list"],
    shape: "reporter",
    category: "list",
  },
  {
    scratch3_selector: "OPERATORS_LENGTH",
    scratch2_selector: "lineCountOfList:",
    scratch2_spec: "length of %1",
    inputs: ["%m.list"],
    shape: "reporter",
    category: "list",
  },
  {
    scratch3_selector: "OPERATORS_CONTAINS",
    scratch2_selector: "list:contains:",
    scratch2_spec: "%1 contains %2?",
    inputs: ["%m.list", "%s"],
    shape: "boolean",
    category: "list",
  },
  {
    scratch2_selector: "",
    scratch2_spec: "when %1",
    inputs: ["%m.booleanSensor"],
    shape: "hat",
    category: "extension",
  },
  {
    scratch2_selector: "",
    scratch2_spec: "when %1 %2 %3",
    inputs: ["%m.sensor", "%m.lessMore", "%n"],
    shape: "hat",
    category: "extension",
  },
  {
    scratch2_selector: "",
    scratch2_spec: "sensor %1?",
    inputs: ["%m.booleanSensor"],
    shape: "boolean",
    category: "extension",
  },
  {
    scratch2_selector: "",
    scratch2_spec: "%1 sensor value",
    inputs: ["%m.sensor"],
    shape: "reporter",
    category: "extension",
  },
  {
    scratch2_spec: "turn %1 on for %2 secs",
    inputs: ["%m.motor", "%n"],
    shape: "stack",
    category: "extension",
  },
  {
    scratch3_selector: "wedo2.motorOn",
    scratch2_spec: "turn %1 on",
    inputs: ["%m.motor"],
    shape: "stack",
    category: "extension",
  },
  {
    scratch3_selector: "wedo2.motorOff",
    scratch2_spec: "turn %1 off",
    inputs: ["%m.motor"],
    shape: "stack",
    category: "extension",
  },
  {
    scratch3_selector: "wedo2.startMotorPower",
    scratch2_spec: "set %1 power to %2",
    inputs: ["%m.motor", "%n"],
    shape: "stack",
    category: "extension",
  },
  {
    scratch3_selector: "wedo2.setMotorDirection",
    scratch2_spec: "set %1 direction to %2",
    inputs: ["%m.motor2", "%m.motorDirection"],
    shape: "stack",
    category: "extension",
  },
  {
    scratch3_selector: "wedo2.whenDistance",
    scratch2_spec: "when distance %1 %2",
    inputs: ["%m.lessMore", "%n"],
    shape: "hat",
    category: "extension",
  },
  {
    scratch2_selector: "",
    scratch2_spec: "when tilt %1 %2",
    inputs: ["%m.eNe", "%n"],
    shape: "hat",
    category: "extension",
  },
  {
    scratch3_selector: "wedo2.getDistance",
    scratch2_spec: "distance",
    inputs: [],
    shape: "reporter",
    category: "extension",
  },
  {
    scratch2_selector: "",
    scratch2_spec: "tilt",
    inputs: [],
    shape: "reporter",
    category: "extension",
  },
  {
    scratch3_selector: "wedo2.motorOnFor",
    scratch2_spec: "turn %1 on for %2 seconds",
    inputs: ["%m.motor", "%n"],
    shape: "stack",
    category: "extension",
  },
  {
    scratch3_selector: "wedo2.setLightHue",
    scratch2_spec: "set light color to %1",
    inputs: ["%n"],
    shape: "stack",
    category: "extension",
  },
  {
    scratch3_selector: "wedo2.playNoteFor",
    scratch2_spec: "play note %1 for %2 seconds",
    inputs: ["%n", "%n"],
    shape: "stack",
    category: "extension",
  },
  {
    scratch3_selector: "wedo2.whenTilted",
    scratch2_spec: "when tilted %1",
    inputs: ["%m.xxx"],
    shape: "hat",
    category: "extension",
  },
  {
    scratch3_selector: "wedo2.getTiltAngle",
    scratch2_spec: "tilt angle %1",
    inputs: ["%m.xxx"],
    shape: "reporter",
    category: "extension",
  },
  {
    scratch3_selector: "CONTROL_ELSE",
    scratch2_spec: "else",
    inputs: [],
    shape: "celse",
    category: "control",
  },
  {
    scratch2_spec: "end",
    inputs: [],
    shape: "cend",
    category: "control",
  },
  {
    scratch2_spec: ". . .",
    inputs: [],
    shape: "stack",
    category: "grey",
  },
  {
    scratch2_spec: "%1 @addInput",
    inputs: ["%n"],
    shape: "ring",
    category: "grey",
  },
  {
    scratch3_selector: "SENSING_USERID",
    scratch2_spec: "user id",
    inputs: [],
    shape: "reporter",
    category: "obsolete",
  },
  {
    scratch2_selector: "doIf",
    scratch2_spec: "if %1",
    inputs: ["%b"],
    shape: "c-block",
    category: "obsolete",
  },
  {
    scratch2_selector: "doIfElse",
    scratch2_spec: "if %1",
    inputs: ["%b"],
    shape: "if-block",
    category: "obsolete",
  },
  {
    scratch2_selector: "doForeverIf",
    scratch2_spec: "forever if %1",
    inputs: ["%b"],
    shape: "c-block cap",
    category: "obsolete",
  },
  {
    scratch2_selector: "doReturn",
    scratch2_spec: "stop script",
    inputs: [],
    shape: "cap",
    category: "obsolete",
  },
  {
    scratch2_selector: "stopAll",
    scratch2_spec: "stop all",
    inputs: [],
    shape: "cap",
    category: "obsolete",
  },
  {
    scratch2_selector: "lookLike:",
    scratch2_spec: "switch to costume %1",
    inputs: ["%m.costume"],
    shape: "stack",
    category: "obsolete",
  },
  {
    scratch2_selector: "nextScene",
    scratch2_spec: "next background",
    inputs: [],
    shape: "stack",
    category: "obsolete",
  },
  {
    scratch2_selector: "startScene",
    scratch2_spec: "switch to background %1",
    inputs: ["%m.backdrop"],
    shape: "stack",
    category: "obsolete",
  },
  {
    scratch2_selector: "backgroundIndex",
    scratch2_spec: "background #",
    inputs: [],
    shape: "reporter",
    category: "obsolete",
  },
  {
    scratch3_selector: "SENSING_LOUD",
    scratch2_selector: "isLoud",
    scratch2_spec: "loud?",
    inputs: [],
    shape: "boolean",
    category: "obsolete",
  },
]
