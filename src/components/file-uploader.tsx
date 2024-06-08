import { useLoalStorage } from "@/hooks/useLocalStorage";
import { apiUrl } from "@/lib";
import React, { useState } from "react";
import { useToast } from "./ui/use-toast";
import ShowResult from "./show-result";

interface FileUploadProps {
  // Add any props here if needed
}
interface PredictionResult {
  class: string;
  confidence: number;
}
const FileUpload: React.FC<FileUploadProps> = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number | string }>({});
  const {toast}=useToast();
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);

  const {getItem}=useLoalStorage("token")
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFileUpload(e.dataTransfer.files);
  };

  const handleFileUpload = (newFiles: FileList | null) => {
    
    if (!newFiles) return;
    setFiles((prevFiles) => [...prevFiles, ...Array.from(newFiles)]);
    setUploading(true);
    const headers={
      Authorization: `Bearer ${getItem()}`,
    }
        Array.from(newFiles).forEach((file) => {
      const formData = new FormData();
      formData.append("file", file);

      fetch(`${apiUrl}/predict`, {
        method: "POST",
        headers,
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            toast({title: "Error uploading file", variant:"destructive"});
          }
          return response.json();
        })
        .then((data) => {
          setUploadProgress((prevProgress) => ({
            ...prevProgress,
            [file.name]: 100,
          }));
          setPrediction(data);
        })
        .catch(() => {
          setUploadProgress((prevProgress) => ({
            ...prevProgress,
            [file.name]: "Error",
          }));
        });
    });

    setUploading(false);
  };

  return (
    <div>
    <section
      id="uploading"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="flex flex-col items-center justify-center h-64 max-w-7xl mx-4 lg:mx-auto border-2 border-dashed border-accent  rounded-lg cursor-pointer bg-transparent"
    >
      <div className="flex flex-col items-center justify-center">
        <UploadIcon className="w-12 h-12 mb-4 text-gray-400" />
        <p className="mb-4 text-gray-500 dark:text-gray-400">
          Drag and drop files here or{" "}
          <button
            type="button"
            className="font-medium text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
            onClick={() => {
              const fileInput = document.createElement("input")
              fileInput.type = "file"
              fileInput.multiple = true
              fileInput.onchange = () => handleFileUpload(fileInput.files)
              fileInput.click()
            }}
          >
            click to select
          </button>
        </p>
        {files.length > 0 && (
          <div className="w-full overflow-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="p-2">File</th>
                  <th className="p-2">Size</th>
                  <th className="p-2">Progress</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file,key) => (
                  <tr key={key} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-2">{file.name}</td>
                    <td className="p-2">{(file.size / 1024 / 1024).toFixed(2)} MB</td>
                    <td className="p-2">
                      {uploading && uploadProgress[file.name] !== undefined ? (
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                          <div
                            className="h-2 bg-primary rounded-full"
                            style={{ width: `${uploadProgress[file.name]}%` }}
                          />
                        </div>
                      ) : uploadProgress[file.name] === "Error" ? (
                        <span className="text-red-500">Error</span>
                      ) : (
                        <span className=" text-primary">done</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
    <ShowResult classR={prediction?.class || ""} confidence={prediction?.confidence.toFixed(2) || ""} />
    </div>
  );
};

export default FileUpload;


function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}