import React from "react"
import ReactAdapterProvider from "src/react-adapter-provider"

const ModuleFederationTest = (props) => {
  const id = React.useId()
  const id2 = React.useId()
  return (
    <div>
      <button onClick={props.callback}>callback</button>
      I am a federated module component and I'm using React 18 features <p>id: {id}</p> <p>id2: {id2}</p>
    </div>
  )
}

export const Adapted = React.forwardRef((props, ref) => {
  return <ReactAdapterProvider {...props} component={ModuleFederationTest} ref={ref} />;
});
export default ModuleFederationTest
