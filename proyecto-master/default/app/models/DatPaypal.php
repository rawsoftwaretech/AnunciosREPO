<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of DatPaypal
 *
 * @author Usuario
 */
class DatPaypal extends ActiveRecord {
    
        public function registroDatos($datos){
            if ($this->create($datos)){
                return "Creado correctamente";
            }else{
                return "No se ha podido crear";
            }
        }
	
}
