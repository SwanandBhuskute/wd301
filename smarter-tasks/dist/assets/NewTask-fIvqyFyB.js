import{r as t,l as g,u as y,m as j,j as e,q as a}from"./index-NHPz5pax.js";import{u as v,_ as n}from"./index.esm-Sskgf-Yk.js";import{u as w,e as N}from"./actions-sE2gPl5v.js";const S=()=>{var u;let[d,c]=t.useState(!0),{projectID:l}=g(),m=y();const{register:r,handleSubmit:f,formState:{errors:p}}=v(),s=j(),x=w();if(!((u=s==null?void 0:s.projects.filter(o=>`${o.id}`===l))==null?void 0:u[0]))return e.jsx(e.Fragment,{children:"No such Project!"});function i(){c(!1),m("../../")}const b=async o=>{try{N(x,l??"",o),i()}catch(h){console.error("Operation failed:",h)}};return e.jsx(e.Fragment,{children:e.jsx(a,{appear:!0,show:d,as:t.Fragment,children:e.jsxs(n,{as:"div",className:"relative z-10",onClose:i,children:[e.jsx(a.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:e.jsx("div",{className:"flex items-center justify-center min-h-full p-4 text-center",children:e.jsx(a.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(n.Panel,{className:"w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",children:[e.jsx(n.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Create new Task"}),e.jsx("div",{className:"mt-2",children:e.jsxs("form",{onSubmit:f(b),children:[p&&e.jsx("span",{children:"This field is required"}),e.jsx("input",{type:"text",required:!0,placeholder:"Enter title",autoFocus:!0,id:"title",...r("title",{required:!0}),className:"w-full px-3 py-2 my-4 leading-tight text-gray-700 border rounded-md focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"}),e.jsx("input",{type:"text",required:!0,placeholder:"Enter description",autoFocus:!0,id:"description",...r("description",{required:!0}),className:"w-full px-3 py-2 my-4 leading-tight text-gray-700 border rounded-md focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"}),e.jsx("input",{type:"date",required:!0,placeholder:"Enter due date",autoFocus:!0,id:"dueDate",...r("dueDate",{required:!0}),className:"w-full px-3 py-2 my-4 leading-tight text-gray-700 border rounded-md focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"}),e.jsx("button",{type:"submit",id:"newTaskSubmitBtn",className:"inline-flex justify-center px-4 py-2 mr-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",children:"Submit"}),e.jsx("button",{onClick:i,className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",children:"Cancel"})]})})]})})})})]})})})};export{S as default};
