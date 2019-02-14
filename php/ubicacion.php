<?php
include 'db.php';

if($_GET['accion']=="cargar"){
	$db = new Database();
	$statement = $db->query("SELECT * FROM ubicacion");
	$data = $statement->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($data);
	
}

if($_GET['accion']=="insertar"){
	$db = new Database();
	$sql = "INSERT INTO ubicacion (negocio,latitud,longitud)";
	$sql .= " VALUES ('".$_POST['negocio']."','".$_POST['latitud']."','".$_POST['longitud']."');";
	$statement = $db->query($sql);
	if($statement){
		echo 'done';
	}
	//echo $sql;
	
}

if($_GET['accion']=="recuperar"){
	$db = new Database();
	$statement = $db->query("SELECT latitud,longitud FROM ubicacion where id=".$_GET['id']);
	$data = $statement->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($data);
	
}

?>