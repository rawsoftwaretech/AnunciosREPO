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
        
        public function actualizarRenove($idAnuncio) {
            $anuncio = (new Anuncios)->find($idAnuncio);
            $anuncio->ultimoPosicionamiento = time();
            $anuncio->begin();
            if ($anuncio->update()) {
                $anuncio->commit();
                return true;
            } else {
                $anuncio->rollback();
                return false;
            }
        }
	
}
