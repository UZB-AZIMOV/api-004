const API__URL = "https://dummyjson.com"
const content = document.querySelector(".content")

async function fetchSingleData(api) {
    let query = new URLSearchParams(window.location.search)
    let id = query.get("id")
    //    console.log(query);
    let response = await fetch(`${api}/products/${id}`)
    response
        .json()
        .then(res => createContent(res))
        .catch(err => console.log(err))

}
fetchSingleData(API__URL)
function createContent(data) {
    content.innerHTML = `
     <div class="box">
     <div>
     <img width ="400" src= ${data.images[0]} alt="">
     </div>
     ${data.images.map((item) => (
        ` <img width="80" class="littel"  src=${item} alt=""></img>`
    ))
        }
     </div>
      <div class="theme">
      <h1 class ="title">${data.title}</h1>
      <p class ="rect">${data.description}</p>
               <div class="meta">
      <img class="code" src="${data.meta.qrCode}" alt="foto">
      <div class="creat">
      <p>${data.meta.createdAt}</p>
      <p>${data.id}</p>
  </div>
    </div>
 
   <a href="/royxar.html"> <button class ="now">Buy</button>
   </a>
      
      </div>
    
       
    `
}