"use client";
import { siteData } from "../data/siteData";
import style from "../css/main.module.css";

interface SearchValue {
  searchValue: string;
  setSearchValue: (e: string) => void;
}

function updateSearchSuggests(
  searchValue: string,
  setSearchValue: (e: string) => void,
) {
  const searchResults = siteData.filter((content: string) =>
    content.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const results = searchResults
    .map((content: string) => {
      const searchResult = content.split(".");

      return searchResult.map((result: string) => {
        if (result.toLowerCase().includes(searchValue.toLowerCase())) {
          const text = content;
          return (
            <button key={result} onClick={() => setSearchValue(text)}>
              {result}
            </button>
          );
        }
      });
    })
    .flat()
    .slice(0, 6);

  return results;
}

export default function SearchSuggest(props: SearchValue) {
  return props.searchValue ? (
    <section
      id="suggest"
      className={`${style.flex} ${style.column} ${style.alignCenter}`}
    >
      {" "}
      {updateSearchSuggests(props.searchValue, (e: string) =>
        props.setSearchValue(e),
      )}
    </section>
  ) : (
    ""
  );
}
