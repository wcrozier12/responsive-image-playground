import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img className="item-1" sizes="(min-width: 769px) 25vw, (min-width: 376px) 50vw, 100vw" srcSet="https://dummyimage.com/400 400w, https://dummyimage.com/786 786w, https://dummyimage.com/900 900w, https://dummyimage.com/1080 1080w, https://dummyimage.com/2400 2400w" />
      <img className="item-2" srcSet="https://dummyimage.com/400 400w, https://dummyimage.com/786 786w, https://dummyimage.com/900 900w, https://dummyimage.com/1080 1080w, https://dummyimage.com/2400 2400w" />
      <img className="item-3" srcSet="https://dummyimage.com/400 400w, https://dummyimage.com/786 786w, https://dummyimage.com/900 900w, https://dummyimage.com/1080 1080w, https://dummyimage.com/2400 2400w" />
      <img className="item-4" srcSet="https://dummyimage.com/400 400w, https://dummyimage.com/786 786w, https://dummyimage.com/900 900w, https://dummyimage.com/1080 1080w, https://dummyimage.com/2400 2400w" />
    </div>
  );
}

export default App;
