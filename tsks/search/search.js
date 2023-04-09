const url="https://fakestoreapi.com/products";
const node = document.getElementById("search");
node.addEventListener("keyup", ({key}) => {
    text=document.getElementById('search').value;
    text=text.toLowerCase().trim();
    getData(text);
})
products=[];
async function getData2(){
    const response= await fetch(url) ;
    const data=await response.json();
    for(j=0;j<data.length;j++){
        products[j]=data[j]
        const newdiv = document.createElement("div");
            newdiv.setAttribute("class","grid-container");
            newdivtemplate=
                `
                    <div class="item3">
                        <img src="${products[j].image}" width="160" height="130" alt="">
                    </div>
                    <div class="item35">
                        <span class="hed">${products[j].title}</span> <span class="price">${products[j].price}</span>
                        <p>${products[j].description}</p>
                        <br>
                        <span class="category">${products[j].category} <span class="arrowdown">&#8964</span></span>
                    </div>
                    <div class="item4">
                        <table class="tbl">
                            <tr>
                                <td>
                                    <span class="point">${products[j].rating.rate}</span>
                                    <span class="point"><img class="rate2" src="images/sentiment_satisfied_FILL0_wght400_GRAD0_opsz48.png" alt=""><span class="point2">Score</span></span>
                                </td>
                            </tr>
                            <tr>
                                <td><button class="infbutton">More Info</button></td>
                            </tr>
                            <tr>
                                <td class="comp">Compare prices</td>
                            </tr>
                        </table>
                    </div>
                `;
            newdiv.innerHTML=newdivtemplate;
            document.querySelector('#cards').appendChild(newdiv);
    }
}
function getData(text){
    const cards = document.getElementById("cards");
    cards.innerHTML = '';
    for(i=0;i<products.length;i++){
        if(products[i].title.toLowerCase().includes(text) || products[i].category==text || products[i].title==text){
            const newdiv = document.createElement("div");
            newdiv.setAttribute("class","grid-container");
            newdivtemplate=
                `
                    <div class="item3">
                        <img src="${products[i].image}" width="160" height="130" alt="">
                    </div>
                    <div class="item35">
                        <span class="hed">${products[i].title}</span> <span class="price">${products[i].price}</span>
                        <p>${products[i].description}</p>
                        <br>
                        <span class="category">${products[i].category} <span class="arrowdown">&#8964</span></span>
                    </div>
                    <div class="item4">
                        <table class="tbl">
                            <tr>
                                <td>
                                    <span class="point">${products[i].rating.rate}</span>
                                    <span class="point"><img class="rate2" src="images/sentiment_satisfied_FILL0_wght400_GRAD0_opsz48.png" alt=""><span class="point2">Score</span></span>
                                </td>
                            </tr>
                            <tr>
                                <td><button class="infbutton">More Info</button></td>
                            </tr>
                            <tr>
                                <td class="comp">Compare prices</td>
                            </tr>
                        </table>
                    </div>
                `;
            newdiv.innerHTML=newdivtemplate;
            document.querySelector('#cards').appendChild(newdiv);
        };
    }
};