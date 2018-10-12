<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of CarteraCreditos
 *
 * @author Jose
 */
class CarteraCreditos extends ActiveRecord {
    
    // Comprueba el estado de los créditos
    public function comprobarEstadoCreditos() {
        $estadoCreditos = $this->find("conditions: usuarios_id=123"); // Sacar usuario del Oauth
        if ($estadoCreditos->disponible > 0) {
            return $estadoCreditos;
        }
        return false;
    }
    
    // Consume un crédito
    public function consumirUno($idAnuncio) {
        $credito = $this->comprobarEstadoCreditos();
        if ($credito && $credito !== false) {
            $credito->disponible --;
            $credito->consumudo ++;
            $credito->begin();
            if ($credito->update()) {
                $renovar = (new Anuncios)->actualizarRenove($idAnuncio);
                if ($renovar) {
                    $credito->commit();
                } else {
                    $credito->rollback();
                }
            }
        }
    }
    
}
