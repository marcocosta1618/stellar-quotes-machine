
let quotesArr = [
    {
        quote: "Science fiction writers foresee the inevitable, and although problems and catastrophes may be inevitable, solutions are not.",
        author: "Isaac Asimov"
    },
    {
        quote: "Science fiction writers aren't fortune tellers. Fortune tellers are fakes.",
        author: "William Gibson"
    },
    {
        quote: "It is good to have an end to journey toward; but it is the journey that matters, in the end.",
        author: "Ursula K. Le Guin",
        from: "The Left Hand of Darkness"
    },
    {
        quote: "Science fiction writers aren't in the prediction business; they're in the speculation business, using 'hasn't happened' or 'hasn't happened yet' to create entertaining scenarios that may or may not anticipate future realities.",
        author: "James Gunn"
    },
    {
        quote: "Science fiction writers foresee the inevitable, and although problems and catastrophes may be inevitable, solutions are not.",
        author: "Isaac Asimov"
    },
    {
        quote: "We sat around on a hotel balcony with a bottle of wine and tried to figure out how you would go about blowing up a planet. That's the kind of conversations science fiction writers have when they get together. We don't talk about football or anything like that.",
        author: "Kevin J. Anderson"
    },
    {
        quote: "The only people who have the long view are some scientists and some science fiction writers.",
        author: "Sheri S. Tepper"
    },
    {
        quote: "The expression of divinity is in variety.",
        author: "Sheri S. Tepper"
    },
    {
        quote: "Science fiction, outside of poetry, is the only literary field which has no limits, no parameters whatsoever.",
        author: "Theodore Sturgeon"
    },
    {
        quote: "Science fiction frees you to go anyplace and examine anything.",
        author: "Octavia E. Butler"
    },
    {
        quote: "I was attracted to science fiction because it was so wide open. I was able to do anything and there were no walls to hem you in and there was no human condition that you were stopped from examining.",
        author: "Octavia E. Butler"
    },
    {
        quote: "We can celebrate how far we've come from our sexist past when women and men are equally represented in the pages of science fiction anthologies.",
        author: "Annalee Newitz"
    },
    {
        quote: "After all, a person is herself, and others. Relationships chisel the final shape of one's being. I am me, and you.",
        author: "N.K. Jemisin",
        from: "The Fifth Season"
    },
    {
        quote: "“Maybe I'll go where I can see stars” he said to himself as the car gained velocity and altitude; it headed away from San Francisco, toward the uninhabited desolation to the north. To the place where no living thing would go. Not unless it felt that the end had come.",
        author: "Philip K. Dick",
        from: "Do Androids Dream of Electric Sheep?"
    },
    {
        quote: "Even broken in spirit as he is, no one can feel more deeply than he does the beauties of nature. The starry sky, the sea, and every sight afforded by these wonderful regions, seems still to have the power of elevating his soul from earth. Such a man has a double existence: he may suffer misery, and be overwhelmed by disappointments; yet, when he has retired into himself, he will be like a celestial spirit that has a halo around him, within whose circle no grief or folly ventures.",
        author: "Mary Shelley",
        from: "Frankenstain"
    },
    {
        quote: "“Stuff your eyes with wonder,” he said, “live as if you’d drop dead in 10 seconds. See the world. It’s more fantastic than any dream made or paid for in factories.”",
        author: "Ray Bradbury",
        from: "Fahrenheit 451"
    },
    {
        quote: "His eyes were eggs of unstable crystal, vibrating with a frequency whose name was rain and the sound of trains, suddenly sprouting a humming forest of hair-fine glass spines.",
        author: "William Gibson",
        from: "Neuromancer"
    },
    {
        quote: "“It’s not the end of the world at all,” he said. “It’s only the end for us. The world will go on just the same, only we shan’t be in it. I dare say it will get along all right without us.”",
        author: "Nevil Shute",
        from: "On the Beach"
    },
    {
        quote: "No utopia can ever give satisfaction to everyone, all the time. As their material conditions improve, men raise their sights and become discontented with power and possessions that once would have seemed beyond their wildest dreams. And even when the external world has granted all it can, there still remain the searchings of the mind and the longings of the heart.",
        author: "Arthur C. Clarke",
        from: "Childhood’s End"
    },
    {
        quote: "The most hopelessly stupid man is he who is not aware he is wise.",
        author: "Isaac Asimov",
        from: "Second Foundation"
    },
    {
        quote: "We earth men have a talent for ruining big, beautiful things.",
        author: "Ray Bradbury",
        from: "The Martian Chronicles"
    },
    {
        quote: "Every orphan was an explorer, sent to map uncharted territory. And every orphan was the uncharted territory itself.",
        author: "Greg Egan",
        from: "Diaspora"
    },
    {
        quote: "Today we live in a society in which spurious realities are manufactured by the media, by governments, by big corporations, by religious groups, political groups... So I ask, in my writing, What is real? Because unceasingly we are bombarded with pseudo-realities manufactured by very sophisticated people using very sophisticated electronic mechanisms. I do not distrust their motives; I distrust their power. They have a lot of it. And it is an astonishing power: that of creating whole universes, universes of the mind. I ought to know. I do the same thing.",
        author: " Philip K. Dick"
    },
    {
        quote: "Everything's science fiction until someone makes it science fact.",
        author: "Marie Lu",
        from: "Warcross"
    },
    {
        quote: "“You mean old books?”\n“Stories written before space travel but about space travel.”\n“How could there have been stories about space travel before --”\n“The writers,” Pris said, “made it up.”",
        author: " Philip K. Dick",
        from: "Do Androids Dream of Electric Sheep?"
    },
    {
        quote: "Individual science fiction stories may seem as trivial as ever to the blinder critics and philosophers of today, but the core of science fiction -- its essence -- has become crucial to our salvation, if we are to be saved at all.",
        author: "Isaac Asimov"
    },
    {
        quote: "When religion and politics travel in the same cart, the riders believe nothing can stand in their way. Their movements become headlong - faster and faster and faster. They put aside all thoughts of obstacles and forget the precipice does not show itself to the man in a blind rush until it's too late.",
        author: "Frank Herbert",
        from: "Dune"
    },
    {
        quote: "Madness, and then illumination.",
        author: "Orson Scott Card",
        from: "Xenocide"
    },
    {
        quote: "Science fiction deals with improbable possibilities, fantasy with plausible impossibilities.",
        author: " Miriam Allen de Ford"
    },
    {
        quote: "I am free because I know that I alone am morally responsible for everything I do. I am free, no matter what rules surround me. If I find them tolerable, I tolerate them; if I find them too obnoxious, I break them. I am free because I know that I alone am morally responsible for everything I do.",
        author: "Robert A. Heinlein"
    },
    {
        quote: "Never underestimate the power of human stupidity.",
        author: "Robert A. Heinlein"
    },
    {
        quote: "One man's 'magic' is another man's engineering. 'Supernatural' is a null word.",
        author: "Robert A. Heinlein"
    },
    {
        quote: "Love is that condition in which the happiness of another person is essential to your own... Jealousy is a disease, love is a healthy condition. The immature mind often mistakes one for the other, or assumes that the greater the love, the greater the jealousy.",
        author: "Robert A. Heinlein"
    },
    {
        quote: "You can have peace. Or you can have freedom. Don't ever count on having both at once.",
        author: "Robert A. Heinlein"
    }
]

export { quotesArr };

