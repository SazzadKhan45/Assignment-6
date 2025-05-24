// loadCategory

const loadCategory = () =>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayCategoryBtn(data.categories))
};

// loadCategory data display

const displayCategoryBtn = (items) =>{
    // console.log(items);
    const loadBtn = document.getElementById('category-btn');
    for(const item of items){
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
    
}



loadCategory();