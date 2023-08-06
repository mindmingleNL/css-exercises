import ExerciseLayout from "@/components/ExerciseLayout";
import Image from "next/image";

const Exercise1 = () => {
  return (
    <ExerciseLayout>
      <h2>📐 Grid Layout: Exercise 2</h2>
      <p>In this exercise, you will use CSS Grid to create a layout.</p>
      <h3>Current Code</h3>

      <nav className="grid" id="grid-2">
        <div className="grid-item item-logo">Logo</div>
        <div className="grid-item item-navigation">Navigation</div>
        <div className="grid-item item-1">1</div>
        <div className="grid-item item-2">2</div>
        <div className="grid-item item-3">3</div>
        <div className="grid-item item-4">4</div>
        <div className="grid-item item-5">5</div>
      </nav>

      <h3>End Result</h3>
      <Image src={"/grid-2.png"} width={1440} height={1024} alt="end result" />
    </ExerciseLayout>
  );
};

export default Exercise1;
