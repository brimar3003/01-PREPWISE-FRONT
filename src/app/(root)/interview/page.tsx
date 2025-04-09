import { Agent } from "@/components/agent";

const InterviewPage = () => {
  return (
    <>
      <h2>Interview Generation</h2>

      <Agent userName="You" userId="user1" type="generate" />
    </>
  );
};

export default InterviewPage;
