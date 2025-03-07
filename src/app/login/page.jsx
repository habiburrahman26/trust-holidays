import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import googleIcon from '@/assets/icon/google.svg';
import facebookIcon from '@/assets/icon/facebook.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import bgImage from '@/assets/images/auth-bg.png';

const Login = () => {
  return (
    <section
      className="h-[100vh] justify-center bg-background-secondary pt-10"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white max-w-lg mx-auto px-14 py-12 shadow-lg rounded">
        <div className="text-center">
          <h2 className=" text-2xl md:text-3xl font-medium mb-2.5">
            Login your Account
          </h2>
          <p className="text-black/50">You need to login first to Continue</p>
        </div>

        <form className="space-y-3 pt-10">
          <div >
            <Label htmlFor="email" className="text-black/80 pb-2 inline-block">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              className="shadow-none border-none py-5 bg-background-secondary focus-visible:ring-primary placeholder:text-black/30"
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <Label
              htmlFor="password"
              className="text-black/80 pb-2 inline-block"
            >
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="********"
              className="shadow-none border-none py-5 bg-background-secondary focus-visible:ring-primary placeholder:text-black/30"
            />
          </div>

          <Link
            href="#"
            className="inline-block text-primary float-right font-medium text-sm"
          >
            Forgot Password?
          </Link>

          <div className='pt-10'>
            <Button className="w-full shadow-none py-5">Login</Button>
          </div>
        </form>

        <div class="flex items-center py-7">
          <hr class="flex-grow border-t border-darkGray2/50" />
          <span class="px-3 text-black/50 text-xs">Or Continue With</span>
          <hr class="flex-grow border-t border-darkGray2/50" />
        </div>

        <div className="flex gap-4">
          <button className="flex items-center justify-between gap-2 px-12 py-2.5 bg-[#F5F7FA] text-black rounded-lg font-medium">
            <Image src={googleIcon} alt="google icon" className="size-5" />
            Google
          </button>
          <button className="flex items-center justify-between gap-2 px-12 py-2.5 bg-[#F5F7FA] text-black rounded-lg font-medium">
            <Image src={facebookIcon} alt="google icon" className="size-5" />
            Facebook
          </button>
        </div>

        <div className="text-black/50 text-sm text-center pt-7">
          Don’t have an account?{' '}
          <Link href="/signup" className="font-semibold text-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
