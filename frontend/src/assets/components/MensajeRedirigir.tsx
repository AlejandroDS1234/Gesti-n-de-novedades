import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { respuestaBackend } from "../../types/types";
import MensajeFlotante from "./MensajeFlotante";
import { AutoOcultar } from "./AutoOcultar";

type MensajeState = respuestaBackend["message"];

interface LocationStateConMensaje {
  mensaje?: MensajeState;
  [claveExtra: string]: unknown; // Permite que vengan otras cosas como 'respuesta'
}

interface MensajeActual {
    mensaje: MensajeState;
    id: number;
}

export default function MensajeRedirigir() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState<MensajeActual | null>(null);
  useEffect(() => {
    const state = location.state as LocationStateConMensaje | null;

    if (state?.mensaje) {
      setMensaje({ mensaje: state.mensaje, id: Date.now() });

      const { mensaje: _descartado, ...restoDelState } = state;
      const hayOtrosDatos = Object.keys(restoDelState).length > 0;
      // Limpia el state de forma segura usando React Router
      navigate(location.pathname, { replace: true, state: hayOtrosDatos ? restoDelState : null });
    }

  }, [location, navigate]);

  if (!mensaje) return null;

  return <AutoOcultar key={mensaje.id} alCerrar={() => setMensaje(null)}><MensajeFlotante mensaje={mensaje.mensaje} /></AutoOcultar>;
}