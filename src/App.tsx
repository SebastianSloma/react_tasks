import React, { Fragment, useState } from "react";

function App(): JSX.Element {
  const[state, setState] = useState(initialState)
	return(
    <Fragment>
      <form>
        <input type="text" />
      </form>
      </Fragment>
  )
}

export default App;
