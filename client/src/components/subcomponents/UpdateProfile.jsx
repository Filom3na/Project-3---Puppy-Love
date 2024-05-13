
import FormComponent from './FormComponent.jsx'
import { getToken } from '../../lib/auth'
import axios from 'axios'

export default function UpdateProfile({ userProfile }) {

  const fields = {
    firstName: {
      type: 'text',
      placeholder: 'your first name'
    },
    lastName: {
      type: 'text',
      placeholder: 'your last name'
    },
    email: {
      type: 'email',
      placeholder: 'example@email.com'
    },
    location: 'text',
  }


  async function handleProfileUpdate(formData) {
    await axios.put(`/api/profile`, formData, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  }

  function loadFields(){
    console.log('this is in loadFields:', userProfile)
    // need to get the data from profile
    return userProfile
  }

  


  return (
    <div className="form-page">
      <h1>Update your Profile</h1>
      <FormComponent request={handleProfileUpdate} fields={fields} submit="Update Profile" onLoad={loadFields} />
    </div>
  )
}
