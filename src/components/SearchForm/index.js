import useForm from "hooks/useForm";
import React from "react";
import { Form, Input, FormContainerSelect, FormSelect } from "./SearchForm.styles";
import Button from "components/Button";
import { useLocation } from "wouter";

const SearchForm = ({
  initialKeyword = "",
  initialRating = "g",
  initialType = "gifs",
} = {}) => {
  const [, pushLocation] = useLocation();

  const { keyword, rating, type, updateKeyword, updateRating, updateType } =
    useForm({ initialKeyword, initialRating, initialType });

  const handleChangeRating = (e) => {
    updateRating(e.target.value);
  };

  const handleInputChange = (e) => {
    updateKeyword(e.target.value);
  };
  const handleChangeType = (e) => {
    updateType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword !== "") pushLocation(`/search/${type}/${keyword}/${rating}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search"
        onChange={handleInputChange}
        maxLength={30}
        type="text"
        value={keyword}
      />
      <FormContainerSelect>
        <FormSelect onChange={handleChangeRating} value={rating}>
          <option key="g" value="g">
            Suitable for all ages
          </option>
          <option key="pg-13" value="pg-13">
            +13
          </option>
          <option key="r" value="r">
            +18
          </option>
        </FormSelect>
        <FormSelect onChange={handleChangeType} value={type}>
          <option key="gifs" value="gifs">
            Gifs
          </option>
          <option key="stickers" value="stickers">
            Stickers
          </option>
        </FormSelect>
      </FormContainerSelect>

      <Button type="submit">Search</Button>
    </Form>
  );
};

export default React.memo(SearchForm);
