<?php

class UsuariosController extends AppController {

    protected function before_filter() {
        parent::before_filter();
    }

    public function index() {
        
    }

    
    public function registrar(){
        
    }

    

    public function create(){
        
        if (Input::hasPost('usuarios')){
            
            $usuario = new Usuarios(Input::post('usuarios'));
            if ($usuario->create){
                
                Input::delete();
                
                return;
            }else{
                Flash::error('Falló Operación');
            }
            
            
        }
        
    }

    
    public function iniciarsesion() {
        
    }

    public function cliente() {
        
    }

}
