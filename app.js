import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1",{id:"title",style:{color:"red"}},"{title}");
    const heading2 = React.createElement("h2",{id:"info"},"Heading 2")
    const container = React.createElement("div",{id:"container"},[heading,heading2]);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    //passing a react element inside the root
    root.render(container);