import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'GLP-1 Pricing', href: '#pricing', active: true },
    { label: 'Microdosing', href: '#microdosing' },
    { label: 'Longevity', href: '#longevity' },
    { label: 'Testosterone', href: '#testosterone' },
    { label: 'Merch', href: '#merch' },
    { label: 'Contact Us', href: '#contact' }
  ];

  return (
    <header className="w-full bg-neutral-white shadow-lg lg:shadow-none sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-[32px]">
        <div className="flex items-center py-2 lg:py-[16px]">
          
          {/* Logo */}
          <div className="flex-shrink-0 lg:pl-[90px]">
            <img 
              src="/images/Logo.png" 
              alt="Newself Logo" 
              className="w-[100px] h-[37px] sm:w-[80px] sm:h-[30px] lg:w-[88px] lg:h-[32px] object-contain"
            />
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center ml-[130px]">
            <ul className="flex items-center gap-[34px]" role="menubar">
              {menuItems?.map((item, index) => (
                <li key={index} role="none">
                  <a
                    href={item?.href}
                    role="menuitem"
                    className={`text-lg font-small leading-2xl transition-colors hover:text-primary-background focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2 rounded px-1 py-1 ${
                      item?.active ? 'text-text-quaternary' : 'text-text-muted'
                    }`}
                    style={{ fontFamily: 'Satoshi' }}
                  >
                    {item?.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-5 ml-[63px]">
            <Button
              text="Get started"
              className="px-6 py-2 rounded-xl border border-border-primary bg-accent-highlight text-text-primary hover:opacity-90 transition-all"
              style={{ fontFamily: 'DM Sans' }}
            />
            <Button
              text="Login"
              className="px-6 py-2 rounded-xl border border-border-primary bg-neutral-white text-text-primary hover:bg-gray-50 transition-all"
              style={{ fontFamily: 'DM Sans' }}
            />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden ml-auto p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-background"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={`lg:hidden border-t border-gray-200 ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="py-4 space-y-2" role="menubar">
            {menuItems?.map((item, index) => (
              <li key={index} role="none">
                <a
                  href={item?.href}
                  role="menuitem"
                  className={`block px-4 py-3 text-base font-medium rounded-md transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-background ${
                    item?.active ? 'text-text-quaternary bg-gray-50' : 'text-text-muted'
                  }`}
                  style={{ fontFamily: 'Satoshi' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item?.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Action Buttons */}
          <div className="px-4 py-4 space-y-3 border-t border-gray-200">
            <Button
              text="Get started"
              className="w-full px-6 py-3 rounded-xl border border-border-primary bg-accent-highlight text-text-primary hover:opacity-90 transition-all"
              style={{ fontFamily: 'DM Sans' }}
            />
            <Button
              text="Login"
              className="w-full px-6 py-3 rounded-xl border border-border-primary bg-neutral-white text-text-primary hover:bg-gray-50 transition-all"
              style={{ fontFamily: 'DM Sans' }}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;