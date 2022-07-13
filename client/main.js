const shipsContainer = document.querySelector('shipContainer')
const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment);


const nameBtn = document.getElementById('nameButton');

const getName = () => {
    axios.get("http://localhost:4000/api/name")
    .then(res => {
        const data = res.data;
        alert(data)
    })
}

nameBtn.addEventListener('click', getName)

const shipInput = document.getElementById('shipInput'); //grab text field for adding ship

const addShipBtn = document.getElementById('addShipButton'); //grab add ship button

const addShip = () => {
    const shipInput = {
        name: shipInput.value 
    }
    axios.post("http://localhost:4000/api/add/ships", shipInput)
    .then((res) => {
        alert(res.data);
    })
    
};

addShipBtn.addEventListener('click', addShip)



const updateShipBtn = document.getElementById('update');
const updateIndex = document.getElementById('indexSelectUpdate')

const updateShip = () => {
    const updateInput = {
        updateName: updateNameInput.value
    }
    axios.put(`http://localhost:4000/api/update/ships/${indexSelectUpdate.value}`, updateInput)
    .then((res) => {
        alert(res.data);
    })
}

updateShipBtn.addEventListener('click', updateShip)

const deleteShipBtn = document.getElementById('deleteShipButton')
const deleteIndex = document.getElementById('indexSelectDelete')
const deleteShip = () => {
    axios.delete(`http://localhost:4000/api/delete/ships/${indexSelectDelete.value}`)

}

deleteShipBtn.addEventListener('click', deleteShip)




