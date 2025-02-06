"use client";

import { useEffect, useState, useRef } from "react";
import { parseCookies, setCookie } from "nookies";
import { Globe } from "lucide-react";
import { Button, Flex } from "@/once-ui/components"; // Import UI components

const COOKIE_NAME = "googtrans";

interface LanguageDescriptor {
  name: string;
  title: string;
}

declare global {
  interface Window {
    __GOOGLE_TRANSLATION_CONFIG__?: {
      languages: LanguageDescriptor[];
      defaultLanguage: string;
    };
  }
}

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>();
  const [languageConfig, setLanguageConfig] = useState<any>();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.__GOOGLE_TRANSLATION_CONFIG__) return;

    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }

    if (!languageValue) {
      languageValue = window.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }

    if (languageValue) {
      setCurrentLanguage(languageValue);
    }

    setLanguageConfig(window.__GOOGLE_TRANSLATION_CONFIG__);
  }, []);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!currentLanguage || !languageConfig) {
    return null;
  }

  const switchLanguage = (lang: string) => {
    setCookie(null, COOKIE_NAME, `/auto/${lang}`);
    setIsDropdownOpen(false); // Close dropdown smoothly
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Button that toggles dropdown */}
      <Button
        size="s"
        style={{
          background: "transparent",
          border: "2px solid #ccc",
          padding: "6px 12px",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          borderRadius: "6px",
          gap: "8px",
          transition: "all 0.3s ease",
        }}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Globe size={18} className="text-gray-300" />
        {currentLanguage.toUpperCase()}
      </Button>

      {/* Dropdown Menu - Absolutely positioned */}
      {isDropdownOpen && (
        <div
          className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50"
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            width: "150px",
            background: "#1a1a1a",
            borderRadius: "6px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {languageConfig.languages.map((ld: LanguageDescriptor) => (
            <div
              key={ld.name}
              onClick={() => switchLanguage(ld.name)}
              className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer rounded-md text-center"
              style={{ padding: "8px", fontSize: "14px", cursor: "pointer" }}
            >
              {ld.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
