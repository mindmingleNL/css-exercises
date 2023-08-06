import ExerciseLayout from "@/components/ExerciseLayout";
import Image from "next/image";

const Exercise2 = () => {
  return (
    <ExerciseLayout>
      <h2>💪 The Flexible Box Layout: Exercise 3</h2>
      <p>In this exercise you will create a multiline flexbox layout.</p>
      <h3>Current Code</h3>
      <div className="flex-ex-3-container">
        <ul className="flex-list">
          <li className="flex-list-item">Turnip</li>
          <li className="flex-list-item">greens</li>
          <li className="flex-list-item">yarrow</li>
          <li className="flex-list-item">ricebean</li>
          <li className="flex-list-item">rutabaga</li>
          <li className="flex-list-item">endive</li>
          <li className="flex-list-item">cauliflower</li>
          <li className="flex-list-item">sea lettuce</li>
          <li className="flex-list-item">kohlrabi</li>
          <li className="flex-list-item">amaranth</li>
        </ul>
      </div>

      <h3>End Result</h3>
      <Image
        src={"/flex-4.png"}
        alt="end result"
        width={406}
        height={194}
        className="image"
        style={{
          maxWidth: "410px"
        }}
        objectFit={"contain"}
      />
    </ExerciseLayout>
  );
};
export default Exercise2;
