let _flag = 1
let _showM = document.querySelector('.showM')
let _pages = document.querySelector('.pages')
let _newsP = document.querySelector('.news')


let _menuShow = document.querySelector(".hamburgerMenu").clientHeight
let _tournament = document.querySelector(".tournament").clientHeight
let _pageShow = document.querySelector(".pageShow").clientHeight
let _nwesShow = document.querySelector(".nwesShow").clientHeight
document.querySelector(".hamburgerMenu").style.height =0
document.querySelector(".tournament").style.height = 0
document.querySelector(".pageShow").style.height = 0
document.querySelector(".nwesShow").style.height = 0
function drabMenu(self){
    let  _sp = self.children

    if(_flag % 2){
       _sp[0].style.transform='rotate(-28deg)'
        _sp[1].style.opacity = '0' 
       _sp[2].style.transform='rotate(28deg)'
        document.querySelector(".hamburgerMenu").style.height =_menuShow+"px"

    } else{
       _sp[0].style.transform='rotate(0)'

        _sp[1].style.opacity = '1' 
       _sp[2].style.transform='rotate(0)'
      document.querySelector(".hamburgerMenu").style.height=0
      document.querySelector(".tournament").style.height=0
    }
    _flag++
}



 let x = 0
let y = 0
//let cb = document.getElementsByClassName('c-b')[0]
let cs = document.getElementsByClassName('c-s')[0]
document.getElementById('main').addEventListener('mousemove', function(event){
    x = event.clientX
    y = event.clientY
   

    cs.style.top=y+'px'
    cs.style.left=x+'px'
})


    _showM.addEventListener("mouseover", () => {
        document.querySelector(".tournament").style.height =_tournament+"px"
      
    })
    _showM.addEventListener("mouseleave", () => {
        document.querySelector(".tournament").style.height =0
      
    })

    _pages.addEventListener("mouseover", () => {
        document.querySelector(".pageShow").style.height =_pageShow+"px"
        document.querySelector(".pageShow").style. opacity= '1';
      
    })
    _pages.addEventListener("mouseleave", () => {
        document.querySelector(".pageShow").style.height =0
      
    })
    _newsP.addEventListener("mouseover", () => {
        document.querySelector(".nwesShow").style.height =_nwesShow+"px"
      
    })
  _newsP.addEventListener("mouseleave", () => {
        document.querySelector(".nwesShow").style.height =0
      
    })
 
/// aside start
    function aside( ){
        document.getElementById("aside").style.transform = 'translateX(0)'
    }

    function _close(){
        document.getElementById("aside").style.transform = 'translateX(100%)'
    }

    ///alider 



     function img(e){
           _get = e.children
   
            _get = _get[0].getAttribute('src')
          
            document.getElementById('window').setAttribute('src', _get)
     }