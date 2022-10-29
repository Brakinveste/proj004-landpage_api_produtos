

const prods = document.querySelector('#prods')

 

async function fetchApiData() {
    
    let apiPage
    const url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${apiPage}`
    const response = await fetch(url);

    const data = await response.json();

    console.log(data)

    data.products.map((prod) => {
        const div = document.createElement('div')
        div.className = 'prod_card'
        div.id = 'prod_card'
        const id = document.createElement('p')
        const descr = document.createElement('p')
        descr.className = 'decription'
        const name = document.createElement('h2')
        name.className = 'prod_name'
        const img = document.createElement('img')
        img.className = 'prod_pic'
        const oldPrice = document.createElement('div')
        oldPrice.className = 'prod_oldprice'
        const newPrice = document.createElement('h2')
        newPrice.className = 'prod_newprice'
        let parc = document.createElement('p')
        parc.className = 'parcelado'
        const link = document.createElement('a')
        link.className = 'btn_buy'

        

        name.innerText = prod.name;
        descr.innerText = prod.description;
        img.innerHTML = prod.image;
        oldPrice.innerText = `De ${prod.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
        newPrice.innerText = `Por ${prod.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
        parcx2 = prod.price / 2;
        parc.innerText = `ou 2x de ${parcx2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
       
        link.innerText = 'Comprar';
        link.setAttribute('href', `./prod.html?id=${prod.id}`);

        


        div.appendChild(img).src = `${prod.image}`;
        div.appendChild(name);
        div.appendChild(descr);
        div.appendChild(oldPrice);
        div.appendChild(newPrice);
        
        div.appendChild(parc);
        div.appendChild(link);
        prods.appendChild(div);

    });
}

fetchApiData(1)