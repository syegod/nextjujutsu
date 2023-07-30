import axios from "axios"
import { useEffect } from "react"

export default function Home() {
  useEffect(()=>{
    async function test(){
     const response = await axios.post('api/auth/register',{
        username:'Yrionice',
        email:'tkachklim@gmail.com',
        password:'abobus'
     })
    }
    test()
})
  return (
    <div className="flex w-full h-[100vh] justify-center items-center">
     Test
    </div>
  )
}
