export async function registrarPago(url3,parametrosPOST){
    let respuesta= await fetch(url3,parametrosPOST)
    let global=await respuesta.json()
    return global
}