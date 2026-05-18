"use client";
import { Input } from "@/components/ui/input";
import { ArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/auth/dashboard");
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="my-5 w-full">
          <p className="text-lg">Email</p>
          <Input placeholder="Enter Email" type="email" className="w-full" />
        </div>
        <div className="my-5 w-full">
          <p className="text-lg">Password</p>
          <Input placeholder="Enter Password" type="password" className="" />
        </div>
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
          <Button size={"lg"} variant={"default"} onClick={() => handleLogin()}>
            Login
          </Button>
        </div>
      </main>
    </div>
  );
}
