import { useEffect, useState } from "react";
const Fotos = (userId) => {
  const [fotos, setFotos] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadFotos = async () => {
      try {
        setloading(true);

        const data = await fotos.getAllPhotos();

        setFotos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setloading(false);
      }
    };
    loadFotos();
  }, [userId]);

  const addFotos = (foto) => {
    setFotos([foto, ...fotos]);
  };

  return { fotos, loading, error, addFoto };
};
export default Fotos;
