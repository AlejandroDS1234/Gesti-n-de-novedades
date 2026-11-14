
function MensajeFlotante({ mensaje }: { mensaje: string }) {
    return (
       <div className="bg-(--blanco) w-60 h-30 border border-(--negro) rounded-2xl flex items-center justify-center p-2">
            <p className="text-(--verde) font-bold text-[15px] text-center">
                {mensaje}
            </p>
        </div>
    )
}

export default MensajeFlotante;