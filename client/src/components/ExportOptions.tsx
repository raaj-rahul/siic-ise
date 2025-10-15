import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Image as ImageIcon, FileText, Share2 } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useToast } from "@/hooks/use-toast";

interface ExportOptionsProps {
  elementId: string;
}

export default function ExportOptions({ elementId }: ExportOptionsProps) {
  const { toast } = useToast();

  const exportAsPNG = async () => {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: '#ffffff',
        scale: 2,
      });
      
      const link = document.createElement('a');
      link.download = 'impact-report.png';
      link.href = canvas.toDataURL();
      link.click();

      toast({
        title: "Success",
        description: "Image exported successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to export image",
        variant: "destructive",
      });
    }
  };

  const exportAsPDF = async () => {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: '#ffffff',
        scale: 2,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('impact-report.pdf');

      toast({
        title: "Success",
        description: "PDF exported successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to export PDF",
        variant: "destructive",
      });
    }
  };

  const shareLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    
    toast({
      title: "Link Copied",
      description: "Shareable link copied to clipboard",
    });
  };

  return (
    <Card className="p-6 backdrop-blur-lg bg-card/80 border-card-border">
      <h3 className="text-lg font-semibold mb-4">Export & Share</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <Button
          variant="outline"
          onClick={exportAsPNG}
          className="flex items-center gap-2"
          data-testid="button-export-png"
        >
          <ImageIcon className="w-4 h-4" />
          PNG
        </Button>
        <Button
          variant="outline"
          onClick={exportAsPDF}
          className="flex items-center gap-2"
          data-testid="button-export-pdf"
        >
          <FileText className="w-4 h-4" />
          PDF
        </Button>
        <Button
          variant="outline"
          onClick={shareLink}
          className="flex items-center gap-2"
          data-testid="button-share-link"
        >
          <Share2 className="w-4 h-4" />
          Share
        </Button>
      </div>
    </Card>
  );
}
