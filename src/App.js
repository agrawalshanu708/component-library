import { useState } from "react";
import "./styles.css";
import { Card } from "./card";
import { Button } from "./button";
import { Alert } from "./alert";
import { Avatar } from "./avatar";
import { Input } from "./input";
import { Typography } from "./typography";
import { Rating } from "./rating";
import { Toast } from "./toast";
import { Slider } from "./slider";
import { Navigation } from "./Navigation";
import { Badge } from "./badge";

export default function App() {
  const [route, setRoute] = useState("card");
  return (
    <div className="App">
      <header></header>
      <div className="middle">
        <div className="left">
          <button onClick={() => setRoute("card")}>Card</button>
          <button onClick={() => setRoute("button")}>Button</button>
          <button onClick={() => setRoute("alert")}>Alert</button>
          <button onClick={() => setRoute("avatar")}>Avatar</button>
          <button onClick={() => setRoute("input")}>Input</button>
          <button onClick={() => setRoute("typography")}>Typography</button>
          <button onClick={() => setRoute("rating")}>Rating</button>
          <button onClick={() => setRoute("toast")}>Toast</button>
          <button onClick={() => setRoute("slider")}>Slider</button>
          <button onClick={() => setRoute("navigation")}>Navigation</button>
          <button onClick={() => setRoute("badge")}>Badge</button>
        </div>
        <div className="main">
          {route === "card" && <Card />}
          {route === "button" && <Button />}
          {route === "alert" && <Alert />}
          {route === "avatar" && <Avatar />}
          {route === "input" && <Input />}
          {route === "typography" && <Typography />}
          {route === "rating" && <Rating />}
          {route === "toast" && <Toast />}
          {route === "slider" && <Slider />}
          {route === "navigation" && <Navigation />}
          {route === "badge" && <Badge />}
        </div>
        <div className="right"></div>
      </div>
      <footer></footer>
    </div>
  );
}
