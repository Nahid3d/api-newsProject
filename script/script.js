const newsPortal = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`)
    const data = await res.json();
    const news = data.data.news_category;
    // console.log(news)
    const buttonContainer = document.getElementById('button-Container')
    data.data.news_category.forEach((item) => {
        // console.log(item);
        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick="loadNews('${item.category_id}')" class="btn">${item.category_name}</button>
        
        `;
        
        buttonContainer.appendChild(div);  
       
    });
}

// button click new news 
const loadNews = async (cid) => {
// console.log(cid)
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${cid}`)
    const data = await res.json();
    const allData = data.data;
    // console.log(allData)

    const newsContainer = document.getElementById('news-container')
    newsContainer.textContent = ' ';
    allData.forEach((item) =>{
      // console.log(item);
      const div = document.createElement('div')
      div.innerHTML = `

      <div class="card card-side bg-gray-100 shadow-xl ">
      <figure><img src="${item.image_url}" alt="Movie"/></figure>
      <div class="card-body">
        <div class="flex justify-between">
          <h2 class="card-title">${item.title}</h2>
        <div class="">
        ${item.rating.badge}
         <sup>${item.rating.number}</sup>
         
        </div>
        </div>

        <p>${item.details.slice(0,100)}</p>

      <div class="flex justify-around">
          <button class="btn btn-primary">
          details 
          </button>
          <div class="avatar flex ">
            <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="${item.thumbnail_url
              }" />
            </div>
            
          </div>
      </div>
      </div>

  </div>
      `;
      newsContainer.appendChild(div)
      
    })

}
 
loadNews('01');
newsPortal();