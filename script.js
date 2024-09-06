document.getElementById('peopleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const age = document.getElementById('age').value;

    const person = {
        name: name,
        id: id,
        age: age
    };

    addPersonToList(person);
    saveToLocalStorage(person);

    // Clear form
    document.getElementById('peopleForm').reset();
});

function addPersonToList(person) {
    const peopleList = document.getElementById('peopleList');
    const li = document.createElement('li');
    li.textContent = `Name: ${person.name}, ID: ${person.id}, Age: ${person.age}`;
    peopleList.appendChild(li);
}

function saveToLocalStorage(person) {
    let people = JSON.parse(localStorage.getItem('people')) || [];
    people.push(person);
    localStorage.setItem('people', JSON.stringify(people));
}

function loadPeopleFromLocalStorage() {
    const people = JSON.parse(localStorage.getItem('people')) || [];
    people.forEach(addPersonToList);
}

// Load people when page loads
window.onload = loadPeopleFromLocalStorage;
