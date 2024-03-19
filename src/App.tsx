import React, { Suspense }   from "react";
function App() {
  return (
    <Suspense fallback={<></>}>
      Test App
      </Suspense>
  )
}

export default App
