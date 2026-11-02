"use client";

import { Phone } from "lucide-react";
import { prefersPhone } from "@/lib/device";
import { phoneTelHref, siteConfig } from "@/lib/site-config";

/**
 * GHL chat widget internals (widget 693c4abaf258cf0f6649aed0, loaded in app/layout.tsx).
 * GHL can rename these without notice. If one goes missing, the button still opens
 * the widget, so the visitor can pick "Chat with Voice" themselves.
 * Checked against the live widget 2026-11-01.
 */
const WIDGET = {
  host: "chat-widget",
  selection: "chat-selection",
  selectionButton: "ion-button.chat-selection-button",
  voiceLabel: /voice/i,
  talkButton: ".lc_text-widget--voice-talk-button",
  activeScreen: ".lc_text-widget--voice-active-screen",
} as const;

const WAIT_MS = 8000;

type ChatWidgetApi = { openWidget?: () => void; isActive?: () => boolean };

function chatWidgetApi(): ChatWidgetApi | undefined {
  return (window as unknown as { leadConnector?: { chatWidget?: ChatWidgetApi } })
    .leadConnector?.chatWidget;
}

/** Polls until `find` returns something or the time runs out. */
async function waitFor<T>(find: () => T | null | undefined, ms = WAIT_MS): Promise<T | null> {
  const start = Date.now();
  while (Date.now() - start < ms) {
    const found = find();
    if (found) return found;
    await new Promise((resolve) => setTimeout(resolve, 150));
  }
  return null;
}

/**
 * Opens the chat widget and starts a browser voice call with Donna.
 * Returns false only if the widget never loaded, so the caller can dial instead.
 */
async function startBrowserCall(): Promise<boolean> {
  const root = await waitFor(() => document.querySelector(WIDGET.host)?.shadowRoot);
  if (!root) return false;

  const api = chatWidgetApi();
  if (!api?.isActive?.()) {
    if (api?.openWidget) api.openWidget();
    else root.querySelector<HTMLElement>("button.lc_text-widget--bubble")?.click();
  }

  // Already on the voice screen (a call in progress, or the visitor was here before).
  if (root.querySelector(WIDGET.activeScreen)?.checkVisibility?.()) return true;

  const talk = root.querySelector<HTMLElement>(WIDGET.talkButton);
  if (!talk?.checkVisibility?.()) {
    const voiceOption = await waitFor(() => {
      const selection = root.querySelector(WIDGET.selection)?.shadowRoot;
      return [...(selection?.querySelectorAll<HTMLElement>(WIDGET.selectionButton) ?? [])].find(
        (button) => WIDGET.voiceLabel.test(button.textContent ?? ""),
      );
    });
    // Widget is open on its menu; the visitor can choose voice from there.
    if (!voiceOption) return true;
    voiceOption.click();
  }

  const talkButton = await waitFor(() => {
    const button = root.querySelector<HTMLElement>(WIDGET.talkButton);
    return button?.checkVisibility?.() !== false ? button : null;
  });
  talkButton?.click();
  return true;
}

type TryDonnaButtonProps = {
  className?: string;
};

export function TryDonnaButton({ className = "button button-outline" }: TryDonnaButtonProps) {
  const telHref = phoneTelHref(siteConfig.DEMO_LINE);

  async function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    // Phones dial the demo line; everything else talks to Donna in the browser.
    if (prefersPhone()) return;
    event.preventDefault();
    const started = await startBrowserCall();
    if (!started) window.location.href = telHref;
  }

  return (
    <a className={className} href={telHref} onClick={handleClick}>
      <Phone size={17} aria-hidden="true" />
      Try Donna now
    </a>
  );
}
