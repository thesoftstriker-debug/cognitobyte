import { useState, useRef } from "react";

const demos = [
  {
    id: 1,
    category: "LinkedIn Automation",
    tag: "n8n · Make",
    title: "Auto LinkedIn Post Creation & Scheduling",
    description:
      "A fully automated workflow that researches trending topics in your niche, generates compelling LinkedIn posts using AI, schedules them at optimal engagement times, and publishes — all without lifting a finger.",
    features: [
      "AI-generated post copy & hashtags",
      "Smart scheduling at peak hours",
      "Auto-image sourcing & formatting",
      "Analytics tracking post-publish",
    ],
    videoId: "pRwkx-kN4Vg",
    thumbnail: null, // Optional: replace with your thumbnail URL
    accentColor: "#7C3AED",
    badgeText: "Live Demo",
  },
  // Add more demos here as they become available
];

const PlayIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ width: 28, height: 28 }}
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 15, height: 15, flexShrink: 0 }}
  >
    <path d="M4 10l4.5 4.5L16 6" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 22, height: 22 }}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const N8nLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" style={{ width: 20, height: 20 }}>
    <rect width="40" height="40" rx="8" fill="#EA4B71" />
    <text x="5" y="28" fontSize="18" fontWeight="800" fill="white" fontFamily="monospace">n8n</text>
  </svg>
);

function VideoCard({ demo, isActive, onClick }) {
  const [playing, setPlaying] = useState(false);

  const handlePlay = (e) => {
    e.stopPropagation();
    setPlaying(true);
  };

  return (
    <div
      onClick={onClick}
      style={{
        background: isActive ? "#fff" : "#fafafa",
        border: isActive ? "1.5px solid #7C3AED" : "1.5px solid #e5e7eb",
        borderRadius: 18,
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.25s ease",
        boxShadow: isActive
          ? "0 8px 40px rgba(124,58,237,0.13)"
          : "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      {/* Header bar */}
      <div
        style={{
          padding: "18px 24px 14px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <span
          style={{
            background: "rgba(124,58,237,0.1)",
            color: "#7C3AED",
            borderRadius: 6,
            padding: "3px 10px",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {demo.badgeText}
        </span>
        <span style={{ flex: 1 }} />
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontSize: 12,
            color: "#6b7280",
            fontWeight: 500,
          }}
        >
          <N8nLogo />
          {demo.tag}
        </span>
      </div>

      {/* Video area */}
      <div
        style={{
          position: "relative",
          background: "#0f0f18",
          aspectRatio: "16/9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {playing && demo.videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${demo.videoId}?autoplay=1`}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <>
            {/* Decorative background for placeholder */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at 30% 50%, rgba(124,58,237,0.18) 0%, transparent 60%), radial-gradient(ellipse at 70% 40%, rgba(234,75,113,0.12) 0%, transparent 55%)",
              }}
            />
            {/* Animated workflow lines */}
            <svg
              viewBox="0 0 800 450"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                opacity: 0.15,
              }}
            >
              <defs>
                <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#7C3AED" />
                </marker>
              </defs>
              {[100, 200, 300, 350].map((y, i) => (
                <line
                  key={i}
                  x1="60" y1={y} x2="740" y2={y + (i % 2 === 0 ? 40 : -30)}
                  stroke="#7C3AED"
                  strokeWidth="1.5"
                  strokeDasharray="8 6"
                  markerEnd="url(#arrow)"
                />
              ))}
              {[120, 250, 400, 550, 680].map((x, i) => (
                <rect key={i} x={x - 28} y={140 + (i % 3) * 55} width="56" height="32" rx="8" fill="#7C3AED" opacity="0.3" />
              ))}
            </svg>

            {/* Icons floating */}
            <div
              style={{
                position: "absolute",
                top: "18%",
                left: "12%",
                background: "rgba(255,255,255,0.07)",
                borderRadius: 12,
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <LinkedInIcon />
              <span style={{ color: "#c4b5fd", fontSize: 12, fontWeight: 600 }}>LinkedIn</span>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "20%",
                right: "12%",
                background: "rgba(255,255,255,0.07)",
                borderRadius: 12,
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <N8nLogo />
              <span style={{ color: "#f9a8d4", fontSize: 12, fontWeight: 600 }}>n8n Workflow</span>
            </div>

            {/* Play button */}
            <button
              onClick={handlePlay}
              style={{
                position: "relative",
                zIndex: 2,
                background: demo.videoId ? "#7C3AED" : "rgba(124,58,237,0.55)",
                border: "none",
                borderRadius: "50%",
                width: 72,
                height: 72,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                cursor: demo.videoId ? "pointer" : "default",
                boxShadow: "0 0 0 12px rgba(124,58,237,0.18)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                if (demo.videoId) {
                  e.currentTarget.style.transform = "scale(1.08)";
                  e.currentTarget.style.boxShadow = "0 0 0 16px rgba(124,58,237,0.22)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 0 0 12px rgba(124,58,237,0.18)";
              }}
            >
              <PlayIcon />
            </button>

            {!demo.videoId && (
              <span
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "rgba(255,255,255,0.45)",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  whiteSpace: "nowrap",
                }}
              >
                Video coming soon — add your YouTube ID
              </span>
            )}
          </>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "22px 24px 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 8,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#9ca3af",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {demo.category}
          </span>
        </div>

        <h3
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: "#111827",
            margin: "0 0 10px",
            lineHeight: 1.3,
          }}
        >
          {demo.title}
        </h3>

        <p
          style={{
            fontSize: 14,
            color: "#6b7280",
            lineHeight: 1.65,
            margin: "0 0 18px",
          }}
        >
          {demo.description}
        </p>

        {/* Feature pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          {demo.features.map((f, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                background: "rgba(124,58,237,0.07)",
                color: "#6d28d9",
                borderRadius: 20,
                padding: "5px 12px",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              <CheckIcon />
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Demo() {
  const [activeDemo, setActiveDemo] = useState(0);

  return (
    <section
      id="process"
      style={{
        padding: "96px 24px",
        maxWidth: 900,
        margin: "0 auto",
        fontFamily: "inherit",
      }}
    >
      {/* Section label */}
      <p
        style={{
          textAlign: "center",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.13em",
          textTransform: "uppercase",
          color: "#7C3AED",
          marginBottom: 14,
        }}
      >
        SEE IT IN ACTION
      </p>

      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 900,
          color: "#111827",
          margin: "0 0 16px",
          lineHeight: 1.15,
        }}
      >
        Live demos
      </h2>

      {/* Subheading */}
      <p
        style={{
          textAlign: "center",
          fontSize: 16,
          color: "#6b7280",
          maxWidth: 520,
          margin: "0 auto 56px",
          lineHeight: 1.65,
        }}
      >
        Real automations, real results. Watch how each workflow runs end-to-end —
        no fluff, no slides, just the system doing its job.
      </p>

      {/* Demo cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {demos.map((demo, i) => (
          <VideoCard
            key={demo.id}
            demo={demo}
            isActive={activeDemo === i}
            onClick={() => setActiveDemo(i)}
          />
        ))}

        {/* Coming soon placeholder */}
        <div
          style={{
            border: "1.5px dashed #d1d5db",
            borderRadius: 18,
            padding: "32px 28px",
            display: "flex",
            alignItems: "center",
            gap: 20,
            background: "#fafafa",
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "rgba(124,58,237,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" style={{ width: 24, height: 24 }}>
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p
              style={{
                margin: 0,
                fontWeight: 700,
                color: "#374151",
                fontSize: 15,
                marginBottom: 4,
              }}
            >
              More n8n demos on the way
            </p>
            <p style={{ margin: 0, fontSize: 13, color: "#9ca3af" }}>
              Content pipeline automation, lead enrichment, AI customer support &amp; more — coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
