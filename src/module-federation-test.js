import React from "react"

const ModuleFederationTest = () => {
  const id = React.useId()
  const id2 = React.useId()
  return (
    <div>
      I am a federated module component <p>id: {id}</p> <p>id2: {id2}</p>
    </div>
  )
}

export default ModuleFederationTest
