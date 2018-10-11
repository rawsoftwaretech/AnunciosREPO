<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Anuncios
 *
 * @author Jose
 */
class Anuncios extends ActiveRecord {
    
        
        public function publicarAnuncio($datos){
            if ($this->create($datos)){
                return "Creado correctamente";
            }else{
                return "No se ha podido crear";
            }
        }
        
        public function actualizarRenove(){
            $usuario = Usuarios::find($this->usuarios_id);//MAL, NO ES UN METODO ESTATICO
            $carteraCreditos = CarteraCreditos::find($usuario->carteraCredios_id); //MAL, NO ES UN METODO ESTATICO
            //$album = Album->find(12); ESTO ES UN EJEMPLO DE KUMBIAPHP QUE USANDO AQUI ME PETA :D
            
            if ($carteraCreditos->disponible > 0){
                $this->ultimoPosicionamiento = time();

                if ($this->update()){
                    $carteraCreditos::consumirUno();
                    
                    return "Reposicionado correctamente";
                }else{
                    return "No se ha podido reposicionar";
                }
            }else{
                return "No tienes creditos disponibles";
            }
        }
	
}
