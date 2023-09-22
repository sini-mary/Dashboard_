import Sidebar from './Components/Sidebar/page';
import HomePage from './Components/homePage/page';
import RegistrationPage from './register/page';
import HomePage from './Components/HomePage';
import SystemlistsPage from './systemlists/page';

export default function Home() {
  return (
    <main>
      <div>
        <HomePage/>

        {/* <RegistrationPage/>  */}
        {/* <Sidebar/> */}
        <HomePage />
        {/* <RegistrationPage/>
        <SystemlistsPage/> */}
        
      </div>
    </main>
  );
}


