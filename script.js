const setActive = (index) => {
    Array.from(document.getElementsByClassName('active')).forEach(element => element.classList.toggle('active'))
    document.getElementsByClassName('tab')[index].classList.toggle('active')
    document.getElementsByClassName('nav-item')[index].classList.toggle('active')
}

const setInitialActiveItems = () => {
    const anchorMapping = {
        '#about': 0,
        '#experience': 1,
        '#skills': 2,
    }
    
    const activeTab = anchorMapping[document.location.hash]
    setActive(activeTab === undefined ? 1 : activeTab)
}

const setNavClickHandlers = () => {
    Array.from(document.getElementsByClassName('nav-item')).forEach((element, index) => element.onclick = () => setActive(index))
}

const setBirthDate = (elementId, birthDate) => {
    const now = new Date()
    const birthDateElement = document.getElementById(elementId)

    const daysDiff = now.getDate() - birthDate.getDate()
    const monthsDiff = now.getMonth() - birthDate.getMonth() - (daysDiff >= 0 ? 0: 1)
    const yearsDiff = now.getFullYear() - birthDate.getFullYear() - (monthsDiff >= 0 ? 0: 1)

    if (yearsDiff > 0) {
        birthDateElement.innerText = `${yearsDiff} year`
    } else {
        birthDateElement.innerText = `${monthsDiff + (now.getFullYear() - birthDate.getFullYear()) * 12} month`
    }
}


window.onload = () => {
    setNavClickHandlers()
    setInitialActiveItems()
    setBirthDate('sons-age', new Date(2021, 4, 23))
    setBirthDate('daughters-age', new Date(2024, 5, 21))
}
