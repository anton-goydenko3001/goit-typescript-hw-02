import React from "react";
import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import style from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";
import { SearchBarValues } from "../../types";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (value: SearchBarValues, actions: any): void => {
    if (!value.search) {
      toast("Please enter search terms!", {
        style: {
          color: "#ffffff",
          backgroundColor: "green",
        },
      });
    } else {
      onSearch(value.search);
    }
    actions.resetForm();
  };

  return (
    <header className={style.headerContainer}>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={style.formContainer}>
          <Field
            className={style.inputContainer}
            autoFocus
            autoComplete="off"
            type="text"
            name="search"
            placeholder="Search"
          />
          <button className={style.buttonContainer} type="submit">
            <IoSearch className={style.iconContainer} />
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;