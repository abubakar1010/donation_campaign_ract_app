


const savedDataOnLocalStorage = (data) => {

    const getDataFromLocalStorage = JSON.parse(localStorage.getItem("donation")) || [];

    const isExist = getDataFromLocalStorage.find( element => element.id === data.id)

    if (!isExist) {
        getDataFromLocalStorage.push(data)

        localStorage.setItem(JSON.stringify("donation", getDataFromLocalStorage))
    }
}

const getDataFromLocalStorage = () => {

    const data = JSON.parse(localStorage.getItem("donation"))

    return data
}

export {savedDataOnLocalStorage, getDataFromLocalStorage}