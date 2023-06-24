import loadHeader from './header';
import loadHome from './home';
import loadMenu from './menu';
import loadContacts from './contact';

function initialize()
{
    loadHeader();
    createpageContent();
    loadHome();
    changeTabs();
    
}
function changeTabs()
{
    const home=document.querySelector('#home');
    const menu=document.querySelector('#menu');
    const contact=document.querySelector('#contact');

    home.addEventListener('click',()=>{
       clearEverything();
       loadHome();
    });

    menu.addEventListener('click',()=>{
        clearEverything();
        loadMenu();
    })
    contact.addEventListener('click',()=>{
            clearEverything();
            loadContacts();
    })

    
}
function createpageContent()
{
    const mainCont=document.querySelector('body');
    const main=document.createElement('div');
    main.classList.add('page-cont');
    main.setAttribute('id','page-cont');
    mainCont.appendChild(main);
}
function clearEverything()
{
   const div=document.querySelector('#page-cont');
   let i=0;
   while(div.firstChild!=null)
   {
    div.removeChild(div.firstChild);

   }
}

export default initialize;