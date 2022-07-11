const shipsContainer = document.querySelector('shipContainer')
const baseURL = `http://localhost:4000/api/ships/`
const shipsCallback = ({data:ships}) => displayShips(ships)
const errCallback = err => console.log(err.response.data)

const getAllShips = () => axios.get(baseURL).then(shipsCallback).catch(errCallback)



const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const nameBtn = document.getElementById('nameButton');

const getName = () => {
    axios.get("http://localhost:4000/api/name/")
    .then(res => {
        const data = res.data;
        alert(data)
    })
}

nameBtn.addEventListener('click', getName)


const addShipBtn = document.getElementById('addShipButton');

const addShip = () => {
    axios.post(baseURL, addShip)
    .then(shipsCallback).catch(errCallback)
    
};

addShipBtn.addEventListener('click', addShip)



const updateShipBtn = document.getElementById('update');

const updateShip = () => {
    axios.put(`${baseURL}:id`, updateShip)
    .then(shipsCallback).catch(errCallback)
}

updateShipBtn.addEventListener('click', updateShip)

const deleteShipBtn = document.getElementById('deleteShipButton')

const deleteShip = () => {
    axios.delete(`${baseURL}:id`, deleteShip).then(shipsCallback).catch(errCallback)
}

deleteShipBtn.addEventListener('click', deleteShip)




function displayShips(arr) {
    shipsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++){
        createShipCard(arr[i])
    }
}

const form = document.querySelector('form')
function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let manufacturer = document.querySelector('#manufacturer')
    let imageURL = document.querySelector('#URL')

    let bodyObj = {
        name : name.value,
        manufacturer: manufacturer.value,
        imageURL: imageURL.value
    }

    addShip(bodyObj)

    name.value = ''
    manufacturer.value = ''
    imageURL.value = ''
}
