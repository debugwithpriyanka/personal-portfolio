const journey=[

{
year:"2025",
title:"Started Development",

desc:
"Began learning programming and web development."
},

{
year:"2025",
title:"Built AI Projects",

desc:
"Created chatbot and automation projects."
},

{
year:"2026",
title:"Portfolio Launch",

desc:
"Designed and deployed professional portfolio."
},

{
year:"Next",

title:"Cloud + Full Stack",

desc:
"Growing into scalable systems and AI."
}

]

export default function Journey(){

return(

<section
className="section"
data-aos="fade-left"
>

<h1
className="
display-3
fw-bold
mb-5
"
>

Journey

</h1>

<div
className="
timeline
"
>

{

journey.map(
(
item,
index
)=>(

<div
key={index}
className="
timeline-item
"
>

<h2>

{item.year}

</h2>

<h3>

{item.title}

</h3>

<p>

{item.desc}

</p>

</div>

)

)

}

</div>

</section>

)

}