const products = [
  {
    id: '01',
    title: 'high-back bench',
    company: 'ikea',
    image:
      'images/01.jpg',
    price: 9.99,
  },
  {
    id: '02',
    title: 'albany table',
    company: 'marcos',
    image:
      'images/02.jpg',
    price: 79.99,
  },
  {
    id: '03',
    title: 'albany table',
    company: 'marcos',
    image:
      'images/03.jpg',
    price: 788.99,
  },
  {
    id: '04',
    title: 'albany table',
    company: 'marcos',
    image:
      'images/04.jpg',
    price: 1279.99,
  },
  {
    id: '05',
    title: 'accent chair',
    company: 'caressa',
    image:
      'images/05.jpg',
    price: 25.99,
  },
  {
    id: '06',
    title: 'wooden table',
    company: 'caressa',
    image:
      'images/06.jpg',
    price: 45.99,
  },
  {
    id: '07',
    title: 'dining table',
    company: 'caressa',
    image:
      'images/07.jpg',
    price: 6.99,
  },
  {
    id: '08',
    title: 'sofa set',
    company: 'liddy',
    image:
      'images/08.jpg',
    price: 69.99,
  },
  {
    id: '09',
    title: 'modern bookshelf',
    company: 'marcos',
    image:
      'images/09.jpg',
    price: 8.99,
  },
  {
    id: '10',
    title: 'emperor bed',
    company: 'liddy',
    image:
      'images/10.jpg',
    price: 21.99,
  },
  {
    id: '11',
    title: 'utopia sofa',
    company: 'marcos',
    image:
      'images/11.jpg',
    price: 39.95,
  },
  {
    id: '12',
    title: 'entertainment center',
    company: 'liddy',
    image:
      'images/12.jpg',
    price: 29.98,
  },
  {
    id: '13',
    title: 'albany sectional',
    company: 'ikea',
    image:
      'images/13.jpg',
    price: 10.99,
  },
  {
    id: '14',
    title: 'leather sofa',
    company: 'liddy',
    image:
      'images/14.jpg',
    price: 9.99,
  },
];


function displayData(f) {

  const menuitems = f.map(function (a) {

    return `  <article class="product">
          <img
            src="${a.image}"
            alt=""
          />
          <footer>
            <h4 class="product-name">${a.company}</h4>
            <h5 class="product-name">${a.title}</h5>
            <span class="product-price">${a.price}</span>
          </footer>
        </article>`

  })
  document.getElementById("products").innerHTML = menuitems.join(" ");


}
displayData(products);



// const  displaybuttons = products.map(function(a) {

//   return `<button class="company-btn" onclick="filterData('${a.company}')">${a.company}</button>`
// })

// document.getElementById("companies").innerHTML = displaybuttons.join(" ");

const uniqueCompanies = ['All', 'ikea', 'liddy', 'caressa', 'marcos'];

const displaybuttons = uniqueCompanies.map(function (company) {
  return `<button class="company-btn" onclick="filterData('${company}')">${company}</button>`;
});

document.getElementById("companies").innerHTML = displaybuttons.join(" ");


function filterData(companyName) {
  let filterItems = products.filter(function (a) {
    return a.company == companyName || companyName == "All";
  })

  displayData(filterItems);

}

function hightolow(){
  products.sort(function (a,b){
    if(a.price > b.price){
      return 1;
    }
    else{
      return -1;
    }
  })
  displayData(products);
}


function lowtohigh(){
   products.sort(function (a,b){
    if(a.price > b.price){
      return -1;
    }else{
      return 1;
    }
   })
   displayData(products);
}









