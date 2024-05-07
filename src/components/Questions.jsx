import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <div className="bg-l-blue-questions min-h-screen w-full mx-auto p-10 ">
      <p className="text-2xl text-custom-text-color text-center font-semibold">
        Easy and Fast
      </p>
      <h1 className="text-5xl	 text-custom-text-color-1 text-center font-bold leading-normal">
        Frequently asked questions
      </h1>
      <p className="text-xl text-custom-text-color text-center font-normal">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          ></SingleQuestion>
        );
      })}
    </div>
  );
};

export default Questions;
