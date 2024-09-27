'use client';
import { lusitana } from '@/app/ui/fonts';
import { ArrowRightIcon, AtSymbolIcon ,KeyIcon} from '@heroicons/react/20/solid';
import { Button } from './button';
//import { useActionState } from 'react';
//import { authenticate } from '@/app/lib/actions';
export default function LoginForm() {
  //const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined,);
  return (
    <form  className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="username"
            >
              Username
            </label>
            <div className="relative">
              <AtSymbolIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="username"
                type="username"
                name="username"
                placeholder="rero123"
              />
            </div>
            <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          </div>
          <Button type="submit" className="mt-4 flex items-center justify-center" >
            Login
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Button>
          <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
        </div>
        </div>
      </div>
    </form>
  );
}