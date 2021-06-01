

//  Allows up to three lines of information.
//  To separate lines, use html tag '<br>', instead of escape character '\n', in the sentence.

class Information {

    static lobster = [
        "Lobster is a generic term for species belonging to the Prickly Pear family of the Crawfish suborder, and is a crayfish that lives in the sea.",
        "It is a crustacean animal with prominent claws and a hard shell, and its tail is webbed and spreads like a fin on the back, which is advantageous for movement.",
        "Lobsters taste with their legs and chew with their stomachs.",
        "A group of Lobsters is called a risk.",
        "Lobsters are closely related to Grasshoppers and Tarantulas.",
        "Lobsters can regenerate their claws, legs and antennae."
    ]

    static nLobster = 0;

    static Lobster(){
        return Information.lobster[Information.nLobster++ % Information.lobster.length];
    }

    static rock = [
        "There are three types of rocks: Igneous , Sedimentary and Metamorphic.",
        "Sedimentary rock is very common, but Igneous  rocks make up most of the seabed.",
        "Igneous  rocks come from molten magma.",
        "The top-most layer of the sea floor is made up of Basalt.",
        "This rock is probably 100 million years old.",
        "There are over 4000 different types of minerals, 30 of which are found in the Earth's crust.",
        "Diamond is made from carbon under intense pressure.",
        "Examples of Igneous rocks include granite, basalt, gabbro, obsidian and pumice.",
        "Rocks have been used by humans for millions of years, from early tools and weapons through to various construction materials.",
        "Mohs scale of hardness measures the ability of minerals to scratch each other."
    ]

    static nRock = 0;

    static Rocks() {
        return Information.rock[Information.nRock++ % Information.rock.length];
    }

    static coral = [
        "It is a generic term for an animal belonging to the coral genus of the coral reef. It is hermaphrodite. ",
        "A quarter of all marine species live on coral reefs.",
        "Corals are animals, not plants.",
        "Coral reefs date back around 240 million years.",
        "There are three different types of coral reef: Fringing Reefs, Barrier Reefs and Atolls.",
        "Coral acts as filters, trapping debris that makes the surrounding environment cleaner.",
        "Known as “rainforests of the sea”, coral reefs cover less than 1% of the ocean but are home to almost 25% of all known marine life.",
        "Coral reefs are naturally colourful because of algae, which lives inside of the coral, providing them with food."
    ]

    static nCoral = 0;

    static Coral() {
        return Information.coral[Information.nCoral++ % Information.coral.length];
    }

    static shell = [
        "Seashells are primarily made of calcium.",
        "Hermit crabs use discarded mollusc shells for self-protection. As the hermit crab grows, it will look for larger shells to use for protection.",
        "Shells are the protective outer layer of molluscs.",
        "Shells were once used as currency.",
        "Archaeologists found what is thought to be the first seashell collection in the ruins of the ancient city of Pompeii, dating back to 74 AD.",
        "Shells will dissolve in vinegar. Vinegar dissolves calcium carbonate.",
        "The largest seashell is the Australian Trumpet."

    ]

    static nShell = 0;

    static Shells() {
        return Information.shell[Information.nShell++ % Information.shell.length];
    }

    static seaweed = [
        "Seaweed is a water plant, which resembles land plants apart from the fact it is not connected to the earth.",
        "In order to perform photosynthesis, seaweed grows in shallow waters rather than deep ones, and contains<br>antioxidant pigments which give them their green, brown or reddish colour.",
        "As with land-based plants, seaweed provide the majority of the nutrition for marine creatures and play an important role in marine ecology.",
        "Seaweed is rich in nutritional elements and is a wonderful source of vitamins, minerals, protein, fatty acids, dietary fibers and antioxidants.",
        "Seaside cultures, have included seaweed in their food for hundreds of years.",
    ]

    static nSeaweed = 0;

    static Seaweed() {
        return Information.seaweed[Information.nSeaweed++ % Information.seaweed.length];
    }

    static fish = [
        "There are over 33,000 known species of Fish, 5,000 of which are extinct :(",
        "The largest Fish ever caught was a Great White Shark, weighing 1.2 tonnes, according to the International Game Fish Association.<br>Caught off the coast in Australia, it took 50 minutes to be declared 'fished'.",
        "Parrotfish surround themselves in their own mucus for protection.",
        "Together, the Gulf Corvina are the loudest Fish, averaging 190 decibels with a record of 202 decibels.<br>Krakatoa, believed to be the loudest natural sound, is estimated at 172 decibels at 160 kilometres.",
        "Catfish have over 27,000 tastebuds.",
        "A school is a group of the same Fish species swimming together in synchrony.",
        "Greenland Sharks have a lifespace of 400 years. The longest lasting lifeform ever on Earth."
    ]

    static nFish = 0;

    static Fish() {
        return Information.fish[Information.nFish++ % Information.fish.length];
    }

    static starfish = [
        "Starfish are not actually Fish. Neither are Jellyfish.<br>They don't have gills, scales or fins.<br>Instead of blood, sea water is used to pump nutrients through their bodies; a water vascular system.",
        "Because Starfish are not actually Fish, they should always be called a Sea Star!",
        "Sea Stars can live up to 35 years.",
        "There are over 2,000 species of Sea Stars.",
        "Sea Stars cannot survive in fresh water.",
        "Sunflower Sea Stars can have up to 24 arms.<br>They have the most arms of any species on Earth.",
        "A group of Sea Stars are called a constellation.",
        "The fact that many starfish first appeared during the Great Cambrian explosion, 500 million years ago. "
    ]
    
    static nStarfish = 0;

    static StarFish(){
        return Information.starfish[Information.nStarfish++ % Information.starfish.length];
    }

    static crab = [
        "The Japanese Spider Crab is the world's largest crab; almost 3.5 metres across.",
        "The Pea Crab is among the world's smallest crabs; about 1.25 centimetres across.",
        "A group of crabs is called a cast or a consortium.",
        "Crabs are decapods, meaning they have 10 legs.",
        "The Japanese Spider Crab can live as long as 100 years.",
        "Crabs are invertebrates; they don't have a backbone."
    ]

    static nCrab = 0;

    static Crab() {
        return Information.crab[Information.nCrab++ % Information.crab.length];
    }

    static dolphin = [
        "Dolphins have 2 stomachs.",
        "Dolphins can down 300 metres.",
        "Dolphins can live up to 50 years.",
        "There are around 40 species of Dolphins.",
        "Dolphins are caring and often tend to the sick.",
        "Dolphins are one of 11 animals to have passed the 'Mirror Test'.<br>They pass the Mirror Test before humans do.",
        "Dolphins are very friendly to humans and other animals :)",
        "Killer Whales are actually Dolphins.",
        "Dolphins can swim up to 32 kilometres per hour.",
        "A group of Dolphins is called a pod.",
        "Dolphins has big brain."
    ]

    static nDolphin = 0;

    static Dolphin() {
        return Information.dolphin[Information.nDolphin++ % Information.dolphin.length];
    }

    static eel = [
        "There are over 400 species of Eel.",
        "Eels live in both saltwater and fresh water.",
        "Eels have very sharp teeth.",
        "It takes an Eel 3 years to become an adult.",
        "A group of Eels is called a bed or a fry.",
        "An Eel's blood is toxic to humans.",
        "The electric discharge of Eels can exceed 500 volts."
    ]

    static nEel = 0;

    static Eel() {
        return Information.eel[Information.nEel++ % Information.eel.length];
    }

    static hammerhead = [
        "The Hammerhead species have an average length of 4 metres and can weigh up to 230 kilograms.",
        "The Great Hammerhead Shark is the largest of the 9 Hammerhead species.",
        "Hammerhead sharks have been found at a depth of 300 metres, but are usually found 80 metres deep.",
        "Hammerhead sharks are immune to Stingray and Catfish venom."
    ]

    static nHammerhead = 0;

    static Hammerhead() {
        return Information.hammerhead[Information.nHammerhead++ % Information.hammerhead.length];
    }

    static octopus = [
        "The plural of Octopus is Octopuses.",
        "Octopus is a smart and intelligent animal.",
        "Octopuses existed 296 million years ago.",
        "Octopuses have 3 hearts.",
        "Octopus arms have a mind of their own.<br>Two-thirds of an Octopus' neurons are in its arms, not in its head.",
        "Octopuses have blue blood.<br>To survive in the deep ocean, Octopuses have developed a copper-based blood called 'Hemocyanin'.",
        "Octopus ink can blind and distort a predator's smell and taste.<br>It is so potent that, if the Octopus does not escape its own ink, it could die."
    ]

    static nOctopus = 0;

    static Octopus() {
        return Information.octopus[Information.nOctopus++ % Information.octopus.length];
    }

    static shark = [
        "Sharks have electroreceptor organs, making them able to sense electromagnetic fields.",
        "Shark fossils found in Australia date back 455 million years.",
        "Sharks have survived the 5 mass extinctions, including the Great Dying - the largest extinction event to life on Earth.",
        "Sharks are older than trees - 370 millions years.",
        "Sharks do not have bones.",
        "Sharks have fantastic night vision and can see colours in the dark.",
        "When you flip a Shark upside-down, they go into a trance-like state called 'Tonic Immobility'.",
        "A group of Sharks is called a shiver.",
        "Some sharks are partially warm-blooded."
    ]

    static nShark = 0;

    static Shark() {
        return Information.shark[Information.nShark++ % Information.shark.length];
    }

    static squid = [
        "There are around 500 species of Squid.",
        "Squids have three hearts.",
        "Squids swim faster than any invertebrate, up to 40 kilometres per hour using a form of jet propulsion.",
        "Squids have the largest eyes relative to their size.",
        "Humboldt squid become invisible by turning red; a colour that is virtually invisible underwater where<br>sunlight does not travel through the seabed.",
        "Deep water squids have glow-in-the-dark organs."
    ]

    static nSquid = 0;

    static Squid() {
        return Information.squid[Information.nSquid++ % Information.squid.length];
    }

    static stingray = [
        "The largest species of Stringrays can measure 2 metres in length and weight about 350 kilograms.",
        "Stingrays are closely related to Sharks.",
        "Stingrays don't use their eyes to find their prey, they use their electrosensors.",
        "Stingrays have fatal poison on their tails.",
        "A group of Stingrays is called a fever."
    ]

    static nStingray = 0;

    static Stingray() {
        return Information.stingray[Information.nStingray++ % Information.stingray.length];
    }

    static turtle = [
        "Turtles have been around for about 120 million years.",
        "It lives in all oceans except the Arctic Ocean.",
        "Turtles can hold their breath for 5 hours by slowing their heart rate to 1 beat per 9 minutes.",
        "The Leatherback Turtle can grow and weigh as much as 900 kilograms.",
        "Turtles tend to live around 100 years.",
        "A group of Turtles is called a bale or nest."
    ]

    static nTurtle = 0;

    static Turtle() {
        return Information.turtle[Information.nTurtle++ % Information.turtle.length];
    }

    static whale = [
        "The Blue Whale is the largest animal to have ever lived, growing to almost 30 metres and weight as much as 150 tonnes.",
        "Bowhead Whales can live up to 200 years.",
        "Whales are protected under the United Nations Convention on the Law of the Sea.",
        "Humpback Whales don't eat for most of the year.",
        "A group of Whales is called a pod, gam or herd."
    ]

    static nWhale = 0;

    static Whale() {
        return Information.whale[Information.nWhale++ % Information.whale.length];
    }
}