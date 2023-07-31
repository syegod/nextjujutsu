import Header from "@/components/Header"
import Register from "@/components/Register"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  useEffect(() => {
    async function test() {
      // const response = await axios.post('/api/auth/login', {usernameOrEmail: 'sigma', password: 'admin123'});
      const response = await axios.get('/api/auth/getMe');
      console.log(response.data);
    }
    test()
  }, [])
  return (
    <div className="flex w-full h-[100vh] justify-center items-center">
      Test
      <div className="yaebalsobaku">
        123321
      </div>
    </div>
  )
}
