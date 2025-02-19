import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import googleIcon from '@/assets/icon/google.svg';
import facebookIcon from '@/assets/icon/facebook.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import bgImage from '@/assets/images/auth-bg.png';

const Signup = () => {
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
            Please Sign up
          </h2>
          <p className="text-black/50">Create an account and get the Deals</p>
        </div>

        <form className="space-y-3">
          <div className="pt-10">
            <Label htmlFor="email" className="text-black/80 pb-2 inline-block">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              className="shadow-none border-none py-5 bg-background-secondary focus-visible:ring- placeholder:text-black/30"
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-black/80 pb-2 inline-block">
              Mobile Number
            </Label>
            <Input
              id="email"
              name="email"
              className="shadow-none border-none py-5 bg-background-secondary focus-visible:ring-primary placeholder:text-black/30"
              placeholder="017xxxxxxxx"
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

          <div className="pt-4">
            <Button className="w-full shadow-none py-5">Sign Up</Button>
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
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-primary">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
