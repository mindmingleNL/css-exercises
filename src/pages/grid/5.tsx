import ExerciseLayout from "@/components/ExerciseLayout";
import Image from "next/image";

const Exercise1 = () => {
  return (
    <ExerciseLayout>
      <h2>📐 Grid Layout: Exercise 4</h2>
      <p>
        In this exercise, you will get artistic and use CSS Grid to create a
        Piet Mondriaan painting.
      </p>
      <h3>Current Code</h3>

      <nav className="grid" id="grid-4">
        <div className="grid-item item-1"></div>
        <div className="grid-item item-2"></div>
        <div className="grid-item item-3"></div>
        <div className="grid-item item-4"></div>
        <div className="grid-item item-5"></div>
        <div className="grid-item item-6"></div>
        <div className="grid-item item-7"></div>
        <div className="grid-item item-8"></div>
        <div className="grid-item item-9"></div>
      </nav>

      <h3>End Result</h3>
      <Image src={"/grid-5.png"} width={1440} height={1440} alt="end result" />
    </ExerciseLayout>
  );
};

export default Exercise1;
