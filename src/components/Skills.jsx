const skills={

Frontend:[
"React",
"HTML",
"CSS",
"Bootstrap",
"JavaScript"
],

Backend:[
"Python",
"Flask",
"Node.js"
],

Tools:[
"Git",
"GitHub",
"VS Code",
"Ollama"
],

Learning:[
"AWS",
"Docker",
"AI/ML"
]

}

export default function Skills(){

return(

<section
id="skills"
className="section"
data-aos="fade-up"
>

<h1
className="
display-3
fw-bold
mb-5
"
>

Tech Stack

</h1>

<div
className="
d-flex
flex-wrap
gap-4
"
>

{

Object.entries(
skills
).map(

(
[group,items]
)=>(

<div
key={group}
className="skill-card"
>

<h3>

{group}

</h3>

<div
className="
mt-4
d-flex
gap-2
flex-wrap
"
>

{

items.map(

item=>

<span
key={item}
className="skill-badge"
>

{item}

</span>

)

}

</div>

</div>

)

)

}

</div>

</section>

)

}