import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="container">
        <h2>
          Welcome to my Homepage!
        </h2>
        <p>
          This Webpage was build with <strong> Fresh </strong>, a Deno based SSR-Framework.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ut magnam doloremque doloribus, non id nulla et similique voluptas delectus culpa minus maxime vitae veritatis a nihil iusto eaque neque!
        </p>
        <p>
          The following component is an Island - an isolated interactive component that ships with JS.
        </p>
        <Counter start={5}></Counter>
      </div>
    </>
  );
}
