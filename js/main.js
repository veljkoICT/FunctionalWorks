window.onload = function(){
    slajder();
    ispisGalerija();  
    ispisNavList();
    ispisivanjeKlienata();
    ispisLanguages();
    ispisListaFooter();
    ispisddl();
    ispisSkils();
    var sadrzajFormNas1 = "<p>WANT TO START A PROJECT<i class='color-green'>?</i></p>";
    var formCenter = document.querySelector(".forma-center-t");
    var formaNaslov1 = document.createElement("div");
    formaNaslov1.setAttribute('class','forma-title-text1');
    formaNaslov1.innerHTML = sadrzajFormNas1;
    formCenter.appendChild(formaNaslov1);
    var sadrzajFormNas2 = "<p>It’s simple<i class='color-green'>!</i></p>";
    var formCenter=document.querySelector(".forma-center-t");
    var formaNaslov2=document.createElement("div");
    formaNaslov2.setAttribute('class','forma-title-text2');
    formaNaslov2.innerHTML = sadrzajFormNas2;
    formCenter.appendChild(formaNaslov2);
    var dugme = document.querySelector("#button");
    dugme.addEventListener("click",formaProvera);
}
var niz = [
    "url('pictures/slider1.jpg')",
    //"url('pictures/slider2.jpg')",
    "url('pictures/slider3.jpg')",
    "url('pictures/slider4.jpg')"
    //"url('pictures/slider5.jpg')"
];
var slajderBrojac = 0;
function slajder(){  
        var krugovi = document.getElementsByClassName("circle");    
        krugovi[0].addEventListener("click",function(){
        slajderBrojac = 0;       
        document.getElementById("main_header").style.backgroundImage = niz[slajderBrojac];     
    })
        krugovi[1].addEventListener("click",function(){
        slajderBrojac = 1;
        document.getElementById("main_header").style.backgroundImage = niz[slajderBrojac];      
    })
        krugovi[2].addEventListener("click",function(){
        slajderBrojac = 2;
        document.getElementById("main_header").style.backgroundImage = niz[slajderBrojac];      
    }) 
    document.getElementById("main_header").style.backgroundImage = niz[slajderBrojac];
    slajderBrojac++;
    if(slajderBrojac == 3){
        slajderBrojac = 0;
    }
    setTimeout("slajder()", 10000);
}
var nizGalerija = [
    "url('pictures/1.jpg')",
    "url('pictures/2.jpg')",
    "url('pictures/3.jpg')",
    "url('pictures/4.jpg')",
    "url('pictures/5.jpg')",
    "url('pictures/6.jpg')",
    "url('pictures/7.jpg')",
    "url('pictures/8.jpg')"
]
var brojacGalerija = 1;
var galerijaBox = document.querySelectorAll(".gallery-box");
function ispisGalerija(){   
        for(var i = 0; i < galerijaBox.length; i++){
            galerijaBox[i].style.backgroundImage = "url('pictures/" + (brojacGalerija++) + ".jpg')";
        }
}
var navList = [
    '<a href="#info">WHO WE ARE</a>',
    '<a href="#languages">WHAT WE DO</a>',
    '<a href="#gallery">GALLERY</a>',
    '<a href="#forma">CONTACT</a>'
] 
var divForList = document.querySelector('#nav_list');
var sadrzajDivList = '';
var brojli = 0;
function ispisNavList(){
    sadrzajDivList += "<ul id='list_ul'>";
    for(var i = 0; i < navList.length; i++){
        sadrzajDivList += "<li id='li-nav" + (brojli++) + "'>"+navList[i]+ "<div class='efect'></div></li>";
    }
    sadrzajDivList += "</ul>";
    divForList.innerHTML = sadrzajDivList;
}
var nizClients1 = [
    '<img src="pictures/Capture.PNG" alt="klient1"/>',
    '<img src="pictures/2.PNG" alt="klient2"/>',
    '<img src="pictures/3.PNG" alt="klient3"/>',
    '<img src="pictures/4.PNG" alt="klient4"/>',
    '<img src="pictures/5.PNG" alt="klient5"/>'
]
var nizClients2 = [
    '<img src="pictures/6.PNG" alt="klient6"/>',
    '<img src="pictures/7.PNG" alt="klient7"/>',
    '<img src="pictures/8.PNG" alt="klient8"/>',
    '<img src="pictures/9.PNG" alt="klient9"/>'
]
var rowClient = document.getElementsByClassName('clients_row');
 var sadrzajKlent1 = "";
 var sadrzajKlent2 = "";
function ispisivanjeKlienata(){
    for(var i = 0; i < nizClients1.length; i++){
        sadrzajKlent1 += "<div class='row'>" + nizClients1[i] + "</div>"
    }
    rowClient[0].innerHTML = sadrzajKlent1;
    for(var i = 0; i < nizClients2.length; i++){
        sadrzajKlent2 += "<div class='row'>" + nizClients2[i] + "</div>"
    }
    rowClient[1].innerHTML = sadrzajKlent2;
}
var nizLanguages1 = [
    ' <img src="pictures/HTML5_1Color_White.png" alt="html">',
    '<img src="pictures/css31.png" alt="css">',
    ' <img src="pictures/nodejs-development-3.png" alt="js">'
]
var nizLanguages2 = [
    '<img src="pictures/c-sharp-595e5038ff0f7afd99cf3b41768aba67.png" alt="c-sharp"> ',
    '<img src="pictures/python.png" alt="pajton"> ',
    '<img src="pictures/slider-logo.png" alt="logo">'
]
var rowLanguges1 = document.querySelector('.blocks1');
var sadrzajRow1 = "";
var rowLanguges2 = document.querySelector('.blocks2');
var sadrzajRow2 = '';
function ispisLanguages(){
    for(var i = 0; i < nizLanguages1.length; i++){
        sadrzajRow1 += "<div class='blocks_language' data-aos='fade-up' data-aos-duration='5000' >" + nizLanguages1[i] + "</div>"
    }
    rowLanguges1.innerHTML = sadrzajRow1;
    for(var i = 0; i < nizLanguages2.length; i++){
        sadrzajRow2 += "<div class='blocks_language' data-aos='fade-up' data-aos-duration='5000' >" + nizLanguages2[i] + "</div>"
    }
    rowLanguges2.innerHTML = sadrzajRow2;
}
var nizListaf1 = [
    'SRB:+381 25551444',
    'UK:­+44 (20) 7712 1502',
    'functionwork&commat;gmail.com',
    'Moše Pijade 8a'
]
var nizListaf2 = [
    'About Function work',
    '<a href="sitemap.xml">Sitemap</a>',
    '<a href="robots.txt">Robots</a>',
    '<a href="dokumentacija.pdf">Doc</a>'
]
var nizListaf3 = [
    'Web and Enterprise Portals',
    'Ecommerce',
    'Content and Document Management',
    'Social Networking',
    'Big Data and Business Intelligence',
    'Computer Vision',
    'Elearning',
    'Artificial Intelligence'
    
]
var nizListaf4 = [
    'Custom Software Development',
    'Web Application Development',
    'Mobile Application Development',
    'Application Integration',
    'Application Security',
    'QA and Testing',
    'Maintenance and Support',
    'Dedicated Teams'
]
var nizListaf5 = [
    '.NET',
    'Java',
    'Ruby on Rails',
    'Python',
    'Frontend',
    'Backend',
    'Mobile Platforms'
]
var blocklista1 = document.querySelectorAll(".block-body");
var ispisblocklista1 = "";
var ispisblocklista2 = "";
var ispisblocklista3 = "";
var ispisblocklista4 = "";
function ispisListaFooter(){
    ispisblocklista1 += "<ul id='first-ul'>";
    for(var i = 0;i < nizListaf1.length; i++){
        ispisblocklista1 += "<li>" + nizListaf1[i] + "</li>";
    }
    ispisblocklista1 += "</ul>"  
    ispisblocklista1 += "<ul id='first-ul-2'>";  
    for(var x = 0;x < nizListaf2.length; x++){
        ispisblocklista1 += "<li>" + nizListaf2[x] + "</li>";       
    }   
    ispisblocklista1 += "</ul>";
   blocklista1[0].innerHTML = ispisblocklista1;
   ispisblocklista2 += "<ul id='second-ul'>";
   for(var i = 0; i < nizListaf3.length; i++){
        ispisblocklista2 += "<li>" + nizListaf3[i] + "</li>";
    }
    ispisblocklista2 += "</ul>";
    blocklista1[1].innerHTML = ispisblocklista2;
    ispisblocklista3 += "<ul id='third-ul'>";
    for(var i = 0; i < nizListaf4.length; i++){
        ispisblocklista3 += "<li>" + nizListaf4[i] + "</li>";
    }
    ispisblocklista3 += "</ul>";
    blocklista1[2].innerHTML = ispisblocklista3;
    ispisblocklista4 += "<ul id='fourth-ul'>";
    for(var z = 0; z < nizListaf5.length; z++){
        ispisblocklista4 += "<li>" + nizListaf5[z] + "</li>";
    }
    ispisblocklista4 += "</ul>";
    blocklista1[3].innerHTML = ispisblocklista4;
}
var nizZemlje = [
    
    'Srbija',
    'Crna Gora',
    'Bosna',
    'Hrvatska',
    'Makedonija'
]
function ispisddl(){
    var ubacivanje = document.getElementById("zemlja");
    var ispis = "<select id='countryName'>";
    ispis+= "<option value='0'>Izaberite</option>"
    for(var i = 0; i < nizZemlje.length; i++){
        ispis += "<option value='" + nizZemlje[i] + "'>" + nizZemlje[i] + "</option>";
    }
    ispis += "</select>";
    ubacivanje.innerHTML += ispis;
}

function formaProvera(){
    proveraIme();
    proveraKompanije();
    proveraTelefon();
    proveraMejl();
    proveraTxtArea();
    proveraDdl();
}
function proveraIme(){
    var tbxIme = document.querySelector("#fullName");
    var regIme = /^[A-Z][a-z]{3,15}\s[A-Z][a-z]{3,15}(\s[A-Z][a-z]{3,15})*$/;
    
    if(tbxIme.value.trim() == ""){
        tbxIme.classList.add('eror');
    }
    else if(!regIme.test(tbxIme.value)){
        tbxIme.classList.add('eror');
    }else{
        tbxIme.classList.remove('eror');
    }
}
function proveraKompanije(){
    var tbxKompanija = document.querySelector("#companyName");
    var regKompanije = /^[A-Z][a-z]{3,15}(\s[A-Za-z]{1,15})*$/;

    if(!regKompanije.test(tbxKompanija.value)){
        tbxKompanija.classList.add("eror");
    }else{
        tbxKompanija.classList.remove("eror");
    }
}
function proveraTelefon(){
    var tbxTelefon = document.querySelector("#phoneNumber");
    var regTelefon = /^\d{8,12}$/
    if(!regTelefon.test(tbxTelefon.value)){
        tbxTelefon.classList.add("eror");
    }else{
        tbxTelefon.classList.remove("eror");
    }
}
function proveraMejl(){
    var tbxEmail = document.querySelector("#Email");
    regMejl = /^(\w|\d)\S*@\S+\.(\w|\d){2,}$/;

    if(!regMejl.test(tbxEmail.value)){
        tbxEmail.classList.add("eror");
    }
    else{
        tbxEmail.classList.remove("eror");
    }
}
function proveraTxtArea(){
    var txtArea = document.querySelector("#txtArea");
    if(txtArea.value == ""){
        txtArea.classList.add("classeror");
    }else{
        txtArea.classList.remove("classeror");
    }
}
function proveraDdl(){
    if(countryName.options[countryName.selectedIndex].value == "0"){
        countryName.style.outline="2px solid red";
    }else{
        countryName.style.outline="none";
    }
}
var skils = document.getElementById("skils");
var skilVredmsptiNiza = [
    '<p>HTML 5</p>',
    '<p>CSS 3</p>',
    '<p>SASS</p>',
    '<p>JavaScript</p>',
    '<p>SQL</p>'
]
var skilsadrzaj = "";
function ispisSkils(){
   for(var i = 0; i < skilVredmsptiNiza.length; i++){
        skilsadrzaj += "<div class='skils-block'>" + skilVredmsptiNiza[i] + "</div>"
   }
   skils.innerHTML = skilsadrzaj;
}
