import ExerciseLayout from "@/components/ExerciseLayout";
import Image from "next/image";

const Exercise2 = () => {
  return (
    <ExerciseLayout>
      <h2>💪 The Flexible Box Layout: Exercise 2</h2>
      <p>In this exercise you will center a div using Flexbox.</p>
      <h3>Current Code</h3>
      <div className="flex-ex-2-container">
        <div className="flex-ex-2-center">Center Me</div>
      </div>

      <h3>End Result</h3>
      <Image
        src={"/center-me.png"}
        alt="end result"
        width={1297}
        height={249}
        className="image"
        objectFit={"contain"}
      />
    </ExerciseLayout>
  );
};
export default Exercise2;
