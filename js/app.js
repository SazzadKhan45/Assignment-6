// loadCategory all data 

const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayCategoryBtn(data.categories))
};

// loadCategory data display by button 

const displayCategoryBtn = (items) => {
    // console.log(items);
    const loadBtn = document.getElementById('category-btn');
    for (const item of items) {
        // console.log(item); 
        const div = document.createElement('div');
        div.classList = ""
        div.innerHTML = `
            <button id="category-btn-${item.petId}" onclick="clickCategoryButton(${item.petId})" class ="btn py-6 md:px-8 rounded-lg">
                <div class= "flex items-center gap-2">
                    <img class ="h-[15px] md:h-[30px] md:w-[30px]" src = ${item.category_icon} />
                    <h2 class = "md:text-lg font-bold">${item.category}</h2>
                </div>
            </button>
            
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
    const sideImageShow = document.getElementById('side-like-image');
    for (const HomePet of allPets) {
        // console.log(HomePet);

        const div = document.createElement('div');
        div.classList = "bg-gray-100 p-4 rounded w-full";
        div.innerHTML = `
            <img class ="rounded-lg w-full md:h-[200px] lg:h-[300px]" src = "${HomePet.image}" class = ""/>
            <h4 class = "text-lg font-bold mt-4">${HomePet.category}</h4>
            <div class ="py-4 text-gray-700">
                <p><i class="fa-brands fa-slack"></i> Breed: ${HomePet.breed}</p>
                <p class = "py-2"><i class="fa-regular fa-calendar-check"></i> Birth: ${HomePet.date_of_birth}</p>
            <p><i class="fa-solid fa-dollar-sign mb-5"></i> Price: ${HomePet.price}</p>
            <hr/>
            </div>
            <div class = "flex justify-between">
                <button class ="btn px-4" id = "bvc"><i class="fa-regular fa-thumbs-up"></i></button>
                <button class ="btn px-4 text-green-800">Adopt</button>
                <button class ="btn px-4 text-green-800">Details</button>
            </div>  
        `;
        cardContainer.appendChild(div);
        // craete function side image show
        const clickLikeBtn = () => {
            const ocClick = document.getElementById('bvc');
            console.log(ocClick);
        }
    };
}



loadCategory();
loadAllCategory();