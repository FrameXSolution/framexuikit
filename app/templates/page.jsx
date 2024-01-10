import React from "react";
import TemplateCard from "./_component/TemplateCard";

const ListTemplate = [
  {
    name:"React Native with TypeScript tutorial.",
    type:"Button",
    mode:"Free",
    image:"/Image/image.gif",
    author:"Aniket Sudke",
    sourceCode:"https://daily-dev-tips.com/posts/center-elements-with-tailwind-css/",
    tech:["FaReact"]
  },
  {
    name:"React Native with TypeScript tutorial.",
    type:"Landing Page",
    mode:"Paid",
    image:"/button.jpeg",
    author:"Siddhi Sudke",
    sourceCode:"https://daily-dev-tips.com/posts/center-elements-with-tailwind-css/",
    tech:"FaReact"
  }
]


const templates = () => {
  return (

    <>
    <div className="grid h-screen place-items-center ">
    

    {ListTemplate.map((card) => (
      <TemplateCard
       name ={card.name}
       type ={card.type}
       mode ={card.mode}
       image ={card.image}
       author ={card.author}
       sourceCode ={card.sourceCode}
       tech ={card.tech}
      />
    ))}
    </div>
    </>
  );
};

export default templates;
