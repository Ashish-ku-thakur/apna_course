import { BookOpenCheck, LayoutDashboard, LogOut, Menu, School, UserPen } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Separator } from '../ui/separator'
import { ToogleMode } from './ToogleMode'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <div className=" bg-[#E2E2C9]/80 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left Logo */}
          <div className="flex items-center gap-3">
            <Link href={'/'}>
              <School size={34} />
            </Link>
            <h1 className="hidden md:block font-bold text-3xl">E-learning</h1>

            <div className='md:hidden'>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Menu className='w-6 h-6' />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                  <DropdownMenuSeparator />
                  <Link href={"/admin/course"}>

                    <DropdownMenuItem>DashBoard</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>Courses</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className='rounded-full p-1' variant={'secondary'}>More</Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className='px-3'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <Separator className='my-2 bg-black' />

                <DropdownMenuGroup className='w-55'>
                  <Link href={'/my-learning'}>

                    <DropdownMenuItem className='flex items-center justify-between'>
                      <p>
                        My Learning
                      </p>
                      <BookOpenCheck />

                    </DropdownMenuItem>
                  </Link>

                  <Link href={"/profile"}>
                    <DropdownMenuItem className='flex items-center justify-between'>
                      <p>
                        Edit Profile
                      </p>
                      <UserPen />

                    </DropdownMenuItem>
                  </Link>

                  <Link href={"/login"}>
                    <DropdownMenuItem className='flex items-center justify-between'>
                      <p>
                        Logout
                      </p>
                      <LogOut />

                    </DropdownMenuItem>
                  </Link>

                  <Separator className='my-4 bg-black' />
                  <Link href={"/admin/course"}>
                    <DropdownMenuItem className='flex items-center justify-between'>
                      <p>
                        Dashboard
                      </p>
                      <LayoutDashboard />

                    </DropdownMenuItem>
                  </Link>

                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <SignedOut>
              <SignInButton><Button className='mr-2'>Login</Button></SignInButton>
              <SignUpButton><Button>Signup</Button></SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            <div className="p-2 rounded-full hover:bg-black/10 transition">
              <ToogleMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
