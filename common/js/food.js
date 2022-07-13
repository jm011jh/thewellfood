async function createNode() {
    var jsonData = new Promise(function (resolve, reject) {
        var jsonData = JSON.parse(JSON.stringify(ProdBulk))
        resolve(ProdBulk)
    })
    try {
        var Product = await ProdBulk;
        
        const bulkLength = Object.keys(Product.bulk).length;
        const prodListEl = document.getElementById("prodList")
        const popup = document.getElementById("popup")

        //create popup
        let ppContainerEl = document.createElement("div")
        let pplistEl = document.createElement("ul")
        ppContainerEl.classList.add("food--popup")
        ppContainerEl.appendChild(pplistEl)
        popup.appendChild(ppContainerEl)

        for (i = 0; i < bulkLength; i++) {
            let bulkNum = Object.keys(Product.bulk)[i];
            let index = i;
            // make li-element and hover-filter
            let li = document.createElement("li");
            li.setAttribute("popup-thumb-number",index)
            li.classList.add("init")
            li.style.cssText = `transition-delay:${i/10}s`
            
            li.addEventListener("click",function(){
                var pp = document.querySelectorAll(".food--popup ul li");
                for(j = 0; j < pp.length; j++) {
                    pp[j].classList.remove("show")
                }
                pp[index].classList.add("show")
                popup.classList.add("show")
            })

            let imgEl = document.createElement("img");
            imgEl.setAttribute("src",`/common/image/${bulkNum}.png`)

            let filterEl = document.createElement("div");
            filterEl.classList.add("filter")

            let filterNameEl = document.createElement("p");
            filterNameEl.innerHTML = Product.bulk[bulkNum].name

            filterEl.appendChild(filterNameEl)
            li.appendChild(filterEl)
            li.appendChild(imgEl)
            prodListEl.appendChild(li)

            //make popup-list
            let prodName = Product.bulk[bulkNum].name;
            let prodBrand = Product.bulk[bulkNum].brand;
            let prodSave = Product.bulk[bulkNum].save;
            let prodDate = Product.bulk[bulkNum].date;
            let prodExp = Product.bulk[bulkNum].exp;
            let prodMaterial = Product.bulk[bulkNum].material;
            
            let ppImgBoxEl = document.createElement("div")
                ppImgBoxEl.classList.add("food--popup-imgBox")
            let ppTextBoxEl = document.createElement("div")
                ppTextBoxEl.classList.add("public--text2","food--popup-textBox","bold")
            let ppText1 = document.createElement("p")
                ppText1.classList.add("public--text1")
                ppText1.innerHTML = prodName;
                ppTextBoxEl.appendChild(ppText1)
            let ppText2 = document.createElement("p")
                ppText2.innerHTML = `<span class="black3">브랜드 </span>${prodBrand} ㅣ <span class="black3">보관 </span>${prodSave} ㅣ <span class="black3">유통기한 </span>${prodDate}`
                ppTextBoxEl.appendChild(ppText2)
            let ppText3 = document.createElement("p")
                ppText3.classList.add("black3")
                ppText3.innerHTML = `특징`
                ppTextBoxEl.appendChild(ppText3)
            let ppText4 = document.createElement("p")
                ppText4.innerHTML = prodExp
                ppTextBoxEl.appendChild(ppText4)
            let ppText5 = document.createElement("p")
                ppText5.classList.add("black3")
                ppText5.innerHTML = `원재료`
                ppTextBoxEl.appendChild(ppText5)
            let ppText6 = document.createElement("p")
                ppText6.innerHTML = prodMaterial;
                ppTextBoxEl.appendChild(ppText6)
            let ppImgEl = document.createElement("img")
                ppImgEl.setAttribute("src",`/common/image/${bulkNum}.png`)
                ppImgBoxEl.appendChild(ppImgEl)

            let ppCloseBtn = document.createElement("button")
            let ppCloseBtnSpan1 = document.createElement("span")
            let ppCloseBtnSpan2 = document.createElement("span")
                ppCloseBtn.appendChild(ppCloseBtnSpan1)
                ppCloseBtn.appendChild(ppCloseBtnSpan2)
                ppCloseBtn.addEventListener("click",function(){
                    popup.classList.remove("show")
                })
                

            let ppLi = document.createElement("li")
                ppLi.setAttribute("popup-number",i)
                ppLi.appendChild(ppImgBoxEl)
                ppLi.appendChild(ppTextBoxEl)
                ppLi.appendChild(ppCloseBtn)
                pplistEl.appendChild(ppLi)
        }
    } catch {
        console.log("load failed")
    }
}
createNode()