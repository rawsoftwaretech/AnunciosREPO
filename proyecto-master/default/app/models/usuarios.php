<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Usuarios
 *
 * @author Usuarios
 */
class Usuarios extends ActiveRecord {
   /* 
    public function registrar(){
        if(true){//Comprobacion de validez de los valores del registro
            if(create()){
                //Se lanza una vista con el mensaje "Registrado con exito", redireccionado a login
                return login($this->nombre, $this->contrasena);
            }else{
                return "No se ha creado correctamente"; //Se lanza una vista con este mensaje
            }
        }else{
            return "Campo no válido"; //Se muestra este mensaje
        }
    }
    
    public function login($nombre, $contrasenya){
	if(exists("nombre: "+$nombre)){
            $usr = find("conditions: nombre="+$nombre);
            if($contrasenya == $usr->contrasena){
                return "Login correcto"; //Lanzar la vista posterior a la instancia de la Session de este usuario
            } else {
                return "Contraseña incorrecta"; //Se lanzara una vista con este mensaje
            }
        }else{
            return "No existe este usuario"; //Se lanzara una vista con este mensaje
        }
    }
    */
    
    public function getUsuarios() {
        return $this->find();
    }
    
    public function alterarUsuario($id) {
        $usuario = $this->find("conditions: id=0");
        $usuario[0]->nombre = 'Ramon';
        return $usuario[0]->update();
    }

}
