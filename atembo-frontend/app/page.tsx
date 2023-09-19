import Image from 'next/image'
import LoginPage from './components/Login/page'
import RegistrationPage from './components/register/page'

export default function Home() {
  return (
    <main>
     
      <RegistrationPage/>
      <LoginPage/>
    </main>
  )
}
