import { useRouter } from 'next/router';
import HomePage from './Components/HomePage';
import RegistrationPage from './register/page';
import SystemlistsPage from './Components/systemlists/page';

const PageRouter = () => {
  const router = useRouter();
  const { slug } = router.query;

  switch (slug) {
    case 'registration':
      return <RegistrationPage />;
    case 'systemlist':
      return <SystemlistsPage />;
    default:
      return <HomePage />;
  }
};

export default PageRouter;
