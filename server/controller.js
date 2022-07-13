// const ships = require('./db.json')
// let globalId = 3
const shipsArr = ['Razor Crest', 'Slave 1', 'Millenium Falcon']

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
        console.log("endpoint hit");
        console.log(req.body);
        shipsArr.push(req.body.name);
        res.status(200).send(shipsArr);


    },

    updateShip: (req, res) => {
        console.log('endpoint hit');
        console.log(req.params);
        console.log(req.body)
        const indexToEdit = +req.params.id;
        shipsArr[indexToEdit] = req.body.updateShip
        }
    ,

    deleteShip: (req,res) => {
        console.log("ENDPOINT HIT")
        console.log(req.params);
        
        
        const indexToDelete = +req.params.id
        shipsArr.splice(indexToDelete,1);
    }

}