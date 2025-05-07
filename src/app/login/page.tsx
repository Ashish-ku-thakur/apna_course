'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import { Button } from '@/components/ui/button'

const Page = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <Tabs defaultValue='login' className='w-full max-w-md'>
        <TabsList className='grid w-full grid-cols-2 bg-white border rounded-lg mb-2'>
          <TabsTrigger value='login'>Login</TabsTrigger>
          <TabsTrigger value='signup'>Signup</TabsTrigger>
        </TabsList>

        {/* Sign-up Form */}
        <TabsContent value='signup'>
          <Card>
            <CardHeader>
              <CardTitle>Create an Account</CardTitle>
              <CardDescription>Please fill out the form to register.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' type='text' placeholder='Your name' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' type='email' placeholder='you@example.com' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' type='password' placeholder='Choose a strong password' />
              </div>
              <Button className='w-full mt-2'>Sign Up</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Login Form */}
        <TabsContent value='login'>
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Welcome back! Please login to your account.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='login-email'>Email</Label>
                <Input id='login-email' type='email' placeholder='you@example.com' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='login-password'>Password</Label>
                <Input id='login-password' type='password' placeholder='Your password' />
              </div>
              <Button className='w-full mt-2'>Login</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Page
