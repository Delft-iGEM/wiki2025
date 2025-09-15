import React from 'react';

interface ColorData {
  name: string;
  hex: string;
  hsl: string;
  rgba: string;
}

const ColorSwatch: React.FC<{ color: string }> = ({ color }) => (
  <span
    className="inline-block w-10 h-6 border border-border mr-2 align-middle rounded-sm"
    style={{ backgroundColor: color }}
  />
);

const ColorTable: React.FC<{ title: string; colors: ColorData[] }> = ({ title, colors }) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-4 text-foreground">{title}</h2>
    <table className="border-collapse border border-border w-full bg-card text-card-foreground rounded-md overflow-hidden">
      <thead>
        <tr className="bg-muted">
          <th className="border border-border px-3 py-2 text-left">Color Name</th>
          <th className="border border-border px-3 py-2 text-left">Hex</th>
          <th className="border border-border px-3 py-2 text-left">HSL</th>
          <th className="border border-border px-3 py-2 text-left">RGBA</th>
          <th className="border border-border px-3 py-2 text-left">Sample</th>
        </tr>
      </thead>
      <tbody>
        {colors.map((color) => (
          <tr key={color.hex} className="hover:bg-muted/60">
            <td className="border border-border px-3 py-2">{color.name}</td>
            <td className="border border-border px-3 py-2 font-mono text-sm">{color.hex}</td>
            <td className="border border-border px-3 py-2 font-mono text-sm">{color.hsl}</td>
            <td className="border border-border px-3 py-2 font-mono text-sm">{color.rgba}</td>
            <td className="border border-border px-3 py-2">
              <ColorSwatch color={color.hsl} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ColorPalette: React.FC = () => {
  const mainPalette: ColorData[] = [
    {
      name: "Black",
      hex: "#000000",
      hsl: "hsl(0, 0%, 0%)",
      rgba: "rgba(0, 0, 0, 1)"
    },
    {
      name: "White",
      hex: "#ffffff",
      hsl: "hsl(0, 0%, 100%)",
      rgba: "rgba(255, 255, 255, 1)"
    },
    {
      name: "Dark Teal",
      hex: "#004459",
      hsl: "hsl(193, 100%, 17%)",
      rgba: "rgba(0, 68, 89, 1)"
    },
    {
      name: "Medium Teal",
      hex: "#007799",
      hsl: "hsl(193, 100%, 30%)",
      rgba: "rgba(0, 119, 153, 1)"
    },
    {
      name: "Sky Blue",
      hex: "#00a6d6",
      hsl: "hsl(193, 100%, 42%)",
      rgba: "rgba(0, 166, 214, 1)"
    },
    {
      name: "Deep Blue",
      hex: "#005e79",
      hsl: "hsl(193, 100%, 24%)",
      rgba: "rgba(0, 94, 121, 1)"
    }
  ];

  const derivedColors: ColorData[] = [
    {
      name: "Light Background",
      hex: "#f5fafd",
      hsl: "hsl(202, 71%, 97%)",
      rgba: "rgba(245, 250, 253, 1)"
    },
    {
      name: "Card/Panel Shade",
      hex: "#e1eef2",
      hsl: "hsl(195, 38%, 91%)",
      rgba: "rgba(225, 238, 242, 1)"
    },
    {
      name: "Border Accent",
      hex: "#b0cad6",
      hsl: "hsl(199, 29%, 77%)",
      rgba: "rgba(176, 202, 214, 1)"
    },
    {
      name: "Hover Blue",
      hex: "#1bb6f5",
      hsl: "hsl(197, 91%, 53%)",
      rgba: "rgba(27, 182, 245, 1)"
    },
    {
      name: "Soft Teal",
      hex: "#3cb5c6",
      hsl: "hsl(187, 52%, 51%)",
      rgba: "rgba(60, 181, 198, 1)"
    },
    {
      name: "Muted Deep Blue",
      hex: "#004d63",
      hsl: "hsl(193, 100%, 20%)",
      rgba: "rgba(0, 77, 99, 1)"
    },
    {
      name: "Subtle Gray",
      hex: "#e6e8ea",
      hsl: "hsl(210, 7%, 91%)",
      rgba: "rgba(230, 232, 234, 1)"
    },
    {
      name: "Button Blue",
      hex: "#0073a8",
      hsl: "hsl(198, 100%, 33%)",
      rgba: "rgba(0, 115, 168, 1)"
    },
    {
      name: "Overlay Dark",
      hex: "#012634",
      hsl: "hsl(198, 96%, 10%)",
      rgba: "rgba(1, 38, 52, 1)"
    }
  ];

  return (
    <div className="font-sans max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-brand">Color Palette</h1>
      <ColorTable title="Main Palette" colors={mainPalette} />
      <ColorTable title="Derived Colors" colors={derivedColors} />
    </div>
  );
};

export default ColorPalette;
