import ExerciseLayout from "@/components/ExerciseLayout";
import Image from "next/image";

const Exercise2 = () => {
  return (
    <ExerciseLayout>
      <h2>💪 The Flexible Box Layout: Exercise 5</h2>
      <p>
        In this exercise you will use Flexbox to create the different navigation
        bars. Put each navigation bar in a separate component.
      </p>
      <h3>Current Code</h3>
      <div>Write Your Code Here</div>

      <h3>End Result</h3>
      <Image
        src={"/navigation.png"}
        alt="end result"
        width={1440}
        height={314}
        className="image"
        objectFit={"contain"}
      />
    </ExerciseLayout>
  );
};
export default Exercise2;
