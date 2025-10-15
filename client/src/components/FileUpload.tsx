import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Card } from "@/components/ui/card";
import { Upload, FileSpreadsheet, FileText } from "lucide-react";
import * as XLSX from "xlsx";
import Papa from "papaparse";
import type { InvestmentData } from "./InvestmentForm";

interface FileUploadProps {
  onDataLoaded: (data: InvestmentData) => void;
}

export default function FileUpload({ onDataLoaded }: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target?.result;
      
      if (file.name.endsWith('.csv')) {
        Papa.parse(data as string, {
          header: true,
          complete: (results: Papa.ParseResult<any>) => {
            const row = results.data[0] as any;
            if (row) {
              onDataLoaded({
                investmentAmount: parseFloat(row.investmentAmount || row.investment || 0),
                expectedReturn: parseFloat(row.expectedReturn || row.return || 0),
                jobsCreated: parseFloat(row.jobsCreated || row.jobs || 0),
                co2Reduced: parseFloat(row.co2Reduced || row.co2 || 0),
                womenEmployed: parseFloat(row.womenEmployed || row.women || 0),
              });
            }
          },
        });
      } else {
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        const row = jsonData[0] as any;
        
        if (row) {
          onDataLoaded({
            investmentAmount: parseFloat(row.investmentAmount || row.investment || 0),
            expectedReturn: parseFloat(row.expectedReturn || row.return || 0),
            jobsCreated: parseFloat(row.jobsCreated || row.jobs || 0),
            co2Reduced: parseFloat(row.co2Reduced || row.co2 || 0),
            womenEmployed: parseFloat(row.womenEmployed || row.women || 0),
          });
        }
      }
    };

    if (file.name.endsWith('.csv')) {
      reader.readAsText(file);
    } else {
      reader.readAsBinaryString(file);
    }
  }, [onDataLoaded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
    },
    multiple: false,
  });

  return (
    <Card className="p-6 backdrop-blur-lg bg-card/80 border-card-border">
      <h3 className="text-lg font-semibold mb-4">Import Data</h3>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300 hover-elevate ${
          isDragActive ? 'border-primary bg-primary/5' : 'border-border'
        }`}
        data-testid="dropzone-file-upload"
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-3">
          <Upload className="w-10 h-10 text-muted-foreground" />
          {isDragActive ? (
            <p className="text-sm text-foreground">Drop the file here...</p>
          ) : (
            <>
              <p className="text-sm font-medium">Drag & drop CSV or Excel file</p>
              <p className="text-xs text-muted-foreground">or click to browse</p>
            </>
          )}
          <div className="flex gap-3 mt-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <FileText className="w-3 h-3" />
              CSV
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <FileSpreadsheet className="w-3 h-3" />
              Excel
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
