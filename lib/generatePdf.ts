/**
 * Captures the Blueprint DOM element and downloads it as a branded PDF.
 * Uses html2canvas + jspdf; must run in the browser.
 */
export async function downloadBlueprint(elementId: string, siteName: string): Promise<void> {
  if (typeof document === "undefined") return;

  const element = document.getElementById(elementId);
  if (!element) return;

  const [html2canvasModule, jsPDFModule] = await Promise.all([
    import("html2canvas"),
    import("jspdf"),
  ]);
  const html2canvas = html2canvasModule.default;
  const { default: jsPDF } = jsPDFModule;

  const canvas = await html2canvas(element, {
    scale: 2,
    backgroundColor: "#080A08",
    logging: false,
    useCORS: true,
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [canvas.width, canvas.height],
  });

  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
  const safeName = (siteName || "site").replace(/[^a-z0-9.-]/gi, "-").replace(/-+/g, "-");
  pdf.save(`Nodus_Migration_Blueprint_${safeName}.pdf`);
}
