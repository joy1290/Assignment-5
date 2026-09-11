import logoImg from '../assets/logo-text.png';
function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">

           <img src={logoImg} alt="" className="h-8 w-auto" />

        

          </div>

          <p className="mt-3 max-w-xs text-xs leading-5 text-gray-500">
            Curated tools, technologies, and resources for developers
            building modern products.
          </p>

          {/* Social Links */}
          <div className="mt-4 flex gap-4 text-[11px] text-gray-500">
            <a href="#" className="hover:text-pink-500">
              GitHub
            </a>

            <a href="#" className="hover:text-pink-500">
              Twitter
            </a>

            <a href="#" className="hover:text-pink-500">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-xs font-bold uppercase text-gray-800">
            Product
          </h3>

          <div className="mt-4 space-y-3 text-xs text-gray-500">

            <a
              href="#"
              className="block hover:text-pink-500"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="block hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="block hover:text-pink-500"
            >
              Projects
            </a>

          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xs font-bold uppercase text-gray-800">
            Company
          </h3>

          <div className="mt-4 space-y-3 text-xs text-gray-500">

            <a
              href="#about"
              className="block hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#contact"
              className="block hover:text-pink-500"
            >
              Contact
            </a>

            <a
              href="#"
              className="block hover:text-pink-500"
            >
              Careers
            </a>

          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xs font-bold uppercase text-gray-800">
            Legal
          </h3>

          <div className="mt-4 space-y-3 text-xs text-gray-500">

            <a
              href="#"
              className="block hover:text-pink-500"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="block hover:text-pink-500"
            >
              Terms of Service
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-100">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <p className="text-[10px] text-gray-400">
            © 2026 DevStack. All rights reserved.
          </p>

          <div className="flex gap-5 text-[10px] text-gray-400">

            <a
              href="#"
              className="hover:text-gray-600"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-gray-600"
            >
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;