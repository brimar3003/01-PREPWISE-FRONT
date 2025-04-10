import { Agent } from "@/components/agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const InterviewPage = async () => {
  const user = await getCurrentUser();

  return (
    <>
      <h2>Interview Generation</h2>

      <Agent userName={user?.name} userId={user?.id} type="generate" />
    </>
  );
};

export default InterviewPage;
