'use client';

import { useState } from "react";
import svgPaths from "./svg-t3rwygkbpy";

// ── Shared ───────────────────────────────────────────────────────────────────

function CopyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const copy = (text: string) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
    document.body.removeChild(textarea);
  };
  return { copied, copy };
}

const monoClass = "font-['DM_Mono:Regular',sans-serif] leading-[normal] not-italic";
const atypMedium = "font-['Atyp_BL:Medium',sans-serif]";
const atypBold = "font-['Atyp_BL:Bold',sans-serif]";
const featureSettings = { fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" } as const;

const CLIENTS = ["claude", "cursor", "vscode", "codex", "opencode"] as const;

// ── MCP Server content ───────────────────────────────────────────────────────

function MCPServerContent() {
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className="flex flex-col gap-[16px]">
      <p className={`${atypMedium} text-[16px] text-white/60 leading-[1.5]`} style={featureSettings}>
        Install the MCP server for your AI client:
      </p>

      {/* Single command block with integrated Copy button */}
      <div className="flex items-stretch rounded-[12px] overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="flex-1 px-[20px] py-[16px]">
          <p className={`${monoClass} text-[16px] opacity-70`}>
            <span className="text-[#6b7280]">$ </span>
            <span className="text-[#4ade80]">npx</span>{" "}
            <span className="text-[#60a5fa]">@orderly.network/mcp-server</span>{" "}
            <span className="text-[#fbbf24]">init</span>{" "}
            <span className="text-white/40">--client</span>{" "}
            <span className="text-[#a78bfa]">&lt;name&gt;</span>
          </p>
        </div>
        <button
          onClick={() => copy("npx @orderly.network/mcp-server init --client <name>")}
          title={copied ? "Copied!" : "Copy to clipboard"}
          className="px-[20px] py-[16px] bg-black text-white font-['Atyp_BL:Bold',sans-serif] text-[14px] cursor-pointer transition-all hover:bg-[#1a1a1a]"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Client badges */}
      <div className="flex flex-wrap items-center gap-[8px]">
        <span className={`${monoClass} text-[13px] text-white`}>Supported clients:</span>
        {CLIENTS.map((c) => (
          <span key={c} className={`${monoClass} text-[13px] text-white px-[10px] py-[4px] rounded-[6px]`} style={{ background: "rgba(255,255,255,0.05)" }}>
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Skills content ───────────────────────────────────────────────────────────

const SKILLS_COMMANDS = [
  { comment: "# Install all skills globally", cmd: "npx skills add OrderlyNetwork/skills --all -g" },
  { comment: "# Install specific skill", cmd: "npx skills add OrderlyNetwork/skills --skill orderly-trading-orders" },
  { comment: "# Install for all agents", cmd: "npx skills add OrderlyNetwork/skills --all --agent '*' -g" },
];

function SkillsCodeBlock({ comment, cmd }: { comment: string; cmd: string }) {
  const { copied, copy } = useCopyToClipboard();
  const parts = cmd.split("add ");

  return (
    <div className="relative group">
      <div className="rounded-[12px] px-[20px] py-[16px] flex flex-col gap-[4px]" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
        <p className={`${monoClass} text-[15px] text-[#6b7280]`}>{comment}</p>
        <p className={`${monoClass} text-[15px]`}>
          <span className="text-[#6b7280]">$ </span>
          <span className="text-[#4ade80]">npx</span>{" "}
          <span className="text-[#60a5fa]">skills</span>{" "}
          <span className="text-[#fbbf24]">add</span>{" "}
          <span className="text-[#a78bfa]">{parts[1]?.split(" ")[0]}</span>
          {parts[1]?.split(" ").slice(1).map((token, i) => {
            if (token.startsWith("--")) return <span key={i}>{" "}<span className="text-[#fbbf24]">{token}</span></span>;
            if (token === "'*'") return <span key={i}>{" "}<span className="text-[#fb923c]">{token}</span></span>;
            if (token.startsWith("orderly-")) return <span key={i}>{" "}<span className="text-[#fb923c]">{token}</span></span>;
            return <span key={i}>{" "}<span className="text-[#fbbf24]">{token}</span></span>;
          })}
        </p>
      </div>
      <button
        onClick={() => copy(cmd)}
        title={copied ? "Copied!" : "Copy to clipboard"}
        className="absolute right-[12px] top-[12px] p-[8px] rounded-[6px] transition-all opacity-0 group-hover:opacity-100"
        style={{ background: "rgba(255,255,255,0.1)" }}
      >
        {copied ? (
          <span className="text-green-400 text-[12px]">&#10003;</span>
        ) : (
          <CopyIcon />
        )}
      </button>
    </div>
  );
}

function SkillsContent() {
  return (
    <div className="flex flex-col gap-[16px]">
      <p className={`${atypMedium} text-[16px] text-white/60 leading-[1.5]`} style={featureSettings}>
        Install Orderly skills for enhanced agent capabilities:
      </p>

      <div className="flex flex-col gap-[12px]">
        {SKILLS_COMMANDS.map((s) => (
          <SkillsCodeBlock key={s.comment} comment={s.comment} cmd={s.cmd} />
        ))}
      </div>

      {/* Info box */}
      <div className="rounded-[12px] px-[16px] py-[12px] flex flex-col gap-[8px]" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
        <p className={`${atypMedium} text-[14px] text-white/60 leading-[1.5]`} style={featureSettings}>
          <span className={`${atypBold} text-white/80`}>16 skills available:</span>{" "}
          API authentication, trading orders, positions, WebSocket streaming, SDK hooks, UI components, wallet connection, and more.
        </p>
        <p className={`${monoClass} text-[13px] text-[#6b7280]`}>
          <strong className="text-white/50">Flags:</strong>{" "}
          <span className="text-[#c4b5fd]">--all</span> install all skills{" "}
          &bull; <span className="text-[#c4b5fd]">-g</span> global install{" "}
          &bull; <span className="text-[#c4b5fd]">--agent &apos;*&apos;</span> all agents
        </p>
      </div>
    </div>
  );
}

// ── Developer card (main export) ─────────────────────────────────────────────

type DevTab = "mcp-server" | "skills";

export default function DeveloperCard() {
  const [devTab, setDevTab] = useState<DevTab>("mcp-server");

  return (
    <div className="rounded-[16px] p-[32px] flex flex-col gap-[24px] flex-1 basis-0 min-w-0" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
      {/* Card header */}
      <div className="flex items-center gap-[12px]">
        <img src="/images/developer.png" alt="Developer" className="size-[48px]" />
        <div>
          <p className={`${atypBold} text-[24px] text-white leading-[1.3]`} style={featureSettings}>Developer</p>
          <p className={`${atypMedium} text-[14px] text-[#9C75FF] leading-[1.3]`} style={featureSettings}>Manual installation</p>
        </div>
      </div>

      {/* Description */}
      <p className={`${atypMedium} text-[18px] text-white leading-[1.5]`} style={featureSettings}>
        Install Orderly&apos;s agentic tools for your AI client:
      </p>

      {/* MCP Server / Skills tabs */}
      <div className="flex items-center gap-[8px]">
        <button
          onClick={() => setDevTab("mcp-server")}
          className={`${atypMedium} text-[16px] px-[16px] py-[8px] rounded-[8px] transition-all ${
            devTab === "mcp-server"
              ? "bg-[#7c3aed] text-white"
              : "text-[#9ca3af] hover:text-white hover:bg-white/5"
          }`}
          style={featureSettings}
        >
          MCP Server
        </button>
        <button
          onClick={() => setDevTab("skills")}
          className={`${atypMedium} text-[16px] px-[16px] py-[8px] rounded-[8px] transition-all ${
            devTab === "skills"
              ? "bg-[#7c3aed] text-white"
              : "text-[#9ca3af] hover:text-white hover:bg-white/5"
          }`}
          style={featureSettings}
        >
          Skills
        </button>
      </div>

      {/* Tab content */}
      {devTab === "mcp-server" ? <MCPServerContent /> : <SkillsContent />}
    </div>
  );
}
