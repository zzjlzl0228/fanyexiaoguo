var oBox = document.getElementById('box');
var oPage  = document.querySelector('.page');
var oPage2  = document.querySelector('.page2');
var oFront  = document.querySelector('.front');
var oBack  = document.querySelector('.back');
/* 定义一个变量iNow，这儿里是方便后续页面拉回与换图操作 */
var iNow = 0;
/* 这里定义一个变量，当页面点击后赋值成false,防止“麒麟臂”大神无限点击翻页。
判断当运动完成后赋值为true */
var bReady = true;
/* 给box加一个点击事件，进行翻页 */
oBox.onclick = function(evt){  
   /* 我们判断下，如果上次运动没结束就不能再开启新的运动，防止“撞车” */
   if(bReady == false) 
   return; 
   bReady = false;  
   /* 这里我们将iNow的值进行++，因为我们翻页了，所有图自然的就会加1 */
   iNow ++;   
   /* 设置翻页的运动时间运动形式等参数 */
   oPage.style.transition = '1s all ease'; 
   /* 翻页操作 */
   oPage.style.WebkitTransform = 'perspective(800px) rotateY(-180deg)'; 
   /* 这里说明一下“webkitTransitionEnd”为运动完成之后可触发的事件 */
   oPage.addEventListener('webkitTransitionEnd',function(){   
         /* 这里当运动完成后我们进行拉回操作，将page的运动时间等设置为none，
            并将翻页角度改为原来的0° */
         oPage.style.transition = 'none';      
         oPage.style.WebkitTransform = 'perspective(800px) rotateY(0deg)';   
         /* 下面我就行换图操作 */
         /* box的图为iNow%3,为啥模3呢，因为我们有三张图，如果你有八张图就模8 */
        oBox.style.background = 'url("img/'+  (iNow%6) +'.png") no-repeat';   
       oFront.style.background = 'url("img/'+  (iNow%6) +'.png") right top no-repeat';     
       /* 这里因为back和page2组合成同一张图，且他们比box和fron组合成的图永远多1，所以这里就是(iNow+1)%3 */   
       oBack.style.background = 'url("img/'+  ((iNow+1)%6) +'.png") left top no-repeat';       
       oPage2.style.background = 'url("img/'+  ((iNow+1)%6) +'.png") right top no-repeat';  
       /* 这里我们所有的运动都完成后就将bReady赋值 为true*/    
       bReady = true;  
  },false);
};