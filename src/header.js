/*
<header class="header">
            <div class="store-name">
                <h1>Food Paradise</h1>
            </div>
            <div class="nav">
                <ul class="nav-bar">
                    <li id="home" class="nav-con">Home</li>
                    <li id="menu" class="nav-con">Menu</li>
                    <li id="contact" class="nav-con">Contact</li>
                </ul>
            </div>
        </header>
*/
function loadHeader(){
  let mainContent=document.querySelector('body');

  const header=document.createElement('header');
  header.classList.add('header');

  const storeName=document.createElement('div');
  const h1=document.createElement('h1');
  h1.textContent='Food Paradise';
  storeName.appendChild(h1);
  header.appendChild(storeName);


  const nav=document.createElement('div');
  nav.classList.add('nav');
  const navBar=document.createElement('ul');
  navBar.classList.add('nav-bar');

  const arr=['Home','Menu','Contact'];

  for(let i=0;i<arr.length;i++)
  {
    const navCon=document.createElement('li');
    navCon.textContent=arr[i];
    navCon.setAttribute('id',arr[i].toLowerCase());
    navCon.classList.add('nav-con');
    navBar.appendChild(navCon);
  }
  nav.appendChild(navBar);
  
  header.appendChild(nav);

  mainContent.appendChild(header);


}
export default loadHeader;
