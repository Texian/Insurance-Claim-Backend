const bcrypt = require('bcryptjs');
const db = require('./Models');
const SEED_PASSWORD = '12347890';

const users = [
    {
        name: "Wario",
        email: "greed@waaaah.com",
        avatar: String, //TODO - create image uploads, reference the image in the database; object id?
        password: "12347890",
        claim: [
            "Luigi's Mansion"
        ]
    }  
];

const claims = [
    {
        name: "Luigi's Mansion",
        user: "Wario",
        floorplan: [
            "First Floor",
            "Second Floor",
            "Attic"
        ]
    }
];

const floorplans = [
    {
        name: "First Floor",
        claim: "Luigi's Mansion",
        room: [
            "Entry Hall",
            "Living Room",
            "Kitchen"
        ]
    },
    {
        name: "Second Floor",
        claim: "Luigi's Mansion",
        room: [
            "Master Bedroom",
            "Guest Bedroom 1",
            "Guest Bedroom 2"
        ]
    },
    {
        name: "Attic",
        claim: "Luigi's Mansion",
        room: [
            "Attic",
            "Hidden Stash"
        ]
    }
];

const rooms = [
    {
        name: "Entry Hall",
        floorplan: "First Floor",
        items: [
            "Umbrella Stand",
            "Fancy Rug"
        ]
    },
    {
        name: "Living Room",
        floorplan: "First Floor",
        items: [
            "Opulent Couch",
            "Footstool"
        ]
    },
    {
        name: "Kitchen",
        floorplan: "First Floor",
        items: [
            "Breakfast Table",
            "Copper Cookware",
            "Cast Iron Stove"
        ]
    },
    {
        name: "Master Bedroom",
        floorplan: "Second Floor",
        items: [
            "California King Bed",
            "Fancy Drapes"
        ]
    },
    {
        name: "Guest Bedroom 1",
        floorplan: "Second Floor",
        items: [
            "Twin Sized Bed",
            "Chest of Drawers"
        ]
    },
    {
        name: "Guest Bedroom 2",
        floorplan: "Second Floor",
        items: [
            "Old Cot",
            "Oil Lamp"
        ]
    },
    {
        name: "Attic",
        floorplan: "Attic",
        items: [
            "Boxes of Junk"
        ]
    },
    {
        name: "Hidden Stash",
        floorplan: "Attic",
        items: [
            "Pile of Gold"
        ]
    },
];

const items = [
    {
        name: "Umbrella Stand",
        value: 50,
        room: "Entry Hall",
        image: String, //TODO - create image uploads, reference the image in the database; object id?
        description: "For umbrellas",
    },
    {
        name: "Fancy Rug",
        value: 375,
        room: "Entry Hall",
        image: String, //TODO - create image uploads, reference the image in the database; object id?
        description: "Gift from a friend",
    },
    {
        name: "Opulent Couch",
        value: 1000,
        room: "Living Room",
        image: String, //TODO - create image uploads, reference the image in the database; object id?
        description: "Genuine ostrich leather",
    },
    {
        name: "Footstool",
        value: 750,
        room: "Living Room",
        image: String, //TODO - create image uploads, reference the image in the database; object id?
        description: "Also genuine ostrich leather",
    },
    {
        name: "Breakfast Table",
        value: 125,
        room: "Kitchen",
        image: String, //TODO - create image uploads, reference the image in the database; object id?
        description: "Carved from oak",
    },
    {
        name: "Copper Cookware",
        value: 2100,
        room: "Kitchen",
        image: String, //TODO - create image uploads, reference the image in the database; object id?
        description: "An entire set of pots, pans, and a double-boiler",
    },
    {
        name: "Cast Iron Stove",
        value: 2000,
        room: "Kitchen",
        image: String, //TODO - create image uploads, reference the image in the database; object id?
        description: "Antique, and bolted into the wall",
    },
    {
        name: "California King Bed",
        value: 3250,
        room: "Master Bedroom",
        image: String, //TODO - create image uploads, reference the image in the database; object id?
        description: "With down mattress and down comforter",
    },
    {
        name: "Fancy Drapes",
        value: 400,
        room: "Master Bedroom",
        image: String, //TODO - create image uploads, reference the image in the database; object id?
        description: "Mostly lace",
    },
    {
        name: "Twin Sized Bed",
        value: 300,
        room: "Guest Bedroom 1",
        image: String, //TODO - create image uploads, reference the image in the database; object id?
        description: "Serviceable for a single overnight guest for one night",
    },
    {
        name: "Chest of Drawers",
        value: 125,
        room: "Guest Bedroom 1",
        image: String, //TODO - create image uploads, reference the image in the database; object id?
        description: "Got on sale from Ikea, the DRÆWĘR model",
    },
    {
        name: "Old Cot",
        value: 25,
        room: "Guest Bedroom 2",
        image: String, //TODO - create image uploads, reference the image in the database; object id?
        description: "For unwanted guests",
    },
    {
        name: "Oil Lamp",
        value: 10,
        room: "Guest Bedroom 2",
        image: String, //TODO - create image uploads, reference the image in the database; object id?
        description: "Probably a fire hazard, but the room doesn't have electricity",
    },
    {
        name: "Boxes of Junk",
        value: 5,
        room: "Attic",
        image: String, //TODO - create image uploads, reference the image in the database; object id?
        description: "Various odds and ends, but mostly just trash",
    },
    {
        name: "Pile of Gold",
        value: 2000000,
        room: "Hidden Stash",
        image: String, //TODO - create image uploads, reference the image in the database; object id?
        description: "Illicitly-acquired riches",
    },
];

const seedItems = async () => {
    try {
        await db.Item.deleteMany({});
        console.log('Deleted previous items');
        let createdItems = await db.Item.create(items);
        console.log(`Created ${createdItems.length} items`);
    } catch (err) {
        console.log(`Seed Items error: ${err}`);
        process.exit(1);
    }
}

const seedRooms = async () => {
    try {
        let itemId = await seedItems();
        rooms.forEach(room => room.item = itemId);
        await db.Room.deleteMany({});
        console.log('Deleted previous rooms');
        let createdRooms = await db.Room.create(rooms);
        console.log(`Created ${createdRooms.length} rooms`);
    } catch (err) {
        console.log(`Seed Rooms error: ${err}`);
        process.exit(1);
    }
}

const seedFloorplans = async () => {
    try {
        let roomId = await seedRooms();
        floorplans.forEach(floorplan => floorplan.room = roomId);
        await db.Floorplan.deleteMany({});
        console.log('Deleted previous floorplans');
        let createdFloorplans = await db.Floorplan.create(floorplans);
        console.log(`Created ${createdFloorplans.length} floorplans`);
    } catch (err) {
        console.log(`Seed Floorplans error: ${err}`);
        process.exit(1);
    }
}

const seedClaims = async () => {
    try {
        let floorplanId = await seedFloorplans();
        claims.forEach(claim => claim.floorplan = floorplanId);
        await db.Claim.deleteMany({});
        console.log('Deleted previous claims');
        let createdClaims = await db.Claim.create(claims);
        console.log(`Created ${createdClaims.length} claims`);
    } catch (err) {
        console.log(`Seed Claims error: ${err}`);
        process.exit(1);
    }
}

const seedUsers = async () => {
    try {
        let claimId = await seedClaims();
        users.forEach(user => user.claim = claimId);
        await db.User.deleteMany({});
        console.log('Deleted previous users');
        let user;
        for (user of users) {
            const hash = await bcrypt.hash(SEED_PASSWORD, 10);
            user.password = hash;
            user = await db.User.create(user);
        }
        console.log(`Seeded ${users.length} users`);
        process.exit();
    } catch (err) {
        console.log(`Seed Users error: ${err}`);
        process.exit(1);
    }
}

seedUsers();