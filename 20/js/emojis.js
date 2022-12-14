const emojis_array = [
  {
    codes: "1F600",
    char: "ð",
    name: "grinning face",
  },
  {
    codes: "1F603",
    char: "ð",
    name: "grinning face with big eyes",
  },
  {
    codes: "1F604",
    char: "ð",
    name: "grinning face with smiling eyes",
  },
  {
    codes: "1F601",
    char: "ð",
    name: "beaming face with smiling eyes",
  },
  {
    codes: "1F606",
    char: "ð",
    name: "grinning squinting face",
  },
  {
    codes: "1F605",
    char: "ð",
    name: "grinning face with sweat",
  },
  {
    codes: "1F602",
    char: "ð",
    name: "face with tears of joy",
  },
  {
    codes: "1F642",
    char: "ð",
    name: "slightly smiling face",
  },
  {
    codes: "1F643",
    char: "ð",
    name: "upside-down face",
  },
  {
    codes: "1F609",
    char: "ð",
    name: "winking face",
  },
  {
    codes: "1F60A",
    char: "ð",
    name: "smiling face with smiling eyes",
  },
  {
    codes: "1F607",
    char: "ð",
    name: "smiling face with halo",
  },
  {
    codes: "1F970",
    char: "ðĨ°",
    name: "smiling face with hearts",
  },
  {
    codes: "1F60D",
    char: "ð",
    name: "smiling face with heart-eyes",
  },
  {
    codes: "1F929",
    char: "ðĪĐ",
    name: "star-struck",
  },
  {
    codes: "1F618",
    char: "ð",
    name: "face blowing a kiss",
  },
  {
    codes: "1F617",
    char: "ð",
    name: "kissing face",
  },

  {
    codes: "1F61A",
    char: "ð",
    name: "kissing face with closed eyes",
  },
  {
    codes: "1F619",
    char: "ð",
    name: "kissing face with smiling eyes",
  },
  {
    codes: "1F972",
    char: "ðĨē",
    name: "smiling face with tear",
  },
  {
    codes: "1F60B",
    char: "ð",
    name: "face savoring food",
  },
  {
    codes: "1F61B",
    char: "ð",
    name: "face with tongue",
  },
  {
    codes: "1F61C",
    char: "ð",
    name: "winking face with tongue",
  },
  {
    codes: "1F92A",
    char: "ðĪŠ",
    name: "zany face",
  },
  {
    codes: "1F61D",
    char: "ð",
    name: "squinting face with tongue",
  },
  {
    codes: "1F911",
    char: "ðĪ",
    name: "money-mouth face",
  },
  {
    codes: "1F917",
    char: "ðĪ",
    name: "hugging face",
  },
  {
    codes: "1F92D",
    char: "ðĪ­",
    name: "face with hand over mouth",
  },
  {
    codes: "1F92B",
    char: "ðĪŦ",
    name: "shushing face",
  },
  {
    codes: "1F914",
    char: "ðĪ",
    name: "thinking face",
  },
  {
    codes: "1F910",
    char: "ðĪ",
    name: "zipper-mouth face",
  },
  {
    codes: "1F928",
    char: "ðĪĻ",
    name: "face with raised eyebrow",
  },
  {
    codes: "1F610",
    char: "ð",
    name: "neutral face",
  },
  {
    codes: "1F611",
    char: "ð",
    name: "expressionless face",
  },
  {
    codes: "1F636",
    char: "ðķ",
    name: "face without mouth",
  },
  {
    codes: "1F636 200D 1F32B FE0F",
    char: "ðķâðŦïļ",
    name: "face in clouds",
  },

  {
    codes: "1F60F",
    char: "ð",
    name: "smirking face",
  },
  {
    codes: "1F612",
    char: "ð",
    name: "unamused face",
  },
  {
    codes: "1F644",
    char: "ð",
    name: "face with rolling eyes",
  },
  {
    codes: "1F62C",
    char: "ðŽ",
    name: "grimacing face",
  },
  {
    codes: "1F62E 200D 1F4A8",
    char: "ðŪâðĻ",
    name: "face exhaling",
  },
  {
    codes: "1F925",
    char: "ðĪĨ",
    name: "lying face",
  },
  {
    codes: "1F60C",
    char: "ð",
    name: "relieved face",
  },
  {
    codes: "1F614",
    char: "ð",
    name: "pensive face",
  },
  {
    codes: "1F62A",
    char: "ðŠ",
    name: "sleepy face",
  },
  {
    codes: "1F924",
    char: "ðĪĪ",
    name: "drooling face",
  },
  {
    codes: "1F634",
    char: "ðī",
    name: "sleeping face",
  },
  {
    codes: "1F637",
    char: "ð·",
    name: "face with medical mask",
  },
  {
    codes: "1F912",
    char: "ðĪ",
    name: "face with thermometer",
  },
  {
    codes: "1F915",
    char: "ðĪ",
    name: "face with head-bandage",
  },
  {
    codes: "1F922",
    char: "ðĪĒ",
    name: "nauseated face",
  },
  {
    codes: "1F92E",
    char: "ðĪŪ",
    name: "face vomiting",
  },
  {
    codes: "1F927",
    char: "ðĪ§",
    name: "sneezing face",
  },
  {
    codes: "1F975",
    char: "ðĨĩ",
    name: "hot face",
  },
  {
    codes: "1F976",
    char: "ðĨķ",
    name: "cold face",
  },
  {
    codes: "1F974",
    char: "ðĨī",
    name: "woozy face",
  },
  {
    codes: "1F635",
    char: "ðĩ",
    name: "knocked-out face",
  },
  {
    codes: "1F635 200D 1F4AB",
    char: "ðĩâðŦ",
    name: "face with spiral eyes",
  },
  {
    codes: "1F92F",
    char: "ðĪŊ",
    name: "exploding head",
  },
  {
    codes: "1F920",
    char: "ðĪ ",
    name: "cowboy hat face",
  },
  {
    codes: "1F973",
    char: "ðĨģ",
    name: "partying face",
  },
  {
    codes: "1F978",
    char: "ðĨļ",
    name: "disguised face",
  },
  {
    codes: "1F60E",
    char: "ð",
    name: "smiling face with sunglasses",
  },
  {
    codes: "1F913",
    char: "ðĪ",
    name: "nerd face",
  },
  {
    codes: "1F9D0",
    char: "ð§",
    name: "face with monocle",
  },
  {
    codes: "1F615",
    char: "ð",
    name: "confused face",
  },
  {
    codes: "1F61F",
    char: "ð",
    name: "worried face",
  },
  {
    codes: "1F641",
    char: "ð",
    name: "slightly frowning face",
  },
  {
    codes: "2639 FE0F",
    char: "âđïļ",
    name: "frowning face",
  },

  {
    codes: "1F62E",
    char: "ðŪ",
    name: "face with open mouth",
  },
  {
    codes: "1F62F",
    char: "ðŊ",
    name: "hushed face",
  },
  {
    codes: "1F632",
    char: "ðē",
    name: "astonished face",
  },
  {
    codes: "1F633",
    char: "ðģ",
    name: "flushed face",
  },
  {
    codes: "1F97A",
    char: "ðĨš",
    name: "pleading face",
  },
  {
    codes: "1F626",
    char: "ðĶ",
    name: "frowning face with open mouth",
  },
  {
    codes: "1F627",
    char: "ð§",
    name: "anguished face",
  },
  {
    codes: "1F628",
    char: "ðĻ",
    name: "fearful face",
  },
  {
    codes: "1F630",
    char: "ð°",
    name: "anxious face with sweat",
  },
  {
    codes: "1F625",
    char: "ðĨ",
    name: "sad but relieved face",
  },
  {
    codes: "1F622",
    char: "ðĒ",
    name: "crying face",
  },
  {
    codes: "1F62D",
    char: "ð­",
    name: "loudly crying face",
  },
  {
    codes: "1F631",
    char: "ðą",
    name: "face screaming in fear",
  },
  {
    codes: "1F616",
    char: "ð",
    name: "confounded face",
  },
  {
    codes: "1F623",
    char: "ðĢ",
    name: "persevering face",
  },
  {
    codes: "1F61E",
    char: "ð",
    name: "disappointed face",
  },
  {
    codes: "1F613",
    char: "ð",
    name: "downcast face with sweat",
  },
  {
    codes: "1F629",
    char: "ðĐ",
    name: "weary face",
  },
  {
    codes: "1F62B",
    char: "ðŦ",
    name: "tired face",
  },
  {
    codes: "1F971",
    char: "ðĨą",
    name: "yawning face",
  },
  {
    codes: "1F624",
    char: "ðĪ",
    name: "face with steam from nose",
  },
  {
    codes: "1F621",
    char: "ðĄ",
    name: "pouting face",
  },
  {
    codes: "1F620",
    char: "ð ",
    name: "angry face",
  },
  {
    codes: "1F92C",
    char: "ðĪŽ",
    name: "face with symbols on mouth",
  },
  {
    codes: "1F608",
    char: "ð",
    name: "smiling face with horns",
  },
  {
    codes: "1F47F",
    char: "ðŋ",
    name: "angry face with horns",
  },
];
