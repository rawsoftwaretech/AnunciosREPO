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
    //Consume un crédito
    public function consumirUno(){
        $this->disponible -= 1; //PENDIENTE de verificar
        $this->consumido += 1; //PENDIENTE de verificar        
        
        if($this->update()){
            return "Consumido correctamente";
        }else{
            return "No se ha podido consumir";
        }
    }
	
}
