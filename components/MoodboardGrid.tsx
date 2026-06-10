const items = [
  ["Off-white", "bg-[#FFFDF8]"],
  ["Areia", "bg-[#D8C3AA]"],
  ["Terracota suave", "bg-[#D99A82]"],
  ["Verde sálvia", "bg-[#7D876D]"],
  ["Rosa queimado", "bg-[#E5B8A9]"],
  ["Madeira natural", "bg-[#C9AE91]"],
  ["Linho", "bg-[#EFE4D6]"],
  ["Luz quente", "bg-[#F8E1C8]"],
  ["Plantas", "bg-[#A7AD98]"],
  ["Aromas", "bg-[#C8755B]"],
];

export function MoodboardGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {items.map(([label, color]) => (
        <div key={label} className="overflow-hidden rounded-soft border border-line bg-surface shadow-soft">
          <div className={`h-28 ${color}`} />
          <div className="p-4 text-sm font-medium text-light-brown">{label}</div>
        </div>
      ))}
    </div>
  );
}
