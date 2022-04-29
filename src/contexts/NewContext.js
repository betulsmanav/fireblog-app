import { createContext, useState } from "react";
import { AddNewBlog, UpdateCard } from "../helpers/NewFunction";

export const NewContext = createContext();

const initialValues = {
  title: " ",
  imageUrl: " ",
  content: " ",
  date: "",
};

const NewContextProvider = ({ children }) => {
  const date = new Date().toLocaleDateString();
  const [info, setInfo] = useState(initialValues);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    if (info.id) {
      UpdateCard(info)
    } else {
      
      AddNewBlog(info);
    }
  };

  
      
          
      
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value, date });

    // console.log(name, value);
    // console.log(info)
  };

 

  return (
    <NewContext.Provider
      value={{ info, date, setInfo, handleFormSubmit, handleChange }}
    >
      {children}
    </NewContext.Provider>
  );
};

export default NewContextProvider;
