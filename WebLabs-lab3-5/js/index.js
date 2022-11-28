// ------------ Toggle pages -----------

const body = document.body;
const menuItems = document.querySelectorAll('.menu__link');
const myAnimals = document.getElementById('my_animals');
const createAnimal = document.getElementById('create_animal');
const createPage = document.getElementById('create__page');
const searchForm = document.querySelector('.search_form');
const createTitle = document.querySelector('.create__title');
const editButton = document.getElementById('edit_button');

const openMainPage = () => {
    switchMenuItem(myAnimals);
    createPage.classList.add('hidden');
    searchForm.classList.remove('hidden');
    body.classList.remove('lock');
    createAnimal.innerHTML = 'Create Animal';
};

const openCreatePage = () => {
    switchMenuItem(createAnimal);
    createPage.classList.remove('hidden');
    searchForm.classList.add('hidden');
    body.classList.add('lock');
    createPage.scrollTo(top);
    submitButton.classList.remove('hidden');
    editButton.classList.add('hidden');
    clearInputValues();
    createTitle.innerHTML = 'Create animal';
};

const openEditPage = () => {
    switchMenuItem(createAnimal);
    createPage.classList.remove('hidden');
    searchForm.classList.add('hidden');
    body.classList.add('lock');
    createPage.scrollTo(top);
    submitButton.classList.add('hidden');
    editButton.classList.remove('hidden');
    createTitle.innerHTML = 'Edit animal';
    createAnimal.innerHTML = 'Edit animal';
};

const switchMenuItem = (menuItem) => {
    menuItems.forEach((item) => {
        item.classList.remove('active_menu__item');
    });
    menuItem.classList.add('active_menu__item');
};

createPage.addEventListener("keydown", (event) => {
    if (event.target.closest('.create_animal__form') &&
        event.code === 'Enter') {
        console.log(event.code);
        event.preventDefault();
    }
})

myAnimals.addEventListener("click", (event) => {
    openMainPage();
});

createAnimal.addEventListener("click", (event) => {
    openCreatePage();
});

// ------------ Create animal -------------

const nameInput = document.getElementById("name_input");
const descriptionInput = document.getElementById("description_input");
const animalTypeInput = document.getElementById("animal-type_input");
const dailyExpensesInput = document.getElementById("daily-expenses_input");
const submitButton = document.getElementById('submit_button');
const animalContainer = document.getElementById("animals_list");

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (validateInputs()){
        postAnimal(getInputValues());
        clearInputValues();
        
        refetchAllAnimals();
        openMainPage();
    } else {
        getAlert();
    }
});

const getInputValues = () => {
    return{
        name: nameInput.value,
        description: descriptionInput.value,
        animalType: animalTypeInput.value,
        dailyExpenses: dailyExpensesInput.value
    };
};

const clearInputValues = () => {
    nameInput.value = "";
    descriptionInput.value = "";
    animalTypeInput.value = "";
    dailyExpensesInput.value = "";
};

let animalsList = [];
let id = 0;


const addAnimalToBoard = ({id, name, desciption, animalType, dailyExpenses }) => {
    animalContainer.insertAdjacentHTML(
        "beforeend",
        itemTemplate({id, name, desciption, animalType, dailyExpenses})
    );
};



const itemTemplate = ({id, name, description, animalType, dailyExpenses}) => `
<li class="animal_item">
    <h4>${name}</h4>
    <div class="animal_item__item">
        <h5 class="animal__characteristic">Description:</h5>
        <p class="animal__text">${description}</p>
    </div>
    <div class="animal_item__item">
        <h5 class="animal__characteristic">Animal Type:</h5>
        <p class="animal__text">${animalType}</p>
    </div>
    <div class="animal_item__item">
        <h5 class="animal__characteristic">Daily Expenses:</h5>
        <p class="animal__text">${dailyExpenses}</p>
    </div>
    <div class="edit_button__wrapper">
        <button id="${id}" class="animal_button edit_button">
            Edit
        </button>
    </div>
    <div class="delete_button__wrapper">
        <button id="${id}" class="animal_button delete_button">
            Delete
        </button>
    </div>
</li>`;

const renderAnimalsBoard = (items) => {
    animalContainer.innerHTML = "";
    for (const item of items) {
        addAnimalToBoard(item);
    }
};

// ---------- Edit animal -----------

let currentId ;

animalContainer.addEventListener("click", (event) => {
    if (event.target.closest('.edit_button')) {
        openEditPage();

        currentId = event.target.getAttribute('id');
        console.log(currentId)
        fillInValuesToEdit(currentId);
    }
});

const fillInValuesToEdit = (id) => {
    const itemToEdit = animalsList.find((item) => {
        return item.id == id;
    })
    console.log(id)
    nameInput.value = itemToEdit.name;
    descriptionInput.value = itemToEdit.description;
    animalTypeInput.value = itemToEdit.animalType;
    dailyExpensesInput.value = itemToEdit.dailyExpenses;
};

editButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (validateInputs()) { 
        updateAnimal(currentId, getInputValues());  
        clearInputValues();
        refetchAllAnimals(animalsList);
        openMainPage();
    } else {
        getAlert();
    }
});





animalContainer.addEventListener("click", (event) => {
    if (event.target.closest('.delete_button')) {
        deleteAnimal(event.target.getAttribute('id'));
        
        refetchAllAnimals();
    }
});



// ---------- Input validation ----------



const validateInputs = () => {
    return nameInput.value && descriptionInput.value && 
        animalTypeInput.value && dailyExpensesInput.value;
}



// ---------- Manage animals ------------

const searchButton = document.getElementById('search_button');
const cancelButton = document.getElementById('cancel_button');
const searchInput = document.getElementById('search_form__input');
const sortCheckbox = document.getElementById('sort__check');
const countButton = document.getElementById('count__button');
const totalResult = document.getElementById('total');

searchButton.addEventListener("click", (event) => {
    event.preventDefault();

    const foundList = animalsList.filter(
        (item) => item.animalType.toLowerCase().includes(searchInput.value.toLowerCase())
    );

    renderAnimalsBoard(foundList);
});

cancelButton.addEventListener("click", (event) => {
    event.preventDefault();

    renderAnimalsBoard(animalsList);
    searchInput.value = "";
});

sortCheckbox.onchange = () => {
    if (sortCheckbox.checked){
        const sortedList = animalsList.sort((a, b) => {
            return b.dailyExpenses - a.dailyExpenses;
        });
        renderAnimalsBoard(sortedList);
    }
    else {
        renderAnimalsBoard(animalsList);
    }
};

countButton.addEventListener("click", (event) => {
    const total = animalsList.reduce((accamulator, current) => {
        return accamulator + +current.dailyExpenses;
    }, 0)
    totalResult.innerHTML = total;
});






const BASE_URL = "http://localhost:5050";
const RESOURSE_URL = `${BASE_URL}/animal`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};


const getAllAnimals = async () => {
    const rawResponse = await baseRequest({ method: "GET" });

    return await rawResponse.json();
};

const postAnimal = (body) => baseRequest({ method: "POST", body });

const updateAnimal = (id, body) =>baseRequest({ urlPath: `/${id}`, method: "PUT", body });

const deleteAnimal = (id) => baseRequest({ urlPath: `/${id}`, method: "DELETE" });

const refetchAllAnimals = async () => {
    const animals = await getAllAnimals();
    animalsList = animals;

    renderAnimalsBoard(animalsList);
};

refetchAllAnimals();

