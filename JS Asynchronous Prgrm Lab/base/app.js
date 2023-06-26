async function solve() {

    let url = `http://localhost:3030/jsonstore/cookbook/recipes`;

    let response = await fetch(url);
    let data = await response.json();
    let main = document.getElementsByTagName('main')[0];
    for(let info of Object.values(data)) {
        // console.log(info);
        let article = document.createElement('article');
        article.classList.add('preview');
        let divTitle = document.createElement('div');
        divTitle.classList.add('title');
        let h2Title = document.createElement('h2');
        h2Title.textContent = info.name;
        let divSmall = document.createElement('div');
        divSmall.classList.add('small');
        let img = document.createElement('img');
        img.src = info.img;

        divTitle.appendChild(h2Title);
        divSmall.appendChild(img);
        article.appendChild(divTitle);
        article.appendChild(divSmall);
        main.appendChild(article);



        let article2 = elFactory('article');
        let h2Title2 = elFactory('h2');
        h2Title2.textContent = info.name;
        let divBand = elFactory('div','band');
        let divThumb = elFactory('div','thumb');
        let img2 = document.createElement('img');
        img2.src = info.img;
        divThumb.appendChild(img2);
        let divIngredients = elFactory('div','ingredients');
        let h3Ingredients = elFactory('h3',undefined,'Ingredients:');
        let ul = elFactory('ul');
        divIngredients.appendChild(h3Ingredients)

        let url2 = `http://localhost:3030/jsonstore/cookbook/details/${info._id}`;
        let response2 = await fetch(url2);
        let data2 = await response2.json();

        for(let ingredient of Object.values(data2.ingredients)) {

            let li = document.createElement('li');
            li.textContent = ingredient;
            ul.appendChild(li);
        }
        divIngredients.appendChild(ul);

        let divDescription = elFactory('div','description');
        let h3Prep = elFactory('h3',undefined,'Preparation:');
        divDescription.appendChild(h3Prep);
        for(let step of Object.values(data2.steps)) {
            let p = document.createElement('p');
            p.textContent = step;
            divDescription.appendChild(p);
        }

        divBand.appendChild(divThumb);
        divBand.appendChild(divIngredients);

        article2.appendChild(h2Title2);
        article2.appendChild(divBand);
        article2.appendChild(divDescription);
        article.appendChild(article2);

        article2.classList.add('hide');


        article.addEventListener('click', moreInfo);

    }


    function moreInfo(e) {

        if(e.currentTarget.querySelector('.small').classList.contains('hide')) {

            e.currentTarget.querySelector('.small').classList.remove('hide');
            e.currentTarget.querySelector('.title').classList.remove('hide');
            e.currentTarget.querySelector('article').classList.add('hide')
        } else {
        e.currentTarget.querySelector('.small').classList.add('hide');
        e.currentTarget.querySelector('.title').classList.add('hide');
        e.currentTarget.querySelector('article').classList.remove('hide')
    }
    }



}
function elFactory(type, clas, text) {
    const el = document.createElement(type)
  
    if(text) {
        el.textContent = text;
    }
    if(clas) {
        el.classList.add(clas);
    }
  
    return el
  }



solve();