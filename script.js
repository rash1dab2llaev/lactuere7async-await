let container = document.querySelector('.container')
async function getUsers() {
    try {
        let { data } = await axios.get(`https://reqres.in/api/users`)
        console.log(data.data);
        addUser(data.data)
    } catch (error) {
        console.log(error);
    }
}

/* 
let deleteFunc = async (id) => {
    try {
        let { data } = await axios.post(`url/${id}`)
        getUsers()
    } catch (error) {
        console.log(error);
    }
} */

async function deleteFunc(id) {
    try {
        let { data } = await axios.post(`url/${id}`)
        getUsers()
    } catch (error) {
        console.log(error);
    }
}


function addUser(data) {
    data.forEach(elem => {
        let card = document.createElement('div')

        let newH1 = document.createElement('h1')
        newH1.innerHTML = elem.first_name

        let deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = 'delete'
        deleteBtn.onclick = () => {
            deleteFunc(elem.id)
        }

        container.appendChild(card)
        card.appendChild(newH1)
        card.appendChild(deleteBtn)


    })
}


getUsers()
