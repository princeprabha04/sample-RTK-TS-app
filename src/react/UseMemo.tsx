import React from "react";
import Editor from "react-simple-code-editor";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const usememoCode = `
//Syntax
const memoizedValue = useMemo(() => value, dependencies);

//Example
import React, { useMemo } from 'react';

function ExpensiveCalculation({ a, b }) {
  const result = useMemo(() => {
    return a + b;
  }, [a, b]);

  return <p>Result: {result}</p>;
}

`;

const UseMemo = () => {
  return (
    <div>
      <div>
        <h1 style={{ textDecoration: "underline" }}>useMemo :-</h1>
        <p>
          The useMemo hook is used to memoize a value and avoid recalculating
          that value on each render. It returns a memoized value that only
          changes if one of the dependencies has changed. The syntax for useMemo
          is as follows:
        </p>
        <h4 style={{color:'brown'}}>&#x2764;{`  const memoizedValue = useMemo(() => value, dependencies); `}</h4>
        <p> &#x1F600;{` 'value' is the value that you want to memoize.`}</p>
        <p>
          &#x1F600;
          {` 'dependencies' is an array of values that the memoized value depends on.
          The value will be recalculated if any of these values change.`}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SyntaxHighlighter language="react" style={docco}>
          {usememoCode}
        </SyntaxHighlighter>
      </div>
      <div>
        <p>
          In the above example, the result value is memoized using useMemo. It
          will only be recalculated if either a or b changes. This is useful
          when you have computationally expensive operations that depend on
          certain values and you want to avoid unnecessary re-calculations.
        </p>
      </div>
    </div>
  );
};

export default UseMemo;
