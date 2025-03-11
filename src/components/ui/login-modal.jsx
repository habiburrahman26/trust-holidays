import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { Button } from "./button";
import Link from "next/link";
  
  const LoginModal = ({ show, setShow }) => {
    return (
      <Dialog open={show} onOpenChange={setShow}>
        <DialogContent className="flex flex-col items-center justify-center min-h-[300px] space-y-4">
          {/* Background SVG with proper positioning */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `url("data:image/svg+xml,%3Csvg width='124' height='124' viewBox='0 0 124 124' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.3' clip-path='url(%23clip0_173_4471)'%3E%3Cpath d='M67.3484 88.1647L48.4643 100.393L47.3174 79.2393L67.3484 88.1647Z' fill='%23FB8114'/%3E%3Cpath d='M62.1988 58.1201L32.1273 74.0425L7.13186 62.4962L62.1988 58.1201Z' fill='%23FF983C'/%3E%3Cpath d='M119.639 27.7263L62.1985 58.12L7.13147 62.4961L119.639 27.7263Z' fill='%23FFB770'/%3E%3Cpath d='M119.639 27.7259L71.3355 62.134L47.3172 79.2391L48.4641 100.393L32.1271 74.042L62.1987 58.1196L119.639 27.7259Z' fill='%23FF8A21'/%3E%3Cpath d='M71.335 62.1342L84.0409 95.5969L67.3477 88.1647L47.3167 79.2392L71.335 62.1342Z' fill='%23FF983C'/%3E%3Cpath d='M119.639 27.726L84.0408 95.5968L71.3348 62.1341L119.639 27.726Z' fill='%23FFB770'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_173_4471'%3E%3Crect width='111.447' height='111.447' fill='white' transform='translate(12.3438) rotate(6.35889)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '124px'
            }}
          />
  
          {/* Content */}
          <div className="z-10 text-center space-y-2">
            <p className="text-gray-600">Kindly log in to</p>
            <p className="text-xl font-medium text-black">Access this Feature.</p>
          </div>
  
          <div className="z-10 space-x-7 pt-6">
            <Button  className="h-12 shadow-none px-14">
              {/* href="/tour-package/payment" */}
              <Link href="#">Login</Link>
            </Button>
            <Button 
              onClick={() => setShow(false)}
              className="h-12 shadow-none px-14 bg-gray/70 hover:bg-gray/80"
            >
              No Thanks
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default LoginModal;