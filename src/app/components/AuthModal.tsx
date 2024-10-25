import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import { signIn } from '../lib/auth'
import { GitHubAuthButton, GoogleAuthButton } from './SubmitButton'

const AuthModal = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <Button>Try for Free</Button>
                </DialogTrigger>
                <DialogContent className='gap-2 text-center'>
                    <DialogHeader className='items-center my-2 uppercase font-semibold'>
                        <h1>Login to Enter Dashboard</h1>
                    </DialogHeader >

                    {/* Google SignIn */}
                    <form
                        className='w-full'
                        action={async () => {
                            "use server"
                            await signIn("google")
                        }}
                    >
                        <GoogleAuthButton/>
                    </form>

                    {/* Github SignIn */}
                    <form
                        className='w-full'
                        action={async () => {
                            "use server"
                            await signIn("github")
                        }}
                    >
                        <GitHubAuthButton/>
                    </form>

                </DialogContent>

            </Dialog>
        </div>
    )
}

export default AuthModal