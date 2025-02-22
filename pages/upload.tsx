import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

export default function Upload(){
  
const uploader = Uploader({ apiKey: "public_W142iE2AjY4bCXCRYqGsKGyzDAm5" });

return (
    <div className="border border-blue-700">
 <UploadButton uploader={uploader}
                options={{ multi: true }}
                onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
    {({onClick}) =>
      <button onClick={onClick}>
        Upload a file...
      </button>
    }
  </UploadButton>
  </div>
)}
