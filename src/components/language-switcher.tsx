"use client";

import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { Globe } from "lucide-react";
import { Button, Flex } from "@/once-ui/components"; // Importing UI components

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown toggle state

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

  if (!currentLanguage || !languageConfig) {
    return null;
  }

  const switchLanguage = (lang: string) => {
    setCookie(null, COOKIE_NAME, `/auto/${lang}`);
    window.location.reload();
  };

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <Button
        size="s"
        style={{
          background: "transparent",
          border: "1px solid #ccc",
          padding: "6px 12px",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          borderRadius: "6px",
          gap: "8px",
        }}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Globe size={18} className="text-gray-300" />
        {currentLanguage.toUpperCase()}
      </Button>

      {/* Dropdown List */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-gray-800 border border-gray-600 rounded-md shadow-lg z-50">
          {languageConfig.languages.map((ld: LanguageDescriptor) => (
            <button
              key={ld.name}
              onClick={() => switchLanguage(ld.name)}
              className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
            >
              {ld.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
