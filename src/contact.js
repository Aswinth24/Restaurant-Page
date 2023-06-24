function loadContacts()
{
    const maincont=document.querySelector('#page-cont');
    
    
    const contact=document.createElement('div');
    contact.classList.add('contact-page');
    const h1=document.createElement('h1');
    h1.textContent='Contact us';
    contact.appendChild(h1);

    const div=document.createElement('div');
    
    const mobile=document.createElement('p');
    mobile.textContent='📞 +91-XXXXXXXXXX';
    const email=document.createElement('p');
    email.textContent='✉️ aswinth24@gmail.com';
    const address=document.createElement('p');
    address.textContent='🏘️ no 4,abc road,xyz.600009'
    
    div.appendChild(mobile);
    div.appendChild(email);
    div.appendChild(address);
    contact.appendChild(div);

   const div1=document.createElement('div');
   div1.classList.add('timing');
   const timing1=document.createElement('div');

   const tp11=document.createElement('p');
   tp11.textContent='Monday - Friday';
   const tp12=document.createElement('p');
   tp12.textContent='8:00am - 11:30pm ';
   timing1.appendChild(tp11);
   timing1.appendChild(tp12);

   const timing2=document.createElement('div');
   const tp21=document.createElement('p');
   tp21.textContent='Saturday - Sunday';
   const tp22=document.createElement('p');
   tp22.textContent='9:00am - 10:30pm ';

   timing2.appendChild(tp21);
   timing2.appendChild(tp22);

   div1.appendChild(timing1);
   div1.appendChild(timing2);

   contact.appendChild(div1);

    if(maincont!=null)
      maincont.appendChild(contact);

}


export default loadContacts;