function populate() {
  let elements = document.querySelectorAll(".spell-tooltip");
  elements.forEach((element) => {
    let link = element.href.split("/");
    let spell_components = link[link.length - 1].split("-");
    spell_components.shift();
    let spell_name = spell_components.join("-");

    if (spells[spell_name]) {
      let new_spell_id = spells[spell_name];
      element.href = `https://www.dndbeyond.com/spells/${new_spell_id}-${spell_name}`;
      element.setAttribute(
        "data-tooltip-href",
        `//www.dndbeyond.com/spells/${new_spell_id}-tooltip?disable-webm=1&disable-webm=1`
      
      );
      element.setAttribute("data-tooltip-json-href",`/spells/${new_spell_id}/tooltip-json`);
    }
  });
}

var spells = {
  "abi-dalzims-horrid-wilting": "2367",
  "absorb-elements": "2368",
  "acid-splash": "2618844",
  "aganazzars-scorcher": "2369",
  aid: "2618845",
  "air-bubble": "1585025",
  alarm: "2619222",
  "alter-self": "2618846",
  "animal-friendship": "2618847",
  "animal-messenger": "2618850",
  "animal-shapes": "2618851",
  "animate-dead": "2618853",
  "animate-objects": "2618855",
  antagonize: "2158656",
  "antilife-shell": "2618856",
  "antimagic-field": "2618860",
  "antipathy-sympathy": "2618862",
  "arcane-eye": "2618863",
  "arcane-gate": "2618865",
  "arcane-lock": "2618868",
  "arcane-vigor": "2618831",
  "armor-of-agathys": "2618870",
  "arms-of-hadar": "2618871",
  "ashardalons-stride": "1183862",
  "astral-projection": "2618878",
  augury: "2618882",
  "aura-of-life": "2618884",
  "aura-of-purity": "2618888",
  "aura-of-vitality": "2618891",
  awaken: "2618897",
  bane: "2618900",
  "banishing-smite": "2618904",
  banishment: "2618906",
  barkskin: "2618907",
  "beacon-of-hope": "2618911",
  "beast-bond": "2370",
  "beast-sense": "2618914",
  befuddlement: "2618832",
  "bestow-curse": "2618923",
  "bigbys-hand": "2618928",
  "blade-barrier": "2618929",
  "blade-of-disaster": "654072",
  "blade-ward": "2618931",
  bless: "2618933",
  blight: "2618934",
  "blinding-smite": "2618936",
  "blindness-deafness": "2618938",
  blink: "2618939",
  blur: "2618945",
  "bones-of-the-earth": "2371",
  "booming-blade": "2410",
  "borrowed-knowledge": "1239802",
  "burning-hands": "2618946",
  "call-lightning": "2618949",
  "calm-emotions": "2618959",
  catapult: "2372",
  catnap: "14754",
  "cause-fear": "14758",
  ceremony: "14760",
  "chain-lightning": "2618960",
  "chaos-bolt": "14761",
  "charm-monster": "2618963",
  "charm-person": "2618964",
  "chill-touch": "2618965",
  "chromatic-orb": "2618966",
  "circle-of-death": "2618969",
  "circle-of-power": "2618970",
  clairvoyance: "2618972",
  clone: "2618973",
  "cloud-of-daggers": "2618974",
  cloudkill: "2618976",
  "color-spray": "2618978",
  command: "2618985",
  commune: "2618987",
  "commune-with-nature": "2618989",
  "compelled-duel": "2618990",
  "comprehend-languages": "2618993",
  compulsion: "2619041",
  "cone-of-cold": "2619042",
  confusion: "2619043",
  "conjure-animals": "2619044",
  "conjure-barrage": "2619045",
  "conjure-celestial": "2619046",
  "conjure-elemental": "2619047",
  "conjure-fey": "2619048",
  "conjure-minor-elementals": "2619049",
  "conjure-volley": "2619050",
  "conjure-woodland-beings": "2619051",
  "contact-other-plane": "2619052",
  contagion: "2619063",
  contingency: "2619053",
  "continual-flame": "2619065",
  "control-flames": "2374",
  "control-water": "2619070",
  "control-weather": "2619054",
  "control-winds": "2375",
  "cordon-of-arrows": "2619055",
  counterspell: "2619072",
  "create-bonfire": "2373",
  "create-food-and-water": "2619073",
  "create-homunculus": "14765",
  "create-magen": "654073",
  "create-or-destroy-water": "2619074",
  "create-spelljamming-helm": "1585026",
  "create-undead": "2619076",
  creation: "2619077",
  "crown-of-madness": "2619056",
  "crown-of-stars": "14827",
  "crusaders-mantle": "2619057",
  "cure-wounds": "2619079",
  "dancing-lights": "2619058",
  "danse-macabre": "14830",
  darkness: "2619080",
  darkvision: "2619082",
  dawn: "14831",
  daylight: "2619083",
  "death-ward": "2619085",
  "delayed-blast-fireball": "2619086",
  demiplane: "2619088",
  "destructive-wave": "2619089",
  "detect-evil-and-good": "2619090",
  "detect-magic": "2619097",
  "detect-poison-and-disease": "2619093",
  "detect-thoughts": "2619099",
  "dimension-door": "2619100",
  "disguise-self": "2619102",
  disintegrate: "2619094",
  "dispel-evil-and-good": "2619096",
  "dispel-magic": "2619103",
  "dissonant-whispers": "2619104",
  "distort-value": "188092",
  divination: "2619140",
  "divine-favor": "2619142",
  "divine-smite": "2618833",
  "divine-word": "2619144",
  "dominate-beast": "2619146",
  "dominate-monster": "2619147",
  "dominate-person": "2619148",
  "draconic-transformation": "1183863",
  "dragons-breath": "2619150",
  "drawmijs-instant-summons": "2619154",
  dream: "2619156",
  "dream-of-the-blue-veil": "717915",
  "druid-grove": "14834",
  druidcraft: "2619158",
  "dust-devil": "2376",
  "earth-tremor": "2378",
  earthbind: "2377",
  earthquake: "2619160",
  "eldritch-blast": "2619161",
  "elemental-bane": "2379",
  "elemental-weapon": "2619164",
  elementalism: "2618834",
  "encode-thoughts": "83532",
  "enemies-abound": "14836",
  enervation: "14869",
  "enhance-ability": "2619165",
  "enlarge-reduce": "2619170",
  "ensnaring-strike": "2619172",
  entangle: "2619186",
  enthrall: "2619192",
  "erupting-earth": "2380",
  etherealness: "2619193",
  "evards-black-tentacles": "2619187",
  "expeditious-retreat": "2619189",
  eyebite: "2619191",
  fabricate: "2618848",
  "faerie-fire": "2618858",
  "false-life": "2618866",
  "far-step": "14870",
  "fast-friends": "188104",
  fear: "2618872",
  "feather-fall": "2618874",
  "feign-death": "2618873",
  "find-familiar": "2618877",
  "find-greater-steed": "14871",
  "find-steed": "2618879",
  "find-the-path": "2618881",
  "find-traps": "2618883",
  "finger-of-death": "2618885",
  "fire-bolt": "2618890",
  "fire-shield": "2618894",
  "fire-storm": "2618896",
  fireball: "2618887",
  "fizbans-platinum-shield": "1183864",
  "flame-arrows": "2381",
  "flame-blade": "2618899",
  "flame-strike": "2618920",
  "flaming-sphere": "2618919",
  "flesh-to-stone": "2618905",
  "flock-of-familiars": "92691",
  fly: "2618909",
  "fog-cloud": "2618910",
  forbiddance: "2618913",
  forcecage: "2618916",
  foresight: "2618918",
  "fount-of-moonlight": "2618835",
  "freedom-of-movement": "2618921",
  friends: "2618924",
  "frost-fingers": "654074",
  frostbite: "2382",
  "galders-speedy-courier": "92692",
  "galders-tower": "92693",
  "gaseous-form": "2618927",
  gate: "2618932",
  "gate-seal": "2119578",
  geas: "2618940",
  "gentle-repose": "2618942",
  "giant-insect": "2618944",
  "gift-of-gab": "188118",
  glibness: "2618948",
  "globe-of-invulnerability": "2618950",
  "glyph-of-warding": "2618951",
  goodberry: "2618952",
  "grasping-vine": "2618955",
  grease: "2618957",
  "greater-invisibility": "2618958",
  "greater-restoration": "2618961",
  "green-flame-blade": "2411",
  "guardian-of-faith": "2619135",
  "guardian-of-nature": "14872",
  "guards-and-wards": "2618968",
  guidance: "2618971",
  "guiding-bolt": "2619136",
  gust: "2383",
  "gust-of-wind": "2619137",
  "hail-of-thorns": "2618975",
  hallow: "2619138",
  "hallucinatory-terrain": "2619139",
  harm: "2618977",
  haste: "2619141",
  heal: "2618979",
  "healing-spirit": "14873",
  "healing-word": "2619143",
  "heat-metal": "2619145",
  "hellish-rebuke": "2619149",
  "heroes-feast": "2618983",
  heroism: "2619151",
  hex: "2618988",
  "hold-monster": "2619152",
  "hold-person": "2619153",
  "holy-aura": "2619155",
  "holy-weapon": "14874",
  "hunger-of-hadar": "2619162",
  "hunters-mark": "2619166",
  "hypnotic-pattern": "2619168",
  "ice-knife": "2619171",
  "ice-storm": "2619178",
  identify: "2619180",
  "illusory-dragon": "14876",
  "illusory-script": "2619173",
  immolation: "2385",
  imprisonment: "2619175",
  "incendiary-cloud": "2619177",
  "incite-greed": "188121",
  "infernal-calling": "14877",
  infestation: "14878",
  "inflict-wounds": "2619181",
  "insect-plague": "2619183",
  "intellect-fortress": "718549",
  "investiture-of-flame": "2386",
  "investiture-of-ice": "2387",
  "investiture-of-stone": "2388",
  "investiture-of-wind": "2389",
  invisibility: "2619116",
  invulnerability: "14879",
  "jallarzis-storm-of-radiance": "2618836",
  "jims-glowing-coin": "188126",
  "jims-magic-missile": "188129",
  jump: "2618991",
  "kinetic-jaunt": "1239803",
  knock: "2618992",
  "legend-lore": "2619010",
  "leomunds-secret-chest": "2619012",
  "leomunds-tiny-hut": "2619013",
  "lesser-restoration": "2619016",
  levitate: "2618994",
  "life-transference": "14880",
  light: "2618996",
  "lightning-arrow": "2618997",
  "lightning-bolt": "2618999",
  "lightning-lure": "2412",
  "locate-animals-or-plants": "2619000",
  "locate-creature": "2619001",
  "locate-object": "2619002",
  longstrider: "2619004",
  "maddening-darkness": "14881",
  maelstrom: "2390",
  "mage-armor": "2619006",
  "mage-hand": "2619008",
  "magic-circle": "2619018",
  "magic-jar": "2619021",
  "magic-missile": "2619022",
  "magic-mouth": "2619023",
  "magic-stone": "2391",
  "magic-weapon": "2619024",
  "major-image": "2619025",
  "mass-cure-wounds": "2619026",
  "mass-heal": "2619027",
  "mass-healing-word": "2619028",
  "mass-polymorph": "14882",
  "mass-suggestion": "2619029",
  "maximilians-earthen-grasp": "2392",
  maze: "2619030",
  "meld-into-stone": "2619031",
  "melfs-acid-arrow": "2619032",
  "melfs-minute-meteors": "2393",
  mending: "2619033",
  "mental-prison": "14883",
  message: "2619034",
  "meteor-swarm": "2619035",
  "mighty-fortress": "14474",
  "mind-blank": "2619036",
  "mind-sliver": "2619037",
  "mind-spike": "2619038",
  "minor-illusion": "2619039",
  "mirage-arcane": "2619040",
  "mirror-image": "2619060",
  mislead: "2619131",
  "misty-step": "2619133",
  "modify-memory": "2619109",
  "mold-earth": "2394",
  moonbeam: "2619134",
  "mordenkainens-faithful-hound": "2619110",
  "mordenkainens-magnificent-mansion": "2619112",
  "mordenkainens-private-sanctum": "2619114",
  "mordenkainens-sword": "2619118",
  "motivational-speech": "188142",
  "move-earth": "2619120",
  "nathairs-mischief": "1183865",
  "negative-energy-flood": "14519",
  nondetection: "2619122",
  "nystuls-magic-aura": "2619124",
  "otilukes-freezing-sphere": "2619126",
  "otilukes-resilient-sphere": "2619128",
  "ottos-irresistible-dance": "2619130",
  "pass-without-trace": "2618849",
  passwall: "2618852",
  "phantasmal-force": "2618854",
  "phantasmal-killer": "2618857",
  "phantom-steed": "2618859",
  "planar-ally": "2618861",
  "planar-binding": "2618864",
  "plane-shift": "2618867",
  "plant-growth": "2618869",
  "poison-spray": "2618875",
  polymorph: "2618876",
  "power-word-fortify": "2618837",
  "power-word-heal": "2618880",
  "power-word-kill": "2618886",
  "power-word-pain": "14520",
  "power-word-stun": "2618889",
  "prayer-of-healing": "2618892",
  prestidigitation: "2618893",
  "primal-savagery": "14558",
  "primordial-ward": "2395",
  "prismatic-spray": "2618895",
  "prismatic-wall": "2618898",
  "produce-flame": "2618901",
  "programmed-illusion": "2618902",
  "project-image": "2618903",
  "protection-from-energy": "2618908",
  "protection-from-evil-and-good": "2618912",
  "protection-from-poison": "2618915",
  "psychic-scream": "14592",
  "purify-food-and-drink": "2618917",
  pyrotechnics: "2396",
  "raise-dead": "2618922",
  "rarys-telepathic-bond": "2618925",
  "raulothims-psychic-lance": "1183866",
  "ray-of-enfeeblement": "2618926",
  "ray-of-frost": "2618930",
  "ray-of-sickness": "2618935",
  regenerate: "2618937",
  reincarnate: "2618941",
  "remove-curse": "2618943",
  resistance: "2618947",
  resurrection: "2618953",
  "reverse-gravity": "2618954",
  revivify: "2618956",
  "rimes-binding-ice": "1183867",
  "rope-trick": "2618962",
  "sacred-flame": "2618967",
  sanctuary: "2619003",
  scatter: "14593",
  "scorching-ray": "2619005",
  scrying: "2619007",
  "searing-smite": "2619009",
  "see-invisibility": "2619011",
  seeming: "2619014",
  sending: "2619015",
  sequester: "2618980",
  "shadow-blade": "14595",
  "shadow-of-moil": "14596",
  "shape-water": "2397",
  shapechange: "2618982",
  shatter: "2619017",
  shield: "2619019",
  "shield-of-faith": "2619020",
  shillelagh: "2618984",
  "shining-smite": "2618838",
  "shocking-grasp": "2618986",
  "sickening-radiance": "14597",
  silence: "2619061",
  "silent-image": "2619062",
  "silvery-barbs": "1239804",
  simulacrum: "2618995",
  "skill-empowerment": "14599",
  skywrite: "2398",
  sleep: "2619064",
  "sleet-storm": "2618998",
  slow: "2619066",
  snare: "14600",
  "snillocs-snowball-swarm": "2399",
  "sorcerous-burst": "2618839",
  "soul-cage": "14601",
  "spare-the-dying": "2619067",
  "speak-with-animals": "2619059",
  "speak-with-dead": "2619068",
  "speak-with-plants": "2619069",
  "spider-climb": "2619071",
  "spike-growth": "2619075",
  "spirit-guardians": "2619078",
  "spirit-of-death": "2158657",
  "spirit-shroud": "718581",
  "spiritual-weapon": "2619081",
  "spray-of-cards": "2158658",
  "staggering-smite": "2619084",
  "starry-wisp": "2618840",
  "steel-wind-strike": "2619087",
  "stinking-cloud": "2619091",
  "stone-shape": "2619092",
  stoneskin: "2619095",
  "storm-of-vengeance": "2619098",
  "storm-sphere": "2400",
  suggestion: "2619101",
  "summon-aberration": "2619105",
  "summon-beast": "2619106",
  "summon-celestial": "2619108",
  "summon-construct": "2619111",
  "summon-draconic-spirit": "1183868",
  "summon-dragon": "2618843",
  "summon-elemental": "2619113",
  "summon-fey": "2619115",
  "summon-fiend": "2619117",
  "summon-greater-demon": "14603",
  "summon-lesser-demons": "14604",
  "summon-shadowspawn": "719948",
  "summon-undead": "2619119",
  sunbeam: "2619121",
  sunburst: "2619123",
  "swift-quiver": "2619125",
  "sword-burst": "2413",
  symbol: "2619127",
  "synaptic-static": "2619129",
  "tashas-bubbling-cauldron": "2618841",
  "tashas-caustic-brew": "719953",
  "tashas-hideous-laughter": "2619132",
  "tashas-mind-whip": "719959",
  "tashas-otherworldly-guise": "719961",
  telekinesis: "2619157",
  telepathy: "2619159",
  teleport: "2619163",
  "teleportation-circle": "2619167",
  "temple-of-the-gods": "14606",
  "tensers-floating-disk": "2619169",
  "tensers-transformation": "14612",
  thaumaturgy: "2619174",
  "thorn-whip": "2619176",
  "thunder-step": "14613",
  thunderclap: "2619179",
  "thunderous-smite": "2619182",
  thunderwave: "2619184",
  "tidal-wave": "2402",
  "time-stop": "2619185",
  "tiny-servant": "14614",
  "toll-the-dead": "2619188",
  tongues: "2619190",
  "transmute-rock": "2403",
  "transport-via-plants": "2619196",
  "tree-stride": "2619197",
  "true-polymorph": "2619198",
  "true-resurrection": "2619199",
  "true-seeing": "2619201",
  "true-strike": "2619204",
  tsunami: "2619206",
  "unseen-servant": "2619209",
  "vampiric-touch": "2619214",
  "vicious-mockery": "2619216",
  "vitriolic-sphere": "2619219",
  "vortex-warp": "1239805",
  "wall-of-fire": "2619107",
  "wall-of-force": "2619194",
  "wall-of-ice": "2619195",
  "wall-of-light": "14616",
  "wall-of-sand": "2405",
  "wall-of-stone": "2619200",
  "wall-of-thorns": "2619202",
  "wall-of-water": "2406",
  "warding-bond": "2619203",
  "warding-wind": "2407",
  "warp-sense": "2119579",
  "water-breathing": "2619205",
  "water-walk": "2619207",
  "watery-sphere": "2408",
  web: "2619208",
  weird: "2619210",
  whirlwind: "2409",
  "wind-walk": "2619211",
  "wind-wall": "2619212",
  wish: "2619213",
  "witch-bolt": "2619215",
  "wither-and-bloom": "1239806",
  "word-of-radiance": "2619217",
  "word-of-recall": "2619218",
  "wrath-of-nature": "14619",
  "wrathful-smite": "2619220",
  "yolandes-regal-presence": "2618842",
  "zephyr-strike": "14622",
  "zone-of-truth": "2619221",
};

setInterval(populate, 500);
