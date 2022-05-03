import React, { useState } from "react";
import { API } from "../util/api/Api.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import swal from 'sweetalert';

let api = new API();

function FileUpload(props) {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const { uploadFlag } = props;
  const { set, get } = uploadFlag;

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = (event) => {
    if (typeof file === "undefined") {
      swal({
        title: "Please select a File",
        icon: "warning",
      })
      return;
    }
    var formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    return new Promise((resolve) => {
      api
        .uploadFile(formData)
        .then((res) => {
          set(!get);
          swal({
            title: res.data.message,
            icon: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div>
      <div className="input-group">
        <input
          type="file"
          className="form-control"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
          onChange={saveFile}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="inputGroupFileAddon04"
          onClick={uploadFile}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default FileUpload;
