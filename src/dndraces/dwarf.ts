class Dwarf{
    traits: {
        conBonus: 2,
        maxAge: 350,
        alignment: "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order",
        size: "medium",
        speed: 25,
        weaponProficiencies: ["battleaxe", "handaxe", "light hammer", "warhammer"],
        toolProficiencies:  ["smith's tools", "brewer's supplies", "mason's tools"],
        languages:  ["common", "dwarvish"],
        extras: {
            darkvision: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of grey",
            dwarvenResiliance: "You have advantage on saving throws against poison, and you have resistance agaisnt poison damage",
            stoneCunning: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus"
        }

    }

    subraces: {
        hillDwarf: {
            description: "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faerûn in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting",
            wisBonus: 1,
            dwarvenToughness: "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level"
        },
        mountainDwarf: {
            description: "As a mountain dwarf, you're strong and hardy, accustomed to a difficult life in rugged terrain. You're probably on the tall side (for a dwarf), and tend toward lighter coloration. The shield dwarves of northern Faerûn, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves",
            strBonus: 2,
            dwarvenArmorTraining: "You have proficiency with light and medium armor"
        }
    }

}