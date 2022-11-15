function chooseAQoute(qoutes) {
    const numberOfChoices = qoutes.length;
    const nameChoice = Math.floor(Math.random() * numberOfChoices) + 0;
    return qoutes[nameChoice];
}

export default chooseAQoute;