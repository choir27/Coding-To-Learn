"use client";
import style from "../css/main.module.css";
import { ButtonLink } from "./Button";
import Pagination from "./Pagination";
import { useState } from "react";

interface Resource {
  name: string;
  href: string;
}

interface LanguageElement {
  h1: string;
  text?: string;
  resources: Resource[];
}

export default function Language(props: LanguageElement) {
  const rowsPerPage = 4;
  const startIndex = 0;
  const [endIndex, setEndIndex] = useState(4);

  return (
    <main
      id="language"
      className={`${style.flex} ${style.column} ${style.alignEnd}`}
    >
      <h1>{props.h1}</h1>

      {props?.text ? <p>{props.text}</p> : ""}

      <section>
        <table>
          <thead>
            <tr>
              <td>
                <h2>Resource</h2>
              </td>
            </tr>
          </thead>
          <tbody>
            {props?.resources
              ?.map((resource: Resource, i: number) => {
                return (
                  <tr
                    key={`${resource.name} ${resource.href}`}
                    className={i % 2 == 0 ? style.colorRow : ""}
                  >
                    <td>
                      <h6>{resource.name}</h6>
                    </td>
                    <td>
                      {ButtonLink({
                        href: resource.href,
                        text: "Link",
                        classNames: style.button,
                      })}
                    </td>
                  </tr>
                );
              })
              .slice(startIndex, endIndex)}
          </tbody>
        </table>
      </section>
      <div
        className={`${style.flex} ${style.justifyCenter} ${style.btnContainer}`}
      >
        {endIndex >= props?.resources?.length ? (
          ""
        ) : (
          <Pagination
            rowsPerPage={rowsPerPage}
            setEndIndex={(e: number) => setEndIndex(e)}
            endIndex={endIndex}
          />
        )}
      </div>
    </main>
  );
}
