let login = document.querySelector("#right1");
console.log(login);
let particularUser = JSON.parse(localStorage.getItem("particularUser"));
console.log(particularUser);
let maleCont = document.querySelector("#maleCont");
// console.log(maleCont);
let femaleCont = document.querySelector("#femaleCont");
// console.log(maleCont, femaleCont);
let kidsCont = document.querySelector("#kidsCont");
// console.log(maleCont, femaleCont, kidsCont);
let electCount = document.querySelector("#ElectCont");
console.log(maleCont, femaleCont, kidsCont, electCount);
let popup = document.querySelector("#popup");
let x = document.querySelector("#x");
let dynamic = document.querySelector("#dynamic");
console.log(dynamic);
let cartStorage = [];

x.addEventListener("click", () => {
    popup.style.right = "-100%";
})


if (particularUser) {
    login.innerHTML = `<span>${particularUser.first}</span>
    <a href="./ecommerce.html" id="logout"><button>logout</button></a>`;

    let logout = document.querySelector("#logout");
    logout.addEventListener("click", () => {
        localStorage.removeItem("particularUser");
    });
}

async function fetchData() {
    let dataFromInternet = await fetch("https://www.shoppersstack.com/shopping/products/alpha")
    let allData = await dataFromInternet.json();
    console.log(dataFromInternet);
    console.log(allData.data);

    let maleData = allData.data.filter((e) => {
        if (e.category == "men") {
            return e;
        }
    });

    console.log(maleData);

    maleData.map((e) => {
        maleCont.innerHTML += `<div id="${e.productId}">
                    <img src="${e.productImageURLs[0]}" alt="">
                    <h2>${e.name}</h2>
                    <h3>${e.price}</h3>
                    <h4>${e.rating}</h4>
                    <button class="btn">Add to Cart</button>
                </div>`;
    })

    let femaleData = allData.data.filter((e) => {
        if (e.category == "women") {
            return e;
        }
    });
    console.log(femaleData);

    femaleData.map((e) => {
        femaleCont.innerHTML += `<div id="${e.productId}">
                    <img src="${e.productImageURLs[0]}" alt="">
                    <h2>${e.name}</h2>
                    <h3>${e.price}</h3>
                    <h4>${e.rating}</h4>
                    <button class="btn">Add to Cart</button>
                </div>`;
    })

    let kidsData = allData.data.filter((e) => {
        if (e.category == "kids") {
            return e;
        }
    });
    console.log(kidsData);

    kidsData.map((e) => {
        kidsCont.innerHTML += `<div id="${e.productId}">
                    <img src="${e.productImageURLs[0]}" alt="">
                    <h2>${e.name}</h2>
                    <h3>${e.price}</h3>
                    <h4>${e.rating}</h4>
                    <button class="btn">Add to Cart</button>
                </div>`;
    })

    let electData = allData.data.filter((e) => {
        if (e.category == "electronics") {
            return e;
        }
    })
    console.log(electData);

    electData.map((e) => {
        electCount.innerHTML += `<div id="${e.productId}">
                        <img src="${e.productImageURLs[0]}" alt="">
                        <h2>${e.brand}</h2>
                        <h3>${e.price}</h3>
                        <h4>${e.rating}</h4>
                        <button class="btn">Add to Cart</button>
                    </div>`;

    })

    //     let btn = document.querySelectorAll(".btn");
    //     // console.log(btn);
    //     btn.forEach((e) => {
    //         e.addEventListener("click", () => {
    //             popup.style.right = "0";
    //             if (particularUser) {
    //                 let parentElement = e.parentElement.id;
    //                 console.log(parentElement);
    //                 let oneProduct = allData.data.find((e) => {
    //                     if (e.productId == parentElement) {
    //                         return e
    //                     }
    //                 })
    //                 console.log(oneProduct);
    //                 cartStorage.push(oneProduct)
    //                 console.log(cartStorage);
    //                 dynamic.innerHTML = "";
    //                 cartStorage.map((e) => {
    //                     dynamic.innerHTML += `<div class="cartDesign" id="${e.productId}">

    //                     <div>
    //                         <img src="${e.productImageURLs[0]}" alt="image">
    //                     </div>

    //                     <div>
    //                         <h3>${e.name}</h3>
    //                         <input type="number">
    //                     </div>

    //                     <div>
    //                         <h4>${e.price}</h4>
    //                     </div>

    //                     <div>
    //                         <h4>${e.price}</h4>
    //                     </div>
    //                 </div>`
    //                 })
    //             }
    //             else {
    //                 dynamic.innerHTML = `<a href="./login1.html">Login First</a>`
    //             }
    //         });
    //     });

    // }
    // fetchData();

    let btn = document.querySelectorAll(".btn");
    btn.forEach((e) => {
        e.addEventListener("click", () => {
            console.log(e)
            popup.style.right = "0"
            if (particularUser) {
                let parentElement = e.parentElement.id
                console.log(parentElement)
                let oneProduct = allData.data.find((e) => {
                    if (e.productId == parentElement) {
                        return e
                    }
                })
                console.log(oneProduct)
                cartStorage.push(oneProduct)
                console.log(cartStorage)
                // dynamic.innerHTML ="";
                // cartStorage.map((e)=>{
                //     dynamic.innerHTML += `<div class="cart-design" id="${e.productId}">
                //     <div>
                //         <img src="${e.productImageURLs[0]}" alt="">
                //     </div>
                //     <div>
                //         <h3>${e.name}</h3>
                //         <input type="number">
                //     </div>
                //     <div>
                //         <h4 class="price">${e.price}</h4>
                //     </div>
                //     <div>
                //         <h4 class = "sub">${e.price}</h4>
                //         <i class = "fa-sharp fa-solid fa-trash"></i>
                //     </div>
                // </div>`
                // });
                print()

                // let sub = document.querySelectorAll(".sub")
                // console.log(sub);

                // let quantity = document.querySelectorAll("input");
                // quantity.forEach((e)=>{
                //     e.addEventListener("input",()=>{
                //         if (e.value < 1){
                //             e.value = 1
                //         }
                //         let parentElement = e.parentElement.parentElement;
                //         let price = parentElement.querySelector(".price");
                //         let sub = parentElement.querySelector(".sub")


                //         sub.innerHTML = e.value * price.innerHTML;
                //         console.log(parentElement)
                //     });
                // });

                // let trash = document.querySelectorAll(".fa-trash");
                // trash.forEach((e)=>{
                //     e.addEventListener("click",()=>{
                //         let parentElement = e.parentElement.parentElement;
                //         console.log(parentElement);
                //         cartStorage = cartStorage.filter((e)=>{
                //             if(parentElement.id != e.productId){
                //                 return e
                //             }
                //         });
                //         console.log(cartStorage)
                //     });
                // })
                subtotal()
                del()
                GrandTotal()
            }
            else {
                dynamic.innerHTML = `<a href = "./login1.html">login first</a>`
            }
        })
    })
}
fetchData();

function print() {
    dynamic.innerHTML = "";
    cartStorage.map((e) => {
        dynamic.innerHTML += `<div class="cart-design" id="${e.productId}">
                <div>
                    <img src="${e.productImageURLs[0]}" alt="">
                </div>
                <div>
                    <h3>${e.name}</h3>
                    <input type="number">
                </div>
                <div>
                    <h4 class="price">${e.price}</h4>
                </div>
                <div>
                    <h4 class = "sub">${e.price}</h4>
                    <i class = "fa-sharp fa-solid fa-trash"></i>
                </div>
            </div>`
    });
    del()
}


function del() {
    let trash = document.querySelectorAll(".fa-trash");
    trash.forEach((e) => {
        e.addEventListener("click", () => {
            let parentElement = e.parentElement.parentElement;
            console.log(parentElement);
            cartStorage = cartStorage.filter((e) => {
                if (parentElement.id != e.productId) {
                    return e
                }
            });
            print()
            GrandTotal()
        });
    })
}


function subtotal() {
    let sub = document.querySelectorAll(".sub")
    console.log(sub);

    let quantity = document.querySelectorAll("input");
    quantity.forEach((e) => {
        e.addEventListener("input", () => {
            if (e.value < 1) {
                e.value = 1
            }
            let parentElement = e.parentElement.parentElement;
            let price = parentElement.querySelector(".price");
            let sub = parentElement.querySelector(".sub")


            sub.innerHTML = e.value * price.innerHTML;
            GrandTotal()
        });
    });
}


function GrandTotal() {
    let gt = document.querySelector("#gt");
    let sub = document.querySelectorAll(".sub");
    let sum = 0;
    sub.forEach((e) => {
        let total = parseInt(e.innerHTML);
        sum = sum + total;
    })
    gt.innerHTML = sum;
}