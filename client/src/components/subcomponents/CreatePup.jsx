import FormComponent from './FormComponent.jsx'
import { getToken } from '../../lib/auth'
import axios from 'axios'

export default function CreatePup({ getUserProfile }){

  const fields = {
  pupName: { 
    type: 'text',
    placeholder: 'your pups name here'
  },
  image: {
    type: 'file',
    placeholder: 'upload an image'
  },
  birthday: {
    type: 'date',
    placeholder: 'puppy b-day'
  },
  breed: 'text',
  bio: 'text',
  //string
  gender: {
    type: 'select',
    placeholder: 'select gender',
    options: ['bitch', 'dog']
  },
  //string needs to be boolean
  neutered: {
    type: 'select',
    placeholder: 'select yes or no',
    options: ['yes', 'no']
  },
  // favorite and dislike are objects
  favorites: { 
    type: 'multi',
    placeholder: 'select multi options'
  },
  dislikes: {
    type: 'multi',
    placeholder: 'select multi options'
  }
  }

  async function handleCreate(formData){
    try {
      await axios.post('/api/pups', formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      getUserProfile()
    } catch (error) {
      console.log(error)
    }
  }

  
  return (
    <div className="form-component">
    <FormComponent 
      request={handleCreate} 
      fields={fields} 
      submit="Upload Pup"
    />
  </div>
  )
  
}






// console.log('Type of name:', typeof formData.pupName)
// console.log('Type of bio:', typeof formData.bio)
// console.log('Type of breed:', typeof formData.breed)
// console.log('Type of birthday:', typeof formData.birthday)
// console.log('Type of favorites:', typeof formData.favorites)
// console.log('Type of dislikes:', typeof formData.dislikes)
// console.log('Type of image:', typeof formData.image)
// console.log('Type of gender:', typeof formData.gender)
// console.log('Type of neuted:', typeof formData.neutered)