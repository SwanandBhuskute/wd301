import{c as j,d as u,j as e,e as v,r as t,f as w,q as c,g as N}from"./index-NHPz5pax.js";import{u as M,_ as m}from"./index.esm-Sskgf-Yk.js";import{E as k}from"./ErrorBoundary-aT_nLk5o.js";function F(){const i=j(),n=u(),o=s=>{v(n,s)},{members:l,isLoading:a,isError:d,errorMessage:r}=i;return l.length===0&&a?e.jsx("span",{children:"Loading..."}):d?e.jsx("span",{children:r}):e.jsx(e.Fragment,{children:l.map(s=>e.jsxs("div",{className:"block p-6 bg-blue-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 member",children:[e.jsxs("h5",{className:"mb-2 text-xl font-medium text-gray-900 dark:text-white",children:["Name: ",s.name]}),e.jsxs("h5",{className:"mb-2 text-xl font-medium text-gray-900 dark:text-white",children:["Email: ",s.email]}),e.jsx("button",{type:"button",onClick:()=>o(s.id),className:"px-4 py-2 text-sm font-medium text-white bg-red-700 rounded-md hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",children:"Delete"})]},s.id))})}const E=()=>{const i=u();return t.useEffect(()=>{w(i)},[]),e.jsx("div",{className:"grid grid-cols-4 gap-4 mt-5",children:e.jsx(F,{})})},S=()=>{const[i,n]=t.useState(!1),[o]=t.useState(null),l=u(),{register:a,handleSubmit:d,formState:{errors:r}}=M(),s=()=>{n(!1)},x=()=>{n(!0)},p=async h=>{const{name:f,email:g,password:y}=h;try{(await N(l,{name:f,email:g,password:y})).ok&&n(!1)}catch(b){console.error("Unexpected error:",b)}};return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:x,id:"new-member-btn",className:"px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",children:"New Member"}),e.jsx(c,{appear:!0,show:i,as:t.Fragment,children:e.jsxs(m,{as:"div",className:"relative z-10",onClose:s,children:[e.jsx(c.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:e.jsx("div",{className:"flex items-center justify-center min-h-full p-4 text-center",children:e.jsx(c.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(m.Panel,{className:"w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",children:[e.jsx(m.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Create new member"}),e.jsx("div",{className:"mt-2",children:e.jsxs("form",{onSubmit:d(p),children:[o&&e.jsx("span",{children:o}),e.jsx("input",{id:"name",type:"text",placeholder:"Enter member name...",autoFocus:!0,...a("name",{required:!0}),className:`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${r.name?"border-red-500":""}`}),e.jsx("input",{id:"email",type:"text",placeholder:"Enter member email...",...a("email",{required:!0}),className:`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${r.email?"border-red-500":""}`}),e.jsx("input",{id:"password",type:"password",placeholder:"Enter member password...",...a("password",{required:!0}),className:`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${r.password?"border-red-500":""}`}),r.name&&e.jsx("span",{children:"Name is required"}),r.email&&e.jsx("span",{children:"Email is required"}),r.password&&e.jsx("span",{children:"Password is required"}),e.jsx("button",{type:"submit",id:"create-member-btn",className:"inline-flex justify-center px-4 py-2 mr-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",children:"Submit"}),e.jsx("button",{type:"button",onClick:s,className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",children:"Cancel"})]})})]})})})})]})})]})},T=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h2",{className:"text-2xl font-medium tracking-tight",children:"Members"}),e.jsx(S,{})]}),e.jsx(k,{children:e.jsx(t.Suspense,{fallback:e.jsx("div",{className:"suspense-loading",children:"Loading..."}),children:e.jsx(E,{})})})]});export{T as default};
