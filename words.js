const wordList= [
    {
        word: "ocean",
        hint: "vast body of saltwater"
    },
    {
        word: "camera",
        hint: "device for capturing images"
    },
    {
        word: "mountain",
        hint: "tall landform with peaks"
    },
    {
        word: "book",
        hint: "printed or written work"
    },
    {
        word: "sun",
        hint: "star at the center of our solar system"
    },
    {
        word: "dog",
        hint: "a domesticated animal"
    },
    {
        word: "cat",
        hint: "a common pet"
    },
    {
        word: "computer",
        hint: "electronic device for processing data"
    },
    {
        word: "flower",
        hint: "blossoming plant"
    },
    {
        word: "coffee",
        hint: "popular caffeinated beverage"
    },
    {
        word: "car",
        hint: "personal vehicle"
    },
    {
        word: "pizza",
        hint: "popular Italian dish"
    },
    {
        word: "rainbow",
        hint: "colorful meteorological phenomenon"
    },
    {
        word: "telephone",
        hint: "communication device"
    },
    {
        word: "television",
        hint: "electronic broadcasting medium"
    },
    {
        word: "chair",
        hint: "a piece of furniture for sitting"
    },
    {
        word: "garden",
        hint: "cultivated outdoor space"
    },
    {
        word: "music",
        hint: "auditory art form"
    },
    {
        word: "clock",
        hint: "timekeeping device"
    },
    {
        word: "shoes",
        hint: "footwear"
    },
    {
        word: "beach",
        hint: "sandy shore by the sea"
    },
    {
        word: "bicycle",
        hint: "two-wheeled vehicle"
    },
    {
        word: "lamp",
        hint: "source of light"
    },
    {
        word: "pen",
        hint: "writing instrument"
    },
    {
        word: "tree",
        hint: "tall woody plant"
    },
    {
        word: "house",
        hint: "a place to live"
    },
    {
        word: "glass",
        hint: "transparent material"
    },
    {
        word: "window",
        hint: "opening in a wall"
    },
    {
        word: "jacket",
        hint: "outerwear garment"
    },
    {
        word: "bird",
        hint: "feathered creature"
    },
    {
        word: "soccer",
        hint: "popular sport"
    },
    {
        word: "candle",
        hint: "source of light made of wax"
    },
    {
        word: "hat",
        hint: "head covering"
    },
    {
        word: "desk",
        hint: "furniture for work or study"
    },
    {
        word: "plate",
        hint: "flat dish for food"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word: "phone",
        hint: "communication device"
    },
    {
        word: "cake",
        hint: "sweet dessert"
    },
    {
        word: "door",
        hint: "entry or exit point"
    },
    {
        word: "basket",
        hint: "container for carrying items"
    },
    {
        word: "oxygen",
        hint: "essential gas for breathing"
    },
    {
        word: "fire",
        hint: "burning combustion"
    },
    {
        word: "wallet",
        hint: "money and card holder"
    },
    {
        word: "star",
        hint: "luminous celestial object"
    },
    {
        word: "mirror",
        hint: "reflective surface"
    },
    {
        word: "bookshelf",
        hint: "furniture for storing books"
    },
    {
        word: "keyboard",
        hint: "input device for computers"
    },
    {
        word: "map",
        hint: "diagram representing an area"
    },
    {
        word: "sandwich",
        hint: "food between slices of bread"
    },
    {
        word: "school",
        hint: "place of education"
    },
    {
        word: "globe",
        hint: "spherical representation of Earth"
    },
    {
        word: "microphone",
        hint: "audio input device"
    },
    {
        word: "pencil",
        hint: "writing instrument"
    },
    {
        word: "bridge",
        hint: "structure over a body of water"
    },
    {
        word: "tiger",
        hint: "large feline predator"
    },
    {
        word: "diamond",
        hint: "precious gemstone"
    },
    {
        word: "printer",
        hint: "device for producing paper copies"
    },
    {
        word: "butterfly",
        hint: "insect with colorful wings"
    },
    {
        word: "moonlight",
        hint: "light from the moon"
    },
    {
        word: "umbrella",
        hint: "rain protection device"
    },
    {
        word: "camera",
        hint: "device for capturing images"
    },
    {
        word: "tropical",
        hint: "related to warm climates"
    },
    {
        word: "volcano",
        hint: "mountain with eruptions"
    },
    {
        word: "chocolate",
        hint: "sweet confection"
    },
    {
        word: "glasses",
        hint: "visual aids for eyesight"
    },
    {
        word: "painting",
        hint: "art on canvas"
    },
    {
        word: "keyboard",
        hint: "input device for computers"
    },
    {
        word: "island",
        hint: "land surrounded by water"
    },
    {
        word: "hockey",
        hint: "a famous outdoor game"
    },
    {
        word: "chess",
        hint: "related to an indoor game"
    },
    {
        word: "viber",
        hint: "a social media app"
    },
    {
        word: "github",
        hint: "code hosting platform"
    },
    {
        word: "png",
        hint: "an image file format"
    },
    {
        word: "silver",
        hint: "precious greyish-white metal"
    },
    {
        word: "mobile",
        hint: "an electronic device"
    },
    {
        word: "gpu",
        hint: "computer component"
    },
    {
        word: "java",
        hint: "programming language"
    },
    {
        word: "google",
        hint: "famous search engine"
    },
    {
        word: "venice",
        hint: "famous city of waters"
    },
    {
        word: "excel",
        hint: "Microsoft product for Windows"
    },
    {
        word: "mysql",
        hint: "a relational database system"
    },
    {
        word: "nepal",
        hint: "developing country name"
    },
    {
        word: "flute",
        hint: "a musical instrument"
    },
    {
        word: "crypto",
        hint: "related to cryptocurrency"
    },
    {
        word: "tesla",
        hint: "unit of magnetic flux density"
    },
    {
        word: "mars",
        hint: "planet of our solar system"
    },
    {
        word: "proxy",
        hint: "related to server application"
    },
    {
        word: "email",
        hint: "related to exchanging messages"
    },
    {
        word: "html",
        hint: "markup language for the web"
    },
    {
        word: "air",
        hint: "related to a gas"
    },
    {
        word: "idea",
        hint: "a thought or suggestion"
    },
    {
        word: "server",
        hint: "related to a computer or system"
    },
    {
        word: "svg",
        hint: "a vector image format"
    },
    {
        word: "jpeg",
        hint: "an image file format"
    },
    {
        word: "search",
        hint: "act of finding something"
    },
    {
        word: "key",
        hint: "small piece of metal"
    },
    {
        word: "egypt",
        hint: "a country name"
    },
    {
        word: "joker",
        hint: "psychological thriller film"
    },
    {
        word: "dubai",
        hint: "developed country name"
    },
    {
        word: "photo",
        hint: "representation of a person or scene"
    },
    {
        word: "nile",
        hint: "largest river in the world"
    },
    {
        word: "rain",
        hint: "related to water"
    },
    // ... add more words and hints here
];
