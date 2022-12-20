import React from "react"

const ModuleFederationTest = (props) => {
  const id = React.useId()
  const id2 = React.useId()
  return (
    <div>
      <button onClick={props.callback}>callback</button>
      <p>
        I am a federated module component and I'm using React 18 features{" "}
        <span>id: {id}</span> <span>id2: {id2}</span>
      </p>
    </div>
  )
}

export default ModuleFederationTest
