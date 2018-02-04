class Elf{
    traits: {
        maxAge: 750,
        dexBonus: 2,
        alignment: "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not. The drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.",
        size: "medium",
        speed: 30,
        darkvision: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        keenSenses: "You have proficiency in the Perception skill",
        feyAncestry: "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
        trance: "Elves don't need to sleep. Instead , they meditate deeply, remaining semiconcious, for 4 hours a day. (The Common word for such meditation is \"trance\") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
        languages: ["common", "elvish"]
    }

    subraces: {
        highElf: {
            description: "As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&D, there are two kinds of high elves. One type (which includes the gray elves and valley elves of Greyhawk, the Silvanesti of Dragonlance, and the sun elves of the Forgotten Realms) is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type (including the high elves of Greyhawk, the Qualinesti of Dragonlance, and the moon elves of the Forgotten Realms) are more common and more friendly, and often encountered among humans and other races. The sun elves of Faerûn (also called gold elves or sunrise elves) have bronze skin and hair of copper, black, or golden blond. Their eyes are golden, silver, or black. Moon elves (also called silver elves, or gray elves) are much paler, with alabaster skin somtimes tinged with blue. They often have hair of silver-white, black or blue, but various shades of blond, brown, and red are not uncommon. Thei eyes are blue or green and flecked with gold",
            intBonus: 1,
            weaponProficiencies: ["longsword", "shortsword", "shortbow", "longbow"],
            extraCantrip: "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it",
            extraLanguage: "You can speak, read and write one extra language of your choice"            
        },
        woodElf: {

        },
        drow: {
            
        }
    }
}