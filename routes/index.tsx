import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="container">
        <img
          src="/logo.svg"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <h1>
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </h1>
        <Counter start={3} />
      </div>
    </>
  );
}
