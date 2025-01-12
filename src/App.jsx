import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCardd";
export function App() {
  return (
    <section className="App">
      <TwitterFollowCard  userName="midudev">
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard  userName="pheralb">
        Pablo Hernandez
      </TwitterFollowCard>
      <TwitterFollowCard  userName="el">
        Elizabeth Len
      </TwitterFollowCard>
    </section>
  );
}
