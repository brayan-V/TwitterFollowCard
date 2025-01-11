import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCardd";
export function App() {
    const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="midudev" name="Miguel Angel Duran" />
      <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="pheralb" name="Pablo Hernandez" />
      <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="el" name="Elizabeth Len" />
      <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="elonmusk" name="Elon Musk" />
    </section>
  );
}
