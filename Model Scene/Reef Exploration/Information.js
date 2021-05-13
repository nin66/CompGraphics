

//  Allows up to three lines of information.

class Information {

    static lobster = [
        "Lobsters are red when cooked.",
        "Lobsters taste with their legs and chew with their stomachs."
    ]

    static Lobster(){
        var random = Utils.random(0, 1);
        var i = Math.round(random);
        return Information.lobster[i];
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

    static Rocks() {
        var random = Utils.random(0, 9);
        var i = Math.round(random);

        return Information.rock[i];
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

    static Coral() {
        var random = Utils.random(0, 7);
        var i = Math.round(random);

        return Information.coral[i];
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

    static Shells() {
        var random = Utils.random(0, 7);
        var i = Math.round(random);

        return Information.shell[i];
    }

    static seaweed = [
        "Seaweed is a water plant, which resembles land plants apart from the fact it is not connected to the earth.",
        "In order to perform photosynthesis, seaweed grows in shallow waters rather than deep ones, and contains antioxidant pigments which give them their green, brown or reddish colour.",
        "As with land-based plants, seaweed provide the majority of the nutrition for marine creatures and play an important role in marine ecology.",
        "Seaweed is rich in nutritional elements and is a wonderful source of vitamins, minerals, protein, fatty acids, dietary fibers and antioxidants.",
        "Seaside cultures, have included seaweed in their food for hundreds of years.",
    ]

    static Seaweed() {
        var random = Utils.random(0, 4);
        var i = Math.round(random);

        return Information.seaweed[i];
    }
}