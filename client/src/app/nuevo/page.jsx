"use client";

import { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { AiOutlineCloudUpload } from "react-icons/all";
import axios from "axios";
import moment from "moment/moment";
import "./Nuevo.css";
import { useGlobalContext } from "../context/context";

export default function NuevoPage() {
  const [dbCats, setDbCats] = useState([]);
  const [dbTypes, setDbTypes] = useState([]);
  const { currentUser } = useGlobalContext();

  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("");
  const [type, setType] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
      if (
        fileExtension === "jpg" ||
        fileExtension === "jpeg" ||
        fileExtension === "png"
      ) {
        setFile(selectedFile);
      } else {
        setFile(null);
        console.log("Debe seleccionar un archivo valido");
      }
    }
  };

  const upload = async () => {
    if (currentUser === null) return;
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(
        "http://localhost:8080/api/upload",
        formData,
        { credentials: "include", withCredentials: true }
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getCats = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/categories");
        setDbCats(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCats();
  }, []);

  useEffect(() => {
    const getTypes = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/types");
        setDbTypes(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTypes();
  }, []);

  const editorRef = useRef(null);

  const handleClick = async (e) => {
    e.preventDefault();
    if (!file) {
      return console.log("Formato de archivo no valido");
    }
    const imageUrl = await upload();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/posts",
        {
          title,
          desc: editorRef.current.getContent(),
          cat,
          img: imageUrl,
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          type,
        },
        {
          credentials: "include",
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new__page">
      <div className="container">
        <div className="left">
          <input
            type="text"
            placeholder="Título de post"
            id="titulo"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <div className="editor__container">
            <Editor
              apiKey="e8pswfrdzbvx0dn0etpd25g0zasgmd99ehodpcx40g6gxaib"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "image",
                content_style:
                  "body { font-family:Manrope,sans-serif; font-size:14px }",
              }}
            />
          </div>
        </div>
        <div className="right">
          <div className="box">
            <input
              style={{ display: "none" }}
              type="file"
              name="imagen"
              id="imagen"
              onChange={handleFileChange}
              required
            />
            <label
              htmlFor="imagen"
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <AiOutlineCloudUpload style={{ fontSize: "2rem" }} /> Subir imagen
            </label>
          </div>
          <div className="box">
            <h3>Categoría</h3>
            {dbCats &&
              dbCats.map((cat) => (
                <div className="cat" key={cat.id}>
                  <input
                    type="radio"
                    name="cat"
                    value={cat.id}
                    id={cat.value}
                    onChange={(e) => setCat(e.target.value)}
                  />
                  <label htmlFor={cat.value}>{cat.label}</label>
                </div>
              ))}
          </div>
          <div className="box">
            <h3>Tipo</h3>
            {dbTypes &&
              dbTypes.map((type) => (
                <div className="cat" key={type.id}>
                  <input
                    type="radio"
                    name="type"
                    value={type.id}
                    id={type.value}
                    onChange={(e) => setType(e.target.value)}
                  />
                  <label htmlFor={type.value}>{type.label}</label>
                </div>
              ))}
          </div>
          <div className="add">
            <button onClick={handleClick}>Publicar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
