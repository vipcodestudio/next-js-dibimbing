import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/router';

// export async function getServerSideProps({ req, res }) {
//   const token = getCookie('token', { req, res });
//   if (!token) return { redirect: { destination: '/auth/login' } };
//   return { props: {} };
// }

const Dashboard = () => {
  const router = useRouter();
  const logout = () => {
    deleteCookie('token');
    router.push('/auth/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button className="px-2 py-1 text-white bg-blue-500" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
