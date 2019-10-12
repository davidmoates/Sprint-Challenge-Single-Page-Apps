import React, { useState } from "react";

export default function SearchForm() {
  const [formValues, setFormValues] = useState([{
     name: ""
   }]);

   const onValueChange = event => {
     setFormValues({
       ...formValues,
       [event.target.name]: event.target.value
     });
   };
   const onFormSubmit = event => {
     event.preventDefault();
     alert(`submitting ${formValues.name}`);
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
