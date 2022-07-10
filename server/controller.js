const ships = require('./db.json')
let globalId = 3

module.exports = {
    //don't edit code below//
    //need to add 4 requests: GET, PUT, POST, DELETE
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getName: (req, res) => {
        const names = ['Carlo', 'Dominique', 'Jeddy', 'Alec', 'Paul', 'Alex', 'Brandon'];

        let randomIndex = Math.floor(Math.random() * names.length);
        let randomName = names[randomIndex];
        
        res.status(200).send(randomName);
        
    },

    addShip: (req, res) => {
        const {name, manufacturer, imageURL} = req.body

        let newShip = {
            name,
            manufacturer,
            imageURL,
            id: globalId
        }

        ships.push(newShip);
        res.status(200).send(ships);
        globalId++;
        console.log(ships);


    },

    updateShip: (req, res) => {
        const existingName = +req.params.name
        let index = ships.findIndex(ships =>ships.name === existingName)

        if(req.body.type === '') {
            ships.name = existingName
            res.status(200).send(ships)
        }
    },

    deleteShip: (req,res) => {
        const existingId = +req.params.id

        let index = ships.findIndex(ship => ship.id === existingId)
        ships.splice(index, 1)
        res.status(200).send(ships)
        
    }

}