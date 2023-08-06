import ExerciseLayout from "@/components/ExerciseLayout";
import Image from "next/image";

const Exercise1 = () => {
  return (
    <ExerciseLayout>
      <h2>💪 The Flexible Box Layout: Exercise 1</h2>
      <p>In this exercise you will build a navigation bar using Flexbox.</p>
      <h3>Current Code</h3>
      <div className="flex-ex-1-container">
        <button>Home</button>
        <button>About</button>
        <span>🧑‍💻</span>
        <button>Work</button>
        <button>Contact</button>
      </div>

      <h3>End Result</h3>
      <Image
        src={"/flex-1.png"}
        alt="end result"
        width={1287}
        height={38}
        className="image"
        objectFit={"contain"}
      />
    </ExerciseLayout>
  );
};
export default Exercise1;
