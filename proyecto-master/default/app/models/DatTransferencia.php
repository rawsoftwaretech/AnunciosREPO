<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of DatTransferencia
 *
 * @author Usuario
 */
class DatTransferencia extends ActiveRecord {
    
        public function registroDatos($datos){
            if ($this->create($datos)){
                return "Creado correctamente";
            }else{
                return "No se ha podido crear";
            }
        }
	
}
