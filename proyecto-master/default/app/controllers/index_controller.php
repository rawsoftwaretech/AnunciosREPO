<?php

// Load::model('usuarios');

/**
 * Controller por defecto si no se usa el routes
 *
 */
class IndexController extends AppController {

    protected function before_filter() {
        parent::before_filter();
    }

    public function index() {
       $this->usuarios = (new Usuarios)->getUsuarios();
    }
    
    public function cambiarDatoUsuario($id) {
        View::select(NULL);
        // $id = $this->parameters[0];
        $actualizado = (new Usuarios)->alterarUsuario($id);
        if ($actualizado) {
            Flash::valid('GUAYYYY');
        } else {
            Flash::error('La Cagamos compare');
        }
    }

}
