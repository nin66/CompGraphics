

//  Allows up to three lines of information.
//  To separate lines, use html tag '<br>', instead of escape character '\n', in the sentence.

class Information {

    static lobster = [
        "Lobsters are red when cooked.",
        "Lobsters taste with their legs and chew with their stomachs.",
        "A group of Lobsters is called a pod"
    ]

    static nLobster = 0;

    static Lobster(){
        return Information.lobster[Information.nLobster++ % Information.lobster.length];
    }

    static rock = [
        "There are three types of rocks: Ingenous, Sedimentary and Metamorphic.",
        "Sedimentary rock is very common, but Igenous rocks make up most of the seabed.",
        "Ingenous rocks come from molten magma.",
        "The top-most layer of the sea floor is made up of Basalt.",
        "This rock is probably 100 million years old.",
        "There are over 4000 different types of minerals, 30 of which are found in the Earth's crust.",
        "Diamond is made from carbon under intense pressure.",
        "Examples of igneous rocks include granite, basalt, gabbro, obsidian and pumice.",
        "Rocks have been used by humans for millions of years, from early tools and weapons through to various construction materials.",
        "Mohs scale of hardness measures the ability of minerals to scratch each other."
    ]

    static nRock = 0;

    static Rocks() {
        return Information.rock[Information.nRock++ % Information.rock.length];
    }

    static coral = [
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
        "In order to perform photosynthesis, seaweed grows in shallow waters rather than deep ones, and contains antioxidant pigments which give them their green, brown or reddish colour.",
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
        "Starfish are not actually Fish. Neither are Jellyfish.<br>They don't have gills, scales or fins.<br>Instead of blood, sea water is used to pump nutrients through their bodies; a water vascular system."
    ]
    
    static nStarfish = 0;

    static StarFish(){
        return Information.starfish[Information.nStarfish++ % Information.starfish.length];
    }
}