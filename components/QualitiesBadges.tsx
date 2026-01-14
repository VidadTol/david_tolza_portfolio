export default function QualitiesBadges() {
  const badges = [
    {
      label: "Professionnalisme & Rigueur",
      borderColor: "border-blue-500/50",
      textColor: "text-blue-400",
      bgColor: "bg-blue-500",
    },
    {
      label: "Écoute & Patience",
      borderColor: "border-purple-500/50",
      textColor: "text-purple-400",
      bgColor: "bg-purple-500",
    },
    {
      label: "Passion & Sens du détail",
      borderColor: "border-pink-500/50",
      textColor: "text-pink-400",
      bgColor: "bg-pink-500",
    },
    {
      label: "Persévérance & Détermination",
      borderColor: "border-cyan-400/50",
      textColor: "text-cyan-400",
      bgColor: "bg-cyan-400",
    },
  ];

  return (
    <div
      className="flex flex-wrap gap-4 pt-1 justify-center w-full max-w-6xl px-6"
      role="region"
      aria-label="Qualités professionnelles"
    >
      {badges.map((badge) => (
        <div
          key={badge.label}
          className="group relative"
          role="img"
          aria-label={badge.label}
        >
          <div
            className={`absolute -inset-0.5 ${badge.bgColor} rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500`}
            aria-hidden="true"
          ></div>
          <span
            className={`relative px-3 py-2 bg-slate-900 border ${badge.borderColor} rounded-full ${badge.textColor} text-[10px] md:text-xs font-bold flex items-center justify-center gap-2`}
          >
            <span
              className={`w-2 h-2 ${badge.bgColor} rounded-full animate-pulse`}
              aria-hidden="true"
            ></span>
            {badge.label}
          </span>
        </div>
      ))}
    </div>
  );
}
