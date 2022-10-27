const emojis_array = [
  {
    codes: "1F600",
    char: "😀",
    name: "grinning face",
  },
  {
    codes: "1F603",
    char: "😃",
    name: "grinning face with big eyes",
  },
  {
    codes: "1F604",
    char: "😄",
    name: "grinning face with smiling eyes",
  },
  {
    codes: "1F601",
    char: "😁",
    name: "beaming face with smiling eyes",
  },
  {
    codes: "1F606",
    char: "😆",
    name: "grinning squinting face",
  },
  {
    codes: "1F605",
    char: "😅",
    name: "grinning face with sweat",
  },
  {
    codes: "1F602",
    char: "😂",
    name: "face with tears of joy",
  },
  {
    codes: "1F642",
    char: "🙂",
    name: "slightly smiling face",
  },
  {
    codes: "1F643",
    char: "🙃",
    name: "upside-down face",
  },
  {
    codes: "1F609",
    char: "😉",
    name: "winking face",
  },
  {
    codes: "1F60A",
    char: "😊",
    name: "smiling face with smiling eyes",
  },
  {
    codes: "1F607",
    char: "😇",
    name: "smiling face with halo",
  },
  {
    codes: "1F970",
    char: "🥰",
    name: "smiling face with hearts",
  },
  {
    codes: "1F60D",
    char: "😍",
    name: "smiling face with heart-eyes",
  },
  {
    codes: "1F929",
    char: "🤩",
    name: "star-struck",
  },
  {
    codes: "1F618",
    char: "😘",
    name: "face blowing a kiss",
  },
  {
    codes: "1F617",
    char: "😗",
    name: "kissing face",
  },

  {
    codes: "1F61A",
    char: "😚",
    name: "kissing face with closed eyes",
  },
  {
    codes: "1F619",
    char: "😙",
    name: "kissing face with smiling eyes",
  },
  {
    codes: "1F972",
    char: "🥲",
    name: "smiling face with tear",
  },
  {
    codes: "1F60B",
    char: "😋",
    name: "face savoring food",
  },
  {
    codes: "1F61B",
    char: "😛",
    name: "face with tongue",
  },
  {
    codes: "1F61C",
    char: "😜",
    name: "winking face with tongue",
  },
  {
    codes: "1F92A",
    char: "🤪",
    name: "zany face",
  },
  {
    codes: "1F61D",
    char: "😝",
    name: "squinting face with tongue",
  },
  {
    codes: "1F911",
    char: "🤑",
    name: "money-mouth face",
  },
  {
    codes: "1F917",
    char: "🤗",
    name: "hugging face",
  },
  {
    codes: "1F92D",
    char: "🤭",
    name: "face with hand over mouth",
  },
  {
    codes: "1F92B",
    char: "🤫",
    name: "shushing face",
  },
  {
    codes: "1F914",
    char: "🤔",
    name: "thinking face",
  },
  {
    codes: "1F910",
    char: "🤐",
    name: "zipper-mouth face",
  },
  {
    codes: "1F928",
    char: "🤨",
    name: "face with raised eyebrow",
  },
  {
    codes: "1F610",
    char: "😐",
    name: "neutral face",
  },
  {
    codes: "1F611",
    char: "😑",
    name: "expressionless face",
  },
  {
    codes: "1F636",
    char: "😶",
    name: "face without mouth",
  },
  {
    codes: "1F636 200D 1F32B FE0F",
    char: "😶‍🌫️",
    name: "face in clouds",
  },

  {
    codes: "1F60F",
    char: "😏",
    name: "smirking face",
  },
  {
    codes: "1F612",
    char: "😒",
    name: "unamused face",
  },
  {
    codes: "1F644",
    char: "🙄",
    name: "face with rolling eyes",
  },
  {
    codes: "1F62C",
    char: "😬",
    name: "grimacing face",
  },
  {
    codes: "1F62E 200D 1F4A8",
    char: "😮‍💨",
    name: "face exhaling",
  },
  {
    codes: "1F925",
    char: "🤥",
    name: "lying face",
  },
  {
    codes: "1F60C",
    char: "😌",
    name: "relieved face",
  },
  {
    codes: "1F614",
    char: "😔",
    name: "pensive face",
  },
  {
    codes: "1F62A",
    char: "😪",
    name: "sleepy face",
  },
  {
    codes: "1F924",
    char: "🤤",
    name: "drooling face",
  },
  {
    codes: "1F634",
    char: "😴",
    name: "sleeping face",
  },
  {
    codes: "1F637",
    char: "😷",
    name: "face with medical mask",
  },
  {
    codes: "1F912",
    char: "🤒",
    name: "face with thermometer",
  },
  {
    codes: "1F915",
    char: "🤕",
    name: "face with head-bandage",
  },
  {
    codes: "1F922",
    char: "🤢",
    name: "nauseated face",
  },
  {
    codes: "1F92E",
    char: "🤮",
    name: "face vomiting",
  },
  {
    codes: "1F927",
    char: "🤧",
    name: "sneezing face",
  },
  {
    codes: "1F975",
    char: "🥵",
    name: "hot face",
  },
  {
    codes: "1F976",
    char: "🥶",
    name: "cold face",
  },
  {
    codes: "1F974",
    char: "🥴",
    name: "woozy face",
  },
  {
    codes: "1F635",
    char: "😵",
    name: "knocked-out face",
  },
  {
    codes: "1F635 200D 1F4AB",
    char: "😵‍💫",
    name: "face with spiral eyes",
  },
  {
    codes: "1F92F",
    char: "🤯",
    name: "exploding head",
  },
  {
    codes: "1F920",
    char: "🤠",
    name: "cowboy hat face",
  },
  {
    codes: "1F973",
    char: "🥳",
    name: "partying face",
  },
  {
    codes: "1F978",
    char: "🥸",
    name: "disguised face",
  },
  {
    codes: "1F60E",
    char: "😎",
    name: "smiling face with sunglasses",
  },
  {
    codes: "1F913",
    char: "🤓",
    name: "nerd face",
  },
  {
    codes: "1F9D0",
    char: "🧐",
    name: "face with monocle",
  },
  {
    codes: "1F615",
    char: "😕",
    name: "confused face",
  },
  {
    codes: "1F61F",
    char: "😟",
    name: "worried face",
  },
  {
    codes: "1F641",
    char: "🙁",
    name: "slightly frowning face",
  },
  {
    codes: "2639 FE0F",
    char: "☹️",
    name: "frowning face",
  },

  {
    codes: "1F62E",
    char: "😮",
    name: "face with open mouth",
  },
  {
    codes: "1F62F",
    char: "😯",
    name: "hushed face",
  },
  {
    codes: "1F632",
    char: "😲",
    name: "astonished face",
  },
  {
    codes: "1F633",
    char: "😳",
    name: "flushed face",
  },
  {
    codes: "1F97A",
    char: "🥺",
    name: "pleading face",
  },
  {
    codes: "1F626",
    char: "😦",
    name: "frowning face with open mouth",
  },
  {
    codes: "1F627",
    char: "😧",
    name: "anguished face",
  },
  {
    codes: "1F628",
    char: "😨",
    name: "fearful face",
  },
  {
    codes: "1F630",
    char: "😰",
    name: "anxious face with sweat",
  },
  {
    codes: "1F625",
    char: "😥",
    name: "sad but relieved face",
  },
  {
    codes: "1F622",
    char: "😢",
    name: "crying face",
  },
  {
    codes: "1F62D",
    char: "😭",
    name: "loudly crying face",
  },
  {
    codes: "1F631",
    char: "😱",
    name: "face screaming in fear",
  },
  {
    codes: "1F616",
    char: "😖",
    name: "confounded face",
  },
  {
    codes: "1F623",
    char: "😣",
    name: "persevering face",
  },
  {
    codes: "1F61E",
    char: "😞",
    name: "disappointed face",
  },
  {
    codes: "1F613",
    char: "😓",
    name: "downcast face with sweat",
  },
  {
    codes: "1F629",
    char: "😩",
    name: "weary face",
  },
  {
    codes: "1F62B",
    char: "😫",
    name: "tired face",
  },
  {
    codes: "1F971",
    char: "🥱",
    name: "yawning face",
  },
  {
    codes: "1F624",
    char: "😤",
    name: "face with steam from nose",
  },
  {
    codes: "1F621",
    char: "😡",
    name: "pouting face",
  },
  {
    codes: "1F620",
    char: "😠",
    name: "angry face",
  },
  {
    codes: "1F92C",
    char: "🤬",
    name: "face with symbols on mouth",
  },
  {
    codes: "1F608",
    char: "😈",
    name: "smiling face with horns",
  },
  {
    codes: "1F47F",
    char: "👿",
    name: "angry face with horns",
  },
];
