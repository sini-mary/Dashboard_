import HomePage from './Components/HomePage/index';
import RegistrationPage from './register/page';
export default function Home() {
  return (
    <main>
      <div>
        <HomePage />
        <RegistrationPage/>
      </div>
    </main>
  );
}