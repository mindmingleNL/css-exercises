import ExerciseLayout from "@/components/ExerciseLayout";
import Image from "next/image";

const Exercise1 = () => {
  return (
    <ExerciseLayout>
      <h2>📐 Grid Layout: Exercise 1</h2>
      <p>
        In this exercise, you will use CSS Grid to create different columns. The
        end results include an overlay of the grid. This is only to help you see
        the grid. You do not need to create this overlay.
      </p>
      <p>
        The grid container of our current code contains a unique id. Make sure
        to use this when writing your CSS to make sure it won't influence the
        rest of the exercises.
      </p>
      <h3>Current Code</h3>

      <nav className="grid" id="grid-1">
        <div className="grid-item item-1">Logo</div>
        <div className="grid-item item-2">Navigation</div>
        <div className="grid-item item-3">Image</div>
      </nav>

      <h3>End Result</h3>
      <Image src={"/grid-1.png"} width={1440} height={187} alt="end result" />
    </ExerciseLayout>
  );
};

export default Exercise1;
