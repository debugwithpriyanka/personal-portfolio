export default function BackTop(){

return(

<button

className="
back-btn
"

onClick={()=>

window.scrollTo({

top:0,

behavior:"smooth"

})

}

>

↑

</button>

)

}