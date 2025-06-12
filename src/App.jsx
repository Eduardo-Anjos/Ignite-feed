import { Header } from "./Components/Header/Header";
import { Post } from "./Post";

import "./global.css";
export function App() {
  <div>
    <Header />

    <Post
      author="Diego Fernandes"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga asperiores debitis odio aperiam cupiditate nulla eveniet quo laborum quas? Nihil tempora incidunt quos velit debitis explicabo vitae ratione consectetur?"
    />

    <Post author="Gabriel Bluzzi" content="Um novo post muito legal" />
  </div>;
}
