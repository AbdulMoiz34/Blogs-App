import DashBoard from "@/components/dashboard/DashBoard";
import { getByEmail } from "@/services/users";
import { getSession } from "next-auth/react";

const Dashboard = ({ userId }) => {
  return (
    <>
      <DashBoard userId={userId} />
    </>
  )
}

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signIn", permanent: false
      }
    };
  }
  const email = session.user.email;
  const user = getByEmail(email);
  const { id: userId } = user;
  // console.log(userId);
  return {
    props: { userId }
  };
}
export default Dashboard;