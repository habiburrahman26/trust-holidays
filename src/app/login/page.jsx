import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import googleIcon from '@/assets/icon/google.svg';
import facebookIcon from '@/assets/icon/facebook.svg';
import Image from 'next/image';

const Login = () => {
  return (
    <section className="h-[90vh] justify-center bg-primary-foreground pt-10">
      <div className="bg-white max-w-lg  mx-auto px-14 py-[75px]">
        <div className="text-center">
          <h2 className=" text-2xl md:text-3xl font-medium mb-2.5">
            Login your Account
          </h2>
          <p className="text-black/50">You need to login first to Continue</p>
        </div>

        <div className="space-y-3">
          <div className="pt-10">
            <Label htmlFor="email" className="text-black/80 pb-2 inline-block">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              className="shadow-none py-[18px] bg-primary-foreground"
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
              className="shadow-none py-[18px] bg-primary-foreground"
            />
          </div>

          <Link
            href="#"
            className="block text-primary text-right font-medium text-sm"
          >
            Forgot Password?
          </Link>
        </div>

        <div class="flex items-center py-6">
          <hr class="flex-grow border-t border-darkGray2/50" />
          <span class="px-3 text-black/50 text-xs">Or Continue With</span>
          <hr class="flex-grow border-t border-darkGray2/50" />
        </div>

        <div className='flex gap-4'>
          <button className="flex items-center justify-between gap-2 px-12 py-3.5 bg-[#F5F7FA] text-black rounded-lg font-medium">
            <Image src={googleIcon} alt="google icon" className="size-5" />
            Google
          </button>
          <button className="flex items-center justify-between gap-2 px-12 py-3.5 bg-[#F5F7FA] text-black rounded-lg font-medium">
            <Image src={facebookIcon} alt="google icon" className="size-5" />
            Facebook
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
