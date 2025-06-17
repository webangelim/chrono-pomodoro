import { Timer, TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";

export function App() {
  console.log("oi");

  return (
    <div>
      <Heading>
        Olá mundo React!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
        assumenda quasi voluptates nesciunt qui, numquam vero ex odio, obcaecati
        similique placeat esse quo? Unde sunt dolores numquam commodi deserunt
        officia.
      </p>
    </div>
  );
}
