import ExerciseLayout from "@/components/ExerciseLayout";
import Image from "next/image";

const Exercise2 = () => {
  return (
    <ExerciseLayout>
      <h2>🕺🏻 Positioned Layout: Exercise 2</h2>
      <p>
        In this exercise, you will use CSS positioning to position the "spooky
        text" and make it float above the rest of the text.
      </p>

      <h3>Current Code</h3>
      <div className="ex-2-container">
        <p>
          This text contains this{" "}
          <span className="floating-text">magical floating text</span>. Spooky!
          👻
        </p>
      </div>
      <h3>End Result</h3>
      <Image src={"/pos-ex-2.png"} width={499} height={50} alt="end result" />
    </ExerciseLayout>
  );
};

export default Exercise2;
