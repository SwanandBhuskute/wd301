import{A as u,r as t,u as f,j as e}from"./index-NHPz5pax.js";console.log("API_ENDPOINT:",u);const h=()=>{const[o,d]=t.useState(""),[n,c]=t.useState(""),[r,m]=t.useState(""),[l,g]=t.useState(""),x=f(),b=async s=>{s.preventDefault();try{const a=await fetch(`${u}/organisations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,user_name:n,email:r,password:l})});if(!a.ok)throw new Error("Sign-up failed");console.log("Sign-up successful");const i=await a.json();localStorage.setItem("authToken",i.token),localStorage.setItem("userData",JSON.stringify(i.user)),x("/account")}catch(a){console.error("Sign-up failed:",a)}};return e.jsxs("form",{onSubmit:b,children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Organisation Name:"}),e.jsx("input",{type:"text",name:"organisationName",id:"organisationName",value:o,onChange:s=>d(s.target.value),className:"w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Your Name:"}),e.jsx("input",{type:"text",name:"userName",id:"userName",value:n,onChange:s=>c(s.target.value),className:"w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Email:"}),e.jsx("input",{type:"email",name:"userEmail",id:"userEmail",value:r,onChange:s=>m(s.target.value),className:"w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Password:"}),e.jsx("input",{type:"password",name:"userPassword",id:"userPassword",value:l,onChange:s=>g(s.target.value),className:"w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"})]}),e.jsx("button",{type:"submit",className:"w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4",children:"Sign up"})]})},y=()=>e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:e.jsxs("div",{className:"max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md",children:[e.jsx("h1",{className:"text-3xl font-bold text-center text-gray-800 mb-8",children:"Sign up"}),e.jsx(h,{})]})});export{y as default};
