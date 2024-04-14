import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../../services/user.js'

function SignOut({setUser, setProfile}) {
  const navigate = useNavigate()

  useEffect(() => {
    const signOutUser = async () => {
      await signOut()
      setUser(null)
      setProfile(null)
      navigate('/')
    }
    signOutUser()
  }, [])

  return ''
}

export default SignOut;