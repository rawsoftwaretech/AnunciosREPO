<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Usuario
 *
 * @author Usuario
 */
class Usuario extends ActiveRecord {
    
	public function verCreditos(){
		$creditos; //query
		return $this;
	}
	
	public function compararPassword($username,$pass) {
		passBD; //query
		return $this->find('order: creat_at desc',
				   "conditions: data <= $today",
				   "limit: $limit");
	}
 
	public function buscar($busqueda){
		$busqueda = filter_var($busqueda, FILTER_SANITIZE_STRING);
		return $this->find_all_by_sql("SELECT * FROM bd.articulos a WHERE MATCH (titulo,texto) 
                                               AGAINST('\"$busqueda\"' IN BOOLEAN MODE) ORDER BY creat_at DESC");
 
	}
}
