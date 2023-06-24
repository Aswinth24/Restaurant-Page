/**
<div class="menu-Page">
            <div class="item">
                <div class="img">
                    <img src="img/Biriyani.jpg" alt="">
                </div>
                <div class="content">
                    <h1>Chicken Briyani</h1>
                    <p>It is a layered rice dish made with Indian spices, rice,tomatoes,fried onion fresh herbs, and
                        Chicken, with or without egg.Served with onion raita.</p>
                    <span class="price">150.0 rupees</span>
                </div>

            </div>
            
        </div> 
 **/

const menu=function(name,content,img,price){
    this.name=name;
    this.content=content;
    this.img=img;
    this.price=price;
}
function createArray()
{
    const arr=[];
    arr.push(new menu('Chicken Briyani',`It is a layered rice dish made with Indian spices, rice,tomatoes,fried onion fresh herbs, and
     Chicken, with or without egg.Served with onion raita.`,`img/Biriyani.jpg`,'150 rupees'));

    arr.push(new menu("Chapati",`Chapatis are made of whole-wheat flour known as atta, mixed into dough with water,oil, salt
     in a mixing utensil called a parat, and are cooked on a tava.
    Served with Vellai Kurma,Green Peas Kurma,Pattani Kurma,Paneer.`,"img/food1.jpg","100 rupee")); 
    
    arr.push(new menu(`Chicken Curry`,`A typical curry from the Indian subcontinent consists of chicken stewed in an onion- and
    tomato-based sauce,flavoured with ginger, garlic, tomato puree, chilli peppers and a variety of spices, often
    including turmeric, cumin, coriander, cinnamon, and cardamom`,`img/food2.jpg`,`100 rupees`)); 
    
    arr.push(new menu(`Dhaba Paneer Curry`,`Made with combination of paneer cheese and a gravy consisting of butter, tomatoes, cashews,
    cream, green chili peppers, garam masala spices, cinnamon, cloves, cardamom, ginger, garlic, red chili
    powder, sugar,salt,turmeric, and fenugreek leaves`,`img/food3.jpg`,`30 rupees`)); 
    
    arr.push(new menu(`Doasa`,`A thin pancake in South Indian cuisine made from a fermented batter of ground black lentils and
    rice.Served With samabar and chutney.`,`img/food4.jpg`,`70 rupees`)); 
    
    arr.push(new menu(`Idli`,`A type of savoury rice cake, originating from South India, popular as a breakfast food in
    Southern India.Served With Sambar and chutney`,`img/food5.jpg`,`50 rupees`)); 
    
    arr.push(new menu(`Mutton biryani`,`Mutton biryani is the epitome of Indian cuisine, with layers of beautifully spiced mutton and
    tender grains of rice topped with coriander and fried onions. Serve with raita for a refreshing combination of
    heat and flavour.`,`img/food6.jpg`,`200 rupees`)); 
    
    arr.push(new menu(`Fish Curry`,`This Fish Curry is satisfying,nutritious and packed with a burst of Indian flavurs.
    Onion,tomatoes,spices and herbs enrich the taste and aroma of this Fish curry that is sure to
    delight the entire family.`,`img/food7.jpg`,`130 rupees`)); 
   
    arr.push(new menu(`Fried Fish`,`You can Chose with King Fish, Barracuda, or even Catla.All you do is take the salt, garam masala powder, turmeric powder, red chili powder, besan and
    ginger garlic paste`,`img/food8.jpg`,`120 rupees`));  
    return arr;

}
function loadMenu()
{
    const arr=createArray();
    const maincont=document.querySelector('#page-cont');
    
    const menuPage=document.createElement('div');
    menuPage.classList.add('menu-page');
    for(let i=0;i<arr.length;i++)
    {
        if(i%2==0)
        {
          menuPage.appendChild(leftBox(createItems(arr[i].name,arr[i].content,arr[i].img,arr[i].price)));
        }
        else
        {
          menuPage.appendChild(rightBox(createItems(arr[i].name,arr[i].content,arr[i].img,arr[i].price)));
        }
    }
    console.log(maincont);
    if(maincont!=null)
       maincont.appendChild(menuPage)

}

function rightBox(arr)
{
    const item=document.createElement('div');
    item.classList.add('item');
    item.appendChild(arr.contents);
    item.appendChild(arr.imgCont);
    return item;   
}
function leftBox(arr){
    const item=document.createElement('div');
    item.classList.add('item');
    item.appendChild(arr.imgCont);
    item.appendChild(arr.contents);
    return item;   
}
function createItems(name,content,imgLink,price)
{
    const imgCont=document.createElement('div');
    imgCont.classList.add('img');
    const img=document.createElement('img');
    img.src=imgLink;
    imgCont.appendChild(img);

    const contents=document.createElement('div');
    contents.classList.add('content');
    const h1=document.createElement('h1');
    h1.textContent=name;
    const p=document.createElement('p');
    p.textContent=content;
    const span=document.createElement('span');
    span.classList.add('price');
    span.textContent=price;
    

    contents.appendChild(h1);
    contents.appendChild(p);
    contents.appendChild(span);

   return {imgCont,contents};

}

export default loadMenu;