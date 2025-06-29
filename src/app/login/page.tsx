import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column, Input } from "@/once-ui/components";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";

import LoginBox from "@/components/LoginBox";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Login() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
     <LoginBox />
    </Column>
  );
}
