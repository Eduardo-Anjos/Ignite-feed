import { Header } from "./Components/Header/Header";
import { Post } from "./Post";
function App() {
  return (
    <div>
      <Header />

      <Post
        author="Diego Fernandes"
        content=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nemo eveniet fugiat
         officia debitis alias commodi aspernatur cumque. Non esse qui voluptatum ab numquam facere. 
         Perspiciatis ullam molestias repellendus animi!"
      />
    </div>
  );
}

export default App;
