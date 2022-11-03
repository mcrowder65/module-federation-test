import React from "react"

const ModuleFederationTest = () => {
  const id = React.useId()
  return (
    <div>
      I am a federated module component <p>id: {id}</p>
    </div>
  )
}

export default ModuleFederationTest
