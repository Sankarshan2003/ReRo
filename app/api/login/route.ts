import { NextResponse,NextRequest } from 'next/server';
import axios from 'axios';
import { cookies } from 'next/headers';
export async function POST(request:NextRequest) {
  const { username, password } = await request.json();
  try {
    const formData = new FormData();
    formData.append('username',username);
    formData.append('password',password);
    const response = await axios.post('http://localhost:8080/token',formData, {
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    });
    cookies().set({
        name: 'token',
        value: response.data.token,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 3600 // 1 hour
      });
    // Forward the response from the Python backend
    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error)) {
      let message=''
       if(error.response?.status==409)
       {
        message = "Wrong timings"
       }
      
        return NextResponse.json(
          { error: message },
          { status: error.response?.status || 500},
        );
      }
      return NextResponse.json(
        { error: 'An unexpected error occurred' },
        { status: 500 }
      );
  }
}