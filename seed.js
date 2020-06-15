const bcrypt = require('bcryptjs');
const db = require('./Models');
const SEED_PASSWORD = '12347890';

const users = [
    {
        name: "Wario",
        email: "greed@waaaah.com",
        avatar: String, //TODO - create image uploads, reference the image in the database; object id?
        password: "12347890",
        claim: [{
            name: "Luigi's Mansion",
            floorplan: [
                {
                    name: "First Floor",
                    room: [
                        {
                            name: "Entry Hall",
                            items: [
                                {
                                    name: 'Umbrella Stand',
                                    value: 50,
                                    image: String, //TODO - create image uploads, reference the image in the database; object id?
                                    description: "For umbrellas",
                                },
                                {
                                    name: "Fancy Rug",
                                    value: 375,
                                    image: String, //TODO - create image uploads, reference the image in the database; object id?
                                    description: "Gift from a friend",
                                }
                            ]
                        },
                        {
                            name: "Living Room",
                            items: [
                                {
                                    name: "Opulent Couch",
                                    value: 1000,
                                    image: String, //TODO - create image uploads, reference the image in the database; object id?
                                    description: "Genuine ostrich leather",
                                },
                                {
                                    name: "Footstool",
                                    value: 750,
                                    image: String, //TODO - create image uploads, reference the image in the database; object id?
                                    description: "Also genuine ostrich leather",
                                }
                            ]
                        },
                        {
                            name: "Kitchen",
                            items: [
                                {
                                    name: "Breakfast Table",
                                    value: 125,
                                    image: String, //TODO - create image uploads, reference the image in the database; object id?
                                    description: "Carved from oak",
                                },
                                {
                                    name: "Copper Cookware",
                                    value: 2100,
                                    image: String, //TODO - create image uploads, reference the image in the database; object id?
                                    description: "An entire set of pots, pans, and a double-boiler",
                                },
                                {
                                    name: "Cast Iron Stove",
                                    value: 2000,
                                    image: String, //TODO - create image uploads, reference the image in the database; object id?
                                    description: "Antique, and bolted into the wall",
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Second Floor",
                    room: [
                        {
                            name: "Master Bedroom",
                            items: [
                                {
                                    name: "California King Bed",
                                    value: 3250,
                                    image: String, //TODO - create image uploads, reference the image in the database; object id?
                                    description: "With down mattress and down comforter",
                                },
                                {
                                    name: "Fancy Drapes",
                                    value: 400,
                                    image: String, //TODO - create image uploads, reference the image in the database; object id?
                                    description: "Mostly lace",
                                }
                            ]
                        },
                        {
                            name: "Guest Bedroom 1",
                            items: [
                                {
                                    name: "Twin Sized Bed",
                                    value: 300,
                                    image: String, //TODO - create image uploads, reference the image in the database; object id?
                                    description: "Serviceable for a single overnight guest for one night",
                                },
                                {
                                    name: "Chest of Drawers",
                                    value: 125,
                                    image: String, //TODO - create image uploads, reference the image in the database; object id?
                                    description: "Got on sale from Ikea, the DRÆWĘR model",
                                }
                            ]
                        },
                        {
                            name: "Guest Bedroom 2",
                            items: [
                                {
                                    name: "Old Cot",
                                    value: 25,
                                    image: String, //TODO - create image uploads, reference the image in the database; object id?
                                    description: "For unwanted guests",
                                },
                                {
                                    name: "Oil Lamp",
                                    value: 10,
                                    image: String, //TODO - create image uploads, reference the image in the database; object id?
                                    description: "Probably a fire hazard, but the room doesn't have electricity",
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Attic",
                    room: [
                        {
                            name: "Attic",
                            items: [
                                {
                                    name: "Boxes of Junk",
                                    value: 5,
                                    image: String, //TODO - create image uploads, reference the image in the database; object id?
                                    description: "Various odds and ends, but mostly just trash",
                                }
                            ]
                        },
                        {
                            name: "Hidden Stash",
                            items: [
                                {
                                    name: "Pile of Gold",
                                    value: 2000000,
                                    room: "Hidden Stash",
                                    image: String, //TODO - create image uploads, reference the image in the database; object id?
                                    description: "Illicitly-acquired riches",
                                }
                            ]
                        }
                    ]
                }
            ]
        }]
    }  
];

const seedUsers = async () => {
    try {
        await db.User.deleteMany({});
        console.log('Deleted previous users');
        let user;
        for (user of users) {
            const hash = await bcrypt.hash(SEED_PASSWORD, 10);
            user.password = hash;
            user = await db.User.create(user);
        }
        console.log(`Created ${user.length} users`);
        process.exit(1);
    } catch (err) {
        console.log(`Seed Users error: ${err}`);
        process.exit(1);
    }
}


seedUsers();