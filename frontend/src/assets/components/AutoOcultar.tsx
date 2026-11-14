import { useEffect, useState, type ReactNode } from "react";

interface AutoOcultarProps {
  children: ReactNode;
  duracion?: number; // Tiempo en milisegundos (opcional)
  alCerrar?: () => void; // Función opcional al terminar
}

export function AutoOcultar({ 
  children, 
  duracion = 4000, 
  alCerrar 
}: AutoOcultarProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setVisible(false);
      if (alCerrar) alCerrar();
    }, duracion);

    // Limpia el temporizador si el componente se desmonta antes de tiempo
    return () => clearTimeout(temporizador);
  }, [duracion, alCerrar]);

  if (!visible) return null;

  return <>{children}</>;
}