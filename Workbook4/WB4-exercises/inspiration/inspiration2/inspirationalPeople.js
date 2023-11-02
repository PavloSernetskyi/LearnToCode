"use strict"

const inspirationalPeople = [
    {
        name: "Kobe Bryant",
        birthDate: "August 23, 1978",
        deathDate: "January 26, 2020",
        teamsPlayedFor: ["Los Angeles Lakers"],
        achievements: {
            championshipRings: 5,
        },
        inspirationReason:
            "Mamba Mentality - Kobe's unparalleled work ethic, drive, and passion for the game of basketball.",
        imageUrl:
            "https://es.artlogo.co/cdn/shop/articles/Kobe_Bryant_Signature.jpg",
    },
    {
        name: "Mick Foley",
        age: "58",
        occupations: "Professional Wrestler",
        yearsActive: "1983-2012",
        ringNames: ["Cactus Jack", "Mankind", "Dude Love"],
        inspiration:
            "Put his body on the line every week and almost dying along the way so that he could live his dreams",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mick_Foley_2019_%28cropped%29.jpg/180px-Mick_Foley_2019_%28cropped%29.jpg",
    },
    {
        name: "Eric Barone",
        occupation: "Video game developer/designer",
        birthyear: 1987,
        accomplishment: "Created Stardew Valley all by himself",
        gamesCreated: ["Stardew Valley", "Haunted Chocolatier"],
        inspirationReason:
            "He could not find a software job, so he decided to work on the game over the course of 4 and a half years",
        imgUrl:
            "https://media.gq.com/photos/5ab085afa3a5ca214d8baf6e/4:3/w_3111,h_2333,c_limit/eric_barone_gq20180319_11.jpg",
    },
    {
        Relation: "Cousin",
        name: "Kristen",
        reason: "self-made and ballin out",
        imageURL: "https://gifdb.com/gif/rich-raining-money-55jym9kb4mp6hkd7.html",
    },
    {
        givenName: "Jenny",
        birthDate: "October 18, 1980",
        Relationship: "Mother",
        Reason:
            "Single mom who worked 3 jobs to support the family. Always made sure food was on the table.",
        imageURL:
            "https://cdn.britannica.com/27/4027-050-973CC0B1/Flag-Cambodia.jpg",
    },
    {
        name: "Albert Einstein",
        iq: 160,
        quality: "Creative",
        quality2: "Logical",
        quality3: "Brilliant Mind",
        quote: "I never think of future it comes soon enough. - Albert Einstein",
        imageUrl:
            "https://assets.ltkcontent.com/images/177059/Albert-Einstein-quotes_a7708f17f9.jpg",
    },
    {
        firstname: "Carmela",
        lastname: "Lacap",
        relation: "girlfriend",
        interests: ["cats", "reading", "baking"],
        inspirationReason:
            "She's always pushing me to better myself as she is always trying to better herself.",
        imageURL:
            "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    },
    {
        name: "Kris Jenner",
        birthday: "November 5, 1955",
        exPartners: ["Caitlyn Jenner", "Robert Kardashian"],
        children: ["Kim", "Khloe", "Kourntey", "Robert", "Kylie", "Kendall"],
        why: "She is a successful entrepreneur and business manager.",
        image:
            "https://s.yimg.com/ny/api/res/1.2/XDaou6AP3S7098_DvfS03g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://media.zenfs.com/en/marie_claire_us_340/a347480462d42ce1d06ce8a81cf02d2d",
    },
    {
        name: "Gojo Satoru",
        birthDate: "December 7, 1989",
        occupation: "Strongest character",
        inspirationReason:
            "Even though he's born with everything he needs to make himself the strongest, he utilizes it differently from other characters and teaches the new generation to get on his level",
        heightInCM: 190,
        eyeColor: "blue",
        hairColor: "white",
        imageURL:
            "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2023/07/jujutsu-kaisen-inteligencia-artificial-gojo-realista.jpg",
    },
    {
        name: "Lebron James",
        birthDate: "December 30, 1984",
        teamsPlayedFor: ["Cleveland Cavaliers", "Miami Heat", "Los Angeles Lakers"],
        achievements: {
            championshipRings: 4,
            numMVPs: 4,
            numFinalMVPs: 4,
            numAllStars: 19,
        },
        inspirationReason: "GOAT",
        imageUrl:
            "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/c5r52rbifxn2srhp9no0.jpg",
    },
    {
        name: "Maya Higa",
        dateOfBirth: "1998",
        age: 25,
        height: "5' 5\"",
        ocupation: ["conservationist", "wildlife rehabilitator"],
        quote:
            "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
        imageUrl:
            "https://www.alveussanctuary.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaya-higa.ffb984bf.jpg&w=640&q=75",
    },
    {
        name: "Steve Harvey",
        birthDate: "January 17, 1957",
        shows: ["Family Feud", "Celebrity Family Feud"],
        achievements: {
            daytimeEmmyAwards: 7,
            marconiAwards: 2,
            naacpImageAwards: 14,
        },
        inspirationReason:
            "He came from humbling beginnings and tells his story motivating others to overcome adversities",
        imageUrl:
            "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2017_19/1213872/steve-harvey-today-170511-tease.jpg",
    },
];