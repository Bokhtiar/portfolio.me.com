import Image from 'next/image'
import { PrimaryButton } from '../components/button/index'

export default function Home() {
  return (
    <section className='bg-primary'>
      {/* navbar */}
      <div className="navbar bg-primary container text-white py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52">
              <li><a>HOME</a></li>
              <li><a>Services</a></li>
              <li><a>PORTFOLIO</a></li>
              <li><a>RESUME</a></li>
              <li><a>CONTACT</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <Image
              src="/images/logo.png"
              width={50}
              height={50}
              alt="Picture of the author"
              className='rounded-full'
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>HOME</a></li>
            <li><a>SERVICES</a></li>
            <li><a>PORTFOLIO</a></li>
            <li><a>RESUME</a></li>
            <li><a>CONTACT</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <PrimaryButton name='DOWNLOAD CV'></PrimaryButton>
        </div>
      </div>
    </section>
  )
}
