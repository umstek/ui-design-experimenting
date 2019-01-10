import * as React from "react";
import * as ReactDOM from "react-dom";

const element = (
  <div>
    {[...Array(12).keys()]
      .map(r => r + 1)
      .map(r =>
        [...Array(r - 1).keys()]
          .map(c => c + 1)
          .map(c => (
            <div className="row">
              {[...Array(r - c).keys()].map(x => (
                <div key={`${x}-${c}`} className={`col-1-of-${r}`}>
                  {`1/${r}`}
                </div>
              ))}
              <div key={`${r}-${c}`} className={`col-${c}-of-${r}`}>
                {`${c}/${r}`}
              </div>
            </div>
          ))
      )}
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
