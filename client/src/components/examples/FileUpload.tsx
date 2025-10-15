import FileUpload from "../FileUpload";

export default function FileUploadExample() {
  const handleDataLoaded = (data: any) => {
    console.log("Data loaded:", data);
  };

  return <FileUpload onDataLoaded={handleDataLoaded} />;
}
