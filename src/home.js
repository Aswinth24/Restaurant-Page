/*
<main class="main">

    <div class="content">
       <h1>Welcome to Food Paradise</h1>
	   <h4>To eat Authentic Indian Cuisine</h4>
	</div>
	<div class="container">
		<img src="food.jpg" alt="">
	</div>
   </main>
*/

function loadHome()
{
    let mainContent=document.querySelector('.page-cont');
    
    const main=document.createElement('main');
    main.classList.add('main');

    const content=document.createElement('div');
    content.classList.add('content');
    const h1=document.createElement('h1');
    h1.textContent='Welcome to Food Paradise';
    content.appendChild(h1);
    const h4=document.createElement('h4');
    h4.textContent='To eat Authentic Indian Cuisine';
    content.appendChild(h4);
    

    const container=document.createElement('div');
    container.classList.add('container');
    container.innerHTML=`
     <img src="img/food.jpg">
    `;
    main.appendChild(content);
    main.appendChild(container);

    mainContent.appendChild(main);

}
export default loadHome;