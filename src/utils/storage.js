const addToStorage = (key, value) => {
    if (localStorage.student) {
        localStorage.removeItem("student")
    }

    if (localStorage.teacher) {
        localStorage.removeItem("teacher")
    }
    localStorage.setItem(key, value)
}


const removeFromStorage = (key) => {
    if (localStorage.getItem(key)) {
        localStorage.removeItem(key)
    }
}

const fetchFromStorage = (key) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key))
    }
}

export {
    addToStorage,
    removeFromStorage,
    fetchFromStorage
}