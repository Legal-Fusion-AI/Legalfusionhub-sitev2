"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { MacWindow } from "@/components/mac-window";
import { nikkiChats } from "@/lib/nikki-chats";

export function NikkiChats() {
  const [activeId, setActiveId] = useState(nikkiChats[0].id);
  const active = nikkiChats.find((chat) => chat.id === activeId) ?? nikkiChats[0];

  return (
    <section className="nikki-chats" aria-labelledby="nikki-chats-title">
      <div className="nikki-chats-head">
        <span className="nikki-chats-icon" aria-hidden="true">
          <MessageSquare size={18} strokeWidth={2} />
        </span>
        <div>
          <h2 id="nikki-chats-title">Nikki handles the chats and texts.</h2>
          <p>
            Real conversations from Morrison Law Group. Names and contact
            details removed. Pick one to read it.
          </p>
        </div>
      </div>

      <MacWindow title="Nikki · Conversations" className="nikki-chats-window">
        <div className="nikki-chats-body">
          <div className="nikki-chats-list" role="tablist" aria-label="Nikki conversations">
            {nikkiChats.map((chat) => (
              <button
                key={chat.id}
                type="button"
                role="tab"
                id={`nikki-tab-${chat.id}`}
                aria-selected={chat.id === active.id}
                aria-controls="nikki-chat-panel"
                className={chat.id === active.id ? "nikki-chat-tab is-active" : "nikki-chat-tab"}
                onClick={() => setActiveId(chat.id)}
              >
                <strong>{chat.title}</strong>
                <em>{chat.channel}</em>
                <span>{chat.outcome}</span>
              </button>
            ))}
          </div>

          <div
            className="nikki-chat-thread"
            role="tabpanel"
            id="nikki-chat-panel"
            aria-labelledby={`nikki-tab-${active.id}`}
            tabIndex={0}
            key={active.id}
          >
            {active.turns.map((turn, index) => (
              <p key={index} className={`nikki-bubble is-${turn.from}`}>
                <span className="nikki-bubble-who">
                  {turn.from === "nikki" ? "Nikki" : "Prospective client"}
                </span>
                {turn.text}
              </p>
            ))}
          </div>
        </div>
      </MacWindow>
    </section>
  );
}
