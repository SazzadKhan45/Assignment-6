// loadCategory

const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayCategoryBtn(data.categories))
};

// loadCategory data display

const displayCategoryBtn = (items) => {
    // console.log(items);
    const loadBtn = document.getElementById('category-btn');
    for (const item of items) {
        // console.log(item); 
        const div = document.createElement('div');
        div.classList = ""
        div.innerHTML = `
            <button class ="btn py-6 px-8 rounded-lg">
            <div class= "flex items-center gap-4">
                <img class ="h-[30px] w-[30px]" src = ${item.category_icon} />
                <h2 class = "text-lg font-bold">${item.category}</button></h2>
            </div>
            
        `;
        loadBtn.appendChild(div);
    }

};


// All category data load
const loadAllCategory = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => displayAllCategory(data.pets))
};

// Display all category data load
const displayAllCategory = (allPets) => {
    const cardContainer = document.getElementById('card-container');
    for (const HomePet of allPets) {
        console.log(HomePet);

        const div = document.createElement('div');
        div.classList = "bg-gray-100 p-4 rounded w-full";
        div.innerHTML = `
            <img class ="rounded-lg w-full" src = "${HomePet.image}" class = ""/>
            <h4 class = "text-lg font-bold mt-4">${HomePet.category}</h4>
            <div class ="py-4">
                <p><i class="fa-brands fa-slack"></i> Breed: ${HomePet.breed}</p>
                <p><i class="fa-regular fa-calendar-check"></i> Birth: ${HomePet.date_of_birth}</p>
            <p><i class="fa-solid fa-dollar-sign border-b-indigo-500"></i> Price: ${HomePet.price}</p>
            </div>

        
        `;
        cardContainer.appendChild(div);
    }
}



loadCategory();
loadAllCategory();