function lastItem (listOfValues) {
    listOfValues.sort((a,b) => a.localeCompare(b));
    const lastAlphabetical = listOfValues[listOfValues.length -1];
    const output = document.getElementById("sortingDefaultOutput");
    if (!output.innerHTML) {
        output.innerHTML = `<br>The original array is [${listOfValues}], and I sorted it alphabetically.<br>The last item of the sorted array is: ${lastAlphabetical}.`;
    }
}

function getAndSort() {
    let numberOfCategories = parseInt(prompt("How many categories would you like to enter? Choose between 2 and 4."));
    while (isNaN(numberOfCategories) || numberOfCategories < 2 || numberOfCategories > 4) {
        numberOfCategories = parseInt(prompt("That entry is invalid. Please enter a number between 2 and 4."))
    }
    const categories = []
    for (let i = 0; i < numberOfCategories; i++) {
        categories[i] = prompt(`Enter category ${i+1} of ${numberOfCategories}.`);
    }

    const listToSort = [];
    for (let i = 0; i < numberOfCategories; i++) {
        listToSort[i] = prompt(`Enter one ${categories[i].toLowerCase()}.`);
    }

    const output = document.getElementById("sortingInputedOutput");
    output.innerHTML = `<br>The list you inputed was: [${listToSort}].<br>I sorted it like this: [${listToSort.toSorted()}]`;
}