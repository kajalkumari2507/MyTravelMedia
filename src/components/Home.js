import Navbar from "./Navbar";
import Parent from "./ParentBody";

const Home = () => {
  return (
    <div>
      <div className="body">
        <Navbar/>
        <h1>Social Media For Travellers</h1>

        <div className="inputTag">
          <input type="text" placeholder="&#128269;     Search here..."></input>
        </div>

        <Parent/>
      </div>
    </div>
  );
};

export default Home;