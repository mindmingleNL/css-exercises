import ExerciseLayout from "@/components/ExerciseLayout";
import Image from "next/image";

const Exercise1 = () => {
  return (
    <ExerciseLayout>
      <h2>📐 Grid Layout: Exercise 3</h2>
      <p>
        In this exercise, you will use CSS Grid to create a layout. To create
        this layout you will need{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start">
          this page
        </a>{" "}
        of documentation.
      </p>
      <h3>Current Code</h3>

      <nav className="grid" id="grid-3">
        <div className="grid-item item-navigation">Navigation</div>
        <div className="grid-item item-body">Body</div>
        <div className="grid-item item-footer">Footer</div>
      </nav>

      <h3>End Result</h3>
      <Image src={"/grid-3.png"} width={1440} height={1024} alt="end result" />
    </ExerciseLayout>
  );
};

export default Exercise1;
