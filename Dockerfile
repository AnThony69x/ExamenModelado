# Usa una imagen oficial de Python como base
FROM python:3.11-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de requerimientos
COPY requirements.txt .

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto (ajusta si tu app usa otro puerto)
EXPOSE 8000

# Comando para ejecutar la aplicación (ajusta según tu framework)
CMD ["python", "app.py"]