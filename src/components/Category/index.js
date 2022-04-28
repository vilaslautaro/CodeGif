import {
  CategoryBox,
  CategoryTitle,
  CategoryLink,
  CategoryContain,
} from "./Category.styles";

export default function Category({ options = [] }) {
  return (
    <section>
      <CategoryTitle>Trendings</CategoryTitle>
      <CategoryBox>
        {options.map((singleOption, index) => (
          <CategoryContain key={singleOption} index={index}>
            <CategoryLink to={`/search/gifs/${singleOption}/g`}>
              {singleOption}
            </CategoryLink>
          </CategoryContain>
        ))}
      </CategoryBox>
    </section>
  );
}
