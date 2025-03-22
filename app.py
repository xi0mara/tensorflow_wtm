import streamlit as st
import os

st.set_page_config(page_title="Clasificación de Imágenes con TensorFlow.js", layout="wide")

st.title("Clasificación de Imágenes con TensorFlow.js")

st.markdown("""
Este proyecto muestra cómo se puede utilizar TensorFlow.js para la clasificación de imágenes directamente en el navegador. 🚀  
""")

st.markdown("[Ver proyecto en GitHub](https://github.com/xi0mara/tensorflow_wtm)")

if os.path.exists("index.html"):
    with open("index.html", "r", encoding='utf-8') as f:
        html_content = f.read()
        st.components.v1.html(html_content, height=600, scrolling=True)
else:
    st.error("El archivo 'index.html' no se encontró en la carpeta actual.")
