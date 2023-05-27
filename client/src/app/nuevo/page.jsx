"use client";

import { useGlobalContext } from "../context/context";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { AiOutlineCloudUpload } from "react-icons/all";
import axios from "axios";
import moment from "moment/moment";
import "./Nuevo.css";

export default function NuevoPage() {
  const { currentUser } = useGlobalContext();
  const router = useRouter();
  const [dbCats, setDbCats] = useState([]);

  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("");

  if (currentUser === null) {
    router.push("/");
  }

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

  const editorRef = useRef(null);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/posts",
        {
          title,
          desc: editorRef.current.getContent(),
          cat,
          img: file ? "img" : "",
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
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
              onChange={(e) => setFile(e.target.files[0])}
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
            <h2>Categoría</h2>
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
          <div className="add">
            <button onClick={handleClick}>Publicar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
