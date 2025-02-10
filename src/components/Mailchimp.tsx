"use client";

import { mailchimp } from "@/app/resources";
import { Button, Flex, Heading, Input, Text, Background, Column } from "@/once-ui/components";
import { useState } from "react";

type NewsletterProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

export const Mailchimp = ({ newsletter }: { newsletter: NewsletterProps }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
  
    try {
      const res = await fetch(`/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
  
      const data = await res.json();
  
      if (res.status === 200) {
        setSuccess("Successfully subscribed!");
        setEmail("");
      } else if (res.status === 409) {  // ✅ Handle "already subscribed" correctly
        setError("You are already subscribed.");
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };
  

  return (
    <Column
      overflow="hidden"
      position="relative"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-medium"
    >
      <Background
        mask={{
          cursor: mailchimp.effects.mask.cursor,
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
          opacity: mailchimp.effects.gradient.opacity as
            | 0
            | 10
            | 20
            | 30
            | 40
            | 50
            | 60
            | 70
            | 80
            | 90
            | 100,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          color: mailchimp.effects.dots.color,
          size: mailchimp.effects.dots.size as any,
          opacity: mailchimp.effects.dots.opacity as any,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width as any,
          height: mailchimp.effects.grid.height as any,
          opacity: mailchimp.effects.grid.opacity as any,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as any,
        }}
      />

      <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
        {newsletter.title}
      </Heading>

      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {newsletter.description}
      </Text>

      <form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <Flex
          id="mc_embed_signup_scroll"
          fillWidth
          maxWidth={24}
          gap="8"
          direction="column"
          align="center"
        >
          <Input
            formNoValidate
            labelAsPlaceholder
            id="mce-EMAIL"
            name="EMAIL"
            type="email"
            label="Email"
            required
            value={email}
            onChange={handleChange}
            errorMessage={error}
          />

          <Button type="submit" id="mc-embedded-subscribe" value="Subscribe" size="m" fillWidth>
            Subscribe
          </Button>
        </Flex>
      </form>

      {error && (
        <Text
          style={{
            color: "red",
            marginTop: "0.5rem",
            fontSize: "0.875rem",
          }}
        >
          {/* {error} */}
        </Text>
      )}

      {success && (
        <Text
          style={{
            color: "green",
            marginTop: "0.5rem",
            fontSize: "0.875rem",
          }}
        >
          {success}
        </Text>
      )}
    </Column>
  );
};
