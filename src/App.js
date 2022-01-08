import "./App.css";
import { Posts } from "./components/posts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Suspense } from "react";
import { getPosts } from "./api/api";

const resources = getPosts();

function App() {
  return (
    <div>
      <Suspense fallback={<Skeleton count={10} />}>
        <Posts resources={resources} />
      </Suspense>
    </div>
  );
}

export default App;
