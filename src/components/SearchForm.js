import React, { useState } from "react";


export default function SearchForm(props) {
  const [formValues, setFormValues] = useState([{
     
   }]);

   const onValueChange = event => {
     setFormValues({
       ...formValues,
       [event.target.name]: event.target.value
     });
   };
   const onFormSubmit = event => {
     event.preventDefault();
   };
   return (
     <div>
       <form className="component" onSubmit={onFormSubmit}>
         <input
           placeholder="Search by Name"
           onChange={onValueChange}
           name="name"
         />

         <input type="submit" />
       </form>
     </div>
  );
}
