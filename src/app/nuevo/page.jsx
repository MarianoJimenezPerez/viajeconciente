"use client";

import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { AiOutlineCloudUpload } from "react-icons/all";
import "./Nuevo.css";

export default function NuevoPage() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
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
              required
            />
            <label
              htmlFor="imagen"
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}
            >
              <AiOutlineCloudUpload style={{fontSize: "2rem"}} /> Subir imagen
            </label>
          </div>
          <div className="box">
            <h2>Categoría</h2>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                value={"Tecnología"}
                id="tecnologia"
              />
              <label htmlFor="tecnologia">Tecnología</label>
            </div>

            <div className="cat">
              <input type="radio" name="cat" value={"Ciencia"} id="ciencia" />
              <label htmlFor="ciencia">Ciencia</label>
            </div>

            <div className="cat">
              <input type="radio" name="cat" value={"Viajes"} id="viajes" />
              <label htmlFor="viajes">Viajes</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
