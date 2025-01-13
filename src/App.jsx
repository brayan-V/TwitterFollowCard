import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCardd";
export function App() {
  const users = [
    {
      userName: "midudev",
      name: "Miguel Angel Duran",
      initialIsFollowing: true
    },
    {
      userName: "TMChein",
      name: "Thomas Campo",
      initialIsFollowing: false
    },
    {
      userName: "pheralb",
      name: "Pablo Hernandez",
      initialIsFollowing: false
    },
    {
      userName: "el",
      name: "Elizabeth Len",
      initialIsFollowing: true
    },
  ]
  return (
    <section className="App">
      {
        users.map(({ userName, name, initialIsFollowing }) =>(
          <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={initialIsFollowing}>
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  );
}
