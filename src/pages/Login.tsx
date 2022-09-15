import CreateUserModal from '../components/CreateUserModal'
import LoginModal from '../components/LoginModal'

const Login = () => {
  return (
    <div className='home'>
      <div className='title'>
        <h1>Viajes Blog</h1>
        <p>Bienvenidos</p>
      </div>
      <LoginModal/>
      <CreateUserModal/>
    </div>
  )
}

export default Login