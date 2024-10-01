
function fetchData(){
    fetch("smartphone.json")
    .then(response=>response.json())
    .then(data=>{
        displayData(data)
    })
    .catch(error => console.error(error));
}
function displayData(data){
    const tablebody=document.querySelector('#t')

    data.forEach(element => {
        const row=document.createElement('tr')
        const id=document.createElement('td')
        id.textContent=element.id
        const brand=document.createElement('td')
        brand.textContent=element.brand
        const model=document.createElement('td')
        model.textContent=element.model
        const price=document.createElement('td')
        price.textContent=element.price
        row.appendChild(id)
        row.appendChild(brand)
        row.appendChild(model)
        row.appendChild(price)

        tablebody.appendChild(row)

    });
}


fetchData()